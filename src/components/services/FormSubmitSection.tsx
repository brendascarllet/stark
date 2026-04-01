
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface FormSubmitSectionProps {
  isSubmitting: boolean;
}

const FormSubmitSection: React.FC<FormSubmitSectionProps> = ({ isSubmitting }) => {
  return (
    <>
      <div className="pt-2">
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full bg-stark-red hover:bg-stark-red/90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl disabled:bg-gray-400"
        >
          {isSubmitting ? 'Processing...' : (
            <>
              Get In Touch <ArrowRight size={20} />
            </>
          )}
        </button>
      </div>
      
      <div className="text-center pt-2">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Check size={16} className="text-stark-red mr-1" />
            <span className="font-semibold py-1 px-2 rounded-full text-slate-950">Prompt Inspections</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Check size={16} className="text-stark-red mr-1" />
            <span className="font-semibold py-1 px-2 rounded-full text-slate-950">Easy Financing</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Check size={16} className="text-stark-red mr-1" />
            <span className="font-semibold py-1 px-2 rounded-full text-slate-950">5-Star Rated Service</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSubmitSection;
