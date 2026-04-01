
import React from 'react';
import { Check } from 'lucide-react';
import { GrowthLevel } from '@/types/estimator';

interface GrowthLevelSelectorProps {
  growthLevel: string;
  setGrowthLevel: (level: string) => void;
  growthLevels: GrowthLevel[];
}

const GrowthLevelSelector: React.FC<GrowthLevelSelectorProps> = ({ growthLevel, setGrowthLevel, growthLevels }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-navy mb-4">2. Growth Severity</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {growthLevels.map((level) => (
          <div 
            key={level.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              growthLevel === level.id 
                ? 'border-stark-red ring-2 ring-stark-red/20 bg-stark-red/5' 
                : 'border-gray-200 hover:border-stark-red/50'
            }`}
            onClick={() => setGrowthLevel(level.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold">{level.name}</h4>
                <p className="text-sm text-gray-600">{level.description}</p>
              </div>
              {growthLevel === level.id && <Check size={18} className="text-stark-red" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthLevelSelector;
