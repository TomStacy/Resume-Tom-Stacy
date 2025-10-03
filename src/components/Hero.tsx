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
const FADE_DURATION = 1000; // ms

const phrases = [
  "AI Implementation Specialist",
  "Cloud and Software Architecture",
  "Consulting Services",
  "Cloud Solutions",
  "Technical Leadership",
  "Continuous Improvement"
];

const Hero = () => {
  const imageStyles = useImageStyles(images);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const fadeTimeout = useRef<NodeJS.Timeout | null>(null);
  const displayTimeout = useRef<NodeJS.Timeout | null>(null);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [animate, setAnimate] = useState(false);

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

  // Add effect to cycle phrases independently
  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 6000); // 6 seconds per phrase
    return () => clearInterval(phraseInterval);
  }, []);

  // Add effect to trigger animation on phrase change
  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 800); // match animation duration
    return () => clearTimeout(timeout);
  }, [currentPhrase]);

  return (
    <div
      className="relative h-[500px] flex items-end overflow-hidden"
      style={{ '--fade-duration': `${FADE_DURATION}ms` } as React.CSSProperties}
    >
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
              className={`absolute inset-0 ${styles.fadeImage} transition-opacity ease-in-out ${opacity} ${z}`}
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
      <div className="container mx-auto px-6 pb-8 relative z-30 text-white">
        <div className="max-w-2xl">
          <h2 className="uppercase text-lg md:text-xl font-semibold tracking-wide mb-1 drop-shadow-lg">
            HELLO, I'M TOM STACY
          </h2>
          <p className="text-sm md:text-base font-light mb-4 drop-shadow">
            Results Driven with a Passion for the Craft of Software Development.
          </p>
          <h1
            className={`text-2xl md:text-4xl font-extrabold mb-2 drop-shadow-2xl ${animate ? styles.elasticSlideIn : ""}`}
            key={currentPhrase}
          >
            {phrases[currentPhrase]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
