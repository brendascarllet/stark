
import React, { useState } from 'react';
import { Search, FileText, Calendar, CheckCircle } from 'lucide-react';
import ProcessStepBox from '@/components/shared/ProcessStepBox';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      number: 1,
      title: "Free Inspection",
      description: "Our certified technicians conduct a thorough assessment of your roof's condition and identify all issues requiring repair. We document everything with photos and detailed notes to ensure nothing is missed.",
      icon: Search
    },
    {
      number: 2,
      title: "Detailed Estimate",
      description: "You'll receive a transparent quote with all repairs clearly explained so you understand exactly what work is needed and why. Our no-pressure approach ensures you can make an informed decision about your roof repairs.",
      icon: FileText
    },
    {
      number: 3,
      title: "Expert Repairs",
      description: "Our skilled repair team addresses all identified issues using premium materials and proper techniques to ensure lasting results. We maintain open communication throughout the repair process so you're always informed.",
      icon: Calendar
    },
    {
      number: 4,
      title: "Final Inspection",
      description: "Once repairs are complete, we conduct a comprehensive inspection to verify all work meets our high standards of quality and your complete satisfaction. We thoroughly clean up the work area, leaving your property spotless.",
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
    <section className="py-16 md:py-24 bg-gray-50" id="process">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Process Makes It Easy!
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto text-lg">
            We've simplified roof repair to deliver exceptional results with minimal hassle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
