'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// You have 6 image pairs — we'll duplicate to fill 16
const imagePairs = [
  { before: '/images/Slider/1-before.jpg', after: '/images/Slider/1-after.jpg' },
  { before: '/images/Slider/2-before.jpg', after: '/images/Slider/2-after.jpg' },
  { before: '/images/Slider/3-before.jpg', after: '/images/Slider/3-after.jpg' },
  { before: '/images/Slider/4-before.jpg', after: '/images/Slider/4-after.jpg' },
  { before: '/images/Slider/5-before.jpg', after: '/images/Slider/5-after.jpg' },
  { before: '/images/Slider/6-before.jpg', after: '/images/Slider/6-after.jpg' },
];

// Generate 16 items by repeating the 6 pairs
const generateGalleryItems = () => {
  const items = [];
  for (let i = 0; i < 16; i++) {
    items.push(imagePairs[i % imagePairs.length]);
  }
  return items;
};

const ProductCatalogGrid = () => {
  const [activeTab, setActiveTab] = useState('Flat Lay');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Tabs data
  const tabs = ['Flat Lay', 'Ghost Mannequin', 'Mannequin', 'Hanger'];

  // Generate gallery for each tab (same content for now)
  const tabContent = {
    'Flat Lay': generateGalleryItems(),
    'Ghost Mannequin': generateGalleryItems(),
    'Mannequin': generateGalleryItems(),
    'Hanger': generateGalleryItems(),
  };

  const currentGallery = tabContent[activeTab];

  // Trigger transition animation when tab changes
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 400);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 to-lime-50/30">
      {/* Subtle Gradient Blobs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-lime-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-20 w-96 h-96 bg-green-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-slate-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-300/15 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-6000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Update your <span className="bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent">whole</span> product catalogue
          </h2>
          <p className="text-slate-600 text-sm md:text-base">Transform your entire inventory with just a few clicks</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
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

        {/* Image Grid - Responsive 2 Rows x 8 Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 max-w-7xl mx-auto">
          {currentGallery.map((item, index) => (
            <div
              key={index}
              className={`group relative aspect-square overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-lime-300 ${
                isTransitioning 
                  ? 'opacity-0 scale-95' 
                  : 'opacity-100 scale-100'
              }`}
              style={{
                transitionDelay: isTransitioning ? '0ms' : `${(index % 8) * 50}ms`
              }}
            >
              {/* "After" Image (Large) */}
              <div className="relative w-full h-full">
                <Image
                  src={item.after}
                  alt="After transformation"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 12.5vw"
                />
              </div>

              {/* "Before" Image (Small Overlay) - Bottom Right */}
              <div className="absolute bottom-2 right-2 w-10 h-10 sm:w-12 sm:h-12 bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-slate-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={item.before}
                  alt="Before transformation"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Hover Label */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-medium">Before → After</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-10">
          <p className="text-slate-600 text-sm">
            ✨ Transform <span className="font-semibold text-slate-900">16+ images</span> in seconds
          </p>
        </div>
      </div>

      {/* Blob animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 15s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </section>
  );
};

export default ProductCatalogGrid;