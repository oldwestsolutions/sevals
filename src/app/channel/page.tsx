'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { PlayIcon, PencilIcon, PlusIcon, EllipsisVerticalIcon, EyeIcon, HeartIcon, ChatBubbleLeftIcon, ShareIcon, VideoCameraIcon, PhotoIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

export default function Channel() {
  const [activeTab, setActiveTab] = useState('videos');

  const channelStats = {
    subscribers: 125000,
    totalViews: 2500000,
    videos: 45,
    joinDate: 'January 2023'
  };

  const videos = [
    {
      id: '1',
      title: 'Building a YouTube Clone with Next.js and TypeScript',
      thumbnail: 'https://picsum.photos/seed/video1/320/180',
      views: 125000,
      likes: 1200,
      comments: 89,
      publishedDate: '3 days ago',
      duration: '15:30'
    },
    {
      id: '2',
      title: 'Learn TypeScript in 2024 - Complete Guide',
      thumbnail: 'https://picsum.photos/seed/video2/320/180',
      views: 89000,
      likes: 950,
      comments: 67,
      publishedDate: '1 week ago',
      duration: '22:15'
    },
    {
      id: '3',
      title: 'Next.js 14 Crash Course - New Features',
      thumbnail: 'https://picsum.photos/seed/video3/320/180',
      views: 156000,
      likes: 1800,
      comments: 124,
      publishedDate: '2 weeks ago',
      duration: '18:45'
    }
  ];

  const playlists = [
    {
      id: '1',
      name: 'React Tutorials',
      videoCount: 8,
      thumbnail: 'https://picsum.photos/seed/playlist1/320/180'
    },
    {
      id: '2',
      name: 'TypeScript Series',
      videoCount: 12,
      thumbnail: 'https://picsum.photos/seed/playlist2/320/180'
    }
  ];

  const tabs = [
    { id: 'videos', label: 'Videos', icon: VideoCameraIcon },
    { id: 'playlists', label: 'Playlists', icon: PhotoIcon },
    { id: 'about', label: 'About', icon: UserGroupIcon }
  ];

  const handleLike = (id: string) => {
    console.log('Liked video:', id);
  };

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <main className="flex-1 ml-64">
        <Header />
        <div className="pt-16">
          <div className="p-6">
            {/* Channel Header */}
            <div className="mb-8">
              <div className="flex items-start space-x-6">
                <img
                  src="https://picsum.photos/seed/channel-avatar/150/150"
                  alt="Channel Avatar"
                  className="w-32 h-32 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <h1 className="text-3xl font-bold text-white">Your Channel</h1>
                    <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                      <PencilIcon className="h-5 w-5" />
                      <span>Customize Channel</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">{channelStats.subscribers.toLocaleString()}</div>
                      <div className="text-gray-400 text-sm">subscribers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{channelStats.totalViews.toLocaleString()}</div>
                      <div className="text-gray-400 text-sm">total views</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{channelStats.videos}</div>
                      <div className="text-gray-400 text-sm">videos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{channelStats.joinDate}</div>
                      <div className="text-gray-400 text-sm">joined</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 max-w-2xl">
                    Welcome to my channel! I create content about web development, programming tutorials, 
                    and tech reviews. Subscribe for weekly videos on React, TypeScript, Next.js, and more.
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 mb-8 bg-gray-900 rounded-lg p-1 w-fit">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Videos Tab */}
            {activeTab === 'videos' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Your Videos</h2>
                  <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    <PlusIcon className="h-5 w-5" />
                    <span>Upload Video</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video) => (
                    <div key={video.id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
                      <div className="relative aspect-video">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                          {video.duration}
                        </div>
                        <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                          <PlayIcon className="h-12 w-12 text-white" />
                        </button>
                        <button className="absolute top-2 right-2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors">
                          <EllipsisVerticalIcon className="h-5 w-5 text-white" />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-white mb-2 line-clamp-2">{video.title}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                          <span>{video.views.toLocaleString()} views</span>
                          <span>{video.publishedDate}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <HeartIcon className="h-4 w-4" />
                            <span>{video.likes.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ChatBubbleLeftIcon className="h-4 w-4" />
                            <span>{video.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Playlists Tab */}
            {activeTab === 'playlists' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Your Playlists</h2>
                  <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    <PlusIcon className="h-5 w-5" />
                    <span>Create Playlist</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {playlists.map((playlist) => (
                    <div key={playlist.id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer">
                      <div className="relative aspect-video">
                        <img
                          src={playlist.thumbnail}
                          alt={playlist.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                          {playlist.videoCount} videos
                        </div>
                        <button className="absolute top-2 right-2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors">
                          <EllipsisVerticalIcon className="h-5 w-5 text-white" />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-white mb-1">{playlist.name}</h3>
                        <p className="text-gray-400 text-sm">{playlist.videoCount} videos</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">About Your Channel</h2>
                
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Channel Description</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Welcome to my channel! I create content about web development, programming tutorials, 
                    and tech reviews. Subscribe for weekly videos on React, TypeScript, Next.js, and more.
                  </p>
                  <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <PencilIcon className="h-4 w-4" />
                    <span>Edit Description</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Channel Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Country</span>
                        <span className="text-white">United States</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Joined</span>
                        <span className="text-white">{channelStats.joinDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Views</span>
                        <span className="text-white">{channelStats.totalViews.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">Website:</span>
                        <a href="#" className="text-blue-400 hover:text-blue-300">yourwebsite.com</a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">Twitter:</span>
                        <a href="#" className="text-blue-400 hover:text-blue-300">@yourhandle</a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">GitHub:</span>
                        <a href="#" className="text-blue-400 hover:text-blue-300">github.com/yourusername</a>
                      </div>
                    </div>
                    <button className="mt-4 flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                      <PencilIcon className="h-4 w-4" />
                      <span>Edit Links</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
