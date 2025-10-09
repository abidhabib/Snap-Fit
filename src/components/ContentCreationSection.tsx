"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const ContentCreationSection = () => {
  return (
    <div className=" max-w-6xl mx-auto">
      {/* Smartest E-Commerce Toolkit */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Your Smartest E-Commerce Media Toolkit.{" "}
            <span className="bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent italic">
              All-in-One.
            </span>
          </h2>
          <p className="text-lg sm:text-xl font-bold text-slate-800 mt-4">
            Everything you need is SnapFit
          </p>
        </div>
      </section>

      {/* Create All Your Content */}
      <section className="py-12 sm:py-16">
        <div className="bg-white shadow-md rounded-xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden aspect-video bg-muted flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                <Image
                  src="/images/content1.png"
                  alt="Content Creation Preview"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Create All Your Content from One Image</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0">
                Start with a single product photo and instantly generate lifestyle shots, white background images, 
                and content ready for social media.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button className="text-white bg-black rounded-full px-6 py-3 text-base sm:text-lg hover:bg-gray-800 transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All-in-One Solution */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="bg-white shadow-md rounded-xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">All-in-One Solution</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0">
                Access everything you need in one comprehensive toolkit, from Color Changer, 
                Background Replacer to video production, simplifying your workflow.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button className="text-white bg-black rounded-full px-6 py-3 text-base sm:text-lg hover:bg-gray-800 transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden aspect-video bg-background flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                <Image
                  src="/images/content1.png"
                  alt="All-in-One Solution Preview"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentCreationSection;