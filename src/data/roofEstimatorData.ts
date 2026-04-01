
import { RoofType, RoofSize, RoofPitch } from '@/types/roof-estimator';

export const roofTypes: RoofType[] = [
  { id: 'asphalt', name: 'Asphalt Shingles', basePrice: 500, description: 'Most common and cost-effective option' },
  { id: 'metal', name: 'Metal Roofing', basePrice: 1100, description: 'Durable with excellent longevity' },
  { id: 'tpo', name: 'TPO Roofing', basePrice: 750, description: 'Thermoplastic membrane ideal for flat roofs' },
];

export const roofSizes: RoofSize[] = [
  { 
    id: 'small', 
    name: 'Small', 
    multiplier: 0.75, 
    sqft: 1500,
    homes: '1,000 - 1,500 sq ft | 1-bedroom homes, cottages, garages'
  },
  { 
    id: 'medium', 
    name: 'Medium', 
    multiplier: 1, 
    sqft: 2000,
    homes: '1,500 - 2,500 sq ft | Standard 3-bedroom ranch, townhomes'
  },
  { 
    id: 'large', 
    name: 'Large', 
    multiplier: 1.5, 
    sqft: 3000,
    homes: '2,500 - 3,500 sq ft | 4-bedroom two-story, McMansions'
  },
  { 
    id: 'xlarge', 
    name: 'Extra Large', 
    multiplier: 2, 
    sqft: 4000,
    homes: '3,500+ sq ft | Luxury estates, multi-unit buildings'
  },
];

export const roofPitches: RoofPitch[] = [
  { id: 'low', name: 'Low Pitch (1-3/12)', multiplier: 0.9, description: 'Nearly flat roof' },
  { id: 'medium', name: 'Medium Pitch (4-7/12)', multiplier: 1, description: 'Standard residential pitch' },
  { id: 'steep', name: 'Steep Pitch (8-12/12)', multiplier: 1.3, description: 'Steep and difficult to work on' },
  { id: 'very_steep', name: 'Very Steep (12+/12)', multiplier: 1.6, description: 'Extremely steep, requiring special equipment' },
];
