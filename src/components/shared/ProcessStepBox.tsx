
import React from 'react';
import { ChevronDown, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProcessStepBoxProps {
  number: number;
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
  icon: LucideIcon;
}

const ProcessStepBox: React.FC<ProcessStepBoxProps> = ({
  number,
  title,
  description,
  isActive = false,
  onClick = () => {},
  icon: Icon
}) => {
  return (
    <div 
      className={`process-step-box ${isActive ? 'active' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
    >
      <div className="process-step-header">
        <div className="process-step-number">Step {number}</div>
        <motion.div 
          className="process-step-icon"
          animate={{ rotate: isActive ? 360 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Icon size={48} strokeWidth={1.5} />
        </motion.div>
        <h3 className="process-step-title">{title}</h3>
      </div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div 
            className="process-step-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="process-step-description">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProcessStepBox;
