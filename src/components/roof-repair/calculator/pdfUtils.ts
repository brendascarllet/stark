
import { jsPDF } from "jspdf";
import { toast } from "sonner";

// Interface for estimate details
interface EstimateDetails {
  totalCost: number;
  materialCost: number;
  laborCost: number;
  materialType: string;
  complexity: string;
  roofArea: number;
  additionalDetails: string[];
  date: string;
}

// Format the material type for better readability
const formatMaterialType = (type: string): string => {
  switch (type) {
    case 'asphalt':
      return 'Asphalt Shingles';
    case 'metal':
      return 'Metal Roofing';
    case 'wood':
      return 'Wood Shakes';
    default:
      return type.charAt(0).toUpperCase() + type.slice(1);
  }
};

// Format the complexity level for better readability
const formatComplexity = (complexity: string): string => {
  switch (complexity) {
    case 'simple':
      return 'Simple (standard pitch, easy access)';
    case 'moderate':
      return 'Moderate (steeper pitch or limited access)';
    case 'complex':
      return 'Complex (very steep, multiple levels, difficult access)';
    default:
      return complexity.charAt(0).toUpperCase() + complexity.slice(1);
  }
};

// Generate a printable version of the estimate
export const printEstimate = (details: EstimateDetails): void => {
  try {
    // Open a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      toast.error("Unable to open print window. Please check your popup settings.");
      return;
    }

    // Format the current date
    const today = details.date || new Date().toLocaleDateString();

    // Create HTML content for the print window
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Roof Repair Estimate - ${today}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 2px solid #CC0000;
              padding-bottom: 10px;
            }
            .estimate-info {
              margin-bottom: 20px;
            }
            .cost-box {
              border: 1px solid #ddd;
              padding: 15px;
              margin-bottom: 20px;
              background-color: #f9f9f9;
            }
            .total-cost {
              font-size: 24px;
              font-weight: bold;
              color: #CC0000;
            }
            .detail-item {
              display: flex;
              justify-content: space-between;
              margin-bottom: 5px;
            }
            .included-items {
              margin-top: 20px;
            }
            .included-items ul {
              padding-left: 20px;
            }
            .footer {
              margin-top: 40px;
              font-size: 12px;
              color: #666;
              border-top: 1px solid #ddd;
              padding-top: 10px;
            }
            @media print {
              body {
                padding: 0;
              }
              .no-print {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Roof Repair Estimate</h1>
            <p>Date: ${today}</p>
          </div>
          
          <div class="estimate-info">
            <p><strong>Roof Area:</strong> ${details.roofArea} sq ft</p>
            <p><strong>Material Type:</strong> ${formatMaterialType(details.materialType)}</p>
            <p><strong>Complexity Level:</strong> ${formatComplexity(details.complexity)}</p>
          </div>
          
          <div class="cost-box">
            <h2>Cost Breakdown</h2>
            <div class="detail-item">
              <span>Material Cost:</span>
              <span>$${details.materialCost.toLocaleString()}</span>
            </div>
            <div class="detail-item">
              <span>Labor Cost:</span>
              <span>$${details.laborCost.toLocaleString()}</span>
            </div>
            <div class="detail-item total-cost">
              <span>Total Estimated Cost:</span>
              <span>$${details.totalCost.toLocaleString()}</span>
            </div>
          </div>
          
          <div class="included-items">
            <h3>This Estimate Includes:</h3>
            <ul>
              ${details.additionalDetails.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
          </div>
          
          <div class="footer">
            <p><strong>Note:</strong> This is an estimate only. Actual costs may vary based on site conditions and additional requirements identified during inspection.</p>
            <p>For a detailed assessment, please contact our team at (555) 123-4567.</p>
          </div>
          
          <div class="no-print" style="text-align: center; margin-top: 30px;">
            <button onclick="window.print()">Print this page</button>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    // Slight delay to ensure content is loaded before printing dialog appears
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 300);
    
  } catch (error) {
    console.error('Error generating printable estimate:', error);
    toast.error("Unable to print estimate. Please try again.");
  }
};

// Generate and download a PDF of the estimate
export const downloadEstimatePDF = (details: EstimateDetails): void => {
  try {
    // Create a new PDF document
    const doc = new jsPDF();
    
    // Format the current date
    const today = details.date || new Date().toLocaleDateString();
    
    // Add content to the PDF
    doc.setFontSize(20);
    doc.setTextColor(204, 0, 0); // #CC0000 in RGB
    doc.text("Roof Repair Estimate", 105, 20, { align: "center" });
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Date: ${today}`, 105, 30, { align: "center" });
    
    // Add horizontal line
    doc.setDrawColor(204, 0, 0);
    doc.line(20, 35, 190, 35);
    
    // Estimate details
    doc.setFontSize(12);
    doc.text(`Roof Area: ${details.roofArea} sq ft`, 20, 45);
    doc.text(`Material Type: ${formatMaterialType(details.materialType)}`, 20, 55);
    doc.text(`Complexity Level: ${formatComplexity(details.complexity)}`, 20, 65);
    
    // Cost breakdown
    doc.setFillColor(249, 249, 249);
    doc.rect(20, 75, 170, 50, 'F');
    doc.setDrawColor(221, 221, 221);
    doc.rect(20, 75, 170, 50, 'S');
    
    doc.setFontSize(14);
    doc.text("Cost Breakdown", 20, 85);
    
    doc.setFontSize(12);
    doc.text("Material Cost:", 25, 95);
    doc.text(`$${details.materialCost.toLocaleString()}`, 170, 95, { align: "right" });
    
    doc.text("Labor Cost:", 25, 105);
    doc.text(`$${details.laborCost.toLocaleString()}`, 170, 105, { align: "right" });
    
    doc.setFontSize(14);
    doc.setTextColor(204, 0, 0);
    doc.text("Total Estimated Cost:", 25, 120);
    doc.text(`$${details.totalCost.toLocaleString()}`, 170, 120, { align: "right" });
    
    // Included items
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("This Estimate Includes:", 20, 135);
    
    doc.setFontSize(12);
    details.additionalDetails.forEach((detail, index) => {
      doc.text(`• ${detail}`, 25, 145 + (index * 10));
    });
    
    // Footer note
    const footerY = 145 + (details.additionalDetails.length * 10) + 15;
    doc.setFontSize(10);
    doc.setTextColor(102, 102, 102);
    doc.text("Note: This is an estimate only. Actual costs may vary based on site conditions", 105, footerY, { align: "center" });
    doc.text("and additional requirements identified during inspection.", 105, footerY + 7, { align: "center" });
    doc.text("For a detailed assessment, please contact our team at (555) 123-4567.", 105, footerY + 17, { align: "center" });
    
    // Save the PDF
    doc.save(`Roof_Repair_Estimate_${today.replace(/\//g, '-')}.pdf`);
    
    toast.success("Estimate PDF downloaded successfully.");
    
  } catch (error) {
    console.error('Error generating PDF estimate:', error);
    toast.error("Unable to download PDF. Please try again.");
  }
};
