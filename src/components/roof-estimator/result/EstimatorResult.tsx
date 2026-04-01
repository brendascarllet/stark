
import React, { useEffect } from 'react';
import { Calculator, ArrowRight, Check, Download } from 'lucide-react';
import { EstimatorResultProps } from '@/types/roof-estimator-form';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const EstimatorResult: React.FC<EstimatorResultProps> = ({ estimate, resetForm }) => {
  useEffect(() => {
    // Ensure the estimate result is visible at the top of the viewport
    const estimateElement = document.getElementById('estimate-result');
    if (estimateElement) {
      estimateElement.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, []);

  return (
    <div className="text-center" id="estimate-result">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-stark-red/10 border-2 border-stark-red/20 rounded-xl p-6 text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Estimated Roof Replacement Price</h3>
        <h4 className="text-lg font-medium text-stark-red mb-1">Total Estimate</h4>
        <div className="text-5xl font-bold text-stark-red mb-2">
          ${estimate?.toLocaleString()}
        </div>
        <p className="text-gray-600">Complete roof replacement with selected options</p>
      </motion.div>
      
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
        <Calculator size={30} className="text-green-600" />
      </div>
      
      <div className="mt-6">
        <h4 className="text-lg font-medium text-stark-red mb-4">What's Included</h4>
        <Card className="p-4 border border-stark-red/20">
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Complete tear-off of existing roof materials</p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>New underlayment and water barrier installation</p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Premium roofing materials with manufacturer warranty</p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Professional installation by certified roofers</p>
            </li>
            <li className="flex items-start">
              <div className="mt-1 mr-3 text-stark-red">
                <Check className="h-4 w-4" />
              </div>
              <p>Cleanup and debris removal after completion</p>
            </li>
          </ul>
        </Card>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
        <button 
          className="btn-secondary flex items-center justify-center"
          onClick={resetForm}
        >
          Recalculate Estimate
        </button>
        <a href="#contact" className="btn-primary flex items-center justify-center">
          Request Free Inspection <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
      
      <p className="text-sm text-gray-500 mt-6">
        This estimate is based on the information provided. Actual prices may vary based on a professional on-site inspection.
        For an exact quote, please schedule a free roof inspection with our experts.
      </p>
    </div>
  );
};

export default EstimatorResult;
