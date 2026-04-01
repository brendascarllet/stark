
import React from 'react';
import LinearFeetSlider from './LinearFeetSlider';
import GutterSizeSelector from './GutterSizeSelector';
import GutterMaterialDisplay from './GutterMaterialDisplay';
import AdditionalOptions from './AdditionalOptions';
import CalculateButton from './CalculateButton';

interface EstimatorFormProps {
  linearFeet: number;
  setLinearFeet: (value: number) => void;
  gutterSize: string;
  setGutterSize: (value: string) => void;
  includeDownspouts: boolean;
  setIncludeDownspouts: (value: boolean) => void;
  includeLeafProtection: boolean;
  setIncludeLeafProtection: (value: boolean) => void;
  includeRemoval: boolean;
  setIncludeRemoval: (value: boolean) => void;
  onCalculate: () => void;
}

const EstimatorForm: React.FC<EstimatorFormProps> = ({
  linearFeet,
  setLinearFeet,
  gutterSize,
  setGutterSize,
  includeDownspouts,
  setIncludeDownspouts,
  includeLeafProtection,
  setIncludeLeafProtection,
  includeRemoval,
  setIncludeRemoval,
  onCalculate
}) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-stark-red mb-6">Estimate Your Gutters Cost</h2>
        <p className="text-sm text-charcoal/80 mb-8">
          Adjust the options below to get an approximate cost range for your gutter project. For a precise quote, please contact us for a professional inspection.
        </p>
      </div>
      
      <LinearFeetSlider linearFeet={linearFeet} setLinearFeet={setLinearFeet} />
      <GutterSizeSelector gutterSize={gutterSize} setGutterSize={setGutterSize} />
      <GutterMaterialDisplay />
      <AdditionalOptions 
        includeDownspouts={includeDownspouts}
        setIncludeDownspouts={setIncludeDownspouts}
        includeLeafProtection={includeLeafProtection}
        setIncludeLeafProtection={setIncludeLeafProtection}
        includeRemoval={includeRemoval}
        setIncludeRemoval={setIncludeRemoval}
      />
      <CalculateButton onCalculate={onCalculate} />
    </div>
  );
};

export default EstimatorForm;
