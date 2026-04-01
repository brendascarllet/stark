
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import EstimatorForm from './EstimatorForm';
import EstimatorResult from './EstimatorResult';
import { calculateGutterEstimate } from '@/utils/gutterEstimatorCalculations';

const GutterEstimatorCalculator = () => {
  // State for estimator inputs
  const [linearFeet, setLinearFeet] = useState(100);
  const [gutterSize, setGutterSize] = useState('5inch');
  const [gutterMaterial] = useState('aluminum');
  const [includeDownspouts, setIncludeDownspouts] = useState(true);
  const [includeLeafProtection, setIncludeLeafProtection] = useState(false);
  const [includeRemoval, setIncludeRemoval] = useState(true);
  const [estimateResult, setEstimateResult] = useState<null | { lowEstimate: number; highEstimate: number }>(null);

  // Calculate estimate
  const calculateEstimate = () => {
    const result = calculateGutterEstimate({
      linearFeet,
      gutterSize,
      includeDownspouts,
      includeLeafProtection,
      includeRemoval
    });
    
    setEstimateResult(result);
    
    toast.success("Estimate calculated successfully!", {
      description: "See your estimated cost range below."
    });
  };

  // Reset calculator
  const resetCalculator = () => {
    setLinearFeet(100);
    setGutterSize('5inch');
    setIncludeDownspouts(true);
    setIncludeLeafProtection(false);
    setIncludeRemoval(true);
    setEstimateResult(null);
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-md">
            <CardContent className="p-6 md:p-8">
              {!estimateResult ? (
                <EstimatorForm 
                  linearFeet={linearFeet}
                  setLinearFeet={setLinearFeet}
                  gutterSize={gutterSize}
                  setGutterSize={setGutterSize}
                  includeDownspouts={includeDownspouts}
                  setIncludeDownspouts={setIncludeDownspouts}
                  includeLeafProtection={includeLeafProtection}
                  setIncludeLeafProtection={setIncludeLeafProtection}
                  includeRemoval={includeRemoval}
                  setIncludeRemoval={setIncludeRemoval}
                  onCalculate={calculateEstimate}
                />
              ) : (
                <EstimatorResult 
                  lowEstimate={estimateResult.lowEstimate}
                  highEstimate={estimateResult.highEstimate}
                  resetCalculator={resetCalculator}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GutterEstimatorCalculator;
