
import React from 'react';
import { HomeIcon, Droplets, Shield } from 'lucide-react';

const WhyGuttersProtectionSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Why Gutters Protection Matters</h2>
        <p className="section-subtitle text-center">
          Your gutters are your home's first line of defense against water damage
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="glass-card p-6 text-center flex flex-col items-center">
            <div className="bg-stark-red/10 p-4 rounded-full mb-4">
              <HomeIcon className="h-10 w-10 text-stark-red" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">Foundation Protection</h3>
            <p className="text-charcoal/80">
              Properly functioning gutters direct water away from your foundation, preventing costly structural damage, basement flooding, and mold growth.
            </p>
          </div>
          
          <div className="glass-card p-6 text-center flex flex-col items-center">
            <div className="bg-stark-red/10 p-4 rounded-full mb-4">
              <Droplets className="h-10 w-10 text-stark-red" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">Erosion Prevention</h3>
            <p className="text-charcoal/80">
              Effective gutters systems prevent soil erosion around your property, protecting your landscaping investments and maintaining proper drainage.
            </p>
          </div>
          
          <div className="glass-card p-6 text-center flex flex-col items-center">
            <div className="bg-stark-red/10 p-4 rounded-full mb-4">
              <Shield className="h-10 w-10 text-stark-red" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">Exterior Protection</h3>
            <p className="text-charcoal/80">
              Our gutters systems prevent water from damaging your siding, windows, doors, and trim, extending the life of your home's exterior and preventing costly repairs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGuttersProtectionSection;
