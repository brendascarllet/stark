
import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().optional(),
  address: z.string().min(5, { message: "Please enter your address" }),
  zipCode: z.string().min(5, { message: "Please enter a valid zip code" }),
});

const ContactForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      address: "",
      zipCode: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { sendLeadEmail } = await import('@/utils/emailjs');
      await sendLeadEmail(values as Record<string, string>);
      toast.success("We've received your information. Our team will contact you shortly!");
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("There was a problem submitting your request. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-navy font-medium">Full Name*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your name" 
                  className="bg-white border-gray-300 focus:border-navy" 
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Email Address*</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white border-gray-300 focus:border-navy" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Phone Number*</FormLabel>
                <FormControl>
                  <Input 
                    type="tel" 
                    placeholder="Your phone number" 
                    className="bg-white border-gray-300 focus:border-navy" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Property Address*</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your address" 
                    className="bg-white border-gray-300 focus:border-navy" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Zip Code*</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your zip code" 
                    className="bg-white border-gray-300 focus:border-navy" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-navy font-medium">Additional Comments</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your project needs..." 
                  className="bg-white border-gray-300 focus:border-navy" 
                  rows={3}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-2">
          <button 
            type="submit" 
            className="btn-primary w-full py-3"
          >
            Schedule My Free Inspection
          </button>
          <p className="text-xs text-gray-500 mt-3 text-center">
            By submitting this form, you are giving consent to be contacted about our services.
          </p>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
