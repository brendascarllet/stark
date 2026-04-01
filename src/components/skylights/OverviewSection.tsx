
import React from 'react';
import { Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

const OverviewSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Bring Natural Light Into Your Home</h2>
            <p className="text-charcoal/80 mb-6">
              Our premium skylight installation services offer an exceptional way to enhance your home with natural light. We provide expert installation of high-quality skylights from trusted manufacturers like VELUX, ensuring perfect fit and optimal performance.
            </p>
            <p className="text-charcoal/80 mb-6">
              Whether you're looking to brighten a dark hallway, add a stunning focal point to your living room, or improve energy efficiency, our skylights are the perfect solution for transforming your space.
            </p>
            <div className="flex items-center gap-2 text-stark-red mb-4">
              <Sun size={20} />
              <span className="font-medium">Energy-efficient designs available</span>
            </div>
            <Link to="/skylight-estimator" className="inline-flex items-center text-stark-red hover:text-stark-redHover font-medium">
              <Calculator size={18} className="mr-2" />
              Calculate your skylight cost
            </Link>
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
