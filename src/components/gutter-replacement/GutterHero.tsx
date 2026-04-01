
import React from 'react';
import { Button } from '@/components/ui/button';

const GutterHero = () => {
  return (
    <section className="hero-overlay relative pt-32 pb-20 md:py-32">
      <img 
        src="/lovable-uploads/9191b54d-6d2d-4ad8-8440-61e563122311.png" 
        alt="Premium gutters system installation" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-fade-in">
            Premium Gutters Systems
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '200ms' }}>
            Protect your home from water damage with our high-quality seamless gutters systems featuring advanced leaf protection filters and professional installation.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <a href="#contact" className="btn-primary">
              Get a Free Estimate →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GutterHero;
