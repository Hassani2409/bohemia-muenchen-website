'use client';

import { useState, useEffect } from 'react';
import { searchCzechCuisineImages, UnsplashImage, getUnsplashAttribution, getUnsplashAttributionLink, optimizeImageUrl } from '@/lib/unsplash';
import { ExternalLink, Heart, Eye, Download } from 'lucide-react';

interface CzechCuisineGalleryProps {
  title?: string;
  subtitle?: string;
  imageCount?: number;
  showAttribution?: boolean;
  className?: string;
}

export default function CzechCuisineGallery({
  title = "Authentische tschechische Küche",
  subtitle = "Entdecken Sie die Vielfalt der böhmischen Kulinarik",
  imageCount = 12,
  showAttribution = true,
  className = ""
}: CzechCuisineGalleryProps) {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  useEffect(() => {
    async function loadImages() {
      try {
        setLoading(true);
        setError(null);

        console.log('Loading Czech cuisine images...');
        const fetchedImages = await searchCzechCuisineImages(imageCount);

        if (fetchedImages.length === 0) {
          console.warn('No images returned from Unsplash API - using curated Czech cuisine images');
          setError('Kuratierte tschechische Küche-Bilder werden angezeigt');
        } else {
          console.log(`Successfully loaded ${fetchedImages.length} images`);
          setImages(fetchedImages);
        }
      } catch (err) {
        console.error('Gallery loading error:', err);
        setError('Fehler beim Laden der Bilder - Fallback wird verwendet');
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [imageCount]);

  const openLightbox = (image: any) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <section className={`section-padding bg-white ${className}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-primary mb-8">{title}</h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto">{subtitle}</p>
          </div>
          
          {/* Loading Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(imageCount)].map((_, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Fallback static images for Czech cuisine - AUTHENTISCHE TSCHECHISCHE KÜCHE
  const fallbackImages = [
    {
      id: 'fallback-1',
      urls: {
        raw: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        full: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        regular: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        small: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        thumb: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      },
      alt_description: 'Traditionelles Gulasch mit Knödeln',
      description: 'Herzhaftes böhmisches Gulasch mit traditionellen Knödeln',
      user: { name: 'Bohemia München', username: 'bohemia', links: { html: '#' } },
      links: { html: '#' },
      width: 800,
      height: 600
    },
    {
      id: 'fallback-2',
      urls: {
        small: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        regular: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      alt_description: 'Wiener Schnitzel mit Kartoffeln',
      description: 'Goldbraun paniertes Schnitzel nach Wiener Art',
      user: { name: 'Bohemia München', username: 'bohemia', links: { html: '#' } },
      links: { html: '#' }
    },
    {
      id: 'fallback-3',
      urls: {
        small: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        regular: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      alt_description: 'Frisch gezapftes tschechisches Bier',
      description: 'Goldenes tschechisches Bier in traditionellem Glas',
      user: { name: 'Bohemia München', username: 'bohemia', links: { html: '#' } },
      links: { html: '#' }
    },
    {
      id: 'fallback-4',
      urls: {
        small: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        regular: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      alt_description: 'Traditionelle Knödel mit Sauce',
      description: 'Böhmische Knödel mit cremiger Sauce',
      user: { name: 'Bohemia München', username: 'bohemia', links: { html: '#' } },
      links: { html: '#' }
    },
    {
      id: 'fallback-5',
      urls: {
        small: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        regular: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      alt_description: 'Hausgemachte Suppe',
      description: 'Traditionelle böhmische Suppe mit frischen Kräutern',
      user: { name: 'Bohemia München', username: 'bohemia', links: { html: '#' } },
      links: { html: '#' }
    },
    {
      id: 'fallback-6',
      urls: {
        small: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        regular: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      alt_description: 'Traditionelles Fleischgericht',
      description: 'Saftiges Fleischgericht mit traditioneller Beilage',
      user: { name: 'Bohemia München', username: 'bohemia', links: { html: '#' } },
      links: { html: '#' }
    },
    {
      id: 'fallback-7',
      urls: {
        small: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        regular: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      alt_description: 'Traditionelle Wurst mit Sauerkraut',
      description: 'Böhmische Bratwurst mit hausgemachtem Sauerkraut',
      user: { name: 'Bohemia München', username: 'bohemia', links: { html: '#' } },
      links: { html: '#' }
    },
    {
      id: 'fallback-8',
      urls: {
        small: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        regular: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      alt_description: 'Gemischter Salat',
      description: 'Frischer böhmischer Salat mit saisonalen Zutaten',
      user: { name: 'Bohemia München', username: 'bohemia', links: { html: '#' } },
      links: { html: '#' }
    }
  ];

  // Use fallback images if API images are not available
  const displayImages = images.length > 0 ? images : fallbackImages;

  // Always show images - never show error state for better UX
  if (false && error && displayImages.length === 0) {
    return (
      <section className={`section-padding bg-white ${className}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-primary mb-8">{title}</h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto">{subtitle}</p>
          </div>

          {/* Error Fallback Content */}
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🍽️</div>
            <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
              Kuratierte tschechische Küche
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Wir zeigen Ihnen eine Auswahl authentischer tschechischer Gerichte aus unserem Restaurant.
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Besuchen Sie uns für das vollständige kulinarische Erlebnis!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className={`section-padding bg-white ${className}`}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-primary mb-8 animate-fade-in-up">
              {title}
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
              {subtitle}
            </p>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(image)}
              >
                <img
                  src={optimizeImageUrl(image.urls.small, 400, 400)}
                  alt={image.alt_description || 'Tschechische Küche'}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">Ansehen</span>
                      </div>
                      <Heart className="w-5 h-5 hover:text-accent transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Attribution */}
          {showAttribution && (
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500">
                Bilder bereitgestellt von{' '}
                <a
                  href="https://unsplash.com/?utm_source=bohemia-muenchen&utm_medium=referral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark transition-colors"
                >
                  Unsplash
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={optimizeImageUrl(selectedImage.urls.regular, 1200)}
              alt={selectedImage.alt_description || 'Tschechische Küche'}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Schließen"
            >
              ✕
            </button>
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">
                    {selectedImage.description || selectedImage.alt_description || 'Tschechische Küche'}
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    {getUnsplashAttribution(selectedImage)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={getUnsplashAttributionLink(selectedImage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                    aria-label="Auf Unsplash ansehen"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
