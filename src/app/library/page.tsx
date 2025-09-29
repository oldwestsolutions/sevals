'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { PlayIcon, PlusIcon, EllipsisVerticalIcon, HeartIcon, ClockIcon, UserGroupIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

export default function Library() {
  const [activeTab, setActiveTab] = useState('playlists');

  const playlists = [
    {
      id: '1',
      name: 'My Favorites',
      videoCount: 12,
      thumbnail: 'https://picsum.photos/seed/playlist1/320/180',
      lastUpdated: '2 days ago'
    },
    {
      id: '2',
      name: 'Workout Videos',
      videoCount: 8,
      thumbnail: 'https://picsum.photos/seed/playlist2/320/180',
      lastUpdated: '1 week ago'
    },
    {
      id: '3',
      name: 'Music Covers',
      videoCount: 15,
      thumbnail: 'https://picsum.photos/seed/playlist3/320/180',
      lastUpdated: '3 days ago'
    }
  ];

  const subscriptions = [
    {
      id: '1',
      channelName: 'Tech Channel',
      avatar: 'https://picsum.photos/seed/channel1/100/100',
      subscriberCount: '1.2M',
      isLive: true,
      lastVideo: 'New React Tutorial',
      lastVideoThumbnail: 'https://picsum.photos/seed/video1/320/180'
    },
    {
      id: '2',
      channelName: 'Coding Master',
      avatar: 'https://picsum.photos/seed/channel2/100/100',
      subscriberCount: '500K',
      isLive: false,
      lastVideo: 'TypeScript Deep Dive',
      lastVideoThumbnail: 'https://picsum.photos/seed/video2/320/180'
    },
    {
      id: '3',
      channelName: 'Web Dev Pro',
      avatar: 'https://picsum.photos/seed/channel3/100/100',
      subscriberCount: '800K',
      isLive: true,
      lastVideo: 'Next.js 14 Features',
      lastVideoThumbnail: 'https://picsum.photos/seed/video3/320/180'
    }
  ];

  const savedVideos = [
    {
      id: '1',
      title: 'Building a YouTube Clone with Next.js',
      channel: 'Tech Channel',
      thumbnail: 'https://picsum.photos/seed/saved1/320/180',
      duration: '15:30',
      savedDate: '2 days ago',
      isLiked: true
    },
    {
      id: '2',
      title: 'Learn TypeScript in 2024',
      channel: 'Coding Master',
      thumbnail: 'https://picsum.photos/seed/saved2/320/180',
      duration: '22:15',
      savedDate: '1 week ago',
      isLiked: false
    },
    {
      id: '3',
      title: 'Next.js 14 Crash Course',
      channel: 'Web Dev Pro',
      thumbnail: 'https://picsum.photos/seed/saved3/320/180',
      duration: '18:45',
      savedDate: '3 days ago',
      isLiked: true
    }
  ];

  const tabs = [
    { id: 'playlists', label: 'Playlists', icon: BookmarkIcon },
    { id: 'subscriptions', label: 'Subscriptions', icon: UserGroupIcon },
    { id: 'saved', label: 'Saved Videos', icon: HeartIcon }
  ];

  const handleLike = (id: string) => {
    // Handle like functionality
    console.log('Liked video:', id);
  };

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <main className="flex-1 ml-64">
        <Header />
        <div className="pt-16">
          <div className="p-6">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Your Library</h1>
              <p className="text-gray-400">Manage your playlists, subscriptions, and saved content</p>
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
                        <p className="text-gray-400 text-sm">Updated {playlist.lastUpdated}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Subscriptions Tab */}
            {activeTab === 'subscriptions' && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-6">Your Subscriptions</h2>
                
                <div className="space-y-4">
                  {subscriptions.map((channel) => (
                    <div key={channel.id} className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={channel.avatar}
                            alt={channel.channelName}
                            className="w-12 h-12 rounded-full"
                          />
                          {channel.isLive && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-white">{channel.channelName}</h3>
                            {channel.isLive && (
                              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">LIVE</span>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm">{channel.subscriberCount} subscribers</p>
                          <p className="text-gray-500 text-sm">Latest: {channel.lastVideo}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                            <PlayIcon className="h-5 w-5 text-white" />
                          </button>
                          <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                            <EllipsisVerticalIcon className="h-5 w-5 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Saved Videos Tab */}
            {activeTab === 'saved' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Saved Videos</h2>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <ClockIcon className="h-4 w-4" />
                    <span>Sorted by date saved</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {savedVideos.map((video) => (
                    <div key={video.id} className="flex items-center space-x-4 bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                      <div className="relative w-48 h-32 flex-shrink-0">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                        <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                          <PlayIcon className="h-8 w-8 text-white" />
                        </button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white mb-1 line-clamp-2">{video.title}</h3>
                        <p className="text-gray-400 text-sm mb-1">{video.channel}</p>
                        <p className="text-gray-500 text-sm">Saved {video.savedDate}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleLike(video.id)}
                          className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                        >
                          {video.isLiked ? (
                            <HeartSolidIcon className="h-5 w-5 text-red-500" />
                          ) : (
                            <HeartIcon className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                        <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                          <EllipsisVerticalIcon className="h-5 w-5 text-white" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
