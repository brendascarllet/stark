
import React from 'react';
import { motion } from 'framer-motion';

const WindowHeroSection = () => {
  return (
    <section className="hero-overlay relative pt-32 pb-20 md:py-32">
      <img 
        src="/lovable-uploads/4c26975e-74ad-41ad-a63f-356d7b6c7aeb.png" 
        alt="Modern home with energy efficient windows" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/50 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <div className="w-20 h-1 bg-stark-red mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            Premium Window Replacement
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-in border-l-4 border-stark-red pl-4 font-medium drop-shadow-md" style={{ animationDelay: '200ms' }}>
            Transform your home with energy-efficient windows that enhance appearance, comfort, and value while reducing your energy costs.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <a href="#contact" className="btn-primary">
              Get a Free Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WindowHeroSection;
