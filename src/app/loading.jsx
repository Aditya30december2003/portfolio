import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen fixed top-0 left-0 bg-black/90 backdrop-blur-sm">
      <div className="relative w-24 h-24">
        {/* Creating multiple rings with different animation delays */}
        <div className="absolute inset-0 border-4 border-t-white border-r-white border-b-transparent border-l-transparent rounded-full animate-[spin_1s_linear_infinite]" />
        <div className="absolute inset-0 border-4 border-t-transparent border-r-transparent border-b-white border-l-white rounded-full animate-[spin_1s_linear_infinite_reverse]" />
        
        {/* Inner loading text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium animate-pulse">LOADING</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;