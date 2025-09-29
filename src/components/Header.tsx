'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon, MicrophoneIcon, BanknotesIcon, UserCircleIcon, Cog6ToothIcon, UserIcon, ArrowRightOnRectangleIcon, PencilIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const router = useRouter();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleLogout = () => {
    // In a real app, you'd clear auth tokens/session
    router.push('/');
  };

  const profileMenuItems = [
    { icon: UserIcon, label: 'Your Channel', href: '/channel' },
    { icon: PencilIcon, label: 'Edit Profile', href: '/profile/edit' },
    { icon: Cog6ToothIcon, label: 'Settings', href: '/settings' },
    { icon: ArrowRightOnRectangleIcon, label: 'Logout', action: handleLogout }
  ];

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
          <button 
            onClick={() => router.push('/cash')}
            className="p-2 hover:bg-[#272727] rounded-full transition-colors relative"
            title="Cash Management"
          >
            <BanknotesIcon className="h-6 w-6 text-gray-400" />
          </button>
          <div className="relative">
            <button 
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="p-2 hover:bg-[#272727] rounded-full transition-colors"
            >
              <UserCircleIcon className="h-8 w-8 text-gray-400" />
            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-[#272727] rounded-lg shadow-lg border border-gray-700 z-50">
                <div className="py-2">
                  {profileMenuItems.map((item, index) => (
                    <div key={index}>
                      {item.href ? (
                        <button
                          onClick={() => {
                            router.push(item.href);
                            setShowProfileDropdown(false);
                          }}
                          className="w-full text-left px-4 py-3 text-white hover:bg-[#3f3f3f] transition-colors flex items-center space-x-3"
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            item.action?.();
                            setShowProfileDropdown(false);
                          }}
                          className="w-full text-left px-4 py-3 text-white hover:bg-[#3f3f3f] transition-colors flex items-center space-x-3"
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Click outside to close dropdown */}
      {showProfileDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowProfileDropdown(false)}
        />
      )}
    </header>
  );
};

export default Header; 