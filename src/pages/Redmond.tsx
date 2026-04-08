import React from 'react';
import LocationPage from '@/components/locations/LocationPage';

const RedmondLocation = () => {
  const content = (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">Roofing Services in Redmond, WA</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stark Roofing & Renovation is your trusted source for professional roofing services in Redmond. We proudly serve Redmond homeowners and businesses with GAF-certified roofing, gutter, siding, and renovation services.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Redmond Roofing Services</h3>
        <p className="text-gray-700 mb-4">
          Our comprehensive roofing services include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Roof Replacement</strong> - Premium GAF shingles with expert installation</li>
          <li><strong>Roof & Leak Repair</strong> - Fast emergency response for damage</li>
          <li><strong>Gutter Services</strong> - Seamless gutters, repair, and cleaning</li>
          <li><strong>Commercial Roofing</strong> - TPO and flat roof solutions</li>
          <li><strong>Siding & Exterior</strong> - Complete home exterior renovation</li>
          <li><strong>Skylights</strong> - Professional installation with warranty</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Redmond Roofing Excellence</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>GAF Certified</strong> - Premium materials and quality assurance</li>
          <li><strong>Expert Inspections</strong> - Drone-assisted roof assessments</li>
          <li><strong>Competitive Pricing</strong> - Transparent, honest estimates</li>
          <li><strong>Flexible Financing</strong> - Payment options for every budget</li>
          <li><strong>Local Expertise</strong> - 30+ years of roofing experience and 2,000+ completed roofs across the Puget Sound</li>
          <li><strong>Quality Guarantee</strong> - Comprehensive warranty coverage</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Puget Sound Weather Protection</h3>
        <p className="text-gray-700 mb-4">
          Redmond's location in the Puget Sound region requires roofing systems built to withstand rain, wind, and occasional storms. Our GAF-certified installers have decades of combined experience protecting Redmond homes and businesses from the elements.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-3">Schedule Your Free Redmond Roof Estimate</h3>
        <p className="text-gray-700 mb-4">
          Call <strong>206-739-8232</strong> today or fill out the form above for your complimentary roof inspection and estimate.
        </p>
      </div>
    </div>
  );

  return (
    <LocationPage
      city="Redmond"
      state="WA"
      region="Greater Seattle"
      description="Professional roofing contractors in Redmond serving the Puget Sound with quality, GAF-certified services."
      content={content}
      heroImage="drone-4.jpg"
      keywords="roofing contractor Redmond, roof repair Redmond WA, roofer Redmond, roof replacement Redmond"
    />
  );
};

export default RedmondLocation;
