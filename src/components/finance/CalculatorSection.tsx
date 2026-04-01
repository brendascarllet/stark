
import React from 'react';
import { Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const CalculatorSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Calculator size={32} className="text-stark-red mr-2" />
              <h2 className="text-3xl font-heading font-bold text-navy">Payment Calculator</h2>
            </div>
            <p className="text-center text-charcoal/80 mb-8">
              Estimate your monthly payments based on your project cost and financing terms.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-center text-navy font-medium mb-4">
                Contact us for a personalized payment calculation for your specific project.
              </p>
              <div className="text-center">
                <Link to="#apply-now" className="btn-primary inline-block">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
