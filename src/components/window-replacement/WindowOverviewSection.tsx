
import React from 'react';
import { ShieldCheck, Flower, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

const WindowOverviewSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Premium Window Replacement Solutions</h2>
            <p className="text-charcoal/80 mb-6">
              At Stark Roofing & Renovation, we provide comprehensive window replacement services using premium materials and expert installation techniques. Our energy-efficient windows are designed to enhance your home's appearance, comfort, and value.
            </p>
            <p className="text-charcoal/80 mb-6">
              Whether you're looking to reduce energy costs, improve curb appeal, or increase your home's value, our professional window installation team will guide you through the entire process from selection to completion.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-2 text-stark-red">
                <ShieldCheck size={20} />
                <span className="font-medium">Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-stark-red">
                <Flower size={20} />
                <span className="font-medium">Enhanced Curb Appeal</span>
              </div>
              <div className="flex items-center gap-2 text-stark-red">
                <Gauge size={20} />
                <span className="font-medium">Energy Efficient</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/32b2fc59-1796-4623-a65c-a4818b1354c3.png" 
              alt="Modern window installation" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WindowOverviewSection;
