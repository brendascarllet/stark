
import React, { useState } from 'react';
import { Phone, FileCheck, ShieldCheck, Home, Wrench, CheckSquare } from 'lucide-react';
import ProcessStepBox from '@/components/shared/ProcessStepBox';

const StormDamageProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      number: 1,
      title: "Emergency Inspection",
      description: "We'll assess your roof damage quickly, documenting all storm damage for insurance claims.",
      icon: Phone
    },
    {
      number: 2,
      title: "Insurance Assistance",
      description: "Our experts work directly with insurance adjusters to maximize your coverage and minimize out-of-pocket costs.",
      icon: FileCheck
    },
    {
      number: 3,
      title: "Emergency Protection",
      description: "We secure immediate protection for your home to prevent further water damage while planning permanent repairs.",
      icon: ShieldCheck
    },
    {
      number: 4,
      title: "Customized Plan",
      description: "We create a comprehensive repair strategy based on damage severity and your home's specific needs.",
      icon: Home
    },
    {
      number: 5,
      title: "Professional Repairs",
      description: "Our GAF-certified technicians use premium materials to restore or replace your damaged roof sections.",
      icon: Wrench
    },
    {
      number: 6,
      title: "Final Inspection",
      description: "We inspect all repairs and provide documented warranty coverage for your peace of mind.",
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
            Our Storm Damage Response Process
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto text-lg">
            A proven 6-step approach to quickly restore your roof and protect your home after storm damage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {steps.map((step) => (
            <ProcessStepBox
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isActive={activeStep === step.number}
              onClick={() => handleStepClick(step.number)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StormDamageProcess;
