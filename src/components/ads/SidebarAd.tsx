
import React from 'react';

interface SidebarAdProps {
  side: 'left' | 'right';
}

const SidebarAd: React.FC<SidebarAdProps> = ({ side }) => {
  return (
    <div className="w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-600 rounded-lg flex items-center justify-center fixed top-1/2 transform -translate-y-1/2 z-40" 
         style={{ [side]: '20px' }}>
      <div className="text-center p-4">
        <p className="text-gray-400 text-sm">Sidebar Ad - {side}</p>
        <p className="text-gray-500 text-xs">Replace this div with your ad code</p>
      </div>
    </div>
  );
};

export default SidebarAd;
