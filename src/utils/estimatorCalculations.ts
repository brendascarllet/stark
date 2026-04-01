
import { CalculateEstimateProps } from '@/types/estimator';

// Base rate per sq ft (includes gutters/skylights)
const baseRates = {
  soft: 0.40,
  pressure: 0.55
};

// Pitch adjustment
const pitchAdjustment = {
  flat: 0,
  medium: 0.10,
  steep: 0.20
};

// Material adjustment
const materialAdjustment = {
  asphalt: 0,
  metal: 0.10,
  shake: 0.15,
  tile: 0.20
};

// Roof type to material mapping
const roofTypeToMaterial = {
  asphalt: 'asphalt',
  metal: 'metal',
  tpo: 'asphalt', // TPO counts as asphalt for pricing
  cedar: 'shake'  // Cedar counts as shake for pricing
};

// Growth level to cleaning method mapping
const growthLevelToMethod = {
  light: 'soft',
  moderate: 'soft',
  heavy: 'pressure',
  severe: 'pressure'
};

export const calculateEstimate = ({
  roofSize,
  growthLevel,
  roofType,
  roofPitch,
  houseStories = 1,
  roofSizes,
  growthLevels,
  roofTypes,
  roofPitches
}: CalculateEstimateProps): number => {
  const selectedSize = roofSizes.find(s => s.id === roofSize);
  const selectedGrowth = growthLevels.find(g => g.id === growthLevel);
  const selectedType = roofTypes.find(t => t.id === roofType);
  const selectedPitch = roofPitches.find(p => p.id === roofPitch);
  
  if (!selectedSize || !selectedGrowth || !selectedType || !selectedPitch) return 0;
  
  // Determine cleaning method based on growth level
  const cleaningMethod = growthLevelToMethod[growthLevel as keyof typeof growthLevelToMethod] || 'soft';
  
  // Determine roof material category for pricing
  const material = roofTypeToMaterial[roofType as keyof typeof roofTypeToMaterial] || 'asphalt';
  
  // Calculate base price
  const baseRate = baseRates[cleaningMethod];
  const baseCost = selectedSize.sqft * baseRate;
  
  // Apply pitch multiplier
  const pitchMultiplier = selectedPitch.multiplier;
  const adjustedForPitch = baseCost * pitchMultiplier;
  
  // Apply material adjustment
  const materialAdj = baseCost * materialAdjustment[material as keyof typeof materialAdjustment];
  
  // Calculate total (no additional services as they're now free)
  let total = adjustedForPitch + materialAdj;
  
  // Round to the nearest integer
  return Math.round(total);
};
