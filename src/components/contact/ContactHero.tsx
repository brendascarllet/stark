
import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative bg-navy overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70 z-10"></div>
      
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/ea006abb-9eda-4581-bc18-f64c4bf9d2c0.png" 
          alt="Roofing background" 
          className="w-full h-full object-cover object-center opacity-40"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Let's Talk
          </h1>
          <p className="text-xl text-white/90 max-w-xl mx-auto">
            We're here to help — whether you have a question or want to schedule a consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
