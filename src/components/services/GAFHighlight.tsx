
import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GAFHighlight = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/45d75592-5471-4973-9d9e-e96c41b8ac16.webp" 
                alt="GAF Timberline HDZ Shingles Color Options" 
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-navy text-white px-4 py-2 rounded-md font-medium">
                Color Options
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 text-left"
          >
            <div className="flex items-center mb-4">
              <Shield className="text-stark-red mr-2" size={24} />
              <span className="text-navy font-medium">GAF Certified Contractor</span>
            </div>

            <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-left">
              GAF Timberline HDZ Shingles
            </h2>

            <p className="text-charcoal/80 mb-6 text-left">
              Our premium roofing installations feature GAF Timberline HDZ architectural shingles, America's #1 shingle brand. These shingles offer exceptional protection against wind, rain, and other elements while enhancing your home's curb appeal.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <ChevronRight className="text-stark-red flex-shrink-0 mt-1" size={18} />
                <span className="ml-2">Limited lifetime warranty</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-stark-red flex-shrink-0 mt-1" size={18} />
                <span className="ml-2">130 MPH wind resistance</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-stark-red flex-shrink-0 mt-1" size={18} />
                <span className="ml-2">StainGuard Plus™ algae protection</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-stark-red flex-shrink-0 mt-1" size={18} />
                <span className="ml-2">LayerLock™ Technology for secure installation</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-stark-red flex-shrink-0 mt-1" size={18} />
                <span className="ml-2">Wide range of colors to complement your home</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/warranty" className="btn-primary">
                Learn About Our Warranty
              </Link>
              <Link to="/roof-replacement" className="btn-outline">
                Explore Roof Replacement
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GAFHighlight;
