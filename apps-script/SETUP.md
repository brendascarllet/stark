# Stark Booking Backend — Setup Guide

Hi Brenda — this guide gets all three pieces working **for free**, using your existing Google Workspace account:

1. ✅ Customer gets a friendly confirmation email *(your existing EmailJS template — already done!)*
2. ✅ Customer gets a Google Calendar invite that goes straight to their phone with reminders *(via Apps Script)*
3. ✅ Bookings land on your Google Calendar — and double-bookings are blocked *(via Apps Script)*

**Total cost: $0/month.** Total setup time: ~15 minutes.

> 💬 **About the customer "text message":** Instead of a real SMS, the customer gets a **Google Calendar invite** to their email — and modern phones turn that invite into an automatic reminder (with the time, address, and your phone number). It works just like a text alert, lives in their calendar app, and is free forever.

---

## Part A — Customer email (already done ✅)

You already have both EmailJS templates created:

| Template | ID | Purpose |
|---|---|---|
| Lead Notification | `template_a5qe8zr` | Office gets the lead alert + your phone gets the SMS gateway alert |
| Customer Auto-Reply | `template_7111g1d` | Customer gets the friendly "we got you!" email |

The website is now wired to send to **both** automatically. There's just one thing to double-check:

### A1. Verify your customer template uses the right variables

Open your Customer Auto-Reply template in EmailJS dashboard and make sure the **To Email** field is set to:

```
{{to_email}}
```

Without that, the email won't know where to go.

### A2. (Optional) Use the variables we send

The website now sends a **lot** of variables to the template, so you can use any of these in your email body:

| Variable | What it is | Example |
|---|---|---|
| `{{name}}` or `{{first_name}}` | Customer's name | "Sarah" |
| `{{customer_name}}` | Customer's first name | "Sarah" |
| `{{service}}` | What they booked | "Roof Repair" |
| `{{appointment_date}}` | Pretty date | "Tuesday, Apr 15, 2026" |
| `{{appointment_time}}` | Time slot | "10:00 AM" |
| `{{address}}` | Full address | "123 Main St, Bellevue, 98004" |
| `{{message}}` | Their notes | "Gate code is 1234" |
| `{{office_phone}}` | Your phone | "(206) 739-8232" |
| `{{owner_name}}` | Your name | "Brenda Scarllet" |
| `{{logo_url}}` | Stark logo image URL | (auto) |
| `{{mascot_url}}` | Mascot image URL | (auto) |

You don't have to use all of them — just the ones your existing template references. Anything you don't use is silently ignored.

### A3. Want to spruce up the customer email?

If you want a really nice HTML email body, here's a copy-paste-ready template you can use. Open your "Customer Auto-Reply" in EmailJS, switch to **HTML mode**, and replace the body with this:

