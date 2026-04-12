/**
 * ============================================================================
 *  Stark Roofing & Renovation — Booking Backend (Google Apps Script Web App)
 * ============================================================================
 *
 *  Brenda — this single file gives the website everything it needs to handle
 *  bookings, for free, using your Google Workspace:
 *
 *    1. Adds every booking to YOUR Google Calendar at office@starkroofingrenovation.com
 *    2. Refuses double-bookings — the form hides time slots that are already taken
 *    3. Sends the customer a Google Calendar invite (their phone turns it into a
 *       reminder, just like a text alert — but free)
 *    4. Sends you a backup email with the full lead details
 *
 *  How to deploy this:
 *      1. Open https://script.google.com
 *      2. Click "New Project"
 *      3. Replace the default Code.gs with the contents of THIS file
 *      4. Click "Deploy" → "New deployment" → type: "Web app"
 *           - "Execute as": Me (office@starkroofingrenovation.com)
 *           - "Who has access": Anyone
 *      5. Copy the Web App URL it gives you
 *      6. Paste that URL into:
 *             src/config/booking.ts → APPS_SCRIPT_URL
 *      7. Done. The form is now connected.
 *
 *  Full step-by-step setup is in apps-script/SETUP.md.
 * ============================================================================
 */

// ─── CONFIG ────────────────────────────────────────────────────────────────
// The defaults below are correct for Stark — no edits needed for the standard
// setup. Only touch this block if you want to change durations, switch the
// calendar, or rebrand the office details.
var CONFIG = {
  // Which Google Calendar should bookings land on?
  // Use 'primary' for your main calendar, OR paste a calendar ID like:
  //   "abc123@group.calendar.google.com"
  CALENDAR_ID: 'primary',

  // The default duration of every appointment, in minutes.
  // (Free inspections take ~30 mins on-site + travel padding.)
  APPOINTMENT_DURATION_MIN: 60,

  // The timezone the form's "10:00 AM" labels should be interpreted in.
  TIMEZONE: 'America/Los_Angeles',

  // Office details — used in the backup email to Brenda.
  OFFICE_PHONE: '(206) 739-8232',
  OFFICE_EMAIL: 'office@starkroofingrenovation.com',
  OWNER_NAME: 'Brenda',
  COMPANY: 'Stark Roofing & Renovation',
};

// ─── PUBLIC ENDPOINTS ───────────────────────────────────────────────────────

/**
 * POST handler — called by the website when a customer submits the form.
 * Body (JSON): { name, email, phone, service, street, city, zip,
 *                appointmentDate (ISO), appointmentTime (label),
 *                message, source }
 *
 * Returns: { ok, conflict?, eventId?, error? }
 */
function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents || '{}');
    var action = body.action || 'book';

    if (action === 'book') {
      return jsonResponse(handleBooking(body));
    }
    return jsonResponse({ ok: false, error: 'Unknown action: ' + action });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

/**
 * GET handler — called by the form to fetch already-booked time slots so it
 * can hide them. Pass ?action=busy&days=14 (defaults to next 14 days).
 *
 * Returns: { ok, busy: [{ date: 'YYYY-MM-DD', time: '10:00 AM' }, ...] }
 */
function doGet(e) {
  try {
    var params = e && e.parameter ? e.parameter : {};
    var action = params.action || 'busy';

    if (action === 'busy') {
      var days = parseInt(params.days || '14', 10);
      return jsonResponse({ ok: true, busy: getBusySlots(days) });
    }
    if (action === 'health') {
      return jsonResponse({ ok: true, message: 'Stark booking backend live' });
    }
    return jsonResponse({ ok: false, error: 'Unknown action: ' + action });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

// ─── BOOKING HANDLER ────────────────────────────────────────────────────────

function handleBooking(data) {
  // Build a real Date for the appointment slot
  var startDate = parseAppointmentDateTime(data.appointmentDate, data.appointmentTime);
  if (!startDate) {
    return { ok: false, error: 'Could not parse appointment date/time' };
  }
  var endDate = new Date(startDate.getTime() + CONFIG.APPOINTMENT_DURATION_MIN * 60 * 1000);

  // ── 1. Conflict check — refuse to double-book ──
  var calendar =
    CONFIG.CALENDAR_ID === 'primary'
      ? CalendarApp.getDefaultCalendar()
      : CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);

  var existing = calendar.getEvents(startDate, endDate);
  if (existing && existing.length > 0) {
    return {
      ok: false,
      conflict: true,
      error: 'That time slot is already booked. Please pick another time.',
    };
  }

  // ── 2. Create the calendar event ──
  var fullAddress = [data.street, data.city, data.zip].filter(Boolean).join(', ');
  var title = '🏠 ' + (data.service || 'Inspection') + ' — ' + (data.name || 'Lead');

  var description = [
    'New booking from the Stark Roofing website',
    '',
    'Customer: ' + (data.name || ''),
    'Phone: ' + (data.phone || ''),
    'Email: ' + (data.email || ''),
    'Service: ' + (data.service || ''),
    'Address: ' + fullAddress,
    '',
    'Notes: ' + (data.message || '(none)'),
    'Source page: ' + (data.source || '/'),
  ].join('\n');

  var event = calendar.createEvent(title, startDate, endDate, {
    description: description,
    location: fullAddress,
    guests: data.email || undefined, // sends a calendar invite to the customer
    sendInvites: !!data.email,
  });

  // Tag the event with a popup reminder so Brenda doesn't miss it
  try {
    event.addPopupReminder(60); // 1 hour before
  } catch (_) {}

  // ── 3. Send Brenda a backup email with the full lead ──
  try {
    sendOwnerNotification(data, startDate, fullAddress);
  } catch (_) {}

  return {
    ok: true,
    eventId: event.getId(),
  };
}

// ─── BUSY SLOTS — used by the form to hide already-taken times ─────────────

function getBusySlots(daysAhead) {
  var calendar =
    CONFIG.CALENDAR_ID === 'primary'
      ? CalendarApp.getDefaultCalendar()
      : CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);

  var now = new Date();
  var until = new Date(now.getTime() + daysAhead * 24 * 60 * 60 * 1000);
  var events = calendar.getEvents(now, until);

  var slots = [];
  events.forEach(function (ev) {
    var start = ev.getStartTime();
    var end = ev.getEndTime();
    // For each hourly slot the event covers, mark it busy
    var cursor = new Date(start);
    cursor.setMinutes(0, 0, 0);
    while (cursor < end) {
      slots.push({
        date: Utilities.formatDate(cursor, CONFIG.TIMEZONE, 'yyyy-MM-dd'),
        time: formatHourLabel(cursor),
      });
      cursor = new Date(cursor.getTime() + 60 * 60 * 1000);
    }
  });
  return slots;
}

