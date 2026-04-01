
import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const AsphaltCalculator = () => {
  const [roofSize, setRoofSize] = useState('medium');
  const [roofPitch, setRoofPitch] = useState('medium');
  const [calculatedEstimate, setCalculatedEstimate] = useState<number | null>(null);

  // Base prices for GAF Timberline HDZ shingles
  const basePrices = {
    small: 8500,
    medium: 12000,
    large: 16500,
    xlarge: 22000
  };

  // Pitch multipliers
  const pitchMultipliers = {
    low: 0.9,
    medium: 1.0,
    steep: 1.15,
    very_steep: 1.35
  };

  const calculateEstimate = () => {
    const basePrice = basePrices[roofSize as keyof typeof basePrices];
    const pitchMultiplier = pitchMultipliers[roofPitch as keyof typeof pitchMultipliers];
    
    // Calculate the estimate with a small random variation for realism
    const variation = Math.random() * 0.1 - 0.05; // -5% to +5% 
    const estimate = Math.round(basePrice * pitchMultiplier * (1 + variation));
    
    setCalculatedEstimate(estimate);
    
    toast.success("Estimate calculated!", {
      description: "This is an approximate cost for GAF Timberline HDZ® shingles."
    });
  };

  return (
    <section id="calculator" className="py-12 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Header Banner */}
          <div className="bg-stark-red text-white p-4 flex items-center justify-center">
            <Calculator className="mr-2" size={24} />
            <h2 className="text-xl md:text-2xl font-bold">GAF Timberline HDZ® Cost Calculator</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Calculator Form */}
            <div className="p-6 md:p-8">
              <p className="text-navy mb-6">
                Get an instant estimate for your GAF Timberline HDZ® shingle roof replacement:
              </p>
              
              {/* Roof Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Roof Size:</label>
                <select 
                  value={roofSize} 
                  onChange={(e) => setRoofSize(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-stark-red"
                >
                  <option value="small">Small (less than 1,500 sq ft)</option>
                  <option value="medium">Medium (1,500 - 2,500 sq ft)</option>
                  <option value="large">Large (2,500 - 3,500 sq ft)</option>
                  <option value="xlarge">Extra Large (3,500+ sq ft)</option>
                </select>
              </div>
              
              {/* Roof Pitch Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Roof Pitch:</label>
                <select 
                  value={roofPitch} 
                  onChange={(e) => setRoofPitch(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-stark-red"
                >
                  <option value="low">Low Pitch (1/12 - 3/12)</option>
                  <option value="medium">Medium Pitch (4/12 - 7/12)</option>
                  <option value="steep">Steep Pitch (8/12 - 11/12)</option>
                  <option value="very_steep">Very Steep (12/12 or greater)</option>
                </select>
              </div>
              
              {/* Calculate Button */}
              <button
                onClick={calculateEstimate}
                className="w-full bg-stark-red hover:bg-stark-red/90 text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors animate-pulse-subtle"
              >
                Calculate Estimate
                <Calculator size={18} />
              </button>
            </div>
            
            {/* Results or Features */}
            <div className="bg-gray-50 p-6 md:p-8 flex flex-col">
              {calculatedEstimate ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-gray-600 mb-2">Your Estimated Cost</p>
                  <p className="text-4xl font-bold text-stark-red mb-4">${calculatedEstimate.toLocaleString()}</p>
                  <p className="text-sm text-gray-500 mb-6 text-center">
                    This is an approximate cost for GAF Timberline HDZ® shingles installation.
                  </p>
                  <Link to="/roof-estimator" className="btn-primary inline-flex items-center">
                    Get Detailed Estimate <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="font-bold text-navy text-lg">Includes:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-stark-red mr-2 flex-shrink-0 mt-0.5" />
                      <span>GAF Timberline HDZ® premium shingles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-stark-red mr-2 flex-shrink-0 mt-0.5" />
                      <span>Complete tear-off of existing roof</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-stark-red mr-2 flex-shrink-0 mt-0.5" />
                      <span>New underlayment and flashing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-stark-red mr-2 flex-shrink-0 mt-0.5" />
                      <span>Professional installation by GAF Master Elite® contractors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-stark-red mr-2 flex-shrink-0 mt-0.5" />
                      <span>Industry-leading warranty protection</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 italic">
                    Fill out the form for an instant estimate!
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Attention-grabbing design element */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-stark-red text-white py-2 px-6 rounded-full shadow-lg animate-bounce-slow">
        <span className="font-bold">Calculate Your Cost Now!</span>
      </div>
    </section>
  );
};

export default AsphaltCalculator;
