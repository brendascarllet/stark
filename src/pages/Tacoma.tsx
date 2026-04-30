import React from 'react';
import LocationPage from '@/components/locations/LocationPage';

const TacomaLocation = () => {
  const content = (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Roofing Services in Tacoma, WA</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stark Roofing & Renovation serves Tacoma and Pierce County with expert roofing, gutter, siding, and renovation services. With our GAF certification, we deliver the highest quality roofing solutions backed by comprehensive warranties.
        </p>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Tacoma Roofing Services</h3>
        <p className="text-gray-700 mb-4">
          Full-service roofing for Tacoma homes and businesses:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
          <li><strong>Residential Roof Replacement</strong> - GAF premium shingles with pro installation</li>
          <li><strong>Roof Repair & Maintenance</strong> - Leak fixes and weather damage repair</li>
          <li><strong>Gutter Replacement</strong> - Seamless gutters and gutter protection</li>
          <li><strong>Commercial Roofing</strong> - TPO and flat roofing for businesses</li>
          <li><strong>Siding Installation</strong> - Premium siding materials and installation</li>
          <li><strong>Window Replacement</strong> - Energy-efficient replacement windows</li>
        </ul>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Why Tacoma Trusts Stark Roofing</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
          <li><strong>GAF Certified</strong> - Premium materials and quality craftsmanship</li>
          <li><strong>Free Professional Inspection</strong> - Detailed drone assessment</li>
          <li><strong>Competitive Pricing</strong> - Transparent, fair estimates</li>
          <li><strong>Financing Available</strong> - Flexible payment options</li>
          <li><strong>Local Service</strong> - Comfortable working in South Puget Sound</li>
          <li><strong>Warranty Protection</strong> - Complete coverage on all work</li>
        </ul>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Tacoma Weather & Roof Durability</h3>
        <p className="text-gray-700 mb-4">
          Tacoma's southern Puget Sound location experiences significant rainfall and wind. Our team specializes in installing roofs engineered to handle this climate. With proper maintenance and professional installation, your Tacoma roof will provide lasting protection.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Free Tacoma Roof Estimate</h3>
        <p className="text-gray-700 mb-4">
          Call Stark Roofing today at <strong>206-739-8232</strong> for your complimentary roof inspection and estimate. We're ready to serve Tacoma and Pierce County.
        </p>
      </div>
    </div>
  );

  return (
    <LocationPage
      city="Tacoma"
      state="WA"
      region="Puget Sound"
      description="Expert roofing contractors serving Tacoma and Pierce County with GAF-certified quality."
      content={content}
      heroImage="drone-7.jpg"
      keywords="roofing contractor Tacoma, roof repair Tacoma WA, roofer Tacoma, roof replacement Tacoma"
    />
  );
};

export default TacomaLocation;
