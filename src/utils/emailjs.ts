import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = 'ZRltQQTK2lkYAspj3';
const EMAILJS_SERVICE_ID = 'service_74bf6sl';
// One template — used for BOTH the email lead AND the text alert.
// We just change the recipient (to_email) on each call.
const EMAILJS_TEMPLATE_ID = 'template_a5qe8zr';

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
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    ...buildTemplateParams(params),
    to_email: LEAD_RECIPIENT,
  });
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
}
