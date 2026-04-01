
import React from 'react';

const AboutHero = () => {
  return (
    <section className="hero-overlay relative pt-32 pb-20 md:py-32">
      <img 
        src="/lovable-uploads/e06a0538-fea2-4c95-93fd-e2857286bc35.png" 
        alt="Professional Roofer Installing GAF Shingles" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark overlay to increase text contrast */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <div className="w-20 h-1 bg-stark-red mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            About Stark Roofing & Renovation
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl animate-fade-in border-l-4 border-stark-red pl-4 font-medium drop-shadow-md" style={{ animationDelay: '200ms' }}>
            Founded to provide trusted roofing and renovation services in the Seattle area, our commitment to quality craftsmanship has earned us a reputation for excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
