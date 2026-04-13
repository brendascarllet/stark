
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import ContactHero from '@/components/contact/ContactHero';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMapSection from '@/components/contact/ContactMapSection';
import ScrollToTop from '@/components/ScrollToTop';

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEOMeta({
    title: 'Contact Stark Roofing | Free Estimate | 206-739-8232',
    description: 'Contact Stark Roofing for a free inspection & estimate. Roofing, gutters, siding services. Call 206-739-8232 or fill out our form.',
    canonical: 'https://starkroofingrenovation.com/contact',
    keywords: 'contact roofing contractor, free estimate, roofing inspection, get a quote',
    ogTitle: 'Contact Stark Roofing - Free Estimate Today',
    ogDescription: 'Get in touch for your free roofing inspection and estimate.',
    ogImage: 'https://starkroofingrenovation.com/og-share.png',
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <ContactHero />
      {/* Anchored so the hero "Book Online" card scrolls to the form. */}
      <div id="book-contact">
        <ContactFormSection />
      </div>
      <ContactMapSection />
      
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Contact;
