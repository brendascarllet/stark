
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface EstimatorResultProps {
  lowEstimate: number;
  highEstimate: number;
  resetCalculator: () => void;
}

const EstimatorResult: React.FC<EstimatorResultProps> = ({ lowEstimate, highEstimate, resetCalculator }) => {
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-stark-red mb-2">Your Gutter Estimate</h2>
        <p className="text-gray-600">Here's your estimated price range based on your selections</p>
      </div>
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-stark-red/10 border-2 border-stark-red/20 rounded-xl p-8 text-center"
      >
        <h3 className="text-lg font-medium text-stark-red mb-4">Estimated Cost Range</h3>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <span className="text-3xl font-bold text-navy">{formatCurrency(lowEstimate)}</span>
          <span className="text-lg">to</span>
          <span className="text-3xl font-bold text-navy">{formatCurrency(highEstimate)}</span>
        </div>
        <p className="text-sm text-gray-500">
          This estimate includes materials and professional installation
        </p>
      </motion.div>
      
      <div className="mt-8">
        <h3 className="text-lg font-medium text-stark-red mb-4">What's Included</h3>
        <Card className="p-4 border border-stark-red/20">
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Professional measuring and customization to your home</p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Seamless gutters fabricated on-site for a perfect fit</p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Professional installation with proper slope for optimal drainage</p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Cleanup and removal of debris after installation</p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Labor warranty to ensure proper installation and function</p>
            </li>
          </ul>
        </Card>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button 
          variant="outline" 
          className="flex-1 border-stark-red/30 hover:bg-stark-red/5 text-stark-red"
          onClick={resetCalculator}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Recalculate
        </Button>
        <Button 
          className="flex-1 bg-stark-red hover:bg-stark-red/90 text-white"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get Exact Quote <Download className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <p className="text-sm text-gray-500 text-center">
        Note: This is just an estimate. Actual costs may vary based on the specifics of your property and any additional requirements discovered during inspection.
      </p>
    </div>
  );
};

export default EstimatorResult;
