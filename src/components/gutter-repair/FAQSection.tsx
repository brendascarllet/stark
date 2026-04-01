
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import FAQSchema from '@/components/shared/FAQSchema';

const FAQSection = () => {
  const faqItems = [
    {
      question: "How do I know if my gutters need repair?",
      answer: "Look for signs like water overflow during rain, sagging sections, visible cracks or holes, water damage on siding, or gutters pulling away from the roof edge. In Seattle's rainy climate, failing gutters can quickly cause foundation damage — if you notice any of these signs, schedule an inspection."
    },
    {
      question: "How much does gutter repair cost in Seattle?",
      answer: "Gutter repair costs depend on the extent of damage and the type of gutter system. Simple resealing or reattachment costs less than replacing damaged sections. We provide free estimates so you know the exact cost before we start. Call (206) 739-8232 for yours."
    },
    {
      question: "How long does the repair promotion last?",
      answer: "Our 5\" gutter repair special is a limited-time offer that may end without notice. We recommend contacting us as soon as possible to secure this promotional rate before it expires."
    },
    {
      question: "Can you match my existing gutter color?",
      answer: "Yes, we maintain relationships with all major manufacturers and can match most existing gutter colors. Our goal is to make repairs blend seamlessly with your current system."
    },
    {
      question: "Is gutter repair covered by homeowners insurance?",
      answer: "Gutter repairs due to storm damage, fallen trees, or other sudden events are typically covered by homeowners insurance. We work directly with insurance companies and can help you navigate the claims process."
    },
    {
      question: "How often should gutters be cleaned in the Pacific Northwest?",
      answer: "With Seattle's heavy tree cover and frequent rain, we recommend cleaning your gutters at least twice a year — once in late fall after leaves drop and once in spring. Homes near large trees may need quarterly cleaning to prevent clogs and water damage."
    },
    {
      question: "Do you offer gutter guard installation?",
      answer: "Yes, we install gutter guards that reduce debris buildup and minimize the need for frequent cleaning. This is especially popular with Seattle homeowners dealing with pine needles and leaf buildup. Ask about gutter guards during your free estimate."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <FAQSchema faqs={faqItems} />
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="bg-white rounded-lg shadow-sm border border-gray-100">
                  <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold">{item.question}</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-charcoal/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
