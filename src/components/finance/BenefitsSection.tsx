
import React from 'react';
import { PiggyBank, CreditCard, BadgeDollarSign } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Why Finance With Us?</h2>
        <p className="section-subtitle text-center mb-12">
          Finance your roofing or renovation project with ease and flexibility
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-stark-red rounded-full flex items-center justify-center mb-6">
              <PiggyBank className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">No Money Down</h3>
            <p className="text-charcoal/80">
              Start your project with no upfront costs and flexible monthly payments that work for your budget.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-stark-red rounded-full flex items-center justify-center mb-6">
              <CreditCard className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">Low Interest Rates</h3>
            <p className="text-charcoal/80">
              Take advantage of competitive interest rates and favorable terms through our trusted financial partners.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-16 h-16 bg-stark-red rounded-full flex items-center justify-center mb-6">
              <BadgeDollarSign className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">Quick Approval</h3>
            <p className="text-charcoal/80">
              Streamlined application process with fast credit decisions, often within minutes of applying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
