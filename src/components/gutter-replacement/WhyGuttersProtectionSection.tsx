import React from 'react';
import { Home, CloudRain, Snowflake } from 'lucide-react';

const WhyGuttersProtectionSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Why Western Washington Gutters Fail</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          You don't have a leaky-roof problem — you have a clogged-gutter problem. Here's what
          most installers ignore in our climate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="glass-card p-6 text-center flex flex-col items-center">
            <div className="bg-stark-red/10 p-4 rounded-full mb-4">
              <CloudRain className="h-10 w-10 text-stark-red" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">
              Atmospheric River Rain
            </h3>
            <p className="text-charcoal/80">
              The Puget Sound regularly sees 2–4 inches of rain in 24 hours. Standard 5"
              gutters and 2x3" downspouts can't keep up — water spills over the front edge
              and runs straight down your siding.
            </p>
          </div>

          <div className="glass-card p-6 text-center flex flex-col items-center">
            <div className="bg-stark-red/10 p-4 rounded-full mb-4">
              <Home className="h-10 w-10 text-stark-red" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">
              Pine Needles &amp; Fir Cones
            </h3>
            <p className="text-charcoal/80">
              Douglas fir, hemlock, and cedar drop millions of needles every fall — and most
              "leaf guards" let them straight through. Once the gutter packs, water finds the
              fascia board instead of the downspout.
            </p>
          </div>

          <div className="glass-card p-6 text-center flex flex-col items-center">
            <div className="bg-stark-red/10 p-4 rounded-full mb-4">
              <Snowflake className="h-10 w-10 text-stark-red" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">
              Ice Dams in December
            </h3>
            <p className="text-charcoal/80">
              When clogged gutters freeze, meltwater backs UP under your shingles and into
              your attic. Properly sloped, properly sized seamless gutters break the ice-dam
              cycle before it starts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGuttersProtectionSection;
