'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Clock, Users, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import DynamicHeroBackground, { HeroContent } from '@/components/DynamicHeroBackground';

const reservationSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string()
    .min(1, 'Telefonnummer ist erforderlich')
    .regex(/^\+49\s?\d{2,3}\s?\d{6,8}$/, 'Bitte geben Sie eine gültige deutsche Telefonnummer ein (Format: +49...)'),
  date: z.string()
    .min(1, 'Bitte wählen Sie ein Datum')
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'Das Datum muss heute oder in der Zukunft liegen'),
  time: z.string().min(1, 'Bitte wählen Sie eine Uhrzeit'),
  guests: z.string()
    .min(1, 'Bitte wählen Sie die Anzahl der Gäste')
    .refine((guests) => {
      const num = parseInt(guests);
      return num >= 1 && num <= 8;
    }, 'Anzahl der Gäste muss zwischen 1 und 8 liegen'),
  specialRequests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

// Abendzeiten wie spezifiziert
const timeSlots = [
  '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
];

// Gästeoptionen 1-8 wie spezifiziert
const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8'];

export default function ReservierungPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema)
  });

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);
    
    // Simuliere API-Aufruf
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Reservierungsdaten:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-lg mx-4 animate-fade-in border border-accent/20">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
            Reservierung erfolgreich!
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Vielen Dank für Ihre Reservierung bei Bohemia München. Wir haben Ihnen eine
            Bestätigung per E-Mail gesendet und freuen uns auf Ihren Besuch!
          </p>
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Neue Reservierung
            </button>
            <a
              href="/"
              className="block w-full bg-secondary hover:bg-secondary-dark text-primary font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-primary"
            >
              Zur Startseite
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section with Dynamic Background */}
      <DynamicHeroBackground type="reservation" showFloatingElements={true} className="min-h-[50vh]">
        <HeroContent
          title="Online Reservierung"
          subtitle="Reservieren Sie Ihren Tisch bequem online und sichern Sie sich einen Platz in unserem authentischen tschechischen Restaurant"
          titleDelay="animate-fade-in-down"
        >
          {/* Quick Info Bar */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 inline-block border border-white/20 animate-scale-in-delay-1">
            <div className="flex items-center justify-center gap-8 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-light" />
                <span>Sofortige Bestätigung</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-light" />
                <span>Kostenlos & Unverbindlich</span>
              </div>
            </div>
          </div>
        </HeroContent>
      </DynamicHeroBackground>

      {/* Reservation Form */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-8">
                Reservierungsanfrage
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Name */}
                <div className="group">
                  <label htmlFor="name" className="block text-lg font-semibold text-primary mb-3">
                    Vollständiger Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className={`w-full px-6 py-4 border-2 rounded-xl text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/20 ${
                      errors.name
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300 focus:border-accent hover:border-primary'
                    }`}
                    placeholder="Max Mustermann"
                  />
                  {errors.name && (
                    <div className="flex items-center mt-2 text-red-600">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{errors.name.message}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="group">
                  <label htmlFor="email" className="block text-lg font-semibold text-primary mb-3">
                    E-Mail-Adresse *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={`w-full px-6 py-4 border-2 rounded-xl text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/20 ${
                      errors.email
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300 focus:border-accent hover:border-primary'
                    }`}
                    placeholder="max.mustermann@email.de"
                  />
                  {errors.email && (
                    <div className="flex items-center mt-2 text-red-600">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{errors.email.message}</span>
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div className="group">
                  <label htmlFor="phone" className="block text-lg font-semibold text-primary mb-3">
                    Telefonnummer *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className={`w-full px-6 py-4 border-2 rounded-xl text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/20 ${
                      errors.phone
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-300 focus:border-accent hover:border-primary'
                    }`}
                    placeholder="+49 89 12345678"
                  />
                  <p className="text-sm text-gray-600 mt-2">Format: +49 gefolgt von Ihrer Telefonnummer</p>
                  {errors.phone && (
                    <div className="flex items-center mt-2 text-red-600">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{errors.phone.message}</span>
                    </div>
                  )}
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="date" className="block text-lg font-semibold text-primary mb-3">
                      Datum *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('date')}
                        type="date"
                        id="date"
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full pl-12 pr-6 py-4 border-2 rounded-xl text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/20 ${
                          errors.date
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-300 focus:border-accent hover:border-primary'
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <div className="flex items-center mt-2 text-red-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">{errors.date.message}</span>
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label htmlFor="time" className="block text-lg font-semibold text-primary mb-3">
                      Uhrzeit *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        {...register('time')}
                        id="time"
                        className={`w-full pl-12 pr-6 py-4 border-2 rounded-xl text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/20 appearance-none bg-white ${
                          errors.time
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-300 focus:border-accent hover:border-primary'
                        }`}
                      >
                        <option value="">Uhrzeit wählen</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time} Uhr</option>
                        ))}
                      </select>
                      <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {errors.time && (
                      <div className="flex items-center mt-2 text-red-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">{errors.time.message}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Guests */}
                <div className="group">
                  <label htmlFor="guests" className="block text-lg font-semibold text-primary mb-3">
                    Anzahl Personen *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      {...register('guests')}
                      id="guests"
                      className={`w-full pl-12 pr-6 py-4 border-2 rounded-xl text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/20 appearance-none bg-white ${
                        errors.guests
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300 focus:border-accent hover:border-primary'
                      }`}
                    >
                      <option value="">Anzahl wählen</option>
                      {guestOptions.map(guest => (
                        <option key={guest} value={guest}>
                          {guest} {guest === '1' ? 'Person' : 'Personen'}
                        </option>
                      ))}
                    </select>
                    <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Für Gruppen über 8 Personen kontaktieren Sie uns bitte telefonisch</p>
                  {errors.guests && (
                    <div className="flex items-center mt-2 text-red-600">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{errors.guests.message}</span>
                    </div>
                  )}
                </div>

                {/* Special Requests */}
                <div className="group">
                  <label htmlFor="specialRequests" className="block text-lg font-semibold text-primary mb-3">
                    Besondere Wünsche
                  </label>
                  <textarea
                    {...register('specialRequests')}
                    id="specialRequests"
                    rows={5}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/20 focus:border-accent hover:border-primary resize-none"
                    placeholder="Allergien, Geburtstag, Hochzeitstag, Kinderstuhl, vegetarische Optionen oder andere besondere Wünsche..."
                  />
                  <p className="text-sm text-gray-600 mt-2">Optional - Teilen Sie uns mit, wie wir Ihren Besuch besonders machen können</p>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-xl font-bold py-5 px-8 rounded-xl transition-all duration-300 transform ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-accent hover:bg-accent-dark hover:scale-105 shadow-lg hover:shadow-xl'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Wird gesendet...
                      </div>
                    ) : (
                      'Reservierung bestätigen'
                    )}
                  </button>
                  <p className="text-center text-sm text-gray-600 mt-4">
                    Sie erhalten eine Bestätigung per E-Mail und SMS
                  </p>
                </div>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="animate-slide-in-right space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-accent/10">
                <h3 className="text-3xl font-playfair font-bold text-primary mb-6">
                  Reservierungshinweise
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">Abendservice</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Unser Abendservice ist täglich von 17:30 bis 21:00 Uhr verfügbar.
                        Warme Küche bis 22:00 Uhr.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">Tischreservierung</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Online-Reservierungen für 1-8 Personen. Größere Gruppen bitte
                        telefonisch unter +49 89 20076057.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">Buchungszeitraum</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Reservierungen sind ab heute bis zu 2 Monate im Voraus möglich.
                        Kurzfristige Anfragen gerne telefonisch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-accent/10">
                <h3 className="text-3xl font-playfair font-bold text-primary mb-6">
                  Direkter Kontakt
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">Telefon</h4>
                      <p className="text-gray-600 text-lg font-medium">+49 89 20076057</p>
                      <p className="text-gray-500 text-sm">Täglich 11:00 - 22:00 Uhr</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">E-Mail</h4>
                      <p className="text-gray-600 text-lg font-medium">info@bohemia-muenchen.de</p>
                      <p className="text-gray-500 text-sm">Antwort innerhalb 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">Restaurant</h4>
                      <p className="text-gray-600 text-lg font-medium">Am Lilienberg 5</p>
                      <p className="text-gray-600 text-lg font-medium">81669 München</p>
                      <p className="text-gray-500 text-sm">Ruhige Lage, gut erreichbar</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-playfair font-bold mb-6">
                  Online-Reservierung
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-light flex-shrink-0" />
                    <span className="text-lg">Sofortige Bestätigung per E-Mail & SMS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-light flex-shrink-0" />
                    <span className="text-lg">24/7 verfügbar - keine Wartezeiten</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-light flex-shrink-0" />
                    <span className="text-lg">Sichere Datenübertragung</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-light flex-shrink-0" />
                    <span className="text-lg">Kostenlos und unverbindlich</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-xl">
                  <p className="text-accent-light text-sm leading-relaxed">
                    <strong>Hinweis:</strong> Bei besonderen Anlässen oder größeren Gruppen
                    empfehlen wir eine telefonische Reservierung für die beste Beratung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
