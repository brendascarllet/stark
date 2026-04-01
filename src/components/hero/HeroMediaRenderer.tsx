
import React from 'react';
import { cn } from '@/lib/utils';
import { HeroMediaItem } from './types';

interface HeroMediaRendererProps {
  item: HeroMediaItem;
  isActive: boolean;
  index: number;
}

const HeroMediaRenderer: React.FC<HeroMediaRendererProps> = ({ 
  item, 
  isActive,
  index 
}) => {
  // Render the appropriate media based on type
  const renderMedia = () => {
    if (item.type === 'video') {
      return (
        <video
          src={item.url}
          className="w-full h-full object-cover object-center animate-scale-in"
          autoPlay={item.autoplay !== false}
          muted={item.muted !== false}
          loop={item.loop !== false}
          playsInline
        />
      );
    } else {
      // Default to image
      return (
        <img
          src={item.url}
          alt={item.alt}
          className="w-full h-full object-cover object-center animate-scale-in"
        />
      );
    }
  };

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full transition-opacity duration-1000",
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      )}
    >
      {renderMedia()}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Caption with updated styling - made smaller and centered */}
      {item.caption && (
        <div className="absolute bottom-24 left-0 right-0 z-20 text-center">
          <h3 className={cn(
            "hero-caption text-white text-sm md:text-base font-heading font-medium drop-shadow-lg mx-auto",
            isActive ? "animate-fade-in" : ""
          )}>
            {item.caption}
          </h3>
        </div>
      )}
    </div>
  );
};

export default HeroMediaRenderer;
