import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-lime-50/30">
      <div className="container mx-auto px-4">
        
        {/* Section 1: Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Stop Losing Sales to Bad Product Images
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Upload your product → pick a model → get instant, royalty-free images and videos. Scalable for startups to enterprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <button
              type="button"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Get Started – Free Credits
              <ArrowRight className="w-5 h-5 ml-3" />
            </button>

            {/* Secondary CTA */}
            <button
              type="button"
              className="bg-transparent border border-slate-900 text-slate-900 hover:bg-slate-50 px-8 py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center"
            >
              Book API Demo
            </button>
          </div>
        </div>

        {/* Section 2: 3 Steps */}
        <div className="text-center mb-12">
          <div className="inline-block bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            From Upload to Photoshoot in Just 3 Steps
          </div>
        </div>

      {/* Steps Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
  
  {/* Step 1: Upload Your Product */}
  <div className="group">
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="text-center mb-6 flex-1">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-lime-100 text-lime-700 rounded-full font-bold text-lg mb-4">
          1
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-900">Upload Your Product</h3>
        <p className="text-slate-700 leading-relaxed">
          Flat-lay, mannequin, or packshot - SnapFit accepts all.
        </p>
      </div>
      <div className="relative bg-gradient-to-br from-slate-100 to-lime-100/50 rounded-xl aspect-[3/4] overflow-hidden border border-slate-200 group-hover:border-lime-300 transition-colors">
        <div 
>
          <Image
            src="/images/upload-image.png"
            alt="Upload your product"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Step 2: Customize the Shoot */}
  <div className="group">
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="text-center mb-6 flex-1">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-lime-100 text-lime-700 rounded-full font-bold text-lg mb-4">
          2
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-900">Customize the Shoot</h3>
        <p className="text-slate-700 leading-relaxed">
          Pick your model, pose, and background - or let AI auto-style it.
        </p>
      </div>
      <div className="relative bg-gradient-to-br from-slate-100 to-lime-100/50 rounded-xl aspect-[3/4] overflow-hidden border border-slate-200 group-hover:border-lime-300 transition-colors">
        <div
         >
          <Image 
            src="/images/image-on-model.png" 
            alt="Customize the photoshoot"
            fill
            className="object-fill  transition-transform duration-300 group-hover:scale-105" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Step 3: Generate & Download */}
  <div className="group">
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="text-center mb-6 flex-1">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-lime-100 text-lime-700 rounded-full font-bold text-lg mb-4">
          3
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-900">Generate & Download</h3>
        <p className="text-slate-700 leading-relaxed">
          Get studio-quality images and videos in seconds. Perfectly sized for e-commerce platforms.
        </p>
      </div>
      <div className="relative bg-gradient-to-br from-slate-100 to-lime-100/50 rounded-xl aspect-[3/4] overflow-hidden border border-slate-200 group-hover:border-lime-300 transition-colors">
        <div 
        >
          <div className="relative w-full h-full">
            <video
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cove transition-transform duration-300 group-hover:scale-105"
            >
              <source src="/gifs/Apparel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        {/* Step Progress Indicator */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-lime-600 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700">Upload</span>
          </div>
          <div className="w-8 h-0.5 bg-lime-300"></div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-lime-600 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700">Customize</span>
          </div>
          <div className="w-8 h-0.5 bg-lime-300"></div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-lime-600 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700">Download</span>
          </div>
        </div>

        {/* Section 2 CTA */}
        <div className="text-center">
          <button
            type="button"
            className="bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl mx-auto"
          >
            Try It Now – Free 5 Images
            <ArrowRight className="w-5 h-5 ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;