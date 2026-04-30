import React from 'react';
import LocationPage from '@/components/locations/LocationPage';

const BothellLocation = () => {
  const content = (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Roofing Services in Bothell, WA</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stark Roofing & Renovation is your trusted roofing contractor in Bothell. Serving the Bothell community and surrounding areas with professional roofing, gutter, siding, and renovation services backed by our GAF certification.
        </p>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Bothell Roofing Services We Offer</h3>
        <p className="text-gray-700 mb-4">
          From new roofs to repairs, we handle all your roofing needs:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
          <li><strong>Complete Roof Replacement</strong> - GAF premium shingles with professional installation</li>
          <li><strong>Roof Repair & Maintenance</strong> - Leak fixes and storm damage repair</li>
          <li><strong>Gutter Replacement</strong> - Seamless gutters and gutter repair</li>
          <li><strong>Commercial & Residential</strong> - Services for all property types</li>
          <li><strong>Siding Installation</strong> - James Hardie and premium siding</li>
          <li><strong>Window Replacement</strong> - Energy-efficient replacement windows</li>
        </ul>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Why Bothell Homeowners Choose Stark Roofing</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
          <li><strong>GAF Certified</strong> - Factory-trained professionals only</li>
          <li><strong>Free Roof Inspection</strong> - Drone assessment and detailed estimate</li>
          <li><strong>Local Knowledge</strong> - Understanding of Puget Sound weather challenges</li>
          <li><strong>Transparent Pricing</strong> - Competitive estimates with no hidden fees</li>
          <li><strong>Financing Available</strong> - Flexible payment plans</li>
          <li><strong>Warranty Protection</strong> - Comprehensive coverage on all work</li>
        </ul>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Bothell Weather & Roof Durability</h3>
        <p className="text-gray-700 mb-4">
          Bothell's climate requires durable roofing solutions. Our team specializes in installing roofs that withstand the heavy rain, wind, and occasional storms of the Puget Sound region. With proper maintenance and quality installation, your roof will protect your home for decades.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Get Your Free Bothell Roof Estimate</h3>
        <p className="text-gray-700 mb-4">
          Call Stark Roofing today at <strong>206-739-8232</strong> for a free, no-obligation roof inspection and estimate. We serve Bothell and all of Greater Seattle.
        </p>
      </div>
    </div>
  );

  return (
    <LocationPage
      city="Bothell"
      state="WA"
      region="Greater Seattle"
      description="Professional roofing contractors serving Bothell with premium GAF-certified services."
      content={content}
      heroImage="drone-3.webp"
      keywords="roofing contractor Bothell, roof repair Bothell WA, roofer Bothell, roof replacement Bothell"
    />
  );
};

export default BothellLocation;
