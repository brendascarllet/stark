import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ExternalLink } from 'lucide-react';

/**
 * The 6 actual window series Stark Roofing installs.
 * Confirmed by Brenda 2026-04-09. NOT Andersen — the earlier copy was wrong.
 *
 * Sources verified during research:
 *  - Milgard V250: https://www.milgard.com/windows/V250
 *  - Milgard V300 (Trinsic): https://www.milgard.com/windows/V300
 *  - Milgard V400 (Tuscany): https://www.milgard.com/windows/V400 (thermal chart confirmed U=0.27/0.28)
 *  - Ply Gem 1500 Builders: https://www.plygem.com/windows/products/1500-series-windows/
 *  - Ply Gem 1100 (Pro): https://www.plygem.com/windows/products/1100-vinyl-series/
 *  - Pella 250: https://www.pella.com/shop/windows/250-series/
 *
 * Image strategy: representative photos drawn from existing project assets +
 * the one verified Ply Gem product photo we successfully downloaded. The brand
 * sites (especially Milgard and Pella) block direct image hotlinking, so we
 * link out to the official product pages for full galleries.
 */
const SERIES = [
  {
    brand: 'Milgard',
    brandColor: '#E1261C',
    name: 'Tuscany V400',
    badge: 'Best Value for Seattle',
    badgeColor: 'bg-stark-red',
    image: '/lovable-uploads/29b4c032-f49f-42e6-b9c0-4928402b10de.png',
    tagline: 'Mid-tier classic vinyl with full lifetime labor warranty',
    bestFor: 'Classic Seattle Craftsman, Tudor, midcentury — anything with existing double-hungs',
    uFactor: '0.27 – 0.28 (triple-pane hits 0.22 → $600 tax credit)',
    warranty: 'Milgard Full Lifetime — parts, glass, AND labor',
    price: '$700 – $900 / window installed',
    features: [
      'Widest style range — DH, casement, awning, slider, garden, bay/bow',
      'Sculpted shadow lines match original Craftsman trim',
      'Energy Star Most Efficient achievable in upgraded triple-pane',
      'Lifetime warranty INCLUDES labor (only line on this list that does)',
    ],
    limitation: 'Thicker frame profile = less daylight than Trinsic',
    productUrl: 'https://www.milgard.com/windows/V400',
  },
  {
    brand: 'Milgard',
    brandColor: '#E1261C',
    name: 'Trinsic V300',
    badge: 'Premium Modern',
    badgeColor: 'bg-navy',
    image: '/lovable-uploads/5c7b3ea8-ad70-47e8-bcb9-cf30db5e3027.png',
    tagline: 'Narrowest frame in the Milgard vinyl lineup',
    bestFor: 'Modern Seattle remodels, Ballard / Capitol Hill / Bellevue contemporary builds, ADUs',
    uFactor: '~0.27 (Energy Star certified all U.S. zones)',
    warranty: 'Milgard Full Lifetime — parts, glass, AND labor',
    price: '$800 – $1,100 / window installed',
    features: [
      "2⅞\" frame depth — most daylight per square foot of any vinyl on this list",
      'Black-on-black factory cap-stock (won\'t fade or peel)',
      'Flush SmartTouch lock — practically invisible',
      'Energy Star certified for all U.S. climate zones',
    ],
    limitation: 'No double-hung option — single-hung only on traditional swap-outs',
    productUrl: 'https://www.milgard.com/windows/V300',
  },
  {
    brand: 'Milgard',
    brandColor: '#E1261C',
    name: 'Style Line V250',
    badge: 'Entry Vinyl',
    badgeColor: 'bg-charcoal/60',
    image: '/lovable-uploads/4e22b510-288f-4fd5-934c-4d533af06eec.png',
    tagline: 'Budget Milgard with the same lifetime warranty',
    bestFor: 'Pocket retrofits in 1960s–90s ranchers and split-levels where budget matters',
    uFactor: '~0.28 with SunCoat Low-E (Energy Star Northern certified)',
    warranty: 'Milgard Full Lifetime — parts, glass, AND labor',
    price: '$450 – $950 / window installed',
    features: [
      'Same Milgard lifetime warranty as Tuscany and Trinsic',
      'Folding casement handle (no more hitting blinds)',
      'Slim 2.75" flush-fin frame for clean modern look',
      '8 exterior color options including premium painted finishes',
    ],
    limitation: 'Limited glass-package upgrades — harder to hit U-0.22 for federal tax credit',
    productUrl: 'https://www.milgard.com/windows/V250',
  },
  {
    brand: 'Pella',
    brandColor: '#005A2B',
    name: '250 Series',
    badge: 'Tax-Credit Friendly',
    badgeColor: 'bg-green-700',
    image: '/lovable-uploads/a222bf7c-b8e9-43f7-a20e-94bcfb2cf96b.png',
    tagline: 'Mid-tier vinyl with national brand recognition',
    bestFor: 'Brand-conscious homeowners; whole-home remodels chasing the $600 federal tax credit',
    uFactor: '0.22 (triple-pane Advanced Low-E — Most Efficient certified)',
    warranty: 'Limited Lifetime on non-glass / 20-yr IGU (NON-transferable)',
    price: '$600 – $1,350 / window installed',
    features: [
      'Triple-pane option legitimately hits U-0.22 → unlocks $600 IRS 25C credit',
      '9 DuraColor dual-color exterior finishes — widest color selection on this list',
      'Pella brand recognition shows up positively at resale',
      'Foam-insulated frame core option',
    ],
    limitation: 'Warranty does NOT transfer to next homeowner (Milgard\'s does)',
    productUrl: 'https://www.pella.com/shop/windows/250-series/',
  },
  {
    brand: 'Ply Gem',
    brandColor: '#A6192E',
    name: 'Pro Series (1100)',
    badge: 'Mid-Tier Value',
    badgeColor: 'bg-charcoal/60',
    image: '/windows/plygem-1100.jpg',
    tagline: 'Better-than-builder retrofit vinyl',
    bestFor: 'Owner-occupied retrofits where the homeowner wants better than builder-grade but isn\'t paying Milgard premiums',
    uFactor: '0.29 standard (varies 0.36–0.29 by config)',
    warranty: '10-yr workmanship + 20-yr IGU (transferable: 20-yr materials / 5-yr labor)',
    price: '$450 – $800 / window installed',
    features: [
      'DP30 structural rating — handles wind-driven Puget Sound rain',
      'Equal sightlines + cam-action locks come standard',
      'Improved spacer system (less condensation than the 1500)',
      'Energy Star certified with regional Northern-zone glass',
    ],
    limitation: 'Not a true lifetime warranty — 10-yr workmanship is shorter than Milgard',
    productUrl: 'https://www.plygem.com/windows/products/1100-vinyl-series/',
  },
  {
    brand: 'Ply Gem',
    brandColor: '#A6192E',
    name: 'Builders Series (1500)',
    badge: 'Most Affordable',
    badgeColor: 'bg-charcoal/50',
    image: '/lovable-uploads/4c26975e-74ad-41ad-a63f-356d7b6c7aeb.png',
    tagline: 'Builder-grade vinyl for new construction & rentals',
    bestFor: 'Spec builds, rental property refreshes, budget-driven whole-home projects',
    uFactor: '0.35 standard → 0.27 with HP2+ glass package (Energy Star Northern)',
    warranty: 'Limited Lifetime vinyl frame / 20-yr IGU / 10-yr hardware',
    price: '$350 – $650 / window installed',
    features: [
      'Three frame profiles (brickmould, beveled, flat)',
      'Florida HVHZ code-tested — overbuilt for Puget Sound',
      'HP2+ glass hits U-0.27 (Energy Star Northern) without triple pane',
      'Available in 5 exterior colors',
    ],
    limitation: 'New-construction oriented — Pro 1100 is the better retrofit choice',
    productUrl: 'https://www.plygem.com/windows/products/1500-series-windows/',
  },
];

