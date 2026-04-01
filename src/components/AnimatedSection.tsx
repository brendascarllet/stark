
import React, { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade' | 'slide-up' | 'slide-right' | 'scale' | 'none';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  animation = 'fade'
}) => {
  // Specify HTMLDivElement as the generic type parameter
  const ref = useScrollReveal<HTMLDivElement>();
  
  let animationClass = 'reveal-on-scroll';
  
  if (animation === 'none') {
    animationClass = '';
  }
  
  const style = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div 
      ref={ref} 
      className={cn(animationClass, className)}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
