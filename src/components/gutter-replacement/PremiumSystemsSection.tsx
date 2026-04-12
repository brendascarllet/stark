import React from 'react';
import { Check } from 'lucide-react';

const PremiumSystemsSection = () => {
  return (
    <section id="systems" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Our Gutter Systems</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Two products, both built for the Pacific Northwest. We don't sell anything we
          wouldn't put on Brenda's own house.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Seamless Aluminum */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="relative h-64">
              <img
                src="/lovable-uploads/7bcfdf0b-8eba-4883-ac40-89fd466bbdd3.webp"
                alt="Seamless aluminum gutters installed by Stark Roofing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-stark-red text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-2">
                  Most popular
                </span>
                <h3 className="text-2xl font-heading font-bold text-white">
                  Seamless Aluminum Gutters
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-charcoal/70 text-sm mb-4">
                Custom-cut on a truck-mounted brake right in front of your house — no
                joints, no leaks, no weak spots.
              </p>
              <ul className="space-y-3">
                {[
                  'Cut to your home\'s exact length on-site (zero seams = zero leaks)',
                  'Heavy-gauge .032" aluminum (most installers use .025" — thinner)',
                  '6" K-style standard for WA homes (handles 40% more water than 5")',
                  '3x4" downspouts (vs. the standard 2x3") so they don\'t clog',
                  '20+ designer colors color-matched to your trim',
                ].map((line, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-stark-red flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-charcoal/80 text-sm leading-snug">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Leaf Protection */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="relative h-64">
              <img
                src="/lovable-uploads/ddec2c5a-6ff0-40f9-b708-bdaf727993c8.webp"
                alt="Leaf protection system that blocks pine needles and Douglas fir cones"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-navy text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-2">
                  Pine-needle proof
                </span>
                <h3 className="text-2xl font-heading font-bold text-white">
                  Leaf &amp; Needle Protection
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-charcoal/70 text-sm mb-4">
                Most leaf guards stop maple leaves but let pine needles straight through.
                Ours doesn't — and we'll show you the test in person.
              </p>
              <ul className="space-y-3">
                {[
                  'Micro-mesh small enough to block Douglas fir needles &amp; cones',
                  'Stainless mesh — won\'t rust like cheap aluminum guards',
                  'Slips under existing shingles (no roof warranty issues)',
                  'No more $300 fall &amp; spring gutter cleaning bills',
                  'Lifetime no-clog warranty backed by Stark + manufacturer',
                ].map((line, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-stark-red flex-shrink-0 mt-0.5" size={18} />
                    <span
                      className="text-charcoal/80 text-sm leading-snug"
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSystemsSection;
