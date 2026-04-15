
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import HeroSection from '@/components/finance/HeroSection';
import OBeePartnerSection from '@/components/finance/OBeePartnerSection';
import BenefitsSection from '@/components/finance/BenefitsSection';
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
    title: 'Roofing Financing Seattle | O Bee Credit Union Partner | Stark Roofing',
    description:
      'Finance your roof, gutters, or windows through O Bee Credit Union — WA credit union, rates from 8.24% APR, terms up to 120 months, loans up to $75,000, 3 months no payments. Apply through Stark Roofing.',
    canonical: 'https://starkroofingrenovation.com/finance',
    keywords:
      'roofing financing seattle, obee credit union home improvement loan, roof financing washington, stark roofing financing, home improvement loan puget sound',
    ogTitle: 'Financing — O Bee Credit Union Partner | Stark Roofing',
    ogDescription:
      'WA credit union financing for your roof, gutters, or windows. Rates from 8.24% APR. Terms up to 120 months. Loans up to $75,000.',
    ogImage: 'https://starkroofingrenovation.com/og-share.png',
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection />
      <OBeePartnerSection />
      <BenefitsSection />
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
