
import React from 'react';

const OverviewSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6">
              The Gold Standard in Asphalt Shingles
            </h2>
            <p className="text-lg text-charcoal/80 mb-6">
              GAF Timberline HDZ® shingles represent the pinnacle of asphalt shingle technology, combining beauty, performance, and value. As certified GAF certified contractors, we're proud to offer this industry-leading product to homeowners looking for the perfect balance of aesthetics, durability, and affordability.
            </p>
            <p className="text-lg text-charcoal/80 mb-6">
              These dimensional shingles feature a proprietary color blending technology that creates a beautiful, wood-shake look that enhances your home's curb appeal. Their thick, layered construction provides exceptional protection against the elements while the innovative LayerLock™ technology ensures secure installation and superior wind resistance.
            </p>
            <p className="text-lg text-charcoal/80">
              When you choose GAF Timberline HDZ® shingles installed by our certified team, you're not just getting a roof—you're getting peace of mind backed by industry-leading warranties and professional installation.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="/lovable-uploads/45d75592-5471-4973-9d9e-e96c41b8ac16.webp" alt="GAF Timberline HDZ Shingles Close-up" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
