
import React from 'react';
import { Accordion } from "@/components/ui/accordion";
import FAQItem from './FAQItem';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQListProps {
  faqs: FAQ[];
}

const FAQList: React.FC<FAQListProps> = ({ faqs }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <FAQItem 
          key={index} 
          question={faq.question} 
          answer={faq.answer} 
          index={index} 
        />
      ))}
    </Accordion>
  );
};

export default FAQList;
