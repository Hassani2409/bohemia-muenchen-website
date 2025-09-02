'use client';

import { useState, useEffect } from 'react';
import { getHeroImage, getFloatingImages, FALLBACK_IMAGES } from '@/lib/unsplash';

interface DynamicHeroBackgroundProps {
  type: 'homepage' | 'contact' | 'reservation';
  children: React.ReactNode;
  className?: string;
  showFloatingElements?: boolean;
}

interface FloatingImages {
  food1: string;
  food2: string;
  beer: string;
  dining: string;
}

export default function DynamicHeroBackground({
  type,
  children,
  className = "",
  showFloatingElements = true
}: DynamicHeroBackgroundProps) {
  const [heroImage, setHeroImage] = useState<string>(FALLBACK_IMAGES.hero[type]);
  const [floatingImages, setFloatingImages] = useState<FloatingImages>(FALLBACK_IMAGES.floating);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    async function loadImages() {
      try {
        console.log('Loading dynamic hero images for type:', type);

        // For demo purposes, use fallback images due to API rate limit
        console.log('Using fallback images due to API rate limit');

        // Keep the fallback images that are already set
        setImagesLoaded(true);

        // Uncomment below when you have a working API key:
        /*
        // Load hero image
        const heroImg = await getHeroImage(type);
        setHeroImage(heroImg);

        // Load floating images if enabled
        if (showFloatingElements) {
          const floatingImgs = await getFloatingImages();
          setFloatingImages(floatingImgs);
        }
        */

      } catch (error) {
        console.error('Error loading dynamic images:', error);
        // Keep fallback images
        setImagesLoaded(true);
      }
    }

    loadImages();
  }, [type, showFloatingElements]);

  const getFloatingElementsConfig = () => {
    switch (type) {
      case 'homepage':
        return [
          {
            image: floatingImages.food1,
            className: "absolute top-20 left-10 w-32 h-32 opacity-20 animate-parallax-float hidden lg:block",
            alt: "Tschechisches Gericht"
          },
          {
            image: floatingImages.beer,
            className: "absolute bottom-32 right-16 w-28 h-28 opacity-25 animate-float hidden lg:block",
            alt: "Tschechisches Bier"
          }
        ];
      case 'contact':
        return [
          {
            image: floatingImages.dining,
            className: "absolute top-16 right-20 w-24 h-24 opacity-30 animate-float hidden lg:block border-4 border-white/20",
            alt: "Restaurant Atmosphäre"
          },
          {
            image: floatingImages.food2,
            className: "absolute bottom-20 left-16 w-20 h-20 opacity-25 animate-parallax-float hidden lg:block border-3 border-accent/30",
            alt: "Tschechische Spezialität"
          }
        ];
      case 'reservation':
        return [
          {
            image: floatingImages.food1,
            className: "absolute top-12 left-12 w-20 h-20 opacity-30 animate-float hidden lg:block border-3 border-white/20",
            alt: "Tschechisches Gericht"
          },
          {
            image: floatingImages.dining,
            className: "absolute bottom-16 right-12 w-24 h-24 opacity-25 animate-parallax-float hidden lg:block border-4 border-accent/30",
            alt: "Elegantes Dining"
          }
        ];
      default:
        return [];
    }
  };

  const getOverlayClass = () => {
    switch (type) {
      case 'homepage':
        return "hero-overlay";
      case 'contact':
        return "hero-overlay-light";
      case 'reservation':
        return "hero-overlay";
      default:
        return "hero-overlay";
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center text-white overflow-hidden ${className}`}>
      {/* Background Image with Smooth Transition */}
      <div className={`absolute inset-0 ${getOverlayClass()} z-10`}></div>
      
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat bg-parallax transition-opacity duration-1000 ${
          imagesLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url('${heroImage}')`
        }}
      ></div>

      {/* Fallback background for loading state */}
      {!imagesLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-parallax"
          style={{
            backgroundImage: `url('${FALLBACK_IMAGES.hero[type]}')`
          }}
        ></div>
      )}
      
      {/* Floating Elements */}
      {showFloatingElements && getFloatingElementsConfig().map((element, index) => (
        <div key={index} className={element.className}>
          <div 
            className="w-full h-full bg-cover bg-center rounded-full"
            style={{
              backgroundImage: `url('${element.image}')`
            }}
            aria-label={element.alt}
          ></div>
        </div>
      ))}

      {/* Decorative Emojis */}
      {type === 'homepage' && (
        <>
          <div className="absolute -top-10 -left-10 w-20 h-20 opacity-30 animate-float hidden xl:block">
            <div className="text-6xl">🍺</div>
          </div>
          <div className="absolute top-1/4 -right-8 w-16 h-16 opacity-25 animate-parallax-float hidden xl:block">
            <div className="text-5xl">🥨</div>
          </div>
        </>
      )}

      {type === 'contact' && (
        <>
          <div className="absolute top-10 left-10 text-4xl opacity-40 animate-float hidden xl:block">🏛️</div>
          <div className="absolute bottom-10 right-10 text-3xl opacity-30 animate-parallax-float hidden xl:block">📍</div>
        </>
      )}

      {type === 'reservation' && (
        <>
          <div className="absolute top-8 right-8 text-3xl opacity-40 animate-float hidden xl:block">🍽️</div>
          <div className="absolute bottom-8 left-8 text-2xl opacity-30 animate-parallax-float hidden xl:block">📅</div>
        </>
      )}

      {/* Content */}
      <div className="container-custom text-center relative z-20">
        {children}
      </div>

      {/* Loading Indicator */}
      {!imagesLoaded && (
        <div className="absolute bottom-4 right-4 z-30">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        </div>
      )}
    </section>
  );
}

// Utility component for hero content structure
export function HeroContent({ 
  title, 
  subtitle, 
  children,
  titleDelay = "",
  subtitleDelay = "animate-fade-in-up-delay-1" 
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  titleDelay?: string;
  subtitleDelay?: string;
}) {
  return (
    <div className="space-y-8">
      <h1 className={`text-6xl md:text-8xl font-playfair font-bold text-shadow-xl animate-fade-in-up ${titleDelay}`}>
        {title}
      </h1>
      <p className={`text-2xl md:text-3xl text-secondary-light max-w-4xl mx-auto leading-relaxed ${subtitleDelay}`}>
        {subtitle}
      </p>
      {children}
    </div>
  );
}
