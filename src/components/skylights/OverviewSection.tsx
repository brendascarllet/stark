
import React from 'react';
import { Sun } from 'lucide-react';

const OverviewSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Bring Natural Light Into Your Home</h2>
            <p className="text-charcoal/80 mb-6">
              Our premium skylight installation services offer an exceptional way to enhance your home with natural light. We work with the full <strong>VELUX</strong> residential lineup — including their <strong>solar-powered automatic skylights with built-in rain sensors</strong> that close themselves when a storm rolls in.
            </p>
            <p className="text-charcoal/80 mb-6">
              Whether you're brightening a dark hallway, adding a focal point to your kitchen, or venting a steamy bathroom, we'll match you with the right model and install it so it lasts — backed by both the VELUX No Leak warranty and our own workmanship guarantee.
            </p>
            <div className="flex items-center gap-2 text-stark-red mb-4">
              <Sun size={20} />
              <span className="font-medium">VELUX Certified · 30+ years installing in Seattle weather</span>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/263e14a0-6faa-45ca-b508-4d8d686b30e5.png" 
              alt="Modern kitchen with elegant skylight" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
