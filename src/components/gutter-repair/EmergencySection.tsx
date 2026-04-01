
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const EmergencySection = () => {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              24/7 Emergency Gutter Services
            </h2>
            <p className="text-white/90 mb-6">
              Don't let a gutter emergency cause water damage to your home. Our technicians are available around the clock for urgent repairs when you need them most.
            </p>
            <div className="flex items-center mb-6">
              <Clock className="mr-3" size={24} />
              <span className="font-medium">Fast response to minimize property damage</span>
            </div>
            <Button 
              size="lg" 
              className="bg-stark-red hover:bg-stark-red/90 text-white"
              asChild
            >
              <a href="tel:+12067398232" className="inline-flex items-center">
                <Phone size={18} className="mr-2" />
                Call our emergency line
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/9b34dfc1-2e00-4337-8e65-977762727951.png" 
                alt="Emergency gutter repair team responding to water damage" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
