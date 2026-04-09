import React from 'react';
import QuickQuoteSection from '@/components/shared/QuickQuoteSection';

/**
 * Generic services contact form.
 * Used by Index, Services, CommercialRoofing, SidingInstallation pages.
 * Now wraps the 4-step QuickQuoteForm so visitors actually book a time.
 */
const ContactForm = () => {
  return (
    <QuickQuoteSection
      title="Get Your Free Quote"
      subtitle="Pick a service and a time — we'll confirm by text."
      background="white"
      padding="compact"
    />
  );
};

export default ContactForm;
