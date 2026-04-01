
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton = ({ onClick }: FloatingButtonProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-stark-red text-white px-4 py-3 rounded-full shadow-lg hover:bg-stark-redHover transition-all duration-300"
        onClick={onClick} 
        aria-label="Need help? Ask StarkBot!"
        title="Need help? Ask StarkBot!"
      >
        <MessageCircle size={20} className="text-white" />
        <span className="font-medium">Ask StarkBot</span>
      </motion.button>
    </motion.div>
  );
};

export default FloatingButton;
