"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown, Camera, Edit3, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

interface Tool {
  name: string;
  image?: string;
  video?: string;
  poster?: string;
  type: "image" | "video";
}

interface ToolCategory {
  title: string;
  tools: Tool[];
}

const Header = () => {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toolsCategories: ToolCategory[] = [
    {
      title: "AI Model Image",
      tools: [
        { 
          name: "Virtual Try-on", 
          image: "/images/tools/clothes-to-model.png",
          type: "image"
        },
      ]
    },
    {
      title: "AI Editor",
      tools: [
        { 
          name: "Background Remover", 
          image: "/images/tools/Background-Remover.png",
          type: "image"
        },
        { 
          name: "Image Enhancer", 
          image: "/images/tools/Image-Enhancer.png",
          type: "image"
        },
      ]
    },
    {
      title: "AI Video",
      tools: [
        { 
          name: "Image to Video", 
          video: "/images/tools/image-to-video.mp4",
          poster: "/images/tools/image-to-video-poster.jpg", // Add a poster image
          type: "video"
        },
        { 
          name: "HandiCraft Try-on", 
          image: "/images/tools/accessories-to-model.png",
          type: "image"
        },
      ]
    }
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsToolsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsToolsOpen(false);
    }, 300);
  };

  const toggleTools = () => {
    setIsToolsOpen(!isToolsOpen);
  };

  const getIconForCategory = (categoryIndex: number) => {
    switch (categoryIndex) {
      case 0:
        return <Camera className="w-4 h-4 text-lime-600" />;
      case 1:
        return <Edit3 className="w-4 h-4 text-lime-600" />;
      case 2:
        return <Video className="w-4 h-4 text-lime-600" />;
      default:
        return <Camera className="w-4 h-4 text-lime-600" />;
    }
  };

  return (
    <header className="mx-4  rounded-2xl border border-white/20 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 sticky top-4 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-r from-lime-400 to-lime-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">SnapFit</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
                <Link href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Home
            </Link>
            <div className="relative">
           
              <Button 
                variant="ghost" 
                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={toggleTools}
              >
                Tools
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {/* Mega Dropdown Menu */}
              {isToolsOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-6 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-3 gap-8">
                    {toolsCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-4">
                        <div className="flex items-center space-x-2 pb-2 border-b border-gray-100">
                          <div className="w-6 h-6 bg-lime-100 rounded-lg flex items-center justify-center">
                            {getIconForCategory(categoryIndex)}
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>
                        </div>
                        <div className="space-y-3">
                          {category.tools.map((tool, toolIndex) => (
                            <Link 
                              key={toolIndex}
                              href={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                              className="block rounded-xl hover:bg-lime-50 transition-colors group overflow-hidden"
                            >
                              <div className="relative">
                                {/* Image or Video Container */}
                                <div className="relative w-full h-32   rounded-lg overflow-hidden group-hover:from-lime-100 group-hover:to-lime-200 transition-colors">
                                  {tool.type === "image" && tool.image ? (
                                    <Image
                                      src={tool.image}
                                      alt={tool.name}
                                      fill
                                      style={{borderRadius: '200rem'}}
                                      className="object-contain "
                                      sizes="(max-width: 768px) 100vw, 300px"
                                    />
                                  ) : tool.type === "video" && tool.video ? (
                                    <div className="relative w-full h-full">
                                      <video
                                        className="w-full rounded-2xl h-full object-contain"
                                                                              style={{borderRadius: '200rem'}}

                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="auto"
                                      >
                                        <source src={tool.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                      </video>
                                    </div>
                                  ) : null}
                                  
                                  {/* Tool Name Overlay */}
                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                                    <div className="w-full p-3 bg-gradient-to-t from-black/60 to-transparent">
                                      <h4 className="font-semibold text-white text-sm leading-tight">
                                        {tool.name}
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Tool Name Below Image (Always Visible) */}
                                <div className="p-3">
                                  <h4 className="font-medium text-gray-900 text-sm text-center group-hover:text-lime-700 transition-colors">
                                    {tool.name}
                                  </h4>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                 
                </div>
              )}
            </div>
            
            <Link href="price" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Pricing
            </Link>
            <Link href="#inspiration" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Inspiration
            </Link>
            <Link href="#affiliate" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Contact
            </Link>
        
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-lg">
              LOG IN / SIGN UP
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700 hover:text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;