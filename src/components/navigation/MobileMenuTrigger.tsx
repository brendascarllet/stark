
import React from 'react';
import { X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuTriggerProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileMenuTrigger = ({ 
  isScrolled, 
  isMobileMenuOpen, 
  toggleMobileMenu 
}: MobileMenuTriggerProps) => {
  return (
    <button 
      onClick={toggleMobileMenu}
      className={cn(
        "md:hidden p-3 transition-colors z-[1000] relative rounded-md",
        isScrolled 
          ? "text-charcoal hover:text-stark-red bg-white/10 hover:bg-white/20" 
          : "text-white hover:text-stark-red bg-navy/20 hover:bg-navy/30"
      )}
      aria-label="Toggle menu"
    >
      {isMobileMenuOpen ? 
        <X size={28} className="animate-fade-in" /> : 
        <Menu size={28} className="animate-fade-in" />
      }
    </button>
  );
};

export default MobileMenuTrigger;
