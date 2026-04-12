
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
            <h2 className="text-3xl font-heading font-bold mb-3">Find Us</h2>
            <p className="text-base text-charcoal/80 max-w-2xl mx-auto mb-1">
              Our office is in Sammamish, central to King &amp; Snohomish counties.
            </p>
            <p className="text-sm text-charcoal/60">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=24243+SE+43rd+Ct,+Sammamish,+WA+98029"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stark-red font-semibold hover:underline"
              >
                24243 SE 43rd Ct, Sammamish, WA 98029 →
              </a>
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=24243%20SE%2043rd%20Ct%2C%20Sammamish%2C%20WA%2098029&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stark Roofing & Renovation — Sammamish HQ"
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMapSection;
