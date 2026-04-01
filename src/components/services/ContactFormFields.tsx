
import React from 'react';

interface ContactFormFieldsProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  zip: string;
  setZip: (zip: string) => void;
  service: string;
  setService: (service: string) => void;
  comment: string;
  setComment: (comment: string) => void;
  referSource: string;
  setReferSource: (referSource: string) => void;
}

const ContactFormFields: React.FC<ContactFormFieldsProps> = ({
  name, setName,
  email, setEmail,
  phone, setPhone,
  zip, setZip,
  service, setService,
  comment, setComment,
  referSource, setReferSource
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Full Name</label>
          <input 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stark-red/30 focus:border-stark-red transition" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            placeholder="Full Name" 
            required 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Email Address</label>
          <input 
            type="email" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stark-red/30 focus:border-stark-red transition" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="Email Address" 
            required 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Phone Number</label>
          <input 
            type="tel" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stark-red/30 focus:border-stark-red transition" 
            value={phone} 
            onChange={e => setPhone(e.target.value)} 
            placeholder="Phone Number" 
            required 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Zip Code</label>
          <input 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stark-red/30 focus:border-stark-red transition" 
            value={zip} 
            onChange={e => setZip(e.target.value)} 
            placeholder="Zip Code" 
            required 
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Services</label>
        <select 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stark-red/30 focus:border-stark-red transition bg-white" 
          value={service} 
          onChange={e => setService(e.target.value)}
        >
          <option value="Roof Replacement">Roof Replacement</option>
          <option value="Roof Repair">Roof Repair</option>
          <option value="Gutter Installation">Gutter Installation</option>
          <option value="Gutter Repair">Gutter Repair</option>
          <option value="Skylight Installation">Skylight Installation</option>
          <option value="Siding Installation">Siding Installation</option>
          <option value="Storm Damage Repair">Storm Damage Repair</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Comments or Questions</label>
        <textarea 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stark-red/30 focus:border-stark-red transition resize-none" 
          placeholder="Tell us about your project or ask questions..." 
          rows={4} 
          value={comment} 
          onChange={e => setComment(e.target.value)} 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">How did you hear about us?</label>
        <select 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stark-red/30 focus:border-stark-red transition bg-white" 
          value={referSource} 
          onChange={e => setReferSource(e.target.value)}
        >
          <option value="Google">Google</option>
          <option value="Facebook">Facebook</option>
          <option value="Friend/Family">Friend or Family</option>
          <option value="Neighbor">Neighbor</option>
          <option value="Saw your truck">Saw your truck</option>
          <option value="Repeat Customer">I'm a Repeat Customer</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </>
  );
};

export default ContactFormFields;
