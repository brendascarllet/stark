
import React from 'react';
import ContactForm from '@/components/services/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-navy">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 text-center max-w-2xl mx-auto">
            Get Your Free Roof Replacement Estimate
          </h2>
          <p className="text-white/80 mb-10 text-center max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and one of our roofing experts will contact you to schedule your free inspection and estimate.
          </p>

          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
