
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready for a New GAF Roof?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. As certified GAF certified contractors, we'll help you choose the perfect shingle color and design for your home.
          </p>
          <Link to="#contact" className="btn-primary">
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
