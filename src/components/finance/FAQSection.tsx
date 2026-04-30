
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQSchema from '@/components/shared/FAQSchema';

const FAQSection = () => {
  const faqItems = [
    {
      question: "What credit score do I need to qualify for roofing financing?",
      answer: "While credit requirements vary by program, we offer financing options for a wide range of credit profiles. We have solutions for those with excellent credit as well as options for homeowners with less-than-perfect credit. Apply online or call (206) 739-8232 to find out your options."
    },
    {
      question: "How long does approval take?",
      answer: "In most cases, you can receive an approval decision within minutes of completing your application. Our streamlined process is designed to be quick and hassle-free."
    },
    {
      question: "Is there a prepayment penalty?",
      answer: "No, our financing options do not include prepayment penalties. You're free to pay off your loan early without incurring additional fees."
    },
    {
      question: "What is the maximum loan amount?",
      answer: "Loan amounts vary by program and are based on factors including your credit profile, income, and the scope of your project. We offer solutions for projects of all sizes."
    },
    {
      question: "Can I finance my entire roofing project?",
      answer: "Yes, many of our financing options allow you to finance 100% of your project costs, including materials and labor, with no money down required."
    },
    {
      question: "How do I apply for roofing financing?",
      answer: "Applying is simple — fill out our online application or call (206) 739-8232 to discuss your project and financing needs. Most homeowners receive a decision within minutes, and financing can be secured within 2–3 business days."
    },
    {
      question: "What monthly payment can I expect for a new roof?",
      answer: "Monthly payments depend on your loan amount, term, and interest rate. Contact us for a personalized payment calculation based on your specific project. You can also use our online payment calculator on the financing page to explore options."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <FAQSchema faqs={faqItems} />
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <p className="section-subtitle text-center mb-12">
          Answers to common questions about our financing options
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white p-4 rounded-xl shadow-sm">
                <AccordionTrigger className="text-xl font-heading font-bold text-stark-red text-left">
                  <span className="text-left flex-1">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/80 pt-2 text-left">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
