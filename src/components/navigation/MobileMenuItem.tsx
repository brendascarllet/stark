
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface MobileMenuItemProps {
  to: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const MobileMenuItem = ({ 
  to, 
  className = "", 
  onClick, 
  children 
}: MobileMenuItemProps) => {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <Link 
        to={to} 
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default MobileMenuItem;
