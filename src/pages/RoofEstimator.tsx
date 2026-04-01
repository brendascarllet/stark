
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VirtualAssistant from '@/components/finance/VirtualAssistant';
import ScrollToTop from '@/components/ScrollToTop';

// Import refactored components
import HeroSection from '@/components/roof-estimator/HeroSection';
import EstimatorCalculator from '@/components/roof-estimator/EstimatorCalculator';
import WhyChooseUs from '@/components/roof-estimator/WhyChooseUs';
import ContactSection from '@/components/roof-estimator/ContactSection';

const RoofEstimator = () => {
  useEffect(() => {
    // First scroll to top
    window.scrollTo(0, 0);
    
    // Then immediately scroll to the estimator section
    const estimatorSection = document.getElementById('estimator');
    if (estimatorSection) {
      estimatorSection.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EstimatorCalculator />
      <WhyChooseUs />
      <ContactSection />
      <VirtualAssistant />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default RoofEstimator;
