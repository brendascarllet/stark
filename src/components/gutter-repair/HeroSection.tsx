
import React from 'react';
import { Shield, CheckCircle, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero-overlay relative pt-32 pb-20 md:py-32">
      <img 
        src="/lovable-uploads/dbc4c812-5118-48e5-8bdc-a405aa3b8648.webp" 
        alt="Modern home with black gutters against blue sky" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className="inline-block bg-stark-red text-white px-4 py-1 rounded-full mb-4 font-semibold text-sm flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Tag size={16} className="mr-2" /> Limited Time Offer: 5" Gutter Repair from $800
          </motion.div>
        
          <div className="w-20 h-1 bg-stark-red mb-6 mx-auto"></div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            Professional Gutter Repair Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in border-l-4 border-stark-red pl-4 font-medium drop-shadow-md" style={{ animationDelay: '200ms' }}>
            Prevent water damage to your home with expert gutter repairs. Fix sagging gutters, leaks, and damaged sections at our special promotional rate.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in justify-center" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle size={20} className="text-stark-red" />
              <span>Same day service</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle size={20} className="text-stark-red" />
              <span>Expert technicians</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle size={20} className="text-stark-red" />
              <span>Guaranteed work</span>
            </div>
          </div>
          
          <div className="animate-fade-in flex flex-wrap gap-4 justify-center" style={{ animationDelay: '400ms' }}>
            <a href="#contact" className="btn-primary flex items-center bg-stark-red hover:bg-stark-red/90">
              <Shield size={18} className="mr-2" />
              Get Free Estimate
            </a>
            <a href="#process" className="btn-secondary border-stark-red text-stark-red hover:bg-stark-red hover:text-white">
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
