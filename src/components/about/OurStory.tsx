
import React from 'react';
const OurStory = () => {
  return <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="w-16 h-1 bg-stark-red mb-4"></div>
            <h2 className="text-3xl font-heading font-bold text-navy mb-6">Our Story</h2>
            <p className="text-charcoal/80 mb-6">
              Stark Roofing &amp; Renovation is a family-owned, GAF Certified roofing and renovation contractor based in Sammamish, Washington. Founded by owner <strong>Brenda Scarllet</strong>, the company proudly serves homeowners and businesses across <strong>King, Snohomish, and Pierce counties</strong> — covering the entire Greater Seattle and Puget Sound region from Sammamish, Bellevue, and Issaquah to Lynnwood, Everett, Seattle, and Tacoma.
            </p>
            <p className="text-charcoal/80 mb-6">
              With <strong>over 30 years of roofing experience</strong> and <strong>more than 2,000 completed roofs</strong> across the Puget Sound, Stark Roofing brings the kind of hands-on expertise homeowners can trust. Brenda is bilingual in English and Portuguese and personally handles sales and estimates, making sure every project is matched to the right materials and the right crew.
            </p>
            <p className="text-charcoal/80">
              As a GAF Certified contractor, Stark Roofing protects homes with premium GAF Timberline shingles, expert flashing details, and the kind of installation craftsmanship that determines whether a roof lasts ten years or thirty. Every job is backed by warranty protection and the family-owned commitment Brenda built the company on.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-96 border-b-4 border-stark-red">
              <img
                src="/brenda-scarllet-owner.jpg"
                alt="Brenda Scarllet — Owner of Stark Roofing & Renovation"
                className="w-full h-full object-cover object-[50%_20%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OurStory;
