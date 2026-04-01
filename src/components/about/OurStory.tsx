
import React from 'react';
const OurStory = () => {
  return <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="w-16 h-1 bg-stark-red mb-4"></div>
            <h2 className="text-3xl font-heading font-bold text-navy mb-6">Our Story</h2>
            <p className="text-charcoal/80 mb-6">
              Founded to provide trusted roofing and renovation services in the Seattle area, Stark Roofing & Renovation began with a simple mission: to deliver exceptional craftsmanship with honesty and integrity.
            </p>
            <p className="text-charcoal/80 mb-6">
              After witnessing too many homeowners struggle with unreliable contractors and poor workmanship, our founder decided to build a company that would set the standard for quality in the roofing industry. Starting with just a small team of dedicated professionals, we've grown to become one of the most trusted names in residential and commercial roofing throughout the region.
            </p>
            <p className="text-charcoal/80">
              Today, as a GAF Master Elite® Certified contractor, we continue to uphold the values that have guided us from the beginning. Our team of certified professionals takes pride in protecting homes and businesses with premium materials and expert installation techniques that are built to last.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-96 border-b-4 border-stark-red">
              <img 
                src="/lovable-uploads/b655ce16-b242-41d9-8698-3013b7489cd2.png" 
                alt="Team Member" 
                className="w-full h-full object-cover object-[50%_20%]" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OurStory;
