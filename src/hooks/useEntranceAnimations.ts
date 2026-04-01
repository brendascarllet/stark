
import { useEffect } from 'react';
import { setupScrollReveal, addHoverAnimations } from '@/utils/scrollReveal';

export const useEntranceAnimations = () => {
  useEffect(() => {
    // Set up scroll animations
    const cleanupScrollReveal = setupScrollReveal();
    
    // Add hover animations
    addHoverAnimations();
    
    // Clean up event listeners on unmount
    return () => {
      cleanupScrollReveal();
    };
  }, []);
};
