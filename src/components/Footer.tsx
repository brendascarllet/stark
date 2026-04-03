import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { useIsMobile } from '@/hooks/use-mobile';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  const iconSize = isMobile ? 16 : 20;
  return <footer className="bg-navy text-white pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-heading font-bold">
              STARK <span className="text-stark-red">ROOFING</span>
            </h3>
            <p className="text-gray-300 max-w-xs text-sm md:text-base">
              Your trusted provider of premium roofing and renovation services. GAF certified for excellence.
            </p>
            
            <div className="flex space-x-4 pt-2">
              <a href="https://www.google.com/maps/place/Stark+Roofing+%26+Renovation" target="_blank" rel="noopener noreferrer" className="text-white hover:text-stark-red transition-colors" aria-label="Google Maps">
                <MapPin size={iconSize} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-stark-red transition-colors">
                <Facebook size={iconSize} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-stark-red transition-colors">
                <Instagram size={iconSize} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-heading font-semibold">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/storm-damage" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
                  Storm Damage
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-heading font-semibold">Our Services</h4>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li>
                <Link to="/roof-replacement" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
                  Roof Replacement
                </Link>
              </li>
              <li>
                <Link to="/gutter-replacement" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
                  Gutter Replacement
                </Link>
              </li>
              <li>
                <Link to="/roof-repair" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
                  Roof Repair
                </Link>
              </li>
              <li>
                <Link to="/storm-damage" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
                  Storm Damage Repair
                </Link>
              </li>
              <li>
                <Link to="/siding-installation" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={isMobile ? 14 : 16} className="mr-1 md:mr-2" />
                  Siding Installation
                </Link>
              </li>
              <li>
                <a href="/window-replacement" className="text-gray-300 hover:text-primary-purple transition-colors flex items-center group">
                  <ChevronRight size={isMobile ? 14 : 16} className="mr-1 md:mr-2 group-hover:text-primary-purple" />
                  Window Replacement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-heading font-semibold">Contact Us</h4>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <div className="flex items-start">
                <MapPin size={isMobile ? 16 : 20} className="mr-2 md:mr-3 mt-1 flex-shrink-0 text-stark-red" />
                <a href="https://www.google.com/maps/place/Stark+Roofing+%26+Renovation" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Sammamish, WA 98029
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={isMobile ? 16 : 20} className="mr-2 md:mr-3 flex-shrink-0 text-stark-red" />
                <a href="tel:+12067398232" className="text-gray-300 hover:text-white transition-colors">
                  (206) 739-8232
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={isMobile ? 16 : 20} className="mr-2 md:mr-3 flex-shrink-0 text-stark-red" />
                <a href="mailto:office@starkroofingrenovation.com" className="text-gray-300 hover:text-white transition-colors break-all">office@starkroofingrenovation.com</a>
              </div>
            </div>
            
            <div className="pt-3 md:pt-4">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="inline-block">
                <Link to="/contact" className="btn-primary inline-block text-sm md:text-base py-2 md:py-3 px-4 md:px-6">Get Free Estimate</Link>
              </motion.div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8 md:my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © {currentYear} Stark Roofing & Renovation. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;