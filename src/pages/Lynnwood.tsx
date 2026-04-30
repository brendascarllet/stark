import React from 'react';
import LocationPage from '@/components/locations/LocationPage';

const LynnwoodLocation = () => {
  const content = (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Roofing Services in Lynnwood, WA</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stark Roofing & Renovation proudly serves Lynnwood and the surrounding Snohomish County area from our Sammamish headquarters. Our crews dispatch across the Puget Sound to deliver top-tier roofing, gutter, and renovation services to Lynnwood homeowners and businesses.
        </p>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Lynnwood Roofing Services</h3>
        <p className="text-gray-700 mb-4">
          Roofing services we provide in Lynnwood:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
          <li><strong>Residential Roof Replacement</strong> - GAF premium shingles for lasting protection</li>
          <li><strong>Emergency Roof Repairs</strong> - Storm damage and leak specialists</li>
          <li><strong>Gutter Services</strong> - Seamless gutter installation and repair</li>
          <li><strong>Commercial Roofing</strong> - TPO, EPDM, and metal roofing</li>
          <li><strong>Siding & Windows</strong> - Complete exterior renovation</li>
          <li><strong>Skylight Installation</strong> - Premium skylights with expert flashing</li>
        </ul>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Why Lynnwood Homeowners Choose Stark Roofing</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
          <li><strong>Fast Response to Lynnwood</strong> - Crews dispatched daily across the Puget Sound</li>
          <li><strong>GAF Certified</strong> - Factory-trained, quality-assured installers</li>
          <li><strong>Free Roof Inspections</strong> - Expert EagleView drone assessments</li>
          <li><strong>Flexible Financing</strong> - Payment options to fit your budget</li>
          <li><strong>Transparent Estimates</strong> - Honest, competitive pricing</li>
          <li><strong>Family-Owned Trust</strong> - Reputation built on quality work and customer care</li>
        </ul>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Serving Lynnwood from Our Sammamish Headquarters</h3>
        <p className="text-gray-700 mb-4">
          Based in Sammamish, we proudly serve Lynnwood, Seattle, Bothell, Redmond, Kirkland, Everett, Tacoma, and all of the Greater Seattle area. No job is too big or too small.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Schedule Your Free Estimate Today</h3>
        <p className="text-gray-700 mb-4">
          <strong>Stark Roofing & Renovation</strong><br />
          24243 SE 43rd Ct, Sammamish, WA 98029<br />
          Phone: <strong>206-739-8232</strong><br />
          Email: office@starkroofingrenovation.com
        </p>
      </div>
    </div>
  );

  return (
    <LocationPage
      city="Lynnwood"
      state="WA"
      region="Greater Seattle"
      description="Roofing contractors based in Sammamish, proudly serving Lynnwood and the Puget Sound."
      content={content}
      heroImage="drone-2.webp"
      keywords="roofing contractor Lynnwood, roof repair Lynnwood WA, roofer Lynnwood, roof replacement Lynnwood"
    />
  );
};

export default LynnwoodLocation;
