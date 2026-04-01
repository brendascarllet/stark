
import React from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface AdditionalOptionsProps {
  includeDownspouts: boolean;
  setIncludeDownspouts: (value: boolean) => void;
  includeLeafProtection: boolean;
  setIncludeLeafProtection: (value: boolean) => void;
  includeRemoval: boolean;
  setIncludeRemoval: (value: boolean) => void;
}

const AdditionalOptions: React.FC<AdditionalOptionsProps> = ({
  includeDownspouts,
  setIncludeDownspouts,
  includeLeafProtection,
  setIncludeLeafProtection,
  includeRemoval,
  setIncludeRemoval
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-stark-red">Additional Options</h3>
      <div className="space-y-4 border border-stark-red/20 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="downspouts" className="text-base">Include Downspouts</Label>
            <p className="text-sm text-gray-500">Required for proper drainage</p>
          </div>
          <Switch 
            id="downspouts" 
            checked={includeDownspouts} 
            onCheckedChange={setIncludeDownspouts} 
            className="data-[state=checked]:bg-stark-red"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="leaf-protection" className="text-base">Leaf Protection System</Label>
            <p className="text-sm text-gray-500">Prevents clogs and reduces maintenance</p>
          </div>
          <Switch 
            id="leaf-protection" 
            checked={includeLeafProtection} 
            onCheckedChange={setIncludeLeafProtection} 
            className="data-[state=checked]:bg-stark-red"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="removal" className="text-base">Old Gutter Removal</Label>
            <p className="text-sm text-gray-500">Remove existing gutters</p>
          </div>
          <Switch 
            id="removal" 
            checked={includeRemoval} 
            onCheckedChange={setIncludeRemoval} 
            className="data-[state=checked]:bg-stark-red"
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalOptions;
