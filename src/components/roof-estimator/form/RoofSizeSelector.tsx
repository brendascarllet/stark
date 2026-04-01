
import React from 'react';
import { Check } from 'lucide-react';

interface RoofSize {
  id: string;
  name: string;
  multiplier: number;
  sqft: number;
  homes: string;
}

interface RoofSizeSelectorProps {
  roofSize: string;
  setRoofSize: (size: string) => void;
  roofSizes: RoofSize[];
}

const RoofSizeSelector: React.FC<RoofSizeSelectorProps> = ({ roofSize, setRoofSize, roofSizes }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-navy mb-4">2. Approximate Roof Size</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {roofSizes.map((sizeOption) => (
          <div 
            key={sizeOption.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              roofSize === sizeOption.id 
                ? 'border-stark-red ring-2 ring-stark-red/20 bg-stark-red/5' 
                : 'border-gray-200 hover:border-stark-red/50'
            }`}
            onClick={() => setRoofSize(sizeOption.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">{sizeOption.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{sizeOption.homes}</p>
              </div>
              {roofSize === sizeOption.id && <Check size={16} className="text-stark-red" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoofSizeSelector;
