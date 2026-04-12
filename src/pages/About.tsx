
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import AboutHeroWithForm from '@/components/about/AboutHeroWithForm';
import OurStory from '@/components/about/OurStory';
import CoreValues from '@/components/about/CoreValues';
import Certifications from '@/components/about/Certifications';
import AboutCTA from '@/components/about/AboutCTA';
import VirtualAssistant from '@/components/finance/VirtualAssistant';
import ScrollToTop from '@/components/ScrollToTop';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEOMeta({
    title: 'About Stark Roofing | GAF Certified | Since Day One',
    description: 'Learn about Stark Roofing & Renovation. Family-owned, GAF certified, serving Seattle & Puget Sound with quality and integrity.',
    canonical: 'https://starkroofingrenovation.com/about',
    keywords: 'about Stark Roofing, GAF certified roofer, family business, roofing contractor Seattle',
    ogTitle: 'About Stark Roofing - Trusted Local Roofing Experts',
    ogDescription: 'GAF certified roofing contractor serving Seattle & Puget Sound with family values.',
    ogImage: 'https://starkroofingrenovation.com/brenda-scarllet-owner.jpg',
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHeroWithForm />
      <OurStory />
      <CoreValues />
      <Certifications />
      <AboutCTA />
      <VirtualAssistant />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default About;
