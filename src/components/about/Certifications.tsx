
import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">Our Certifications</h2>
          <p className="text-lg text-charcoal/80 mb-12 text-center">
            We're proud to maintain the highest industry credentials and standards
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start bg-white p-6 rounded-xl shadow-md border-l-4 border-stark-red h-full">
              <Award className="text-stark-red mr-5 flex-shrink-0" size={36} />
              <div className="text-left">
                <h3 className="text-lg font-heading font-bold text-navy">GAF Certified</h3>
                <p className="text-sm text-charcoal/80">Factory-trained professional installers</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-md border-l-4 border-stark-red h-full">
              <Award className="text-stark-red mr-5 flex-shrink-0" size={36} />
              <div className="text-left">
                <h3 className="text-lg font-heading font-bold text-navy">Malarkey Certified</h3>
                <p className="text-sm text-charcoal/80">Premium polymer-modified shingles built for the PNW</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-md border-l-4 border-stark-red h-full">
              <Award className="text-stark-red mr-5 flex-shrink-0" size={36} />
              <div className="text-left">
                <h3 className="text-lg font-heading font-bold text-navy">Licensed, Bonded &amp; Insured</h3>
                <p className="text-sm text-charcoal/80">WA contractor in good standing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
