import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onHomeClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={onHomeClick}
              className="flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
              title="Go to Homepage"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center mr-3 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <h1 className="text-xl sm:text-2xl brand-font bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent hover:from-black hover:to-gray-700 transition-all duration-200">iMint</h1>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-sm text-gray-600">
              UK Used iPhones & Accessories • Ships to Nigeria • Best Prices
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
