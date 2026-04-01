
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Award } from 'lucide-react';

const StormHero = () => {
  return (
    <section className="hero-overlay relative pt-32 pb-20 md:py-32">
      <img 
        src="/lovable-uploads/3754c069-841c-4eb4-b2b5-99f0a2cd02c9.png" 
        alt="New black shingle roof with stone facade" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-navy/60"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Washington Storm Damage Roof Repair
          </motion.h1>
          <motion.div 
            className="bg-stark-red text-white inline-block px-4 py-2 rounded-md font-bold text-lg md:text-xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1
            }}
          >
            Emergency Repair Service
          </motion.div>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Immediate response for storm-damaged roofs. Our experts quickly identify and repair damage from wind, hail, and debris to protect your home.
          </motion.p>

          {/* Hero Trust Badges */}
          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md flex items-center">
              <Clock className="text-stark-red mr-2" size={20} />
              <span className="text-white font-medium">24/7 Emergency Response</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md flex items-center">
              <ShieldCheck className="text-stark-red mr-2" size={20} />
              <span className="text-white font-medium">Insurance Claim Help</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md flex items-center">
              <Award className="text-stark-red mr-2" size={20} />
              <span className="text-white font-medium">GAF Certified Contractor</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#assessment" className="btn-primary">
              Get Emergency Roof Assessment →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StormHero;