// ─── BACKUP EMAIL TO BRENDA ─────────────────────────────────────────────────

function sendOwnerNotification(data, startDate, fullAddress) {
  var apptStr = Utilities.formatDate(startDate, CONFIG.TIMEZONE, "EEEE, MMM d 'at' h:mm a");
  var subject = '📅 New booking — ' + (data.service || 'Inspection') + ' — ' + (data.name || '');
  var body =
    "You have a new booking from the website:\n\n" +
    'Customer:    ' + (data.name || '') + '\n' +
    'Phone:       ' + (data.phone || '') + '\n' +
    'Email:       ' + (data.email || '') + '\n\n' +
    'Service:     ' + (data.service || '') + '\n' +
    'Appointment: ' + apptStr + '\n' +
    'Address:     ' + fullAddress + '\n\n' +
    'Notes: ' + (data.message || '(none)') + '\n\n' +
    'Page: ' + (data.source || '/') + '\n' +
    '\n— stark booking bot';

  MailApp.sendEmail(CONFIG.OFFICE_EMAIL, subject, body);
}

// ─── HELPERS ────────────────────────────────────────────────────────────────

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

/**
 * Parse the appointment slot into a real Date.
 * `dateInput` can be either an ISO string ("2026-04-15T00:00:00.000Z") or a
 * pretty string like "Tuesday, Apr 15, 2026".
 * `timeInput` is a label like "10:00 AM", "1:00 PM", etc.
 */
function parseAppointmentDateTime(dateInput, timeInput) {
  if (!dateInput || !timeInput) return null;

  var dateOnly;
  if (/^\d{4}-\d{2}-\d{2}/.test(dateInput)) {
    // Already ISO-ish
    dateOnly = new Date(dateInput);
  } else {
    // Try Date.parse on the pretty string
    var ts = Date.parse(dateInput);
    if (isNaN(ts)) return null;
    dateOnly = new Date(ts);
  }

  // Parse "10:00 AM" / "1:00 PM"
  var match = String(timeInput).match(/(\d{1,2}):(\d{2})\s*([AaPp][Mm])/);
  if (!match) return null;
  var hour = parseInt(match[1], 10);
  var minute = parseInt(match[2], 10);
  var meridiem = match[3].toUpperCase();
  if (meridiem === 'PM' && hour < 12) hour += 12;
  if (meridiem === 'AM' && hour === 12) hour = 0;

  // Build a date in the configured timezone
  var ymd = Utilities.formatDate(dateOnly, CONFIG.TIMEZONE, 'yyyy-MM-dd');
  var iso = ymd + 'T' + pad2(hour) + ':' + pad2(minute) + ':00';

  // Apps Script doesn't have great TZ-aware constructors; build via Utilities
  var pretty = Utilities.formatDate(
    new Date(iso),
    Session.getScriptTimeZone(),
    "yyyy-MM-dd'T'HH:mm:ssXXX",
  );
  return new Date(pretty);
}

function formatHourLabel(d) {
  var h = d.getHours();
  var meridiem = h >= 12 ? 'PM' : 'AM';
  var hour12 = h % 12 === 0 ? 12 : h % 12;
  return hour12 + ':00 ' + meridiem;
}

function pad2(n) {
  return n < 10 ? '0' + n : '' + n;
}
