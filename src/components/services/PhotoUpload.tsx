
import React from 'react';
import { toast } from 'sonner';
import { Image } from 'lucide-react';

interface PhotoUploadProps {
  photoFile: File | null;
  setPhotoFile: (file: File | null) => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ photoFile, setPhotoFile }) => {
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10485760) {
        // 10MB max
        toast.error("File size exceeds 10MB limit");
        return;
      }
      setPhotoFile(file);
      toast.success(`Photo added: ${file.name}`);
    }
  };

  const clearFile = () => {
    setPhotoFile(null);
    toast.info("Photo removed");
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700">Add a Photo (Optional)</label>
      <div className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
        {!photoFile ? (
          <label className="cursor-pointer w-full">
            <div className="flex flex-col items-center">
              <Image size={24} className="text-stark-red mb-2" />
              <span className="text-sm text-gray-600">Click to upload a photo</span>
              <span className="text-xs text-gray-400 mt-1">10MB max</span>
            </div>
            <input type="file" className="hidden" accept="image/*" onChange={handlePhotoChange} />
          </label>
        ) : (
          <div className="w-full">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 truncate max-w-[80%]">{photoFile.name}</span>
              <button type="button" className="text-red-500 hover:text-red-700" onClick={clearFile}>
                &times;
              </button>
            </div>
            <div className="mt-2 h-20 bg-gray-200 rounded overflow-hidden">
              <img src={URL.createObjectURL(photoFile)} alt="Preview" className="w-full h-full object-cover" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoUpload;
