
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface CouponCardProps {
  color: 'stark-red' | 'navy' | 'emerald-600' | 'amber-500' | 'light-blue';
  badgeText: string;
  icon: React.ReactNode;
  title: string;
  price: string;
  originalPrice: string;
  savings: string;
  savingsPercent: string;
  features: Array<{
    text: string;
    delay: number;
  }>;
  linkTo: string;
  couponType: string;
  disclaimer: string;
  priceRange?: {
    show: boolean;
    startingAt?: string;
    minPrice?: string;
    maxPrice?: string;
    priceNote?: string;
  };
}

const CouponCard: React.FC<CouponCardProps> = ({
  color,
  badgeText,
  icon,
  title,
  price,
  originalPrice,
  savings,
  features,
  linkTo,
  couponType,
  disclaimer,
  priceRange
}) => {
  const getColors = () => {
    switch (color) {
      case 'stark-red':
        return {
          badge: 'bg-[#8B0000]',
          border: 'border-[#8B0000]/20',
          bg: 'bg-[#FFF1F0]',
          button: 'bg-[#8B0000] hover:bg-[#6B0000]',
          text: 'text-[#8B0000]'
        };
      case 'navy':
        return {
          badge: 'bg-navy',
          border: 'border-navy/20',
          bg: 'bg-navy/5',
          button: 'bg-navy hover:bg-navy/90',
          text: 'text-navy'
        };
      case 'light-blue':
        return {
          badge: 'bg-blue-300',
          border: 'border-blue-300/20',
          bg: 'bg-blue-50',
          button: 'bg-blue-400 hover:bg-blue-500',
          text: 'text-blue-500'
        };
      case 'emerald-600':
        return {
          badge: 'bg-emerald-600',
          border: 'border-emerald-600/20',
          bg: 'bg-emerald-600/5',
          button: 'bg-emerald-600 hover:bg-emerald-600/90',
          text: 'text-emerald-600'
        };
      case 'amber-500':
        return {
          badge: 'bg-amber-500',
          border: 'border-amber-500/20',
          bg: 'bg-amber-500/5',
          button: 'bg-amber-500 hover:bg-amber-500/90',
          text: 'text-amber-500'
        };
      default:
        return {
          badge: 'bg-[#8B0000]',
          border: 'border-[#8B0000]/20',
          bg: 'bg-[#FFF1F0]',
          button: 'bg-[#8B0000] hover:bg-[#6B0000]',
          text: 'text-[#8B0000]'
        };
    }
  };
  
  const colors = getColors();

  // Simple animation for feature items
  const fadeIn = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className={`rounded-xl overflow-hidden border ${colors.border} h-full flex flex-col shadow-md`}>
      {/* Header - Equal height across all cards */}
      <div className={`${colors.badge} text-white py-3 px-4 text-center flex items-center justify-center h-[48px]`}>
        <span className="flex items-center text-sm font-bold">{icon} {badgeText}</span>
      </div>

      {/* Content */}
      <div className={`p-6 flex-grow ${colors.bg}`}>
        {/* Title - Fixed height for alignment */}
        <h3 className="text-xl font-bold text-navy mb-4 min-h-[56px] flex items-center">{title}</h3>

        {/* Price Display - Consistent height and alignment */}
        <div className="mb-5 min-h-[80px]">
          {priceRange?.show ? (
            <div className="flex flex-col">
              {priceRange.startingAt && <div className="text-sm text-gray-600 mb-1">{priceRange.startingAt}</div>}
              <div className="flex items-baseline flex-wrap gap-x-2">
                <span className="text-3xl font-bold">{priceRange.minPrice || price}</span>
                {priceRange.maxPrice && <span className="text-lg font-medium text-gray-600">- {priceRange.maxPrice}</span>}
                <span className="text-sm line-through text-gray-500 ml-2">{originalPrice}</span>
                <span className={`${colors.text} font-semibold text-sm ml-1`}>{savings}</span>
              </div>
              {priceRange.priceNote && <div className="text-xs text-gray-600 mt-1">{priceRange.priceNote}</div>}
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="flex items-baseline flex-wrap gap-x-2">
                <span className="text-3xl font-bold">{price}</span>
                <span className="text-sm line-through text-gray-500 ml-2">{originalPrice}</span>
                <span className={`${colors.text} font-semibold text-sm ml-1`}>{savings}</span>
              </div>
            </div>
          )}
        </div>

        {/* Features - Consistent height across all cards */}
        <ul className="space-y-3 mb-6 min-h-[120px]">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start" 
              initial="hidden" 
              whileInView="visible" 
              viewport={{once: true}} 
              variants={fadeIn} 
              transition={{delay: index * 0.05}}
            >
              <Check className={`${colors.text} h-5 w-5 mr-2 flex-shrink-0 mt-0.5`} />
              <span className="text-sm">{feature.text}</span>
            </motion.li>
          ))}
        </ul>

        {/* Call to Action - Consistent button styling */}
        <Link 
          to={linkTo} 
          className={`block text-center py-3 px-4 rounded-md ${colors.button} text-white font-medium transition-all duration-300 hover:shadow-lg w-full`}
        >
          Claim This Offer
        </Link>
      </div>

      {/* Footer / Disclaimer - Consistent height */}
      <div className="bg-gray-50 p-3 text-xs text-gray-500 text-center min-h-[70px] flex flex-col justify-center">
        <div className="font-medium mb-1">{couponType}</div>
        <div>{disclaimer}</div>
      </div>
    </div>
  );
};

export default CouponCard;
