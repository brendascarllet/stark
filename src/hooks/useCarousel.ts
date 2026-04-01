
import { useState, useEffect, useCallback } from 'react';
import { HeroMediaItem } from '@/components/hero/types';

interface UseCarouselProps {
  images: HeroMediaItem[];
  autoplayInterval?: number;
}

export const useCarousel = ({ images, autoplayInterval = 6000 }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Filter out any images without URLs
  const validImages = images.filter(image => image.url);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this to the transition duration
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % validImages.length;
    goToSlide(newIndex);
  }, [currentIndex, validImages.length, goToSlide]);

  const goToPrevious = useCallback(() => {
    const newIndex = (currentIndex - 1 + validImages.length) % validImages.length;
    goToSlide(newIndex);
  }, [currentIndex, validImages.length, goToSlide]);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  // Handle scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (autoplayInterval <= 0 || isPaused) return;
    
    const intervalId = setInterval(() => {
      goToNext();
    }, autoplayInterval);
    
    return () => clearInterval(intervalId);
  }, [autoplayInterval, goToNext, isPaused]);

  return {
    currentIndex,
    validImages,
    showScrollIndicator,
    isPaused,
    goToSlide,
    goToNext,
    goToPrevious,
    togglePause,
  };
};
