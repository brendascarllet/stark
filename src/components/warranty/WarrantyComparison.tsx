
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WarrantyComparison = () => {
  return (
    <section className="py-16 bg-navy/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">How Our Warranty Compares</h2>
        <p className="section-subtitle text-center mb-12">
          See how Stark Roofing's warranty offers superior protection compared to industry standards.
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-4 px-6 bg-gray-50 text-left font-heading text-navy border-b">Warranty Feature</th>
                    <th className="py-4 px-6 bg-gray-50 text-center font-heading text-navy border-b">Standard<br/>Industry Coverage</th>
                    <th className="py-4 px-6 bg-gray-50 text-center font-heading text-navy border-b">Enhanced<br/>Protection</th>
                    <th className="py-4 px-6 bg-stark-red text-center font-heading text-white border-b">Premium<br/>Protection</th>
                    <th className="py-4 px-6 bg-gray-50 text-center font-heading text-navy border-b">Golden<br/>Pledge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 border-b font-medium">Labor Coverage</td>
                    <td className="py-4 px-6 border-b text-center">1-5 Years</td>
                    <td className="py-4 px-6 border-b text-center">25 Years</td>
                    <td className="py-4 px-6 border-b text-center font-bold bg-stark-red/5">25 Years</td>
                    <td className="py-4 px-6 border-b text-center">25+ Years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 border-b font-medium">Material Coverage</td>
                    <td className="py-4 px-6 border-b text-center">Manufacturer's<br/>Standard</td>
                    <td className="py-4 px-6 border-b text-center">Lifetime<br/>(materials only)</td>
                    <td className="py-4 px-6 border-b text-center font-bold bg-stark-red/5">Lifetime<br/>(full system)</td>
                    <td className="py-4 px-6 border-b text-center">Lifetime Plus<br/>(extended)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 border-b font-medium">Transferable</td>
                    <td className="py-4 px-6 border-b text-center">
                      <span className="text-red-500">―</span>
                    </td>
                    <td className="py-4 px-6 border-b text-center">
                      <CheckCircle2 className="mx-auto text-green-500" size={20} />
                    </td>
                    <td className="py-4 px-6 border-b text-center bg-stark-red/5">
                      <CheckCircle2 className="mx-auto text-green-500" size={20} />
                    </td>
                    <td className="py-4 px-6 border-b text-center">
                      <CheckCircle2 className="mx-auto text-green-500" size={20} />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 border-b font-medium">Coverage Proration</td>
                    <td className="py-4 px-6 border-b text-center">After 5-10 years</td>
                    <td className="py-4 px-6 border-b text-center">After 10 years</td>
                    <td className="py-4 px-6 border-b text-center font-bold bg-stark-red/5">No Proration</td>
                    <td className="py-4 px-6 border-b text-center">No Proration</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 border-b font-medium">Covers All Components</td>
                    <td className="py-4 px-6 border-b text-center">
                      <span className="text-red-500">―</span>
                    </td>
                    <td className="py-4 px-6 border-b text-center">Partial</td>
                    <td className="py-4 px-6 border-b text-center bg-stark-red/5">
                      <CheckCircle2 className="mx-auto text-green-500" size={20} />
                    </td>
                    <td className="py-4 px-6 border-b text-center">
                      <CheckCircle2 className="mx-auto text-green-500" size={20} />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 border-b font-medium">Wind Coverage</td>
                    <td className="py-4 px-6 border-b text-center">60-80 MPH</td>
                    <td className="py-4 px-6 border-b text-center">110 MPH</td>
                    <td className="py-4 px-6 border-b text-center bg-stark-red/5">130 MPH</td>
                    <td className="py-4 px-6 border-b text-center">130 MPH</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 border-b font-medium">Algae Protection</td>
                    <td className="py-4 px-6 border-b text-center">Basic</td>
                    <td className="py-4 px-6 border-b text-center">Standard</td>
                    <td className="py-4 px-6 border-b text-center bg-stark-red/5">StainGuard Plus™</td>
                    <td className="py-4 px-6 border-b text-center">StainGuard Plus™<br/>Extended</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">Tear-off Costs Included</td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-red-500">―</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-red-500">―</span>
                    </td>
                    <td className="py-4 px-6 text-center bg-stark-red/5">
                      <CheckCircle2 className="mx-auto text-green-500" size={20} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle2 className="mx-auto text-green-500" size={20} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 text-sm text-charcoal/70 text-center">
            * Please refer to warranty documentation for complete details and terms. This comparison is for informational purposes only.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantyComparison;
