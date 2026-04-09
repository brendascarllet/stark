import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Smartphone, Battery, Shield, Wind, ChevronDown, ChevronUp, Star } from 'lucide-react';
import QuickQuoteButton from '@/components/shared/QuickQuoteButton';

/**
 * Featured product hero card: VELUX Fixed Deck-Mount Skylight (FS)
 * paired with the Solar Powered Blackout Blind (DSC).
 *
 * All copy is original. Model designations and warranty terms are factual
 * VELUX product information (not copyrighted).
 */

const KEY_FEATURES = [
  {
    icon: Moon,
    title: '100% Blackout',
    body: 'The Solar Powered Blackout Blind blocks every photon. Bedroom stays pitch black at 6 AM in July — even directly under a south-facing skylight.',
  },
  {
    icon: Sun,
    title: 'Solar-Powered',
    body: 'A small panel on the blind charges itself silently. No wiring through your ceiling, no electrician, no extra permit. Works for years on its own.',
  },
  {
    icon: Smartphone,
    title: 'Remote Controlled',
    body: 'Open and close the blind from bed. Pair multiple blinds to one remote, or schedule them with a smart-home setup.',
  },
  {
    icon: Battery,
    title: 'Built-In Battery',
    body: 'Internal battery keeps the blind working through Pacific Northwest cloudy stretches. Charges back up the next sunny day.',
  },
  {
    icon: Wind,
    title: 'No-Leak Glass',
    body: 'Laminated glass with VELUX\'s proprietary deck seal — three layers of weatherproofing on every install.',
  },
  {
    icon: Shield,
    title: '10/20/10 Warranty',
    body: '10 years on installation, 20 years on the glass seal, 10 years on the product itself. The strongest warranty in the residential skylight industry.',
  },
];

const FeaturedFixedSkylight = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative section-padding bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
      {/* Decorative sun-ray glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-amber-300/30 via-amber-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-orange-300/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-lg">
            <Star size={14} className="fill-white" /> Most Requested in Bellevue &amp; Sammamish
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
            Fixed Skylight <span className="text-amber-600">+</span> Automatic Blackout Blind
          </h2>
          <p className="text-lg text-charcoal/75 max-w-2xl mx-auto">
            One product solves two problems at once — flood the room with daylight when you want it, blackout dark when you don't. Zero wiring, zero compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* IMAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-amber-200/50 aspect-[4/5]">
              <img
                src="/lovable-uploads/263e14a0-6faa-45ca-b508-4d8d686b30e5.png"
                alt="VELUX fixed skylight with solar powered blackout blind installed in modern bedroom"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />

              {/* Floating spec chips */}
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <div className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-navy shadow-lg">
                  <Sun size={12} className="text-amber-600" /> VELUX Fixed Deck-Mount (FS)
                </div>
                <br />
                <div className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-navy shadow-lg">
                  <Moon size={12} className="text-indigo-600" /> Solar Blackout Blind (DSC)
                </div>
              </div>
            </div>

            {/* Decorative animated rays */}
            <motion.div
              className="absolute -top-6 -right-6 text-amber-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
              <Sun size={48} strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          {/* CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">
              Daylight by day. Pure dark by night.
            </h3>
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              We install the <strong>VELUX Fixed Deck-Mount Skylight</strong> in the same job as the <strong>Solar Powered Blackout Blind</strong> — one trip, one crew, one clean install. Pacific Northwest light, finally on your terms.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {KEY_FEATURES.slice(0, expanded ? 6 : 4).map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex gap-3 p-3 rounded-xl bg-white/70 backdrop-blur border border-amber-100"
                  >
                    <div className="bg-amber-100 p-2 rounded-lg h-fit flex-shrink-0">
                      <Icon size={16} className="text-amber-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm">{feature.title}</div>
                      <div className="text-xs text-charcoal/70 leading-snug">{feature.body}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-800 mb-6 transition"
            >
              {expanded ? (
                <>
                  Show less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Read more details <ChevronDown size={16} />
                </>
              )}
            </button>

            {/* Expanded read-more content */}
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white/80 backdrop-blur p-5 rounded-xl border border-amber-200 mb-6 space-y-3 text-sm text-charcoal/80"
              >
                <p>
                  <strong className="text-navy">Why deck-mount?</strong> The VELUX Fixed Deck-Mount sits low and tight against the roof slope (instead of on a built-up wood curb), so it looks cleaner from the street and is less prone to leaks. The factory-applied flashing kit is part of why VELUX can offer the 10-year No Leak guarantee on installation.
                </p>
                <p>
                  <strong className="text-navy">How the blind works.</strong> The Solar Powered Blackout Blind clips onto the inside frame of the skylight. A small solar cell on the side charges an internal battery — no wires through your ceiling, no electrician, no permit pull. The remote control works at room range and can group multiple blinds together.
                </p>
                <p>
                  <strong className="text-navy">Sizes &amp; fit.</strong> VELUX Fixed Deck-Mount comes in over a dozen standard sizes from compact (good for closets and stairwells) up to large (great over a kitchen island or master bath). We measure during the free in-home estimate and pick the right one for your framing.
                </p>
                <p>
                  <strong className="text-navy">Energy.</strong> Standard glass is laminated, low-E coated, argon gas filled. ENERGY STAR rated. The blackout blind also adds a noticeable insulation boost when closed in winter mornings.
                </p>
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <QuickQuoteButton
                defaultService="skylight"
                label="Get My Free Quote"
                dialogTitle="Free Skylight + Blind Quote"
                size="lg"
                className="shadow-xl"
              />
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-white transition"
              >
                See pricing
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFixedSkylight;
