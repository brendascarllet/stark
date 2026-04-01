
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FloatingContactBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show after scrolling down 500px
      setIsVisible(scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-navy shadow-lg py-3 px-4"
        >
          <div className="container mx-auto flex items-center justify-between">
            <div className="hidden md:block text-white">
              <p className="font-bold">Limited Time Offer: Roof Repair Special!</p>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto justify-between">
              <p className="text-white font-semibold md:hidden">Roof Repair Special!</p>
              <Button 
                className="bg-stark-red hover:bg-stark-red/90 text-white"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  Contact Us <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactBar;
