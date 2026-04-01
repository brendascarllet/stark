
import React, { useState, useRef } from 'react';
import { Calculator } from 'lucide-react';
import { toast } from 'sonner';
import EstimatorForm from './estimator/EstimatorForm';
import EstimatorResult from './estimator/EstimatorResult';
import { calculateEstimate } from '@/utils/estimatorCalculations';
import { RoofSize, GrowthLevel, RoofType, RoofPitch } from '@/types/estimator';

// Data for the estimator
const roofSizes: RoofSize[] = [
  { id: 'small', name: 'Small (under 1,500 sq ft)', multiplier: 0.75, sqft: 1500 },
  { id: 'medium', name: 'Medium (1,500 - 2,500 sq ft)', multiplier: 1, sqft: 2000 },
  { id: 'large', name: 'Large (2,500 - 3,500 sq ft)', multiplier: 1.5, sqft: 3000 },
  { id: 'xlarge', name: 'Extra Large (3,500+ sq ft)', multiplier: 2, sqft: 4000 },
];

const growthLevels: GrowthLevel[] = [
  { id: 'light', name: 'Light Growth', multiplier: 0.8, description: 'Minor algae or light discoloration' },
  { id: 'moderate', name: 'Moderate Growth', multiplier: 1, description: 'Visible algae streaks or small moss patches' },
  { id: 'heavy', name: 'Heavy Growth', multiplier: 1.4, description: 'Extensive moss or lichen coverage' },
  { id: 'severe', name: 'Severe Growth', multiplier: 1.8, description: 'Thick moss, extensive algae or lichen throughout roof' },
];

const roofTypes: RoofType[] = [
  { id: 'asphalt', name: 'Asphalt Shingles', basePrice: 250, description: 'Most common residential roofing' },
  { id: 'metal', name: 'Metal Roofing', basePrice: 200, description: 'Requires special cleaning techniques' },
  { id: 'tpo', name: 'TPO Roofing', basePrice: 180, description: 'Flat or low-slope membrane roofing' },
  { id: 'cedar', name: 'Cedar Shakes', basePrice: 350, description: 'Requires gentle cleaning process' },
];

const roofPitches: RoofPitch[] = [
  { id: 'flat', name: 'Flat/Low Pitch', multiplier: 1.0, description: 'Nearly level roof (0-3/12 slope)' },
  { id: 'medium', name: 'Medium Pitch', multiplier: 1.2, description: 'Standard residential pitch (4-7/12 slope)' },
  { id: 'steep', name: 'Steep Pitch', multiplier: 1.4, description: 'Steep roof requiring safety equipment (8-12/12)' },
  { id: 'very_steep', name: 'Very Steep', multiplier: 1.6, description: 'Extremely steep pitch (12+/12 slope)' },
];

const CleaningEstimator = () => {
  // State for the estimator
  const [roofSize, setRoofSize] = useState('medium');
  const [growthLevel, setGrowthLevel] = useState('moderate');
  const [roofType, setRoofType] = useState('asphalt');
  const [roofPitch, setRoofPitch] = useState('medium');
  const [houseStories, setHouseStories] = useState(1);
  const [estimate, setEstimate] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // Calculate the cleaning estimate
  const handleCalculate = () => {
    const result = calculateEstimate({
      roofSize,
      growthLevel,
      roofType,
      roofPitch,
      houseStories,
      roofSizes,
      growthLevels,
      roofTypes,
      roofPitches
    });
    
    setEstimate(result);
    setFormSubmitted(true);

    toast.success("Roof cleaning estimate calculated successfully!", {
      description: `Your estimated cost is $${result.toLocaleString()}`
    });
    
    // Set a small timeout to allow state to update before scrolling
    setTimeout(() => {
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const resetForm = () => {
    setRoofSize('medium');
    setGrowthLevel('moderate');
    setRoofType('asphalt');
    setRoofPitch('medium');
    setHouseStories(1);
    setEstimate(null);
    setFormSubmitted(false);
  };

  return (
    <section id="estimator" className="section-padding bg-gray-50" ref={resultRef}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-2">Estimate Your Roof Cleaning Cost</h2>
        <p className="section-subtitle text-center mb-12">
          Answer a few simple questions to get an approximate cost for your professional roof cleaning
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              {!formSubmitted ? (
                <EstimatorForm 
                  roofSize={roofSize}
                  setRoofSize={setRoofSize}
                  growthLevel={growthLevel}
                  setGrowthLevel={setGrowthLevel}
                  roofType={roofType}
                  setRoofType={setRoofType}
                  roofPitch={roofPitch}
                  setRoofPitch={setRoofPitch}
                  houseStories={houseStories}
                  setHouseStories={setHouseStories}
                  handleCalculate={handleCalculate}
                  roofSizes={roofSizes}
                  growthLevels={growthLevels}
                  roofTypes={roofTypes}
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

export default CleaningEstimator;
