'use client';

import React from 'react';

const BeforeAfterShowcase = () => {
  const beforeImages = [
    'IMG-20251010-WA0005.jpg',
    'IMG-20251010-WA0007.jpg',
    'IMG-20251010-WA0009.jpg',
    'IMG-20251010-WA0011.jpg',
    'IMG-20251010-WA0013.jpg',
    'IMG-20251010-WA0015.jpg'
  ];

  const afterImages = [
    'IMG-20251010-WA0006.jpg',
    'IMG-20251010-WA0008.jpg',
    'IMG-20251010-WA0010.jpg',
    'IMG-20251010-WA0012.jpg',
    'IMG-20251010-WA0014.jpg',
    'IMG-20251010-WA0016.jpg'
  ];

  const itemNames = ["Aurora", "Vesper", "Kairo", "Lumen", "Riven", "Nexa"];
  const numPairs = beforeImages.length;
  const loopedBefore = [...beforeImages, ...beforeImages];
  const loopedAfter = [...afterImages, ...afterImages];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-purple-100/50 to-purple-200/40">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Watch the{' '}
          <span className="text-center text-4xl font-extrabold italic bg-gradient-to-r from-purple-700 to-lime-500 bg-clip-text text-transparent">
            SnapFit Transformation
          </span>
        </h2>
        <p className="mt-2 max-w-xl mx-auto text-gray-700">
          See our products come to life — from display to perfect fit.
        </p>
      </div>

      {/* Main container with proper z-index layers */}
      <div className="relative flex justify-center items-center h-[300px] rounded-2xl">
        
        {/* LEFT SIDE - Goes UNDER the divider */}
        <div className="absolute left-0 w-1/2 h-full overflow-hidden z-10">
          {/* Background Slow Layer */}
          <div className="absolute inset-0 opacity-30 blur-sm">
            <div className="flex h-full animate-slide-slow before-after-slider">
              {loopedBefore.map((src, idx) => (
                <div key={`bg-before-${idx}`} className="before-after-item">
                  <img
                    src={`/images/Slider/${src}`}
                    alt=""
                    className="object-cover w-full h-full rounded-2xl border-4 border-white"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Foreground Fast Layer */}
          <div className="relative flex h-full animate-slide-fast before-after-slider">
            {loopedBefore.map((src, idx) => {
              const name = itemNames[idx % numPairs];
              return (
                <div key={`before-${idx}`} className="before-after-item relative">
                  <img
                    src={`/images/Slider/${src}`}
                    alt={`Product ${name}`}
                    className="object-cover w-full h-full rounded-2xl border-4 border-white"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-2xl" />
                  <div className="absolute bottom-3 left-3 text-white flex flex-col leading-tight z-10">
                    <p className="text-[10px] tracking-wider mb-1 font-semibold opacity-90">
                      UPLOAD BY
                    </p>
                    <span className="text-sm font-medium px-2 rounded-full border border-white/40 backdrop-blur-sm bg-black/30 w-fit">
                      {name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CENTER DIVIDER - Middle z-index */}
        <div
          className="absolute -top-5 left-1/2 -translate-x-1/2 w-16 h-64 rounded-tl-full rounded-br-full bg-gradient-to-b from-purple-200/80 via-purple-400/50 to-purple-600/40 shadow-2xl z-20"
          style={{
            boxShadow: '0 0 25px 8px rgba(147, 51, 234, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.3)',
          }}
        />

        {/* RIGHT SIDE - Goes OVER the divider */}
        <div className="absolute right-0 w-1/2 h-full overflow-hidden z-30">
          {/* Background Slow Layer */}
          <div className="absolute inset-0 opacity-30 blur-sm">
            <div className="flex h-full animate-slide-slow before-after-slider">
              {loopedAfter.map((src, idx) => (
                <div key={`bg-after-${idx}`} className="before-after-item">
                  <img
                    src={`/images/Slider/${src}`}
                    alt=""
                    className="object-cover w-full h-full rounded-2xl border-4 border-white"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Foreground Fast Layer */}
          <div className="relative flex h-full animate-slide-fast before-after-slider">
            {loopedAfter.map((src, idx) => {
              const name = itemNames[idx % numPairs];
              return (
                <div key={`after-${idx}`} className="before-after-item relative">
                  <img
                    src={`/images/Slider/${src}`}
                    alt={`Model ${name}`}
                    className="object-cover w-full h-full rounded-2xl border-4 border-white"
                  />
                  <div className="absolute inset-0 bg-black/15 rounded-2xl" />
                  <div className="absolute bottom-3 left-3 text-white flex flex-col leading-tight z-10">
                    <p className="text-[10px] tracking-wider mb-1 font-semibold opacity-90">
                      UPLOAD BY
                    </p>
                    <span className="text-sm font-medium px-2 rounded-full border border-white/40 backdrop-blur-sm bg-black/30 w-fit">
                      {name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fade Edges */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-purple-100 to-transparent z-40" />
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-purple-100 to-transparent z-40" />
      </div>

      <style jsx>{`
        .before-after-item {
          width: 100px;
          height: 160px;
          margin: 0 6px;
          flex: 0 0 auto;
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }

        @media (min-width: 640px) {
          .before-after-item {
            width: 120px;
            height: 180px;
          }
        }

        @media (min-width: 768px) {
          .before-after-item {
            width: 140px;
            height: 200px;
          }
        }

        .before-after-slider {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        @keyframes slide-fast {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes slide-slow {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide-fast {
          animation: slide-fast 40s linear infinite;
        }

        .animate-slide-slow {
          animation: slide-slow 90s linear infinite;
        }

        .before-after-slider:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BeforeAfterShowcase;