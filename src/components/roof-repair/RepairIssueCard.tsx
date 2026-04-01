
import React from 'react';

interface RepairIssueCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const RepairIssueCard = ({ title, description, imageSrc, imageAlt }: RepairIssueCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md transition-transform hover:translate-y-[-5px]">
      <h3 className="text-xl font-heading font-bold text-navy mb-3">{title}</h3>
      <p className="text-charcoal/80 mb-4">{description}</p>
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className="w-full h-48 object-cover rounded-lg mt-4"
      />
    </div>
  );
};

export default RepairIssueCard;
