
import React from 'react';
import { motion } from 'framer-motion';

const ContactMapSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Find Us</h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
              Our office is located in Sammamish, making it easy for us to reach customers throughout the Greater Seattle and Puget Sound area.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] border border-gray-200">
            {/* Google Maps iframe - Replace with your own map embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.5!2d-122.0355!3d47.6162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM2JzU4LjMiTiAxMjLCsDAyJzA3LjgiVw!5e0!3m2!1sen!2sus!4v1680986253598!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stark Roofing Location Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMapSection;
