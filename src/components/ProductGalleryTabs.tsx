'use client';

import React, { useState, useEffect } from 'react';

const ProductGalleryTabs = () => {
  const [activeTab, setActiveTab] = useState('Bags');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Mock data per tab — now using same video for all
  const tabData = {
    Apparel: {
      uploadImg: 'https://picsum.photos/seed/apparel1/500/600',
      styledImg: 'https://picsum.photos/seed/apparel2/600/700',
      videoUrl: '/gifs/1.mp4',
    },
    Bags: {
      uploadImg: 'https://picsum.photos/seed/bag1/500/600',
      styledImg: 'https://picsum.photos/seed/bag2/600/700',
      videoUrl: '/gifs/1.mp4',
    },
    Accessories: {
      uploadImg: 'https://picsum.photos/seed/accessory1/500/600',
      styledImg: 'https://picsum.photos/seed/accessory2/600/700',
      videoUrl: '/gifs/1.mp4',
    },
    Furniture: {
      uploadImg: 'https://picsum.photos/seed/furniture1/500/600',
      styledImg: 'https://picsum.photos/seed/furniture2/600/700',
      videoUrl: '/gifs/1.mp4',
    },
  };

  const currentData = tabData[activeTab];

  // Trigger transition animation when tab changes
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 400);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Tabs - Responsive with horizontal scroll on mobile */}
      <div className="relative mb-12 lg:mb-16">
        <div className="flex overflow-x-auto pb-2 hide-scrollbar space-x-6 md:space-x-8 md:justify-center">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-2 py-2 text-base font-medium whitespace-nowrap transition-colors duration-300 ${
                activeTab === tab ? 'text-black' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300 ease-in-out ${
                  activeTab === tab ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Main Gallery Grid - Responsive stacking */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-start">
          
          {/* Left: Upload Your Product */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2">Upload your product</h3>
            <p className="text-gray-500 text-sm mb-4 md:mb-6">One image is all it takes.</p>
            <div className={`relative overflow-hidden rounded-xl aspect-[4/5] md:aspect-[3/4] transition-opacity duration-400 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              <img
                src={currentData.uploadImg}
                alt="Uploaded product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center: Style the Scene */}
          <div className="text-center lg:text-left">
            <div className={`relative overflow-hidden rounded-xl aspect-[4/5] md:aspect-[3/4] mb-4 md:mb-6 transition-opacity duration-400 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              <img
                src={currentData.styledImg}
                alt="Styled scene"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Style the Scene</h3>
            <p className="text-gray-500 text-sm">Describe your model, style, and background.</p>
          </div>

          {/* Right: Create & Share (Video) */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2">Create & Share</h3>
            <p className="text-gray-500 text-sm mb-4 md:mb-6">
              Get eye-catching photos and videos in minutes, and it's ready for any platform!
            </p>
            <div className={`relative overflow-hidden rounded-xl aspect-[4/5] md:aspect-[3/4] group transition-opacity duration-400 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              {/* Video Player - Muted, Looping, No Controls */}
              <video
                src={currentData.videoUrl}
                className="w-full h-full object-cover"
                loop
                muted
                autoPlay
                playsInline
              />
              
              {/* Play Button Overlay - Appears on Hover/Touch */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:bg-black/20">
                <button 
                  className="bg-black/60 p-2 md:p-3 rounded-full text-white hover:bg-black/80 transition-colors transform hover:scale-105"
                  onClick={(e) => {
                    const video = e.currentTarget.parentElement?.querySelector('video');
                    if (video) {
                      video.muted = false;
                      video.play();
                    }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar for mobile tabs */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProductGalleryTabs;