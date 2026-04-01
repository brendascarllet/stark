
import React, { useState } from 'react';
import BaseContactForm from '@/components/shared/BaseContactForm';
import { z } from 'zod';
import PhotoUpload from '@/components/services/PhotoUpload';
import VideoUpload from '@/components/services/VideoUpload';
import { CheckCircle } from 'lucide-react';

// Create schema for storm damage form
const stormFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  zip: z.string().min(5, { message: "Please enter a valid zip code" }),
  damageType: z.string().optional(),
  message: z.string().optional(),
});

const StormContactSection: React.FC = () => {
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy mb-4 text-center">
          Get Your Free Storm Damage Assessment
        </h2>
        <p className="text-charcoal/80 max-w-3xl mx-auto text-center mb-10">
          Our certified inspectors can identify storm damage that may be undetectable to the untrained eye.
          Fill out the form below for a free, no-obligation assessment.
        </p>

        <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md">
          <BaseContactForm 
            schema={stormFormSchema}
            showMessage={true}
            buttonText="Schedule My Free Inspection"
            successMessage="We've received your information. Our team will contact you shortly!"
            additionalFields={
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                  <PhotoUpload photoFile={photoFile} setPhotoFile={setPhotoFile} />
                  <VideoUpload videoFile={videoFile} setVideoFile={setVideoFile} />
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg mt-4">
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="text-stark-red w-4 h-4" />
                      <span>7-Second Form</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="text-stark-red w-4 h-4" />
                      <span>Fast Response</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="text-stark-red w-4 h-4" />
                      <span>Secure</span>
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default StormContactSection;
