'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HeartIcon, ChatBubbleLeftIcon, EyeIcon, CurrencyDollarIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function ForFans() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: HeartIcon,
      title: 'Support Your Favorites',
      description: 'Show your support for creators you love with subscriptions, tips, and exclusive content access.'
    },
    {
      icon: ChatBubbleLeftIcon,
      title: 'Direct Messaging',
      description: 'Chat directly with creators and build personal connections through private conversations.'
    },
    {
      icon: EyeIcon,
      title: 'Exclusive Content',
      description: 'Access premium content that you can\'t find anywhere else, from photos to videos and more.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Flexible Pricing',
      description: 'Choose from various subscription tiers and pay-per-view options that fit your budget.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className={`bg-black/80 backdrop-blur-lg border-b border-gray-900 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => router.push('/')}
                className="flex items-center"
              >
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="h-10 w-auto"
                />
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => router.push('/')}
                className="bg-gray-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-700 transition-all duration-200"
              >
                Home
              </button>
              <button className="md:hidden p-2 hover:bg-[#1a1a1a] rounded-full transition-colors">
                <Bars3Icon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative min-h-screen bg-black flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              For
              <span className="block text-gray-400">
                Fans
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Connect with your favorite creators, support their work, and enjoy exclusive content in a safe, intimate space.
            </p>
            <button 
              onClick={() => router.push('/')}
              className="bg-gray-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-700 transition-all duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Fans Love Our Platform</h2>
            <p className="text-xl text-gray-400">Everything you need to connect with creators</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200">
                <feature.icon className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Supporting Creators?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join millions of fans who are already part of our community.
          </p>
          <button 
            onClick={() => router.push('/')}
            className="bg-gray-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-gray-700 transition-all duration-200"
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Hated By Many. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
