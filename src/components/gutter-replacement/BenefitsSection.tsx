
import React from 'react';
import { Leaf, Zap, Shield, BarChart } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Benefits of Our Gutters Systems</h2>
        <p className="section-subtitle text-center">
          Designed for performance, durability, and peace of mind
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="flex items-start">
            <div className="bg-stark-red/10 p-3 rounded-full mr-4">
              <Leaf className="h-6 w-6 text-stark-red" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-navy mb-2">Maintenance-Free</h3>
              <p className="text-charcoal/80">
                Our leaf protection systems eliminate the need for regular gutter cleaning, saving you time and keeping you safe from ladder accidents.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-stark-red/10 p-3 rounded-full mr-4">
              <Zap className="h-6 w-6 text-stark-red" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-navy mb-2">Superior Water Flow</h3>
              <p className="text-charcoal/80">
                Our gutter systems are designed to handle even the heaviest rainfall, preventing overflow and ensuring proper water diversion.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-stark-red/10 p-3 rounded-full mr-4">
              <Shield className="h-6 w-6 text-stark-red" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-navy mb-2">Long-Lasting Protection</h3>
              <p className="text-charcoal/80">
                Built with premium materials and backed by industry-leading warranties, our gutter systems provide decades of reliable performance.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-stark-red/10 p-3 rounded-full mr-4">
              <BarChart className="h-6 w-6 text-stark-red" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-navy mb-2">Increased Home Value</h3>
              <p className="text-charcoal/80">
                Quality gutter systems are a valuable selling point that can increase your home's resale value by protecting its structural integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
