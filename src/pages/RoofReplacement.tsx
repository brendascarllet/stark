
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicePageHero from '@/components/shared/ServicePageHero';
// Original hero kept for reference: import HeroSection from '@/components/roof-replacement/HeroSection';
import OverviewSection from '@/components/roof-replacement/OverviewSection';
import ProcessSection from '@/components/sections/ProcessSection';
import MaterialsSection from '@/components/roof-replacement/MaterialsSection';
import GallerySection from '@/components/roof-replacement/GallerySection';
import ContactSection from '@/components/roof-replacement/ContactSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ScrollToTop from '@/components/ScrollToTop';
import VirtualAssistant from '@/components/finance/VirtualAssistant';
import PremiumRoofingSection from '@/components/roof-replacement/PremiumRoofingSection';
import RoofingComparison from '@/components/roof-replacement/RoofingComparison';
import HorizontalContactForm from '@/components/home/HorizontalContactForm';
import FinancingOptionsSection from '@/components/home/FinancingOptionsSection';
import { useEntranceAnimations } from '@/hooks/useEntranceAnimations';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import AnimatedSection from '@/components/AnimatedSection';
import EmergencyServiceBar from '@/components/navigation/EmergencyServiceBar';
import FAQSection from '@/components/roof-replacement/FAQSection';

const RoofReplacement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Set SEO meta tags
  useSEOMeta({
    title: 'Expert Roof Replacement Services | GAF Certified | Stark Roofing Seattle',
    description: 'Professional roof replacement services in Seattle & Puget Sound. GAF certified installers. Premium materials. Free estimates. Lifetime warranty available.',
    canonical: 'https://starkroofingrenovation.com/roof-replacement',
    keywords: 'roof replacement, new roof installation, roofing contractor Seattle, GAF certified roofer, residential roof replacement',
    ogTitle: 'Roof Replacement - Stark Roofing | Seattle',
    ogDescription: 'Expert roof replacement using premium GAF materials. Serving Seattle & Puget Sound.',
    ogImage: 'https://starkroofingrenovation.com/drone-1.jpg',
  });
  
  // Initialize animations
  useEntranceAnimations();
  
  return (
    <>
      <div id="stark-master-header">
        <Navbar />
        <EmergencyServiceBar />
      </div>
      
      <ServicePageHero
        title="Roof Replacement"
        subtitle="Expert installation using premium GAF materials — built to handle everything Washington weather throws at it."
        badge="GAF Certified"
        bgImage="/drone-1.jpg"
        breadcrumb="Roof Replacement"
        secondaryCta={{ label: "View Our Work", href: "#gallery" }}
      />
      
      <HorizontalContactForm />
      
      <AnimatedSection
        animation="slide-up"
        className="relative z-10"
      >
        <OverviewSection />
      </AnimatedSection>
      
      <AnimatedSection
        animation="fade"
        delay={200}
        className="relative z-10"
      >
        <PremiumRoofingSection />
      </AnimatedSection>
      
      {/* Added WhyChooseUsSection here as it fits better with roof replacement */}
      <AnimatedSection
        animation="slide-up"
        delay={300}
        className="relative z-10"
      >
        <WhyChooseUsSection />
      </AnimatedSection>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ProcessSection />
      </motion.div>
      
      <AnimatedSection animation="slide-up">
        <MaterialsSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade" delay={200}>
        <RoofingComparison />
      </AnimatedSection>
      
      <AnimatedSection animation="slide-up" delay={300}>
        <FinancingOptionsSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade">
        <GallerySection />
      </AnimatedSection>

      <AnimatedSection animation="slide-up">
        <FAQSection />
      </AnimatedSection>
      
      <AnimatedSection animation="slide-up">
        <ContactSection />
      </AnimatedSection>
      
      <VirtualAssistant />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default RoofReplacement;
