import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, Sun } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

/**
 * Before/after showcase: drag the slider to see how a skylight transforms
 * a dark room. Uses the existing BeforeAfterSlider component.
 *
 * Image paths are placeholders — Brenda should swap these for real photos
 * of her installs (a dark room photo + same room with skylight installed).
 */

type Pair = {
  id: string;
  label: string;
  before: string;
  after: string;
  caption: string;
};

const PAIRS: Pair[] = [
  {
    id: 'bedroom',
    label: 'Master Bedroom',
    before: '/lovable-uploads/2821b129-1a0b-4714-9322-0ac209cc85ac.png',
    after: '/lovable-uploads/263e14a0-6faa-45ca-b508-4d8d686b30e5.png',
    caption: 'Bellevue master bedroom — dark and cave-like before, flooded with morning light after.',
  },
  {
    id: 'kitchen',
    label: 'Kitchen Island',
    before: '/lovable-uploads/f6057036-c7fd-4c02-8d16-ed9c3bad8e5f.png',
    after: '/lovable-uploads/263e14a0-6faa-45ca-b508-4d8d686b30e5.png',
    caption: 'Sammamish kitchen — relied on overhead can lights, now lit naturally all day.',
  },
  {
    id: 'hallway',
    label: 'Upstairs Hallway',
    before: '/lovable-uploads/34257d11-a88c-4148-9c8e-04aff77fef5d.png',
    after: '/lovable-uploads/2821b129-1a0b-4714-9322-0ac209cc85ac.png',
    caption: 'Issaquah hallway — needed a light switch in the middle of the day, now never does.',
  },
];

const BeforeAfterShowcase = () => {
  const [activePair, setActivePair] = useState(PAIRS[0]);

  return (
    <section className="section-padding bg-gradient-to-b from-navy via-slate-900 to-navy text-white relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-200 text-sm font-semibold mb-4">
            <Sun size={14} /> See the Difference
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Drag the slider. Watch the room change.
          </h2>
          <p className="text-white/75 text-lg">
            Same room. Same camera angle. Same time of day. The only thing that changed is the skylight.
          </p>
        </div>

        {/* Pair selector tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-8">
          {PAIRS.map((pair) => {
            const active = pair.id === activePair.id;
            return (
              <button
                key={pair.id}
                type="button"
                onClick={() => setActivePair(pair)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  active
                    ? 'bg-amber-400 text-navy shadow-lg scale-105'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {pair.label}
              </button>
            );
          })}
        </div>

        {/* Slider */}
        <motion.div
          key={activePair.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black">
            <BeforeAfterSlider
              beforeImage={activePair.before}
              afterImage={activePair.after}
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>

          {/* Drag hint */}
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm mt-4">
            <ArrowLeftRight size={16} className="animate-pulse" />
            <span>Click and drag the white line to compare</span>
          </div>

          {/* Caption */}
          <p className="text-center text-white/80 text-base md:text-lg mt-6 max-w-2xl mx-auto italic">
            "{activePair.caption}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;
