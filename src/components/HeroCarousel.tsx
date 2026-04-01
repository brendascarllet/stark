
import React from 'react';
import { cn } from '@/lib/utils';
import HeroMediaRenderer from './hero/HeroMediaRenderer';
import CarouselControls from './hero/CarouselControls';
import CarouselIndicators from './hero/CarouselIndicators';
import ScrollIndicator from './hero/ScrollIndicator';
import { HeroMediaItem } from './hero/types';
import { useCarousel } from '@/hooks/useCarousel';

interface HeroCarouselProps {
  images: HeroMediaItem[];
  autoplayInterval?: number;
  className?: string;
  children?: React.ReactNode;
  showPlayPauseButton?: boolean;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  images,
  autoplayInterval = 6000,
  className,
  children,
  showPlayPauseButton = false
}) => {
  const {
    currentIndex,
    validImages,
    showScrollIndicator,
    isPaused,
    goToSlide,
    goToNext,
    goToPrevious,
    togglePause
  } = useCarousel({ images, autoplayInterval });

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Media Items */}
      <div className="absolute inset-0 w-full h-full">
        {validImages.map((item, index) => (
          <HeroMediaRenderer 
            key={index}
            item={item}
            isActive={index === currentIndex}
            index={index}
          />
        ))}
      </div>
      
      {/* Children passed to the component */}
      {children && (
        <div className="relative z-20 w-full h-full">
          {children}
        </div>
      )}
      
      {/* Scroll Down Indicator */}
      <ScrollIndicator show={showScrollIndicator} />
      
      {/* Navigation Controls */}
      <CarouselControls 
        goToPrevious={goToPrevious}
        goToNext={goToNext}
        togglePause={togglePause}
        isPaused={isPaused}
        showPlayPauseButton={showPlayPauseButton}
      />
      
      {/* Indicators - Only show for valid images */}
      <CarouselIndicators 
        totalSlides={validImages.length}
        currentIndex={currentIndex}
        goToSlide={goToSlide}
      />
    </div>
  );
};

export default HeroCarousel;
