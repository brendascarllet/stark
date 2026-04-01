
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactFormSection = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      // Mock submission - would connect to your backend API
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Your request has been submitted!", {
        description: "We'll contact you shortly to schedule your roof cleaning."
      });
      reset();
    } catch (error) {
      toast.error("Failed to submit your request. Please try again.");
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl rounded-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Schedule Your Roof Cleaning</h2>
            <p className="text-center text-gray-600 mb-8">
              Fill out this form and our team will contact you to schedule a convenient time
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="form-input w-full"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{String(errors.name.message)}</p>}
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="form-input w-full"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Invalid email address',
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{String(errors.email.message)}</p>}
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="form-input w-full"
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{String(errors.phone.message)}</p>}
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Address*"
                    className="form-input w-full"
                    {...register('address', { required: 'Address is required' })}
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{String(errors.address.message)}</p>}
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Tell us more about your needs..."
                  rows={4}
                  className="form-input w-full"
                  {...register('message')}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center bg-stark-red hover:bg-stark-redHover text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Schedule Now <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;
