
import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollPrompt } from './types';

interface PromptBubbleProps {
  prompt: ScrollPrompt;
  onAction: (prompt: ScrollPrompt) => void;
  onClose: () => void;
}

const PromptBubble = ({ prompt, onAction, onClose }: PromptBubbleProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-24 right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs z-40 border border-gray-200"
    >
      <p className="text-sm mb-3">{prompt.message}</p>
      
      {prompt.actionText && (
        <button 
          onClick={() => onAction(prompt)}
          className="text-sm bg-stark-red text-white py-2 px-4 rounded-md hover:bg-stark-redHover transition-colors flex items-center"
        >
          {prompt.actionText}
          <ChevronRight size={16} className="ml-1" />
        </button>
      )}
      
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        aria-label="Close"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
};

export default PromptBubble;
