
import React, { useState } from 'react';
import { Calendar, FileText, Search, Hammer, ThumbsUp } from 'lucide-react';
import ProcessStepBox from '@/components/shared/ProcessStepBox';

const WhyChooseUs = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      number: 1,
      title: "Free Inspection",
      description: "We provide a comprehensive roof inspection at no cost to determine your exact needs and identify any potential issues.",
      icon: Calendar
    },
    {
      number: 2,
      title: "Detailed Assessment",
      description: "Our certified inspectors thoroughly evaluate your roof's condition and document all findings with photos and measurements.",
      icon: Search
    },
    {
      number: 3,
      title: "Custom Proposal",
      description: "We create a tailored solution using premium GAF materials with transparent pricing and no hidden costs.",
      icon: FileText
    },
    {
      number: 4,
      title: "Professional Installation",
      description: "Our factory-certified team completes your project with precision using the industry's highest quality materials and techniques.",
      icon: Hammer
    },
    {
      number: 5,
      title: "Complete Satisfaction",
      description: "We perform a final inspection, clean up thoroughly, and provide your warranty documentation for long-term peace of mind.",
      icon: ThumbsUp
    }
  ];

  const handleStepClick = (stepNumber: number) => {
    if (activeStep === stepNumber) {
      setActiveStep(null);
    } else {
      setActiveStep(stepNumber);
    }
  };

  return (
    <section className="py-16 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Process Makes It Easy!
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto text-lg">
            We've simplified roofing to deliver exceptional results with minimal hassle
          </p>
        </div>
        
        <div className="process-steps-container">
          {steps.map((step) => (
            <ProcessStepBox 
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              isActive={activeStep === step.number}
              onClick={() => handleStepClick(step.number)}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
