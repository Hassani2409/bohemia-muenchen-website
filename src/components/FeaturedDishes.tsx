'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Clock, Award, ChefHat } from 'lucide-react';

interface FeaturedDish {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  preparationTime: string;
  isSignature?: boolean;
  isPopular?: boolean;
  rating: number;
}

export default function FeaturedDishes() {
  const [hoveredDish, setHoveredDish] = useState<string | null>(null);

  const featuredDishes: FeaturedDish[] = [
    {
      id: '1',
      name: 'Svíčková na smetaně',
      description: 'Unser Signature Dish - zartes Rindfleisch in cremiger Rahmsauce mit böhmischen Knödeln, Preiselbeeren und Sahne. Ein Gedicht der tschechischen Küche.',
      price: '18,50 €',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Svíčková na smetaně - Tschechisches Nationalgericht',
      preparationTime: '25 Min',
      isSignature: true,
      isPopular: true,
      rating: 4.9
    },
    {
      id: '2',
      name: 'Böhmischer Gulasch',
      description: 'Herzhafter Gulasch nach traditionellem Familienrezept, langsam geschmort mit Zwiebeln und Gewürzen. Serviert mit fluffigen Semmelknödeln.',
      price: '16,50 €',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Traditioneller böhmischer Gulasch',
      preparationTime: '20 Min',
      isPopular: true,
      rating: 4.8
    },
    {
      id: '3',
      name: 'Vepřo knedlo zelo',
      description: 'Das Trio der tschechischen Küche - saftiger Schweinebraten mit hausgemachten Knödeln und traditionellem Sauerkraut. Ein Klassiker seit Generationen.',
      price: '17,50 €',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Vepřo knedlo zelo - Schweinebraten mit Knödeln',
      preparationTime: '22 Min',
      rating: 4.7
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-accent/10 px-6 py-3 rounded-full mb-6">
            <ChefHat className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">Unsere Spezialitäten</span>
          </div>
          <h2 className="text-5xl font-playfair font-bold text-primary mb-6">
            Signature Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Diese drei Gerichte repräsentieren das Beste der tschechischen Küche. 
            Jedes wird nach traditionellen Familienrezepten zubereitet und mit viel 
            Liebe zum Detail serviert.
          </p>
        </div>

        {/* Featured Dishes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              onMouseEnter={() => setHoveredDish(dish.id)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {dish.isSignature && (
                    <span className="bg-primary text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Signature
                    </span>
                  )}
                  {dish.isPopular && (
                    <span className="bg-accent text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Beliebt
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-bold text-gray-800">{dish.rating}</span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  {dish.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-playfair font-bold text-primary">
                    {dish.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4" />
                    {dish.preparationTime}
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {dish.description}
                </p>

                {/* Action Button */}
                <div className="flex gap-3">
                  <a
                    href="/speisekarte"
                    className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
                  >
                    Zur Speisekarte
                  </a>
                  <a
                    href="/reservierung"
                    className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    Bestellen
                  </a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent transition-opacity duration-300 pointer-events-none ${
                  hoveredDish === dish.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Entdecken Sie alle unsere Spezialitäten
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Über 15 authentische tschechische Gerichte warten auf Sie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/speisekarte"
                className="bg-white text-primary hover:bg-secondary-light font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Vollständige Speisekarte
              </a>
              <a
                href="/reservierung"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Jetzt reservieren
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
