import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const features = [
    {
      title: "Diversified Fashion Model Database",
      description: "Discover the industry's most diverse AI fashion models - representing all body types, ethnicities, and generations.",
      image: "/images/cothesModel.png", 
    },
    {
      title: "Accessories to Video",
      description: "Transform 2D product images into interactive 3D models with AI-powered depth reconstruction.",
      video: "/gifs/image-to-video.mp4"
    },
    {
      title: "Background Remover", 
      description: "Remove unwanted backgrounds from images effortlessly.",
      image: "/images/tools/Background-Remover.png"
    },
    {
      title: "Model Photo to Video",
      description: "Generate engaging videos from static model photos, bringing your products to life.",
      image: "/images/tools/clothes-to-model.png"
    },
    {
      title: "Image Enhancer",
      description: "Improve lighting, sharpness, and resolution to create platform-ready, high-quality images.",
      image: "/images/tools/Image-Enhancer.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Ever Growing{' '}
            <span className="bg-gradient-to-r from-lime-600 to-blue-600 bg-clip-text text-transparent">
              AI Toolkit
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            More than just model shots—SellerPic offers a full suite of AI-powered tools to handle every aspect of your product visuals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2"
            >
              {/* Feature Image or Video */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                {feature.video ? (
                  // Auto-playing video
                  <div className="relative h-full">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    >
                      <source src={feature.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ) : (
                  // Regular image
                  <div className="relative h-full group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={feature.image || ""}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
              </div>

              {/* Feature Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-lime-600 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Action Button */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-lime-600 font-medium text-sm hover:text-purple-700 flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Removed as per your code */}
      </div>
    </section>
  );
};

export default FeaturesSection;