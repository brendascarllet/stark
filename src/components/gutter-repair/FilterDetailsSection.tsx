import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const FilterDetailsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img 
              src="/lovable-uploads/94706dc5-2fc6-4423-ba6a-0137845afbff.png" 
              alt="Modern home with clean white gutters at sunset" 
              className="w-full h-64 object-cover object-center rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold text-navy mb-6 md:text-4xl">
              Keep Your Gutters Performing Optimally
            </h2>
            <p className="text-gray-700 mb-6">
              Clogged or damaged gutters can lead to serious water damage to your home's foundation, roof, and siding. Our expert gutter repair services ensure your gutter system functions properly, protecting your home from costly repairs.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <Check className="text-stark-red mr-2 h-5 w-5" />
                <span>Thorough inspection to identify all issues</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="text-stark-red mr-2 h-5 w-5" />
                <span>Expert repairs by trained technicians</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="text-stark-red mr-2 h-5 w-5" />
                <span>High-quality materials for lasting repairs</span>
              </li>
              <li className="flex items-center text-gray-700">
                <Check className="text-stark-red mr-2 h-5 w-5" />
                <span>Preventative solutions to avoid future problems</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FilterDetailsSection;
