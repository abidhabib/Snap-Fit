"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const InspirationGallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Main Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Skip the shoots. Just upload.{' '}
            <span className="bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent">
              Hassle-free.
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Instantly generate model-on-image shots without hiring anyone or booking a studio.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2-[1fr_2fr]  gap-8 mb-20">
          {/* Swap Models Feature */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Add Cothes To Models Instantly
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cut down on expenses associated with traditional modeling fees and image rights, 
                  making your marketing budget go further.
                </p>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Button>
              </div>
              <div className="relative">
                <div className="relative group">
                 <Image
                      src="/images/model.png"
                      alt="Product"
                      width={400}
                      height={400}
                      className=" "
                    />
                 
                 
                </div>
              </div>
            </div>
          </div>

          {/* Add Models Feature */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8  border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Add Models to Product Photos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                No need for elaborate photoshoots—easily incorporate models into your current product images.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-3 end-0">
              {[
                '/images/model1.png',
                '/images/model2.png',
                '/images/model3.png',
                '/images/model4.png'
              ].map((src, index) => (
                <div 
                  key={index} 
                  className="relative group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Image
                    src={src}
                    width={1000}
                    height={1000}
                    alt={`Model ${index + 1}`}
                    className="w-full aspect-square object-contain rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl animate-fade-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Marketing Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ready-to-share marketing videos.{' '}
              <span className="bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent">
                Lightning-fast.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Instantly generate model-on-image shots without hiring anyone or booking a studio.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Transform static images into short videos
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Easily convert still images into high-quality, dynamic videos without any hassle, 
                  bringing your products to life.
                </p>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Button>
              </div>
              <div className="relative">
                <div className="relative group">
                 <video
                 muted
                 loop
                 autoPlay
                 className='w-66 h-66 rounded-2xl object-cover'
                 >
                  <source src="/gifs/image-to-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                 </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  </div>
            
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default InspirationGallery;