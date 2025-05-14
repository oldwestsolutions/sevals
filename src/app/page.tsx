import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import VideoGrid from '@/components/VideoGrid';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <main className="flex-1 ml-64">
        <Header />
        <div className="pt-16">
          <VideoGrid />
        </div>
      </main>
    </div>
  );
} 