'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  source: 'Google' | 'TripAdvisor' | 'Facebook';
}

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Maria Schmidt',
      location: 'München',
      rating: 5,
      text: 'Absolut authentische tschechische Küche! Die Svíčková war perfekt zubereitet und hat mich an meine Reisen nach Prag erinnert. Der Service war herzlich und das Ambiente gemütlich. Definitiv ein Geheimtipp!',
      date: '2024-01-15',
      source: 'Google'
    },
    {
      id: '2',
      name: 'Thomas Weber',
      location: 'München',
      rating: 5,
      text: 'Das beste tschechische Restaurant in München! Die Knödel sind hausgemacht und das Bier frisch gezapft. Besonders die Atmosphäre ist authentisch böhmisch. Wir kommen regelmäßig hierher.',
      date: '2024-01-10',
      source: 'Google'
    },
    {
      id: '3',
      name: 'Anna Novák',
      location: 'Prag',
      rating: 5,
      text: 'Als Tschechin kann ich bestätigen: Das ist echte böhmische Küche! Die Qualität ist hervorragend und die Preise fair. Fühle mich wie zu Hause. Děkuji moc!',
      date: '2024-01-08',
      source: 'TripAdvisor'
    },
    {
      id: '4',
      name: 'Michael Huber',
      location: 'München',
      rating: 5,
      text: 'Fantastisches Essen und super freundliches Personal! Die Portionen sind großzügig und alles schmeckt authentisch. Das Gulasch ist ein Traum. Absolute Empfehlung!',
      date: '2024-01-05',
      source: 'Google'
    },
    {
      id: '5',
      name: 'Sarah Johnson',
      location: 'London',
      rating: 5,
      text: 'Discovered this gem during my visit to Munich. The food was incredible and the staff spoke perfect English. The traditional Czech atmosphere made the evening special. Will definitely return!',
      date: '2024-01-03',
      source: 'TripAdvisor'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'Google':
        return 'text-blue-600';
      case 'TripAdvisor':
        return 'text-green-600';
      case 'Facebook':
        return 'text-blue-800';
      default:
        return 'text-gray-600';
    }
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="section-padding bg-gradient-to-b from-secondary-light to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Kundenstimmen</span>
          </div>
          <h2 className="text-5xl font-playfair font-bold text-primary mb-6">
            Was unsere Gäste sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Über 500 zufriedene Gäste haben uns bereits bewertet. 
            Lesen Sie, was sie über ihre Erfahrung bei Bohemia München sagen.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-6 h-6 ${
                    i < currentTestimonialData.rating 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`} 
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
              "{currentTestimonialData.text}"
            </blockquote>

            {/* Author Info */}
            <div className="text-center">
              <div className="font-bold text-lg text-primary mb-1">
                {currentTestimonialData.name}
              </div>
              <div className="text-gray-600 mb-2">
                {currentTestimonialData.location}
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className={`font-medium ${getSourceColor(currentTestimonialData.source)}`}>
                  {currentTestimonialData.source}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 text-sm">
                  {new Date(currentTestimonialData.date).toLocaleDateString('de-DE')}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Vorheriges Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Nächstes Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Zu Testimonial ${index + 1} wechseln`}
            />
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">4.8</div>
                <div className="text-lg opacity-90">Durchschnittsbewertung</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Zufriedene Gäste</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">Weiterempfehlung</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Werden Sie Teil unserer zufriedenen Gäste
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/reservierung"
              className="btn-primary"
            >
              Jetzt reservieren
            </a>
            <a
              href="/speisekarte"
              className="btn-secondary"
            >
              Speisekarte ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
