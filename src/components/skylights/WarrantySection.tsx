import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wrench, Award } from 'lucide-react';

const WARRANTIES = [
  {
    icon: Shield,
    title: 'VELUX No Leak Skylight Warranty',
    duration: '10 / 20 / 10',
    body: '10-year installation warranty + 20-year glass warranty + 10-year product warranty when installed by experienced VELUX-trained installers like us. VELUX is so confident in the design they call it the "No Leak" skylight.',
    points: [
      '10 years on installation',
      '20 years on glass seal',
      '10 years on product & flashing',
    ],
  },
  {
    icon: Wrench,
    title: 'Stark Workmanship Warranty',
    duration: 'Our promise',
    body: 'On top of the manufacturer warranty, we stand behind every install ourselves. If anything goes wrong with how we put it in, we come back and fix it — no fine print, no runaround.',
    points: [
      'Direct labor warranty from Stark',
      'No leaks at the flashing — guaranteed',
      "We answer the phone when you call",
    ],
  },
  {
    icon: Award,
    title: '30+ Years, 2,000+ Roofs',
    duration: 'Track record',
    body: "We've been installing skylights in Seattle weather for three decades. The Pacific Northwest is hard on roofs — we know exactly where leaks happen and how to flash a skylight so it doesn't.",
    points: [
      'Bellevue / Sammamish based',
      'Licensed, bonded, insured in WA',
      'Real local crew, not subcontractors',
    ],
  },
];

const WarrantySection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title text-center">Two Warranties. Zero Worries.</h2>
          <p className="section-subtitle text-center">
            The biggest fear with any skylight install is leaks. Here's the protection you get from Stark + VELUX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WARRANTIES.map((w, idx) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.title}
                className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-stark-red/10 p-3 rounded-lg">
                    <Icon size={28} className="text-stark-red" />
                  </div>
                  <span className="text-xs font-bold text-stark-red bg-stark-red/10 px-3 py-1 rounded-full">
                    {w.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{w.title}</h3>
                <p className="text-sm text-charcoal/75 mb-4 leading-relaxed flex-1">{w.body}</p>
                <ul className="space-y-1.5 border-t pt-3">
                  {w.points.map((p) => (
                    <li key={p} className="flex items-center text-xs text-charcoal/80">
                      <span className="text-stark-red mr-2 font-bold">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WarrantySection;
