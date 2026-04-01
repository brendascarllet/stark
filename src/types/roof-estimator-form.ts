
import { RoofType, RoofSize, RoofPitch } from './roof-estimator';

export interface EstimatorFormProps {
  roofType: string;
  setRoofType: (type: string) => void;
  roofSize: string;
  setRoofSize: (size: string) => void;
  roofPitch: string;
  setRoofPitch: (pitch: string) => void;
  roofLayers: number;
  setRoofLayers: (layers: number) => void;
  chimneyCount: number;
  setChimneyCount: (count: number) => void;
  skylightCount: number;
  setSkylightCount: (count: number) => void;
  handleCalculate: () => void;
  roofTypes: RoofType[];
  roofSizes: RoofSize[];
  roofPitches: RoofPitch[];
}

export interface EstimatorResultProps {
  estimate: number | null;
  resetForm: () => void;
}
