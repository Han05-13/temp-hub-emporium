
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface PopupAdProps {
  delay?: number; // delay in seconds before showing
  showOnce?: boolean; // show only once per session
}

const PopupAd: React.FC<PopupAdProps> = ({ delay = 10, showOnce = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('popupAdShown');
    
    if (showOnce && hasShown) {
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
      if (showOnce) {
        sessionStorage.setItem('popupAdShown', 'true');
      }
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay, showOnce]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-600 rounded-2xl p-8 max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">Popup Advertisement</h3>
          <p className="text-gray-400 mb-4">Replace this entire popup content with your ad code</p>
          <div className="h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Your Ad Content Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAd;
