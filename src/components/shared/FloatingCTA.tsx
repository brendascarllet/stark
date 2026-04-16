import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingCTAProps {
  label?: string;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({
  label = 'Free Estimate',
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-navy shadow-lg py-3 px-4"
        >
          <div className="container mx-auto flex items-center justify-between">
            <p className="text-white font-semibold text-sm">{label}</p>
            <Button className="bg-stark-red hover:bg-stark-red/90 text-white" asChild>
              <a href="tel:+12067398232" className="flex items-center gap-2">
                <Phone size={16} /> (206) 739-8232
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
