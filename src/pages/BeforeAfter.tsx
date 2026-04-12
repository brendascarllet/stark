
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import BeforeAfterGallery from '@/components/home/BeforeAfterGallery';
import VirtualAssistant from '@/components/finance/VirtualAssistant';
import ScrollToTop from '@/components/ScrollToTop';
import { Phone } from 'lucide-react';

const BeforeAfter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEOMeta({
    title: 'Before & After Gallery | Real Roofing Transformations | Stark Roofing',
    description: 'See real before and after photos of roof replacements, repairs, and renovations across Seattle & Puget Sound. GAF Certified contractor. Call 206-739-8232.',
    canonical: 'https://starkroofingrenovation.com/before-after',
    keywords: 'roof before after, roofing transformations, roof replacement photos, roofing gallery Seattle',
    ogTitle: 'Before & After Gallery | Stark Roofing & Renovation',
    ogDescription: 'Real roofing transformations across Seattle & Puget Sound. See the Stark difference.',
    ogImage: 'https://starkroofingrenovation.com/gallery/shingle-after.jpg',
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-custom-5.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="w-16 h-1 bg-stark-red mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4">
            Before &amp; After Gallery
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Real transformations from our roofing and renovation projects across the Greater Seattle area. Drag the slider to see the difference.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <BeforeAfterGallery />

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Schedule a free drone inspection and see exactly what your roof needs — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-stark-red hover:bg-stark-red/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get Free Inspection
            </a>
            <a
              href="tel:+12067398232"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
            >
              <Phone size={18} />
              (206) 739-8232
            </a>
          </div>
        </div>
      </section>

      <VirtualAssistant />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default BeforeAfter;
