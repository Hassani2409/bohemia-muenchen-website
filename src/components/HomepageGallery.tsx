'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}

export default function HomepageGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Kuratierte authentische tschechische Gerichte - NUR FOOD BILDER
  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Svíčková na smetaně - Tschechisches Nationalgericht',
      title: 'Svíčková na smetaně',
      category: 'Hauptgerichte'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Traditioneller böhmischer Gulasch',
      title: 'Böhmischer Gulasch',
      category: 'Hauptgerichte'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Frisch gezapftes Pilsner Urquell',
      title: 'Pilsner Urquell',
      category: 'Getränke'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Vepřo knedlo zelo - Schweinebraten mit Knödeln',
      title: 'Vepřo knedlo zelo',
      category: 'Hauptgerichte'
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Trdelník - Traditioneller Schornsteinkuchen',
      title: 'Trdelník',
      category: 'Desserts'
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Smažený řízek - Wiener Schnitzel',
      title: 'Smažený řízek',
      category: 'Hauptgerichte'
    },
    {
      id: '7',
      src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Knusprige Ente mit Rotkohl',
      title: 'Kachna na červeném zelí',
      category: 'Hauptgerichte'
    },
    {
      id: '8',
      src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Süße Obstknödel mit Mohn',
      title: 'Ovocné knedlíky',
      category: 'Desserts'
    },
    {
      id: '9',
      src: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Traditioneller Honigkuchen',
      title: 'Medovník',
      category: 'Desserts'
    },
    {
      id: '10',
      src: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Erfrischende Kofola',
      title: 'Kofola',
      category: 'Getränke'
    }
  ];

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

  return (
    <>
      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-secondary-light to-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
              <Camera className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Unsere Küche</span>
            </div>
            <h2 className="text-5xl font-playfair font-bold text-primary mb-6">
              Authentische tschechische Küche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Entdecken Sie die Vielfalt unserer traditionellen Gerichte und die gemütliche 
              Atmosphäre unseres Restaurants. Jedes Bild erzählt die Geschichte echter 
              böhmischer Gastfreundschaft.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => openLightbox(image, index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-xs text-accent font-medium mb-1">
                      {image.category}
                    </div>
                    <div className="text-white font-semibold text-sm">
                      {image.title}
                    </div>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">
              Erleben Sie diese Köstlichkeiten selbst in unserem Restaurant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/speisekarte"
                className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Vollständige Speisekarte
              </a>
              <a
                href="/reservierung"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Tisch reservieren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <div className="text-accent text-sm font-medium mb-2">
                {selectedImage.category}
              </div>
              <div className="text-white text-xl font-semibold mb-2">
                {selectedImage.title}
              </div>
              <div className="text-white/80 text-sm">
                {currentIndex + 1} von {galleryImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
