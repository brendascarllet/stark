import React from 'react';
import QuickQuoteForm from '@/components/shared/QuickQuoteForm';

/**
 * Contact page form. Renders the inner QuickQuoteForm directly (no extra
 * section wrapper) because the parent ContactFormSection already provides
 * the heading, container, and styling.
 */
const ContactForm = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
      <QuickQuoteForm />
    </div>
  );
};

export default ContactForm;
