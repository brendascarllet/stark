
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-navy/90 to-navy relative">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/lovable-uploads/4017273d-6f7d-4e19-9c25-034838498933.png" 
          alt="Professional roofer installing shingles with nail gun" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Expert Roof Repair Services
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Timely, professional roof repairs to protect your home and prevent costly damage
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="#contact" 
              className="bg-stark-red hover:bg-stark-red/90 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Get a Free Estimate</span>
              <ChevronRight size={18} />
            </motion.a>
            
            <motion.a 
              href="tel:+12067398232" 
              className="bg-white hover:bg-gray-100 text-navy border border-navy font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={18} className="mr-2" />
              <span>Call for Emergency Repair</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
