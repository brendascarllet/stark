
import React from 'react';
import ContactForm from '@/components/services/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 text-center">
            Get Your Free Roof Replacement Estimate
          </h2>
          <p className="text-white/80 mb-8 text-center">
            Fill out the form below and one of our roofing experts will contact you to schedule your free inspection and estimate.
          </p>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
