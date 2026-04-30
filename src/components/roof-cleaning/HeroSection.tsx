
import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';
const HeroSection = () => {
  return (
    <section className="hero-overlay relative pt-32 pb-20 md:py-32">
      <img 
        src="/lovable-uploads/0e501212-3f52-4640-a7a0-bc816bb9690e.webp" 
        alt="Professional roof cleaning in action with water spraying on shingles" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-1 bg-stark-red mb-6 mx-auto"></div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            Professional Roof Cleaning Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in font-medium drop-shadow-md leading-relaxed" style={{ animationDelay: '200ms' }}>
            Restore your roof's appearance and extend its lifespan with our professional cleaning services. Remove harmful moss, algae, and debris.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in justify-center" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle size={20} className="text-emerald-500" />
              <span>Extends roof life</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle size={20} className="text-emerald-500" />
              <span>Improves curb appeal</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle size={20} className="text-emerald-500" />
              <span>Prevents damage</span>
            </div>
          </div>
          
          <div className="animate-fade-in flex flex-wrap gap-4 justify-center" style={{ animationDelay: '400ms' }}>
            <a href="#schedule-form" className="btn-primary flex items-center bg-emerald-600 hover:bg-emerald-700">
              <Shield size={18} className="mr-2" />
              Get Free Estimate
            </a>
            <a href="#process" className="btn-secondary border-emerald-500 text-emerald-500 hover:bg-emerald-500">
              Learn How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
