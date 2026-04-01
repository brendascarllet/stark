import React from 'react';
import { Download, ArrowDown, ArrowUp, Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const WarrantyFAQ = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <p className="section-subtitle text-center mb-12">
          Common questions about our warranty coverage and protection.
        </p>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden" id="download">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100">
                <span className="text-lg font-heading font-bold text-navy">What does the 25-year labor warranty cover?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <p className="text-charcoal/80">
                  Our labor warranty covers any defects or issues arising from the installation process itself. This includes problems with flashing, sealing, improper nailing, and any other workmanship-related issues that might cause leaks or damage.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100">
                <span className="text-lg font-heading font-bold text-navy">Is the warranty transferable if I sell my home?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <p className="text-charcoal/80">
                  Yes, our warranty is fully transferable to a new homeowner one time during the warranty period. This adds value to your home when selling and provides peace of mind to the new owners.
                </p>
                <div className="bg-green-50 border border-green-100 rounded-md p-3 mt-3 flex items-start">
                  <Check size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-green-800 ml-2">
                    <strong>Pro Tip:</strong> Keep your warranty documentation in a safe place, as you'll need to provide it to the new homeowner during the transfer process.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100">
                <span className="text-lg font-heading font-bold text-navy">What happens if I need to make a warranty claim?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <p className="text-charcoal/80 mb-3">
                  Simply contact our office, and we'll schedule an inspection within 48 hours. If we find any issues covered by the warranty, repairs will be scheduled promptly at no cost to you. Our goal is to resolve warranty claims as quickly and efficiently as possible.
                </p>
                <ol className="list-decimal ml-5 space-y-2 text-charcoal/80">
                  <li>Contact our warranty department at (123) 456-7890</li>
                  <li>Schedule an inspection (typically within 48 hours)</li>
                  <li>Receive a detailed assessment report</li>
                  <li>If covered, repairs will be scheduled promptly</li>
                  <li>All covered repairs are completed at no cost to you</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100">
                <span className="text-lg font-heading font-bold text-navy">Does the warranty cover storm damage?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <p className="text-charcoal/80">
                  The manufacturer warranty includes coverage for wind damage up to 130 MPH for the first 15 years. Storm damage such as hail or falling objects would typically be covered by your homeowner's insurance, but we work closely with insurance companies to ensure proper repairs.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100">
                <span className="text-lg font-heading font-bold text-navy">Are there any maintenance requirements to keep the warranty valid?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <p className="text-charcoal/80">
                  We recommend an annual roof inspection to identify and address minor issues before they become major problems. However, regular maintenance is not required to maintain warranty coverage. Any damage caused by neglect or improper maintenance would not be covered.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100">
                <span className="text-lg font-heading font-bold text-navy">How does your warranty compare to other roofing companies?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <p className="text-charcoal/80 mb-3">
                  Our warranty stands out in several key ways:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <ArrowUp className="text-green-600 flex-shrink-0 mt-1" size={16} />
                    <span className="ml-2">25-year labor coverage (industry average: 1-5 years)</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowUp className="text-green-600 flex-shrink-0 mt-1" size={16} />
                    <span className="ml-2">No prorating throughout warranty period</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowUp className="text-green-600 flex-shrink-0 mt-1" size={16} />
                    <span className="ml-2">Transferable to new homeowner</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowUp className="text-green-600 flex-shrink-0 mt-1" size={16} />
                    <span className="ml-2">Covers all roofing system components</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-heading font-bold text-navy mb-4">Register Your Warranty</h3>
          
          <a href="https://www.gaf.com/en-us/resources/warranties/register" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button className="bg-stark-red hover:bg-stark-redHover">
              <Download size={18} className="mr-2" />
              Register Your Warranty
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WarrantyFAQ;
