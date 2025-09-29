'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Bars3Icon, XMarkIcon, UserGroupIcon, CurrencyDollarIcon, VideoCameraIcon, PhotoIcon, HeartIcon, ChatBubbleLeftIcon, ShareIcon } from '@heroicons/react/24/outline';

export default function LearnMore() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > 100) {
        setIsHeaderVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: UserGroupIcon,
      title: 'Connect with Fans',
      description: 'Build meaningful relationships with your audience through direct messaging and exclusive content.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Monetize Your Content',
      description: 'Earn money from your creativity with subscriptions, tips, and paid content options.'
    },
    {
      icon: VideoCameraIcon,
      title: 'Live Streaming',
      description: 'Go live with your fans and create real-time connections through interactive streams.'
    },
    {
      icon: PhotoIcon,
      title: 'Content Library',
      description: 'Organize and share your photos, videos, and exclusive content with your subscribers.'
    }
  ];

  const stats = [
    { number: '50M+', label: 'Active Users' },
    { number: '$2B+', label: 'Paid to Creators' },
    { number: '200+', label: 'Countries' },
    { number: '24/7', label: 'Support' }
  ];

  const creatorTypes = [
    {
      title: 'Content Creators',
      description: 'Share your art, photography, writing, or any creative content with a global audience.',
      icon: '🎨'
    },
    {
      title: 'Influencers',
      description: 'Monetize your following and create exclusive content for your most dedicated fans.',
      icon: '⭐'
    },
    {
      title: 'Educators',
      description: 'Share knowledge, tutorials, and educational content while earning from your expertise.',
      icon: '📚'
    },
    {
      title: 'Entertainers',
      description: 'Perform, create, and entertain while building a sustainable income from your talent.',
      icon: '🎭'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="bg-black/90 backdrop-blur-lg border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <button 
                  onClick={() => router.push('/')}
                  className="flex items-center space-x-2"
                >
                  <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="h-10 w-auto"
                  />
                </button>
              </div>
              
              <div className="flex items-center">
                <button className="md:hidden p-2 hover:bg-[#1a1a1a] rounded-full transition-colors">
                  <Bars3Icon className="h-6 w-6 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Learn More About Our Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Discover how our creator platform empowers you to build meaningful connections, 
              monetize your content, and grow your audience like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => router.push('/')}
                className="bg-teal-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-teal-600 transition-all duration-200"
              >
                Get Started
              </button>
              <button 
                onClick={() => router.push('/for-creators')}
                className="bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-700 transition-all duration-200"
              >
                For Creators
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide everything you need to succeed as a creator in today's digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Types Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect for Every Creator
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're just starting out or already have a following, our platform adapts to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creatorTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-6">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-500/10 to-pink-500/10 rounded-3xl p-12 text-center border border-gray-800">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already building their dreams on our platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => router.push('/')}
                className="bg-teal-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-teal-600 transition-all duration-200"
              >
                Create Account
              </button>
              <button 
                onClick={() => router.push('/for-fans')}
                className="bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-700 transition-all duration-200"
              >
                For Fans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                The world's most intimate platform connecting creators and fans. 
                Join millions who are already part of our community.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/for-creators" className="text-gray-400 hover:text-white transition-colors">For Creators</a></li>
                <li><a href="/for-fans" className="text-gray-400 hover:text-white transition-colors">For Fans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Hated By Many. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
