
import React from 'react';
import { motion } from 'framer-motion';
import PricingInfo from './PricingInfo';
import BenefitSection from './BenefitSection';
import PromotionActions from './PromotionActions';
import { Clock, Droplets, Leaf } from 'lucide-react';

const PromotionCard = () => {
  return (
    <motion.div 
      className="bg-white border-2 border-dashed border-emerald-600 rounded-lg overflow-hidden shadow-xl relative p-6 md:p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 right-0 bg-emerald-600 text-white py-1.5 px-4 text-sm font-semibold rounded-bl-lg flex items-center gap-2">
        <Clock className="w-4 h-4" /> Limited Time Offer
      </div>
      
      <h2 className="text-3xl font-bold text-navy mb-6 mt-6 text-center md:text-left">Professional Roof Cleaning Special</h2>
      
      <div className="flex justify-center md:justify-start mb-4">
        <PricingInfo />
      </div>
      
      {/* Free Services Highlight */}
      <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 mb-6">
        <h3 className="font-bold text-emerald-700 text-lg mb-2 flex items-center">
          FREE Premium Services Included
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-full mr-2">
              <Droplets className="h-4 w-4 text-emerald-600" />
            </div>
            <span className="text-sm">Gutter Cleaning</span>
          </div>
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-full mr-2">
              <Leaf className="h-4 w-4 text-emerald-600" />
            </div>
            <span className="text-sm">Moss Prevention Treatment</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <BenefitSection 
          title="What's Included"
          stepNumber={1}
          benefits={[
            "Removal of moss, algae, lichen & black streaks",
            "Safe, low-pressure cleaning",
            "Eco-friendly cleaning solutions"
          ]}
        />
        
        <BenefitSection 
          title="Benefits"
          stepNumber={2}
          benefits={[
            "Extends roof lifespan up to 5 years",
            "Dramatically improves curb appeal",
            "Prevents structural damage"
          ]}
        />
        
        <BenefitSection 
          title="Our Guarantee"
          stepNumber={3}
          benefits={[
            "100% satisfaction guarantee",
            "6-month no-regrowth warranty",
            "Licensed & fully insured"
          ]}
        />
      </div>
      
      <PromotionActions />
    </motion.div>
  );
};

export default PromotionCard;
