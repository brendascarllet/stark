import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/services/ContactForm';
import { useSEOMeta } from '@/hooks/useSEOMeta';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Building2, ShieldCheck, Clock, BarChart4, Droplets, Zap } from 'lucide-react';
import VirtualAssistant from '@/components/finance/VirtualAssistant';
import ServicePageHero from '@/components/shared/ServicePageHero';
const CommercialRoofing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useSEOMeta({
    title: 'Commercial Roofing Services | TPO & Flat Roofs | Seattle',
    description: 'Professional commercial roofing for businesses. TPO, EPDM, modified bitumen. Licensed contractor. Free estimates. Seattle & Puget Sound. 206-398-5500.',
    canonical: 'https://starkroofingrenovation.com/commercial-roofing',
    keywords: 'commercial roofing Seattle, TPO roofing, flat roof, commercial roof repair, business roofing',
    ogTitle: 'Commercial Roofing - Seattle Business Solutions',
    ogDescription: 'Flat roofing systems for businesses. TPO, EPDM, and more. Licensed & certified.',
    ogImage: 'https://starkroofingrenovation.com/drone-7.jpg',
  });
  return <div className="min-h-screen">
      <Navbar />
      
      <ServicePageHero
        title="Commercial Roofing"
        subtitle="Flat roofing systems for businesses of all sizes — TPO, EPDM, and modified bitumen installed by certified crews."
        badge="Licensed Washington State Contractor"
        bgImage="/drone-7.jpg"
        breadcrumb="Commercial Roofing"
        ctaLabel="Request Commercial Estimate"
        accentColor="#6366f1"
        secondaryCta={{ label: "View Systems", href: "#systems" }}
      />

      {/* Systems Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Commercial Roofing Systems</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              We specialize in installing and maintaining a variety of commercial roofing systems designed to meet your building's specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-stark-red/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Building2 className="text-stark-red" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">TPO Roofing</h3>
                <p className="text-charcoal/80 mb-4">
                  Thermoplastic Polyolefin (TPO) membrane systems provide excellent UV resistance and energy efficiency with their reflective white surface.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ChevronRight className="text-stark-red mt-1 mr-2" size={16} />
                    <span>Energy-efficient reflective surface</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-stark-red mt-1 mr-2" size={16} />
                    <span>Heat-welded seams for durability</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-stark-red mt-1 mr-2" size={16} />
                    <span>Resistant to UV, chemicals and punctures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-stark-red/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Zap className="text-stark-red" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">PVC Roofing</h3>
                <p className="text-charcoal/80 mb-4">
                  Polyvinyl Chloride (PVC) systems offer superior chemical resistance and are ideal for restaurants and industrial facilities.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ChevronRight className="text-stark-red mt-1 mr-2" size={16} />
                    <span>Excellent chemical resistance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-stark-red mt-1 mr-2" size={16} />
                    <span>Strong heat-welded seams</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-stark-red mt-1 mr-2" size={16} />
                    <span>Fire-resistant properties</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Benefits of Professional Commercial Roofing</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Our commercial roofing solutions are designed to protect your investment while providing excellent value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img src="/lovable-uploads/4d3fbf2a-ede9-499a-b3e6-efbdd23e06c6.png" alt="Commercial Roofing Installation" className="rounded-lg shadow-lg w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex gap-4">
                <div className="bg-stark-red/10 p-3 rounded-full h-14 w-14 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-stark-red" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Extended Lifespan</h3>
                  <p className="text-charcoal/80">
                    Our commercial roofing systems are designed to last 20-30+ years with proper maintenance, offering excellent return on investment.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-stark-red/10 p-3 rounded-full h-14 w-14 flex items-center justify-center flex-shrink-0">
                  <BarChart4 className="text-stark-red" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Energy Efficiency</h3>
                  <p className="text-charcoal/80">
                    Reflective roofing systems can significantly reduce cooling costs during summer months, helping to lower your building's energy consumption.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-stark-red/10 p-3 rounded-full h-14 w-14 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-stark-red" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Minimal Downtime</h3>
                  <p className="text-charcoal/80">
                    Our experienced installation teams work efficiently to minimize disruption to your business operations during roof installation or repairs.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Button className="bg-stark-red hover:bg-stark-red/90 text-white">
                  Schedule a Free Inspection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <VirtualAssistant />
      <Footer />
    </div>;
};
export default CommercialRoofing;