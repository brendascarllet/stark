
import React from 'react';
import { ShieldCheck, Award, Gem, HardHat } from 'lucide-react';
import TrustBadge from './TrustBadge';

const TrustBadges: React.FC = () => {
  const trustBadges = [{
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Protected with comprehensive liability insurance"
  }, {
    icon: Gem,
    title: "Premium Materials",
    description: "Only top-quality materials and products"
  }, {
    icon: HardHat,
    title: "Expert Crews",
    description: "Highly trained and experienced professionals"
  }, {
    icon: Award,
    title: "Warranty Protection",
    description: "Comprehensive warranties on labor and materials"
  }];
  
  return <>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stark-red">Why Homeowners Trust Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {trustBadges.map((badge, index) => <TrustBadge key={index} icon={badge.icon} title={badge.title} description={badge.description} />)}
      </div>
    </>;
};

export default TrustBadges;
