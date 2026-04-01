
import React from 'react';

const PremiumSystemsSection = () => {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Our Premium Gutters Systems</h2>
        <p className="section-subtitle text-center">
          Quality materials and expert installation for lasting protection
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="relative h-64">
              <img 
                src="/lovable-uploads/7bcfdf0b-8eba-4883-ac40-89fd466bbdd3.png" 
                alt="Seamless Gutters" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-heading font-bold text-white">Seamless Gutters</h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-stark-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <p className="text-charcoal/80">Custom-fabricated on-site to fit your home perfectly</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-stark-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <p className="text-charcoal/80">No seams means reduced leaking potential</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-stark-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <p className="text-charcoal/80">Heavy-duty aluminum construction (0.032" thickness)</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-stark-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <p className="text-charcoal/80">Available in multiple colors to complement your home</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="relative h-64">
              <img 
                src="/lovable-uploads/ddec2c5a-6ff0-40f9-b708-bdaf727993c8.png" 
                alt="Leaf Protection Systems" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-heading font-bold text-white">Leaf Protection Systems</h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-stark-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <p className="text-charcoal/80">Prevents leaves, pine needles, and debris from clogging gutters</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-stark-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <p className="text-charcoal/80">Self-cleaning design significantly reduces maintenance</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-stark-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <p className="text-charcoal/80">Patented design allows water to flow freely while blocking debris</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-stark-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <p className="text-charcoal/80">Lifetime warranty against clogging</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSystemsSection;
