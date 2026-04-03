
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6 text-white/90">
      <div className="flex items-start">
        <Phone className="h-5 w-5 mr-3 text-stark-red flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold text-white">Call Us</h4>
          <p>(206) 739-8232</p>
        </div>
      </div>

      <div className="flex items-start">
        <Mail className="h-5 w-5 mr-3 text-stark-red flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold text-white">Email</h4>
          <p>office@starkroofingrenovation.com</p>
        </div>
      </div>

      <div className="flex items-start">
        <MapPin className="h-5 w-5 mr-3 text-stark-red flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold text-white">Location</h4>
          <p>24243 SE 43rd Ct, Sammamish, WA 98029</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
