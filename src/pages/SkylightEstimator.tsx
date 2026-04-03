
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkylightHero from '@/components/skylight-estimator/SkylightHero';
import EstimatorContainer from '@/components/skylight-estimator/EstimatorContainer';
import WhyChooseSection from '@/components/skylight-estimator/WhyChooseSection';
import ContactSection from '@/components/skylight-estimator/ContactSection';
import { useSEOMeta } from '@/hooks/useSEOMeta';

const SkylightEstimator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEOMeta({
    title: 'Skylight Cost Calculator | Free Estimate | Stark Roofing Seattle',
    description: 'Calculate your skylight installation cost instantly. Free online estimator for Seattle & Puget Sound homeowners. Velux skylights with expert flashing. Call (206) 739-8232.',
    canonical: 'https://starkroofingrenovation.com/skylight-estimator',
    keywords: 'skylight cost calculator, skylight installation cost, Velux skylight price, skylight estimate Seattle',
    ogTitle: 'Skylight Cost Calculator | Stark Roofing & Renovation',
    ogDescription: 'Get an instant skylight installation cost estimate. Free, no obligation.',
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <SkylightHero />
      <EstimatorContainer />
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Transform Your Kitchen with Natural Light</h2>
            <p className="text-lg text-gray-700 mb-8">
              Skylights are particularly stunning in kitchens, creating a bright, welcoming space while reducing the need for artificial lighting during the day.
            </p>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/263e14a0-6faa-45ca-b508-4d8d686b30e5.png" 
                alt="Modern kitchen with elegant skylight installation" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default SkylightEstimator;
