
import React, { useState } from 'react';
import NavDropdown from './NavDropdown';
import { DropdownItem } from './NavDropdown';

interface NavMenuSectionProps {
  label: string;
  items: DropdownItem[];
  isScrolled: boolean;
  highlightPath?: string;
}

const NavMenuSection = ({ label, items, isScrolled, highlightPath }: NavMenuSectionProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Check if current path should be highlighted
  const shouldHighlight = highlightPath && window.location.pathname.includes(highlightPath);
  
  return (
    <NavDropdown
      label={label}
      isOpen={isDropdownOpen}
      setIsOpen={setIsDropdownOpen}
      items={items}
      isScrolled={isScrolled}
      isHighlighted={shouldHighlight}
    />
  );
};

export default NavMenuSection;
