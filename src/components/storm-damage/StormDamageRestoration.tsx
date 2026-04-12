import React from 'react';
import { ArrowRight } from 'lucide-react';

const StormDamageRestoration = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Storm Damage Restoration</h2>
        <p className="section-subtitle text-center">
          From a single torn shingle to a tree-through-the-attic emergency — we tarp, document, and rebuild.
        </p>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/17b5b310-a8ca-4f81-9f07-78a578f80f85.png"
                alt="Storm-damaged asphalt shingles with visible impact and tearing"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-heading font-bold text-navy mb-2">
                Wind &amp; Tree Damage on Asphalt Shingles
              </h3>
              <p className="text-charcoal/80">
                This Western Washington home took a hit from a December windstorm — torn shingles, lifted
                edges, and impact marks where a branch came down. Left alone, gaps like these are leaks
                waiting for the next atmospheric river. We tarp the same day, photograph everything for
                your insurance, then rebuild it to GAF spec.
              </p>
              <div className="mt-4 flex justify-center">
                <a href="#book-inspection" className="btn-primary flex items-center">
                  Book My Free Inspection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StormDamageRestoration;
