import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
          Stop Losing Sales to Bad Product Images{" "}
          <span className="bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent">
            Extraordinary Sales Drivers
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-800 mb-8 max-w-3xl mx-auto">
          Upload your product → pick a model → get instant, royalty-free images and videos. Scalable for startups to enterprises.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center">
            Start Free Trial
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Product Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 shadow-md shadow-white p-4 gap-8 mb-16">
          {/* Upload Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-left text-slate-900">Upload your product</h3>
            <p className="mb-6 text-left text-slate-800">Flat-lay, mannequin, or packshot - SnapFit accepts all.</p>
            <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg aspect-[3/4] flex flex-col p-4">
              <div className="relative flex-1 w-full bg-white/70 backdrop-blur-sm border border-white/60 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/upload-image.png"
                  alt="Upload your product"
                  fill
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>

          {/* Style Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-left text-slate-900">Customize the Shoot</h3>
            <p className="mb-6 text-left text-slate-800">Pick your model, pose, and background - or let AI auto-style it.</p>
            <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg aspect-[3/4] flex flex-col p-4">
              <div className="relative flex-1 w-full bg-white/70 backdrop-blur-sm border border-white/60 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/image-on-model.png" 
                  alt="Style the Scene"
                  fill
                  className="object-contain p-6" 
                />
              </div>
            </div>
          </div>

          {/* Create & Share Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-left text-slate-900">Generate & Download</h3>
            <p className="mb-6 text-left text-slate-800">Get studio-quality images and videos in seconds. Perfectly sized for e-commerce platforms.</p>
            <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg aspect-[3/4] flex flex-col p-4">
              <div className="relative flex-1 w-full bg-white/70 backdrop-blur-sm border border-white/60 rounded-lg overflow-hidden shadow-lg">
                <video
                  muted
                  autoPlay
                  loop
                  className="w-full h-full object-contain p-6"
                >
                  <source src="/gifs/Apparel.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
