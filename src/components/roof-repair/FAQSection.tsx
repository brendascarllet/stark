
import React from 'react';

const FAQSection = () => {
  const faqItems = [
    {
      question: "How do I know if my roof needs repair?",
      answer: "Look for signs like water stains on ceilings, missing or damaged shingles, granules in gutters, daylight visible through the roof boards, or a sagging roof deck. If you notice any of these signs, it's time for a professional inspection."
    },
    {
      question: "How long does a typical roof repair take?",
      answer: "Most standard repairs can be completed in a single day, depending on the extent of the damage and weather conditions. Larger repairs may take 2-3 days. We always provide a timeline estimate before beginning work."
    },
    {
      question: "Can you match my existing roof materials?",
      answer: "Yes, we maintain relationships with all major manufacturers and can match most existing roofing materials, including discontinued shingles in many cases. Our goal is to make repairs blend seamlessly with your current roof."
    },
    {
      question: "Is roof repair covered by insurance?",
      answer: "Many repairs due to storm damage, fallen trees, or other sudden events are typically covered by homeowners insurance. We work directly with insurance companies and can help you navigate the claims process for covered repairs."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-heading font-bold text-navy mb-3">{item.question}</h3>
              <p className="text-charcoal/80">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
