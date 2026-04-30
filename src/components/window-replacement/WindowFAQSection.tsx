import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import FAQSchema from '@/components/shared/FAQSchema';

/**
 * Window Replacement FAQ.
 * 8 high-intent questions sourced from Andersen's compare pages, Energy Star
 * V7.0 spec, IRC R310 (WA egress code), and the IRS 25C tax credit guidance.
 */
const faqs = [
  {
    question: 'How much do replacement windows cost in Seattle?',
    answer:
      "Per-window installed prices in the Seattle market typically run $650–$1,800 for standard double-hung and casement vinyl units. The brands and series we install — Milgard Style Line, Trinsic, and Tuscany; Ply Gem Builders Series and Pro Series; and Pella 250 Series — span the full range from builder-grade to mid-premium. A whole-home job (15–20 windows) lands around $12,000–$25,000 for quality vinyl. We measure your home and email you a written quote — usually the same day — so you don't have to guess.",
  },
  {
    question: 'Which window brand is best for the Pacific Northwest climate?',
    answer:
      "Milgard is the dominant Pacific Northwest residential window brand — it's manufactured locally and engineered for our marine climate. Their Trinsic series is our pick for premium installs (narrow frame, more glass, U-factor ~0.27). For mid-tier we install Milgard Tuscany and Pella 250 — both Energy Star certified and built for heating-dominated climates like ours. For budget-conscious whole-home replacements we use Ply Gem Builders Series and Milgard Style Line. We bring physical samples to your house and walk every option with you.",
  },
  {
    question: 'What U-factor do I actually need for Seattle (Climate Zone 4C)?',
    answer:
      'Seattle is in the Energy Star "Northern" climate zone (heating-dominated, marine). Standard Energy Star certification in this zone requires U-factor ≤ 0.27. To qualify as Energy Star "Most Efficient" — the tier eligible for the $600 federal tax credit — you need U ≤ 0.22 and SHGC ≥ 0.17. We\'ll spec the right glass package for your home.',
  },
  {
    question: 'Do I qualify for the $600 federal tax credit on Energy Star windows?',
    answer:
      'If you install Energy Star Most Efficient windows (U-factor ≤ 0.22) on your primary residence, the IRS Section 25C credit lets you claim 30% of the cost of qualifying windows up to $600 per year, through 2032. We\'ll tell you upfront which Andersen series and glass packages qualify so you can plan around it. Always confirm with your tax preparer.',
  },
  {
    question: 'My 1960s aluminum windows sweat and drip in winter. Will replacing them fix it?',
    answer:
      "Yes — that's actually one of the most common reasons people call us. Aluminum is a thermal bridge: it conducts cold from the outside straight to the inside surface of the frame, and warm humid Seattle indoor air condenses on it as soon as the surface drops below the dew point. A modern Andersen unit has a thermally-broken frame and a warm-edge spacer that keeps the interior surface above dew point — no more sweating, no more rotted sills.",
  },
  {
    question: 'How long does a whole-home window replacement take?',
    answer:
      "Most full-home replacements (15–25 windows) take 1–3 days on site once your custom Andersen units arrive. Manufacturing lead time from Andersen runs 4–8 weeks depending on series and color. Simple swap-outs (insert installs) are faster than full-frame removals where we have to address rot or re-flash a 1970s T1-11 siding penetration. We give you the actual schedule before we start.",
  },
  {
    question: 'Do my bedroom windows meet Washington State egress code?',
    answer:
      'Per IRC R310 (adopted by WA State), every sleeping room needs at least one emergency escape window with: a net clear opening of 5.7 sq ft (5.0 sq ft on grade-floor units), minimum 24" tall × 20" wide, and the sill no higher than 44" above the finished floor — operable without keys or tools. A lot of older Seattle homes (especially basements and 1950s/60s bedrooms) don\'t comply. We\'ll inspect and tell you which windows need to change. This matters for insurance and resale.',
  },
  {
    question: 'Will I have to repair rot or siding around my old windows?',
    answer:
      "Sometimes, yes — especially on homes with 1970s T1-11 plywood siding or homes where the old windows have been condensing for years. We open every window during the inspection, check the sill and the framing around the rough opening, and quote any rot/flashing repair separately so there are no surprises. If your siding has reached end of life, we'll tell you whether windows-only or windows-plus-siding makes more sense.",
  },
];

const WindowFAQSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <FAQSchema faqs={faqs} />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="section-title">Window Replacement FAQ</h2>
          <p className="section-subtitle">
            Real answers to the questions Seattle homeowners actually ask before
            replacing their windows.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-navy hover:text-stark-red py-5">
                <span className="text-left flex-1">{f.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/80 text-sm md:text-base leading-relaxed pb-5">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default WindowFAQSection;
