import emailjs from '@emailjs/browser';
import { trackLeadSubmission } from './tracking';

const EMAILJS_PUBLIC_KEY = 'ZRltQQTK2lkYAspj3';
const EMAILJS_SERVICE_ID = 'service_74bf6sl';

// ── Template 1: internal lead alert (already exists) ──
// Sends the full lead details to the office (and to Brenda's phone via the
// Google Fi email-to-SMS gateway). Routed by setting `to_email` per call.
const EMAILJS_TEMPLATE_ID = 'template_a5qe8zr';

// ── Template 2: customer auto-reply ──
// Brenda already has this template set up in the EmailJS dashboard as
// "Customer Auto-Reply". It's the friendly "we got your request" email the
// customer receives. If the variable names below ever drift from what the
// template uses, the email still sends — the unmatched variables just stay
// blank in the rendered output.
const EMAILJS_CUSTOMER_TEMPLATE_ID = 'template_7111g1d';

// ============================================================================
// ONE-TEMPLATE SETUP — works on EmailJS free plan (2 templates max)
// ----------------------------------------------------------------------------
// We use a single EmailJS template for both the full email lead and the SMS
// notification, by passing different `to_email` values on each send call.
//
// 👉 ONE-TIME SETUP IN EMAILJS DASHBOARD (https://dashboard.emailjs.com):
//
//   1. Open your existing template (template_a5qe8zr).
//   2. In the "To Email" field, change it from your hardcoded address to:
//        {{to_email}}
//      (this lets us route the same template to either inbox or phone gateway)
//
//   3. In the template body, paste this content (works as both email & SMS):
//
//        Subject: New {{service}} Lead — {{from_name}}
//
//        New lead from Stark Roofing website:
//
//        Name: {{from_name}}
//        Phone: {{phone}}
//        Email: {{reply_to}}
//        Service: {{service}}
//        Address: {{address}}
//        Appointment: {{appointment_date}} at {{appointment_time}}
//
//        Notes: {{message}}
//        Page: {{page_url}}
//
//   4. Save the template.
//
//   5. (Optional) If you have a 2nd unused template in your dashboard, you can
//      DELETE it now to free up your slot. The code only needs this one.
//
//   6. To turn on text alerts, set SMS_RECIPIENT below to your number @ your
//      mobile carrier's email-to-SMS gateway:
//        Verizon:     2067398232@vtext.com
//        AT&T:        2067398232@txt.att.net
//        T-Mobile:    2067398232@tmomail.net
//        Sprint:      2067398232@messaging.sprintpcs.com
//        US Cellular: 2067398232@email.uscc.net
//
// Until SMS_RECIPIENT is filled in, sendLeadSms() is a no-op — the email lead
// still goes through normally, so the form is never blocked.
// ============================================================================
const LEAD_RECIPIENT = 'office@starkroofingrenovation.com'; // full email lead
const SMS_RECIPIENT = '2067398232@msg.fi.google.com'; // Google Fi SMS gateway

let initialized = false;

function ensureInit() {
  if (!initialized) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    initialized = true;
  }
}

function buildTemplateParams(params: Record<string, string>) {
  return {
    from_name: params.name || params.fullName || '',
    reply_to: params.email || '',
    phone: params.phone || params.phoneNumber || '',
    service: params.service || '',
    address: [params.street, params.city, params.zip, params.zipCode, params.address]
      .filter(Boolean)
      .join(', '),
    appointment_date: params.appointmentDate || params.appointment_date || 'Not scheduled',
    appointment_time: params.appointmentTime || params.appointment_time || 'Not scheduled',
    message: params.message || '',
    source: params.source || window.location.pathname,
    page_url: window.location.href,
  };
}

export async function sendLeadEmail(params: Record<string, string>) {
  ensureInit();
  const result = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    ...buildTemplateParams(params),
    to_email: LEAD_RECIPIENT,
  });
  trackLeadSubmission(params.service);
  return result;
}

export async function sendLeadSms(params: Record<string, string>) {
  if (!SMS_RECIPIENT) {
    // SMS not configured yet — see setup notes at top of this file.
    return null;
  }
  ensureInit();
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    ...buildTemplateParams(params),
    to_email: SMS_RECIPIENT,
  });
}

