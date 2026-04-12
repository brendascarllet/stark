
import React from 'react';
import { Sun, Check, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-overlay relative pt-32 pb-20 md:py-32">
      <img 
        src="/lovable-uploads/9d62f329-4ca8-420b-82fd-645ae2ee7e0e.webp" 
        alt="Modern kitchen with expansive skylights letting in natural light through a wooden ceiling" 
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <div className="w-20 h-1 bg-stark-red mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            Premium Skylight Installation
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-in border-l-4 border-stark-red pl-4 font-medium drop-shadow-md" style={{ animationDelay: '200ms' }}>
            Transform your home with energy-efficient skylights that bring in natural light and create a more open, inviting space.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <a href="#contact" className="btn-primary">
              Get a Free Estimate →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
