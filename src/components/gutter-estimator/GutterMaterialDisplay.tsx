
import React from 'react';
import { Check } from 'lucide-react';

const GutterMaterialDisplay: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Gutter Material</h3>
      <div className="border rounded-lg p-4 bg-stark-red/5 border-stark-red ring-2 ring-stark-red/20 max-w-md mx-auto">
        <div className="flex justify-between">
          <div>
            <h4 className="font-bold">Aluminum</h4>
            <p className="text-sm text-gray-600">Durable, lightweight, and rust-resistant</p>
          </div>
          <Check size={18} className="text-stark-red" />
        </div>
      </div>
    </div>
  );
};

export default GutterMaterialDisplay;
