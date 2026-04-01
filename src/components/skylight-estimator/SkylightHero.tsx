
import React from 'react';
import { Calculator, Home, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const SkylightHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:py-32">
      <img 
        src="/lovable-uploads/263e14a0-6faa-45ca-b508-4d8d686b30e5.png" 
        alt="Modern kitchen with beautiful skylight allowing natural light" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <div className="w-20 h-1 bg-stark-red mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            Skylight Price Estimator
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-in border-l-4 border-stark-red pl-4 font-medium drop-shadow-md" style={{ animationDelay: '200ms' }}>
            Transform your home with natural light. Our premium skylights increase brightness, save energy, and enhance your living space.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <a href="#estimator" className="btn-primary flex items-center">
              <Calculator size={18} className="mr-2" />
              Start Estimating Now
            </a>
            <Link to="/skylights" className="btn-secondary flex items-center">
              <Home size={18} className="mr-2" />
              Learn About Skylights
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="flex items-center mb-2">
                <Layers className="text-stark-red mr-2" size={20} />
                <h3 className="text-white font-semibold">Fixed Skylights</h3>
              </div>
              <p className="text-white/80 text-sm">
                Sleek design that maximizes natural light without opening
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="flex items-center mb-2">
                <Home className="text-stark-red mr-2" size={20} />
                <h3 className="text-white font-semibold">Vented Skylights</h3>
              </div>
              <p className="text-white/80 text-sm">
                Open for fresh air and improved ventilation
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="flex items-center mb-2">
                <Calculator className="text-stark-red mr-2" size={20} />
                <h3 className="text-white font-semibold">Custom Options</h3>
              </div>
              <p className="text-white/80 text-sm">
                Tailor skylights to your specific needs and preferences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkylightHero;
