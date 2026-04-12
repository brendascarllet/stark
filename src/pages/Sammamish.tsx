import React from 'react';
import LocationPage from '@/components/locations/LocationPage';

const SammamishLocation = () => {
  const content = (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">Roofing Services in Sammamish, WA</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stark Roofing & Renovation is based right here in Sammamish! Our headquarters and operations hub are located at 24243 SE 43rd Ct, Sammamish. As a local Sammamish roofing contractor, we're proud to serve our community and the surrounding Puget Sound region with expert roofing and renovation services.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Sammamish Roofing Services</h3>
        <p className="text-gray-700 mb-4">
          From our Sammamish headquarters, we provide:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Residential Roof Replacement</strong> - GAF premium shingles with expert installation</li>
          <li><strong>Emergency Roof Repairs</strong> - Storm damage and leak specialists</li>
          <li><strong>Gutter Services</strong> - Seamless gutters and gutter replacement</li>
          <li><strong>Commercial Roofing</strong> - TPO, EPDM, and metal roofing solutions</li>
          <li><strong>Siding & Windows</strong> - Complete exterior home renovation</li>
          <li><strong>Skylight Installation</strong> - Premium skylights with professional flashing</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Why Sammamish Homeowners Trust Stark Roofing</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Local Headquarters</strong> - Based right in Sammamish, we know the area</li>
          <li><strong>Same-Day Emergency Response</strong> - Quick service for urgent needs</li>
          <li><strong>GAF Certified</strong> - Factory-trained professional installers</li>
          <li><strong>Free Roof Inspections</strong> - Expert EagleView drone assessments</li>
          <li><strong>Competitive Pricing</strong> - Transparent, honest estimates</li>
          <li><strong>Flexible Financing</strong> - Payment options for every budget</li>
          <li><strong>Warranty Protection</strong> - Complete coverage on all work</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Sammamish Weather & Your Roof</h3>
        <p className="text-gray-700 mb-4">
          Sammamish's East Side location brings specific weather conditions. Rain, wind, and occasional snow demand durable roofing solutions. Our team specializes in installing roofs built to withstand the Puget Sound climate for decades.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Serving Greater Sammamish & Beyond</h3>
        <p className="text-gray-700 mb-4">
          While based in Sammamish, we proudly serve Seattle, Lynnwood, Bothell, Redmond, Kirkland, Everett, Tacoma, and all of Greater Seattle. Our Sammamish location gives us the advantage of fast response times across the region.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-3">Schedule Your Free Sammamish Roof Estimate</h3>
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
      city="Sammamish"
      state="WA"
      region="Greater Seattle"
      description="Local roofing contractors based in Sammamish with expert service across the Puget Sound."
      content={content}
      heroImage="/hero-custom-sammamish.webp"
      keywords="roofing contractor Sammamish, roof repair Sammamish WA, roofer Sammamish, roof replacement Sammamish"
    />
  );
};

export default SammamishLocation;
