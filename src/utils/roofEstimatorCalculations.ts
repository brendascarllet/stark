
import { RoofType, RoofSize, RoofPitch } from '../types/roof-estimator';

export interface CalculateRoofEstimateProps {
  roofType: string;
  roofSize: string;
  roofPitch: string;
  roofLayers: number;
  chimneyCount: number;
  skylightCount: number;
  roofTypes: RoofType[];
  roofSizes: RoofSize[];
  roofPitches: RoofPitch[];
}

export const calculateRoofEstimate = ({
  roofType,
  roofSize,
  roofPitch,
  roofLayers,
  chimneyCount,
  skylightCount,
  roofTypes,
  roofSizes,
  roofPitches
}: CalculateRoofEstimateProps): number => {
  const selectedType = roofTypes.find(type => type.id === roofType);
  const selectedSize = roofSizes.find(s => s.id === roofSize);
  const selectedPitch = roofPitches.find(p => p.id === roofPitch);
  
  if (!selectedType || !selectedSize || !selectedPitch) return 0;
  
  // Base calculation = (base price per square foot × roof area × pitch multiplier)
  let total = selectedType.basePrice * selectedSize.sqft / 100 * selectedPitch.multiplier;
  
  // Add additional cost for pitches greater than 8/12
  // Get the pitch value from the name (e.g., "Steep Pitch (8-12/12)" -> 8)
  const pitchValue = parseInt(selectedPitch.name.match(/\((\d+)/)?.[1] || '0');
  if (pitchValue >= 8) {
    // Add $10 per square foot for steep pitches
    total += (10 * selectedSize.sqft / 100);
  }
  
  // Add $10 per square foot for each additional layer beyond the first
  if (roofLayers > 1) {
    total += (10 * selectedSize.sqft / 100 * (roofLayers - 1));
  }
  
  // Additional 15% removal cost for each additional layer to remove
  total += total * 0.15 * (roofLayers - 1);
  
  // Additional cost for chimney flashing - $250 each
  if (chimneyCount > 0) {
    total += 250 * chimneyCount;
  }
  
  // Additional cost for skylights - average $325 each (range is $250-$400)
  if (skylightCount > 0) {
    total += 325 * skylightCount;
  }
  
  // Add 10% for overhead and profit
  total = total * 1.1;
  
  return Math.round(total);
};
