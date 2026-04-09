
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Wallet, Droplets, Percent, Home, Wrench, Layers, Info, Mail, Cloud } from 'lucide-react';
import MobileMenuTrigger from './MobileMenuTrigger';
import MobileMenuItem from './MobileMenuItem';
import MobileSubmenu from './MobileSubmenu';
import MobileCallButton from './MobileCallButton';
import { useIsMobile } from '@/hooks/use-mobile';

interface MobileNavigationProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileNavigation = ({ isScrolled, isMobileMenuOpen, toggleMobileMenu }: MobileNavigationProps) => {
  const isMobile = useIsMobile();
  const iconSize = isMobile ? 18 : 20;
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  
  const roofingItems = [
    {
      to: "/roof-replacement",
      label: "Roof Replacement",
      icon: <Home size={iconSize} className="mr-2" />
    },
    {
      to: "/roof-repair",
      label: "Roof Repair",
      icon: <Wrench size={iconSize} className="mr-2" />
    },
    {
      to: "/roof-cleaning",
      label: "Roof Cleaning",
      icon: <Droplets size={iconSize} className="mr-2" />
    }
  ];

  const gutterItems = [
    {
      to: "/gutter-replacement",
      label: "Gutters Replacement",
      icon: <Layers size={iconSize} className="mr-2" />
    },
    {
      to: "/gutter-repair",
      label: "Repair Promotion",
      icon: <Percent size={iconSize} className="mr-2" />
    }
  ];

  const skylightItems = [
    {
      to: "/skylights",
      label: "Skylights Overview",
      icon: <Cloud size={iconSize} className="mr-2" />
    }
  ];

  const serviceItems = [
    {
      to: "/services",
      label: "All Services",
      icon: <Wrench size={iconSize} className="mr-2" />
    },
    {
      to: "/about",
      label: "About Us",
      icon: <Info size={iconSize} className="mr-2" />
    },
    {
      to: "/contact",
      label: "Contact Us",
      icon: <Mail size={iconSize} className="mr-2" />
    },
    {
      to: "/warranty",
      label: "Warranty",
      icon: null
    }
  ];

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <>
      <MobileMenuTrigger 
        isScrolled={isScrolled} 
        isMobileMenuOpen={isMobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />

      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-[999] bg-navy/95 backdrop-blur-sm overflow-y-auto mobile-menu-overlay"
        style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
      >
        <div className="pt-20 pb-24 min-h-screen">
          <nav className="container mx-auto px-6 flex flex-col space-y-6">
            <MobileMenuItem 
              to="/" 
              className="text-xl font-medium text-white hover:text-stark-red transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Home
            </MobileMenuItem>
            
            <MobileSubmenu 
              title="Roofing" 
              items={roofingItems} 
              onItemClick={toggleMobileMenu} 
            />
            
            <MobileSubmenu 
              title="Gutters" 
              items={gutterItems} 
              onItemClick={toggleMobileMenu} 
            />
            
            <MobileSubmenu 
              title="Skylights" 
              items={skylightItems} 
              onItemClick={toggleMobileMenu} 
            />
            
            <MobileMenuItem 
              to="/storm-damage" 
              className="text-xl font-medium text-white hover:text-stark-red transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              <Cloud size={iconSize} className="inline mr-2" />
              Storm Damage
            </MobileMenuItem>
            
            <MobileMenuItem 
              to="/finance" 
              className="text-xl font-medium text-white hover:text-stark-red transition-colors flex items-center py-2"
              onClick={toggleMobileMenu}
            >
              <Wallet size={iconSize} className="mr-3" />
              Finance
            </MobileMenuItem>

            <MobileMenuItem 
              to="/about" 
              className="text-xl font-medium text-white hover:text-stark-red transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              <Info size={iconSize} className="inline mr-2" />
              About Us
            </MobileMenuItem>
            
            <MobileMenuItem 
              to="/contact" 
              className="text-xl font-medium text-white hover:text-stark-red transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              <Mail size={iconSize} className="inline mr-2" />
              Contact Us
            </MobileMenuItem>
            
            <MobileSubmenu 
              title="Services" 
              items={serviceItems} 
              onItemClick={toggleMobileMenu} 
            />
            
            <div className="pt-4">
              <MobileCallButton onClick={toggleMobileMenu} />
            </div>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default MobileNavigation;
