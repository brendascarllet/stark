
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import ScrollToTop from '@/components/ScrollToTop';
import HorizontalContactForm from '@/components/home/HorizontalContactForm';
import ContactSection from '@/components/roof-replacement/ContactSection';
import FinancingSection from '@/components/asphalt-shingles/FinancingSection';
import HeroSection from '@/components/asphalt-shingles/HeroSection';
import OverviewSection from '@/components/asphalt-shingles/OverviewSection';
import FeaturesSection from '@/components/asphalt-shingles/FeaturesSection';
import CTASection from '@/components/asphalt-shingles/CTASection';

const AsphaltShingles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEOMeta({
    title: 'Asphalt Shingle Roofing | GAF Timberline | Seattle',
    description: 'Professional asphalt shingle roofing. GAF Timberline HDZ and premium materials. Reliable & affordable. Free estimates. Seattle & Puget Sound. 206-739-8232.',
    canonical: 'https://starkroofingrenovation.com/asphalt-shingles',
    keywords: 'asphalt shingle roofing, GAF shingles, roof replacement asphalt, new roof installation, roofing materials',
    ogTitle: 'Asphalt Shingle Roofing - GAF Certified | Stark Roofing',
    ogDescription: 'Premium asphalt shingles with GAF certification. Reliable, affordable roofing solutions.',
    ogImage: 'https://starkroofingrenovation.com/drone-3.jpg',
  });

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      <HorizontalContactForm />

      {/* Overview Section */}
      <OverviewSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Financing Section */}
      <FinancingSection />
      
      {/* Contact Section */}
      <ContactSection />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default AsphaltShingles;
