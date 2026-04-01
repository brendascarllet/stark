
import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const RoofingComparison = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            Compare Roofing Options
          </h2>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
            Find the perfect roofing solution for your home and budget with our side-by-side comparison
          </p>
        </motion.div>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left bg-navy text-white rounded-tl-lg">Feature</th>
                <th className="p-4 text-center bg-navy text-white">Asphalt Shingles</th>
                <th className="p-4 text-center bg-navy text-white">Metal Roofing</th>
                <th className="p-4 text-center bg-navy text-white rounded-tr-lg">Premium Architectural</th>
              </tr>
            </thead>
            <tbody>
              <motion.tr
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 border-b border-gray-200 font-medium">Lifespan</td>
                <td className="p-4 border-b border-gray-200 text-center">15-30 years</td>
                <td className="p-4 border-b border-gray-200 text-center">40-70+ years</td>
                <td className="p-4 border-b border-gray-200 text-center">30-50 years</td>
              </motion.tr>
              <motion.tr
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <td className="p-4 border-b border-gray-200 font-medium">Energy Efficiency</td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex justify-center"><X className="text-stark-red animate-bounce-subtle" size={20} /></div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex justify-center"><Check className="text-emerald-500 animate-bounce-subtle" size={20} /></div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex justify-center"><Check className="text-emerald-500 animate-bounce-subtle" size={20} /></div>
                </td>
              </motion.tr>
              <motion.tr
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 border-b border-gray-200 font-medium">Weather Resistance</td>
                <td className="p-4 border-b border-gray-200 text-center">Good</td>
                <td className="p-4 border-b border-gray-200 text-center">Excellent</td>
                <td className="p-4 border-b border-gray-200 text-center">Very Good</td>
              </motion.tr>
              <motion.tr
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <td className="p-4 border-b border-gray-200 font-medium">Maintenance</td>
                <td className="p-4 border-b border-gray-200 text-center">Moderate</td>
                <td className="p-4 border-b border-gray-200 text-center">Low</td>
                <td className="p-4 border-b border-gray-200 text-center">Low</td>
              </motion.tr>
              <motion.tr
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 border-b border-gray-200 font-medium">Weight</td>
                <td className="p-4 border-b border-gray-200 text-center">Medium</td>
                <td className="p-4 border-b border-gray-200 text-center">Light</td>
                <td className="p-4 border-b border-gray-200 text-center">Heavy</td>
              </motion.tr>
              <motion.tr
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <td className="p-4 border-b border-gray-200 font-medium">Environmental Impact</td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex justify-center"><X className="text-stark-red animate-bounce-subtle" size={20} /></div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex justify-center"><Check className="text-emerald-500 animate-bounce-subtle" size={20} /></div>
                </td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex justify-center"><Check className="text-emerald-500 animate-bounce-subtle" size={20} /></div>
                </td>
              </motion.tr>
              <motion.tr
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-white hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 border-b border-gray-200 font-medium">Cost</td>
                <td className="p-4 border-b border-gray-200 text-center">$</td>
                <td className="p-4 border-b border-gray-200 text-center">$$$</td>
                <td className="p-4 border-b border-gray-200 text-center">$$</td>
              </motion.tr>
              <motion.tr
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <td className="p-4 font-medium">Return on Investment</td>
                <td className="p-4 text-center">Low</td>
                <td className="p-4 text-center">High</td>
                <td className="p-4 text-center">Medium</td>
              </motion.tr>
            </tbody>
          </table>
        </div>
        
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <div className="inline-block bg-stark-red/10 text-stark-red font-medium px-4 py-2 rounded-full animate-pulse-glow">
            Schedule a free consultation to discuss which option is best for your home
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoofingComparison;
