import React from 'react';
import Link from 'next/link';
import { HomeIcon, FireIcon, VideoCameraIcon, UserGroupIcon, BookmarkIcon, ClockIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const menuItems = [
    { icon: HomeIcon, label: 'Home', href: '/' },
    { icon: FireIcon, label: 'Trending', href: '/trending' },
    { icon: VideoCameraIcon, label: 'Subscriptions', href: '/subscriptions' },
    { icon: UserGroupIcon, label: 'Community', href: '/community' },
  ];

  const libraryItems = [
    { icon: BookmarkIcon, label: 'Library', href: '/library' },
    { icon: ClockIcon, label: 'History', href: '/history' },
    { icon: HandThumbUpIcon, label: 'Liked Videos', href: '/liked' },
  ];

  return (
    <aside className="w-64 h-screen bg-[#0f0f0f] fixed left-0 top-0 pt-16">
      <div className="px-4 py-2">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center space-x-4 px-4 py-2 text-gray-300 hover:bg-[#272727] rounded-lg transition-colors"
            >
              <item.icon className="h-6 w-6" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="border-t border-gray-800 my-4" />

        <div className="space-y-1">
          {libraryItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center space-x-4 px-4 py-2 text-gray-300 hover:bg-[#272727] rounded-lg transition-colors"
            >
              <item.icon className="h-6 w-6" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 