const BRANDS = [
  { name: 'Milgard', color: '#E1261C', tag: 'West Coast vinyl leader' },
  { name: 'Pella', color: '#005A2B', tag: 'National brand recognition' },
  { name: 'Ply Gem', color: '#A6192E', tag: 'Builder-grade volume' },
];

const WindowTypesSection = () => {
  return (
    <section id="window-series" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="section-title">The 6 Series We Install — Plain English</h2>
          <p className="section-subtitle">
            Stark installs vinyl windows from the three brands that actually hold up
            in Western Washington. Here's the honest breakdown — what each is, what
            it costs, what it warranties, and who it's for.
          </p>
        </div>

        {/* Brands trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-12">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="flex items-center gap-3 px-5 py-3 bg-white rounded-full border-2 shadow-sm"
              style={{ borderColor: `${b.color}30` }}
            >
              <span
                className="text-base md:text-lg font-extrabold tracking-tight"
                style={{ color: b.color }}
              >
                {b.name}
              </span>
              <span className="text-xs text-charcoal/55 hidden md:inline">{b.tag}</span>
            </div>
          ))}
        </div>

        {/* 6 series cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERIES.map((s, i) => (
            <motion.a
              key={`${s.brand}-${s.name}`}
              href={s.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden flex flex-col group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              {/* Image header */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={s.image}
                  alt={`${s.brand} ${s.name} window installed by Stark Roofing`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Brand chip top-left */}
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase text-white shadow-md"
                  style={{ backgroundColor: s.brandColor }}
                >
                  {s.brand}
                </div>
                {/* Status badge top-right */}
                <div
                  className={`absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-white shadow-md ${s.badgeColor}`}
                >
                  {s.badge === 'Best Value for Seattle' && (
                    <Star size={10} className="fill-white" />
                  )}
                  {s.badge}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-heading font-extrabold text-navy mb-1">
                  {s.name}
                </h3>
                <p className="text-xs text-charcoal/70 italic mb-4 leading-snug">
                  {s.tagline}
                </p>

                {/* Quick stats */}
                <div className="space-y-2 mb-4 text-xs">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-charcoal/55 font-bold">
                      U-factor
                    </div>
                    <div className="text-charcoal/85">{s.uFactor}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-charcoal/55 font-bold">
                      Warranty
                    </div>
                    <div className="text-charcoal/85">{s.warranty}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-charcoal/55 font-bold">
                      Installed
                    </div>
                    <div className="text-base font-bold text-navy">{s.price}</div>
                  </div>
                </div>

                {/* Best for */}
                <div className="mb-3">
                  <div className="text-[10px] uppercase tracking-wider text-charcoal/55 font-bold mb-0.5">
                    Best for
                  </div>
                  <p className="text-xs text-charcoal/80 leading-snug">{s.bestFor}</p>
                </div>

                {/* Features */}
                <ul className="space-y-1.5 mb-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="text-stark-red flex-shrink-0 mt-0.5" size={13} />
                      <span className="text-xs text-charcoal/80 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Honest limitation */}
                <div className="mb-3 p-2 bg-amber-50 border-l-2 border-amber-400 rounded text-xs">
                  <span className="font-semibold text-amber-900">Heads up:</span>{' '}
                  <span className="text-amber-900/85">{s.limitation}</span>
                </div>

                {/* See more on manufacturer site */}
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-charcoal/55">Official spec sheet</span>
                  <span className="inline-flex items-center gap-1 text-stark-red font-semibold group-hover:gap-2 transition-all">
                    {s.brand}.com <ExternalLink size={11} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA + caveat */}
        <div className="text-center mt-10 max-w-2xl mx-auto">
          <a
            href="#book-windows"
            className="inline-flex items-center gap-2 px-7 py-4 bg-stark-red rounded-full font-bold text-white text-base shadow-2xl hover:scale-105 transition-transform"
          >
            Book My Free In-Home Quote
          </a>
          <p className="text-[11px] text-charcoal/55 mt-4 leading-relaxed">
            We bring physical samples of all 6 series to your house and help you pick
            the right one for your budget and your home's age — no upsell. Installed
            prices are 2026 Seattle-area ballparks; actual quote depends on size,
            quantity, glass package, and any rot/flashing repair. Photos are
            representative — manufacturer galleries linked on each card.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WindowTypesSection;
