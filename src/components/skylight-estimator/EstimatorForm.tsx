
import React from 'react';
import { Check, Calculator } from 'lucide-react';

export interface SkylightType {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

export interface SkylightSize {
  id: string;
  name: string;
  multiplier: number;
}

export interface InstallationType {
  id: string;
  name: string;
  price: number;
}

interface EstimatorFormProps {
  skylightType: string;
  setSkylightType: (type: string) => void;
  size: string;
  setSize: (size: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  installationType: string;
  setInstallationType: (type: string) => void;
  flashing: boolean;
  setFlashing: (flashing: boolean) => void;
  blinds: boolean;
  setBlinds: (blinds: boolean) => void;
  skylightTypes: SkylightType[];
  skylightSizes: SkylightSize[];
  installationTypes: InstallationType[];
  handleCalculate: () => void;
}

const EstimatorForm: React.FC<EstimatorFormProps> = ({
  skylightType,
  setSkylightType,
  size,
  setSize,
  quantity,
  setQuantity,
  installationType,
  setInstallationType,
  flashing,
  setFlashing,
  blinds,
  setBlinds,
  skylightTypes,
  skylightSizes,
  installationTypes,
  handleCalculate
}) => {
  return (
    <div className="space-y-8">
      {/* Skylight Type */}
      <div>
        <h3 className="text-xl font-bold text-navy mb-4">1. Select Skylight Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skylightTypes.map((type) => (
            <div 
              key={type.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                skylightType === type.id 
                  ? 'border-stark-red ring-2 ring-stark-red/20 bg-stark-red/5' 
                  : 'border-gray-200 hover:border-stark-red/50'
              }`}
              onClick={() => setSkylightType(type.id)}
            >
              <div className="flex justify-between items-start">
                <h4 className="font-bold">{type.name}</h4>
                {skylightType === type.id && <Check size={18} className="text-stark-red" />}
              </div>
              <p className="text-sm text-gray-600 mt-1">{type.description}</p>
              <p className="text-stark-red font-semibold mt-2">From ${type.basePrice}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Skylight Size */}
      <div>
        <h3 className="text-xl font-bold text-navy mb-4">2. Select Size</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {skylightSizes.map((sizeOption) => (
            <div 
              key={sizeOption.id}
              className={`border rounded-lg p-3 cursor-pointer transition-all ${
                size === sizeOption.id 
                  ? 'border-stark-red ring-2 ring-stark-red/20 bg-stark-red/5' 
                  : 'border-gray-200 hover:border-stark-red/50'
              }`}
              onClick={() => setSize(sizeOption.id)}
            >
              <div className="flex justify-between items-start">
                <span className="font-medium">{sizeOption.name}</span>
                {size === sizeOption.id && <Check size={16} className="text-stark-red" />}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quantity */}
      <div>
        <h3 className="text-xl font-bold text-navy mb-4">3. How Many Skylights?</h3>
        <div className="flex items-center max-w-xs">
          <button 
            className="w-10 h-10 rounded-l-lg bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
          >
            -
          </button>
          <div className="flex-1 h-10 flex items-center justify-center bg-gray-100 font-bold">
            {quantity}
          </div>
          <button 
            className="w-10 h-10 rounded-r-lg bg-gray-200 flex items-center justify-center hover:bg-gray-300"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      
      {/* Installation Type */}
      <div>
        <h3 className="text-xl font-bold text-navy mb-4">4. Installation Type</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {installationTypes.map((installation) => (
            <div 
              key={installation.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                installationType === installation.id 
                  ? 'border-stark-red ring-2 ring-stark-red/20 bg-stark-red/5' 
                  : 'border-gray-200 hover:border-stark-red/50'
              }`}
              onClick={() => setInstallationType(installation.id)}
            >
              <div className="flex justify-between items-start">
                <h4 className="font-bold">{installation.name}</h4>
                {installationType === installation.id && <Check size={18} className="text-stark-red" />}
              </div>
              <p className="text-stark-red font-semibold mt-2">${installation.price} per skylight</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Additional Options */}
      <div>
        <h3 className="text-xl font-bold text-navy mb-4">5. Additional Options</h3>
        <div className="space-y-3">
          <div 
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              flashing 
                ? 'border-stark-red ring-2 ring-stark-red/20 bg-stark-red/5' 
                : 'border-gray-200 hover:border-stark-red/50'
            }`}
            onClick={() => setFlashing(!flashing)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold">Flashing Kit</h4>
                <p className="text-sm text-gray-600">For proper water drainage and sealing</p>
              </div>
              {flashing && <Check size={18} className="text-stark-red" />}
            </div>
            <p className="text-stark-red font-semibold mt-1">$150 per skylight</p>
          </div>
          
          <div 
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              blinds 
                ? 'border-stark-red ring-2 ring-stark-red/20 bg-stark-red/5' 
                : 'border-gray-200 hover:border-stark-red/50'
            }`}
            onClick={() => setBlinds(!blinds)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold">Solar Blinds</h4>
                <p className="text-sm text-gray-600">Remote-controlled blinds for light control</p>
              </div>
              {blinds && <Check size={18} className="text-stark-red" />}
            </div>
            <p className="text-stark-red font-semibold mt-1">$300 per skylight</p>
          </div>
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="pt-4">
        <button 
          className="btn-primary w-full py-4 flex items-center justify-center"
          onClick={handleCalculate}
        >
          <Calculator size={18} className="mr-2" />
          Calculate Estimate
        </button>
        <p className="text-sm text-gray-500 text-center mt-3">
          This is just an estimate. For a precise quote, please contact us.
        </p>
      </div>
    </div>
  );
};

export default EstimatorForm;
