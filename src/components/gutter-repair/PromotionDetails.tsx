
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, DollarSign, Zap, ShieldCheck, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const PromotionDetails = () => {
  const handlePromoClick = () => {
    toast.success("Promotion applied!", {
      description: "Contact us now to claim your special rate"
    });
  };

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const benefitVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-white border-2 border-dashed border-stark-red rounded-lg overflow-hidden shadow-xl relative p-6 md:p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 bg-stark-red text-white py-1.5 px-4 text-sm font-semibold rounded-bl-lg flex items-center gap-2">
              <Clock className="w-4 h-4" /> Limited Time Offer
            </div>
            
            <h2 className="text-3xl font-bold text-navy mb-6 mt-6 text-center md:text-left">Gutter Repair Special Promo</h2>
            
            <div className="flex justify-center md:justify-start mb-4">
              <div className="mb-6">
                <motion.div
                  className="flex flex-col md:flex-row gap-4 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <span className="text-5xl md:text-7xl font-bold text-stark-red leading-none">$800</span>
                      <div className="flex flex-col mt-1">
                        <span className="text-gray-500 text-sm md:text-base line-through">$1600</span>
                        <span className="bg-stark-red/90 hover:bg-stark-red/80 text-white text-xs md:text-sm px-2 py-0.5 mt-1 rounded">
                          SAVE 50%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-gray-600 text-sm md:text-base italic">Starting price for standard gutter repair</p>
                    <p className="text-stark-red font-medium text-sm mt-1">Limited time offer - Expires soon!</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Free Services Highlight */}
            <div className="bg-stark-red/5 p-4 rounded-lg border border-stark-red/20 mb-6">
              <h3 className="font-bold text-stark-red text-lg mb-2 flex items-center">
                FREE Premium Services Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full mr-2">
                    <DollarSign className="h-4 w-4 text-stark-red" />
                  </div>
                  <span className="text-sm">Free Gutter Inspection</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full mr-2">
                    <Zap className="h-4 w-4 text-stark-red" />
                  </div>
                  <span className="text-sm">Downspout Flushing</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <div className="bg-stark-red/5 p-5 rounded-lg">
                <h4 className="font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-stark-red text-white rounded-full flex items-center justify-center text-sm">1</span>
                  What's Included
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-stark-red mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Up to 100 feet of gutter repair</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-stark-red mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Sealing leaking joints & seams</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-stark-red mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Realignment & bracket reinforcement</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-stark-red/5 p-5 rounded-lg">
                <h4 className="font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-stark-red text-white rounded-full flex items-center justify-center text-sm">2</span>
                  Benefits
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-stark-red mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Prevent foundation & water damage</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-stark-red mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Extend your gutter system lifespan</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-stark-red mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Improve water flow & drainage</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-stark-red/5 p-5 rounded-lg">
                <h4 className="font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-stark-red text-white rounded-full flex items-center justify-center text-sm">3</span>
                  Our Guarantee
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-stark-red mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">100% satisfaction guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-stark-red mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">1-year workmanship warranty</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-stark-red mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">Licensed & fully insured</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <a 
                href="#contact" 
                className="btn-primary flex items-center justify-center whitespace-nowrap px-6 gap-2 bg-stark-red hover:bg-stark-red/90"
              >
                Get Your Free Quote
              </a>
              <a 
                href="#process" 
                className="btn-secondary flex items-center justify-center whitespace-nowrap px-6 gap-2 border-stark-red text-stark-red hover:bg-stark-red hover:text-white"
              >
                How It Works
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromotionDetails;
