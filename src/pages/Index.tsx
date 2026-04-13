
import React, { useEffect } from 'react';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/services/ContactForm';
import HeroSection from '@/components/home/HeroSection';
import CinematicScrollSection from '@/components/home/CinematicScrollSection';
import HorizontalContactForm from '@/components/home/HorizontalContactForm';
import TrustBadgesSection from '@/components/home/TrustBadgesSection';
import ServicesOverviewSection from '@/components/home/ServicesOverviewSection';
import PremiumServicesSection from '@/components/home/PremiumServicesSection';
import ShowcaseSection from '@/components/home/ShowcaseSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import CTASection from '@/components/home/CTASection';
import ProcessSection from '@/components/home/ProcessSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FinancingOptionsSection from '@/components/home/FinancingOptionsSection';
import ServiceAreaSection from '@/components/home/ServiceAreaSection';
import HappinessSection from '@/components/home/HappinessSection';
import VirtualAssistant from '@/components/finance/VirtualAssistant';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedSection from '@/components/AnimatedSection';
import HomeFAQSection from '@/components/home/FAQSection';
import { motion } from 'framer-motion';

const Index = () => {
  useSEOMeta({
    title: 'Stark Roofing & Renovation | Roofer Near Me | Seattle, Bellevue & Puget Sound WA',
    description: 'Looking for a roofer near you? Stark Roofing & Renovation is a bilingual, GAF Certified contractor serving Seattle, Bellevue, Sammamish, Redmond, Kirkland, Tacoma & all of Puget Sound. Free estimates: (206) 739-8232.',
    canonical: 'https://starkroofingrenovation.com/',
    ogTitle: 'Stark Roofing & Renovation',
    ogDescription: 'Bilingual GAF Certified roofing contractor serving all of Greater Seattle & Puget Sound.',
    ogImage: 'https://starkroofingrenovation.com/hero-custom-1.webp',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      {/* ── Cinematic hero (drone video + 3-second slides + music) ── */}
      <HeroSection />

      {/* ── Apple/Instagram-reel scroll storytelling ── */}
      <CinematicScrollSection />

      <AnimatedSection animation="slide-up">
        <PremiumServicesSection />
      </AnimatedSection>

      <AnimatedSection animation="slide-up">
        <ShowcaseSection />
      </AnimatedSection>

      <AnimatedSection animation="fade">
        <ServicesOverviewSection />
      </AnimatedSection>

      {/* Lead-capture form — placed AFTER the cinematic story + services overview
          so visitors see what we offer before we ask them to book. */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <HorizontalContactForm />
      </motion.div>
      
      <AnimatedSection animation="slide-up">
        <ComparisonSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade">
        <div className="availability-section">
          <TrustBadgesSection />
        </div>
      </AnimatedSection>
      
      <AnimatedSection animation="slide-up">
        <CTASection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade">
        <ProcessSection />
      </AnimatedSection>
      
      <AnimatedSection animation="slide-up">
        <TestimonialsSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade">
        <FinancingOptionsSection />
      </AnimatedSection>

      <AnimatedSection animation="slide-up">
        <ServiceAreaSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade">
        <HappinessSection />
      </AnimatedSection>

      <AnimatedSection animation="slide-up">
        <HomeFAQSection />
      </AnimatedSection>
      
      <AnimatedSection animation="slide-up">
        <section id="contact" className="section-padding bg-navy">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl font-heading font-bold mb-6 text-center text-slate-50 md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                Get a Free Estimate
              </motion.h2>
              <motion.p 
                className="text-white/80 mb-8 text-center font-semibold text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Fill out the form below and one of our roofing experts will contact you to schedule your free inspection and estimate
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <VirtualAssistant />
      <ScrollToTop />
      
      <Footer />
    </motion.div>
  );
};

export default Index;
