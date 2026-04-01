
import React, { useEffect, useRef } from 'react';
import { Calculator, ArrowRight, Droplets, Leaf, Check, DollarSign } from 'lucide-react';
import { EstimatorResultProps } from '@/types/estimator';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const EstimatorResult: React.FC<EstimatorResultProps> = ({ estimate, resetForm }) => {
  const resultRef = useRef<HTMLDivElement>(null);

  // Scroll to the estimate result when it's rendered
  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);
  
  return (
    <div className="text-center py-8" ref={resultRef}>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-stark-red/10 border-2 border-stark-red/20 rounded-xl p-8 text-center mb-8"
      >
        <h3 className="text-lg font-medium text-stark-red mb-2">Your Professional Roof Cleaning Estimate</h3>
        <div className="flex items-center justify-center gap-2 text-4xl md:text-5xl font-bold text-navy mb-2">
          <DollarSign className="h-8 w-8 md:h-10 md:w-10 text-stark-red" />
          <span>{estimate?.toLocaleString()}</span>
        </div>
        <p className="text-sm text-gray-600">
          Complete premium roof cleaning service with professional treatment
        </p>
      </motion.div>
      
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
        <Calculator size={30} className="text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Comprehensive Roof Cleaning Package</h3>
      
      {/* Free Services Marketing Box */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6 max-w-lg mx-auto">
        <h4 className="text-xl font-bold text-emerald-700 mb-3">PREMIUM SERVICES INCLUDED AT NO EXTRA COST</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="bg-emerald-100 p-2 rounded-full mr-3">
              <Droplets className="h-5 w-5 text-emerald-600" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Gutter Cleaning</p>
              <p className="text-sm text-gray-600">Removes leaves and debris for optimal flow</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-emerald-100 p-2 rounded-full mr-3">
              <Leaf className="h-5 w-5 text-emerald-600" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Moss Prevention</p>
              <p className="text-sm text-gray-600">Inhibits future moss and algae growth</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-medium text-stark-red mb-4">What's Included In Your Service</h3>
        <Card className="p-4 border border-stark-red/20">
          <ul className="space-y-3 text-left">
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Professional assessment and customized cleaning approach</p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Eco-friendly cleaning solutions that won't damage your landscaping</p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Thorough removal of algae, moss, lichen, and stains</p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Preventative treatment to extend the clean appearance</p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Complete cleanup and property protection during service</p>
            </li>
          </ul>
        </Card>
      </div>
      
      <p className="text-gray-600 my-6 max-w-lg mx-auto">
        This estimate includes our comprehensive cleaning service with FREE gutter cleaning and moss prevention treatment.
        For a precise quote that factors in your roof's exact condition, please schedule a free inspection.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          className="btn-secondary flex items-center justify-center"
          onClick={resetForm}
        >
          Recalculate Estimate
        </button>
        <a href="#contact" className="btn-primary flex items-center justify-center">
          Schedule Free Inspection <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
      
      <p className="text-sm text-gray-500 text-center mt-6">
        Note: Final pricing may vary based on your roof's specific condition and any additional requirements discovered during inspection.
      </p>
    </div>
  );
};

export default EstimatorResult;
