import React from 'react';
import QuickQuoteSection from '@/components/shared/QuickQuoteSection';

/**
 * Roof Repair page lead-capture section.
 * Pre-selects "Roof Repair" so visitors skip step 1.
 */
const HorizontalContactForm = () => {
  return (
    <QuickQuoteSection
      id="schedule-form"
      title="Book Your Roof Repair"
      subtitle="Leak, missing shingles, or storm damage? Pick a time — we'll be out fast."
      defaultService="roof-repair"
    />
  );
};

export default HorizontalContactForm;
