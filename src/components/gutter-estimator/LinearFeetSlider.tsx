
import React from 'react';
import { Slider } from '@/components/ui/slider';

interface LinearFeetSliderProps {
  linearFeet: number;
  setLinearFeet: (value: number) => void;
}

const LinearFeetSlider: React.FC<LinearFeetSliderProps> = ({ linearFeet, setLinearFeet }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-stark-red">House Perimeter (Linear Feet)</h3>
        <span className="font-semibold text-stark-red">{linearFeet} ft</span>
      </div>
      <div className="border border-stark-red/20 p-4 rounded-lg">
        <Slider
          value={[linearFeet]}
          min={50}
          max={300}
          step={10}
          onValueChange={(value) => setLinearFeet(value[0])}
          className="py-4"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>50 ft</span>
          <span>300 ft</span>
        </div>
      </div>
    </div>
  );
};

export default LinearFeetSlider;
