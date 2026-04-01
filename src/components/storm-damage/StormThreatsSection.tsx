
import React from 'react';
import { Wind, CloudRain, Droplets, AlertCircle, Calendar } from 'lucide-react';
import StormThreatCard from './StormThreatCard';

const StormThreatsSection = () => {
  const threats = [
    {
      title: "Wind Damage",
      quote: "65+ MPH winds? Say goodbye to shingles.",
      Icon: Wind,
      signs: "Missing shingles, zippered seams, bent flashing.",
      risk: "Exposed underlayment → leaks in 48 hours.",
      delay: 100
    },
    {
      title: "Hail Damage",
      quote: "Baseball-sized hail = hidden roof fractures.",
      Icon: CloudRain,
      signs: "Dented vents, cracked shingles, granule loss.",
      risk: "90% of hail damage goes unnoticed until it's too late.",
      delay: 200
    },
    {
      title: "Water Intrusion",
      quote: "One leak = mold in 72 hours.",
      Icon: Droplets,
      signs: "Ceiling stains, soggy attic insulation.",
      risk: "Structural rot ($15K+ repairs if ignored).",
      delay: 300
    },
    {
      title: "Debris Impact",
      quote: "Falling branches = punctured roofs.",
      Icon: AlertCircle,
      signs: "Visible holes, dented gutters.",
      risk: "Compromised roof deck integrity.",
      delay: 400
    },
    {
      title: "Granule Loss",
      quote: "Bald shingles = sunburn for your roof.",
      Icon: Calendar,
      signs: "Grit in gutters, shiny asphalt patches.",
      risk: "UV damage cuts shingle life in half.",
      delay: 500
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Washington's Top 5 Storm Roof Threats</h2>
        <p className="section-subtitle text-center">
          Our climate creates unique dangers for your roof. Know the warning signs before it's too late.
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
