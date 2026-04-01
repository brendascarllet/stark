
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import WindowHeroSection from '@/components/window-replacement/WindowHeroSection';
import WindowOverviewSection from '@/components/window-replacement/WindowOverviewSection';
import WindowTypesSection from '@/components/window-replacement/WindowTypesSection';
import WindowBenefitsSection from '@/components/window-replacement/WindowBenefitsSection';
import WindowProcessSection from '@/components/window-replacement/WindowProcessSection';
import WindowContactSection from '@/components/window-replacement/WindowContactSection';
import ScrollToTop from '@/components/ScrollToTop';
import { motion } from 'framer-motion';

const WindowReplacement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEOMeta({
    title: 'Window Replacement & Installation | Energy-Efficient | Seattle',
    description: 'Professional window replacement in Seattle & Puget Sound. Energy-efficient windows. Improve comfort and curb appeal. Free estimates. 206-398-5500.',
    canonical: 'https://starkroofingrenovation.com/window-replacement',
    keywords: 'window replacement Seattle, replacement windows, energy efficient windows, new windows, window installation',
    ogTitle: 'Window Replacement - Energy Efficient | Stark Roofing',
    ogDescription: 'Professional replacement windows. Energy efficient, beautiful, and durable.',
    ogImage: 'https://starkroofingrenovation.com/crew-1.jpg',
  });

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <WindowHeroSection />
      <WindowOverviewSection />
      <WindowTypesSection />
      <WindowBenefitsSection />
      <WindowProcessSection />
      <WindowContactSection />
      <ScrollToTop />
      <Footer />
    </motion.div>
  );
};

export default WindowReplacement;
