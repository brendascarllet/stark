
import React, { useState } from 'react';
import { toast } from 'sonner';
import { calculateRoofEstimate } from '@/utils/roofEstimatorCalculations';
import EstimatorForm from './form/EstimatorForm';
import EstimatorResult from './result/EstimatorResult';
import { roofTypes, roofSizes, roofPitches } from '@/data/roofEstimatorData';

const EstimatorCalculator: React.FC = () => {
  // State for the estimator
  const [roofType, setRoofType] = useState('asphalt');
  const [roofSize, setRoofSize] = useState('medium');
  const [roofPitch, setRoofPitch] = useState('medium');
  const [roofLayers, setRoofLayers] = useState(1);
  const [chimneyCount, setChimneyCount] = useState(0);
  const [skylightCount, setSkylightCount] = useState(0);
  const [estimate, setEstimate] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Calculate the roof estimate
  const handleCalculate = () => {
    const calculatedEstimate = calculateRoofEstimate({
      roofType,
      roofSize,
      roofPitch,
      roofLayers,
      chimneyCount,
      skylightCount,
      roofTypes,
      roofSizes,
      roofPitches
    });
    
    setEstimate(calculatedEstimate);
    setFormSubmitted(true);

    toast.success("Roof estimate calculated successfully!", {
      description: `Your estimated roof replacement cost is $${calculatedEstimate.toLocaleString()}`
    });
  };

  const resetForm = () => {
    setRoofType('asphalt');
    setRoofSize('medium');
    setRoofPitch('medium');
    setRoofLayers(1);
    setChimneyCount(0);
    setSkylightCount(0);
    setEstimate(null);
    setFormSubmitted(false);
  };

  return (
    <section id="estimator" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-2">Estimate Your Roof Replacement</h2>
        <p className="section-subtitle text-center mb-12">
          Answer a few simple questions to get an approximate cost for your roof replacement project
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              {!formSubmitted ? (
                <EstimatorForm
                  roofType={roofType}
                  setRoofType={setRoofType}
                  roofSize={roofSize}
                  setRoofSize={setRoofSize}
                  roofPitch={roofPitch}
                  setRoofPitch={setRoofPitch}
                  roofLayers={roofLayers}
                  setRoofLayers={setRoofLayers}
                  chimneyCount={chimneyCount}
                  setChimneyCount={setChimneyCount}
                  skylightCount={skylightCount}
                  setSkylightCount={setSkylightCount}
                  handleCalculate={handleCalculate}
                  roofTypes={roofTypes}
                  roofSizes={roofSizes}
                  roofPitches={roofPitches}
                />
              ) : (
                <EstimatorResult
                  estimate={estimate}
                  resetForm={resetForm}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimatorCalculator;
