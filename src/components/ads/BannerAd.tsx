
import React from 'react';

interface BannerAdProps {
  position: 'top' | 'bottom' | 'middle';
  size?: 'small' | 'medium' | 'large';
}

const BannerAd: React.FC<BannerAdProps> = ({ position, size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-16',
    medium: 'h-24',
    large: 'h-32'
  };

  return (
    <div className={`w-full ${sizeClasses[size]} bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-lg flex items-center justify-center mb-4`}>
      <div className="text-center">
        <p className="text-gray-400 text-sm">Banner Ad - {position}</p>
        <p className="text-gray-500 text-xs">Replace this div with your ad code</p>
      </div>
    </div>
  );
};

export default BannerAd;
