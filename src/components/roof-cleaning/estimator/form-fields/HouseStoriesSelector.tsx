
import React from 'react';
import { Check } from 'lucide-react';

interface HouseStoriesSelectorProps {
  houseStories: number;
  setHouseStories: (stories: number) => void;
}

const HouseStoriesSelector: React.FC<HouseStoriesSelectorProps> = ({
  houseStories,
  setHouseStories
}) => {
  const storyOptions = [
    { value: 1, label: '1 Story' },
    { value: 2, label: '2 Stories' },
    { value: 3, label: '3+ Stories' }
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-navy mb-4">5. Number of Stories</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {storyOptions.map((option) => (
          <div 
            key={option.value}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              houseStories === option.value 
                ? 'border-stark-red ring-2 ring-stark-red/20 bg-stark-red/5' 
                : 'border-gray-200 hover:border-stark-red/50'
            }`}
            onClick={() => setHouseStories(option.value)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold">{option.label}</h4>
              </div>
              {houseStories === option.value && <Check size={18} className="text-stark-red" />}
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Each additional story affects the complexity of the cleaning process due to height and safety requirements.
      </p>
    </div>
  );
};

export default HouseStoriesSelector;
