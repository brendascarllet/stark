
import React from 'react';
import { Info } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface GutterSizeSelectorProps {
  gutterSize: string;
  setGutterSize: (value: string) => void;
}

const GutterSizeSelector: React.FC<GutterSizeSelectorProps> = ({ gutterSize, setGutterSize }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-stark-red">Gutter Size</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-stark-red">
                <Info className="h-4 w-4" />
                <span className="sr-only">Info</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="border-stark-red/20">
              <p className="max-w-xs">5-inch gutters are standard for most homes. 6-inch gutters are recommended for larger roofs or areas with heavy rainfall.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <RadioGroup value={gutterSize} onValueChange={setGutterSize} className="flex space-x-4 p-3 border border-stark-red/20 rounded-lg">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="5inch" id="r1" className="text-stark-red border-stark-red/40" />
          <Label htmlFor="r1">5-Inch (Standard)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="6inch" id="r2" className="text-stark-red border-stark-red/40" />
          <Label htmlFor="r2">6-Inch (Oversized)</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default GutterSizeSelector;