/**
 * Sends both the email lead and the SMS notification in parallel.
 * The email send is required (will throw on failure); the SMS is best-effort
 * (failures are logged but don't break the form submission).
 */
export async function sendLeadEmailAndSms(params: Record<string, string>) {
  const emailPromise = sendLeadEmail(params);
  const smsPromise = sendLeadSms(params).catch((err) => {
    console.warn('SMS notification failed (lead email still sent):', err);
    return null;
  });
  await Promise.all([emailPromise, smsPromise]);
  // trackLeadSubmission is now called inside sendLeadEmail — no duplicate needed
}

// ============================================================================
// CUSTOMER CONFIRMATION EMAIL — sent TO the customer's inbox
// ----------------------------------------------------------------------------
// This is the friendly "we got your request" email the customer receives
// after submitting the booking form. It uses a separate EmailJS template
// (EMAILJS_CUSTOMER_TEMPLATE_ID) so its tone, branding, and "from" name
// can be customer-facing rather than internal.
//
// Variables consumed by the template:
//   {{to_email}}         — customer's email (set automatically below)
//   {{customer_name}}    — customer's first name (used for greeting)
//   {{customer_full}}    — customer's full name
//   {{service}}          — chosen service (e.g., "Roof Repair")
//   {{appointment_date}} — pretty date string
//   {{appointment_time}} — time slot string
//   {{address}}          — full street/city/zip
//   {{message}}          — the customer's optional notes
//   {{office_phone}}     — Brenda's office line
//   {{office_email}}     — Brenda's office inbox
//   {{owner_name}}       — "Brenda Scarllet"
//   {{logo_url}}         — absolute URL of the logo (works in any inbox)
//   {{mascot_url}}       — absolute URL of the mascot
//
// Best-effort: if the template doesn't exist yet (because Brenda hasn't
// created it in the EmailJS dashboard), the call fails silently and the
// rest of the form submission continues normally.
// ============================================================================
function buildCustomerParams(params: Record<string, string>) {
  const fullName = params.name || params.fullName || '';
  const firstName = fullName.trim().split(/\s+/)[0] || 'there';
  const dateStr = params.appointmentDate || params.appointment_date || '';
  const timeStr = params.appointmentTime || params.appointment_time || '';
  const fullAddress = [params.street, params.city, params.zip, params.zipCode, params.address]
    .filter(Boolean)
    .join(', ');
  const origin =
    typeof window !== 'undefined' ? window.location.origin : 'https://starkroofingrenovation.com';

  // We send a SUPERSET of variable names because we don't know exactly which
  // ones Brenda's "Customer Auto-Reply" template uses. Any unused vars are
  // simply ignored by EmailJS. This way the email renders correctly whether
  // her template references {{name}}, {{customer_name}}, {{from_name}}, etc.
  return {
    // Routing
    to_email: params.email || '',
    reply_to: 'office@starkroofingrenovation.com',

    // Customer name — every common variant
    name: fullName,
    full_name: fullName,
    customer_name: firstName,
    customer_full: fullName,
    first_name: firstName,
    from_name: fullName,

    // Service
    service: params.service || 'Free Inspection',

    // Appointment date — every common variant
    date: dateStr,
    time: timeStr,
    appointment: dateStr ? `${dateStr} at ${timeStr}` : '',
    appointment_date: dateStr || 'to be confirmed',
    appointment_time: timeStr || '',

    // Address
    address: fullAddress,
    street: params.street || '',
    city: params.city || '',
    zip: params.zip || params.zipCode || '',

    // Notes / message
    message: params.message || '',
    notes: params.message || '',

    // Office details
    phone: '(206) 739-8232',
    office_phone: '(206) 739-8232',
    office_email: 'office@starkroofingrenovation.com',
    company: 'Stark Roofing & Renovation',
    owner: 'Brenda Scarllet',
    owner_name: 'Brenda Scarllet',

    // Image URLs (absolute, work in any inbox)
    logo_url: `${origin}/stark-logo-rebrand.png`,
    mascot_url: `${origin}/stark_mascot.png`,
  };
}

export async function sendCustomerConfirmation(params: Record<string, string>) {
  if (!params.email) return null; // no inbox, nothing to send
  ensureInit();
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_CUSTOMER_TEMPLATE_ID,
    buildCustomerParams(params),
  );
}
