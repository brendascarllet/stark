
import React from 'react';
import { toast } from 'sonner';
import { Video } from 'lucide-react';

interface VideoUploadProps {
  videoFile: File | null;
  setVideoFile: (file: File | null) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ videoFile, setVideoFile }) => {
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 52428800) {
        // 50MB max
        toast.error("Video size exceeds 50MB limit");
        return;
      }
      setVideoFile(file);
      toast.success(`Video added: ${file.name}`);
    }
  };

  const clearFile = () => {
    setVideoFile(null);
    toast.info("Video removed");
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700">Add a Video (Optional)</label>
      <div className="border border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
        {!videoFile ? (
          <label className="cursor-pointer w-full">
            <div className="flex flex-col items-center">
              <Video size={24} className="text-stark-red mb-2" />
              <span className="text-sm text-gray-600">Click to upload a video</span>
              <span className="text-xs text-gray-400 mt-1">50MB max</span>
            </div>
            <input type="file" className="hidden" accept="video/*" onChange={handleVideoChange} />
          </label>
        ) : (
          <div className="w-full">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 truncate max-w-[80%]">{videoFile.name}</span>
              <button type="button" className="text-red-500 hover:text-red-700" onClick={clearFile}>
                &times;
              </button>
            </div>
            <div className="mt-2 flex items-center justify-center bg-gray-200 rounded-lg h-20">
              <Video size={32} className="text-gray-500" />
              <span className="ml-2 text-sm text-gray-600">Video selected</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoUpload;
