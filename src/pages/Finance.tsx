
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import HeroSection from '@/components/finance/HeroSection';
import BenefitsSection from '@/components/finance/BenefitsSection';
import PaymentOptionsSection from '@/components/finance/PaymentOptionsSection';
import CalculatorSection from '@/components/finance/CalculatorSection';
import FAQSection from '@/components/finance/FAQSection';
import HowToApplySection from '@/components/finance/HowToApplySection';
import ContactSection from '@/components/finance/ContactSection';
import VirtualAssistant from '@/components/finance/VirtualAssistant';

const Finance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useSEOMeta({
    title: 'Financing Options | Payment Plans | Roofing Services',
    description: 'Flexible financing & payment options for roofing projects. Apply today. No-interest plans available. Seattle & Puget Sound. 206-398-5500.',
    canonical: 'https://starkroofingrenovation.com/finance',
    keywords: 'roofing financing, payment plans, roof loan, no-interest financing, affordable roofing',
    ogTitle: 'Flexible Financing - Make Your Roof Affordable | Stark Roofing',
    ogDescription: 'Flexible payment plans and financing options to fit your budget.',
    ogImage: 'https://starkroofingrenovation.com/stark-cover.png',
  });
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection />
      <BenefitsSection />
      <PaymentOptionsSection />
      <CalculatorSection />
      <FAQSection />
      <HowToApplySection />
      <ContactSection />
      <VirtualAssistant />
      
      <Footer />
    </div>
  );
};

export default Finance;
