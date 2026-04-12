import React from 'react';
import LocationPage from '@/components/locations/LocationPage';

const BellevueLocation = () => {
  const content = (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">Roofing Services in Bellevue, WA</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stark Roofing & Renovation provides expert roofing, gutter, siding, and renovation services for Bellevue homeowners and businesses. With our GAF certification and years of experience on the Eastside, we deliver quality roofing solutions built to protect your home through every season.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Bellevue Roofing Services</h3>
        <p className="text-gray-700 mb-4">
          Full-service roofing and renovation for Bellevue:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Residential Roof Replacement</strong> - GAF premium shingle installation</li>
          <li><strong>Roof Repair</strong> - Emergency leak services and storm damage repair</li>
          <li><strong>Gutter Replacement & Repair</strong> - Seamless gutters for protection</li>
          <li><strong>Siding Installation</strong> - James Hardie and premium materials</li>
          <li><strong>Window Replacement</strong> - Energy-efficient replacement windows</li>
          <li><strong>Commercial Roofing</strong> - TPO and flat roof for businesses</li>
          <li><strong>Skylight Installation</strong> - Velux skylights with expert flashing</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Why Bellevue Homeowners Trust Stark Roofing</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>GAF Certified</strong> - Factory-trained professional installers</li>
          <li><strong>Free Roof Inspections</strong> - Drone-assisted assessments with detailed reports</li>
          <li><strong>Transparent Pricing</strong> - Honest, competitive estimates with no hidden fees</li>
          <li><strong>Flexible Financing</strong> - Payment options for every budget</li>
          <li><strong>25-Year Labor Warranty</strong> - Industry-leading coverage on workmanship</li>
          <li><strong>Local Eastside Expertise</strong> - Based in Sammamish, serving Bellevue daily</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Bellevue Weather & Your Roof</h3>
        <p className="text-gray-700 mb-4">
          Bellevue's Eastside location brings heavy rainfall, occasional windstorms, and moss growth from surrounding tree cover. Our team specializes in installing and maintaining roofs that handle the Puget Sound climate — from waterproof underlayment to proper ventilation systems that prevent moisture damage year-round.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-3">Free Bellevue Roof Estimate</h3>
        <p className="text-gray-700 mb-4">
          Call Stark Roofing at <strong>206-739-8232</strong> for your complimentary roof inspection and estimate. We serve Bellevue, Sammamish, Redmond, Kirkland, and all of the Eastside.
        </p>
      </div>
    </div>
  );

  return (
    <LocationPage
      city="Bellevue"
      state="WA"
      region="Greater Seattle"
      description="Expert roofing contractors serving Bellevue and the Eastside with GAF-certified quality and 25-year warranties."
      content={content}
      heroImage="/hero-custom-3.webp"
      keywords="roofing contractor Bellevue, roof repair Bellevue WA, roofer Bellevue, roof replacement Bellevue, Bellevue roofing company"
    />
  );
};

export default BellevueLocation;
