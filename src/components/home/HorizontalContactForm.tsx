
import React from 'react';
import GetStartedForm from '@/components/shared/GetStartedForm';
import { motion } from 'framer-motion';

const HorizontalContactForm = () => {
  return (
    <section className="relative z-30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <GetStartedForm 
            title="Let's Get Started!" 
            buttonText="Get Free Quote"
            formColor="red"
            formPosition="hero"
            enhanced={true}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalContactForm;
