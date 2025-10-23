import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-48 sm:pt-40 lg:pt-48 pb-20 sm:pb-16 lg:pb-20 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
          UK Used iPhones & Accessories
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-20 sm:mb-12 max-w-3xl mx-auto">
          Browse our collection of premium UK used iPhones, chargers, cases, and accessories. 
          All products verified and tested. Fast shipping to Nigeria available.
        </p>
        
        {/* Feature Highlights */}
        <div className="hidden sm:flex justify-center space-x-8 mb-12">
          <div className="flex items-center">
            <div className="w-8 h-8 border-2 border-green-500 rounded-full flex items-center justify-center mr-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-200">UK Used Quality</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 border-2 border-green-500 rounded-full flex items-center justify-center mr-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-200">WhatsApp Contact</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 border-2 border-green-500 rounded-full flex items-center justify-center mr-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-200">Ships to Nigeria</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
