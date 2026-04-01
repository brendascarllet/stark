
// Calculator utility functions for the roof repair calculator

// Material cost rates (per sq ft)
export const materialRates = {
  asphalt: 2.0,
  metal: 4.5,
  wood: 3.5
};

// Complexity multipliers
export const complexityMultipliers = {
  simple: {
    factor: 1,
    description: 'Simple (standard pitch, easy access)'
  },
  moderate: {
    factor: 1.3,
    description: 'Moderate (steeper pitch or limited access)'
  },
  complex: {
    factor: 1.6,
    description: 'Complex (very steep, multiple levels, difficult access)'
  }
};

// Get additional repair details based on complexity and material
export const getAdditionalDetails = (
  materialType: string,
  complexity: string
): string[] => {
  let details = [];

  // Material-specific details
  if (materialType === 'asphalt') {
    details.push('Includes standard shingle replacement');
    details.push('Underlayment inspection and repair');
  } else if (materialType === 'metal') {
    details.push('Includes panel or shingle replacement');
    details.push('Fastener inspection and replacement');
  } else if (materialType === 'wood') {
    details.push('Includes shake/shingle replacement');
    details.push('Treatment for weather resistance');
  }

  // Complexity-specific details
  if (complexity === 'simple') {
    details.push('Standard safety equipment');
    details.push('Ground-level debris removal');
  } else if (complexity === 'moderate') {
    details.push('Enhanced safety equipment');
    details.push('Multiple-level debris management');
  } else if (complexity === 'complex') {
    details.push('Specialized safety equipment');
    details.push('Full-service cleanup and disposal');
    details.push('Extended labor requirements');
  }
  
  return details;
};

// Calculate costs based on inputs
export const calculateCosts = (
  roofArea: number,
  materialType: keyof typeof materialRates,
  complexity: keyof typeof complexityMultipliers
): {
  materialCost: number;
  laborCost: number;
  totalCost: number;
} => {
  // Calculate material costs
  const materialRate = materialRates[materialType] || materialRates.asphalt;
  const calculatedMaterialCost = Math.round(roofArea * materialRate);

  // Calculate labor costs
  const baseLabor = roofArea * 5;
  const complexityMultiplier = complexityMultipliers[complexity].factor;
  const calculatedLaborCost = Math.round(baseLabor * complexityMultiplier);

  // Calculate total cost
  const calculatedTotalCost = calculatedMaterialCost + calculatedLaborCost;

  return {
    materialCost: calculatedMaterialCost,
    laborCost: calculatedLaborCost,
    totalCost: calculatedTotalCost
  };
};
