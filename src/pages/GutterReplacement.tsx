
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/shared/FloatingCTA';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import GutterHero from '@/components/gutter-replacement/GutterHero';
import HorizontalContactForm from '@/components/gutter-replacement/HorizontalContactForm';
import WhyGuttersProtectionSection from '@/components/gutter-replacement/WhyGuttersProtectionSection';
import PremiumSystemsSection from '@/components/gutter-replacement/PremiumSystemsSection';
import BenefitsSection from '@/components/gutter-replacement/BenefitsSection';
import InstallationProcess from '@/components/gutter-replacement/InstallationProcess';
import CTASection from '@/components/gutter-replacement/CTASection';
import ContactFormSection from '@/components/gutter-replacement/ContactFormSection';
import ServiceSchema from '@/components/shared/ServiceSchema';

const GutterReplacement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEOMeta({
    title: 'Gutter Replacement Seattle WA | Stark Roofing & Renovation',
    description:
      'Seamless gutter replacement built for Seattle rain and pine needles. Custom aluminum, lifetime no-clog warranty. Free quote: (206) 739-8232.',
    canonical: 'https://starkroofingrenovation.com/gutter-replacement',
    keywords:
      'gutter replacement seattle, seamless gutters bellevue, leaf protection seattle, gutter installation snohomish, ice dam prevention',
    ogTitle: 'Gutter Replacement | Stark Roofing & Renovation',
    ogDescription:
      'Custom seamless aluminum gutters sized for Seattle rain and pine needles. Lifetime no-clog warranty.',
    ogImage: 'https://starkroofingrenovation.com/drone-4.webp',
  });

  return (
    <div className="min-h-screen">
      <ServiceSchema
        name="Gutter Replacement"
        description="Custom seamless aluminum gutters built for Western Washington — pine needles, atmospheric river rain, ice dams. Lifetime no-clog warranty. Free quote. (206) 739-8232."
        url="https://starkroofingrenovation.com/gutter-replacement"
      />
      <Navbar />
      <GutterHero />
      <WhyGuttersProtectionSection />
      <PremiumSystemsSection />
      <BenefitsSection />
      {/* Primary booking form — placed after Benefits so visitors are warmed up.
          The hero CTA "Book My Free Quote" anchors to #book-gutters which lands here. */}
      <div id="book-gutters">
        <HorizontalContactForm />
      </div>
      <InstallationProcess />
      <CTASection />
      <ContactFormSection />
      <FloatingCTA label="Free Gutter Estimate" />
      <Footer />
    </div>
  );
};

export default GutterReplacement;
