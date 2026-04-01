import React from 'react';
import { ArrowDown } from 'lucide-react';
interface ScrollIndicatorProps {
  show: boolean;
}
const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  show
}) => {
  if (!show) return null;
  return <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center animate-bounce cursor-pointer" onClick={() => window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  })}>
      
      <ArrowDown className="text-white" size={20} />
    </div>;
};
export default ScrollIndicator;