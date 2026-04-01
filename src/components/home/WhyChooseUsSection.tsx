import React from 'react';
import { Shield, Award, Home } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const WhyChooseUsSection: React.FC = () => {
  const isMobile = useIsMobile();
  const iconSize = isMobile ? 24 : 28;
  return <section className="section-padding">
      
    </section>;
};
export default WhyChooseUsSection;