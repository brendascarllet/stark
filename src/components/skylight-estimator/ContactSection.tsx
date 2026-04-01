
import React from 'react';
import ContactForm from '@/components/services/ContactForm';
import { Layers, Home, Droplets } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-red-700 to-red-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Get Your Precise Skylight Quote
            </h2>
            <p className="text-white/80 mb-8">
              Fill out the form and one of our skylight experts will contact you to provide an exact quote for your project.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-4">
                  <Layers className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Premium Quality Skylights</h3>
                  <p className="text-white/70">Energy-efficient designs that last for decades</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-4">
                  <Home className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Professional Installation</h3>
                  <p className="text-white/70">Certified installers with years of experience</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-4">
                  <Droplets className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Weather-Tight Guarantee</h3>
                  <p className="text-white/70">Comprehensive warranty against leaks and defects</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
