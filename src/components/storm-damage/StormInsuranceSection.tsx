
import React from 'react';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';

const StormInsuranceSection = () => {
  return (
    <section className="section-padding bg-navy/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Storm Damage Insurance Claims</h2>
        <p className="section-subtitle text-center">
          We're experts at navigating insurance claims for storm damage repair
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white rounded-xl p-8 shadow-md text-center md:text-left">
            <div className="w-16 h-16 bg-stark-red/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
              <FileText className="text-stark-red" size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-navy mb-4">Insurance Claims Process</h3>
            <ul className="space-y-4 text-left inline-block mx-auto md:mx-0">
              <li className="flex items-start">
                <CheckCircle className="text-stark-red mt-1 mr-2 flex-shrink-0" size={18} />
                <span>Free inspection and documentation of all storm damage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-stark-red mt-1 mr-2 flex-shrink-0" size={18} />
                <span>We help you file your claim with detailed evidence</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-stark-red mt-1 mr-2 flex-shrink-0" size={18} />
                <span>Direct communication with insurance adjusters</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-stark-red mt-1 mr-2 flex-shrink-0" size={18} />
                <span>Review of insurance scope of work for accuracy</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-stark-red mt-1 mr-2 flex-shrink-0" size={18} />
                <span>Supplements for overlooked damage when needed</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md text-center md:text-left">
            <div className="w-16 h-16 bg-stark-red/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
              <AlertCircle className="text-stark-red" size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-navy mb-4">Important Deadlines</h3>
            <p className="text-charcoal/80 mb-6">
              Most insurance policies require storm damage claims to be filed within a specific timeframe after the damage occurs. Missing these deadlines can result in denied claims.
            </p>
            <div className="bg-navy/5 p-6 rounded-lg">
              <h4 className="font-bold text-navy mb-3">Typical Insurance Deadlines:</h4>
              <ul className="space-y-3 text-left">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-stark-red rounded-full mr-2"></span>
                  <span><strong>60-180 days:</strong> To file initial claim (varies by provider)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-stark-red rounded-full mr-2"></span>
                  <span><strong>1 year:</strong> To complete repairs after claim approval</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-stark-red rounded-full mr-2"></span>
                  <span><strong>2 years:</strong> Statute of limitations for disputing claims</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 mb-6 text-center">
          <a href="#assessment" className="btn-primary inline-block">
            Get Help With Your Insurance Claim →
          </a>
        </div>
      </div>
    </section>
  );
};

export default StormInsuranceSection;
