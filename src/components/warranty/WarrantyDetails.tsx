
import React from 'react';
import { CheckCircle2, ArrowDown } from 'lucide-react';
import FileText from '@/components/FileText';
import Tools from '@/components/Tools';
import { Calendar } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const WarrantyDetails = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Warranty Coverage Details</h2>
        <p className="section-subtitle text-center mb-12">
          Understanding what's included in each of our warranty options.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-heading font-bold text-navy mb-6 flex items-center">
              <FileText className="text-stark-red mr-3" size={28} />
              Material Warranty
            </h3>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="py-4">
                  <span className="text-navy font-medium">What's Covered</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">GAF's limited lifetime warranty covers manufacturing defects in your shingles and other roofing materials for as long as you own your home.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Manufacturing defects in materials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Color fading and material deterioration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Algae discoloration (StainGuard Plus™)</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="py-4">
                  <span className="text-navy font-medium">Duration of Coverage</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">GAF offers lifetime limited warranty for as long as you own your home. Coverage terms vary by specific products:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Lifetime coverage for shingles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Smart Choice® Protection Period: Full coverage for first period (typically 10 years)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">After initial period, prorated coverage based on material costs</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="py-4">
                  <span className="text-navy font-medium">Limitations</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Material warranties typically have the following limitations:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowDown className="text-stark-red flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Does not cover improper installation issues</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowDown className="text-stark-red flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Limited coverage for extreme weather events</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowDown className="text-stark-red flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">May be voided by improper ventilation</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-heading font-bold text-navy mb-6 flex items-center">
              <Tools className="text-stark-red mr-3" size={28} />
              Workmanship Warranty
            </h3>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="py-4">
                  <span className="text-navy font-medium">What's Covered</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Our 25-year labor warranty covers any issues arising from the installation process itself, providing complete peace of mind.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Installation errors and improper techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Improper sealing and flashing issues</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Leaks due to workmanship</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="py-4">
                  <span className="text-navy font-medium">Duration of Coverage</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Our workmanship warranty offers industry-leading coverage:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">25-year coverage period for standard installations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Non-prorated for the entire duration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Coverage is backed by our longstanding reputation</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="py-4">
                  <span className="text-navy font-medium">What Sets Us Apart</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Our workmanship warranty exceeds industry standards:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Most contractors offer only 1-5 years on workmanship</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Our 25-year warranty is 5x the industry average</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="ml-2">Fully transferable to a new homeowner once during warranty period</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h3 className="text-2xl font-heading font-bold text-navy mb-6 flex items-center justify-center">
            <Calendar className="text-stark-red mr-3" size={28} />
            System-Wide Coverage
          </h3>

          <p className="text-charcoal/80 mb-6 text-center">
            Our warranty covers your entire roofing system, not just individual components. This comprehensive approach ensures total protection.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-navy/5 p-5 rounded-lg border border-navy/10">
              <h4 className="font-heading font-bold text-navy mb-3">Shingles & Materials</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="ml-2">Architectural shingles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="ml-2">Ridge cap shingles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="ml-2">Starter strip shingles</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy/5 p-5 rounded-lg border border-navy/10">
              <h4 className="font-heading font-bold text-navy mb-3">Ventilation & Protection</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="ml-2">Ridge vents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="ml-2">Attic ventilation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="ml-2">Leak barriers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy/5 p-5 rounded-lg border border-navy/10">
              <h4 className="font-heading font-bold text-navy mb-3">Underlying Components</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="ml-2">Roof deck protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="ml-2">Flashing & metal work</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="ml-2">Waterproofing underlayment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantyDetails;
