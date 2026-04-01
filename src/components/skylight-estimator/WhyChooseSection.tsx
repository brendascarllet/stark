
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Why Choose Our Skylights</h2>
        <p className="section-subtitle text-center mb-12">
          Premium quality skylights with professional installation for lasting performance
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="glass-card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-stark-red/10 p-4 rounded-full inline-flex mb-4">
              <Check size={28} className="text-stark-red" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Premium Quality</h3>
            <p className="text-charcoal/80">
              We use only top-tier skylights from reputable manufacturers like VELUX, known for their durability and performance.
            </p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-stark-red/10 p-4 rounded-full inline-flex mb-4">
              <Check size={28} className="text-stark-red" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Expert Installation</h3>
            <p className="text-charcoal/80">
              Our certified installers have years of experience ensuring perfect fit, proper sealing, and flawless operation.
            </p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-stark-red/10 p-4 rounded-full inline-flex mb-4">
              <Check size={28} className="text-stark-red" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Long Warranty</h3>
            <p className="text-charcoal/80">
              Our skylights come with extensive manufacturer warranties, plus our own workmanship guarantee for peace of mind.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
