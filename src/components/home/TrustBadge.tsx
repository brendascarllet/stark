
import React from 'react';
import { LucideIcon, Package, Gem, HardHat, Shield, ShieldCheck } from 'lucide-react';

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ icon: Icon, title, description }) => {
  // If the icon is a specific one that would look better as a more specific icon
  const getBetterIcon = () => {
    if (title.includes("Premium") || title.includes("Materials")) {
      return Gem;
    } else if (title.includes("Expert") || title.includes("Crews")) {
      return HardHat;
    } else if (title.includes("Insured")) {
      return ShieldCheck;
    } else {
      return Icon;
    }
  };

  const BestIcon = getBetterIcon();

  return (
    <div className="trust-badge flex flex-col items-center p-6 bg-white rounded-xl transition-all duration-300 border border-gray-100 hover:shadow-lg">
      <BestIcon className="w-12 h-12 text-stark-red mb-5" />
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-center text-charcoal/80 text-sm">{description}</p>
    </div>
  );
};

export default TrustBadge;
