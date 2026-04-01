
import React from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface CarouselControlsProps {
  goToPrevious: () => void;
  goToNext: () => void;
  togglePause?: () => void;
  isPaused?: boolean;
  showPlayPauseButton?: boolean;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  goToPrevious,
  goToNext,
  togglePause,
  isPaused,
  showPlayPauseButton = false
}) => {
  return (
    <>
      {/* Navigation Arrows - Updated styling for better visibility and positioning */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors transform hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors transform hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>
      
      {/* Play/Pause Button */}
      {showPlayPauseButton && togglePause && (
        <button
          onClick={togglePause}
          className="absolute right-4 bottom-8 z-30 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors ml-2 transform hover:scale-110"
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {isPaused ? <Play size={20} /> : <Pause size={20} />}
        </button>
      )}
    </>
  );
};

export default CarouselControls;
