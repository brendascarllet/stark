
import React from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

interface EstimatorResultProps {
  estimate: number | null;
  resetForm: () => void;
}

const EstimatorResult: React.FC<EstimatorResultProps> = ({ estimate, resetForm }) => {
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
        <Calculator size={30} className="text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Estimated Price</h3>
      <div className="text-5xl font-bold text-stark-red mb-4">
        ${estimate?.toLocaleString()}
      </div>
      <p className="text-gray-600 mb-6 max-w-lg mx-auto">
        This estimate includes all materials, labor, and the options you selected. 
        Perfect for kitchens, living rooms, or any space that could benefit from more natural light.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          className="btn-secondary flex items-center justify-center"
          onClick={resetForm}
        >
          Recalculate Estimate
        </button>
        <a href="#contact" className="btn-primary flex items-center justify-center">
          Request Precise Quote <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default EstimatorResult;
