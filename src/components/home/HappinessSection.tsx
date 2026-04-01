
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const HappinessSection: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stark-red mb-4">
              Your Peace of Mind Is Our #1 Priority
            </h2>
            <p className="text-lg text-[#333333] mb-6">
              We help prioritize individuals across WA by providing excellent roofing, siding, window, and gutter installations and repairs. Whether you're snowed in or heading to the lake, you can rest assured that your home is safe and sound – not to mention stylish!
            </p>
            
            <div className="mt-6">
              <Link to="/contact">
                <Button 
                  className="bg-stark-red hover:bg-stark-redHover text-white font-semibold px-8 py-3 flex items-center gap-2"
                >
                  <Calendar size={18} />
                  Get In Touch!
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-full">
              {isMobile ? (
                <div className="w-full h-[300px] relative">
                  <img 
                    src="/lovable-uploads/b7fa4dd0-5ede-48bb-9a6e-89e6ca1ba320.png" 
                    alt="Professional team member" 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
              ) : (
                <div className="w-full relative" style={{ height: "380px" }}>
                  <img 
                    src="/lovable-uploads/b7fa4dd0-5ede-48bb-9a6e-89e6ca1ba320.png" 
                    alt="Professional team member" 
                    className="absolute w-full h-[calc(100%+10px)] object-cover"
                    style={{ top: "-5px", objectPosition: "center 20%" }} 
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HappinessSection;
