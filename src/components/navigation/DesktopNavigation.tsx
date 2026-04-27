
import React from 'react';
import { Wallet } from 'lucide-react';
import NavItem from './NavItem';
import NavMenuSection from './NavMenuSection';
import {
  getRoofingItems,
  getGutterItems,
  getSkylightItems,
  getServicesItems
} from './NavigationMenuData';

interface DesktopNavigationProps {
  isScrolled: boolean;
}

const DesktopNavigation = ({ isScrolled }: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <NavMenuSection
        label="Roofing"
        items={getRoofingItems()}
        isScrolled={isScrolled}
      />

      <NavMenuSection
        label="Gutters"
        items={getGutterItems()}
        isScrolled={isScrolled}
      />

      <NavMenuSection
        label="Skylights"
        items={getSkylightItems()}
        isScrolled={isScrolled}
        highlightPath="/skylight"
      />

      <NavItem to="/storm-damage" isScrolled={isScrolled}>
        Storm Damage
      </NavItem>

      <NavItem to="/finance" isScrolled={isScrolled}>
        <span className="flex items-center">
          <Wallet size={16} className="mr-1" />
          Finance
        </span>
      </NavItem>

      <NavMenuSection
        label="Services"
        items={getServicesItems()}
        isScrolled={isScrolled}
      />
    </nav>
  );
};

export default DesktopNavigation;
