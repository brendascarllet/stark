import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, RefreshCw, Check, ArrowRight, Info } from 'lucide-react';
import QuickQuoteButton from '@/components/shared/QuickQuoteButton';

/**
 * Pricing comparison: NEW INSTALL vs REPLACEMENT.
 * Ranges shown are Stark's typical Seattle-area residential skylight pricing,
 * benchmarked against VELUX's published U.S. averages and adjusted for the
 * Puget Sound market (higher labor + permit + steep-pitch costs).
 * Stark's actual quote depends on the specific job — see disclaimer.
 */

const PRICING = {
  replacement: {
    range: '$2,400 – $4,300',
    headline: 'Replacement',
    icon: RefreshCw,
    accent: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    chipBg: 'bg-blue-600',
    description: 'Existing skylight, same opening, same size — we pull the old one and drop in the new VELUX with fresh flashing.',
    includes: [
      'New VELUX skylight (your choice of model)',
      'New flashing kit',
      'Disposal of old skylight',
      'Sealed and weatherproofed',
      'Workmanship warranty',
    ],
    timeline: '4–6 hours',
    bestFor: 'Old or leaking skylights, fogged glass, broken cranks, builder-grade originals from the 1990s.',
  },
  newInstall: {
    range: '$3,400 – $6,000',
    headline: 'New Install',
    icon: Hammer,
    accent: 'from-amber-50 to-orange-50',
    border: 'border-amber-300',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    chipBg: 'bg-amber-600',
    description: 'Brand new opening cut through your roof and ceiling — framing, flashing, drywall light shaft, the whole thing.',
    includes: [
      'New VELUX skylight (your choice of model)',
      'Roof cutting + structural framing',
      'Flashing kit installed to spec',
      'Interior light shaft framing & drywall',
      'Permit handling (where required)',
      'Workmanship warranty',
    ],
    timeline: '1–2 days',
    bestFor: "Dark rooms, vaulted kitchens, bathrooms with no window, hallways that need light, anywhere there isn't already a skylight.",
    featured: true,
  },
};

const PricingCard = ({ data }: { data: typeof PRICING.replacement | typeof PRICING.newInstall }) => {
  const Icon = data.icon;
  const featured = 'featured' in data && data.featured;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl border-2 ${data.border} bg-gradient-to-br ${data.accent} p-7 md:p-8 shadow-lg ${
        featured ? 'lg:scale-105 lg:shadow-2xl ring-2 ring-amber-300/50' : ''
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
          Most Common
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div className={`${data.iconBg} p-3 rounded-xl`}>
          <Icon size={28} className={data.iconColor} />
        </div>
        <div>
          <div className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">Skylight</div>
          <h3 className="text-2xl font-bold text-navy">{data.headline}</h3>
        </div>
      </div>

      <div className="mb-5">
        <div className="text-4xl md:text-5xl font-bold text-navy mb-1">{data.range}</div>
        <div className="text-xs text-charcoal/60">Total project cost · product + labor</div>
      </div>

      <p className="text-sm text-charcoal/80 mb-5 leading-relaxed">{data.description}</p>

      <div className="mb-5">
        <div className="text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-2">Includes</div>
        <ul className="space-y-1.5">
          {data.includes.map((item) => (
            <li key={item} className="flex items-start text-sm text-charcoal/80">
              <Check size={16} className={`${data.iconColor} mt-0.5 mr-2 flex-shrink-0`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between p-3 bg-white/60 backdrop-blur rounded-lg mb-5">
        <div>
          <div className="text-[10px] font-bold text-charcoal/60 uppercase tracking-wider">Timeline</div>
          <div className="text-sm font-semibold text-navy">{data.timeline}</div>
        </div>
        <div className={`${data.chipBg} text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider`}>
          Free Estimate
        </div>
      </div>

      <div className="border-t border-charcoal/10 pt-4">
        <div className="text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-1">Best for</div>
        <p className="text-xs text-charcoal/70 leading-relaxed">{data.bestFor}</p>
      </div>
    </motion.div>
  );
};

const PricingComparison = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-sm font-semibold mb-3">
            Skylight Investment
          </span>
          <h2 className="section-title text-center">New Install or Replacement?</h2>
          <p className="section-subtitle text-center">
            The single biggest factor in skylight cost is whether you're cutting a brand-new opening or swapping an old one. Here's where most projects land — final quote depends on your exact roof, model, and finish work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          <PricingCard data={PRICING.replacement} />
          <PricingCard data={PRICING.newInstall} />
        </div>

        {/* Disclaimer + source */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
            <Info size={18} className="text-charcoal/50 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-charcoal/70 leading-relaxed">
              <strong className="text-charcoal/90">About these ranges:</strong> Reflects typical Stark residential skylight installation pricing in the Greater Seattle / Puget Sound area. Final cost depends on the specific VELUX model, your roof type and pitch, accessibility, framing modifications, drywall finish work, and permit requirements. We give you a fixed written quote at the free in-home estimate — no surprises.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <QuickQuoteButton
            defaultService="skylight"
            label="Schedule My Free Estimate"
            dialogTitle="Free Skylight Estimate"
            size="lg"
            className="shadow-xl"
          />
          <p className="text-xs text-charcoal/60 mt-3 inline-flex items-center gap-1">
            30-minute visit · No obligation · Written quote on the spot <ArrowRight size={12} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
