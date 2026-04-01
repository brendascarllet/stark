
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import EmergencyServiceBar from './navigation/EmergencyServiceBar';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    // Set initial scroll state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add/remove body class when mobile menu opens/closes
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50" id="stark-master-header">
      <EmergencyServiceBar />
      
      <header 
        className={cn(
          'py-3 transition-all duration-300 ease-in-out w-full',
          isScrolled 
            ? 'scrolled py-2 bg-white/95 shadow-md backdrop-blur-sm' 
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Logo 
                textClassName={isScrolled ? "text-stark-red" : "text-white"} 
                withTagline={false}
              />
            </Link>

            {/* Desktop Navigation */}
            <DesktopNavigation isScrolled={isScrolled} />

            {/* Mobile Navigation */}
            <MobileNavigation 
              isScrolled={isScrolled} 
              isMobileMenuOpen={isMobileMenuOpen} 
              toggleMobileMenu={toggleMobileMenu} 
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
