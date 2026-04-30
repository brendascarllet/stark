
import React, { useState } from 'react';
import { Calendar, Search, FileText, Hammer, ThumbsUp } from 'lucide-react';
import ProcessStepBox from '@/components/shared/ProcessStepBox';
import { motion } from 'framer-motion';

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      number: 1,
      title: "Set Appointment",
      description: "Reach out to us anytime. We'll schedule your free inspection at a time that works best for you.",
      icon: Calendar
    },
    {
      number: 2,
      title: "Inspection & Estimate",
      description: "We come out to assess your roof, gutters, or exterior needs — no pressure, just honest answers.",
      icon: Search
    },
    {
      number: 3,
      title: "Customize & Plan",
      description: "We walk you through materials, colors, and timelines. Everything is tailored to your style and budget.",
      icon: FileText
    },
    {
      number: 4,
      title: "Service Date",
      description: "Our professional crew gets to work. We show up on time, clean up right, and stay in communication throughout.",
      icon: Hammer
    },
    {
      number: 5,
      title: "Final Walkthrough",
      description: "We inspect everything together to make sure you're 100% satisfied before we call the job done.",
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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy">
            Our Process Makes It Easy!
          </h2>
          <p className="text-charcoal/80 max-w-2xl mx-auto text-lg">
            We've simplified roofing to deliver exceptional results with minimal hassle
          </p>
        </motion.div>
        
        <div className="process-steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProcessStepBox 
                number={step.number}
                title={step.title}
                description={step.description}
                isActive={activeStep === step.number}
                onClick={() => handleStepClick(step.number)}
                icon={step.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
