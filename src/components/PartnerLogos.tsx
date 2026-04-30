/**
 * PartnerLogos
 * ────────────
 * Strip of manufacturer / partner logos rendered inside the global Footer.
 * Shows the brands Stark Roofing actively installs:
 *
 *   Roofing  → GAF · Malarkey · CertainTeed
 *   Siding   → James Hardie
 *   Skylights→ VELUX
 *
 * Each tile tries to load `/logos/{slug}.png` first. If that file doesn't
 * exist (or fails to load) the tile falls back to a styled wordmark of the
 * brand name so the strip never looks broken. To upgrade to real logos,
 * just drop PNG/SVG files into `public/logos/` using these exact slugs:
 *
 *   public/logos/gaf.png
 *   public/logos/malarkey.png
 *   public/logos/certainteed.png
 *   public/logos/james-hardie.png
 *   public/logos/velux.png
 */

import React, { useState } from 'react';

type Partner = {
  slug: string;
  name: string;
  category: string;
};

const PARTNERS: Partner[] = [
  { slug: 'gaf', name: 'GAF', category: 'Roofing · Certified' },
  { slug: 'malarkey', name: 'MALARKEY', category: 'Roofing · Certified' },
  { slug: 'certainteed', name: 'CERTAINTEED', category: 'Roofing · Certified' },
  { slug: 'james-hardie', name: 'JAMES HARDIE', category: 'Siding · Certified' },
  { slug: 'velux', name: 'VELUX', category: 'Skylights · Certified' },
];

const PartnerTile: React.FC<{ partner: Partner }> = ({ partner }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center group">
      {/* White card so full-color brand logos render correctly against the dark navy footer */}
      <div
        className="
          flex items-center justify-center
          h-20 md:h-24 w-full px-5
          bg-white
          border border-white/10
          rounded-xl
          shadow-[0_8px_24px_rgba(0,0,0,0.25)]
          group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]
          group-hover:scale-[1.03]
          transition-all duration-300
        "
      >
        {!imgFailed ? (
          <img
            src={`/logos/${partner.slug}.png`}
            alt={`${partner.name} logo`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="max-h-12 md:max-h-14 max-w-full object-contain"
          />
        ) : (
          /* Fallback wordmark — used until a real logo PNG is dropped in /public/logos */
          <span
            className="
              font-heading font-extrabold tracking-[0.15em]
              text-navy
              text-sm md:text-base
              text-center
            "
          >
            {partner.name}
          </span>
        )}
      </div>
      <span className="mt-2 text-[10px] md:text-xs uppercase tracking-wider text-white/55 text-center">
        {partner.category}
      </span>
    </div>
  );
};

const PartnerLogos: React.FC = () => {
  return (
    <section className="border-t border-white/10 mt-8 md:mt-12 pt-10 md:pt-12 pb-2">
      <div className="text-center mb-6 md:mb-8">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stark-red font-semibold mb-1">
          Trusted Manufacturers
        </p>
        <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
          Premium Brands We Install
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto">
        {PARTNERS.map((p) => (
          <PartnerTile key={p.slug} partner={p} />
        ))}
      </div>
    </section>
  );
};

export default PartnerLogos;
