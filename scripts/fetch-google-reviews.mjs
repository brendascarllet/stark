#!/usr/bin/env node
/**
 * Fetch the top Google reviews for Stark Roofing from Google Places API (New)
 * and write them to src/data/googleReviews.json so the site can render them
 * at build time. Runs as a prebuild step, before vite build.
 *
 * Required env vars (set in .env.local and in the deploy platform):
 *   GOOGLE_PLACES_API_KEY — Places API (New) key from Google Cloud Console
 *   GOOGLE_PLACE_ID       — the Place ID for Stark Roofing's Google Business Profile
 *
 * Graceful degradation: if either env var is missing, OR the API call fails,
 * OR the response is malformed, the script logs a warning and EXITS WITH CODE 0
 * so the build never fails because of review fetching. The previously-cached
 * googleReviews.json is left in place — the site continues to render whatever
 * was last fetched successfully.
 *
 * Places API (New) returns at most 5 reviews per place.
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(SCRIPT_DIR, '..');
const OUTPUT_PATH = resolve(ROOT, 'src/data/googleReviews.json');
const FIELD_MASK = 'id,displayName,rating,userRatingCount,reviews';

function log(msg) {
  console.log(`[fetch-google-reviews] ${msg}`);
}

function warn(msg) {
  console.warn(`[fetch-google-reviews] WARN: ${msg}`);
}

function writeOutput(data) {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2) + '\n', 'utf8');
  log(`wrote ${OUTPUT_PATH}`);
}

function loadExistingCache() {
  try {
    if (existsSync(OUTPUT_PATH)) {
      return JSON.parse(readFileSync(OUTPUT_PATH, 'utf8'));
    }
  } catch (e) {
    warn(`could not parse existing cache: ${e.message}`);
  }
  return null;
}

async function main() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    warn('GOOGLE_PLACES_API_KEY and/or GOOGLE_PLACE_ID not set — skipping fetch');
    if (!existsSync(OUTPUT_PATH)) {
      writeOutput({
        fetchedAt: null,
        placeId: null,
        businessName: 'Stark Roofing & Renovation',
        rating: null,
        userRatingCount: null,
        reviews: [],
        source: 'none',
      });
    }
    return 0;
  }

  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
  log(`fetching ${placeId}`);

  try {
    const res = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': FIELD_MASK,
      },
    });

    if (!res.ok) {
      const body = await res.text();
      warn(`HTTP ${res.status}: ${body.slice(0, 400)}`);
      warn('keeping existing cache');
      return 0;
    }

    const json = await res.json();

    const reviews = Array.isArray(json.reviews) ? json.reviews : [];
    const normalized = reviews.map((r) => ({
      author: r.authorAttribution?.displayName ?? 'Google user',
      authorUrl: r.authorAttribution?.uri ?? null,
      authorPhoto: r.authorAttribution?.photoUri ?? null,
      rating: typeof r.rating === 'number' ? r.rating : 5,
      text: r.text?.text ?? r.originalText?.text ?? '',
      languageCode: r.text?.languageCode ?? null,
      publishTime: r.publishTime ?? null,
      relativeTime: r.relativePublishTimeDescription ?? null,
    }));

    // Keep only reviews that have non-empty text and at least 4 stars — we don't
    // want to surface low-rated reviews on the homepage. Low-rated reviews are
    // handled via responding on GBP per the optimization checklist.
    const filtered = normalized.filter((r) => r.text.trim().length > 0 && r.rating >= 4);

    const output = {
      fetchedAt: new Date().toISOString(),
      placeId,
      businessName: json.displayName?.text ?? 'Stark Roofing & Renovation',
      rating: typeof json.rating === 'number' ? json.rating : null,
      userRatingCount: typeof json.userRatingCount === 'number' ? json.userRatingCount : null,
      reviews: filtered,
      source: 'google-places-api-new',
    };

    const existing = loadExistingCache();
    if (filtered.length === 0 && existing?.reviews?.length) {
      warn('fresh fetch returned zero reviews — keeping existing cache');
      return 0;
    }

    writeOutput(output);
    log(`success: ${filtered.length} review(s), rating ${output.rating ?? '?'}/${output.userRatingCount ?? '?'}`);
    return 0;
  } catch (e) {
    warn(`network error: ${e.message}`);
    warn('keeping existing cache');
    return 0;
  }
}

main().catch((e) => {
  warn(`unexpected error: ${e.message}`);
  process.exit(0);
});
