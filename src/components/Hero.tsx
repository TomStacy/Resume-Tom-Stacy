import React, { useState, useEffect, useRef } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=2070",
    alt: "Golf course with beautiful scenery",
    title: "Golf Enthusiast"
  },
  {
    url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=2070",
    alt: "Snow skiing on a mountain slope",
    title: "Snow Skiing"
  },
  {
    url: "https://images.unsplash.com/photo-1600965962323-6556548533b5?auto=format&fit=crop&q=80&w=2070",
    alt: "Water skiing on a lake",
    title: "Water Skiing"
  },
  {
    url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070",
    alt: "Fitness training with equipment",
    title: "Fitness"
  }
];

const DISPLAY_DURATION = 5000; // ms
const FADE_DURATION = 10000; // ms

const Hero = () => {
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
          return (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[${FADE_DURATION}ms] ease-in-out ${opacity} ${z}`}
              aria-hidden={!(idx === current || idx === next)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
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
