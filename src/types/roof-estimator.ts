
export interface RoofType {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

export interface RoofSize {
  id: string;
  name: string;
  multiplier: number;
  sqft: number;
  homes: string;
}

export interface RoofPitch {
  id: string;
  name: string;
  multiplier: number;
  description: string;
}
