
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  textClassName?: string;
  textSize?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
}

const Logo = ({ 
  className, 
  textClassName,
  textSize = 'md',
  withTagline = false
}: LogoProps) => {
  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <h1 className={cn("font-heading font-extrabold tracking-tight text-stark-red", textSizeClasses[textSize], textClassName)}>
        STARK
      </h1>
      {withTagline && (
        <p className="text-xs text-gray-600 font-medium -mt-1">ROOFING & RENOVATION</p>
      )}
    </div>
  );
};

export default Logo;
