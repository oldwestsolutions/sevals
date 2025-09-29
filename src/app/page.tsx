'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { EyeIcon, HeartIcon, ChatBubbleLeftIcon, ShareIcon, UserGroupIcon, CurrencyDollarIcon, VideoCameraIcon, PhotoIcon, MagnifyingGlassIcon, UserCircleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountStep, setAccountStep] = useState(1); // 1: username check, 2: password, 3: email verification
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Allow login with any email/username combination
    if (email && username) {
      setIsLoggedIn(true);
      setShowLogin(false);
      router.push('/dashboard');
    }
  };

  const handleUsernameCheck = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate username check - in real app, check database
    if (username) {
      setAccountStep(2);
    }
  };

  const handlePasswordSetup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && confirmPassword && password === confirmPassword) {
      setAccountStep(3);
    }
  };

  const handleEmailVerification = () => {
    // Simulate email verification - in real app, send email
    alert('Verification email sent! Please check your inbox.');
    setShowLogin(false);
    setAccountStep(1);
    setEmail('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  const featuredCreators = [
    {
      id: 1,
      name: 'Emma Rose',
      username: '@emmarose',
      avatar: '👩‍🦰',
      coverImage: 'bg-gradient-to-br from-pink-500 to-purple-500',
      subscribers: '125K',
      isVerified: true,
      isOnline: true,
      price: '$9.99/month'
    },
    {
      id: 2,
      name: 'Sophia Chen',
      username: '@sophiachen',
      avatar: '👩‍💼',
      coverImage: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      subscribers: '89K',
      isVerified: true,
      isOnline: false,
      price: '$12.99/month'
    },
    {
      id: 3,
      name: 'Luna Martinez',
      username: '@lunamartinez',
      avatar: '👩‍🎨',
      coverImage: 'bg-gradient-to-br from-green-500 to-teal-500',
      subscribers: '67K',
      isVerified: false,
      isOnline: true,
      price: '$7.99/month'
    },
    {
      id: 4,
      name: 'Aria Johnson',
      username: '@ariajohnson',
      avatar: '👩‍🎤',
      coverImage: 'bg-gradient-to-br from-orange-500 to-red-500',
      subscribers: '203K',
      isVerified: true,
      isOnline: true,
      price: '$15.99/month'
    }
  ];

  const trendingContent = [
    {
      id: 1,
      creator: 'Emma Rose',
      title: 'Exclusive Behind the Scenes',
      thumbnail: 'bg-gradient-to-br from-pink-500 to-purple-500',
      views: '45K',
      likes: '2.3K',
      price: '$4.99',
      isFree: false
    },
    {
      id: 2,
      creator: 'Sophia Chen',
      title: 'New Photo Set - Beach Vibes',
      thumbnail: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      views: '23K',
      likes: '1.8K',
      price: 'Free',
      isFree: true
    },
    {
      id: 3,
      creator: 'Luna Martinez',
      title: 'Art Process Timelapse',
      thumbnail: 'bg-gradient-to-br from-green-500 to-teal-500',
      views: '67K',
      likes: '4.1K',
      price: '$2.99',
      isFree: false
    }
  ];

  if (showLogin) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden animate-in fade-in-0 duration-500">
        {/* Animated Starry Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large stars */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-40 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-60 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-80 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-900"></div>
          <div className="absolute top-96 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-400"></div>
          
          {/* Medium stars */}
          <div className="absolute top-16 right-10 w-1 h-1 bg-gray-300 rounded-full animate-pulse delay-600"></div>
          <div className="absolute top-24 left-16 w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-48 right-16 w-1 h-1 bg-gray-300 rounded-full animate-pulse delay-800"></div>
          <div className="absolute top-72 left-20 w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse delay-100"></div>
          <div className="absolute top-88 right-12 w-1 h-1 bg-gray-300 rounded-full animate-pulse delay-700"></div>
          
          {/* Small stars */}
          <div className="absolute top-12 left-12 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-28 right-8 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-44 left-8 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse delay-900"></div>
          <div className="absolute top-56 right-24 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute top-76 left-24 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse delay-600"></div>
          <div className="absolute top-92 right-16 w-0.5 h-0.5 bg-gray-400 rounded-full animate-pulse delay-400"></div>
          
          {/* Shooting stars */}
          <div className="absolute top-20 left-0 w-20 h-0.5 bg-gradient-to-r from-white to-transparent animate-pulse delay-2000"></div>
          <div className="absolute top-60 right-0 w-16 h-0.5 bg-gradient-to-l from-white to-transparent animate-pulse delay-4000"></div>
        </div>
        
        {/* Login modal with sexy animations */}
        <div className="relative z-10 animate-in fade-in-0 zoom-in-95 duration-700">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md border border-gray-700/50 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2 animate-in slide-in-from-top-4 duration-700">Welcome Back</h1>
              <p className="text-gray-400 animate-in slide-in-from-top-4 duration-700 delay-200">Sign in to your creator account</p>
            </div>
            
            {showLogin ? (
              // Login Form
              <form onSubmit={handleLogin} className="space-y-6 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                <div className="group">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 group-hover:border-gray-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="group">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 group-hover:border-gray-500"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white py-4 rounded-xl font-bold hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:scale-105 active:scale-95"
                >
                  Sign In
                </button>
              </form>
            ) : (
              // Account Creation Flow
              <>
                {accountStep === 1 && (
                  <form onSubmit={handleUsernameCheck} className="space-y-6 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                    <div className="group">
                      <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 group-hover:border-gray-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-gray-300 text-sm font-medium mb-2">Username</label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 group-hover:border-gray-500"
                        placeholder="Choose your username"
                        required
                      />
                      <p className="text-gray-400 text-sm mt-2">We'll check if this username is available</p>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-teal-500 text-white py-4 rounded-xl font-bold hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:scale-105 active:scale-95"
                    >
                      Check Username
                    </button>
                  </form>
                )}

                {accountStep === 2 && (
                  <form onSubmit={handlePasswordSetup} className="space-y-6 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-xl">✓</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Username Available!</h3>
                      <p className="text-gray-400 text-sm">@{username} is available</p>
                    </div>
                    
                    <div className="group">
                      <label className="block text-gray-300 text-sm font-medium mb-2">Create Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 group-hover:border-gray-500"
                        placeholder="Create a strong password"
                        required
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-gray-300 text-sm font-medium mb-2">Confirm Password</label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-4 bg-black/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 group-hover:border-gray-500"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-teal-500 text-white py-4 rounded-xl font-bold hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:scale-105 active:scale-95"
                    >
                      Continue
                    </button>
                  </form>
                )}

                {accountStep === 3 && (
                  <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-xl">✓</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Account Created!</h3>
                      <p className="text-gray-400 text-sm">We've sent a verification email to {email}</p>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-xl p-4">
                      <h4 className="text-white font-semibold mb-2">Next Steps:</h4>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• Check your email inbox</li>
                        <li>• Click the verification link</li>
                        <li>• Start creating content!</li>
                      </ul>
                    </div>
                    
                    <button
                      onClick={handleEmailVerification}
                      className="w-full bg-teal-500 text-white py-4 rounded-xl font-bold hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:scale-105 active:scale-95"
                    >
                      Resend Verification Email
                    </button>
                  </div>
                )}
              </>
            )}
            
            <div className="text-center mt-6 animate-in slide-in-from-bottom-4 duration-700 delay-500">
              <button
                onClick={() => setShowLogin(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className={`bg-black/80 backdrop-blur-lg border-b border-gray-900 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            
            <div className="flex items-center">
              <button className="sm:hidden p-2 hover:bg-[#1a1a1a] rounded-full transition-colors">
                <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Hero Section */}
      <div className="relative min-h-screen bg-black flex items-center shadow-2xl pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative order-2 lg:order-1 hidden lg:block">
              <div className="bg-gray-800 rounded-2xl lg:rounded-3xl aspect-[4/5] flex items-center justify-center border border-gray-700 overflow-hidden">
                {/* Replace this with your actual image */}
                <img 
                  src="/assets/goth.png" 
                  alt="Hero Image" 
                  className="w-full h-full object-cover rounded-3xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                <div className="text-center hidden">
                  <div className="text-6xl mb-4">🖼️</div>
                  <div className="text-white text-xl font-semibold mb-2">Image Not Found</div>
                  <div className="text-gray-400 text-sm">
                    Place your image in /public/assets/goth.png
                  </div>
                </div>
              </div>
              
            </div>

            {/* Right Column - Login/Signup Form */}
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Welcome
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed">
                  Join millions of creators and fans on the world's most intimate platform.
                </p>
              </div>
              
              {/* Login/Signup Form */}
              <div className="bg-black/50 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-800">
                <div className="flex space-x-4 mb-6">
                  <button 
                    onClick={() => setShowLogin(true)}
                    className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                      showLogin 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                    }`}
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={() => router.push('/learn-more')}
                    className="flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-200 bg-gray-900 text-gray-400 hover:bg-gray-800"
                  >
                    Learn More
                  </button>
                </div>
                
                {/* Sign In Form */}
                <form onSubmit={handleLogin} className="space-y-4 lg:space-y-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 lg:py-4 bg-[#0a0a0a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Username</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-3 lg:py-4 bg-[#0a0a0a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors text-base"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-teal-500 text-white py-3 lg:py-4 rounded-xl text-base lg:text-lg font-bold hover:bg-teal-600 transition-all duration-200"
                  >
                    Create Account
                  </button>
                </form>
                
                <div className="text-center mt-6">
                  <p className="text-gray-400 text-sm">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




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
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 Butt Slaves. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 
