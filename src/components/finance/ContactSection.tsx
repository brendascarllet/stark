
import React from 'react';
import { Wallet } from 'lucide-react';
import ContactForm from '@/components/services/ContactForm';

const ContactSection = () => {
  return (
    <section id="apply-now" className="py-16 bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Wallet size={48} className="text-stark-red mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Apply for financing today and take the first step toward your dream home improvement project.
          </p>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
