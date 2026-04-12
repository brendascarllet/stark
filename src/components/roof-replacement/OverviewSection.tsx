
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const OverviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-navy mb-6">When Is It Time for a Roof Replacement?</h2>
            <p className="text-charcoal/80 mb-4">
              Most roofs are designed to protect your home for about 20 years. However, factors like severe weather conditions, poor maintenance, and the quality of the original installation can shorten this lifespan.
            </p>
            <p className="text-charcoal/80 mb-4">
              Common signs that indicate your roof needs replacement include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-charcoal/80 space-y-2">
              <li>Multiple missing, cracked, or curling shingles</li>
              <li>Significant granule loss in gutters</li>
              <li>Visible sagging areas on your roof</li>
              <li>Water leaks or stains on interior ceilings</li>
              <li>Daylight visible through roof boards</li>
              <li>Your roof is over 20 years old</li>
            </ul>
            <Link to="#contact">
              <Button className="bg-stark-red hover:bg-stark-redHover text-white">
                Get a Free Estimate
              </Button>
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/e2f4fef0-a179-4f5e-98e4-e19e7c678191.webp" 
              alt="Gray architectural shingle roof with multiple peaks" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
