
import React from 'react';
import { Check } from 'lucide-react';

interface BenefitSectionProps {
  title: string;
  stepNumber: number;
  benefits: string[];
}

const BenefitSection: React.FC<BenefitSectionProps> = ({ title, stepNumber, benefits }) => {
  return (
    <div className="bg-emerald-50 p-5 rounded-lg">
      <h4 className="font-bold text-navy mb-3 flex items-center gap-2">
        <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">{stepNumber}</span>
        {title}
      </h4>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitSection;
