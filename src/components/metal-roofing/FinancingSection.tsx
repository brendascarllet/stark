
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, BadgeCheck, CreditCard } from 'lucide-react';

const FinancingSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="get-started-form">
        <div className="form-flex">
          <div className="form-title">Request a Free Quote Today!</div>
          <input type="text" className="form-input" placeholder="Your Name" />
          <input type="tel" className="form-input" placeholder="Your Phone" />
          <select className="form-input form-select">
            <option value="">Service Needed</option>
            <option value="metal-roofing">Metal Roofing</option>
            <option value="roof-replacement">Roof Replacement</option>
            <option value="roof-repair">Roof Repair</option>
          </select>
          <button className="form-button">
            Get Started <span>→</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <motion.div 
            className="flex-1 order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">Give Your Budget A Break!</h2>
            <p className="text-lg text-charcoal/80 mb-6">
              We understand that investing in a new metal roof is a significant decision. That's why we offer flexible financing options that make your dream roof affordable with payments that fit your budget.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <BadgeCheck className="h-6 w-6 text-stark-red mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-navy">No Money Down Options</h3>
                  <p className="text-charcoal/80">Start your roofing project without upfront costs</p>
                </div>
              </div>
              <div className="flex items-start">
                <BadgeCheck className="h-6 w-6 text-stark-red mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-navy">Competitive Interest Rates</h3>
                  <p className="text-charcoal/80">With terms that make sense for your situation</p>
                </div>
              </div>
              <div className="flex items-start">
                <BadgeCheck className="h-6 w-6 text-stark-red mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-navy">Quick Approval Process</h3>
                  <p className="text-charcoal/80">Decision in minutes, not days</p>
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
              <a 
                href="#contact" 
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <CreditCard size={18} /> Apply Now
              </a>
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
                src="/lovable-uploads/fb70b9ca-15be-4ece-8b5b-104a70adf719.webp" 
                alt="Happy father and daughter enjoying home comfort" 
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
