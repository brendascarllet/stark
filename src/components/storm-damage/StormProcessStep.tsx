
import React, { useState } from 'react';
import { LucideIcon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StormProcessStepProps {
  number: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const StormProcessStep: React.FC<StormProcessStepProps> = ({
  number,
  title,
  description,
  Icon
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="flex flex-col md:flex-row cursor-pointer transition-all duration-300 hover:shadow-md"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="md:w-1/6 mb-4 md:mb-0">
        <div className="bg-stark-red text-white w-16 h-16 rounded-full flex items-center justify-center relative z-10">
          <span className="font-bold">STEP {number}</span>
        </div>
      </div>
      <div className="md:w-5/6 p-8 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-stark-red p-2 rounded-full mr-4">
              <Icon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy">{title}</h3>
          </div>
          <ChevronDown 
            className={`h-5 w-5 text-stark-red transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          />
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-charcoal/80">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StormProcessStep;
