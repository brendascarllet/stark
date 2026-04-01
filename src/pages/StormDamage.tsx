
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/shared/ServicePageHero';
import { useSEOMeta } from '@/hooks/useSEOMeta';
// Original: import StormHero from '@/components/storm-damage/StormHero';
import EmergencyNotice from '@/components/storm-damage/EmergencyNotice';
import StormThreatsSection from '@/components/storm-damage/StormThreatsSection';
import TrustTriggers from '@/components/storm-damage/TrustTriggers';
import WhyChooseStark from '@/components/storm-damage/WhyChooseStark';
import StormDamageRestoration from '@/components/storm-damage/StormDamageRestoration';
import StormContactSection from '@/components/storm-damage/StormContactSection';
import StormTestimonialsSection from '@/components/storm-damage/StormTestimonialsSection';
import StormFAQSection from '@/components/storm-damage/StormFAQSection';
import StormDamageProcess from '@/components/storm-damage/StormDamageProcess';
import StormCTA from '@/components/storm-damage/StormCTA';
import StormInsuranceSection from '@/components/storm-damage/StormInsuranceSection';
import StormServiceAreas from '@/components/storm-damage/StormServiceAreas';
import VirtualAssistant from '@/components/finance/VirtualAssistant';
import ScrollToTop from '@/components/ScrollToTop';

const StormDamage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEOMeta({
    title: 'Emergency Storm Damage Repair | 24/7 Service | Seattle',
    description: 'Emergency storm damage repair. Roof damage, hail damage, wind damage. 24/7 emergency response. Insurance claim assistance. Seattle & Puget Sound. 206-739-8232.',
    canonical: 'https://starkroofingrenovation.com/storm-damage',
    keywords: 'storm damage repair, roof hail damage, wind damage roof, emergency roof repair, storm damage contractor',
    ogTitle: 'Storm Damage Repair - 24/7 Emergency Service | Stark Roofing',
    ogDescription: 'Emergency storm damage repair. We respond 24/7. Insurance claim assistance available.',
    ogImage: 'https://starkroofingrenovation.com/drone-6.jpg',
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicePageHero
        title="Storm Damage Repair"
        subtitle="Emergency response across Greater Seattle. We work directly with your insurance — fast estimates, zero hassle."
        badge="24/7 Emergency Response"
        bgImage="/drone-6.jpg"
        breadcrumb="Storm Damage"
        ctaLabel="Emergency Estimate"
        accentColor="#dc2626"
        secondaryCta={{ label: "📞 Call Now — (206) 739-8232", href: "tel:2067398232" }}
      />
      <EmergencyNotice />
      <StormThreatsSection />
      <StormDamageProcess />
      <StormDamageRestoration />
      <StormInsuranceSection />
      <TrustTriggers />
      <WhyChooseStark />
      <StormServiceAreas />
      <StormTestimonialsSection />
      <StormFAQSection />
      <StormCTA />
      <StormContactSection />
      <VirtualAssistant />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default StormDamage;
