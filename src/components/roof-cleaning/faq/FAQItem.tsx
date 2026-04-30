
import React from 'react';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  return (
    <AccordionItem value={`item-${index}`}>
      <AccordionTrigger className="text-lg font-semibold text-navy text-left">
        <span className="text-left flex-1">{question}</span>
      </AccordionTrigger>
      <AccordionContent className="text-charcoal/80 text-left">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
