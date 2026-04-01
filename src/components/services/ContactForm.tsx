import React from 'react';
import BaseContactForm from '@/components/shared/BaseContactForm';
import { z } from 'zod';
import PhotoUpload from './PhotoUpload';
import VideoUpload from './VideoUpload';
import { Clock, ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';
const serviceFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters"
  }),
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number"
  }),
  zip: z.string().min(5, {
    message: "Please enter a valid zip code"
  }),
  service: z.string().min(1, {
    message: "Please select a service"
  }),
  comment: z.string().optional(),
  referSource: z.string().optional()
});
const ContactForm = () => {
  const [photoFile, setPhotoFile] = React.useState<File | null>(null);
  const [videoFile, setVideoFile] = React.useState<File | null>(null);
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] p-8 md:p-10 relative border border-gray-100 hover:shadow-[0_25px_60px_rgba(8,_112,_184,_0.15)] transition-all duration-500">
      <motion.div initial={{
      scale: 0.95
    }} animate={{
      scale: 1
    }} transition={{
      duration: 0.5
    }} className="pt-6">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-stark-red text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">Work with a Pro</div>

        <h3 className="text-3xl font-heading font-bold text-navy text-center mb-3 animate-fade-in">
          Free Consultation & Quote
        </h3>
        
        <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto text-lg">
          Fill out this quick form and we'll contact you promptly about your project needs.
        </p>
        
        <div className="get-started-form border-0 shadow-none p-0 m-0 py-0 px-[26px] mx-[60px] my-[9px]">
          <BaseContactForm schema={serviceFormSchema} showServiceSelection={true} showMessage={false} buttonText="Request My Free Quote" successMessage="Thank you for your request! We'll be in touch with you shortly." className="space-y-6" additionalFields={<>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField name="zip" label="Zip Code" type="text" placeholder="Enter your zip code" />
                  
                  <FormField name="service" label="Service Needed" type="select" options={[{
              value: "",
              label: "-- Select a Service --"
            }, {
              value: "group-header-roofing",
              label: "Roofing Services",
              isGroupHeader: true
            }, {
              value: "roof-replacement",
              label: "Roof Replacement"
            }, {
              value: "roof-repair",
              label: "Roof Repair"
            }, {
              value: "roof-cleaning",
              label: "Roof Cleaning"
            }, {
              value: "roof-inspection",
              label: "Roof Inspection"
            }, {
              value: "commercial-roofing",
              label: "Commercial Roofing"
            }, {
              value: "metal-roofing",
              label: "Metal Roofing"
            }, {
              value: "flat-roofing",
              label: "Flat Roofing"
            }, {
              value: "tpo-roofing",
              label: "TPO Roofing"
            }, {
              value: "group-header-gutters",
              label: "Gutter Services",
              isGroupHeader: true
            }, {
              value: "gutter-installation",
              label: "Gutter Installation"
            }, {
              value: "gutter-repair",
              label: "Gutter Repair"
            }, {
              value: "gutter-cleaning",
              label: "Gutter Cleaning"
            }, {
              value: "gutter-guards",
              label: "Gutter Guards"
            }, {
              value: "seamless-gutters",
              label: "5\" Seamless Gutters"
            }, {
              value: "group-header-additional",
              label: "Additional Services",
              isGroupHeader: true
            }, {
              value: "skylight-installation",
              label: "Skylight Installation"
            }, {
              value: "siding-installation",
              label: "Siding Installation"
            }, {
              value: "window-replacement",
              label: "Window Replacement"
            }, {
              value: "storm-damage",
              label: "Storm Damage Repair"
            }, {
              value: "emergency-services",
              label: "Emergency Services"
            }, {
              value: "maintenance",
              label: "Preventive Maintenance"
            }]} />
                </div>

                <FormField name="referSource" label="How did you hear about us?" type="select" options={[{
            value: "Google",
            label: "Google"
          }, {
            value: "Facebook",
            label: "Facebook"
          }, {
            value: "Friend/Family",
            label: "Friend or Family"
          }, {
            value: "Neighbor",
            label: "Neighbor"
          }, {
            value: "Saw your truck",
            label: "Saw your truck"
          }, {
            value: "Repeat Customer",
            label: "I'm a Repeat Customer"
          }, {
            value: "Other",
            label: "Other"
          }]} />
                
                <FormField name="comment" label="Comments or Questions" type="textarea" placeholder="Tell us about your project or ask questions..." rows={3} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <PhotoUpload photoFile={photoFile} setPhotoFile={setPhotoFile} />
                  <VideoUpload videoFile={videoFile} setVideoFile={setVideoFile} />
                </div>
                
                <div className="bg-gray-50 p-5 rounded-xl mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
                    <motion.div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm" whileHover={{
                y: -2,
                transition: {
                  duration: 0.2
                }
              }}>
                      <CheckCircle className="text-stark-red w-5 h-5" />
                      <span className="text-sm font-medium">Fast Response</span>
                    </motion.div>
                    <motion.div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm" whileHover={{
                y: -2,
                transition: {
                  duration: 0.2
                }
              }}>
                      <Shield className="text-stark-red w-5 h-5" />
                      <span className="text-sm font-medium">100% Secure</span>
                    </motion.div>
                    <motion.div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm" whileHover={{
                y: -2,
                transition: {
                  duration: 0.2
                }
              }}>
                      <Star className="text-stark-red w-5 h-5" />
                      <span className="text-sm font-medium">5-Star Service</span>
                    </motion.div>
                  </div>
                </div>
              </>} />
        </div>
      </motion.div>
    </motion.div>;
};
type FormFieldProps = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  placeholder?: string;
  options?: Array<{
    value: string;
    label: string;
    isGroupHeader?: boolean;
  }>;
  rows?: number;
};
const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type,
  placeholder,
  options = [],
  rows = 3
}) => {
  return <div>
      <label className="block text-sm font-medium mb-1.5 text-gray-700">{label}</label>
      {type === 'textarea' ? <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stark-red/30 focus:border-stark-red transition resize-none bg-white" placeholder={placeholder} rows={rows} name={name} /> : type === 'select' ? <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stark-red/30 focus:border-stark-red transition bg-white appearance-none bg-select-arrow bg-no-repeat bg-[right_1rem_center] pr-10" name={name} defaultValue="">
          <option value="" disabled>Select an option</option>
          {options.map((option, index) => option.isGroupHeader ? <option key={`${option.value}-${index}`} value={option.value} disabled className="font-bold bg-gray-100">
                {option.label}
              </option> : <option key={`${option.value}-${index}`} value={option.value}>
                {option.label}
              </option>)}
        </select> : <input type={type} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stark-red/30 focus:border-stark-red transition bg-white" placeholder={placeholder} name={name} />}
    </div>;
};
export default ContactForm;