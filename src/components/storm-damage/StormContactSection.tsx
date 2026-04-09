import React from 'react';
import QuickQuoteSection from '@/components/shared/QuickQuoteSection';

/**
 * Storm-damage page lead-capture section.
 * Pre-selects "Storm Damage / Insurance" so visitors skip step 1.
 * Step 2 will then conditionally show the "have you filed a claim?" follow-up.
 */
const StormContactSection: React.FC = () => {
  return (
    <QuickQuoteSection
      title="Get Your Free Storm Damage Assessment"
      subtitle="We'll inspect, document for your insurance, and handle the claim. Pick a time below."
      defaultService="storm-damage"
      background="white"
    />
  );
};

export default StormContactSection;
