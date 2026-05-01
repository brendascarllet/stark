/**
 * Centralized conversion tracking for GA4, Google Ads, and Meta Pixel.
 * All calls are wrapped in try/catch so tracking failures never block forms.
 *
 * Google Ads account 886-589-3754
 * Conversion: "Submit lead form" / Quiz Lead (dynamic value by service)
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type Attribution = {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  landingPage?: string;
  referrer?: string;
};

export type UserData = {
  email?: string;
  phone?: string;
  zip?: string;
};

const ATTR_KEY = 'stark_attribution';
const CLICK_ID_KEY = 'stark_click_ids';
const CLICK_ID_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

/** Map service type to estimated lead value for Smart Bidding. */
export function getLeadValue(service?: string): number {
  if (!service) return 100;
  const s = service.toLowerCase();
  if (s.includes('replacement') || s.includes('re-roof') || s.includes('new roof')) return 150;
  if (s.includes('repair') || s.includes('leak')) return 75;
  if (s.includes('storm') || s.includes('commercial') || s.includes('tpo')) return 100;
  // Gutters, siding, windows, skylights, cleaning
  if (s.includes('gutter') || s.includes('siding') || s.includes('window') || s.includes('skylight')) return 80;
  return 100;
}

/** Persist click IDs in localStorage with a 30-day TTL. */
function saveClickIds(ids: Record<string, string>) {
  try {
    const entry = { ids, expires: Date.now() + CLICK_ID_TTL_MS };
    localStorage.setItem(CLICK_ID_KEY, JSON.stringify(entry));
  } catch { /* localStorage unavailable */ }
}

/** Retrieve click IDs from localStorage if not expired. */
function loadClickIds(): Record<string, string> {
  try {
    const raw = localStorage.getItem(CLICK_ID_KEY);
    if (!raw) return {};
    const entry = JSON.parse(raw);
    if (entry.expires && entry.expires < Date.now()) {
      localStorage.removeItem(CLICK_ID_KEY);
      return {};
    }
    return entry.ids || {};
  } catch {
    return {};
  }
}

// Capture attribution once on first landing. Preserves original entry point
// across internal navigation by storing in sessionStorage. Click IDs also
// persist in localStorage for 30 days so cross-session returns still attribute.
export function captureAttribution(): Attribution {
  try {
    const existing = sessionStorage.getItem(ATTR_KEY);
    if (existing) return JSON.parse(existing);

    const params = new URLSearchParams(window.location.search);
    const savedClicks = loadClickIds();

    const gclid = params.get('gclid') || savedClicks.gclid || undefined;
    const gbraid = params.get('gbraid') || savedClicks.gbraid || undefined;
    const wbraid = params.get('wbraid') || savedClicks.wbraid || undefined;
    const fbclid = params.get('fbclid') || savedClicks.fbclid || undefined;

    const attr: Attribution = {
      gclid,
      gbraid,
      wbraid,
      fbclid,
      utmSource: params.get('utm_source') || undefined,
      utmMedium: params.get('utm_medium') || undefined,
      utmCampaign: params.get('utm_campaign') || undefined,
      utmTerm: params.get('utm_term') || undefined,
      utmContent: params.get('utm_content') || undefined,
      landingPage: window.location.pathname + window.location.search,
      referrer: document.referrer || undefined,
    };

    sessionStorage.setItem(ATTR_KEY, JSON.stringify(attr));

    // Persist click IDs to localStorage for cross-session attribution
    const freshClicks: Record<string, string> = {};
    if (gclid) freshClicks.gclid = gclid;
    if (gbraid) freshClicks.gbraid = gbraid;
    if (wbraid) freshClicks.wbraid = wbraid;
    if (fbclid) freshClicks.fbclid = fbclid;
    if (Object.keys(freshClicks).length) saveClickIds(freshClicks);

    return attr;
  } catch {
    return {};
  }
}

export function getAttribution(): Attribution {
  try {
    const stored = sessionStorage.getItem(ATTR_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // fall through
  }
  return captureAttribution();
}

export function trackLeadSubmission(
  service?: string,
  formType?: string,
  _userData?: UserData,
) {
  // Google Ads conversion + Meta Lead + Enhanced Conversions are fired on the
  // /thank-you page only (see ThankYou.tsx). This function only fires the GA4
  // funnel-analytics event "lead_form_submitted" (NOT a conversion).
  try {
    const value = getLeadValue(service);

    window.gtag?.('event', 'lead_form_submitted', {
      event_category: 'engagement',
      event_label: service || 'contact_form',
      form_type: formType || 'unknown',
      value,
    });
  } catch (e) {
    console.warn('Tracking error:', e);
  }
}
