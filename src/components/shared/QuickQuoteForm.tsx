import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { format } from 'date-fns';
import {
  Home,
  Wrench,
  CloudLightning,
  Sun,
  Layers,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  Shield,
  Calendar as CalendarIcon,
  Clock,
} from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { sendLeadEmailAndSms } from '@/utils/emailjs';

const SERVICES = [
  { value: 'roof-replacement', label: 'Roof Replacement', icon: Home, sub: 'Full re-roof — 25 to 50 yr warranty' },
  { value: 'roof-repair', label: 'Roof Repair', icon: Wrench, sub: 'Leaks, missing shingles, flashing' },
  { value: 'storm-damage', label: 'Storm Damage / Insurance', icon: CloudLightning, sub: "We deal with your insurance for you" },
  { value: 'skylight', label: 'Skylight Install or Replace', icon: Sun, sub: 'VELUX certified — no leaks guaranteed' },
  { value: 'gutters-siding', label: 'Gutters / Siding / Windows', icon: Layers, sub: 'James Hardie & Andersen certified' },
  { value: 'inspection', label: "Not Sure — Free Inspection", icon: HelpCircle, sub: "We'll come look, no pressure" },
] as const;

// Available appointment slots. Anything outside this range simply doesn't
// appear, which is what makes earlier hours look "already booked".
// - Mon–Fri: 10am–5pm (8 one-hour slots, last appointment ends at 6pm)
// - Saturday: 10am–3pm only (anything after 3pm = customer must call)
// - Sunday: blocked entirely (customer must call)
const ALL_TIME_SLOTS = [
  { value: '10:00 AM', label: '10:00 AM', hour: 10 },
  { value: '11:00 AM', label: '11:00 AM', hour: 11 },
  { value: '12:00 PM', label: '12:00 PM', hour: 12 },
  { value: '1:00 PM', label: '1:00 PM', hour: 13 },
  { value: '2:00 PM', label: '2:00 PM', hour: 14 },
  { value: '3:00 PM', label: '3:00 PM', hour: 15 },
  { value: '4:00 PM', label: '4:00 PM', hour: 16 },
  { value: '5:00 PM', label: '5:00 PM', hour: 17 },
] as const;

// Saturday cap: last bookable slot is 3:00 PM. After that, customer calls.
const SATURDAY_LAST_HOUR = 15;

function getSlotsForDate(date: Date | undefined) {
  if (!date) return ALL_TIME_SLOTS;
  // Saturday = 6
  if (date.getDay() === 6) {
    return ALL_TIME_SLOTS.filter((s) => s.hour <= SATURDAY_LAST_HOUR);
  }
  return ALL_TIME_SLOTS;
}

const phoneRegex = /^[\d\s()+\-.]{10,}$/;

