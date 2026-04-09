import React from 'react';
import QuickQuoteSection from '@/components/shared/QuickQuoteSection';

/**
 * Roof Cleaning page lead-capture section.
 * Defaults to Free Inspection (we don't have a dedicated "cleaning" service in the booking form).
 */
const HorizontalContactForm = () => {
  return (
    <QuickQuoteSection
      id="schedule-form"
      title="Schedule Your Roof Cleaning"
      subtitle="Free inspection first — we'll show you exactly what needs cleaning."
      defaultService="inspection"
    />
  );
};

export default HorizontalContactForm;
