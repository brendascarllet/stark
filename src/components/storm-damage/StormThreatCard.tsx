
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StormThreatCardProps {
  title: string;
  quote: string;
  Icon: LucideIcon;
  signs: string;
  risk: string;
  delay?: number;
}

const StormThreatCard: React.FC<StormThreatCardProps> = ({
  title,
  quote,
  Icon,
  signs,
  risk,
  delay = 0
}) => {
  return (
    <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-stark-red flex items-center justify-center mb-6 mx-auto">
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-heading font-bold text-navy mb-3 text-center">{title}</h3>
      <p className="text-charcoal/80 font-medium mb-4 text-center italic">
        "{quote}"
      </p>
      <div className="mt-6 p-4 bg-navy/5 rounded-lg border border-navy/10">
        <h4 className="font-medium text-navy mb-2">What to look for:</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 bg-stark-red rounded-full mr-2 flex-shrink-0 mt-1"></span>
            <span><strong>Signs:</strong> {signs}</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-4 h-4 bg-stark-red rounded-full mr-2 flex-shrink-0 mt-1"></span>
            <span><strong>Risk:</strong> {risk}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StormThreatCard;
