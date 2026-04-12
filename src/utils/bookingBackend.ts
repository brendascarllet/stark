/**
 * Frontend client for the Stark booking backend (Google Apps Script web app).
 *
 * The backend lives in apps-script/Code.gs. It does three things:
 *   1. Adds the booking to Brenda's Google Calendar (and refuses to
 *      double-book — the form hides slots that are already taken).
 *   2. Sends the customer a Google Calendar invite, which their phone turns
 *      into a reminder (the free alternative to a real SMS).
 *   3. Sends Brenda a backup email with the full lead.
 *
 * Both functions in this file are best-effort — if APPS_SCRIPT_URL is empty
 * or the script is unreachable, the form still works (the EmailJS lead/SMS
 * to Brenda still goes through).
 *
 * IMPORTANT — CORS workaround:
 * Google Apps Script web apps reject preflighted requests, so we send POSTs
 * with `text/plain` content type (which avoids CORS preflight) and stringify
 * the body manually. The Apps Script reads `e.postData.contents` directly,
 * so the actual payload format on the wire stays valid JSON.
 */
import { APPS_SCRIPT_URL } from '@/config/booking';

export interface BookingPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  street: string;
  city: string;
  zip: string;
  /** ISO date string of the chosen day (no time) */
  appointmentDate: string;
  /** Pretty time slot label, e.g. "10:00 AM" */
  appointmentTime: string;
  message?: string;
  source?: string;
}

export interface BookingResult {
  ok: boolean;
  /** True when the time slot is already taken on the calendar. */
  conflict?: boolean;
  /** Calendar event ID, when the booking was created successfully. */
  eventId?: string;
  error?: string;
  /** True when there's no backend configured yet — the form should not block on this. */
  skipped?: boolean;
}

export interface BusySlot {
  /** YYYY-MM-DD in the calendar's timezone */
  date: string;
  /** "10:00 AM" style time slot label */
  time: string;
}

/**
 * Submit a booking to the backend. Adds it to the calendar and sends the
 * customer a confirmation text. Returns `{ skipped: true }` when no
 * backend URL is configured (so the caller can ignore it gracefully).
 */
export async function submitBooking(payload: BookingPayload): Promise<BookingResult> {
  if (!APPS_SCRIPT_URL) {
    return { ok: false, skipped: true };
  }

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      // text/plain avoids CORS preflight on Apps Script
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'book', ...payload }),
    });
    const data = (await res.json()) as BookingResult;
    return data;
  } catch (err) {
    console.warn('Booking backend POST failed:', err);
    return { ok: false, error: String(err) };
  }
}

/**
 * Fetch already-booked time slots from the calendar so the form can disable
 * them. Returns an empty list when there's no backend configured or the
 * fetch fails — i.e. the form falls back to showing all slots as available
 * rather than blocking the customer.
 */
export async function fetchBusySlots(daysAhead = 14): Promise<BusySlot[]> {
  if (!APPS_SCRIPT_URL) return [];

  try {
    const url = `${APPS_SCRIPT_URL}?action=busy&days=${daysAhead}`;
    const res = await fetch(url, { method: 'GET' });
    const data = (await res.json()) as { ok: boolean; busy?: BusySlot[] };
    return data.ok && data.busy ? data.busy : [];
  } catch (err) {
    console.warn('Busy slots fetch failed:', err);
    return [];
  }
}
