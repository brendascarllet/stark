
import React, { useState } from 'react';
import { Search, FileText, Hammer, ThumbsUp } from 'lucide-react';
import ProcessStepBox from '@/components/shared/ProcessStepBox';

const InstallationProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      number: 1,
      title: "Inspection & Assessment",
      description: "Our experts thoroughly evaluate your current gutter system and home drainage needs to provide a customized solution.",
      icon: Search
    },
    {
      number: 2,
      title: "Custom Fabrication",
      description: "We measure and fabricate your seamless gutters on-site to ensure a perfect fit for your home's specific dimensions.",
      icon: FileText
    },
    {
      number: 3,
      title: "Professional Installation",
      description: "Our certified installers carefully remove your old gutters and precisely install your new gutter system with proper slope and secure fastening.",
      icon: Hammer
    },
    {
      number: 4,
      title: "Final Inspection & Cleanup",
      description: "We perform a thorough water test to ensure proper flow, install leaf protection systems, and complete a comprehensive cleanup, leaving your property spotless.",
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
            Our Installation Process
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto text-lg">
            We've simplified gutter installation to deliver exceptional results with minimal hassle
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

export default InstallationProcess;
