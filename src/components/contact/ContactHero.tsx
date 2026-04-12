import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, Clock, MapPin, ChevronRight } from 'lucide-react';

/**
 * Contact page hero.
 * Replaces the previous "Let's Talk" hero with a real action-oriented hero
 * that gives visitors 4 clear ways to reach Stark, plus business hours
 * and a "what happens next" expectation strip.
 */
const ContactHero = () => {
  const quickContact = [
    {
      Icon: Phone,
      label: 'Call',
      value: '(206) 739-8232',
      sub: 'Fastest — picked up live during office hours',
      href: 'tel:+12067398232',
    },
    {
      Icon: MessageSquare,
      label: 'Text',
      value: '(206) 739-8232',
      sub: "Send a photo of the issue, we'll reply fast",
      href: 'sms:+12067398232',
    },
    {
      Icon: Mail,
      label: 'Email',
      value: 'office@starkroofing\u200brenovation.com',
      sub: 'For documents, claims & quotes',
      href: 'mailto:office@starkroofingrenovation.com',
    },
    {
      Icon: ChevronRight,
      label: 'Book Online',
      value: 'Pick a Day & Time',
      sub: '60-second form, confirmed by text',
      href: '#book-contact',
    },
  ];

  return (
    <section className="relative bg-navy overflow-hidden pt-28 md:pt-32 pb-14 md:pb-16">
      {/* Background image with strong dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/ea006abb-9eda-4581-bc18-f64c4bf9d2c0.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy/90" />
      </div>

      {/* Subtle dot pattern accent */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Headline */}
        <div className="max-w-3xl mx-auto text-center text-white mb-10 md:mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-stark-red/20 border border-stark-red/40 backdrop-blur-sm mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-stark-red animate-pulse" />
            We text back within minutes
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Talk to a Real Person.
            <span className="block text-stark-red">Today.</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            No call centers, no overseas reps, no waiting on hold. You'll talk to
            someone in our Sammamish office — usually Lilian or Mayara — who knows
            every job we have on the calendar.
          </motion.p>
        </div>

        {/* Quick contact cards — 4 ways to reach us */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55 }}
        >
          {quickContact.map(({ Icon, label, value, sub, href }) => (
            <motion.a
              key={label}
              href={href}
              className="group flex flex-col p-5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/15 hover:border-stark-red/50 transition-all"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-stark-red/20 group-hover:bg-stark-red transition-colors">
                  <Icon size={18} className="text-white" />
                </div>
                <span className="text-xs uppercase tracking-wider text-white/60 font-bold">
                  {label}
                </span>
              </div>
              <div className="text-white font-bold text-base leading-tight mb-1 break-words">
                {value}
              </div>
              <div className="text-xs text-white/60 leading-snug">{sub}</div>
            </motion.a>
          ))}
        </motion.div>

        {/* Hours + location strip */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-white/75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
        >
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-stark-red" /> Mon–Fri 7am–7pm · Sat 8am–4pm
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-stark-red" /> 24243 SE 43rd Ct, Sammamish WA
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <Phone size={14} className="text-stark-red" /> Emergency line: 24/7
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
