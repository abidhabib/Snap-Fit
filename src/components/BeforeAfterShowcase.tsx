'use client';

import Image from 'next/image';
import { useState, useRef, useCallback, useEffect } from 'react';

// Define typesx
interface ExampleItem {
  before: string;
  after: string;
  name: string;
}

interface BeforeAfterCardProps {
  item: ExampleItem;
  index: number;
}

const BeforeAfterShowcase = () => {
  const examples: ExampleItem[] = [
    {
      before: '/images/Slider/IMG-20251010-WA0005.jpg',
      after: '/images/Slider/IMG-20251010-WA0006.jpg',
      name: 'Summer Dress'
    },
    {
      before: '/images/Slider/IMG-20251010-WA0007.jpg',
      after: '/images/Slider/IMG-20251010-WA0008.jpg',
      name: 'Casual Tee'
    },
    {
      before: '/images/Slider/IMG-20251010-WA0009.jpg',
      after: '/images/Slider/IMG-20251010-WA0010.jpg',
      name: 'Evening Gown'
    },
    {
      before: '/images/Slider/IMG-20251010-WA0011.jpg',
      after: '/images/Slider/IMG-20251010-WA0012.jpg',
      name: 'Office Wear'
    },
    {
      before: '/images/Slider/IMG-20251010-WA0013.jpg',
      after: '/images/Slider/IMG-20251010-WA0014.jpg',
      name: 'Sports Outfit'
    },
    {
      before: '/images/Slider/IMG-20251010-WA0015.jpg',
      after: '/images/Slider/IMG-20251010-WA0016.jpg',
      name: 'Beach Wear'
    },
  ];

  const BeforeAfterCard = ({ item, index }: BeforeAfterCardProps) => {
    const [position, setPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleInteractionStart = useCallback((clientX: number) => {
      setIsDragging(true);
      if (containerRef.current) {
        const container = containerRef.current.getBoundingClientRect();
        const x = clientX - container.left;
        const pct = (x / container.width) * 100;
        setPosition(Math.max(0, Math.min(100, pct)));
      }
    }, []);

    const handleInteractionMove = useCallback(
      (clientX: number) => {
        if (isDragging && containerRef.current) {
          const container = containerRef.current.getBoundingClientRect();
          const x = clientX - container.left;
          const pct = (x / container.width) * 100;
          setPosition(Math.max(0, Math.min(100, pct)));
        }
      },
      [isDragging]
    );

    const handleInteractionEnd = useCallback(() => {
      setIsDragging(false);
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
      e.preventDefault();
      handleInteractionStart(e.clientX);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
      e.preventDefault();
      if (e.touches[0]) {
        handleInteractionStart(e.touches[0].clientX);
      }
    };

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
        document.body.style.userSelect = 'none';
      }

      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
        document.removeEventListener('touchmove', handleGlobalTouchMove);
        document.removeEventListener('touchend', handleGlobalTouchEnd);
        document.body.style.userSelect = '';
      };
    }, [isDragging, handleInteractionMove, handleInteractionEnd]);

    return (
      <div className="group flex-shrink-0 w-[180px] md:w-[200px] flex flex-col items-center">
        {/* Card Container — light purple faded bg ONLY here */}
        <div className="transition-all duration-300 border border-purple-100/40 hover:border-purple-200/60 w-full">
          {/* Before/After Slider Container */}
          <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg">
            <div
              ref={containerRef}
              className="relative w-full aspect-[3/4] cursor-ew-resize"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* Dark overlay for better contrast */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none z-10" />

              {/* Before Image (Product) */}
              <div className="absolute inset-0">
                <Image
                  src={item.before}
                  alt="Product"
                  fill
                  sizes="(max-width: 768px) 180px, 200px"
                  priority={index < 2}
                />
              </div>

              <div
                className="absolute inset-0"
                style={{
                  clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
                }}
              >
                <Image
                  src={item.after}
                  alt="Model wearing product"
                  fill
                  className="object-contain" // ✅ fixed from 'object-fit'
                  sizes="(max-width: 768px) 180px, 200px"
                  priority={index < 2}
                />
              </div>

              {/* Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 z-20"
                style={{ left: `${position}%` }}
              >
                <div className="absolute inset-y-0 left-1/2 w-0.5 -ml-0.5 bg-gray-100 shadow-md" />
              </div>

              {/* Handle */}
              <div
                className={`absolute top-1/2 z-30 w-6 h-6 -ml-3 -mt-3 bg-purple-500 rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing transition-all duration-200 ${
                  isDragging ? 'scale-110' : 'hover:bg-purple-600'
                }`}
                style={{ left: `${position}%` }}
              >
                <div className="flex space-x-0.5 transform rotate-90">
                  <div className="w-0.5 h-1 bg-white rounded-full" />
                  <div className="w-0.5 h-1 bg-white rounded-full" />
                </div>
              </div>

              {/* Label + Button */}
              <div className="absolute bottom-2 left-2 z-30 flex flex-col items-start space-y-1">
                <span className="text-white text-xs font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                  {item.name}
                </span>
                <button
                  className="px-2 py-1 text-[10px] font-medium text-white rounded-full 
                            backdrop-blur-sm bg-white/10 border border-white/20 
                            hover:bg-white/20 active:bg-white/30 transition-all duration-200
                            shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-6 px-4">
      <div className="max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See the{' '}
            <span className="bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent">
              SnapFit Difference
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Drag the slider to compare original and enhanced images
          </p>
        </div>

        {/* ✅ Light purple background ONLY on carousel container */}
        <div className="flex justify-center gap-4 md:gap-6 overflow-x-auto scrollbar-hide p-16 bg-gradient-to-br from-purple-50/60 to-purple-100/40 rounded-2xl">
          {examples.map((item, index) => (
            <BeforeAfterCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;