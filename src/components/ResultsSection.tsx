"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Andreas Liakopoulos",
    text: "I've used many AI tools for virtual try-on images with jewelry and so far this is the most accurate image generator. Of course, we need to be a bit more patient for a perfect outcome, similar to what a jewel looks like in reality, but this will have the job done. Nice work!",
    avatar: "/images/avatar1.webp",
  },
  {
    name: "David Kocsis",
    text: "I was blown away by what this little tool does. Honestly, you create a video just from an image? It took me just 4 min. to learn how it works. It generated a nice looking video from just an image and they have a native integration with Shopify which suits us the most.",
    avatar: "/images/avatar2.webp",
  },
  {
    name: "Young Modisi",
    text: "SNAPFIT is one of the best AI image and video creators like me. The interface is extremely user-friendly and the image quality it offers beats all of the feature-rich yet not offering basic needs for designers, online sellers.",
    avatar: "/images/avatar3.webp",
  },
    {
    name: "Andreas Liakopoulos",
    text: "I've used many AI tools for virtual try-on images with jewelry and so far this is the most accurate image generator. Of course, we need to be a bit more patient for a perfect outcome, similar to what a jewel looks like in reality, but this will have the job done. Nice work!",
    avatar: "/images/avatar4.webp",
  },
  {
    name: "David Kocsis",
    text: "I was blown away by what this little tool does. Honestly, you create a video just from an image? It took me just 4 min. to learn how it works. It generated a nice looking video from just an image and they have a native integration with Shopify which suits us the most.",
    avatar: "/images/avatar5.webp",

  },
  {
    name: "Young Modisi",
    text: "SNAPFIT is one of the best AI image and video creators like me. The interface is extremely user-friendly and the image quality it offers beats all of the feature-rich yet not offering basic needs for designers, online sellers.",
    avatar: "/images/avatar1.webp",
  },
];

const ResultsSection = () => {
  const marqueeRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="mx-auto px-4 max-w-7xl">
        <h1 className="text-center text-8xl font-extrabold italic bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent  mb-6">
          Our Results With SnapFit
        </h1>
        <p className="text-center text-lg text-muted-foreground font-medium mb-16 max-w-2xl mx-auto">
          Our customers achieve measurable growth with SnapFit’s AI-powered visual creation:
        </p>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="text-5xl font-bold text-lime-600 mb-2">-90%</div>
            <p className="text-base text-muted-foreground">Visual Production Costs</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-lime-600 mb-2">+30%</div>
            <p className="text-base text-muted-foreground">Average Order Value</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-lime-600 mb-2">+70%</div>
            <p className="text-base text-muted-foreground">Faster Time to Market</p>
          </div>
        </div>

        {/* Sliding Testimonials */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            ref={marqueeRef}
            animate={controls}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-sm bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg border border-muted"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full w-12 h-12 mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-base">{t.name}</h4>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {t.text}
                </p>

                {/* Star Rating */}
                <div className="flex gap-1 text-yellow-400">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-yellow-400" />
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
