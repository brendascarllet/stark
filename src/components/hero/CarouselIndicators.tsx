
import React from 'react';
import { cn } from '@/lib/utils';

interface CarouselIndicatorsProps {
  totalSlides: number;
  currentIndex: number;
  goToSlide: (index: number) => void;
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  totalSlides,
  currentIndex,
  goToSlide
}) => {
  return (
    <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            goToSlide(index);
          }}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300",
            index === currentIndex 
              ? "bg-white scale-110" 
              : "bg-white/50 hover:bg-white/80"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
