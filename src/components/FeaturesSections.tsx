// src/components/FeaturesSection.tsx
"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const features = [
    {
      title: "Smart Model Swap & Diversity",
      description: "Offer multiple model types, ethnicities, body types.",
      image: "/images/cothesModel.png", 
    },
    {
      title: "Background / Scene Customization",
      description: "From studio white to lifestyle backgrounds.",
      image: "/images/content1.png"
    },
    {
      title: "Video Generation", 
      description: "Turn images into short product videos.",
      video: "/gifs/Apparel.mp4"
    },
    {
      title: "Bulk API / Catalog Integration",
      description: "For large clients: batch, sync, auto-generate.",
      video: "/images/tools/product-to-video.mp4" // Fixed: changed from image to video
    },
    {
      title: "Image Enhancements / Clean-up Tools",
      description: "Background removal, noise reduction, retouching.",
      image: "/images/tools/Background-Remover.png"
    },
    {
      title: "Rights & Licensing",
      description: "Royalty-free usage, no hidden licensing fees.",
      image: "/images/tools/Image-Enhancer.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-lime-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header - Matching HeroSection Style */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium">
              Enterprise-Grade Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Powerful Features Designed for{' '}
            <span className="bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent">
              Sellers and Enterprises
            </span>
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Everything you need to create studio-quality product visuals — without the studio costs or complexity.
          </p>
        </div>

        {/* Features Grid - Matching HeroSection Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA - Matching HeroSection */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">Ready to explore all features?</p>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center shadow-md hover:shadow-lg">
            Start with 5 Free Images
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// Separate component for better video handling
const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Restart video when it ends to create seamless loop
    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {
        // Silent catch for autoplay restrictions
      });
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Handle video play on hover
  const handleMouseEnter = () => {
    if (videoRef.current && feature.video) {
      videoRef.current.play().catch(() => {
        // Silent catch for autoplay restrictions
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && feature.video) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Feature Image/Video Container */}
      <div className="relative bg-gradient-to-br from-slate-100 to-lime-100/50 rounded-xl aspect-[4/3] overflow-hidden border border-slate-200 group-hover:border-lime-300 transition-colors mb-6">
        <div className="absolute inset-0 bg-white rounded-lg overflow-hidden">
          {feature.video ? (
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
  className="w-full h-full object-fil bg-[#cac2ad] transition-transform duration-300 group-hover:scale-105"
                poster={feature.poster}
              >
                <source src={feature.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Fallback play button for mobile */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 rounded-full p-3 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          ) : (
           <Image
  src={feature.image || ""}
  alt={feature.title}
  fill
  className="object-contain transition-transform duration-300 group-hover:scale-105"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
          )}
        </div>
      </div>

      {/* Feature Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start space-x-3 mb-4">
          <div className="flex-shrink-0 w-8 h-8 bg-lime-100 text-lime-700 rounded-full flex items-center justify-center text-sm font-bold">
            {index + 1}
          </div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-lime-700 transition-colors duration-200 leading-tight">
            {feature.title}
          </h3>
        </div>
        
        <p className="text-slate-700 leading-relaxed mb-4 flex-1">
          {feature.description}
        </p>
        
        {/* Action Button - Matching HeroSection Style */}
        <div className="pt-4 border-t border-slate-100">
          <button className="text-lime-600 hover:text-lime-700 font-medium text-sm flex items-center gap-2 group/btn transition-colors duration-200">
            Learn More
            <svg 
              className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;