import React from 'react';
import LocationPage from '@/components/locations/LocationPage';

const KirklandLocation = () => {
  const content = (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">Roofing Services in Kirkland, WA</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stark Roofing & Renovation specializes in professional roofing and renovation services for Kirkland homeowners and businesses. With our GAF certification, we deliver quality roofing solutions backed by warranty protection.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Kirkland Roofing Solutions</h3>
        <p className="text-gray-700 mb-4">
          Full-service roofing and renovation for Kirkland:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Residential Roof Replacement</strong> - GAF premium shingle installation</li>
          <li><strong>Roof Repair</strong> - Emergency leak services and damage repair</li>
          <li><strong>Gutter Replacement & Repair</strong> - Seamless gutters for protection</li>
          <li><strong>Siding Installation</strong> - James Hardie and premium materials</li>
          <li><strong>Window Replacement</strong> - Energy-efficient replacement windows</li>
          <li><strong>Commercial Roofing</strong> - TPO and flat roof for businesses</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Why Kirkland Property Owners Trust Stark Roofing</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>GAF Certified</strong> - Top-tier materials and installation</li>
          <li><strong>Free Professional Inspection</strong> - Drone assessment with detailed report</li>
          <li><strong>Transparent Estimates</strong> - Fair, competitive pricing</li>
          <li><strong>Financing Available</strong> - Flexible payment plans</li>
          <li><strong>Local Experience</strong> - Serving Kirkland for 10+ years</li>
          <li><strong>Warranty Coverage</strong> - Full protection on workmanship</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Kirkland Waterfront Weather Challenges</h3>
        <p className="text-gray-700 mb-4">
          Kirkland's proximity to Lake Washington means enhanced weather challenges. Our team is experienced in installing and maintaining roofs that withstand the Puget Sound's moisture, wind, and seasonal storms. We ensure your roof is ready for whatever weather comes next.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-3">Free Kirkland Roof Estimate</h3>
        <p className="text-gray-700 mb-4">
          Contact Stark Roofing at <strong>206-739-8232</strong> for your complimentary roof inspection and estimate today.
        </p>
      </div>
    </div>
  );

  return (
    <LocationPage
      city="Kirkland"
      state="WA"
      region="Greater Seattle"
      description="Expert roofing contractors serving Kirkland with GAF-certified quality and local expertise."
      content={content}
      heroImage="drone-5.jpg"
      keywords="roofing contractor Kirkland, roof repair Kirkland WA, roofer Kirkland, roof replacement Kirkland"
    />
  );
};

export default KirklandLocation;
