
import React from 'react';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CalculateButtonProps {
  onCalculate: () => void;
}

const CalculateButton: React.FC<CalculateButtonProps> = ({ onCalculate }) => {
  return (
    <div className="pt-4">
      <Button 
        className="w-full bg-stark-red hover:bg-stark-red/90 text-white py-6 text-lg"
        onClick={onCalculate}
      >
        <Calculator className="mr-2 h-5 w-5" /> Calculate Estimate
      </Button>
      <p className="text-sm text-gray-500 text-center mt-3">
        This is just an estimate. For a precise quote, please contact us for a professional inspection.
      </p>
    </div>
  );
};

export default CalculateButton;
