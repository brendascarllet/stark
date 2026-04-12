import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ExternalLink, MapPin, Clock, ShieldCheck } from 'lucide-react';

/**
 * OBee Credit Union partner section.
 *
 * Stark Roofing is an enrolled O Bee Link merchant partner. The official
 * partner ad creatives (300×250, 728×90, 160×600) are stored in /public
 * and used as-is — they include the OBee logo, the partnership tagline
 * "Simple | Easy | Flexible," the NCUA badge, and the APPLY NOW CTA, all
 * pre-approved by OBee for use on partner sites.
 *
 * Verified loan facts (OBee consumer rate sheet, Dec 2025):
 *  - Unsecured Home Improvement Loan APR from 8.25%
 *  - Terms up to 180 months (15 years)
 *  - $0 collateral / no equity required
 *  - Membership open to ALL Washington State residents
 *  - Source: https://www.obee.com/Borrow/Unsecured-Home-Loans/
 */

const OBEE_APPLY_URL = 'https://www.obee.com/Borrow/Unsecured-Home-Loans/';

const OBeePartnerSection = () => {
  return (
    <section
      id="obee-partner"
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e8eef4 100%)' }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* ── Section header ── */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-stark-red/10 text-stark-red mb-4">
              Our Financing Partner
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Powered by O Bee Credit Union
            </h2>
            <p className="text-base md:text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              We finance roofs, gutters, windows, and siding through O Bee Credit Union —
              a Washington State credit union, member-owned since 1955, with branches
              right here in Pierce County. Not a national fintech. Not a high-interest
              "buy now pay later" gimmick. A real local credit union that knows the
              difference between a 30-year roof and a 5-year roof.
            </p>
          </div>

          {/* ── Main partner card: official OBee banner + Stark loan facts ── */}
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden mb-10">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left: Official OBee 300×250 partner banner */}
              <div className="md:col-span-2 p-6 md:p-8 flex flex-col items-center justify-center bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100">
                <a
                  href={OBEE_APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-[1.02]"
                  aria-label="Apply for financing through O Bee Credit Union"
                >
                  <img
                    src="/obee-banner-300x250.png"
                    alt="O Bee Credit Union — Paying for a home improvement project should be Simple, Easy, Flexible. Apply Now."
                    width="300"
                    height="250"
                    className="w-full max-w-[300px] h-auto rounded-lg shadow-md"
                  />
                </a>
                <div className="mt-4 text-center">
                  <div className="text-[11px] uppercase tracking-wide text-charcoal/55 font-bold mb-1">
                    Official Partner
                  </div>
                  <div className="flex items-center justify-center gap-3 text-[10px] text-charcoal/60">
                    <span className="flex items-center gap-1">
                      <MapPin size={10} /> Lacey · Tacoma · WA
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={10} /> NCUA Insured
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Loan facts written by Stark */}
              <div className="md:col-span-3 p-8 md:p-10">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-navy mb-2">
                  Unsecured Home Improvement Loan
                </h3>
                <p className="text-sm text-charcoal/70 mb-5">
                  No equity, no appraisal, no second lien on your house. Apply through
                  Stark, get your decision fast.
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-xs uppercase tracking-wide text-charcoal/60 font-semibold mb-1">
                      Rates from
                    </div>
                    <div className="text-2xl font-extrabold text-navy">
                      8.25<span className="text-base font-bold">%</span>
                    </div>
                    <div className="text-[10px] text-charcoal/55">APR*</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-xs uppercase tracking-wide text-charcoal/60 font-semibold mb-1">
                      Terms up to
                    </div>
                    <div className="text-2xl font-extrabold text-navy">
                      15<span className="text-base font-bold"> yrs</span>
                    </div>
                    <div className="text-[10px] text-charcoal/55">180 months</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-xs uppercase tracking-wide text-charcoal/60 font-semibold mb-1">
                      Collateral
                    </div>
                    <div className="text-2xl font-extrabold text-navy">$0</div>
                    <div className="text-[10px] text-charcoal/55">No equity needed</div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {[
                    'No money down — start your project before the first payment',
                    'No prepayment penalty — pay it off early, save the interest',
                    'Open to all Washington State residents (statewide membership)',
                    'Fast decisions — most applications get answered the same day',
                    'Stark can buy down your rate to lower your monthly payment',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <CheckCircle2
                        className="flex-shrink-0 mt-0.5 text-stark-red"
                        size={18}
                      />
                      <span className="text-sm text-charcoal/85 leading-snug">{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={OBEE_APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-stark-red hover:bg-stark-red/90 shadow-lg hover:shadow-xl transition-all"
                  >
                    Apply at O Bee
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="tel:+12067398232"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-stark-red border-2 border-stark-red hover:bg-stark-red/5 transition-colors"
                  >
                    Talk to Stark First
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── 728×90 leaderboard banner — full-width below the card ── */}
          <a
            href={OBEE_APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-3xl mx-auto mb-10 transition-transform hover:scale-[1.01]"
            aria-label="Apply for OBee Credit Union home improvement financing"
          >
            <img
              src="/obee-banner-728x90.png"
              alt="O Bee Credit Union — Home improvement financing. Simple, easy, flexible. Apply now."
              width="728"
              height="90"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </a>

          {/* ── Three-column proof strip ── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm">
              <Clock size={22} className="mx-auto mb-2 text-stark-red" />
              <div className="text-3xl font-extrabold text-navy">70+</div>
              <div className="text-xs text-charcoal/70 font-medium mt-1">
                Years serving WA homeowners
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm">
              <ShieldCheck size={22} className="mx-auto mb-2 text-stark-red" />
              <div className="text-3xl font-extrabold text-navy">$250K</div>
              <div className="text-xs text-charcoal/70 font-medium mt-1">
                NCUA insured per account
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm">
              <CheckCircle2 size={22} className="mx-auto mb-2 text-stark-red" />
              <div className="text-3xl font-extrabold text-navy">$0</div>
              <div className="text-xs text-charcoal/70 font-medium mt-1">
                Down payment required
              </div>
            </div>
          </motion.div>

          {/* ── Disclaimer ── */}
          <p className="text-[11px] text-charcoal/50 leading-snug mt-6 max-w-3xl mx-auto text-center">
            * APR (Annual Percentage Rate) range as published on the O Bee Credit Union
            consumer rate sheet effective Dec 2025. Rates subject to change and credit
            approval. Membership in O Bee Credit Union required (open to all Washington
            State residents). Stark Roofing &amp; Renovation is a participating O Bee Link
            merchant partner. Loan terms and final APR are determined solely by O Bee
            Credit Union based on your credit profile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OBeePartnerSection;
