// src/components/BeforeAfterShowcase.tsx
'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

const BeforeAfterShowcase = () => {
  const examples = [
    {
      vertical: 'Fashion',
      before: '/images/before-after/fashion-before.jpg',
      after: '/images/before-after/fashion-after.jpg',
    },
    {
      vertical: 'Accessories',
      before: '/images/before-after/accessory-before.jpg',
      after: '/images/before-after/accessory-after.jpg',
    },
    {
      vertical: 'Home Goods',
      before: '/images/before-after/home-before.jpg',
      after: '/images/before-after/home-after.jpg',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth animation for random position
  const animateToRandomPosition = useCallback(() => {
    setIsAnimating(true);
    const randomPos = Math.floor(Math.random() * 80) + 10; // 10-90%
    
    let startTime: number;
    const startPos = position;
    const duration = 800; // ms
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const newPos = startPos + (randomPos - startPos) * easeOutQuart;
      
      setPosition(newPos);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };
    
    requestAnimationFrame(animate);
  }, [position]);

  // Mouse/touch handlers with better UX
  const handleInteractionStart = useCallback((clientX: number) => {
    setIsDragging(true);
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const x = clientX - container.left;
      const pct = (x / container.width) * 100;
      setPosition(Math.max(0, Math.min(100, pct)));
    }
  }, []);

  const handleInteractionMove = useCallback((clientX: number) => {
    if (isDragging && containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const x = clientX - container.left;
      const pct = (x / container.width) * 100;
      setPosition(Math.max(0, Math.min(100, pct)));
    }
  }, [isDragging]);

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleInteractionStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleInteractionMove(e.clientX);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches[0]) {
      handleInteractionStart(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleInteractionMove(e.touches[0].clientX);
    }
  };

  // Global event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) handleInteractionMove(e.clientX);
    };

    const handleGlobalMouseUp = () => {
      handleInteractionEnd();
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleInteractionMove(e.touches[0].clientX);
      }
    };

    const handleGlobalTouchEnd = () => {
      handleInteractionEnd();
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
      document.addEventListener('touchend', handleGlobalTouchEnd);
      
      // Prevent text selection and blue highlight
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchmove', handleGlobalTouchMove);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
      
      // Restore text selection
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
    };
  }, [isDragging, handleInteractionMove, handleInteractionEnd]);

  const currentExample = examples[activeIndex];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white select-none">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See the{' '}
            <span className="bg-gradient-to-r from-lime-600 to-blue-600 bg-clip-text text-transparent">
              SnapFit Difference
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Drag the slider to compare original and enhanced images
          </p>
        </div>

        {/* Vertical Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {examples.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setPosition(50);
              }}
              className={`px-6 py-3 text-base font-medium rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-lime-600 text-white shadow-lg shadow-lime-600/25'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              {item.vertical}
            </button>
          ))}
        </div>

        {/* Before-After Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Randomize Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={animateToRandomPosition}
              disabled={isAnimating}
              className="px-6 py-3 bg-gradient-to-r from-lime-500 to-lime-600 text-white font-medium rounded-full shadow-lg shadow-lime-500/25 hover:shadow-xl hover:shadow-lime-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnimating ? 'Revealing...' : 'Surprise Me!'}
            </button>
          </div>

          {/* Slider Container */}
          <div
            ref={containerRef}
            className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-300/50 cursor-ew-resize bg-gray-100"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleInteractionEnd}
          >
            {/* Before Image with Dusty Effect */}
            <div className="absolute inset-0">
              <img
                src={currentExample.before}
                alt="Before"
                className="w-full h-full object-cover"
              />
              {/* Dusty/Noise Overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4wMiIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay" />
            </div>

            {/* After Image with Clean Look */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
              }}
            >
              <img
                src={currentExample.after}
                alt="After"
                className="w-full h-full object-cover"
              />
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30" />
            </div>

            {/* Divider Line with Glow Effect */}
            <div
              className="absolute top-0 bottom-0 w-0.5 z-20"
              style={{ left: `${position}%` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-y-0 left-1/2 w-8 -ml-4 bg-blue-400/20 blur-xl" />
              
              {/* Main line */}
              <div className="absolute inset-y-0 left-1/2 w-0.5 -ml-0.5 bg-white/90 shadow-lg" />
            </div>

            {/* Handle */}
            <div
              className={`absolute top-1/2 z-30 w-12 h-12 -ml-6 -mt-6 bg-white rounded-full shadow-2xl border border-gray-200 flex items-center justify-center cursor-ew-resize transition-transform duration-150 ${
                isDragging ? 'scale-110 shadow-2xl' : 'scale-100'
              }`}
              style={{ left: `${position}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* Handle arrows */}
              <div className="flex space-x-0.5">
                <div className="w-1 h-3 bg-gray-400 rounded-full" />
                <div className="w-1 h-3 bg-gray-400 rounded-full" />
                <div className="w-1 h-3 bg-gray-400 rounded-full" />
              </div>
            </div>

            {/* Labels with better styling */}
            <div className="absolute top-4 left-4 bg-black/70 text-white text-sm px-3 py-2 rounded-full backdrop-blur-sm font-medium">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-2 rounded-full backdrop-blur-sm font-medium">
              After
            </div>

            {/* Position Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-2 rounded-full backdrop-blur-sm font-mono">
              {Math.round(position)}%
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-4 text-gray-500 text-sm">
            ← Drag or click the handle to compare • Click "Surprise Me" for random reveal →
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;