```html
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-family: -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f7f7f9; padding: 24px 0;">
  <tr>
    <td align="center">
      <table cellpadding="0" cellspacing="0" border="0" width="560" style="background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">

        <tr>
          <td style="background: #001F3F; padding: 28px 32px; text-align: center;">
            <img src="{{logo_url}}" alt="Stark Roofing & Renovation" width="160" style="display: inline-block; max-width: 60%;">
          </td>
        </tr>

        <tr>
          <td style="padding: 36px 32px 12px 32px; text-align: center;">
            <img src="{{mascot_url}}" alt="" width="100" style="display: inline-block; margin-bottom: 16px;">
            <h1 style="margin: 0 0 6px 0; color: #001F3F; font-size: 26px;">You're booked, {{customer_name}}! 🎉</h1>
            <p style="margin: 0; color: #666; font-size: 16px;">
              We just got your request — and we couldn't be more excited to take a look at your roof.
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding: 24px 32px;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #fff8e1; border: 1px solid #ffe082; border-radius: 10px;">
              <tr>
                <td style="padding: 18px 22px;">
                  <p style="margin: 0 0 6px 0; font-size: 11px; color: #8a6d00; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 700;">Your Appointment</p>
                  <p style="margin: 0; color: #001F3F; font-size: 18px; font-weight: 700;">{{appointment_date}}<br>at {{appointment_time}}</p>
                  <p style="margin: 10px 0 0 0; color: #555; font-size: 14px;">📍 {{address}}<br>🛠️ Service: {{service}}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding: 8px 32px 20px 32px;">
            <h2 style="margin: 0 0 12px 0; color: #001F3F; font-size: 18px;">Here's what happens next:</h2>
            <ol style="margin: 0; padding-left: 22px; color: #444; font-size: 15px; line-height: 1.6;">
              <li><strong>You'll get a calendar invite</strong> in this same inbox — accept it and your phone will remind you on the day.</li>
              <li><strong>The morning of your visit</strong>, I'll text you the technician's name and ETA.</li>
              <li><strong>After the inspection</strong>, you get photos and a clear written quote — no high-pressure sales pitch, ever.</li>
            </ol>
          </td>
        </tr>

        <tr>
          <td style="padding: 0 32px 24px 32px;">
            <p style="margin: 0; color: #444; font-size: 15px; line-height: 1.6;">
              Hey {{customer_name}} — I'm Brenda, the owner. I started Stark because I was tired of seeing folks in the Puget Sound get pressured into work they didn't need. <strong>You'll never get that from us.</strong> If your roof is fine, I'll tell you it's fine.
            </p>
            <p style="margin: 14px 0 0 0; color: #444; font-size: 15px; line-height: 1.6;">
              If anything changes between now and {{appointment_date}}, just reply to this email or call us at <a href="tel:+12067398232" style="color: #CC0000; text-decoration: none; font-weight: 600;">{{office_phone}}</a> — we're real people on the other end.
            </p>
            <p style="margin: 18px 0 0 0; color: #001F3F; font-size: 15px;">
              Talk soon,<br>
              <strong>{{owner_name}}</strong><br>
              <span style="color: #666; font-size: 13px;">Owner, Stark Roofing &amp; Renovation</span>
            </p>
          </td>
        </tr>

        <tr>
          <td style="background: #001F3F; padding: 22px 32px; text-align: center;">
            <a href="tel:+12067398232" style="display: inline-block; background: #CC0000; color: #ffffff; text-decoration: none; padding: 12px 26px; border-radius: 8px; font-weight: 700; font-size: 15px;">📞 {{office_phone}}</a>
            <p style="margin: 14px 0 0 0; color: rgba(255,255,255,0.7); font-size: 12px;">GAF Certified · 30+ Years · 2,000+ Roofs · Licensed &amp; Bonded WA</p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
```

Save the template. Done.

---

## Part B — Calendar + automatic customer notifications (Google Apps Script — FREE)

This is the part that does the heavy lifting:

- ✅ Adds every booking to your Google Calendar
- ✅ Stops the form from offering time slots that are already taken
- ✅ Sends the customer a **Google Calendar invite** (which is what gives them the phone reminder — works like an SMS but free)
- ✅ Sends you a backup email with the full lead

**Cost: $0.** Uses your existing Google Workspace account.

### B1. Create the Apps Script

1. Go to https://script.google.com (sign in with **office@starkroofingrenovation.com** since that's the calendar bookings should land on)
2. Click **+ New Project**
3. Delete the default `function myFunction() { ... }` placeholder
4. In your website project, open the file `apps-script/Code.gs`
5. Copy **everything** from that file
6. Paste it into the Apps Script editor
7. The `CONFIG` block at the top is already filled in correctly for you — leave it alone.
8. Click the **Save** icon (or `Cmd + S`). Name the project **"Stark Booking Backend"**.

### B2. Deploy as a Web App

1. Click **Deploy → New deployment**
2. Click the gear icon next to "Select type" → choose **Web app**
3. Fill in:
   - **Description:** `Stark booking endpoint v1`
   - **Execute as:** `Me (office@starkroofingrenovation.com)`
   - **Who has access:** `Anyone`
