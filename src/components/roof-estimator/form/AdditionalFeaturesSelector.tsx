
import React from 'react';

interface AdditionalFeaturesSelectorProps {
  chimneyCount: number;
  setChimneyCount: (count: number) => void;
  skylightCount: number;
  setSkylightCount: (count: number) => void;
}

const AdditionalFeaturesSelector: React.FC<AdditionalFeaturesSelectorProps> = ({
  chimneyCount,
  setChimneyCount,
  skylightCount,
  setSkylightCount
}) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-navy mb-4">5. Additional Factors</h3>
      <p className="text-sm text-gray-600 mb-3">
        Additional features like chimneys and skylights require special work and increase the total cost.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Chimney Counter */}
        <div className="border rounded-lg p-5 transition-all border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="font-bold">Chimneys</h4>
              <p className="text-sm text-gray-600">Each chimney requires special flashing & sealing</p>
            </div>
          </div>
          <div className="flex items-center max-w-xs mt-2">
            <button 
              className="w-10 h-10 rounded-l-lg bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
              onClick={() => setChimneyCount(Math.max(0, chimneyCount - 1))}
              disabled={chimneyCount <= 0}
            >
              -
            </button>
            <div className="flex-1 h-10 flex items-center justify-center bg-gray-100 font-bold">
              {chimneyCount} {chimneyCount === 1 ? 'chimney' : 'chimneys'}
            </div>
            <button 
              className="w-10 h-10 rounded-r-lg bg-gray-200 flex items-center justify-center hover:bg-gray-300"
              onClick={() => setChimneyCount(Math.min(5, chimneyCount + 1))}
              disabled={chimneyCount >= 5}
            >
              +
            </button>
          </div>
        </div>
        
        {/* Skylight Counter */}
        <div className="border rounded-lg p-5 transition-all border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="font-bold">Skylights</h4>
              <p className="text-sm text-gray-600">Each skylight requires special work and waterproofing</p>
            </div>
          </div>
          <div className="flex items-center max-w-xs mt-2">
            <button 
              className="w-10 h-10 rounded-l-lg bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
              onClick={() => setSkylightCount(Math.max(0, skylightCount - 1))}
              disabled={skylightCount <= 0}
            >
              -
            </button>
            <div className="flex-1 h-10 flex items-center justify-center bg-gray-100 font-bold">
              {skylightCount} {skylightCount === 1 ? 'skylight' : 'skylights'}
            </div>
            <button 
              className="w-10 h-10 rounded-r-lg bg-gray-200 flex items-center justify-center hover:bg-gray-300"
              onClick={() => setSkylightCount(Math.min(10, skylightCount + 1))}
              disabled={skylightCount >= 10}
            >
              +
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Maximum 10 skylights</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalFeaturesSelector;
