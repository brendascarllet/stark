import React from 'react';
import LocationPage from '@/components/locations/LocationPage';

const LynnwoodLocation = () => {
  const content = (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">Roofing Services in Lynnwood, WA</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stark Roofing & Renovation is based right here in Lynnwood! Our office and operations hub are located at 626 199th PL SW, Lynnwood. As local Lynnwood roofers, we're proud to serve our community and surrounding areas with top-tier roofing and renovation services.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Lynnwood Roofing Services</h3>
        <p className="text-gray-700 mb-4">
          From our Lynnwood headquarters, we serve:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Residential Roof Replacement</strong> - GAF premium shingles for lasting protection</li>
          <li><strong>Emergency Roof Repairs</strong> - Storm damage and leak specialists</li>
          <li><strong>Gutter Services</strong> - Seamless gutter installation and repair</li>
          <li><strong>Commercial Roofing</strong> - TPO, EPDM, and metal roofing</li>
          <li><strong>Siding & Windows</strong> - Complete exterior renovation</li>
          <li><strong>Skylight Installation</strong> - Premium skylights with expert flashing</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Local Lynnwood Advantages</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Same-Day Emergency Response</strong> - Based in Lynnwood means faster service</li>
          <li><strong>GAF Certified</strong> - Factory-trained, quality-assured installers</li>
          <li><strong>Free Roof Inspections</strong> - Expert EagleView drone assessments</li>
          <li><strong>Flexible Financing</strong> - Payment options to fit your budget</li>
          <li><strong>Transparent Estimates</strong> - Honest, competitive pricing</li>
          <li><strong>Community Trust</strong> - 10+ years serving Lynnwood families</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Serving All of Greater Seattle from Lynnwood</h3>
        <p className="text-gray-700 mb-4">
          While based in Lynnwood, we proudly serve Seattle, Bothell, Redmond, Kirkland, Everett, Tacoma, and all of the Greater Seattle area. No job is too big or too small.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-3">Schedule Your Free Estimate Today</h3>
        <p className="text-gray-700 mb-4">
          <strong>Stark Roofing & Renovation</strong><br />
          626 199th PL SW, Lynnwood, WA 98036<br />
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
      description="Local roofing contractors based in Lynnwood with expert service across the Puget Sound."
      content={content}
      heroImage="drone-2.jpg"
      keywords="roofing contractor Lynnwood, roof repair Lynnwood WA, roofer Lynnwood, roof replacement Lynnwood"
    />
  );
};

export default LynnwoodLocation;
