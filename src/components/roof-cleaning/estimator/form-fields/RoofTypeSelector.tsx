
import React from 'react';
import { Check } from 'lucide-react';
import { RoofType } from '@/types/estimator';

interface RoofTypeSelectorProps {
  roofType: string;
  setRoofType: (type: string) => void;
  roofTypes: RoofType[];
}

const RoofTypeSelector: React.FC<RoofTypeSelectorProps> = ({ roofType, setRoofType, roofTypes }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-navy mb-4">3. Roof Material</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roofTypes.map((type) => (
          <div 
            key={type.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              roofType === type.id 
                ? 'border-stark-red ring-2 ring-stark-red/20 bg-stark-red/5' 
                : 'border-gray-200 hover:border-stark-red/50'
            }`}
            onClick={() => setRoofType(type.id)}
          >
            <div className="flex justify-between items-start">
              <h4 className="font-bold">{type.name}</h4>
              {roofType === type.id && <Check size={18} className="text-stark-red" />}
            </div>
            <p className="text-sm text-gray-600 mt-1">{type.description}</p>
            {(type.id === 'cedar' || type.id === 'metal') && 
              <p className="text-xs text-stark-red mt-1">*10% premium for specialty roofing</p>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoofTypeSelector;
