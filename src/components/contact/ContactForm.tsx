
import React from 'react';
import BaseContactForm from '@/components/shared/BaseContactForm';
import { z } from 'zod';

// Custom schema for contact page form
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  bestTime: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const ContactForm = () => {
  return (
    <BaseContactForm
      schema={contactFormSchema}
      showZipCode={false}
      showBestTimeToContact={true}
      buttonText="Send Message"
      successMessage="Message sent! We'll be in touch soon."
    />
  );
};

export default ContactForm;
