
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutCTA = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <img 
        src="/lovable-uploads/a42f972f-722b-4465-a760-8b1722af7cbe.webp" 
        alt="Father playing with daughter in a bright, minimalist home" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-navy/80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 animate-fade-in">
            Building Trust, One Roof at a Time
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            At Stark Roofing & Renovation, we understand that your home is more than just a building—it's where memories are made and families feel safe.
          </p>
          <Button 
            size="lg" 
            className="bg-stark-red hover:bg-stark-red/90 text-white"
            asChild
          >
            <a href="/contact">Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
