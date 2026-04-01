
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/shared/ServicePageHero';
import { useSEOMeta } from '@/hooks/useSEOMeta';
// Original: import GutterHero from '@/components/gutter-replacement/GutterHero';
import HorizontalContactForm from '@/components/gutter-replacement/HorizontalContactForm';
import WhyGuttersProtectionSection from '@/components/gutter-replacement/WhyGuttersProtectionSection';
import PremiumSystemsSection from '@/components/gutter-replacement/PremiumSystemsSection';
import BenefitsSection from '@/components/gutter-replacement/BenefitsSection';
import InstallationProcess from '@/components/gutter-replacement/InstallationProcess';
import CTASection from '@/components/gutter-replacement/CTASection';
import ContactFormSection from '@/components/gutter-replacement/ContactFormSection';

const GutterReplacement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEOMeta({
    title: 'Gutter Replacement Services | Seamless Gutters | Seattle',
    description: 'Professional gutter replacement & installation in Seattle & Puget Sound. Seamless gutters, gutter repair, protection. Free estimates. Call 206-739-8232.',
    canonical: 'https://starkroofingrenovation.com/gutter-replacement',
    keywords: 'gutter replacement Seattle, seamless gutters, gutter installation, gutter repair, gutter cleaning',
    ogTitle: 'Gutter Replacement - Seattle | Stark Roofing',
    ogDescription: 'Custom-fit gutter systems for Washington rainfall. Seamless gutters with lifetime warranty.',
    ogImage: 'https://starkroofingrenovation.com/drone-4.jpg',
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicePageHero
        title="Gutter Replacement"
        subtitle="Custom-fit gutter systems that protect your foundation, siding, and landscaping — built for Washington's heavy rainfall."
        badge="Lifetime Warranty Available"
        bgImage="/drone-4.jpg"
        breadcrumb="Gutter Replacement"
        accentColor="#10b981"
        secondaryCta={{ label: "See Gutter Styles", href: "#systems" }}
      />
      <HorizontalContactForm />
      <WhyGuttersProtectionSection />
      <PremiumSystemsSection />
      <BenefitsSection />
      <InstallationProcess />
      <CTASection />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default GutterReplacement;
