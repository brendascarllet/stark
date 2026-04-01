
import React from 'react';
import { Check } from 'lucide-react';
import { RoofPitch } from '@/types/estimator';

interface RoofPitchSelectorProps {
  roofPitch: string;
  setRoofPitch: (pitch: string) => void;
  roofPitches: RoofPitch[];
}

const RoofPitchSelector: React.FC<RoofPitchSelectorProps> = ({ 
  roofPitch, 
  setRoofPitch, 
  roofPitches 
}) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-navy mb-4">4. Roof Pitch (Steepness)</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {roofPitches.map((pitch) => (
          <div 
            key={pitch.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              roofPitch === pitch.id 
                ? 'border-stark-red ring-2 ring-stark-red/20 bg-stark-red/5' 
                : 'border-gray-200 hover:border-stark-red/50'
            }`}
            onClick={() => setRoofPitch(pitch.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold">{pitch.name}</h4>
                <p className="text-sm text-gray-600">{pitch.description}</p>
              </div>
              {roofPitch === pitch.id && <Check size={18} className="text-stark-red" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoofPitchSelector;
