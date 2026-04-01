
import React from 'react';
import { Calculator } from 'lucide-react';
import { EstimatorFormProps } from '@/types/estimator';
import RoofSizeSelector from './form-fields/RoofSizeSelector';
import GrowthLevelSelector from './form-fields/GrowthLevelSelector';
import RoofTypeSelector from './form-fields/RoofTypeSelector';
import RoofPitchSelector from './form-fields/RoofPitchSelector';
import AdditionalServicesSelector from './form-fields/AdditionalServicesSelector';
import HouseStoriesSelector from './form-fields/HouseStoriesSelector';

const EstimatorForm: React.FC<EstimatorFormProps> = ({
  roofSize,
  setRoofSize,
  growthLevel,
  setGrowthLevel,
  roofType,
  setRoofType,
  roofPitch,
  setRoofPitch,
  houseStories,
  setHouseStories,
  handleCalculate,
  roofSizes,
  growthLevels,
  roofTypes,
  roofPitches
}) => {
  return (
    <div className="space-y-8">
      {/* Roof Size */}
      <RoofSizeSelector 
        roofSize={roofSize} 
        setRoofSize={setRoofSize} 
        roofSizes={roofSizes} 
      />
      
      {/* Growth Level */}
      <GrowthLevelSelector 
        growthLevel={growthLevel} 
        setGrowthLevel={setGrowthLevel} 
        growthLevels={growthLevels} 
      />
      
      {/* Roof Type */}
      <RoofTypeSelector 
        roofType={roofType} 
        setRoofType={setRoofType} 
        roofTypes={roofTypes} 
      />
      
      {/* Roof Pitch */}
      <RoofPitchSelector
        roofPitch={roofPitch}
        setRoofPitch={setRoofPitch}
        roofPitches={roofPitches}
      />
      
      {/* Additional Services (now showing as FREE) */}
      <AdditionalServicesSelector />
      
      {/* House Stories */}
      <HouseStoriesSelector
        houseStories={houseStories}
        setHouseStories={setHouseStories}
      />
      
      {/* Submit Button */}
      <div className="pt-4">
        <button 
          className="btn-primary w-full py-4 flex items-center justify-center"
          onClick={handleCalculate}
        >
          <Calculator size={18} className="mr-2" />
          Calculate Cleaning Estimate
        </button>
        <p className="text-sm text-gray-500 text-center mt-3">
          This is just an estimate. For a precise quote, please contact us for a professional inspection.
        </p>
      </div>
    </div>
  );
};

export default EstimatorForm;
