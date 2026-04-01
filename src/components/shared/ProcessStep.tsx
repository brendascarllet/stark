
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent?: 'red' | 'navy' | 'gray';
  delay?: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  icon,
  accent = 'red',
  delay = 0
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getAccentColor = () => {
    switch (accent) {
      case 'navy':
        return 'bg-navy';
      case 'gray':
        return 'bg-gray-800';
      case 'red':
      default:
        return 'bg-stark-red';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 ${isExpanded ? 'border-l-4 border-stark-red' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
      role="button"
      tabIndex={0}
    >
      <div className="flex flex-col items-center text-center relative">
        <div className={`w-20 h-20 rounded-full ${getAccentColor()} flex items-center justify-center mb-5`}>
          {icon}
        </div>
        <div className="text-stark-red font-semibold mb-2">STEP {number}</div>
        <div className="flex items-center justify-center w-full">
          <h3 className="text-xl font-bold text-navy mb-4">{title}</h3>
          <ChevronDown 
            className={`h-5 w-5 text-stark-red transition-transform duration-300 ml-2 ${isExpanded ? 'rotate-180' : ''}`} 
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
    </motion.div>
  );
};

export default ProcessStep;
