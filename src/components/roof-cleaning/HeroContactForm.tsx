
import React from 'react';
import GetStartedForm from '@/components/shared/GetStartedForm';
import { motion } from 'framer-motion';

const HeroContactForm = () => {
  return (
    <section className="relative z-30">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <GetStartedForm 
            title="Schedule Roof Cleaning" 
            buttonText="Get Free Quote"
            formColor="blue"
            formPosition="hero"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContactForm;
