import React from 'react';
import QuickQuoteSection from '@/components/shared/QuickQuoteSection';

/**
 * About page lead-capture section.
 * Defaults to Free Inspection — most About-page visitors are still in research mode.
 */
const HorizontalContactForm = () => {
  return (
    <QuickQuoteSection
      title="Meet Us In Person — Free Inspection"
      subtitle="30 minutes, on your roof, no pressure. Pick a time below."
      defaultService="inspection"
    />
  );
};

export default HorizontalContactForm;
