import React from 'react';
import Image from 'next/image';

interface VideoCard {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: string;
  timestamp: string;
}

const mockVideos: VideoCard[] = [
  {
    id: '1',
    title: 'Building a YouTube Clone with Next.js and TypeScript',
    thumbnail: 'https://picsum.photos/seed/1/320/180',
    channel: 'Tech Channel',
    views: '1.2M views',
    timestamp: '3 days ago'
  },
  {
    id: '2',
    title: 'Learn TypeScript in 2024',
    thumbnail: 'https://picsum.photos/seed/2/320/180',
    channel: 'Coding Master',
    views: '500K views',
    timestamp: '1 week ago'
  },
  {
    id: '3',
    title: 'Next.js 14 Crash Course',
    thumbnail: 'https://picsum.photos/seed/3/320/180',
    channel: 'Web Dev Pro',
    views: '800K views',
    timestamp: '2 weeks ago'
  },
  {
    id: '4',
    title: 'Modern React Patterns',
    thumbnail: 'https://picsum.photos/seed/4/320/180',
    channel: 'React Master',
    views: '2.1M views',
    timestamp: '1 month ago'
  },
  {
    id: '5',
    title: 'Advanced CSS Techniques',
    thumbnail: 'https://picsum.photos/seed/5/320/180',
    channel: 'CSS Wizard',
    views: '950K views',
    timestamp: '5 days ago'
  },
  {
    id: '6',
    title: 'Building REST APIs with Node.js',
    thumbnail: 'https://picsum.photos/seed/6/320/180',
    channel: 'Backend Pro',
    views: '1.5M views',
    timestamp: '2 weeks ago'
  },
  {
    id: '7',
    title: 'Docker for Developers',
    thumbnail: 'https://picsum.photos/seed/7/320/180',
    channel: 'DevOps Expert',
    views: '750K views',
    timestamp: '3 weeks ago'
  },
  {
    id: '8',
    title: 'GraphQL vs REST',
    thumbnail: 'https://picsum.photos/seed/8/320/180',
    channel: 'API Master',
    views: '1.8M views',
    timestamp: '1 month ago'
  },
  {
    id: '9',
    title: 'Web Security Best Practices',
    thumbnail: 'https://picsum.photos/seed/9/320/180',
    channel: 'Security Pro',
    views: '2.3M views',
    timestamp: '2 months ago'
  },
  {
    id: '10',
    title: 'Building Microservices',
    thumbnail: 'https://picsum.photos/seed/10/320/180',
    channel: 'Architecture Expert',
    views: '1.1M views',
    timestamp: '3 weeks ago'
  },
  {
    id: '11',
    title: 'Advanced JavaScript Patterns',
    thumbnail: 'https://picsum.photos/seed/11/320/180',
    channel: 'JS Master',
    views: '1.6M views',
    timestamp: '1 month ago'
  },
  {
    id: '12',
    title: 'Cloud Computing Basics',
    thumbnail: 'https://picsum.photos/seed/12/320/180',
    channel: 'Cloud Expert',
    views: '900K views',
    timestamp: '2 weeks ago'
  }
];

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {mockVideos.map((video) => (
        <div key={video.id} className="flex flex-col cursor-pointer hover:scale-[1.02] transition-transform duration-200">
          <div className="relative aspect-video mb-2 rounded-xl overflow-hidden">
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-medium text-sm line-clamp-2">{video.title}</h3>
            <p className="text-gray-400 text-sm">{video.channel}</p>
            <div className="flex text-gray-400 text-sm">
              <span>{video.views}</span>
              <span className="mx-1">•</span>
              <span>{video.timestamp}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid; 