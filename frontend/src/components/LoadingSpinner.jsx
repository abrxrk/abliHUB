import React from "react";

const LoadingSpinner = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center space-x-3">
          <img
            src="/logo.png"
            alt="AbliHUB Logo"
            className="w-12 h-12 animate-pulse"
          />
          <span className="text-3xl font-bold text-white">AbliHUB</span>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-gradient-to-r from-blue-600 to-slate-700 rounded-full animate-loading-bar"></div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-400 text-sm animate-pulse">
          Loading your learning journey...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
