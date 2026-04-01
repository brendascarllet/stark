
// Types for the cleaning estimator
export interface RoofSize {
  id: string;
  name: string;
  multiplier: number;
  sqft: number;
}

export interface GrowthLevel {
  id: string;
  name: string;
  multiplier: number;
  description: string;
}

export interface RoofType {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

export interface RoofPitch {
  id: string;
  name: string;
  multiplier: number;
  description: string;
}

export interface EstimatorFormProps {
  roofSize: string;
  setRoofSize: (size: string) => void;
  growthLevel: string;
  setGrowthLevel: (level: string) => void;
  roofType: string;
  setRoofType: (type: string) => void;
  roofPitch: string;
  setRoofPitch: (pitch: string) => void;
  houseStories: number;
  setHouseStories: (stories: number) => void;
  handleCalculate: () => void;
  roofSizes: RoofSize[];
  growthLevels: GrowthLevel[];
  roofTypes: RoofType[];
  roofPitches: RoofPitch[];
}

export interface EstimatorResultProps {
  estimate: number | null;
  resetForm: () => void;
}

export interface CalculateEstimateProps {
  roofSize: string;
  growthLevel: string;
  roofType: string;
  roofPitch: string;
  hasGutterCleaning?: boolean;
  hasMossPreventionTreatment?: boolean;
  houseStories?: number;
  roofSizes: RoofSize[];
  growthLevels: GrowthLevel[];
  roofTypes: RoofType[];
  roofPitches: RoofPitch[];
}

export interface SelectableOptionProps<T> {
  option: T;
  selectedId: string;
  onSelect: (id: string) => void;
}
