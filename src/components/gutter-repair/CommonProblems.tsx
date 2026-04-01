
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const CommonProblems = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Common Gutter Problems We Fix
        </motion.h2>
        <motion.p 
          className="section-subtitle text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our promotion covers these frequent gutter issues that can cause serious damage if left unrepaired
        </motion.p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Card className="h-full shadow-lg">
              <CardContent className="p-6">
                <motion.div 
                  className="h-12 w-12 rounded-full bg-stark-red/10 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, backgroundColor: "rgba(204, 0, 0, 0.2)" }}
                  transition={{ duration: 0.8 }}
                >
                  <Wrench className="h-6 w-6 text-stark-red" />
                </motion.div>
                <h3 className="text-xl font-heading font-bold text-navy mb-2">Sagging Gutters</h3>
                <p className="text-charcoal/80">
                  Gutters that pull away from the house or sag in the middle prevent proper water flow and can lead to damage. We'll reinforce hangers and brackets to restore proper alignment.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Card className="h-full shadow-lg">
              <CardContent className="p-6">
                <motion.div 
                  className="h-12 w-12 rounded-full bg-stark-red/10 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, backgroundColor: "rgba(204, 0, 0, 0.2)" }}
                  transition={{ duration: 0.8 }}
                >
                  <Wrench className="h-6 w-6 text-stark-red" />
                </motion.div>
                <h3 className="text-xl font-heading font-bold text-navy mb-2">Leaking Joints & Seams</h3>
                <p className="text-charcoal/80">
                  Leaking connections between gutter sections waste water and damage your foundation. We'll seal or replace connectors for a watertight system.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Card className="h-full shadow-lg">
              <CardContent className="p-6">
                <motion.div 
                  className="h-12 w-12 rounded-full bg-stark-red/10 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, backgroundColor: "rgba(204, 0, 0, 0.2)" }}
                  transition={{ duration: 0.8 }}
                >
                  <Wrench className="h-6 w-6 text-stark-red" />
                </motion.div>
                <h3 className="text-xl font-heading font-bold text-navy mb-2">Holes & Rust Spots</h3>
                <p className="text-charcoal/80">
                  Small holes and rust can quickly become big problems. Our repair process seals small punctures and reinforces weakened areas before they fail completely.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommonProblems;
