
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/shared/ServicePageHero';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import OverviewSection from '@/components/skylights/OverviewSection';
import BenefitsSection from '@/components/skylights/BenefitsSection';
import FeaturedFixedSkylight from '@/components/skylights/FeaturedFixedSkylight';
import SkylightTypes from '@/components/skylights/SkylightTypes';
import BeforeAfterShowcase from '@/components/skylights/BeforeAfterShowcase';
import AutomaticSkylightsSection from '@/components/skylights/AutomaticSkylightsSection';
import InstallationProcess from '@/components/skylights/InstallationProcess';
import WarrantySection from '@/components/skylights/WarrantySection';
import PricingComparison from '@/components/skylights/PricingComparison';
import SkylightFAQSection from '@/components/skylights/SkylightFAQSection';
import ContactCTA from '@/components/skylights/ContactCTA';
import QuickQuoteButton from '@/components/shared/QuickQuoteButton';

const Skylights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEOMeta({
    title: 'Skylight Installation & Replacement | Velux Certified | Seattle',
    description: 'Professional skylight installation in Seattle & Puget Sound. Velux certified. Bring natural light safely. Expert flashing. Free estimates. 206-739-8232.',
    canonical: 'https://starkroofingrenovation.com/skylights',
    keywords: 'skylight installation Seattle, Velux skylights, skylight repair, natural light windows, roof windows',
    ogTitle: 'Skylight Installation - Velux Certified | Stark Roofing',
    ogDescription: 'Professional skylight installation with expert flashing. Bring natural light into your home.',
    ogImage: 'https://starkroofingrenovation.com/skylight-hero.png',
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicePageHero
        title="Skylight Installation"
        subtitle="Bring natural light into your home with professional Velux skylight installation and expert flashing."
        badge="Velux Certified Installer"
        bgImage="/skylight-hero.png"
        breadcrumb="Skylights"
        ctaLabel="Get a Free Estimate"
        ctaHref="#contact"
        secondaryCta={{ label: 'View All VELUX Models', href: '/skylights/velux-lineup' }}
        accentColor="#f59e0b"
      />
      <OverviewSection />
      <FeaturedFixedSkylight />
      <SkylightTypes />
      <BeforeAfterShowcase />
      <AutomaticSkylightsSection />
      <BenefitsSection />
      <WarrantySection />
      <InstallationProcess />
      <PricingComparison />
      <SkylightFAQSection />
      <ContactCTA />
      <Footer />
      {/* Mobile-only sticky CTA so the form is always one tap away */}
      <QuickQuoteButton
        sticky
        defaultService="skylight"
        label="Get My Free Skylight Quote"
        dialogTitle="Free Skylight Estimate"
      />
    </div>
  );
};

export default Skylights;
