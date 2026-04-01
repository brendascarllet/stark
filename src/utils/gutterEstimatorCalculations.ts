
interface EstimateRates {
  low: number;
  high: number;
}

interface BaseRates {
  aluminum: {
    '5inch': EstimateRates;
    '6inch': EstimateRates;
  };
}

interface CalculationParams {
  linearFeet: number;
  gutterSize: string;
  includeDownspouts: boolean;
  includeLeafProtection: boolean;
  includeRemoval: boolean;
}

export const calculateGutterEstimate = ({
  linearFeet,
  gutterSize,
  includeDownspouts,
  includeLeafProtection,
  includeRemoval
}: CalculationParams): { lowEstimate: number; highEstimate: number } => {
  // Base rates per linear foot
  const baseRates: BaseRates = {
    aluminum: {
      '5inch': { low: 7, high: 10 },
      '6inch': { low: 9, high: 12 }
    }
  };

  // Additional costs
  const downspoutCost = { low: 10, high: 15 }; // per downspout
  const leafProtectionCost = { low: 4, high: 6 }; // per linear foot
  const removalCost = { low: 1, high: 2.5 }; // per linear foot

  // Get base rate for selected gutters size
  const baseRate = baseRates.aluminum[gutterSize as keyof typeof baseRates.aluminum];
  
  // Start with base calculation
  let lowEstimate = baseRate.low * linearFeet;
  let highEstimate = baseRate.high * linearFeet;
  
  // Add downspouts (approximately 1 per 40 linear feet)
  if (includeDownspouts) {
    const downspoutCount = Math.ceil(linearFeet / 40);
    lowEstimate += downspoutCount * downspoutCost.low;
    highEstimate += downspoutCount * downspoutCost.high;
  }
  
  // Add leaf protection
  if (includeLeafProtection) {
    lowEstimate += linearFeet * leafProtectionCost.low;
    highEstimate += linearFeet * leafProtectionCost.high;
  }
  
  // Add removal cost
  if (includeRemoval) {
    lowEstimate += linearFeet * removalCost.low;
    highEstimate += linearFeet * removalCost.high;
  }
  
  // Round to nearest hundred
  lowEstimate = Math.ceil(lowEstimate / 100) * 100;
  highEstimate = Math.ceil(highEstimate / 100) * 100;
  
  return { lowEstimate, highEstimate };
};
