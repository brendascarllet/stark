#!/usr/bin/env node
/**
 * Prerender every URL listed in public/sitemap.xml into a real static HTML
 * file under dist/, so GitHub Pages serves them with HTTP 200 (not the SPA
 * 404.html fallback). This is the fix for "Not found (404)" warnings in
 * Google Search Console for pages that exist in the React app but had no
 * matching static file.
 *
 * Pipeline:
 *   1. vite build (run before this script) produces dist/
 *   2. spawn `vite preview` to serve dist/ locally with SPA fallback
 *   3. parse public/sitemap.xml for the canonical list of URLs
 *   4. for each path, drive puppeteer to that URL, wait for the React app
 *      to settle, capture full rendered HTML
 *   5. after every page is captured, flush each one to dist/<path>/index.html
 *      (buffered so a freshly written file can't pollute later renders)
 *   6. tear down preview server
 */

import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const PORT = 4173;
const HOST = '127.0.0.1';
const ORIGIN = `http://${HOST}:${PORT}`;
const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(SCRIPT_DIR, '..');
const DIST = resolve(ROOT, 'dist');
const SITEMAP = resolve(ROOT, 'public', 'sitemap.xml');

const log = (msg) => console.log(`[prerender] ${msg}`);

// ---------------------------------------------------------------------------
// 1. Parse sitemap → list of pathnames to prerender
// ---------------------------------------------------------------------------
function getPathsFromSitemap() {
  const xml = readFileSync(SITEMAP, 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const paths = locs.map((loc) => new URL(loc).pathname || '/');
  // Deduplicate while preserving order
  return [...new Set(paths)];
}

// ---------------------------------------------------------------------------
// 2. Spawn vite preview and wait until it's accepting connections
// ---------------------------------------------------------------------------
function startServer() {
  return new Promise((resolvePromise, rejectPromise) => {
    const proc = spawn(
      'npx',
      ['vite', 'preview', '--host', HOST, '--port', String(PORT), '--strictPort'],
      { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'] }
    );

    let resolved = false;
    const onData = (chunk) => {
      const text = chunk.toString();
      process.stdout.write(text);
      if (!resolved && (text.includes('Local:') || text.includes(`${HOST}:${PORT}`))) {
        resolved = true;
        resolvePromise(proc);
      }
    };
    proc.stdout.on('data', onData);
    proc.stderr.on('data', (chunk) => process.stderr.write(chunk));
    proc.on('exit', (code) => {
      if (!resolved) rejectPromise(new Error(`vite preview exited early with code ${code}`));
    });

    // Hard timeout — if it never says "Local:" within 30s, give up
    setTimeout(() => {
      if (!resolved) {
        proc.kill('SIGTERM');
        rejectPromise(new Error('vite preview did not start within 30s'));
      }
    }, 30_000);
  });
}

// ---------------------------------------------------------------------------
// 3. Render a single path with puppeteer
// ---------------------------------------------------------------------------
async function renderPath(browser, pathname) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  // Block analytics + tracking pixels — no need to fire them during the
  // build crawl, and they slow networkidle down significantly.
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const url = req.url();
    const blocked =
      url.includes('googletagmanager.com') ||
      url.includes('google-analytics.com') ||
      url.includes('connect.facebook.net') ||
      url.includes('facebook.com/tr') ||
      url.includes('cdn.gpteng.co');
    if (blocked) req.abort();
    else req.continue();
  });

  // Surface JS errors so a broken page fails the build instead of silently
  // shipping an empty prerendered shell.
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto(ORIGIN + pathname, { waitUntil: 'networkidle2', timeout: 60_000 });
  // useEffect-driven meta tags need a microtask to settle after networkidle
  await new Promise((r) => setTimeout(r, 400));

  const html = await page.content();
  await page.close();

  if (errors.length) {
    throw new Error(`page errors on ${pathname}:\n  ${errors.join('\n  ')}`);
  }
  // Sanity check: every prerendered page should have content inside #root
  if (!/<div id="root">[\s\S]*?<\S/.test(html)) {
    throw new Error(`empty #root on ${pathname} — did the React app render?`);
  }
  return html;
}

// ---------------------------------------------------------------------------
// 4. Map a pathname to its on-disk index.html location
// ---------------------------------------------------------------------------
function pathToFile(pathname) {
  if (pathname === '/' || pathname === '') return resolve(DIST, 'index.html');
  const trimmed = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  return resolve(DIST, trimmed, 'index.html');
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
const paths = getPathsFromSitemap();
log(`${paths.length} paths to render`);

log('starting vite preview…');
const server = await startServer();

let browser;
const renders = new Map(); // path → html (buffered, flushed after crawl)
let failed = 0;

try {
  browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  });

  for (const pathname of paths) {
    try {
      const html = await renderPath(browser, pathname);
      renders.set(pathname, html);
      log(`✓ ${pathname}`);
    } catch (err) {
      failed++;
      console.error(`[prerender] ✗ ${pathname}: ${err.message}`);
      console.error(`[prerender]   stack: ${err.stack?.split('\n').slice(1, 3).join(' | ')}`);
    }
  }
} finally {
  if (browser) await browser.close().catch(() => {});
  server.kill('SIGTERM');
}

// Flush captured HTML to disk only after the crawl is complete, so that a
// freshly written /foo/index.html cannot affect a later render.
for (const [pathname, html] of renders) {
  const file = pathToFile(pathname);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

log(`wrote ${renders.size} files; ${failed} failed`);
if (failed > 0) process.exit(1);
