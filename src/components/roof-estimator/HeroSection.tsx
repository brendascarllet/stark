
import React from 'react';
import { Calculator } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-overlay relative pt-32 pb-20 md:py-32">
      <img 
        src="/lovable-uploads/f735756f-99ab-497f-ba4a-1f83e16251cf.png" 
        alt="Close-up of modern metal roof panels with blue finish" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-1 bg-stark-red mb-6 mx-auto"></div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            Roof Replacement Cost Estimator
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in border-l-4 border-stark-red pl-4 font-medium drop-shadow-md" style={{ animationDelay: '200ms' }}>
            Get an instant estimate for your roof replacement project. Calculate costs before you commit to help plan your budget.
          </p>
          <div className="animate-fade-in flex justify-center" style={{ animationDelay: '400ms' }}>
            <a href="#estimator" className="btn-primary flex items-center">
              <Calculator size={18} className="mr-2" />
              Start Estimating Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
