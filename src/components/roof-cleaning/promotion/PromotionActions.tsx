
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, Calendar } from 'lucide-react';

const PromotionActions = () => {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-5 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <a 
        href="#estimator" 
        className="btn-primary flex items-center justify-center whitespace-nowrap px-6 gap-2"
      >
        <Calculator size={18} />
        Calculate Your Price 
        <ArrowRight size={18} />
      </a>
      <a 
        href="#schedule-form" 
        className="btn-secondary flex items-center justify-center whitespace-nowrap px-6 gap-2"
      >
        <Calendar size={18} />
        Request Free Inspection
      </a>
    </motion.div>
  );
};

export default PromotionActions;
