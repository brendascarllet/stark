
import React from 'react';
import BaseContactForm from '@/components/shared/BaseContactForm';
import { z } from 'zod';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Custom schema for contact page form
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  street: z.string().min(3, { message: "Please enter your street address" }),
  city: z.string().min(2, { message: "Please enter your city" }),
  zip: z.string().min(5, { message: "Please enter a valid zip code" }),
  bestTime: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const AddressFields = () => (
  <>
    <FormField name="street" render={({ field }) => (
      <FormItem>
        <FormLabel>Street Address</FormLabel>
        <FormControl>
          <Input placeholder="Your street address" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField name="city" render={({ field }) => (
        <FormItem>
          <FormLabel>City</FormLabel>
          <FormControl>
            <Input placeholder="City" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
      <FormField name="zip" render={({ field }) => (
        <FormItem>
          <FormLabel>Zip Code</FormLabel>
          <FormControl>
            <Input placeholder="Zip code" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
    </div>
  </>
);

const ContactForm = () => {
  return (
    <BaseContactForm
      schema={contactFormSchema}
      showZipCode={false}
      showBestTimeToContact={true}
      additionalFields={<AddressFields />}
      buttonText="Send Message"
      successMessage="Message sent! We'll be in touch soon."
    />
  );
};

export default ContactForm;
