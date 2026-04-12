
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FinancingOptionsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">Unlock Financing Options</h2>
            <p className="text-lg text-charcoal/80 mb-8">
              Applying for financing is a breeze with our user-friendly application process. Whether you're eyeing a full roof replacement or a smaller gutter installation project, our financing process makes it hassle-free.
            </p>
            <p className="text-lg text-charcoal/80 mb-8">
              With the flexibility of loan requests up to $200,000 and no impact on your credit score during the application, you're in full control. Plus, rest easy knowing that you could have your financing secured within just 2-3 business days. No need to delay your home improvement!
            </p>
            <div className="mt-8">
              <Link 
                to="/finance" 
                className="btn-primary inline-flex items-center justify-center text-lg px-8 py-3"
              >
                See Our Options
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 order-first md:order-last"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/9169ba8d-6805-4020-bba5-be0113bfc881.webp" 
                alt="Mother and child applying for home financing online" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancingOptionsSection;
