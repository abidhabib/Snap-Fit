// src/components/FeaturesSection.tsx
import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const features = [
    {
      title: "Smart Model Swap & Diversity",
      description: "Offer multiple model types, ethnicities, body types.",
      image: "/images/model1.png", 
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
      image: "/images/tools/product-to-video.mp4"
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
            <div
              key={feature.title}
              className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              {/* Feature Image/Video Container */}
              <div className="relative bg-gradient-to-br from-slate-100 to-lime-100/50 rounded-xl aspect-[4/3] overflow-hidden border border-slate-200 group-hover:border-lime-300 transition-colors mb-6">
                <div className="absolute inset-4 bg-white rounded-lg shadow-sm overflow-hidden">
                  {feature.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    >
                      <source src={feature.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={feature.image || ""}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
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
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default FeaturesSection;