
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarRange, Ruler, Clipboard, Wrench, CheckCircle, ThumbsUp } from 'lucide-react';

const WindowProcessSection = () => {
  const processSteps = [
    {
      icon: <CalendarRange className="h-10 w-10 text-white" />,
      title: "Consultation",
      description: "Schedule a free consultation with our window experts to discuss your needs and preferences."
    },
    {
      icon: <Ruler className="h-10 w-10 text-white" />,
      title: "Measurement",
      description: "Our professionals will take precise measurements to ensure perfect fit for your replacement windows."
    },
    {
      icon: <Clipboard className="h-10 w-10 text-white" />,
      title: "Selection",
      description: "Choose from our wide range of premium window styles, materials, and energy-efficient options."
    },
    {
      icon: <Wrench className="h-10 w-10 text-white" />,
      title: "Installation",
      description: "Our certified technicians will install your new windows with precision and care."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Inspection",
      description: "Final quality check ensures proper installation, operation, and sealing of all windows."
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-white" />,
      title: "Satisfaction",
      description: "Enjoy your beautiful, energy-efficient windows backed by our comprehensive warranty."
    }
  ];

  return (
    <section className="section-padding bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Our Window Replacement Process</h2>
        <p className="text-white/80 mb-12 max-w-2xl mx-auto text-center">
          We follow a detailed, professional process to ensure your window replacement project is completed smoothly and exceeds your expectations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-navy/50 border border-white/30 rounded-lg p-6 hover:bg-navy/80 transition-all text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left mb-4">
                <div className="bg-stark-red p-3 rounded-full mb-3 md:mb-0 md:mr-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-heading font-bold">{step.title}</h3>
              </div>
              <p className="text-white/80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WindowProcessSection;
