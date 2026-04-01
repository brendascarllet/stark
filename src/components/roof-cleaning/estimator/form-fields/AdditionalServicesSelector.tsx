
import React from 'react';
import { Check, Droplets, Leaf } from 'lucide-react';

const AdditionalServicesSelector: React.FC = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-navy mb-4">4. FREE Additional Services</h3>
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
        <p className="font-semibold text-emerald-800 mb-3">Special Offer: The following premium services are included FREE with every roof cleaning!</p>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border border-emerald-200">
            <div className="flex justify-between items-start">
              <div className="flex">
                <div className="mr-3 bg-emerald-100 p-2 rounded-full">
                  <Droplets size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold">FREE Gutter Cleaning</h4>
                  <p className="text-sm text-gray-600">Removes leaves, debris, and blockages</p>
                </div>
              </div>
              <Check size={18} className="text-emerald-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-emerald-200">
            <div className="flex justify-between items-start">
              <div className="flex">
                <div className="mr-3 bg-emerald-100 p-2 rounded-full">
                  <Leaf size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold">FREE Moss Prevention Treatment</h4>
                  <p className="text-sm text-gray-600">Inhibits future moss and algae growth</p>
                </div>
              </div>
              <Check size={18} className="text-emerald-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServicesSelector;
