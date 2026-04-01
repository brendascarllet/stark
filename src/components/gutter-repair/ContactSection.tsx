
import React from 'react';
import { motion } from 'framer-motion';
import GetStartedForm from '@/components/shared/GetStartedForm';

const ContactSection = () => {
  return (
    <section className="relative z-30 py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <GetStartedForm 
            title="Get Your Gutter Repair Quote" 
            buttonText="Claim Special Offer"
            formColor="red"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
