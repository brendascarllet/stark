
import React from 'react';
import FAQSchema from '@/components/shared/FAQSchema';

const FAQSection = () => {
  const faqItems = [
    {
      question: "How do I know if my roof needs repair?",
      answer: "Look for signs like water stains on ceilings, missing or damaged shingles, granules in gutters, daylight visible through the roof boards, or a sagging roof deck. Seattle's heavy rain makes even small issues escalate fast — if you notice any of these signs, schedule a professional inspection right away."
    },
    {
      question: "How much does roof repair cost in Seattle?",
      answer: "Roof repair costs in the Seattle and Puget Sound area depend on the type and extent of damage. Minor fixes like replacing a few shingles cost less than larger repairs involving flashing or decking. We provide free inspections and detailed written estimates before any work begins — call (206) 739-8232 for yours."
    },
    {
      question: "How long does a typical roof repair take?",
      answer: "Most standard repairs can be completed in a single day, depending on the extent of the damage and weather conditions. Larger repairs may take 2–3 days. We always provide a timeline estimate before beginning work."
    },
    {
      question: "Do you offer emergency roof repair in Seattle?",
      answer: "Yes — we offer same-week emergency roof repair service across Seattle, Bellevue, Redmond, Kirkland, and the greater Puget Sound area. If you have an active leak or storm damage, call us at (206) 739-8232 and we'll prioritize your repair."
    },
    {
      question: "Can you match my existing roof materials?",
      answer: "Yes, we maintain relationships with all major manufacturers including GAF, CertainTeed, and Malarkey, and can match most existing roofing materials — including discontinued shingles in many cases. Our goal is to make repairs blend seamlessly with your current roof."
    },
    {
      question: "Is roof repair covered by insurance?",
      answer: "Many repairs due to storm damage, fallen trees, or other sudden events are typically covered by homeowners insurance. We work directly with insurance companies and can help you navigate the claims process. Call us for a free storm damage inspection at (206) 739-8232."
    },
    {
      question: "Should I repair or replace my roof?",
      answer: "If your roof is under 15 years old and the damage is localized (a few missing shingles, minor leak, damaged flashing), repair is usually the smart choice. If your roof is over 20 years old, has widespread damage, or you're seeing recurring leaks, a full replacement may save you money long-term. We'll give you an honest recommendation during your free inspection."
    },
    {
      question: "Do you offer free roof inspections?",
      answer: "Yes — every roof repair starts with a free, no-obligation inspection. Our GAF-certified inspectors will assess the damage, take photos, and provide a detailed written estimate. We serve Seattle, Bellevue, Tacoma, Everett, Redmond, Kirkland, and surrounding areas. Call (206) 739-8232 to schedule yours."
    }
  ];

  return (
    <section className="py-16">
      <FAQSchema faqs={faqItems} />
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
