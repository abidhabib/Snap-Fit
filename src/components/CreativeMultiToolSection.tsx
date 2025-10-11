'use client';

import React, { useState, useEffect } from 'react';

// 1. Define the exact tab names as a union type
type TabName = 
  | 'Fashion Generator'
  | 'SEO Keywords'
  | 'Clean Up'
  | 'Upscaler'
  | 'Remove Background';

// 2. Define the shape of each tab's data
interface TabDataItem {
  title: string;
  subtitle: string;
  cards: {
    productImg: string;
    videoUrl: string;
    caption: string;
  }[];
}

// 3. Define tabData with explicit typing
const tabData = {
  'Fashion Generator': {
    title: 'Fashion Generator',
    subtitle: 'Turn your modeless images into studio-quality product photos.',
    cards: [
      {
        productImg: 'https://picsum.photos/seed/fashion1/200/250',
        videoUrl: '/gifs/1.mp4',
        caption: 'Works with a wide variety of garment fits',
      },
      {
        productImg: 'https://picsum.photos/seed/fashion2/200/250',
        videoUrl: '/gifs/1.mp4',
        caption: 'Increase your brand diversity with any model',
      },
    ],
  },
  'SEO Keywords': {
    title: 'SEO Keywords',
    subtitle: 'Generate high-converting keywords for your product listings.',
    cards: [
      {
        productImg: 'https://picsum.photos/seed/seo1/200/250',
        videoUrl: '/gifs/1.mp4',
        caption: 'Optimize for search engines with AI-powered suggestions',
      },
    ],
  },
  'Clean Up': {
    title: 'Clean Up',
    subtitle: 'Remove noise, wrinkles, and imperfections from your product images.',
    cards: [
      {
        productImg: 'https://picsum.photos/seed/cleanup1/200/250',
        videoUrl: '/gifs/1.mp4',
        caption: 'Perfect for e-commerce product shots',
      },
      {
        productImg: 'https://picsum.photos/seed/cleanup2/200/250',
        videoUrl: '/gifs/1.mp4',
        caption: 'Get crisp, clean images ready for store listing',
      },
      {
        productImg: 'https://picsum.photos/seed/cleanup3/200/250',
        videoUrl: '/gifs/1.mp4',
        caption: 'Remove unwanted objects and imperfections instantly',
      },
    ],
  },
  'Upscaler': {
    title: 'Upscaler',
    subtitle: 'Enhance low-res images to 4K without losing quality.',
    cards: [
      {
        productImg: 'https://picsum.photos/seed/upscaler1/200/250',
        videoUrl: '/gifs/1.mp4',
        caption: 'Perfect for social media and print ads',
      },
      {
        productImg: 'https://picsum.photos/seed/upscaler2/200/250',
        videoUrl: '/gifs/1.mp4',
        caption: 'Preserve details while increasing resolution',
      },
      {
        productImg: 'https://picsum.photos/seed/upscaler3/200/250',
        videoUrl: '/gifs/1.mp4',
        caption: 'Scale up to 4x without quality loss',
      },
    ],
  },
  'Remove Background': {
    title: 'Remove Background',
    subtitle: 'Automatically remove backgrounds with AI precision.',
    cards: [
      {
        productImg: 'https://picsum.photos/seed/removebg1/200/250',
        videoUrl: '/gifs/1.mp4',
        caption: 'Instantly create clean product cutouts',
      },
      {
        productImg: 'https://picsum.photos/seed/removebg2/200/250',
        videoUrl: '/gifs/1.mp4',
        caption: 'Ideal for catalogs, ads, and marketplaces',
      },
      {
        productImg: 'https://picsum.photos/seed/removebg3/200/250',
        videoUrl: '/gifs/1.mp4',
        caption: 'Precise edge detection for complex products',
      },
    ],
  },
} satisfies Record<TabName, TabDataItem>; // ✅ Ensures all keys match TabName

const CreativeMultiToolSection = () => {
  // 4. Type activeTab as TabName (not just string)
  const [activeTab, setActiveTab] = useState<TabName>('Fashion Generator');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 5. Now this is type-safe!
  const currentData = tabData[activeTab];

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 400);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 to-lime-50/30">
      {/* Subtle Gradient Blobs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-lime-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-20 w-96 h-96 bg-purple-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-slate-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-500/60 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-6000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with smooth transition */}
        <div className="text-center mb-12">
          <div className="inline-block bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Refine & Elevate Your Images
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your new{' '}
            <span className="bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent">
              creative
            </span>{' '}
            multi-tool
          </h1>
          <p 
            className={`mt-4 max-w-2xl mx-auto text-slate-700 text-lg leading-relaxed transition-all duration-500 ${
              isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            {currentData.subtitle}
          </p>
        </div>

        {/* Tabs - Pill Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(Object.keys(tabData) as TabName[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab
                  ? 'bg-slate-900 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-lime-300 hover:bg-lime-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
          {currentData.cards.map((card, index) => (
            <div
              key={index}
              className={`group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] transition-all duration-500 ${
                isTransitioning 
                  ? 'opacity-0 translate-y-8 scale-95' 
                  : 'opacity-100 translate-y-0 scale-100'
              }`}
              style={{
                transitionDelay: isTransitioning ? '0ms' : `${index * 100}ms`
              }}
            >
              <div className="relative bg-gradient-to-br from-slate-100 to-lime-100/50 rounded-xl aspect-video overflow-hidden border border-slate-200 group-hover:border-lime-300 transition-all duration-300 shadow-lg group-hover:shadow-xl mb-4 group-hover:scale-[1.02]">
                <video
                  key={`${activeTab}-${index}`}
                  src={card.videoUrl}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loop
                  muted
                  autoPlay
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    className="bg-slate-900/80 p-3 rounded-full text-white hover:bg-slate-900 transition-all duration-300 shadow-lg transform hover:scale-110"
                    onClick={(e) => {
                      const video = e.currentTarget.parentElement?.parentElement?.querySelector('video') as HTMLVideoElement | null;
                      if (video) {
                        video.muted = false;
                        video.play();
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed text-center transition-all duration-300">{card.caption}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 15s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
      `}</style>
    </section>
  );
};

export default CreativeMultiToolSection;