4. Click **Deploy**
5. Google will ask you to **Authorize access** — click through:
   - Pick your Stark Google account
   - You may see a "Google hasn't verified this app" warning — that's normal for personal scripts. Click **Advanced → Go to Stark Booking Backend (unsafe)**
   - Click **Allow** — it needs Calendar + Gmail access
6. After deploy succeeds, **copy the Web App URL**. It looks like:
   ```
   https://script.google.com/macros/s/AKfycbz................../exec
   ```

> 💡 **Workspace admin note:** If you're the admin of your Google Workspace (you almost certainly are, for a small business), no extra approval is needed. If your IT person manages Workspace, they may need to allow the script — but the request is quick.

### B3. Connect the website

1. Open the file `src/config/booking.ts` in the website project
2. Paste the URL between the empty quotes:

```typescript
export const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz.../exec';
```

3. Save the file
4. Build and deploy the site as you normally would

### B4. Test it end to end

1. Open your live site
2. Go through the booking form with your own info (use a real email so you can see the experience the customer gets)
3. Within 30 seconds you should see:
   - ✅ The booking on your Google Calendar at office@starkroofingrenovation.com
   - ✅ The office lead email + your existing SMS gateway alert (already worked)
   - ✅ The friendly confirmation email in your inbox (Customer Auto-Reply)
   - ✅ A **Google Calendar invite** in your inbox — accept it and it shows up in your phone's calendar app with reminders
4. Now go book again at the **same time slot** — the form should refuse and say "That time slot was just booked by someone else"

If anything doesn't work, check the Apps Script logs:
**script.google.com → your project → Executions** (left sidebar) → click the failed run → read the error.

---

## How the calendar invite works on the customer's end

When the customer accepts the invite (one tap from their inbox), the appointment lands in their phone's calendar app. The calendar then **reminds them automatically** — typically 30 minutes before, then again 10 minutes before.

The invite includes:
- Date and time
- Full address (with one-tap directions in Maps)
- Your phone number (with one-tap call)
- Their service type
- Any notes they left

It lives in their calendar, doesn't get buried in their text history, and never costs you anything.

---

## Troubleshooting

| Problem | Cause | Fix |
|---|---|---|
| Form submits but nothing on calendar | `APPS_SCRIPT_URL` is blank in `src/config/booking.ts` | Paste the Web App URL from B2 |
| Calendar event lands on the wrong calendar | Wrong Google account when deploying | Re-deploy from office@starkroofingrenovation.com, or paste a calendar ID into `CALENDAR_ID` |
| Customer email doesn't arrive | Template ID mismatch in EmailJS | Double-check it's exactly `template_7111g1d` in your EmailJS dashboard |
| Customer email arrives but variables are blank | Template uses different variable names | The website sends every common name (`{{name}}`, `{{customer_name}}`, `{{first_name}}`, etc.) — pick one your template uses |
| All time slots show as available even when busy | Apps Script error | Check **Executions** in Apps Script editor |
| EmailJS quota errors | Hit 200/month free limit | Upgrade EmailJS to $11/mo (1,000 sends) — or just use Apps Script's `MailApp.sendEmail` instead, which is free |

---

## What's connected to what

```
Customer fills the form
        │
        ▼
┌───────────────────────────────────────────┐
│  src/components/shared/QuickQuoteForm.tsx │
└───────────────┬───────────────────────────┘
                │
   ┌────────────┼─────────────┬───────────────────┐
   │            │             │                   │
   ▼            ▼             ▼                   ▼
Apps Script   EmailJS      EmailJS            (Existing
backend       Lead         Customer            SMS gateway
(Code.gs)     Notification Auto-Reply          to Brenda's
              template_    template_           phone via
              a5qe8zr      7111g1d             email)
   │            │             │                   │
   │            ▼             ▼                   ▼
   │         Office       Customer's           Brenda's
   │         inbox        inbox                phone
   │
   ├──▶ Add to Google Calendar (with conflict check)
   ├──▶ Send Google Calendar invite to customer (= phone reminder)
   └──▶ Backup email to office
```

If any single piece breaks, the others still work.
