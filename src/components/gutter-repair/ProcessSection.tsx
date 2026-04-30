
import React, { useState } from 'react';
import { Search, FileText, Wrench, CheckCircle } from 'lucide-react';
import ProcessStepBox from '@/components/shared/ProcessStepBox';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      number: 1,
      title: "Free Inspection",
      description: "We thoroughly assess your gutter system to identify all issues and determine if repair is the best option. Our inspection covers all components including gutters, downspouts, fascia boards, and attachment points.",
      icon: Search
    },
    {
      number: 2,
      title: "Clear Estimate",
      description: "You'll receive a detailed quote within our promotional price range with no hidden fees or surprises. We take time to explain all identified issues, recommended repairs, and provide options at different price points.",
      icon: FileText
    },
    {
      number: 3,
      title: "Professional Repair",
      description: "Our experienced technicians efficiently complete all repairs using high-quality materials and techniques. We realign sagging sections, seal leaky joints, replace damaged components, and ensure proper water flow throughout your entire system.",
      icon: Wrench
    },
    {
      number: 4,
      title: "Final Inspection",
      description: "We test all repairs to ensure proper water flow and provide maintenance tips to extend gutter life. This includes a thorough cleaning of all debris, testing water flow patterns, and a complete inspection of our work.",
      icon: CheckCircle
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy">
            Our Process Makes It Easy!
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto text-lg">
            We've simplified gutter repair to deliver exceptional results with minimal hassle
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

export default ProcessSection;
