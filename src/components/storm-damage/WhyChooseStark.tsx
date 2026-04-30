
import React from 'react';
import { Clock, Shield, AlertCircle } from 'lucide-react';
import FileText from '@/components/FileText';

const WhyChooseStark = () => {
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center text-white">Why Choose Stark for Storm Repairs?</h2>
        
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm text-center md:text-left">
            <div className="flex items-center mb-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-stark-red flex items-center justify-center mr-4">
                <Clock className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-heading font-bold">24/7 Emergency Tarping</h3>
            </div>
            <p className="text-white/80">Stop leaks fast before they cause extensive interior damage.</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm text-center md:text-left">
            <div className="flex items-center mb-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-stark-red flex items-center justify-center mr-4">
                <FileText className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-heading font-bold">Direct-to-Insurance Claims Help</h3>
            </div>
            <p className="text-white/80">We fight for your coverage and handle the paperwork.</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm text-center md:text-left">
            <div className="flex items-center mb-4 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-stark-red flex items-center justify-center mr-4">
                <Shield className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-heading font-bold">GAF WeatherPro™ Certified</h3>
            </div>
            <p className="text-white/80">Storm repair specialists with advanced training.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-stark-red/20 px-6 py-3 rounded-lg border border-stark-red/40">
            <div className="flex items-center">
              <AlertCircle className="text-stark-red mr-2" size={20} />
              <p className="font-medium">WA insurance claims must be filed within 1 year of damage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseStark;
