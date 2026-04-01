import React from 'react';
import { ArrowRight, FileText, Printer } from 'lucide-react';
import { toast } from 'sonner';
import { printEstimate, downloadEstimatePDF } from './pdfUtils';
import { getAdditionalDetails } from './calculatorUtils';
interface ResultsPanelProps {
  totalCost: number;
  materialCost: number;
  laborCost: number;
  materialType: string;
  complexity: string;
  roofArea: number;
}
const ResultsPanel: React.FC<ResultsPanelProps> = ({
  totalCost,
  materialCost,
  laborCost,
  materialType,
  complexity,
  roofArea
}) => {
  const additionalDetails = getAdditionalDetails(materialType, complexity);
  const handleRequestEstimate = () => {
    toast.success("Estimate request submitted!", {
      description: "Our team will contact you with a detailed quote soon."
    });
  };
  const handlePrintEstimate = () => {
    const details = {
      totalCost,
      materialCost,
      laborCost,
      materialType,
      complexity,
      roofArea,
      additionalDetails,
      date: new Date().toLocaleDateString()
    };
    printEstimate(details);
  };
  const handleDownloadPDF = () => {
    const details = {
      totalCost,
      materialCost,
      laborCost,
      materialType,
      complexity,
      roofArea,
      additionalDetails,
      date: new Date().toLocaleDateString()
    };
    downloadEstimatePDF(details);
  };
  return <div className="text-white p-6 md:p-8 rounded-xl shadow-md bg-cyan-950 lg:col-span-1 transition-all duration-500">
      <h3 className="text-2xl font-bold text-center mb-4">Total Roof Repair Cost</h3>
      <div className="text-center">
        <p className="text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-500 animate-scale-up-down">${totalCost.toLocaleString()}</p>
        <p className="text-sm text-gray-300 mb-6">Estimated cost for roof repair</p>
      </div>
      
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center transition-all duration-300">
          <span>Material Cost</span>
          <span className="font-medium animate-fade-in">${materialCost.toLocaleString()}</span>
        </div>
        <p className="text-xs text-gray-300">Cost of selected materials</p>
        
        <div className="flex justify-between items-center transition-all duration-300">
          <span>Labor Cost</span>
          <span className="font-medium animate-fade-in">${laborCost.toLocaleString()}</span>
        </div>
        <p className="text-xs text-gray-300">Estimated labor cost</p>
        
        <div className="border-t border-white/20 pt-4 mt-4 stagger-fade-in">
          <h4 className="font-semibold mb-2">Repair Includes:</h4>
          <ul className="text-sm text-gray-300 space-y-1 list-disc pl-4">
            {additionalDetails.map((detail, index) => <li key={index} className="animate-reveal-from-bottom">{detail}</li>)}
          </ul>
        </div>
      </div>
      
      <div className="flex gap-2 mb-4">
        
        
      </div>
      
      <div className="pt-4 border-t border-white/20">
        <h4 className="text-xl font-bold mb-3">Get Your Roof Repaired Now</h4>
        <p className="text-sm mb-4">
          Contact us today to schedule a free consultation and receive a detailed estimate tailored to your needs.
        </p>
        <button onClick={handleRequestEstimate} className="w-full bg-stark-red hover:bg-stark-redHover text-white font-bold py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors btn-animated animate-pulse-glow">
          Request Free Estimate
          <ArrowRight size={18} />
        </button>
      </div>
    </div>;
};
export default ResultsPanel;