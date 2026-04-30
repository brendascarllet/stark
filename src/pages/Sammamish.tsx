import React from 'react';
import LocationPage from '@/components/locations/LocationPage';

const SammamishLocation = () => {
  const content = (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Roofing Services in Sammamish, WA</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stark Roofing & Renovation is headquartered right here in Sammamish at 24243 SE 43rd Ct. We're not a Seattle company driving out to the Eastside. We live here, and the roofs we replace are on the same streets we drive every day. Sammamish gets more rain than downtown Seattle, more tree cover, and colder winter nights that cause freeze-thaw damage to aging shingles. We built this business around solving those problems.
        </p>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Sammamish Roofing Services</h3>
        <p className="text-gray-700 mb-4">
          From our Sammamish headquarters, we provide:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
          <li><strong>Roof Replacement</strong> - GAF HDZ, Grand Sequoia, and Natural Shadow shingles with full system components and warranty</li>
          <li><strong>Emergency Roof Repair</strong> - Storm damage, active leaks, and wind damage. Same-day response for Sammamish homes</li>
          <li><strong>Gutter Replacement</strong> - Properly sized gutters for Sammamish's heavy rainfall and tree debris</li>
          <li><strong>Skylight Installation</strong> - New skylights and replacement of old, leaking units with proper flashing</li>
          <li><strong>Siding and Windows</strong> - Full exterior renovation: fiber cement siding, vinyl siding, and energy-efficient window replacement</li>
          <li><strong>Roof Cleaning</strong> - Moss and algae treatment to extend the life of your current roof</li>
        </ul>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Why Sammamish Homeowners Trust Stark Roofing</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
          <li><strong>Based in Sammamish</strong> - Our HQ is in your neighborhood. We respond fast because we're already here</li>
          <li><strong>GAF Master Elite Certified</strong> - Top 2% of roofers nationwide. GAF's best warranty: 50-year shingles, 20-year labor</li>
          <li><strong>Free Roof Inspections</strong> - Drone-assisted assessments with photos and a written report</li>
          <li><strong>Transparent Pricing</strong> - Line-item estimates with no hidden fees. You know what you're paying for</li>
          <li><strong>Financing Available</strong> - Payment plans so the roof gets done on your timeline, not your savings account's</li>
        </ul>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Sammamish Plateau Weather and Your Roof</h3>
        <p className="text-gray-700 mb-4">
          The Sammamish Plateau sits at a higher elevation than most Eastside cities, and that changes the math on your roof. Colder overnight temperatures in winter mean more freeze-thaw cycles cracking old shingles and flashing. The dense tree cover on the plateau holds moisture against roofs and accelerates moss growth. And when windstorms come through, the exposed elevation means shingles take a harder hit than they would in lower-lying areas. We install roofing systems that account for all of it: ice and water shield in every valley, proper ventilation to prevent condensation, and shingles rated for 130 mph winds.
        </p>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Sammamish Roofing FAQs</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900">How much does a roof replacement cost in Sammamish?</h4>
            <p className="text-gray-700">Most Sammamish homes run $14,000 to $28,000 depending on roof size, pitch, and condition of the deck. Homes on the plateau tend to be larger with steeper roofs, which increases both material and labor. We give exact numbers in the estimate, broken out by line item.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Does the higher elevation in Sammamish cause ice dam problems?</h4>
            <p className="text-gray-700">It can, especially on north-facing slopes. Ice dams form when heat escapes through the roof, melts snow on top, and the meltwater refreezes at the eaves. We install ice and water shield at the eaves and in the valleys, and we check your attic ventilation to reduce heat loss. Proper ventilation is the best prevention.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">The trees on my property drop debris constantly. Will that void my warranty?</h4>
            <p className="text-gray-700">No, but letting debris sit on the roof long-term can cause damage that isn't covered. We recommend cleaning the roof and gutters twice a year. Zinc strips along the ridge also slow moss regrowth between cleanings. The GAF warranty covers manufacturing defects and our installation workmanship, not deferred maintenance.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Can you do emergency repairs the same day?</h4>
            <p className="text-gray-700">For Sammamish, yes. Our shop is in town, and we carry common repair materials on the truck. If you have an active leak or storm damage, call us at 206-739-8232 and we'll get someone out the same day when conditions allow safe work.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-3">Free Sammamish Roof Estimate</h3>
        <p className="text-gray-700 mb-4">
          <strong>Stark Roofing & Renovation</strong><br />
          24243 SE 43rd Ct, Sammamish, WA 98029<br />
          Call <a href="tel:+12067398232" className="font-bold text-red-600 hover:underline">206-739-8232</a> for a free roof inspection and written estimate.
        </p>
      </div>
    </div>
  );

  return (
    <LocationPage
      city="Sammamish"
      state="WA"
      region="Greater Seattle"
      description="Local roofing contractor headquartered in Sammamish. GAF Master Elite certified with same-day emergency response."
      content={content}
      heroImage="/hero-custom-sammamish.webp"
      keywords="roofing contractor Sammamish, roof repair Sammamish WA, roofer Sammamish, roof replacement Sammamish, Sammamish roofing company"
      metaTitle="Roofing in Sammamish, WA | Stark Roofing & Renovation"
      metaDescription="Your neighbor's roofer. Stark Roofing is headquartered right here in Sammamish. GAF Master Elite, 20-year labor warranty. Free on-site estimates."
    />
  );
};

export default SammamishLocation;
