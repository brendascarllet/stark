
import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const WarrantyHero = () => {
  return (
    <section className="hero-overlay relative pt-32 pb-20 md:py-32">
      <img 
        src="/lovable-uploads/c72e9316-ddde-4593-8a3b-e66ac56d78a6.webp" 
        alt="Beautiful blue-gray house with quality roof installation" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      <div className="absolute inset-0 bg-navy/60"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Comprehensive Warranty
          </motion.h1>
          <motion.div
            className="bg-stark-red text-white inline-block px-5 py-2 rounded-md font-bold text-lg md:text-xl mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            25-Year Labor Warranty
          </motion.div>
          <motion.p
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Protect your investment with our industry-leading 25-year labor warranty backed by GAF's manufacturer guarantee.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://www.gaf.com/en-us/resources/warranties/register"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center px-7 py-3.5"
            >
              <Shield className="mr-2 h-5 w-5" />
              Register Your Warranty
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WarrantyHero;
