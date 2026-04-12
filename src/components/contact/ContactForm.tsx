import React from 'react';
import QuickQuoteForm from '@/components/shared/QuickQuoteForm';

/**
 * Contact page form. Renders the inner QuickQuoteForm directly — the parent
 * ContactFormSection already provides the heading, container, and card styling.
 */
const ContactForm = () => {
  return <QuickQuoteForm />;
};

export default ContactForm;
