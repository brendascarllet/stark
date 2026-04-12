
import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-1 bg-stark-red mx-auto mb-4"></div>
          <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">Our Certifications</h2>
          <p className="text-lg text-charcoal/80 mb-12 text-center">
            We're proud to maintain the highest industry credentials and standards
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center bg-white p-6 rounded-xl shadow-md border-l-4 border-stark-red">
              <Award className="text-stark-red mr-4" size={36} />
              <div>
                <h3 className="text-lg font-heading font-bold text-navy">GAF Certified</h3>
                <p className="text-sm text-charcoal/80">Factory-trained professional installers</p>
              </div>
            </div>
            
            <div className="flex items-center bg-white p-6 rounded-xl shadow-md border-l-4 border-stark-red">
              <Award className="text-stark-red mr-4" size={36} />
              <div>
                <h3 className="text-lg font-heading font-bold text-navy">Malarkey Installer</h3>
                <p className="text-sm text-charcoal/80">Premium polymer-modified shingles built for the PNW</p>
              </div>
            </div>

            <div className="flex items-center bg-white p-6 rounded-xl shadow-md border-l-4 border-stark-red">
              <Award className="text-stark-red mr-4" size={36} />
              <div>
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
