/**
 * AboutHeroWithForm
 * ─────────────────
 * About-page hero. Two-column layout:
 *   • Left  — copy block: badge, headline, accent line, body, trust strip
 *   • Right — portrait of Brenda Scarllet (owner) with name plate + GAF sticker
 *
 * The booking form lives in the OurStory section below (id="contact").
 * On mobile the two columns stack: copy first, then photo.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Award, Star, CheckCircle2 } from 'lucide-react';

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

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
          {/* ─────────────  LEFT — copy block  ───────────── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative text-left"
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

            {/* Trust row */}
            <div className="flex items-center gap-4 text-xs md:text-sm text-white/75 flex-wrap">
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

          {/* ─────────────  RIGHT — Brenda's portrait  ───────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="relative justify-self-center lg:justify-self-end w-full max-w-md"
          >
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
                  Owner · Stark Roofing &amp; Renovation
                </p>
              </div>
            </div>

            {/* Floating "GAF Certified" sticker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hidden md:flex absolute top-3 right-3 bg-white rounded-full shadow-2xl px-4 py-3 flex-col items-center w-24 h-24 justify-center text-center"
            >
              <Shield className="w-5 h-5 text-stark-red mb-0.5" />
              <span className="text-[10px] font-extrabold text-navy leading-tight">
                GAF
                <br />
                CERTIFIED
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-stark-red to-transparent" />
    </section>
  );
};

export default AboutHeroWithForm;
