import React from 'react';
import LocationPage from '@/components/locations/LocationPage';

const EverettLocation = () => {
  const content = (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">Roofing Services in Everett, WA</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stark Roofing & Renovation is your trusted roofing contractor in Everett. We serve Everett homeowners and commercial properties with professional roofing, gutter, siding, and renovation services certified by GAF.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Everett Roofing Services</h3>
        <p className="text-gray-700 mb-4">
          Comprehensive roofing solutions for Everett residents:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Roof Replacement</strong> - Premium GAF shingles installed to specs</li>
          <li><strong>Emergency Roof Repair</strong> - Storm damage and leak specialist</li>
          <li><strong>Gutter Services</strong> - Seamless gutter installation and repair</li>
          <li><strong>Commercial Roofing</strong> - TPO, EPDM, and metal roofing</li>
          <li><strong>Siding & Windows</strong> - Complete exterior renovation services</li>
          <li><strong>Detailing Services</strong> - Flashing, skylights, and ventilation</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Everett Roofing Excellence</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>GAF Certified</strong> - Quality materials and installation</li>
          <li><strong>Expert Assessment</strong> - Drone-assisted roof inspections</li>
          <li><strong>Fair Pricing</strong> - Competitive, transparent estimates</li>
          <li><strong>Financing Options</strong> - Flexible payment plans available</li>
          <li><strong>Years of Experience</strong> - 30+ years in roofing with 2,000+ completed roofs across the Puget Sound</li>
          <li><strong>Warranty Protection</strong> - Comprehensive coverage on all work</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Everett Weather & Durable Roofs</h3>
        <p className="text-gray-700 mb-4">
          Everett's northern Puget Sound location brings specific weather challenges. Rain, wind, and occasional storms demand robust roofing. Our GAF-certified team has the expertise to install and maintain roofs designed for the Puget Sound climate.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-3">Schedule Your Everett Roof Estimate</h3>
        <p className="text-gray-700 mb-4">
          Call <strong>206-739-8232</strong> or complete the form above for your free roof inspection and estimate.
        </p>
      </div>
    </div>
  );

  return (
    <LocationPage
      city="Everett"
      state="WA"
      region="Greater Seattle"
      description="Professional roofing contractors in Everett with GAF-certified expertise and local knowledge."
      content={content}
      heroImage="drone-6.jpg"
      keywords="roofing contractor Everett, roof repair Everett WA, roofer Everett, roof replacement Everett"
    />
  );
};

export default EverettLocation;
