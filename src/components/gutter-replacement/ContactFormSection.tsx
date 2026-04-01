
import React from 'react';
import ContactForm from '@/components/services/ContactForm';

const ContactFormSection = () => {
  return (
    <section id="contact" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6 text-center">
            Contact Us for a Free Estimate
          </h2>
          <p className="text-charcoal/80 mb-8 text-center">
            Fill out the form below and one of our gutters experts will contact you to schedule your free consultation and estimate.
          </p>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
