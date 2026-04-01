
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/services/ContactForm';
import GutterEstimatorCalculator from '@/components/gutter-estimator/GutterEstimatorCalculator';
import VirtualAssistant from '@/components/finance/VirtualAssistant';

const GutterEstimator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-overlay relative pt-32 pb-20 md:py-32">
        <img 
          src="/lovable-uploads/1029d365-2233-4f77-9014-3660fe9c4731.png" 
          alt="Modern home with gutters and blue sky" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-navy/50"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-fade-in">
              Gutters System Cost Estimator
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-in" style={{
            animationDelay: '200ms'
          }}>
              Get an instant estimate for your new gutters system with our interactive calculator. Quick, easy, and accurate!
            </p>
          </div>
        </div>
      </section>

      {/* Estimator Section */}
      <GutterEstimatorCalculator />

      {/* Why Our Estimator Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center">Why Use Our Gutters Estimator?</h2>
          <p className="section-subtitle text-center">
            Our interactive tool helps you plan your gutters project with confidence
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-stark-red/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stark-red">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-2">Transparent Pricing</h3>
              <p className="text-charcoal/80">
                Our estimator provides real-time price ranges based on current material costs and labor rates in your area.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-stark-red/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stark-red">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-2">Customized Options</h3>
              <p className="text-charcoal/80">
                Select different gutters sizes, materials, and add-ons to create a custom solution that meets your home's specific needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-stark-red/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stark-red">
                  <path d="m15 15 6 6m-6-6v-3a6 6 0 0 0-6-6v0a6 6 0 0 0-6 6v3m12 0H3l2 6h14l2-6" />
                  <path d="M15 9a3 3 0 1 0-6 0" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-2">Budget Planning</h3>
              <p className="text-charcoal/80">
                Easily compare different options and see how various choices affect your total project cost, helping you stay within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6 text-center">
              Get a Professional Estimate
            </h2>
            <p className="text-charcoal/80 mb-8 text-center">
              For a precise quote tailored to your home's exact specifications, fill out the form below. One of our gutters experts will contact you to schedule a free in-person consultation.
            </p>
            
            <ContactForm />
          </div>
        </div>
      </section>
      
      <VirtualAssistant />
      <Footer />
    </div>;
};

export default GutterEstimator;
