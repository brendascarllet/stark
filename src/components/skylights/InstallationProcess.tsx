
import React, { useState } from 'react';
import { ClipboardCheck, Ruler, HardHat, CheckSquare } from 'lucide-react';
import ProcessStepBox from '@/components/shared/ProcessStepBox';

const InstallationProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      number: 1,
      title: "Consultation",
      description: "We assess your home and discuss your needs to determine the best skylight solution. Our experts evaluate your roof structure, consider optimal placement for maximum natural light, and help you select the perfect skylight style and features to enhance your home's comfort and energy efficiency.",
      icon: ClipboardCheck
    },
    {
      number: 2,
      title: "Design & Planning",
      description: "Our team creates a detailed plan for the installation, considering structural requirements. This includes precise measurements, interior and exterior considerations, and addressing any modifications needed to ensure your skylight integrates perfectly with your existing roof and home design.",
      icon: Ruler
    },
    {
      number: 3,
      title: "Professional Installation",
      description: "Our certified installers carefully install your new skylight with minimal disruption. Using specialized tools and proven techniques, we ensure weathertight seals, proper flashing, and structural integrity. We take extra care to protect your home throughout the installation process.",
      icon: HardHat
    },
    {
      number: 4,
      title: "Inspection & Warranty",
      description: "We conduct a thorough inspection and provide comprehensive warranty coverage. Once installation is complete, we test for proper operation and water-tightness, explain how to use and maintain your new skylight, and provide detailed documentation of your manufacturer and workmanship warranties.",
      icon: CheckSquare
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
            We ensure a smooth, professional skylight installation from start to finish
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
