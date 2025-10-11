"use client";

import { useState, useEffect } from "react";
import { Heart, Download } from "lucide-react";
import Image from "next/image";
import ProductGalleryTabs from "./ProductGalleryTabs";
import CreativeMultiToolSection from "./CreativeMultiToolSection";
import ProductCatalogGrid from "./ProductCatalogGrid";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

const InspirationGallery = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sampleImages: GalleryImage[] = [
    {
      id: "1",
      src: "/Inspiration/Inspiration1.webp",
      alt: "Gold ring on hand",
      title: "Elegant gold ring",
      aspectRatio: "portrait"
    },
    {
      id: "2", 
      src: "/Inspiration/Inspiration2.webp",
      alt: "Woman in beige blazer",
      title: "Professional blazer style",
      aspectRatio: "portrait"
    },
    {
      id: "3",
      src: "/Inspiration/Inspiration3.webp",
      alt: "Woman with sunglasses",
      title: "Stylish sunglasses",
      aspectRatio: "portrait"
    },
    {
      id: "4",
      src: "/Inspiration/Inspiration4.webp",
      alt: "Gold chain necklace",
      title: "Luxury necklace",
      aspectRatio: "square"
    },
    {
      id: "5",
      src: "/Inspiration/Inspiration5.webp",
      alt: "Purple varsity jacket",
      title: "Casual jacket style",
      aspectRatio: "portrait"
    },
    {
      id: "6",
      src: "/Inspiration/Inspiration6.webp",
      alt: "White sunglasses",
      title: "Designer sunglasses",
      aspectRatio: "portrait"
    },
    {
      id: "7",
      src: "/Inspiration/Inspiration7.webp",
      alt: "Beige hat style",
      title: "Trendy hat",
      aspectRatio: "square"
    },
    {
      id: "8",
      src: "/Inspiration/Inspiration8.webp",
      alt: "Evening glamour",
      title: "Evening dress",
      aspectRatio: "portrait"
    },
    {
      id: "9",
      src: "/Inspiration/Inspiration9.webp",
      alt: "Woman with handbag",
      title: "Designer handbag",
      aspectRatio: "portrait"
    },
    {
      id: "10",
      src: "/Inspiration/Inspiration10.webp",
      alt: "Luxury watch",
      title: "Premium watch",
      aspectRatio: "square"
    },
  ];

  // Generate consistent heights based on image ID
  const getImageHeight = (aspectRatio?: string, imageId?: string) => {
    switch (aspectRatio) {
      case "square": return 280;
      case "landscape": return 240;
      case "portrait": 
      default: 
        if (imageId && isClient) {
          const hash = imageId.split('').reduce((a, b) => {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
          }, 0);
          return Math.abs(hash % 120) + 320; // Height between 320-440
        }
        return 380; // Default height for SSR
    }
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 dark:from-gray-900 dark:via-lime-900/20 dark:to-emerald-900/20">
    //   <div className="container mx-auto px-4 py-8">
    //     {/* Title */}
    //     <div className="text-center mb-12">
    //       <h1 className="text-4xl md:text-5xl font-bold mb-4">
    //         <span className="text-gray-900 dark:text-white">SnapFit </span>
    //         <span className="bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
    //           Inspiration
    //         </span>
    //       </h1>
    //     </div>

    //     {/* Method 1: Improved CSS Columns */}
    //     <div className="masonry-container">
    //       <style jsx>{`
    //         .masonry-container {
    //           column-count: 1;
    //           column-gap: 16px;
    //           column-fill: balance;
    //         }
            
    //         @media (min-width: 640px) {
    //           .masonry-container {
    //             column-count: 2;
    //           }
    //         }
            
    //         @media (min-width: 1024px) {
    //           .masonry-container {
    //             column-count: 3;
    //           }
    //         }
            
    //         @media (min-width: 1280px) {
    //           .masonry-container {
    //             column-count: 4;
    //           }
    //         }
            
    //         @media (min-width: 1536px) {
    //           .masonry-container {
    //             column-count: 5;
    //           }
    //         }
            
    //         .masonry-item {
    //           break-inside: avoid;
    //           page-break-inside: avoid;
    //           display: inline-block;
    //           width: 100%;
    //           margin-bottom: 16px;
    //           vertical-align: top;
    //         }
    //       `}</style>
          
    //       {sampleImages.map((image, index) => (
    //         <div
    //           key={image.id}
    //           className="masonry-item relative group cursor-pointer"
    //           onMouseEnter={() => setHoveredImage(image.id)}
    //           onMouseLeave={() => setHoveredImage(null)}
    //         >
    //           <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
    //             <Image
    //               src={image.src}
    //               alt={image.alt}
    //               width={300}
    //               height={getImageHeight(image.aspectRatio, image.id)}
    //               className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
    //               loading={index < 8 ? "eager" : "lazy"}
    //               style={{ display: 'block' }} // Prevent inline spacing issues
    //             />
                
    //             {/* Overlay */}
    //             <div
    //               className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
    //                 hoveredImage === image.id ? "opacity-100" : "opacity-0"
    //               }`}
    //             >
    //               <div className="absolute top-3 right-3 flex space-x-2">
    //                 <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
    //                   <Heart className="w-4 h-4 text-white" />
    //                 </button>
    //                 <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
    //                   <Download className="w-4 h-4 text-white" />
    //                 </button>
    //               </div>
                  
    //               <div className="absolute bottom-3 left-3 right-3">
    //                 {image.title && (
    //                   <p className="text-white text-sm font-medium mb-2 truncate">
    //                     {image.title}
    //                   </p>
    //                 )}
    //                 <button className="w-full px-4 py-2 bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white rounded-md text-sm font-medium transition-all duration-200">
    //                   Try to Generate
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Chat Button */}
    //   <div className="fixed bottom-6 right-6">
    //     <button className="w-14 h-14 bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center">
    //       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    //         <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
    //       </svg>
    //     </button>
    //   </div>
    // </div>
    <>
    
    
        <CreativeMultiToolSection/>

    <ProductGalleryTabs/>
    <ProductCatalogGrid/>
    </>
  );
};

export default InspirationGallery;