
import React from 'react';
import GetStartedForm from '@/components/shared/GetStartedForm';
import { motion } from 'framer-motion';

const HorizontalContactForm = () => {
  return (
    <section className="relative z-30 py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <GetStartedForm 
            title="Get Your Roof Repair Quote" 
            buttonText="Free Estimate"
            formColor="red"
            formPosition="section"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalContactForm;
