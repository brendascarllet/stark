
import React from 'react';
import { TrendingUp, Thermometer, Volume2, Shield, Leaf, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const WindowBenefitsSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-10 w-10 text-stark-red" />,
      title: "Energy Efficiency",
      description: "Modern windows significantly reduce energy costs with superior insulation and UV protection."
    },
    {
      icon: <Thermometer className="h-10 w-10 text-stark-red" />,
      title: "Improved Comfort",
      description: "Eliminate drafts and cold spots while maintaining consistent indoor temperatures year-round."
    },
    {
      icon: <Volume2 className="h-10 w-10 text-stark-red" />,
      title: "Noise Reduction",
      description: "High-quality windows provide excellent sound insulation from outside noise pollution."
    },
    {
      icon: <Shield className="h-10 w-10 text-stark-red" />,
      title: "Enhanced Security",
      description: "Advanced locking mechanisms and impact-resistant glass improve home security."
    },
    {
      icon: <Leaf className="h-10 w-10 text-stark-red" />,
      title: "Low Maintenance",
      description: "Today's windows require minimal upkeep with easy-clean features and durable materials."
    },
    {
      icon: <Home className="h-10 w-10 text-stark-red" />,
      title: "Increased Value",
      description: "Window replacement typically offers one of the highest returns on investment for home improvements."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Benefits of Premium Windows</h2>
        <p className="section-subtitle text-center">
          Investing in high-quality window replacement delivers substantial benefits for comfort, aesthetics, and long-term value
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-stark-red/10 p-4 rounded-full mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-navy mb-2">{benefit.title}</h3>
              <p className="text-charcoal/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WindowBenefitsSection;
