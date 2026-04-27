/**
 * Global phone-click tracking.
 *
 * Listens for clicks on any <a href="tel:..."> in the document and fires
 * conversion events for Google Ads, GA4, and Meta Pixel — without needing
 * onClick handlers on each individual button.
 *
 * Conversion action: "Cliques em telefone - Site"
 * Google Ads account: 886-589-3754  (AW-17475363009)
 * Label: GDPvCKvOxqMcEMHB84xB
 *
 * Idempotent — calling initPhoneTracking() multiple times only attaches once.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const GADS_ACCOUNT = 'AW-17475363009';
const PHONE_CLICK_LABEL = 'GDPvCKvOxqMcEMHB84xB';
const PHONE_LEAD_VALUE = 100;

let attached = false;
let currentHandler: ((e: Event) => void) | null = null;

export function initPhoneTracking(): () => void {
  // Defensive: only run in browser, and only once per session.
  if (typeof document === 'undefined' || attached) {
    return () => {};
  }
  attached = true;

  const handler = (e: Event) => {
    const target = e.target as Element | null;
    if (!target) return;

    const link = target.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
    if (!link) return;

    const href = link.getAttribute('href') || '';
    const phone = href.replace(/^tel:/, '');
    const pagePath = window.location.pathname;

    try {
      // Google Ads conversion
      window.gtag?.('event', 'conversion', {
        send_to: `${GADS_ACCOUNT}/${PHONE_CLICK_LABEL}`,
        value: PHONE_LEAD_VALUE,
        currency: 'USD',
      });

      // GA4 custom event for richer reporting (page, phone number)
      window.gtag?.('event', 'phone_click', {
        phone_number: phone,
        page_path: pagePath,
        value: PHONE_LEAD_VALUE,
        currency: 'USD',
      });

      // Meta Pixel Contact event
      window.fbq?.('track', 'Contact', {
        content_name: 'Phone Click',
        content_category: 'Call',
        value: PHONE_LEAD_VALUE,
        currency: 'USD',
      });
    } catch (err) {
      console.warn('Phone tracking error:', err);
    }
  };

  currentHandler = handler;
  document.addEventListener('click', handler, { capture: true });

  return () => {
    if (currentHandler) {
      document.removeEventListener('click', currentHandler, { capture: true });
    }
    currentHandler = null;
    attached = false;
  };
}
