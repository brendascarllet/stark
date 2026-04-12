
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
      'Finance your roof, gutters, or windows through O Bee Credit Union — WA-state credit union, rates from 8.25% APR, terms up to 15 years, no equity required. Apply through Stark Roofing.',
    canonical: 'https://starkroofingrenovation.com/finance',
    keywords:
      'roofing financing seattle, obee credit union home loan, no equity home improvement loan washington, roof financing puget sound, stark roofing financing',
    ogTitle: 'Financing — Powered by O Bee Credit Union | Stark Roofing',
    ogDescription:
      'WA credit union financing for your roof, gutters, or windows. No equity required. Rates from 8.25% APR.',
    ogImage: 'https://starkroofingrenovation.com/stark-cover.png',
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
