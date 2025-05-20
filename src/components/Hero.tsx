import React, { useState, useEffect, useRef, useMemo } from "react";
import styles from "./Hero.module.css";

// Define images array with public paths
type ImageType = {
  url: string;
  alt: string;
  title: string;
};

const images: ImageType[] = [
  {
    url: "/images/Sunrise.png",
    alt: "Dramatic mirrored sunrise over the lake",
    title: "Sunrise"
  },
  {
    url: "/images/bg6-2.jpg",
    alt: "Carving turns on the lake",
    title: "Slalom Skiing"
  },
  {
    url: "/images/bg7-2.jpg",
    alt: "Carving turns on the lake",
    title: "Slalom Skiing"
  },
  {
    url: "/images/bg8-2.jpg",
    alt: "Mt Royal, Frisco Colorado",
    title: "Mt Royal"
  },
  {
    url: "/images/bg5.png",
    alt: "Hole in One at Lakota Links",
    title: "Hole in One"
  }
];

// const images: ImageType[] = [
//   {
//     url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2070",
//     alt: "Golf course with beautiful scenery",
//     title: "Golf Enthusiast"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=2070",
//     alt: "Snow skiing on a mountain slope",
//     title: "Snow Skiing"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1600965962323-6556548533b5?auto=format&fit=crop&q=80&w=2070",
//     alt: "Water skiing on a lake",
//     title: "Water Skiing"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070",
//     alt: "Fitness training with equipment",
//     title: "Fitness"
//   }
// ];

// Generate inline styles for each image
const useImageStyles = (images: ImageType[]) => {
  return useMemo(() => {
    return images.map((image) => ({
      backgroundImage: `url(${image.url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }));
  }, [images]);
};

const DISPLAY_DURATION = 5000; // ms
const FADE_DURATION = 10000; // ms

const Hero = () => {
  const imageStyles = useImageStyles(images);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const fadeTimeout = useRef<NodeJS.Timeout | null>(null);
  const displayTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    displayTimeout.current = setTimeout(() => {
      const nextIdx = (current + 1) % images.length;
      setNext(nextIdx);
      setIsFading(true);

      fadeTimeout.current = setTimeout(() => {
        setCurrent(nextIdx);
        setNext(null);
        setIsFading(false);
      }, FADE_DURATION);
    }, DISPLAY_DURATION);

    return () => {
      if (displayTimeout.current) clearTimeout(displayTimeout.current);
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    };
  }, [current]);

  return (
    <div className="relative h-[350px] flex items-center overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, idx) => {
          // Always render all images for proper crossfade
          let opacity = "opacity-0";
          let z = "z-0";
          const isVisible = idx === current || idx === next;
          
          if (!isFading && idx === current) {
            opacity = "opacity-100";
            z = "z-10";
          } else if (isFading && idx === current) {
            opacity = "opacity-0";
            z = "z-10";
          } else if (isFading && idx === next) {
            opacity = "opacity-100";
            z = "z-20";
          }
          // Using object spread with type assertion for aria-hidden to satisfy both:
          // 1. TypeScript's type checking for HTML attributes
          // 2. Accessibility requirements for proper ARIA attribute values
          // The value is dynamically set based on whether the image is currently visible in the carousel
          return (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[${FADE_DURATION}ms] ease-in-out ${opacity} ${z}`}
              {...{
                'aria-hidden': !isVisible
              } as React.HTMLAttributes<HTMLDivElement>}
            >
              <div
                className="absolute inset-0"
                style={imageStyles[idx]}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="container relative z-30 text-white">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Software Engineering Executive</h1>
          <h2 className="text-xl md:text-2xl">
            25+ years of technical leadership, innovation, and AI advancement
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
