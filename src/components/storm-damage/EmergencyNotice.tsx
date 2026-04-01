
import React from 'react';
import { AlertCircle } from 'lucide-react';
import HorizontalContactForm from '../home/HorizontalContactForm';

const EmergencyNotice = () => {
  return (
    <section className="bg-stark-red text-white py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <AlertCircle className="mr-3" size={24} />
            <p className="font-medium">Have an active leak or emergency? Call us now for immediate assistance.</p>
          </div>
          <a 
            href="tel:+12067398232" 
            className="bg-white text-stark-red font-bold py-2 px-6 rounded-md hover:bg-gray-100 transition-colors"
          >
            (206) 739-8232
          </a>
        </div>
      </div>

      {/* Add the horizontal contact form below the emergency notice */}
      <HorizontalContactForm />
    </section>
  );
};

export default EmergencyNotice;
