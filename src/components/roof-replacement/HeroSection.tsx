import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
const HeroSection = () => {
  return <section className="relative">
      <div className="h-[500px] md:h-[600px] overflow-hidden relative">
        <img src="/lovable-uploads/5d8f9c57-4fc2-43e2-bbb9-4732f51bfba9.png" alt="Professional roof replacement" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-navy/40" />
        
        <motion.div className="absolute inset-0 flex items-center justify-center" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}>
          <div className="container mx-auto px-4 md:px-6 text-center">
            
            
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.7
          }} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Professional Roof Replacement
            </motion.h1>
            
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.9
          }} className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Expert installation, premium materials, and ironclad warranties for your home's most important protection
            </motion.p>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1.1
          }} className="flex flex-wrap gap-4 justify-center">
              <a href="#contact" className="btn-primary bg-stark-red hover:bg-stark-red/90 text-white px-6 py-3 rounded-full flex items-center gap-2 group transition-all duration-300 transform hover:scale-105">
                Get a Free Estimate
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#financing" className="btn-secondary border-white/70 text-white hover:bg-white hover:text-navy px-6 py-3 rounded-full">
                View Financing Options
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div className="absolute bottom-0 left-0 w-full" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1.5
      }}>
          <div className="container mx-auto px-4 md:px-6 pb-6">
            <div className="flex flex-wrap justify-center gap-3 md:gap-8">
              
              
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;