
import React from 'react';
import { MapPin, Map, CheckCircle, Phone } from 'lucide-react';

const StormServiceAreas = () => {
  const serviceCounties = [
    "King County", 
    "Snohomish County"
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Core Service Areas</h2>
        <p className="section-subtitle text-center">
          Fast response storm damage repairs where you need them most
        </p>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center mt-12">
          <div className="lg:w-1/2">
            <div className="bg-gray-50 rounded-xl shadow-md p-8 border-l-4 border-stark-red text-center md:text-left">
              <div className="flex items-center mb-6 justify-center md:justify-start">
                <Map className="text-stark-red mr-3" size={28} />
                <h3 className="text-2xl font-heading font-bold text-navy">Serving Western Washington With Pride</h3>
              </div>

              <p className="text-charcoal/80 mb-6">
                As a local Washington contractor, we know the unique weather patterns and building requirements of the Pacific Northwest like the back of our hand. From November windstorms dropping Douglas firs onto roofs to atmospheric river rain finding every weak spot, we've seen it all and fixed it all.
              </p>

              <p className="text-charcoal/80 mb-6">
                It's our #1 priority to bring rapid emergency response and high-quality storm damage solutions to our neighbors throughout the greater Puget Sound area. Our strategically positioned teams are based in our core service areas for fastest response times.
              </p>

              <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
                {serviceCounties.map((county, index) => (
                  <div 
                    key={index} 
                    className="flex items-center bg-navy/5 px-6 py-3 rounded-full text-navy font-medium hover:bg-stark-red/10 transition-colors"
                  >
                    <CheckCircle className="text-stark-red mr-2" size={18} />
                    {county}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-navy/5 rounded-lg border border-dashed border-navy/20">
                <p className="text-charcoal/90 text-sm">
                  <span className="font-semibold">Not in our core service area?</span> We may still be able to help! Contact us to verify if we can provide service in your location. Our ability to help depends on the severity of the damage, our current workload, and proximity to your property.
                </p>
                <div className="flex items-center mt-3 justify-center md:justify-start">
                  <Phone className="h-4 w-4 text-stark-red mr-2" />
                  <span className="font-medium">Call to verify your location: (206) 739-8232</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/8341ce61-c6d5-4a1c-a860-f3c55d87e0d0.webp" 
                alt="Western Washington Service Map" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">24/7 Storm Response</h3>
                  <p className="text-white/90">Our teams are strategically located in King and Snohomish counties for fastest emergency service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StormServiceAreas;
