import React from 'react';
import LocationPage from '@/components/locations/LocationPage';

const IssaquahLocation = () => {
  const content = (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">Roofing Services in Issaquah, WA</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stark Roofing & Renovation is a trusted roofing contractor serving Issaquah and the Issaquah Highlands. Based nearby in Sammamish, we provide fast response times and local expertise for all your roofing, gutter, siding, and renovation needs.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Issaquah Roofing Services</h3>
        <p className="text-gray-700 mb-4">
          Complete roofing and exterior services for Issaquah homeowners:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Residential Roof Replacement</strong> - GAF premium shingle installation</li>
          <li><strong>Roof Repair & Leak Fix</strong> - Emergency and scheduled repair services</li>
          <li><strong>Gutter Replacement & Repair</strong> - Seamless gutters and gutter guards</li>
          <li><strong>Siding Installation</strong> - James Hardie and premium materials</li>
          <li><strong>Window Replacement</strong> - Energy-efficient replacement windows</li>
          <li><strong>Roof Cleaning</strong> - Moss and algae removal to extend roof life</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Why Issaquah Homeowners Choose Stark Roofing</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Based Next Door</strong> - Our Sammamish HQ is minutes from Issaquah</li>
          <li><strong>GAF Certified</strong> - Factory-trained, quality-assured installers</li>
          <li><strong>Free Roof Inspections</strong> - Drone-assisted assessments with full reports</li>
          <li><strong>Competitive Pricing</strong> - Transparent estimates, no surprises</li>
          <li><strong>Flexible Financing</strong> - Payment plans for every budget</li>
          <li><strong>25-Year Labor Warranty</strong> - Complete protection on workmanship</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Issaquah's Unique Roofing Challenges</h3>
        <p className="text-gray-700 mb-4">
          Issaquah sits at the foothills of the Cascades, bringing heavier rainfall and more tree coverage than other Eastside cities. This means faster moss growth, more debris buildup in gutters, and greater exposure to wind during winter storms. Our team understands these local challenges and installs roofing systems designed to handle them.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-3">Free Issaquah Roof Estimate</h3>
        <p className="text-gray-700 mb-4">
          Call Stark Roofing at <strong>206-739-8232</strong> for your complimentary roof inspection and estimate. We serve Issaquah, Sammamish, Bellevue, and all of the Eastside.
        </p>
      </div>
    </div>
  );

  return (
    <LocationPage
      city="Issaquah"
      state="WA"
      region="Greater Seattle"
      description="Local roofing contractor serving Issaquah from our Sammamish headquarters. GAF certified, fast response."
      content={content}
      heroImage="/hero-custom-issaquah.webp"
      keywords="roofing contractor Issaquah, roof repair Issaquah WA, roofer Issaquah, roof replacement Issaquah, Issaquah roofing company"
    />
  );
};

export default IssaquahLocation;
