
import React from 'react';

interface InlineAdProps {
  size?: 'small' | 'medium' | 'large';
}

const InlineAd: React.FC<InlineAdProps> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-32',
    medium: 'h-48',
    large: 'h-64'
  };

  return (
    <div className={`w-full ${sizeClasses[size]} bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-lg flex items-center justify-center my-8`}>
      <div className="text-center">
        <p className="text-gray-400 text-sm">Inline Advertisement</p>
        <p className="text-gray-500 text-xs">Replace this div with your ad code</p>
      </div>
    </div>
  );
};

export default InlineAd;
