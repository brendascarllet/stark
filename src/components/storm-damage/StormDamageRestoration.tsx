
import React from 'react';
import { ArrowRight } from 'lucide-react';

const StormDamageRestoration = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Storm Damage Restoration</h2>
        <p className="section-subtitle text-center">
          Identify and repair hail damage before it leads to bigger problems for your home.
        </p>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/17b5b310-a8ca-4f81-9f07-78a578f80f85.png"
                alt="Hail damaged roof shingles with visible impact marks"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-heading font-bold text-navy mb-2">Hail Damage on Asphalt Shingles</h3>
              <p className="text-charcoal/80">
                This Washington home suffered hail damage during a severe storm. Notice the dark spots and indentations where hail impacts have compromised the shingles' protective granules. Left unrepaired, these damaged areas can lead to leaks and further deterioration.
              </p>
              <div className="mt-4 flex justify-center">
                <a href="#assessment" className="btn-primary flex items-center">
                  Get Your Roof Inspected
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StormDamageRestoration;
