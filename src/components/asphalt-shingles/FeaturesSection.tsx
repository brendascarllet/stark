
import React from 'react';
import { Shield, ArrowRight, Award, Home, Hammer, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            Innovative Features & Benefits
          </h2>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
            What makes GAF Timberline HDZ® shingles the preferred choice for millions of homeowners
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div className="glass-card p-6 rounded-xl text-center md:text-left" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <div className="bg-stark-red/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Shield className="h-7 w-7 text-stark-red" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">LayerLock™ Technology</h3>
            <p className="text-charcoal/80">
              Revolutionary layering technology that creates a strong mechanical bond between shingle layers, providing exceptional wind resistance up to 130 MPH with standard installation.
            </p>
          </motion.div>
          
          <motion.div className="glass-card p-6 rounded-xl text-center md:text-left" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <div className="bg-stark-red/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Award className="h-7 w-7 text-stark-red" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">StainGuard Plus™</h3>
            <p className="text-charcoal/80">
              Time-release algae-fighting technology that helps prevent unsightly blue-green algae stains from discoloring your roof, maintaining its beauty for years to come.
            </p>
          </motion.div>
          
          <motion.div className="glass-card p-6 rounded-xl text-center md:text-left" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <div className="bg-stark-red/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Palette className="h-7 w-7 text-stark-red" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">Color Blending Technology</h3>
            <p className="text-charcoal/80">
              Proprietary color blending creates stunning, dimensional appearance with shadow effects that mimic the look of real wood shake for enhanced curb appeal.
            </p>
          </motion.div>
          
          <motion.div className="glass-card p-6 rounded-xl text-center md:text-left" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            <div className="bg-stark-red/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Hammer className="h-7 w-7 text-stark-red" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">StrikeZone™ Nailing Area</h3>
            <p className="text-charcoal/80">
              25% larger nailing area ensures proper installation, improving roof performance and reducing the risk of blow-offs during severe weather events.
            </p>
          </motion.div>
          
          <motion.div className="glass-card p-6 rounded-xl text-center md:text-left" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }}>
            <div className="bg-stark-red/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Home className="h-7 w-7 text-stark-red" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">Dura Grip™ Adhesive</h3>
            <p className="text-charcoal/80">
              Specially formulated, high-strength adhesive seals each shingle tightly and reduces the risk of shingle blow-off, with bond strength that gets even stronger over time.
            </p>
          </motion.div>
          
          <motion.div className="glass-card p-6 rounded-xl text-center md:text-left" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }}>
            <div className="bg-stark-red/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto md:mx-0">
              <ArrowRight className="h-7 w-7 text-stark-red" />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy mb-3">Industry-Leading Warranty</h3>
            <p className="text-charcoal/80">
              Limited lifetime warranty with 15-year WindProven™ limited wind warranty with special installation, and 25-year StainGuard Plus™ algae protection warranty.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
