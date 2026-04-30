
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Droplet, Ban, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

const FilterBenefitsSection = () => {
  const handleLearnMoreClick = () => {
    toast.success("Filter system info requested!", {
      description: "A specialist will contact you with more details"
    });
  };
  
  const benefits = [{
    icon: <Leaf className="h-6 w-6 text-white" />,
    title: "Blocks Leaves & Debris",
    description: "Keeps leaves, pine needles, and roof grit out of your gutters"
  }, {
    icon: <Droplet className="h-6 w-6 text-white" />,
    title: "Allows Water Flow",
    description: "Engineered mesh allows rainwater to flow freely while blocking debris"
  }, {
    icon: <Ban className="h-6 w-6 text-white" />,
    title: "No More Cleaning",
    description: "Eliminates the need for dangerous ladder climbing and gutter cleaning"
  }, {
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    title: "Lifetime Warranty",
    description: "Our premium filters are backed by a lifetime material warranty"
  }];
  
  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Premium Gutter Filter Protection
          </motion.h2>
          <motion.p 
            className="text-slate-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our advanced filter systems keep your gutters flowing freely while blocking debris
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-stark-red p-5 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-stark-red border-4 border-white/30 flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-600 mb-4">{benefit.description}</p>
                <div className="flex items-center justify-center text-stark-red font-medium">
                  <Check className="h-5 w-5 mr-1" /> Included in our systems
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="stark-red" 
            size="fit" 
            onClick={handleLearnMoreClick}
            className="mt-4 whitespace-nowrap"
          >
            Learn More About Our Filter Systems
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FilterBenefitsSection;
