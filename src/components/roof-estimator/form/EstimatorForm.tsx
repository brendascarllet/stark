
import React from 'react';
import { Calculator } from 'lucide-react';
import RoofTypeSelector from './RoofTypeSelector';
import RoofSizeSelector from './RoofSizeSelector';
import RoofPitchSelector from './RoofPitchSelector';
import RoofLayersSelector from './RoofLayersSelector';
import AdditionalFeaturesSelector from './AdditionalFeaturesSelector';
import { EstimatorFormProps } from '@/types/roof-estimator-form';

const EstimatorForm: React.FC<EstimatorFormProps> = ({
  roofType,
  setRoofType,
  roofSize,
  setRoofSize,
  roofPitch,
  setRoofPitch,
  roofLayers,
  setRoofLayers,
  chimneyCount,
  setChimneyCount,
  skylightCount,
  setSkylightCount,
  handleCalculate,
  roofTypes,
  roofSizes,
  roofPitches
}) => {
  return (
    <div className="space-y-8">
      {/* Roof Type */}
      <RoofTypeSelector 
        roofType={roofType}
        setRoofType={setRoofType}
        roofTypes={roofTypes}
      />
      
      {/* Roof Size */}
      <RoofSizeSelector 
        roofSize={roofSize}
        setRoofSize={setRoofSize}
        roofSizes={roofSizes}
      />
      
      {/* Roof Pitch */}
      <RoofPitchSelector 
        roofPitch={roofPitch}
        setRoofPitch={setRoofPitch}
        roofPitches={roofPitches}
      />
      
      {/* Existing Roof Layers */}
      <RoofLayersSelector 
        roofLayers={roofLayers}
        setRoofLayers={setRoofLayers}
      />
      
      {/* Additional Features */}
      <AdditionalFeaturesSelector 
        chimneyCount={chimneyCount}
        setChimneyCount={setChimneyCount}
        skylightCount={skylightCount}
        setSkylightCount={setSkylightCount}
      />
      
      {/* Submit Button */}
      <div className="pt-4">
        <button 
          className="btn-primary w-full py-4 flex items-center justify-center"
          onClick={handleCalculate}
        >
          <Calculator size={18} className="mr-2" />
          Calculate Roof Estimate
        </button>
        <p className="text-sm text-gray-500 text-center mt-3">
          This is just an estimate. For a precise quote, please contact us for a professional inspection.
        </p>
      </div>
    </div>
  );
};

export default EstimatorForm;
