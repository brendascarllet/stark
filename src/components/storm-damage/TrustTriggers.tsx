import React from 'react';
import { Shield, Award, Star } from 'lucide-react';
const TrustTriggers = () => {
  return <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-stark-red">
              <Shield className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">BBB A+ Rated</h3>
            <p className="text-charcoal/80">
              We're proud to maintain the highest standards of business integrity and customer satisfaction.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-stark-red">
              <Award className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">Licensed & Insured</h3>
            <p className="text-charcoal/80">
              Rest easy knowing our team is fully licensed, bonded, and insured for your protection.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-stark-red">
              <Star className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">5-Star Reviews</h3>
            <p className="text-charcoal/80">
              Our customers consistently rate us five stars for our quality workmanship and exceptional service.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default TrustTriggers;