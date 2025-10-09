"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown,  Edit3, Video, Menu, X, ChevronRight, Sparkles, User, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface Tool {
  name: string;
  image?: string;
  video?: string;
  poster?: string; 
  type: "image" | "video";
  description: string;
  comingSoon?: boolean;
}

interface ToolCategory {
  title: string;
  description: string;
  tools: Tool[];
}

const Header = () => {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toolsCategories: ToolCategory[] = [
    {
      title: "AI Model Try-On",
      description: "Visualize products on diverse models",
      tools: [
        { 
          name: "Virtual Try-on", 
          image: "/images/tools/clothes-to-model.png",
          type: "image",
          description: "See clothes on AI models instantly"
        },
      ]
    },
    {
      title: "AI Editor",
      description: "Enhance and transform your images",
      tools: [
        { 
          name: "Background Remover", 
          image: "/images/tools/Background-Remover.png",
          type: "image",
          description: "Remove backgrounds automatically"
        },
        { 
          name: "Image Enhancer", 
          image: "/images/tools/Image-Enhancer.png",
          type: "image",
          description: "Improve image quality with AI"
        },
      ]
    },
    {
      title: "AI Video",
      description: "Create engaging product videos",
      tools: [
        { 
          name: "Image to Video", 
          video: "/images/tools/image-to-video.mp4",
          poster: "/images/tools/image-to-video-poster.jpg",
          type: "video",
          description: "Transform images into videos",
          comingSoon: true
        },
        { 
          name: "Accessory Try-on", 
          image: "/images/tools/accessories-to-model.png",
          type: "image",
          description: "Try accessories on models",
          comingSoon: true
        },
      ]
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsMobileToolsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsToolsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsToolsOpen(false);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileToolsOpen(false);
  };

  const toggleMobileTools = () => {
    setIsMobileToolsOpen(!isMobileToolsOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileToolsOpen(false);
  };

  const getIconForCategory = (categoryIndex: number) => {
    switch (categoryIndex) {
      case 0:
        return <User className="w-4 h-4 text-lime-600" />;
      case 1:
        return <Edit3 className="w-4 h-4 text-lime-600" />;
      case 2:
        return <Video className="w-4 h-4 text-lime-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-lime-600" />;
    }
  };

  return (
    <>
      <header 
        className={`mx-4 rounded-2xl border transition-all duration-300 sticky top-4 z-50 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-xl' 
            : 'bg-white/80 backdrop-blur-md border-white/20 shadow-lg'
        }`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">SnapFit</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="#home" 
                className="text-slate-700 hover:text-slate-900 transition-colors font-medium py-2 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <div className="relative" ref={dropdownRef}>
                <Button 
                  variant="ghost" 
                  className="flex items-center text-slate-700 hover:text-slate-900 transition-colors text-md font-medium py-2 group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Sparkles className="w-4 h-4 mr-2 text-lime-500" />
                  AI Tools
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isToolsOpen ? 'rotate-180' : ''}`} />
                </Button>
                
                {/* Desktop Mega Dropdown Menu */}
                {isToolsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-[800px] bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-2xl p-6 z-50 animate-in fade-in-0 zoom-in-95"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {toolsCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-4">
                          <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                            <div className="w-10 h-10 bg-lime-100 rounded-xl flex items-center justify-center">
                              {getIconForCategory(categoryIndex)}
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-900 text-sm">{category.title}</h3>
                              <p className="text-slate-500 text-xs">{category.description}</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            {category.tools.map((tool, toolIndex) => (
                              <Link 
                                key={toolIndex}
                                href={tool.comingSoon ? '#' : `/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`block rounded-xl p-3 transition-all duration-200 group overflow-hidden ${
                                  tool.comingSoon 
                                    ? 'opacity-60 cursor-not-allowed' 
                                    : 'hover:bg-lime-50 hover:shadow-md hover:-translate-y-0.5'
                                }`}
                                onClick={(e) => tool.comingSoon && e.preventDefault()}
                              >
                                <div className="relative">
                                  <div className="relative w-full h-24 rounded-lg overflow-hidden bg-slate-100">
                                    {tool.type === "image" && tool.image ? (
                                      <Image
                                        src={tool.image}
                                        alt={tool.name}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 300px"
                                      />
                                    ) : tool.type === "video" && tool.video ? (
                                      <div className="relative w-full h-full">
                                        <video
                                          className="w-full h-full object-cover"
                                          autoPlay
                                          muted
                                          loop
                                          playsInline
                                          preload="auto"
                                        >
                                          <source src={tool.video} type="video/mp4" />
                                        </video>
                                      </div>
                                    ) : null}
                                    
                                    {tool.comingSoon && (
                                      <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                                        <span className="text-white text-xs font-medium bg-slate-800 px-2 py-1 rounded-full">
                                          Coming Soon
                                        </span>
                                      </div>
                                    )}
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                                      <div className="w-full p-2">
                                        <h4 className="font-semibold text-white text-sm leading-tight">
                                          {tool.name}
                                        </h4>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="mt-3">
                                    <div className="flex items-center justify-between">
                                      <h4 className="font-medium text-slate-900 text-sm group-hover:text-lime-700 transition-colors">
                                        {tool.name}
                                      </h4>
                                      {tool.comingSoon ? (
                                        <Zap className="w-3 h-3 text-slate-400" />
                                      ) : (
                                        <ChevronRight className="w-3 h-3 text-lime-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                      )}
                                    </div>
                                    <p className="text-slate-600 text-xs mt-1 line-clamp-2">
                                      {tool.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* View All Tools CTA */}
                    <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                      <Link 
                        href="/tools" 
                        className="inline-flex items-center text-sm font-medium text-lime-600 hover:text-lime-700 transition-colors"
                        onClick={() => setIsToolsOpen(false)}
                      >
                        View all AI tools
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                href="/pricing" 
                className="text-slate-700 hover:text-slate-900 transition-colors font-medium py-2 relative group"
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/inspiration" 
                className="text-slate-700 hover:text-slate-900 transition-colors font-medium py-2 relative group"
              >
                Inspiration
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Desktop Right side */}
            <div className="hidden md:flex items-center space-x-3">
            
              <Button 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="/signup">LOGIN / SIGNUP</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-slate-700 hover:text-slate-900 transition-colors p-2 rounded-lg hover:bg-slate-100"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-in fade-in-0">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-md shadow-2xl overflow-y-auto animate-in slide-in-from-right-0 duration-300">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-lime-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold text-slate-900">SnapFit</span>
              </div>
              <button 
                onClick={closeMobileMenu}
                className="text-slate-500 hover:text-slate-700 transition-colors p-2 rounded-lg hover:bg-slate-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="px-6 py-4 space-y-1">
              <Link 
                href="#home" 
                className="flex items-center py-4 text-slate-700 hover:text-slate-900 font-medium transition-colors border-b border-slate-100"
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              {/* Mobile Tools Menu */}
              <div className="border-b border-slate-100">
                <button
                  onClick={toggleMobileTools}
                  className="flex items-center justify-between w-full py-4 text-slate-700 hover:text-slate-900 font-medium transition-colors"
                >
                  <div className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-3 text-lime-500" />
                    <span>AI Tools</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isMobileToolsOpen ? 'rotate-90' : ''}`} />
                </button>

                {/* Mobile Tools Submenu */}
                {isMobileToolsOpen && (
                  <div className="ml-7 mb-4 space-y-4 animate-in fade-in-0">
                    {toolsCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-3">
                        <div className="flex items-center space-x-2 pt-4">
                          <div className="w-6 h-6 bg-lime-100 rounded-md flex items-center justify-center">
                            {getIconForCategory(categoryIndex)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 text-sm">{category.title}</h3>
                            <p className="text-slate-500 text-xs">{category.description}</p>
                          </div>
                        </div>
                        <div className="space-y-2 ml-2">
                          {category.tools.map((tool, toolIndex) => (
                            <Link 
                              key={toolIndex}
                              href={tool.comingSoon ? '#' : `/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                              className={`flex items-center justify-between py-2 text-sm transition-colors ${
                                tool.comingSoon 
                                  ? 'text-slate-400 cursor-not-allowed' 
                                  : 'text-slate-600 hover:text-lime-600'
                              }`}
                              onClick={(e) => {
                                if (tool.comingSoon) {
                                  e.preventDefault();
                                } else {
                                  closeMobileMenu();
                                }
                              }}
                            >
                              <span>{tool.name}</span>
                              {tool.comingSoon && (
                                <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                                  Soon
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/pricing" 
                className="flex items-center py-4 text-slate-700 hover:text-slate-900 font-medium transition-colors border-b border-slate-100"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
              <Link 
                href="/inspiration" 
                className="flex items-center py-4 text-slate-700 hover:text-slate-900 font-medium transition-colors border-b border-slate-100"
                onClick={closeMobileMenu}
              >
                Inspiration
              </Link>

              {/* Mobile Auth Buttons */}
              <div className="pt-6 space-y-3">
                <Button 
                  variant="outline"
              className="bg-transparent border border-slate-900 text-slate-900 hover:bg-slate-50 px-8 py-4 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center"
                  asChild
                >
                  <Link href="/login" onClick={closeMobileMenu}>
                    Log in
                  </Link>
                </Button>
                <button 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 w-full rounded-full font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Link href="/signup" onClick={closeMobileMenu}>
                    Get Started Free
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;