
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const PricingInfo = () => {
  return (
    <div className="mb-6">
      <motion.div
        className="flex flex-col md:flex-row gap-4 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="text-center">
            <span className="text-5xl md:text-7xl font-bold text-emerald-600 leading-none">$600</span>
            <div className="flex flex-col mt-1">
              <span className="text-gray-500 text-sm md:text-base line-through">$900</span>
              <Badge className="bg-emerald-600/90 hover:bg-emerald-600/80 text-white text-xs md:text-sm px-2 py-0.5 mt-1">
                SAVE 33%
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <p className="text-gray-600 text-sm md:text-base italic">Starting price for standard roof cleaning</p>
          <p className="text-emerald-700 font-medium text-sm mt-1">Limited time offer - Expires soon!</p>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingInfo;
