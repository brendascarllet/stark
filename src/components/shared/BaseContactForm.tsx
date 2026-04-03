import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Define the base schema that all contact forms will share
const baseSchema = {
  name: z.string().min(2, {
    message: "Name must be at least 2 characters"
  }),
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number"
  })
};

// Helper to create extended schemas
export const createContactFormSchema = (additionalFields = {}) => {
  return z.object({
    ...baseSchema,
    ...additionalFields
  });
};

// Default schema with common fields
export const defaultContactFormSchema = createContactFormSchema({
  zip: z.string().min(5, {
    message: "Please enter a valid zip code"
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters"
  }).optional()
});
export type BaseContactFormProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  showZipCode?: boolean;
  showMessage?: boolean;
  showBestTimeToContact?: boolean;
  showServiceSelection?: boolean;
  additionalFields?: React.ReactNode;
  onSubmitSuccess?: () => void;
  schema?: z.ZodObject<any>;
  className?: string;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "stark-red";
  successMessage?: string;
};

const BaseContactForm: React.FC<BaseContactFormProps> = ({
  title,
  subtitle,
  buttonText = "Submit",
  showZipCode = true,
  showMessage = true,
  showBestTimeToContact = false,
  showServiceSelection = false,
  additionalFields,
  onSubmitSuccess,
  schema = defaultContactFormSchema,
  className = "",
  buttonVariant = "stark-red",
  successMessage = "Thank you! We'll be in touch soon."
}) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      ...(showZipCode ? {
        zip: ""
      } : {}),
      ...(showMessage ? {
        message: ""
      } : {}),
      ...(showBestTimeToContact ? {
        bestTime: ""
      } : {}),
      ...(showServiceSelection ? {
        service: ""
      } : {})
    }
  });
  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      const { sendLeadEmail } = await import('@/utils/emailjs');
      await sendLeadEmail(values as Record<string, string>);
      toast.success(successMessage);
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("There was a problem submitting your request. Please try again.");
    }
  };
  return <>
      {title && <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">{title}</h2>}
      {subtitle && <p className="text-charcoal/80 mb-6">{subtitle}</p>}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-5 ${className}`}>
          <FormField control={form.control} name="name" render={({
          field
        }) => <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField control={form.control} name="email" render={({
            field
          }) => <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            
            <FormField control={form.control} name="phone" render={({
            field
          }) => <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
          </div>
          
          {showZipCode && <FormField control={form.control} name="zip" render={({
          field
        }) => (
            <FormItem>
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter your zip code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />}
          
          {showServiceSelection && <FormField control={form.control} name="service" render={({
          field
        }) => (
            <FormItem>
              <FormLabel>Service</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="roof-repair">Roof Repair</SelectItem>
                  <SelectItem value="roof-replacement">Roof Replacement</SelectItem>
                  <SelectItem value="gutter-repair">Gutter Repair</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />}
          
          {showBestTimeToContact && <FormField control={form.control} name="bestTime" render={({
          field
        }) => <FormItem>
                  <FormLabel>Best Time to Contact</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    
                    <SelectContent>
                      <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                      <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>} />}
          
          {additionalFields}
          
          {showMessage && <FormField control={form.control} name="message" render={({
          field
        }) => <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about your project or questions..." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />}
          
          <Button type="submit" variant={buttonVariant} size="full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Submitting..." : buttonText}
          </Button>
          
          <p className="text-xs text-gray-500 mt-2 text-center">
            By submitting this form, you agree to be contacted about our services.
          </p>
        </form>
      </Form>
    </>;
};

export default BaseContactForm;
