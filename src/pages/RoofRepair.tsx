
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VirtualAssistant from '@/components/finance/VirtualAssistant';
import ServicePageHero from '@/components/shared/ServicePageHero';
import { useSEOMeta } from '@/hooks/useSEOMeta';

// Import the refactored components
import HeroSection from '@/components/roof-repair/HeroSection';
import HorizontalContactForm from '@/components/roof-repair/HorizontalContactForm';
import OverviewSection from '@/components/roof-repair/OverviewSection';
import CommonIssuesSection from '@/components/roof-repair/CommonIssuesSection';
import ProcessSection from '@/components/roof-repair/ProcessSection';
import EmergencySection from '@/components/roof-repair/EmergencySection';
import FAQSection from '@/components/roof-repair/FAQSection';
import CTASection from '@/components/roof-repair/CTASection';
import EmergencyBanner from '@/components/roof-repair/EmergencyBanner';
import SectionEmergencyBanner from '@/components/roof-repair/SectionEmergencyBanner';
import FloatingContactBar from '@/components/roof-repair/FloatingContactBar';
import ScrollToTop from '@/components/ScrollToTop';
import RepairCalculator from '@/components/roof-repair/RepairCalculator';

const RoofRepair = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEOMeta({
    title: 'Emergency Roof Repair Services | Same-Week Service | Seattle',
    description: 'Professional roof repair in Seattle & Puget Sound. Leaks, missing shingles, storm damage. Same-week service available. GAF certified. Call 206-398-5500.',
    canonical: 'https://starkroofingrenovation.com/roof-repair',
    keywords: 'roof repair Seattle, fix leaky roof, emergency roof repair, roof leak repair, roof damage repair',
    ogTitle: 'Roof Repair - Same-Day Service | Stark Roofing',
    ogDescription: 'Fast, permanent roof repairs in Seattle. Leaks, storm damage, missing shingles. Same-week service.',
    ogImage: 'https://starkroofingrenovation.com/crew-2.jpg',
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Emergency Banner */}
      <EmergencyBanner />
      
      <ServicePageHero
        title="Roof Repair"
        subtitle="Fast, permanent fixes — leaks, missing shingles, flashing, and storm damage. Same-week service across the Seattle metro."
        badge="Same-Week Service Available"
        bgImage="/crew-2.jpg"
        breadcrumb="Roof Repair"
        accentColor="#f59e0b"
        secondaryCta={{ label: "View Common Repairs", href: "#issues" }}
      />
      
      {/* Horizontal Contact Form - Added below Hero Section */}
      <HorizontalContactForm />
      
      {/* Overview Section */}
      <OverviewSection />
      
      {/* Common Repair Issues */}
      <CommonIssuesSection />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Repair Calculator - Moved after Process Section */}
      <RepairCalculator />
      
      {/* Section Emergency Banner - Positioned after Repair Calculator */}
      <SectionEmergencyBanner />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Emergency Services - Moved to the end of the page */}
      <EmergencySection />
      
      {/* Floating Contact Bar */}
      <FloatingContactBar />
      
      <VirtualAssistant />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default RoofRepair;
