import React from 'react';
import { Leaf, Droplets, Shield, DollarSign } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">What You Actually Get</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Not just shiny new gutters — fewer headaches, fewer repair bills, and a roof that
          dries out properly after every storm.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-stark-red/10 p-3 rounded-full mb-4 flex-shrink-0">
              <Leaf className="h-6 w-6 text-stark-red" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-navy mb-2">
                Stop Climbing the Ladder Every Fall
              </h3>
              <p className="text-charcoal/80">
                Real micro-mesh leaf protection means no more $300 gutter cleanings — and no
                more standing on a wet ladder in November trying to scoop out fir needles.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-stark-red/10 p-3 rounded-full mb-4 flex-shrink-0">
              <Droplets className="h-6 w-6 text-stark-red" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-navy mb-2">
                Atmospheric River Capacity
              </h3>
              <p className="text-charcoal/80">
                6" K-style gutters and 3x4" downspouts move 40% more water than the
                builder-grade 5" / 2x3" combo on most Seattle homes — so the next 3-inch
                rain event doesn't end up running down your siding.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-stark-red/10 p-3 rounded-full mb-4 flex-shrink-0">
              <Shield className="h-6 w-6 text-stark-red" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-navy mb-2">
                Foundation &amp; Siding Protection
              </h3>
              <p className="text-charcoal/80">
                Properly sized, properly sloped gutters carry water 4 feet away from your
                foundation — preventing crawl-space flooding, soggy crawls, and the rot that
                shows up under your siding two years later.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-stark-red/10 p-3 rounded-full mb-4 flex-shrink-0">
              <DollarSign className="h-6 w-6 text-stark-red" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-navy mb-2">
                Resale-Ready Curb Appeal
              </h3>
              <p className="text-charcoal/80">
                Color-matched seamless aluminum looks straight off the architectural plan.
                Buyers and home inspectors notice — and no inspector report flags a "gutter
                replacement recommended" that kills your asking price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
