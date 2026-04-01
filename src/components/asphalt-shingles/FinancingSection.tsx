
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, Calculator, BadgeCheck } from 'lucide-react';

const FinancingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <motion.div 
            className="flex-1 order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">Affordable Financing Options</h2>
            <p className="text-lg text-charcoal/80 mb-6">
              Your new GAF Timberline HDZ® roof is an investment in your home's future. We understand that budget considerations are important, which is why we offer flexible financing solutions to make your roof replacement affordable.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <BadgeCheck className="h-6 w-6 text-stark-red mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-navy">No Money Down</h3>
                  <p className="text-charcoal/80">Start your roofing project with no upfront costs</p>
                </div>
              </div>
              <div className="flex items-start">
                <BadgeCheck className="h-6 w-6 text-stark-red mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-navy">Low Monthly Payments</h3>
                  <p className="text-charcoal/80">Flexible options that fit your budget</p>
                </div>
              </div>
              <div className="flex items-start">
                <BadgeCheck className="h-6 w-6 text-stark-red mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-navy">Quick Approval Process</h3>
                  <p className="text-charcoal/80">Get approved in minutes, not days</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/finance" 
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Wallet size={18} /> Explore Financing Options
              </Link>
              <Link 
                to="#calculator" 
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Calculator size={18} /> Calculate Your Cost
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/f7d78e06-9924-45d8-ad12-d2a1d1b525fb.png" 
                alt="Happy father and daughter after home improvement" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;
