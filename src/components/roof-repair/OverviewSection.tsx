
import React from 'react';
import { Shield, Check } from 'lucide-react';

const OverviewSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-heading font-bold text-navy mb-6">
              Expert Roof Repair When You Need It Most
            </h2>
            
            <p className="text-charcoal/80 mb-4">
              Even small roofing issues can quickly escalate into major problems if left unaddressed. Our professional roof repair services help maintain your home's protection against the elements while extending your roof's lifespan.
            </p>
            
            <p className="text-charcoal/80 mb-6">
              With our team of experienced professionals, we identify and fix roofing problems quickly and effectively, using premium materials that are built to last in Washington's challenging climate.
            </p>
            
            <div className="flex items-center mb-6">
              <Shield className="text-stark-red mr-3" size={24} />
              <span className="text-navy font-medium">Backed by our industry-leading warranty</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="text-stark-red flex-shrink-0 mt-1" size={18} />
                <span className="ml-2">Comprehensive inspections to identify all issues</span>
              </li>
              <li className="flex items-start">
                <Check className="text-stark-red flex-shrink-0 mt-1" size={18} />
                <span className="ml-2">Quick emergency repairs to prevent water damage</span>
              </li>
              <li className="flex items-start">
                <Check className="text-stark-red flex-shrink-0 mt-1" size={18} />
                <span className="ml-2">Premium materials that match your existing roof</span>
              </li>
              <li className="flex items-start">
                <Check className="text-stark-red flex-shrink-0 mt-1" size={18} />
                <span className="ml-2">Expert workmanship from certified professionals</span>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/98c822d1-6bab-4b93-9d02-4afb2ed7bde5.png" 
                alt="Professional roofer repairing damaged shingles" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
