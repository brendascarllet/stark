
import React from 'react';
import PromotionCard from './promotion/PromotionCard';

const PromotionDetails = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <PromotionCard />
        </div>
      </div>
    </section>
  );
};

export default PromotionDetails;
