
import React from 'react';
import { HelpCircle } from 'lucide-react';

interface StormFAQItemProps {
  question: string;
  answer: string;
}

const StormFAQItem: React.FC<StormFAQItemProps> = ({ question, answer }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-start">
        <HelpCircle className="text-stark-red flex-shrink-0 mt-1 mr-4" size={24} />
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">{question}</h3>
          <p className="text-charcoal/80">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default StormFAQItem;
