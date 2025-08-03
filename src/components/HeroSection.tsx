import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="py-16 s ">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
          Turn Ordinary Product Photos into{" "}
          <span className="bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent">
            Extraordinary Sales Drivers
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-800 mb-8 max-w-3xl mx-auto">
          Stop letting mediocre images hurt your sales. SnapFit uses AI to effortlessly create stunning, high-converting 
          product visuals that can boost your conversions by up to 20%.
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
            <p className="mb-6 text-left text-slate-800">One image is all it takes.</p>
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
                <h3 className="text-xl font-bold mt-4 text-left text-slate-900">Style the Scene</h3>
            <p className="mb-6 text-left text-slate-800">Describe your model, style, and background.</p>
          </div>

          {/* Create & Share Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-left text-slate-900">Create & Share</h3>
            <p className="mb-6 text-left text-slate-800">Get eye-catching photos and videos in minutes, and {"it's "}ready for any platform!</p>
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