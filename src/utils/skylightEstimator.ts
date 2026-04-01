
export interface SkylightType {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

export interface SkylightSize {
  id: string;
  name: string;
  multiplier: number;
}

export interface InstallationType {
  id: string;
  name: string;
  price: number;
}

export const calculateSkylightEstimate = (
  skylightType: string,
  size: string,
  quantity: number,
  installationType: string,
  flashing: boolean,
  blinds: boolean,
  skylightTypes: SkylightType[],
  skylightSizes: SkylightSize[],
  installationTypes: InstallationType[]
): number => {
  const selectedType = skylightTypes.find(type => type.id === skylightType);
  const selectedSize = skylightSizes.find(s => s.id === size);
  const selectedInstallation = installationTypes.find(i => i.id === installationType);
  
  if (!selectedType || !selectedSize || !selectedInstallation) return 0;
  
  let total = selectedType.basePrice * selectedSize.multiplier * quantity;
  total += selectedInstallation.price * quantity;
  
  if (flashing) total += 150 * quantity;
  if (blinds) total += 300 * quantity;
  
  // Add 10% for overhead and profit
  total = total * 1.1;
  
  return Math.round(total);
};
