
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Background image or pattern can be added here */}
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-6" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          >
            Don't Wait Until Small Issues Become Big Problems
          </motion.h2>
          <motion.p 
            className="text-white/80 text-lg mb-8 max-w-2xl mx-auto" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our limited-time promotion makes it easier than ever to fix your gutters before the rainy season. Get up to 100 feet of gutter repair for only $800-$1000.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="fit" 
                className="bg-stark-red hover:bg-stark-red/90 text-white px-6 py-6 text-lg relative overflow-hidden group whitespace-nowrap"
              >
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-[800ms] ease-out group-hover:w-full"></span>
                <span className="relative flex items-center">
                  <a href="#contact" className="flex items-center whitespace-nowrap">Claim Your Special Offer <ArrowRight className="ml-2 h-5 w-5" /></a>
                </span>
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="fit"
                variant="outline"
                className="bg-white border-stark-red text-stark-red hover:bg-stark-red hover:text-white hover:border-stark-red px-6 py-6 text-lg whitespace-nowrap transition-colors"
              >
                <Link to="/gutter-replacement" className="whitespace-nowrap">Explore Full Replacement Options</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
