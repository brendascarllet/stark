
import React from 'react';
import { Clock, Calendar, Phone } from 'lucide-react';
import Logo from '@/components/Logo';

const EmergencySection = () => {
  return <section className="py-10 bg-stark-red text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-heading font-bold mb-4">
              24/7 Emergency Roof Repair
            </h2>
            <p className="text-white/90 mb-6">
              When storms or unexpected damage threaten your home, our emergency repair team is ready to respond quickly to protect your property.
            </p>
            <div className="flex items-center mb-6">
              <Clock className="mr-3" size={24} />
              <span className="font-medium">Fast response times to minimize damage</span>
            </div>
            <div className="flex items-center mb-8">
              <Calendar className="mr-3" size={24} />
              <span className="font-medium">Available nights, weekends, and holidays</span>
            </div>
            <a href="tel:+12067398232" className="inline-flex items-center bg-white text-stark-red font-bold px-6 py-3 rounded-md hover:bg-navy hover:text-white transition-colors">
              <Phone size={18} className="mr-2" />
              Call our emergency line
            </a>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="bg-white p-6 shadow-xl rounded-lg border-2 border-white/20 transform hover:scale-105 transition-transform duration-300">
              <Logo 
                className="w-auto h-auto" 
                textSize="lg" 
                textClassName="text-5xl md:text-6xl text-stark-red"
                withTagline={true} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default EmergencySection;
