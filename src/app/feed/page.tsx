'use client';

import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { HeartIcon, ChatBubbleLeftIcon, ShareIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface FeedItem {
  id: string;
  title: string;
  creator: string;
  creatorAvatar: string;
  videoUrl: string;
  thumbnail: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  duration: string;
  description: string;
}

const mockFeedItems: FeedItem[] = [
  {
    id: '1',
    title: 'Amazing Dance Routine',
    creator: 'DanceQueen',
    creatorAvatar: 'https://picsum.photos/seed/avatar1/100/100',
    videoUrl: 'https://picsum.photos/seed/video1/400/600',
    thumbnail: 'https://picsum.photos/seed/thumb1/400/600',
    likes: 12500,
    comments: 234,
    shares: 89,
    isLiked: false,
    duration: '0:45',
    description: 'Check out this incredible dance routine I learned! 💃✨'
  },
  {
    id: '2',
    title: 'Cooking Tutorial',
    creator: 'ChefMaster',
    creatorAvatar: 'https://picsum.photos/seed/avatar2/100/100',
    videoUrl: 'https://picsum.photos/seed/video2/400/600',
    thumbnail: 'https://picsum.photos/seed/thumb2/400/600',
    likes: 8900,
    comments: 156,
    shares: 67,
    isLiked: true,
    duration: '2:30',
    description: 'Learn how to make the perfect pasta from scratch! 🍝'
  },
  {
    id: '3',
    title: 'Gaming Highlights',
    creator: 'GamePro',
    creatorAvatar: 'https://picsum.photos/seed/avatar3/100/100',
    videoUrl: 'https://picsum.photos/seed/video3/400/600',
    thumbnail: 'https://picsum.photos/seed/thumb3/400/600',
    likes: 15600,
    comments: 445,
    shares: 123,
    isLiked: false,
    duration: '1:20',
    description: 'Epic gaming moments that will blow your mind! 🎮'
  },
  {
    id: '4',
    title: 'Art Process',
    creator: 'ArtisticSoul',
    creatorAvatar: 'https://picsum.photos/seed/avatar4/100/100',
    videoUrl: 'https://picsum.photos/seed/video4/400/600',
    thumbnail: 'https://picsum.photos/seed/thumb4/400/600',
    likes: 7800,
    comments: 98,
    shares: 45,
    isLiked: true,
    duration: '3:15',
    description: 'Watch me create this beautiful painting step by step 🎨'
  },
  {
    id: '5',
    title: 'Fitness Workout',
    creator: 'FitLife',
    creatorAvatar: 'https://picsum.photos/seed/avatar5/100/100',
    videoUrl: 'https://picsum.photos/seed/video5/400/600',
    thumbnail: 'https://picsum.photos/seed/thumb5/400/600',
    likes: 11200,
    comments: 189,
    shares: 78,
    isLiked: false,
    duration: '4:00',
    description: 'Quick 4-minute workout you can do anywhere! 💪'
  }
];

export default function Feed() {
  const [feedItems, setFeedItems] = useState<FeedItem[]>(mockFeedItems);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLike = (id: string) => {
    setFeedItems(prev => prev.map(item => 
      item.id === id 
        ? { 
            ...item, 
            isLiked: !item.isLiked, 
            likes: item.isLiked ? item.likes - 1 : item.likes + 1 
          }
        : item
    ));
  };

  const handleShare = (id: string) => {
    setFeedItems(prev => prev.map(item => 
      item.id === id 
        ? { ...item, shares: item.shares + 1 }
        : item
    ));
  };

  const loadMoreItems = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    // Simulate loading more content
    setTimeout(() => {
      const newItems = mockFeedItems.map((item, index) => ({
        ...item,
        id: `${item.id}_${feedItems.length + index}`,
        likes: Math.floor(Math.random() * 20000),
        comments: Math.floor(Math.random() * 500),
        shares: Math.floor(Math.random() * 200),
        isLiked: Math.random() > 0.5
      }));
      
      setFeedItems(prev => [...prev, ...newItems]);
      setIsLoading(false);
    }, 1000);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    
    // Load more when near bottom
    if (scrollHeight - scrollTop - clientHeight < 100) {
      loadMoreItems();
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const delta = e.deltaY;
    const container = containerRef.current;
    
    if (!container) return;
    
    const itemHeight = container.clientHeight;
    const currentScroll = container.scrollTop;
    const targetScroll = currentScroll + (delta > 0 ? itemHeight : -itemHeight);
    
    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        const itemHeight = container.clientHeight;
        const currentScroll = container.scrollTop;
        const targetScroll = currentScroll + (e.key === 'ArrowDown' ? itemHeight : -itemHeight);
        
        container.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <main className="flex-1 ml-64 md:ml-64 lg:ml-64">
        <Header />
        <div className="pt-16">
          <div 
            ref={containerRef}
            className="h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide"
            onScroll={handleScroll}
            onWheel={handleWheel}
          >
            {feedItems.map((item, index) => (
              <div 
                key={item.id}
                className="h-screen snap-start flex relative"
              >
                {/* Video Background */}
                <div className="absolute inset-0 bg-black">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-black/50 rounded-full p-4 hover:bg-black/70 transition-colors"
                  >
                    {isPlaying ? (
                      <PauseIcon className="h-12 w-12 text-white" />
                    ) : (
                      <PlayIcon className="h-12 w-12 text-white" />
                    )}
                  </button>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex">
                  {/* Left side - Video info */}
                  <div className="flex-1 flex flex-col justify-end p-4 md:p-6 text-white">
                    <div className="space-y-3 md:space-y-4">
                      <h2 className="text-lg md:text-2xl font-bold leading-tight">{item.title}</h2>
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.creatorAvatar}
                          alt={item.creator}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-sm md:text-base">{item.creator}</p>
                          <p className="text-xs md:text-sm text-gray-300">{item.duration}</p>
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-gray-200 max-w-md">{item.description}</p>
                    </div>
                  </div>

                  {/* Right side - Action buttons */}
                  <div className="flex flex-col justify-end items-center space-y-4 md:space-y-6 p-4 md:p-6">
                    {/* Like Button */}
                    <div className="flex flex-col items-center space-y-1 md:space-y-2">
                      <button
                        onClick={() => handleLike(item.id)}
                        className="bg-black/50 rounded-full p-2 md:p-3 hover:bg-black/70 transition-colors"
                      >
                        {item.isLiked ? (
                          <HeartSolidIcon className="h-6 w-6 md:h-8 md:w-8 text-red-500" />
                        ) : (
                          <HeartIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                        )}
                      </button>
                      <span className="text-white text-xs md:text-sm font-semibold">
                        {item.likes.toLocaleString()}
                      </span>
                    </div>

                    {/* Comment Button */}
                    <div className="flex flex-col items-center space-y-1 md:space-y-2">
                      <button className="bg-black/50 rounded-full p-2 md:p-3 hover:bg-black/70 transition-colors">
                        <ChatBubbleLeftIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </button>
                      <span className="text-white text-xs md:text-sm font-semibold">
                        {item.comments.toLocaleString()}
                      </span>
                    </div>

                    {/* Share Button */}
                    <div className="flex flex-col items-center space-y-1 md:space-y-2">
                      <button
                        onClick={() => handleShare(item.id)}
                        className="bg-black/50 rounded-full p-2 md:p-3 hover:bg-black/70 transition-colors"
                      >
                        <ShareIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </button>
                      <span className="text-white text-xs md:text-sm font-semibold">
                        {item.shares.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Loading indicator for last item */}
                {index === feedItems.length - 1 && isLoading && (
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black/50 rounded-full px-4 py-2">
                      <div className="flex items-center space-x-2 text-white">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Loading more...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
