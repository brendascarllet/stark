
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import VirtualAssistant from '@/components/finance/VirtualAssistant';
import ScrollToTop from '@/components/ScrollToTop';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-800 mb-6">Oops! Page not found</p>
        <p className="text-gray-600 mb-6">
          The page you're looking for at path: <span className="font-mono text-red-500">{location.pathname}</span> doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Return to Home
        </a>
      </div>
      <VirtualAssistant />
      <ScrollToTop />
    </div>
  );
};

export default NotFound;
