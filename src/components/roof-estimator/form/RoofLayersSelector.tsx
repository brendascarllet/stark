
import React from 'react';

interface RoofLayersSelectorProps {
  roofLayers: number;
  setRoofLayers: (layers: number) => void;
}

const RoofLayersSelector: React.FC<RoofLayersSelectorProps> = ({ roofLayers, setRoofLayers }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-navy mb-4">4. Existing Roof Layers</h3>
      <p className="text-sm text-gray-600 mb-3">
        How many layers of roofing need to be removed? Multiple layers increase removal costs.
      </p>
      <div className="flex items-center max-w-xs">
        <button 
          className="w-10 h-10 rounded-l-lg bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
          onClick={() => setRoofLayers(Math.max(1, roofLayers - 1))}
          disabled={roofLayers <= 1}
        >
          -
        </button>
        <div className="flex-1 h-10 flex items-center justify-center bg-gray-100 font-bold">
          {roofLayers} {roofLayers === 1 ? 'layer' : 'layers'}
        </div>
        <button 
          className="w-10 h-10 rounded-r-lg bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
          onClick={() => setRoofLayers(Math.min(3, roofLayers + 1))}
          disabled={roofLayers >= 3}
        >
          +
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-2">Maximum 3 layers (most building codes limit to 2-3 layers)</p>
    </div>
  );
};

export default RoofLayersSelector;
