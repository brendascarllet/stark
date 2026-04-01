
import React, { useState } from 'react';
import EstimatorForm from './EstimatorForm';
import EstimatorResult from './EstimatorResult';
import { toast } from 'sonner';
import { calculateSkylightEstimate, SkylightType, SkylightSize, InstallationType } from '@/utils/skylightEstimator';

const EstimatorContainer: React.FC = () => {
  // State for the estimator
  const [skylightType, setSkylightType] = useState('fixed');
  const [size, setSize] = useState('medium');
  const [quantity, setQuantity] = useState(1);
  const [installationType, setInstallationType] = useState('new');
  const [flashing, setFlashing] = useState(false);
  const [blinds, setBlinds] = useState(false);
  const [estimate, setEstimate] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const skylightTypes: SkylightType[] = [
    { id: 'fixed', name: 'Fixed Skylight', basePrice: 800, description: 'Provides light only, doesn\'t open' },
    { id: 'vented', name: 'Vented Skylight', basePrice: 1200, description: 'Opens for ventilation, manual or electric' },
    { id: 'tubular', name: 'Tubular Skylight', basePrice: 600, description: 'Small, tube-shaped for small spaces' },
  ];

  const skylightSizes: SkylightSize[] = [
    { id: 'small', name: 'Small (14" × 30")', multiplier: 0.8 },
    { id: 'medium', name: 'Medium (21" × 46")', multiplier: 1 },
    { id: 'large', name: 'Large (30" × 46")', multiplier: 1.3 },
    { id: 'xlarge', name: 'Extra Large (44" × 46")', multiplier: 1.6 },
  ];

  const installationTypes: InstallationType[] = [
    { id: 'new', name: 'New Installation', price: 400 },
    { id: 'replacement', name: 'Replacement', price: 250 },
  ];

  // Calculate the estimate using the utility function
  const calculateEstimate = () => {
    const calculatedEstimate = calculateSkylightEstimate(
      skylightType,
      size,
      quantity,
      installationType,
      flashing,
      blinds,
      skylightTypes,
      skylightSizes,
      installationTypes
    );
    
    setEstimate(calculatedEstimate);
    setFormSubmitted(true);

    toast.success("Estimate calculated successfully!", {
      description: "See your estimated cost below."
    });
  };

  const resetForm = () => {
    setSkylightType('fixed');
    setSize('medium');
    setQuantity(1);
    setInstallationType('new');
    setFlashing(false);
    setBlinds(false);
    setEstimate(null);
    setFormSubmitted(false);
  };

  return (
    <section id="estimator" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-2">Estimate Your Skylight Project</h2>
        <p className="section-subtitle text-center mb-12">
          Answer a few simple questions to get an approximate cost for your skylight installation
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              {!formSubmitted ? (
                <EstimatorForm
                  skylightType={skylightType}
                  setSkylightType={setSkylightType}
                  size={size}
                  setSize={setSize}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  installationType={installationType}
                  setInstallationType={setInstallationType}
                  flashing={flashing}
                  setFlashing={setFlashing}
                  blinds={blinds}
                  setBlinds={setBlinds}
                  skylightTypes={skylightTypes}
                  skylightSizes={skylightSizes}
                  installationTypes={installationTypes}
                  handleCalculate={calculateEstimate}
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

export default EstimatorContainer;
