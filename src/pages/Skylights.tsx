
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/shared/ServicePageHero';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import OverviewSection from '@/components/skylights/OverviewSection';
import BenefitsSection from '@/components/skylights/BenefitsSection';
import SkylightTypes from '@/components/skylights/SkylightTypes';
import InstallationProcess from '@/components/skylights/InstallationProcess';
import ContactCTA from '@/components/skylights/ContactCTA';

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
    ogImage: 'https://starkroofingrenovation.com/crew-4.jpg',
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicePageHero
        title="Skylight Installation"
        subtitle="Bring natural light into your home with professional Velux skylight installation and expert flashing."
        badge="Velux Certified Installer"
        bgImage="/crew-4.jpg"
        breadcrumb="Skylights"
        ctaLabel="Get a Free Estimate"
        ctaHref="#contact"
        secondaryCta={{ label: 'View Skylight Types', href: '#types' }}
        accentColor="#f59e0b"
      />
      <OverviewSection />
      <BenefitsSection />
      <SkylightTypes />
      <InstallationProcess />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Skylights;
