
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-overlay relative pt-32 pb-20 md:py-32">
      <img src="/lovable-uploads/45d75592-5471-4973-9d9e-e96c41b8ac16.webp" alt="GAF Timberline HDZ Shingles" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy/60"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-fade-in">
            GAF Timberline HDZ® Shingles
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-in" style={{
          animationDelay: '200ms'
        }}>
            America's #1 selling shingle, offering exceptional protection, curb appeal, and value for your home.
          </p>
          <div className="animate-fade-in" style={{
          animationDelay: '400ms'
        }}>
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
