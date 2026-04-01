
import React from 'react';
import StormFAQItem from './StormFAQItem';

const StormFAQSection = () => {
  const faqItems = [
    {
      question: "How soon should I get my roof inspected after a hailstorm?",
      answer: "You should schedule a professional roof inspection as soon as possible after a hailstorm. Hail damage can compromise your roof's integrity and lead to water infiltration, even if leaks aren't immediately apparent. Most insurance policies also have time limits for filing storm damage claims."
    },
    {
      question: "Will my insurance cover hail damage to my roof?",
      answer: "Most homeowner's insurance policies cover hail damage, subject to your deductible. However, coverage can vary based on your specific policy, the age of your roof, and other factors. At Stark Roofing, we work directly with insurance companies to help navigate the claims process and ensure you receive the coverage you're entitled to."
    },
    {
      question: "How long does storm damage repair typically take?",
      answer: "The timeline varies depending on the extent of damage, but most storm damage repairs or replacements can be completed within 1-3 days once materials are on site. Insurance approval, material availability, and weather conditions can affect the overall timeline. We prioritize emergency situations to prevent further damage to your home."
    },
    {
      question: "Can I stay in my home during roof repairs?",
      answer: "In most cases, yes. Roof repairs or replacement can be noisy, but you can typically remain in your home during the process. Our crews work efficiently to minimize disruption. In cases of extensive damage where interior repairs are also needed, temporary relocation might be necessary."
    },
    {
      question: "What if I don't repair hail damage right away?",
      answer: "Delaying repairs can lead to more significant problems over time. Hail damage compromises the protective layer of your roof, allowing water to penetrate during subsequent rain. This can lead to leaks, structural damage, mold growth, and insulation damage – all of which are more expensive to repair than addressing the initial hail damage promptly."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Storm Damage FAQ</h2>
        <p className="section-subtitle text-center">
          Common questions about storm damage, insurance claims, and repairs.
        </p>
        
        <div className="max-w-3xl mx-auto mt-12 space-y-6">
          {faqItems.map((item, index) => (
            <StormFAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StormFAQSection;
