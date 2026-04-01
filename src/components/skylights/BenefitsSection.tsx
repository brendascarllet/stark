
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Shield, Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    "Increases natural light by up to 300% compared to vertical windows",
    "Improves energy efficiency by reducing the need for artificial lighting",
    "Enhances visual appeal and can increase property value",
    "Provides better ventilation options with vented skylight models",
    "Creates a feeling of more space in smaller rooms"
  ];

  return (
    <section className="section-padding bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Benefits of Skylights</h2>
        <p className="section-subtitle text-center mb-12">
          Discover how skylights can transform your home and improve your quality of life
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-stark-red/10 p-4 rounded-full inline-flex mb-6">
              <Sun size={32} className="text-stark-red" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">Natural Light</h3>
            <p className="text-charcoal/80">
              Skylights provide up to 3 times more light than vertical windows of the same size, drastically improving the brightness of your rooms.
            </p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-stark-red/10 p-4 rounded-full inline-flex mb-6">
              <Shield size={32} className="text-stark-red" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">Energy Efficiency</h3>
            <p className="text-charcoal/80">
              Modern skylights are designed with energy efficiency in mind, reducing the need for artificial lighting and potentially lowering your energy bills.
            </p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-stark-red/10 p-4 rounded-full inline-flex mb-6">
              <Check size={32} className="text-stark-red" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">Enhanced Well-being</h3>
            <p className="text-charcoal/80">
              Natural light has been proven to improve mood, productivity, and overall well-being. Skylights bring that benefit directly into your home.
            </p>
          </motion.div>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-navy mb-4">Additional Benefits</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check size={18} className="text-stark-red mt-1 mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
