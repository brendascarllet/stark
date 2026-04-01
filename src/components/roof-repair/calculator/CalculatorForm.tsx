
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface CalculatorFormProps {
  roofArea: number;
  materialType: string;
  complexity: string;
  onRoofAreaChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMaterialTypeChange: (value: string) => void;
  onComplexityChange: (value: string) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  roofArea,
  materialType,
  complexity,
  onRoofAreaChange,
  onMaterialTypeChange,
  onComplexityChange
}) => {
  return (
    <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-xl shadow-md transition-all duration-300 hover-lift">
      <div className="space-y-8">
        {/* Roof Area */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="roofArea" className="text-lg font-medium">Roof Area (sq ft)</Label>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full transition-all duration-300 animate-fade-in">{roofArea} sq ft</span>
          </div>
          
          <div className="space-y-2">
            <Input 
              id="roofArea" 
              type="number" 
              min="100" 
              max="5000" 
              value={roofArea} 
              onChange={onRoofAreaChange} 
              className="h-12 transition-all duration-300 focus:ring-2 focus:ring-stark-red" 
            />
            <div className="relative pt-1">
              <input 
                type="range" 
                min="100" 
                max="5000" 
                step="10" 
                value={roofArea} 
                onChange={onRoofAreaChange} 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>100 sq ft</span>
                <span>5,000 sq ft</span>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Enter the total area of the roof that needs repair.
            </p>
          </div>
        </div>
        
        {/* Material Type */}
        <div className="space-y-4 transition-all duration-300 animate-reveal-from-bottom">
          <Label htmlFor="materialType" className="text-lg font-medium">Material Type</Label>
          <Select value={materialType} onValueChange={onMaterialTypeChange}>
            <SelectTrigger id="materialType" className="h-12 transition-all hover:border-stark-red">
              <SelectValue placeholder="Select material type" />
            </SelectTrigger>
            <SelectContent className="animate-fade-in">
              <SelectItem value="asphalt">Asphalt Shingles</SelectItem>
              <SelectItem value="metal">Metal Roofing</SelectItem>
              <SelectItem value="wood">Wood Shakes</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-gray-500">
            Select the type of material to be used for the repair.
          </p>
        </div>
        
        {/* Repair Complexity */}
        <div className="space-y-4 transition-all duration-300 animate-reveal-from-bottom" style={{ animationDelay: "100ms" }}>
          <Label className="text-lg font-medium">Repair Complexity</Label>
          <RadioGroup value={complexity} onValueChange={onComplexityChange} className="space-y-3">
            <div className="flex items-center space-x-2 transition-all duration-200 hover:translate-x-1">
              <RadioGroupItem value="simple" id="simple" className="text-stark-red" />
              <Label htmlFor="simple" className="cursor-pointer">Simple</Label>
              <span className="text-xs text-gray-500 ml-2">(standard pitch, easy access)</span>
            </div>
            <div className="flex items-center space-x-2 transition-all duration-200 hover:translate-x-1">
              <RadioGroupItem value="moderate" id="moderate" className="text-stark-red" />
              <Label htmlFor="moderate" className="cursor-pointer">Moderate</Label>
              <span className="text-xs text-gray-500 ml-2">(steeper pitch or limited access)</span>
            </div>
            <div className="flex items-center space-x-2 transition-all duration-200 hover:translate-x-1">
              <RadioGroupItem value="complex" id="complex" className="text-stark-red" />
              <Label htmlFor="complex" className="cursor-pointer">Complex</Label>
              <span className="text-xs text-gray-500 ml-2">(very steep, multiple levels, difficult access)</span>
            </div>
          </RadioGroup>
          <p className="text-sm text-gray-500">
            Select the complexity level for the repair job.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;
