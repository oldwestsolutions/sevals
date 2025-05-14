import React from 'react';
import { MagnifyingGlassIcon, MicrophoneIcon, BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-[#0f0f0f] border-b border-gray-800 z-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center space-x-4">
          <div className="text-red-600 text-2xl font-bold">YouTube</div>
        </div>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#121212] text-white px-4 py-2 rounded-l-full border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-0 top-0 h-full px-6 bg-[#272727] rounded-r-full border border-l-0 border-gray-700 hover:bg-[#3f3f3f] transition-colors">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </button>
            </div>
            <button className="ml-4 p-2 bg-[#272727] rounded-full hover:bg-[#3f3f3f] transition-colors">
              <MicrophoneIcon className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-[#272727] rounded-full transition-colors">
            <BellIcon className="h-6 w-6 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-[#272727] rounded-full transition-colors">
            <UserCircleIcon className="h-8 w-8 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 