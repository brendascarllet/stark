import React from 'react';
import { Droplets, Wind, Flame, AlertCircle } from 'lucide-react';

/**
 * Window Overview — leads with the WA-specific failure modes most Seattle
 * homeowners actually experience: aluminum frame condensation, single-pane
 * heat loss, weatherstripping failure under wind-driven rain, and rotting
 * sills around 1970s T1-11 siding flanges.
 */
const WindowOverviewSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">If You Live in a Pre-1990 Seattle Home, Read This.</h2>
          <p className="text-charcoal/80 text-base md:text-lg leading-relaxed">
            Most homes in King and Snohomish counties built between 1950 and 1985 still
            have their original aluminum-frame windows — or worse, single-pane glass in
            wood sashes. These windows weren't designed for a marine climate. They
            condense, they leak, they sweat, and they rot the framing around them.
            Here's exactly what's happening behind your blinds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-stark-red/10 p-3 rounded-full flex-shrink-0">
                <Droplets className="h-6 w-6 text-stark-red" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-navy mb-2">
                  Aluminum frames are thermal bridges
                </h3>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  Aluminum conducts cold straight from outside to inside. Warm humid
                  Seattle indoor air hits cold metal, condensation runs down the rails,
                  and over a few winters it rots the wood sill underneath. If your
                  windows "sweat" from October to April — that's why.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-stark-red/10 p-3 rounded-full flex-shrink-0">
                <Wind className="h-6 w-6 text-stark-red" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-navy mb-2">
                  Wind-driven rain finds every gap
                </h3>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  Pacific Northwest atmospheric rivers don't just fall — they blow
                  sideways at 40+ MPH off the Sound. Old felt and vinyl weatherstripping
                  cracks within a decade and rain works its way past the sash, behind
                  the trim, and into your wall cavity.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-stark-red/10 p-3 rounded-full flex-shrink-0">
                <Flame className="h-6 w-6 text-stark-red" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-navy mb-2">
                  You're heating the outside
                </h3>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  A single-pane window has a U-factor around 1.0. A modern Energy Star
                  vinyl window from Milgard, Ply Gem, or Pella is 0.22–0.27 — over
                  <strong> 4× more insulating</strong>. Energy Star data: replacing
                  single-pane saves the average household <strong>$101–$583 a year</strong>,
                  about <strong>12% off</strong> the total energy bill.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-stark-red/10 p-3 rounded-full flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-stark-red" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-navy mb-2">
                  Your bedrooms might not meet egress code
                </h3>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  Washington State (per IRC R310) requires bedroom emergency egress
                  windows of <strong>≥5.7 sq ft net opening, 24" tall × 20" wide</strong>,
                  with a sill <strong>no higher than 44"</strong> above the floor.
                  A lot of older Seattle homes don't comply. Insurance and resale care.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-charcoal/55 mt-8 max-w-2xl mx-auto">
          Source: U.S. Department of Energy, Energy Star Residential Windows program,
          IRC R310 / Washington State Residential Code.
        </p>
      </div>
    </section>
  );
};

export default WindowOverviewSection;
