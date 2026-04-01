
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/shared/ServicePageHero';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import OurStory from '@/components/about/OurStory';
import CoreValues from '@/components/about/CoreValues';
import Certifications from '@/components/about/Certifications';
import AboutCTA from '@/components/about/AboutCTA';
import VirtualAssistant from '@/components/finance/VirtualAssistant';
import ScrollToTop from '@/components/ScrollToTop';
import HorizontalContactForm from '@/components/about/HorizontalContactForm';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEOMeta({
    title: 'About Stark Roofing | GAF Silver Pledge Certified | Since Day One',
    description: 'Learn about Stark Roofing & Renovation. Family-owned, GAF certified, serving Seattle & Puget Sound with quality and integrity.',
    canonical: 'https://starkroofingrenovation.com/about',
    keywords: 'about Stark Roofing, GAF certified roofer, family business, roofing contractor Seattle',
    ogTitle: 'About Stark Roofing - Trusted Local Roofing Experts',
    ogDescription: 'GAF certified roofing contractor serving Seattle & Puget Sound with family values.',
    ogImage: 'https://starkroofingrenovation.com/crew-1.jpg',
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicePageHero
        title="About Stark Roofing"
        subtitle="Family-owned, GAF Silver Pledge certified, and proud to serve the Greater Seattle area since day one."
        badge="GAF Silver Pledge Certified"
        bgImage="/crew-1.jpg"
        breadcrumb="About Us"
        ctaLabel="Meet the Team"
        ctaHref="#our-story"
        secondaryCta={{ label: 'Get a Free Estimate', href: '#contact' }}
        accentColor="#dc2626"
      />
      <HorizontalContactForm />
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
