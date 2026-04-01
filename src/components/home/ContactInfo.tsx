
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6 text-white/90">
      <div className="flex items-start">
        <Phone className="h-5 w-5 mr-3 text-stark-red flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold text-white">Call Us</h4>
          <p>(555) 123-4567</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <Mail className="h-5 w-5 mr-3 text-stark-red flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold text-white">Email</h4>
          <p>info@starkroofing.com</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <MapPin className="h-5 w-5 mr-3 text-stark-red flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold text-white">Location</h4>
          <p>123 Roofing Way, Minneapolis, MN 55401</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
