import React from 'react';
import RepairIssueCard from './RepairIssueCard';

const CommonIssuesSection = () => {
  const repairIssues = [
    {
      title: "Leaking Roofs",
      description: "We identify and fix the root cause of leaks, preventing water damage to your home's interior and structure.",
      imageSrc: "/lovable-uploads/30573f65-a31e-4f14-ae48-0205642490f6.png",
      imageAlt: "Water damage on ceiling showing bubbling and discoloration"
    },
    {
      title: "Damaged Shingles",
      description: "Replace missing, cracked, or curling shingles to maintain your roof's integrity and appearance.",
      imageSrc: "/lovable-uploads/f5329a02-5ee7-454b-a9ff-02143843517e.png",
      imageAlt: "Damaged roof shingles and flashing near chimney"
    },
    {
      title: "Flashing & Seal Failures",
      description: "Repair damaged flashing around chimneys, vents, and skylights to prevent water infiltration.",
      imageSrc: "/lovable-uploads/2bd40120-145a-48d0-bb60-21bd988b0f8d.png",
      imageAlt: "Rusty roof flashing with visible damage around chimney"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
          Common Roof Repair Issues We Fix
        </h2>
        <p className="text-charcoal/80 mb-12 text-center max-w-3xl mx-auto">
          Our team is equipped to handle all types of roofing problems, from minor leaks to major storm damage
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {repairIssues.map((issue, index) => (
            <RepairIssueCard
              key={index}
              title={issue.title}
              description={issue.description}
              imageSrc={issue.imageSrc}
              imageAlt={issue.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonIssuesSection;
