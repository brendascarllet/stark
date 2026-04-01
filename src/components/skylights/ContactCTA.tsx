
import React from 'react';
import ContactForm from '@/components/services/ContactForm';

const ContactCTA = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6 text-center">
            Get Your Free Skylight Consultation
          </h2>
          <p className="text-charcoal/80 mb-8 text-center">
            Fill out the form below and one of our skylight experts will contact you to schedule your free consultation and estimate.
          </p>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
