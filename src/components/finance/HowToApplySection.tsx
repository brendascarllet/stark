
import React, { useState } from 'react';
import { PhoneCall, FileText, Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HowToApplySection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStep = (stepNumber: number) => {
    if (activeStep === stepNumber) {
      setActiveStep(null);
    } else {
      setActiveStep(stepNumber);
    }
  };

  const steps = [
    {
      number: 1,
      title: "Contact Us",
      description: "Fill out our simple form or call us to discuss your project and financing needs.",
      icon: <PhoneCall size={48} strokeWidth={1.5} className="text-white" />
    },
    {
      number: 2,
      title: "Quick Application",
      description: "Complete a secure online application form that takes just minutes to fill out.",
      icon: <FileText size={48} strokeWidth={1.5} className="text-white" />
    },
    {
      number: 3,
      title: "Get Approved",
      description: "Receive a quick decision and start your project with affordable monthly payments.",
      icon: <Check size={48} strokeWidth={1.5} className="text-white" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-navy">How to Apply</h2>
        <p className="text-charcoal/80 text-center mb-16 text-lg max-w-3xl mx-auto">
          Getting financing for your project is easy with our simple application process
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className={`flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg ${activeStep === step.number ? 'border-l-4 border-stark-red' : ''}`}
              onClick={() => toggleStep(step.number)}
            >
              <div className="w-20 h-20 rounded-full bg-stark-red flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <div className="process-step-number mb-2 text-stark-red font-semibold">STEP {step.number}</div>
              <div className="flex items-center justify-center">
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <ChevronDown 
                  className={`h-5 w-5 text-stark-red transition-transform duration-300 ml-2 ${activeStep === step.number ? 'rotate-180' : ''}`} 
                />
              </div>
              
              <AnimatePresence>
                {activeStep === step.number && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-charcoal/80 mt-4">
                      {step.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToApplySection;
