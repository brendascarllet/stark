
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Protect Your Home?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate on your gutters replacement project. Our experts are ready to help you choose the perfect gutters solution for your home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-stark-red hover:bg-stark-red/90 text-white relative overflow-hidden group">
              <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-[800ms] ease-out group-hover:w-full"></span>
              <span className="relative">
                <a href="#contact">Get a Free Estimate</a>
              </span>
            </Button>
            <Button size="lg" className="bg-stark-red hover:bg-stark-red/90 text-white relative overflow-hidden group">
              <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-[800ms] ease-out group-hover:w-full"></span>
              <span className="relative">
                <Link to="/services">Explore Other Services</Link>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
