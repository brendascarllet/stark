
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <p className="section-subtitle text-center mb-12">
          Answers to common questions about our financing options
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white p-4 rounded-xl shadow-sm">
              <AccordionTrigger className="text-xl font-heading font-bold text-stark-red">
                What credit score do I need to qualify?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/80 pt-2">
                While credit requirements vary by program, we offer financing options for a wide range of credit profiles. We have solutions for those with excellent credit as well as options for homeowners with less-than-perfect credit.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white p-4 rounded-xl shadow-sm">
              <AccordionTrigger className="text-xl font-heading font-bold text-stark-red">
                How long does approval take?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/80 pt-2">
                In most cases, you can receive an approval decision within minutes of completing your application. Our streamlined process is designed to be quick and hassle-free.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white p-4 rounded-xl shadow-sm">
              <AccordionTrigger className="text-xl font-heading font-bold text-stark-red">
                Is there a prepayment penalty?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/80 pt-2">
                No, our financing options do not include prepayment penalties. You're free to pay off your loan early without incurring additional fees.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-white p-4 rounded-xl shadow-sm">
              <AccordionTrigger className="text-xl font-heading font-bold text-stark-red">
                What is the maximum loan amount?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/80 pt-2">
                Loan amounts vary by program and are based on factors including your credit profile, income, and the scope of your project. We offer solutions for projects of all sizes.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="bg-white p-4 rounded-xl shadow-sm">
              <AccordionTrigger className="text-xl font-heading font-bold text-stark-red">
                Can I finance my entire project?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/80 pt-2">
                Yes, many of our financing options allow you to finance 100% of your project costs, including materials and labor, with no money down required.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
