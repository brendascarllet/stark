
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactFormSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-heading font-bold mb-4">Get in Touch</h2>
                <p className="text-charcoal/80">
                  Fill out the form below and one of our team members will reach out to you shortly.
                </p>
              </div>
              
              <ContactForm />
            </motion.div>
            
            {/* Business Info */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <h2 className="text-3xl font-heading font-bold mb-6">Contact Information</h2>
                <p className="text-lg text-charcoal/80 mb-8">
                  Have a question or ready to start your project? Reach out to us using any of the methods below.
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-stark-red/10 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-stark-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-navy/80">(206) 739-8232</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-stark-red/10 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-stark-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-navy/80">info@starkroofing.com</p>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="flex items-start">
                  <div className="bg-stark-red/10 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-stark-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-navy/80">Monday - Friday: 8am - 6pm</p>
                    <p className="text-navy/80">Saturday: 9am - 4pm</p>
                    <p className="text-navy/80">Sunday: Closed</p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-stark-red/10 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-stark-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Location</h3>
                    <p className="text-navy/80">123 Roofing Way</p>
                    <p className="text-navy/80">Seattle, WA 98101</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
