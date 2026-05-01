/**
 * Global phone-click tracking — Meta Pixel only.
 *
 * Listens for clicks on any <a href="tel:..."> in the document and fires
 * the Meta Pixel "Contact" event.
 *
 * NOTE: Google Ads conversion + GA4 phone_click event are now handled by
 * GTM tags ("Conv - Phone Click" + "GA4 - Phone Click"), triggered by
 * "Phone Clicks" (Click URL contains tel:). Removing them from this file
 * avoids double-firing.
 *
 * Idempotent — calling initPhoneTracking() multiple times only attaches once.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

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

    try {
      // Meta Pixel Contact event (Google Ads + GA4 handled by GTM)
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
