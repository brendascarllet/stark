
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

const NavItem = ({
  to,
  children,
  isScrolled
}: NavItemProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "nav-item py-2 px-3 font-medium transition-colors duration-300 hover:text-stark-red",
        isScrolled ? "text-navy" : "text-white"
      )}
    >
      {children}
    </Link>
  );
};

export default NavItem;
