
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const WindowTypesSection = () => {
  const windowTypes = [
    {
      name: "Double-Hung Windows",
      description: "Classic style with two movable sashes that slide up and down, offering excellent ventilation and easy cleaning.",
      image: "/lovable-uploads/29b4c032-f49f-42e6-b9c0-4928402b10de.png"
    },
    {
      name: "Casement Windows",
      description: "Hinged on one side and open outward, providing maximum ventilation, easy operation, and unobstructed views.",
      image: "/lovable-uploads/5c7b3ea8-ad70-47e8-bcb9-cf30db5e3027.png"
    },
    {
      name: "Sliding Windows",
      description: "Horizontal sliding design perfect for contemporary homes, offering easy operation and maintenance.",
      image: "/lovable-uploads/4e22b510-288f-4fd5-934c-4d533af06eec.png"
    },
    {
      name: "Bay & Bow Windows",
      description: "Elegant projecting windows that create additional space, enhance views, and add architectural interest.",
      image: "/lovable-uploads/547da09d-732b-4d73-a3fc-3e78617d40ed.png"
    },
    {
      name: "Picture Windows",
      description: "Fixed windows that maximize views and natural light while offering superior energy efficiency.",
      image: "/lovable-uploads/a222bf7c-b8e9-43f7-a20e-94bcfb2cf96b.png"
    },
    {
      name: "Awning Windows",
      description: "Hinged at the top and open outward, perfect for ventilation even during light rain.",
      image: "/lovable-uploads/4cde8046-d0b9-4b37-a3e8-410dcc51c092.png"
    }
  ];

  return (
    <section className="section-padding bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Window Styles We Offer</h2>
        <p className="section-subtitle text-center">
          Choose from our wide range of premium window styles to match your home's architecture and your personal preferences
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {windowTypes.map((window, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={window.image} 
                  alt={window.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-navy mb-2">{window.name}</h3>
                <p className="text-charcoal/80 mb-4">{window.description}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-stark-red hover:text-navy transition-colors group"
                >
                  Learn more 
                  <ChevronRight size={18} className="ml-1 transition-all group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WindowTypesSection;
