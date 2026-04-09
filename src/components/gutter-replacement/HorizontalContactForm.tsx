import React from 'react';
import QuickQuoteSection from '@/components/shared/QuickQuoteSection';

/**
 * Gutter Replacement page lead-capture section.
 * Pre-selects "Gutters / Siding / Windows" so visitors skip step 1.
 */
const HorizontalContactForm = () => {
  return (
    <QuickQuoteSection
      title="Get Your Gutters Quote"
      subtitle="Free measurement & written quote — pick a time below."
      defaultService="gutters-siding"
    />
  );
};

export default HorizontalContactForm;
