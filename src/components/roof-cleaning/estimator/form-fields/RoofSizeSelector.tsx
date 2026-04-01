
import React from 'react';
import { Check } from 'lucide-react';
import { RoofSize } from '@/types/estimator';

interface RoofSizeSelectorProps {
  roofSize: string;
  setRoofSize: (size: string) => void;
  roofSizes: RoofSize[];
}

const RoofSizeSelector: React.FC<RoofSizeSelectorProps> = ({ roofSize, setRoofSize, roofSizes }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-navy mb-4">1. Approximate Roof Size</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {roofSizes.map((sizeOption) => (
          <div 
            key={sizeOption.id}
            className={`border rounded-lg p-3 cursor-pointer transition-all ${
              roofSize === sizeOption.id 
                ? 'border-stark-red ring-2 ring-stark-red/20 bg-stark-red/5' 
                : 'border-gray-200 hover:border-stark-red/50'
            }`}
            onClick={() => setRoofSize(sizeOption.id)}
          >
            <div className="flex justify-between items-start">
              <span className="font-medium">{sizeOption.name}</span>
              {roofSize === sizeOption.id && <Check size={16} className="text-stark-red" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoofSizeSelector;
