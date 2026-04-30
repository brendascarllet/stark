
import React from 'react';
import GetStartedForm from '@/components/shared/GetStartedForm';
import { motion } from 'framer-motion';

const HeroContactForm = () => {
  return (
    <section className="relative z-30 pt-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <GetStartedForm
            title="Schedule Roof Cleaning"
            buttonText="Get Free Quote"
            formColor="red"
            formPosition="hero"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContactForm;