// Auto-format US phone as (206) 555-1234 while user types.
function formatPhoneInput(raw: string) {
  const digits = raw.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const schema = z.object({
  service: z.string().min(1, { message: 'Pick a service to continue' }),
  // Service-specific extras (all optional at the schema level — UI shows them conditionally)
  skylightCount: z.string().optional(),
  skylightType: z.string().optional(), // 'replace' | 'new'
  insuranceClaimStatus: z.string().optional(), // 'filed' | 'not-filed' | 'need-help'
  street: z.string().min(3, { message: "What's the street address?" }),
  city: z.string().min(2, { message: 'Which city?' }),
  zip: z.string().min(5, { message: 'A 5-digit ZIP, please' }),
  appointmentDate: z.date({ required_error: 'Pick a day that works' }),
  appointmentTime: z.string().min(1, { message: 'Pick a time slot' }),
  name: z.string().min(2, { message: 'Your full name' }),
  phone: z.string().regex(phoneRegex, { message: 'A 10-digit phone number' }),
  email: z.string().email({ message: 'A valid email so we can confirm' }),
  okToText: z.boolean().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

interface QuickQuoteFormProps {
  /** Pre-select a service (e.g. "skylight" when opened from the Skylights page) */
  defaultService?: string;
  /** Called after a successful submission so the parent can close the modal */
  onSuccess?: () => void;
}

const QuickQuoteForm: React.FC<QuickQuoteFormProps> = ({ defaultService, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      service: defaultService || '',
      skylightCount: '',
      skylightType: '',
      insuranceClaimStatus: '',
      street: '',
      city: '',
      zip: '',
      appointmentDate: undefined,
      appointmentTime: '',
      name: '',
      phone: '',
      email: '',
      okToText: true,
      message: '',
    },
  });

  const watchedService = form.watch('service');
  const watchedDate = form.watch('appointmentDate');

  // Per-step field lists for partial validation
  const stepFields: Record<number, (keyof FormValues)[]> = {
    1: ['service'],
    2: ['street', 'city', 'zip'],
    3: ['appointmentDate', 'appointmentTime'],
    4: ['name', 'phone', 'email'],
  };

  const TOTAL_STEPS = 4;

  const goNext = async () => {
    const valid = await form.trigger(stepFields[step]);
    if (valid) setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  };

  const goBack = () => setStep((s) => Math.max(1, s - 1));

  // Disable past dates, today (no same-day bookings), and Sundays
  const disabledDays = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);
    if (checkDate <= today) return true; // past + today
    if (date.getDay() === 0) return true; // Sunday
    return false;
  };

  const onSubmit = async (values: FormValues) => {
    try {
      const serviceLabel = SERVICES.find((s) => s.value === values.service)?.label || values.service;

      // Compose extra context into the message field so it lands in the email/SMS
      const extras: string[] = [];
      if (values.service === 'skylight') {
        if (values.skylightCount) extras.push(`Skylights: ${values.skylightCount}`);
        if (values.skylightType) extras.push(`Type: ${values.skylightType}`);
      }
      if (values.service === 'storm-damage' && values.insuranceClaimStatus) {
        extras.push(`Insurance claim: ${values.insuranceClaimStatus}`);
      }
      if (values.okToText) extras.push('OK to text');
      if (values.message) extras.push(`Notes: ${values.message}`);

      const appointmentDateStr = values.appointmentDate
        ? format(values.appointmentDate, 'EEEE, MMM d, yyyy')
        : '';

      await sendLeadEmailAndSms({
        name: values.name,
        email: values.email,
        phone: values.phone,
        service: serviceLabel,
        street: values.street,
        city: values.city,
        zip: values.zip,
        appointmentDate: appointmentDateStr,
        appointmentTime: values.appointmentTime,
        message: extras.join(' | '),
        source: window.location.pathname,
      });

      setSubmitted(true);
      toast.success("Got it! We'll reach out shortly.");
      // Give the user a beat to see the success state, then let parent close.
      setTimeout(() => {
        onSuccess?.();
      }, 2200);
    } catch (err) {
      console.error('QuickQuoteForm submission error:', err);
      toast.error('Something went wrong. Please call (206) 739-8232 or try again.');
    }
  };

  // ============ SUCCESS STATE ============
  if (submitted) {
    const apptDate = form.getValues('appointmentDate');
    const apptTime = form.getValues('appointmentTime');
    const apptStr = apptDate ? `${format(apptDate, 'EEEE, MMM d')} at ${apptTime}` : '';
    return (
      <div className="flex flex-col items-center text-center py-10 px-6">
        <div className="bg-green-100 rounded-full p-4 mb-4">
          <Check size={40} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">You're booked!</h3>
        <p className="text-charcoal/80 mb-1">
          Thanks {form.getValues('name').split(' ')[0]} — we got your request.
        </p>
        {apptStr && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 my-4">
            <p className="text-xs uppercase tracking-wide text-amber-800 font-semibold mb-1">Your appointment</p>
            <p className="text-navy font-semibold">{apptStr}</p>
          </div>
        )}
        <p className="text-charcoal/80 mb-6">
          We'll text you to confirm shortly. If anything changes, just reply to the text.
        </p>
        <p className="text-sm text-charcoal/60">
          Need us sooner? Call <a href="tel:+12067398232" className="text-stark-red font-semibold">(206) 739-8232</a>
        </p>
      </div>
    );
  }

  // ============ FORM ============
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col h-full"
      >
        {/* Persistent reassurance strip — shown on every step */}
        <div className="flex items-center justify-center gap-3 px-6 pt-3 pb-1 text-[11px] text-charcoal/70 font-medium flex-wrap">
          <span className="flex items-center gap-1"><Check size={12} className="text-green-600" /> 100% Free</span>
          <span className="text-charcoal/30">•</span>
          <span className="flex items-center gap-1"><Check size={12} className="text-green-600" /> No obligation</span>
          <span className="text-charcoal/30">•</span>
          <span className="flex items-center gap-1"><Check size={12} className="text-green-600" /> Same-week openings</span>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 px-6 pt-2 pb-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                n === step ? 'w-8 bg-stark-red' : n < step ? 'w-6 bg-stark-red/50' : 'w-6 bg-gray-200'
              }`}
            />
          ))}
          <span className="ml-2 text-xs text-charcoal/60 font-medium">Step {step} of {TOTAL_STEPS}</span>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-4">
          {/* ============ STEP 1: SERVICE ============ */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-navy">What do you need?</h3>
                <p className="text-sm text-charcoal/70">Pick the closest match — we'll figure out the rest on the call.</p>
              </div>
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-1 gap-2">
                      {SERVICES.map(({ value, label, icon: Icon, sub }) => {
                        const selected = field.value === value;
                        return (
                          <button
                            key={value}
                            type="button"
                            onClick={() => field.onChange(value)}
                            className={`flex items-center gap-3 text-left p-4 rounded-lg border-2 transition-all ${
                              selected
                                ? 'border-stark-red bg-stark-red/5'
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                          >
                            <div
                              className={`p-2 rounded-md ${
                                selected ? 'bg-stark-red text-white' : 'bg-gray-100 text-charcoal/70'
                              }`}
                            >
                              <Icon size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-navy text-sm">{label}</div>
                              <div className="text-xs text-charcoal/60 truncate">{sub}</div>
                            </div>
                            {selected && <Check size={18} className="text-stark-red flex-shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                    <FormMessage className="mt-2" />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* ============ STEP 2: ADDRESS + SERVICE EXTRAS ============ */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-navy">Where's the property?</h3>
                <p className="text-sm text-charcoal/70">We serve King, Snohomish, and Pierce counties.</p>
              </div>

              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St" autoComplete="street-address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Bellevue" autoComplete="address-level2" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ZIP</FormLabel>
                      <FormControl>
                        <Input placeholder="98004" inputMode="numeric" autoComplete="postal-code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Service-aware extras */}
              {watchedService === 'skylight' && (
                <div className="space-y-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="text-xs font-semibold text-amber-900 uppercase tracking-wide">Skylight details</div>
                  <FormField
                    control={form.control}
                    name="skylightCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">How many skylights?</FormLabel>
                        <div className="flex gap-2 flex-wrap">
                          {['1', '2', '3', '4+'].map((n) => {
                            const selected = field.value === n;
                            return (
                              <button
                                key={n}
                                type="button"
                                onClick={() => field.onChange(n)}
                                className={`px-4 py-2 rounded-lg border-2 text-sm font-medium ${
                                  selected ? 'border-stark-red bg-stark-red/5 text-stark-red' : 'border-gray-200 bg-white'
                                }`}
                              >
                                {n}
                              </button>
                            );
                          })}
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="skylightType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">New or replacement?</FormLabel>
                        <div className="flex gap-2">
                          {[
                            { v: 'new', l: 'New install' },
                            { v: 'replace', l: 'Replace existing' },
                            { v: 'unsure', l: 'Not sure' },
                          ].map(({ v, l }) => {
                            const selected = field.value === v;
                            return (
                              <button
                                key={v}
                                type="button"
                                onClick={() => field.onChange(v)}
                                className={`px-3 py-2 rounded-lg border-2 text-sm font-medium ${
                                  selected ? 'border-stark-red bg-stark-red/5 text-stark-red' : 'border-gray-200 bg-white'
                                }`}
                              >
                                {l}
                              </button>
                            );
                          })}
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {watchedService === 'storm-damage' && (
                <div className="space-y-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-xs font-semibold text-blue-900 uppercase tracking-wide">Insurance status</div>
                  <FormField
                    control={form.control}
                    name="insuranceClaimStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Have you filed a claim yet?</FormLabel>
                        <div className="flex gap-2 flex-wrap">
                          {[
                            { v: 'filed', l: 'Yes, filed' },
                            { v: 'not-filed', l: 'Not yet' },
                            { v: 'need-help', l: 'I need help with it' },
                          ].map(({ v, l }) => {
                            const selected = field.value === v;
                            return (
                              <button
                                key={v}
                                type="button"
                                onClick={() => field.onChange(v)}
                                className={`px-3 py-2 rounded-lg border-2 text-sm font-medium ${
                                  selected ? 'border-stark-red bg-stark-red/5 text-stark-red' : 'border-gray-200 bg-white'
                                }`}
                              >
                                {l}
                              </button>
                            );
                          })}
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
          )}

          {/* ============ STEP 3: SCHEDULE ============ */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-navy">Pick a day &amp; time</h3>
                <p className="text-sm text-charcoal/70">
                  About 30 minutes. We measure, take photos, and email you a written quote — no high-pressure pitch.
                </p>
              </div>

              <FormField
                control={form.control}
                name="appointmentDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <CalendarIcon size={14} /> Choose a day
                    </FormLabel>
                    <div className="rounded-lg border bg-white p-2 flex justify-center">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          // reset time when day changes
                          form.setValue('appointmentTime', '');
                        }}
                        disabled={disabledDays}
                        fromDate={new Date()}
                        className="pointer-events-auto"
                      />
                    </div>
                    <p className="text-[11px] text-charcoal/60 mt-1">
                      Mon–Fri until 6 PM · Sat until 4 PM · Sun by phone only
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {watchedDate && (
                <FormField
                  control={form.control}
                  name="appointmentTime"
                  render={({ field }) => {
                    const slots = getSlotsForDate(watchedDate);
                    const isSaturday = watchedDate.getDay() === 6;
                    return (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5">
                          <Clock size={14} /> Pick a time slot
                        </FormLabel>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                          {slots.map(({ value, label }) => {
                            const selected = field.value === value;
                            return (
                              <button
                                key={value}
                                type="button"
                                onClick={() => field.onChange(value)}
                                className={`px-2 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                                  selected
                                    ? 'border-stark-red bg-stark-red/5 text-stark-red'
                                    : 'border-gray-200 bg-white text-charcoal/80 hover:border-gray-300'
                                }`}
                              >
                                {label}
                              </button>
                            );
                          })}
                        </div>
                        {isSaturday ? (
                          <p className="text-[11px] text-amber-700 mt-1.5 bg-amber-50 border border-amber-200 rounded px-2 py-1.5">
                            <strong>Saturday:</strong> only morning slots online. For after 3 PM, please call{' '}
                            <a href="tel:+12067398232" className="font-semibold underline">(206) 739-8232</a>
                          </p>
                        ) : (
                          <p className="text-[11px] text-charcoal/60 mt-1">
                            Available 10:00 AM – 6:00 PM
                          </p>
                        )}
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              )}
            </div>
          )}

          {/* ============ STEP 4: CONTACT ============ */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-navy">How do we reach you?</h3>
                <p className="text-sm text-charcoal/70">We'll text first — quicker than playing phone tag.</p>
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" autoComplete="name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="(206) 555-1234"
                        inputMode="tel"
                        autoComplete="tel"
                        {...field}
                        onChange={(e) => field.onChange(formatPhoneInput(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@email.com" autoComplete="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="okToText"
                render={({ field }) => (
                  <FormItem>
                    <label className="flex items-center gap-2 text-sm text-charcoal/80 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className="h-4 w-4 rounded accent-stark-red"
                      />
                      OK to text me at this number
                    </label>
                  </FormItem>
                )}
              />

              <p className="text-[11px] text-charcoal/60 leading-snug">
                <Shield size={11} className="inline mr-1 -mt-0.5" />
                We never share or sell your info. Used only to confirm your appointment.
              </p>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-charcoal/70">Anything else? (optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us anything that helps — gate code, photos to expect, etc."
                        className="min-h-[70px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          )}
        </div>

        {/* Sticky footer with nav buttons */}
        <div className="border-t bg-white px-6 py-4 space-y-3">
          <div className="flex gap-3">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={goBack} className="flex-1">
                <ArrowLeft size={16} className="mr-1" /> Back
              </Button>
            )}
            {step < TOTAL_STEPS ? (
              <Button type="button" variant="stark-red" onClick={goNext} className="flex-1">
                Next <ArrowRight size={16} className="ml-1" />
              </Button>
            ) : (
              <Button type="submit" variant="stark-red" className="flex-1" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Sending...' : 'Confirm My Appointment'}
              </Button>
            )}
          </div>

          {/* Trust strip */}
          <div className="flex items-center justify-center gap-3 text-[11px] text-charcoal/60 flex-wrap">
            <span className="flex items-center gap-1"><Shield size={12} /> GAF Certified</span>
            <span>•</span>
            <span>30+ Years</span>
            <span>•</span>
            <span>Licensed &amp; Bonded WA</span>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default QuickQuoteForm;
