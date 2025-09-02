'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface SlideImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
}

const HeroSlideshow: React.FC = () => {
  // Kuratierte authentische tschechische Gerichte - GROSSE SLIDESHOW
  const slides: SlideImage[] = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Svíčková na smetaně - Tschechisches Nationalgericht',
      title: 'Svíčková na smetaně',
      description: 'Unser berühmtes Nationalgericht - zartes Rindfleisch in cremiger Sauce mit böhmischen Knödeln',
      category: 'Hauptgerichte'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Traditioneller böhmischer Gulasch',
      title: 'Böhmischer Gulasch',
      description: 'Herzhafter Gulasch nach traditionellem Familienrezept, serviert mit frischen Knödeln',
      category: 'Hauptgerichte'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Frisch gezapftes Pilsner Urquell',
      title: 'Pilsner Urquell',
      description: 'Das Original aus Pilsen - frisch gezapft und perfekt temperiert',
      category: 'Getränke'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Vepřo knedlo zelo - Schweinebraten mit Knödeln',
      title: 'Vepřo knedlo zelo',
      description: 'Die heilige Dreifaltigkeit der böhmischen Küche - Schweinebraten, Knödel und Sauerkraut',
      category: 'Hauptgerichte'
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Trdelník - Traditioneller Schornsteinkuchen',
      title: 'Trdelník',
      description: 'Süßer Schornsteinkuchen mit Zimt und Zucker - ein Stück böhmische Tradition',
      category: 'Desserts'
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Smažený řízek - Wiener Schnitzel',
      title: 'Smažený řízek',
      description: 'Goldbraun paniertes Schnitzel - knusprig außen, zart innen',
      category: 'Hauptgerichte'
    },
    {
      id: '7',
      src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Knusprige Ente mit Rotkohl',
      title: 'Kachna na červeném zelí',
      description: 'Knusprige Ente mit hausgemachtem Rotkohl und böhmischen Knödeln',
      category: 'Hauptgerichte'
    },
    {
      id: '8',
      src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Süße Obstknödel mit Mohn',
      title: 'Ovocné knedlíky',
      description: 'Süße Obstknödel mit Mohn und Butter - ein traditionelles böhmisches Dessert',
      category: 'Desserts'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
          break;
        case 'ArrowRight':
          event.preventDefault();
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          break;
        case ' ':
          event.preventDefault();
          setIsPlaying(!isPlaying);
          break;
        case 'Escape':
          event.preventDefault();
          setIsPlaying(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, slides.length]);

  // Preload images
  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsLoaded(true);
      return;
    }

    const imagePromises = slides.map((slide) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = slide.src;
      });
    });

    Promise.all(imagePromises)
      .then(() => setIsLoaded(true))
      .catch(() => setIsLoaded(true)); // Still show even if some images fail
  }, [slides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!isLoaded) {
    return (
      <div className="relative h-[70vh] bg-gradient-to-r from-amber-900 to-amber-700 flex items-center justify-center">
        <div className="text-white text-xl">Lade authentische tschechische Küche...</div>
      </div>
    );
  }

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative h-[70vh] overflow-hidden bg-black">
      {/* Main Slide Image */}
      <div className="relative h-full">
        <img
          src={currentSlideData.src}
          alt={currentSlideData.alt}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <div className="max-w-2xl">
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-600 text-white mb-4">
                {currentSlideData.category}
              </div>
              
              {/* Title */}
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {currentSlideData.title}
              </h2>
              
              {/* Description */}
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {currentSlideData.description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Jetzt bestellen
                </button>
                <button
                  type="button"
                  className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300"
                >
                  Speisekarte ansehen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Vorheriges Bild"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 backdrop-blur-sm"
        aria-label="Nächstes Bild"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        type="button"
        onClick={togglePlayPause}
        className="absolute top-4 right-4 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 backdrop-blur-sm"
        aria-label={isPlaying ? 'Pausieren' : 'Abspielen'}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5" />
        )}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-amber-600 scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Zu Slide ${index + 1} wechseln`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 right-6 px-3 py-1 rounded-full bg-black/50 text-white text-sm backdrop-blur-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default HeroSlideshow;
