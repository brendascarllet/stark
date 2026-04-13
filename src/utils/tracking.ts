/**
 * Centralized conversion tracking for GA4, Google Ads, and Meta Pixel.
 * All calls are wrapped in try/catch so tracking failures never block forms.
 *
 * Google Ads account 886-589-3754
 * Conversion: "Submit lead form" / Quiz Lead ($50 value)
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLeadSubmission(service?: string) {
  try {
    window.gtag?.('event', 'conversion', {
      send_to: 'AW-17475363009/pgvMCOySjZscEMHB84xB',
      value: 1.0,
      currency: 'USD',
    });
    window.gtag?.('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: service || 'contact_form',
      value: 1,
    });
    window.fbq?.('track', 'Lead', {
      content_name: 'Contact Form',
      content_category: service || 'General',
      value: 1.0,
      currency: 'USD',
    });
  } catch (e) {
    console.warn('Tracking error:', e);
  }
}
