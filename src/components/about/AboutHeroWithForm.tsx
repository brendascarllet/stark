/**
 * AboutHeroWithForm
 * ─────────────────
 * About-page hero. Two-column layout:
 *   • Left  — portrait of Brenda Scarllet (owner) with name plate + trust badges
 *   • Right — full QuickQuoteForm card so visitors can book without scrolling
 *
 * Replaces the old full-bleed ServicePageHero + below-the-fold form combo.
 * On mobile the two columns stack: photo first, then form.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Award, Star, CheckCircle2 } from 'lucide-react';
import QuickQuoteForm from '@/components/shared/QuickQuoteForm';

const AboutHeroWithForm: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* ── Background: dark blurred aerial + cinematic gradient ── */}
      <div className="absolute inset-0">
        <img
          src="/hero-custom-sammamish.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover scale-110 blur-sm"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(8,12,24,0.92) 0%, rgba(8,12,24,0.78) 50%, rgba(8,12,24,0.92) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-1.5 text-white/50 text-xs tracking-widest uppercase mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="hover:text-white/80 transition-colors">
            Home
          </a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/70">About Us</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* ─────────────  LEFT — portrait + name plate  ───────────── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            {/* Badge chip */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-white border border-white/20 backdrop-blur-sm bg-stark-red/25">
                <span className="w-1.5 h-1.5 rounded-full bg-stark-red animate-pulse" />
                GAF CERTIFIED · FAMILY-OWNED · PUGET SOUND
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-extrabold text-white leading-[1.05] tracking-tight font-heading drop-shadow-2xl mb-4">
              Meet <span className="text-stark-red">Brenda Scarllet</span>
              <br />
              Owner of Stark Roofing
            </h1>

            <div className="h-[3px] w-16 bg-stark-red rounded-full mb-5" />

            <p className="text-base md:text-lg text-white/80 font-medium max-w-xl mb-8">
              Stark Roofing &amp; Renovation is a GAF Certified contractor with
              over 30 years of experience and 2,000+ roofs installed across the
              Greater Seattle area.
            </p>

            {/* Photo + floating name plate */}
            <div className="relative max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/15">
                <img
                  src="/brenda-scarllet-owner.jpg"
                  alt="Brenda Scarllet — Owner of Stark Roofing & Renovation"
                  className="w-full h-auto object-cover"
                />
                {/* subtle bottom gradient for legibility of name plate */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

                {/* Name plate overlaid bottom-left */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-heading font-bold text-xl leading-tight drop-shadow-lg">
                    Brenda Scarllet
                  </p>
                  <p className="text-white/80 text-xs uppercase tracking-widest font-semibold drop-shadow">
                    Owner · Stark Roofing & Renovation
                  </p>
                </div>
              </div>

              {/* Floating "GAF Certified" sticker */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="hidden md:flex absolute -top-4 -right-4 bg-white rounded-full shadow-2xl px-4 py-3 flex-col items-center w-24 h-24 justify-center text-center"
              >
                <Shield className="w-5 h-5 text-stark-red mb-0.5" />
                <span className="text-[10px] font-extrabold text-navy leading-tight">
                  GAF
                  <br />
                  CERTIFIED
                </span>
              </motion.div>
            </div>

            {/* Trust row under photo */}
            <div className="flex items-center gap-4 mt-6 text-xs md:text-sm text-white/75 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Shield size={14} className="text-stark-red" /> GAF Certified
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <Award size={14} className="text-stark-red" /> 30+ Years
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <Star size={14} className="text-stark-red fill-stark-red" /> 2,000+ Roofs
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-stark-red" /> Licensed &amp; Bonded WA
              </span>
            </div>
          </motion.div>

          {/* ─────────────  RIGHT — booking form card  ───────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            id="contact"
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.45)] border border-white/10 overflow-hidden">
              {/* Form header strip */}
              <div className="px-6 pt-6 pb-4 border-b border-gray-100 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy">
                  Free Inspection — Meet Us In Person
                </h2>
                <p className="text-charcoal/70 text-sm md:text-base mt-1">
                  30 minutes, on your roof, no pressure. Pick a time below.
                </p>
              </div>

              <div className="min-h-[460px]">
                <QuickQuoteForm defaultService="inspection" />
              </div>
            </div>

            <p className="text-center text-xs text-white/70 mt-4">
              Prefer to talk? Call{' '}
              <a
                href="tel:+12067398232"
                className="text-white font-semibold underline underline-offset-2"
              >
                (206) 739-8232
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-stark-red to-transparent" />
    </section>
  );
};

export default AboutHeroWithForm;
