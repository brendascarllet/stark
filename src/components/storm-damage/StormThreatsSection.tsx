
import React from 'react';
import { Wind, TreePine, Droplets, CloudRain, Calendar } from 'lucide-react';
import StormThreatCard from './StormThreatCard';

const StormThreatsSection = () => {
  const threats = [
    {
      title: "Falling Trees & Limbs",
      quote: "One windstorm. One Douglas fir. One destroyed roof.",
      Icon: TreePine,
      signs: "Punctured decking, crushed ridge, broken shingles around the impact.",
      risk: "Open hole = soaked attic in hours. Tarp it the same day.",
      delay: 100
    },
    {
      title: "Wind Damage",
      quote: "60+ MPH gusts peel shingles like wallpaper.",
      Icon: Wind,
      signs: "Missing shingles, lifted edges, zippered seams, bent flashing.",
      risk: "Exposed underlayment → leaks within 48 hours of the next rain.",
      delay: 200
    },
    {
      title: "Atmospheric River Rain",
      quote: "3 inches in 24 hours finds every weak spot.",
      Icon: CloudRain,
      signs: "Ceiling stains, dripping vents, overflowing gutters, soggy insulation.",
      risk: "What was a slow drip becomes a $15K mold + rot job.",
      delay: 300
    },
    {
      title: "Backed-Up Drainage",
      quote: "Clogged gutters in November = ice dams in December.",
      Icon: Droplets,
      signs: "Water spilling over gutter edges, stains down siding, dampness near eaves.",
      risk: "Water gets pushed UP under the shingles — inside your wall.",
      delay: 400
    },
    {
      title: "Granule Loss",
      quote: "Bald shingles = sunburn for your roof.",
      Icon: Calendar,
      signs: "Grit in gutters, shiny asphalt patches visible from the ground.",
      risk: "UV damage cuts shingle life in half — even without a storm.",
      delay: 500
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">What Actually Wrecks Roofs in Western Washington</h2>
        <p className="section-subtitle text-center">
          Forget hail — our real enemies are falling trees, atmospheric river rain, and 60+ MPH gusts off the Sound. Know the warning signs before water finds your living room.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {threats.map((threat, index) => (
            <StormThreatCard
              key={index}
              title={threat.title}
              quote={threat.quote}
              Icon={threat.Icon}
              signs={threat.signs}
              risk={threat.risk}
              delay={threat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StormThreatsSection;
