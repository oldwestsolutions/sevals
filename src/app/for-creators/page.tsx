'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CurrencyDollarIcon, UserGroupIcon, VideoCameraIcon, ChartBarIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function ForCreators() {
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
      icon: CurrencyDollarIcon,
      title: 'Monetize Your Content',
      description: 'Earn money from your content through subscriptions, tips, and pay-per-view options.'
    },
    {
      icon: UserGroupIcon,
      title: 'Build Your Community',
      description: 'Connect with fans who appreciate your work and build a loyal following.'
    },
    {
      icon: VideoCameraIcon,
      title: 'Content Freedom',
      description: 'Create the content you want without restrictions and share it with your audience.'
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics & Insights',
      description: 'Track your performance with detailed analytics to grow your audience.'
    }
  ];

  const stats = [
    { number: '2.1M+', label: 'Active Creators' },
    { number: '$5.2B+', label: 'Paid to Creators' },
    { number: '220M+', label: 'Fans Worldwide' },
    { number: '180+', label: 'Countries' }
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
                Creators
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Turn your passion into profit. Create content, build your community, and earn money doing what you love.
            </p>
            <button 
              onClick={() => router.push('/')}
              className="bg-gray-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-700 transition-all duration-200"
            >
              Start Creating
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Join the Creator Economy</h2>
            <p className="text-xl text-gray-400">Millions of creators are already earning</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-400">Powerful tools for content creators</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-200">
                <feature.icon className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Creator Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already earning from their passion.
          </p>
          <button 
            onClick={() => router.push('/')}
            className="bg-gray-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-gray-700 transition-all duration-200"
          >
            Become a Creator
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
