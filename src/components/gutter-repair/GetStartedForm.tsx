
import React from 'react';
import { motion } from 'framer-motion';
import HorizontalContactForm from '@/components/shared/HorizontalContactForm';

const GetStartedForm = () => {
  return (
    <div className="get-started-form section-form">
      <motion.div 
        className="form-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <HorizontalContactForm
          title="Get Started Today"
          buttonText="Request a Quote"
          formColor="red"
        />
      </motion.div>
    </div>
  );
};

export default GetStartedForm;
