import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Thermometer, Volume2, Award, Leaf, Home } from 'lucide-react';

/**
 * Window Benefits — replaces generic "energy efficient!" copy with real numbers
 * sourced from Energy Star and DOE that homeowners can actually verify.
 */
const benefits = [
  {
    icon: TrendingDown,
    title: '$101–$583/yr in savings',
    body: "Energy Star's official figure for replacing single-pane windows with certified ones. Averages ~12% off your total household energy bill. Higher in older Seattle homes with original aluminum frames.",
    cite: 'Energy Star (energystar.gov)',
  },
  {
    icon: Award,
    title: '$600 federal tax credit',
    body: "Energy Star Most Efficient windows (U-factor ≤ 0.22) qualify for the federal 25C tax credit through 2032 — up to $600 per year on qualifying window expenses. Ask us which Andersen series qualifies before you buy.",
    cite: 'IRS 25C Tax Credit',
  },
  {
    icon: Thermometer,
    title: 'No more cold spots or sweat',
    body: "Modern triple-glazed Low-E units stop the indoor surface from going below dew point — which is the actual reason your old windows drip. Your November bedroom stops feeling like a freezer wall.",
    cite: 'U.S. Department of Energy',
  },
  {
    icon: Volume2,
    title: '~50% less outside noise',
    body: 'Dual- and triple-pane laminated glass cuts traffic, lawnmower, and aircraft noise by roughly half (on the STC scale). Big deal if you live near 405, I-90, Sea-Tac flight paths, or a busy arterial.',
    cite: 'STC sound rating',
  },
  {
    icon: Home,
    title: 'Bedroom egress code compliance',
    body: 'WA State requires bedroom emergency egress windows ≥5.7 sq ft net clear opening, 24"H × 20"W minimum, sill ≤44" off the floor. Old basement and original 1960s bedroom windows often fail this — insurance and home inspectors notice.',
    cite: 'IRC R310 / WA Residential Code',
  },
  {
    icon: Leaf,
    title: '40% reclaimed wood (100 Series)',
    body: 'Andersen\'s Fibrex composite is 40% reclaimed wood fiber salvaged from their own manufacturing. If sustainability matters to you, the 100 Series gives the lowest embodied-carbon footprint of any Andersen line.',
    cite: 'Andersen Fibrex',
  },
];

const WindowBenefitsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Why It's Worth It</h2>
          <p className="section-subtitle">
            Real numbers from Energy Star, the DOE, and the IRS — not contractor
            marketing fluff. Here's what new windows actually do for a Western
            Washington home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map(({ icon: Icon, title, body, cite }, i) => (
            <motion.div
              key={title}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-stark-red/30 transition-all text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="bg-stark-red/10 p-3 rounded-full inline-block mb-4 mx-auto md:mx-0">
                <Icon className="h-6 w-6 text-stark-red" />
              </div>
              <h3 className="text-lg font-heading font-bold text-navy mb-2 leading-tight">
                {title}
              </h3>
              <p className="text-sm text-charcoal/80 leading-relaxed mb-3">{body}</p>
              <p className="text-[10px] uppercase tracking-wider text-charcoal/55 font-semibold">
                Source: {cite}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WindowBenefitsSection;
