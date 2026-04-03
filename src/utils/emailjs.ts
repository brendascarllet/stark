import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = 'ZRltQQTK2lkYAspj3';
const EMAILJS_SERVICE_ID = 'service_74bf6sl';
const EMAILJS_TEMPLATE_ID = 'template_a5qe8zr';

let initialized = false;

function ensureInit() {
  if (!initialized) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    initialized = true;
  }
}

export async function sendLeadEmail(params: Record<string, string>) {
  ensureInit();

  const templateParams = {
    from_name: params.name || params.fullName || '',
    reply_to: params.email || '',
    phone: params.phone || params.phoneNumber || '',
    service: params.service || '',
    address: [params.street, params.city, params.zip, params.zipCode, params.address]
      .filter(Boolean)
      .join(', '),
    message: params.message || '',
    source: params.source || window.location.pathname,
    page_url: window.location.href,
  };

  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
}
