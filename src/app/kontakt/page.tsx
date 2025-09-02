'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle, Car, Train, Facebook, Instagram, Globe } from 'lucide-react';
import DynamicHeroBackground, { HeroContent } from '@/components/DynamicHeroBackground';

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  subject: z.string().min(5, 'Betreff muss mindestens 5 Zeichen lang sein'),
  message: z.string().min(20, 'Nachricht muss mindestens 20 Zeichen lang sein'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function KontaktPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simuliere API-Aufruf
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Kontaktdaten:', data);
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
            Nachricht erfolgreich gesendet!
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Vielen Dank für Ihre Nachricht! Wir haben sie erhalten und werden uns
            innerhalb von 24 Stunden bei Ihnen melden. Bei dringenden Anfragen
            rufen Sie uns gerne direkt an.
          </p>
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Neue Nachricht schreiben
            </button>
            <a
              href="tel:+4989 20076057"
              className="block w-full bg-secondary hover:bg-secondary-dark text-primary font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-primary"
            >
              📞 Direkt anrufen: +49 89 20076057
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section with Dynamic Background */}
      <DynamicHeroBackground type="contact" showFloatingElements={true} className="min-h-[70vh]">
        <HeroContent
          title="Kontakt & Anfahrt"
          subtitle="Wir freuen uns auf Ihren Besuch in unserem authentischen tschechischen Restaurant im Herzen Münchens"
          titleDelay="animate-fade-in-down"
        >
          {/* Contact Info Card */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 inline-block border border-white/20 animate-scale-in-delay-1 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center justify-center gap-6 text-lg font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent-light" />
                <span>Am Lilienberg 5</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent-light" />
                <span>+49 89 20076057</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up-delay-2">
            <a
              href="tel:+498920076057"
              className="bg-accent hover:bg-accent-dark text-white font-bold text-xl px-12 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-3 animate-glow"
            >
              <Phone className="w-6 h-6" />
              Jetzt anrufen
            </a>
            <a
              href="/reservierung"
              className="bg-transparent border-3 border-white text-white hover:bg-white hover:text-primary font-bold text-xl px-12 py-5 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Online reservieren
            </a>
          </div>
        </HeroContent>
      </DynamicHeroBackground>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-playfair font-bold text-primary mb-10">
                Kontaktinformationen
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 p-6 bg-secondary-light rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-3">Restaurant Adresse</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      <strong>Bohemia München</strong><br />
                      Am Lilienberg 5<br />
                      81669 München<br />
                      Deutschland
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Zentral gelegen, gut erreichbar
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 p-6 bg-secondary-light rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-3">Telefon</h3>
                    <p className="text-gray-700 text-lg">
                      <a
                        href="tel:+498920076057"
                        className="hover:text-accent transition-colors font-bold text-xl"
                      >
                        +49 89 20076057
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Täglich für Reservierungen und Anfragen erreichbar
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 p-6 bg-secondary-light rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-3">E-Mail</h3>
                    <p className="text-gray-700 text-lg">
                      <a
                        href="mailto:info@bohemia-muenchen.de"
                        className="hover:text-accent transition-colors font-medium"
                      >
                        info@bohemia-muenchen.de
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Antwort innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 p-6 bg-secondary-light rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-3">Website</h3>
                    <p className="text-gray-700 text-lg">
                      <a
                        href="https://bohemiamunchen.jimdosite.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors font-medium inline-flex items-center gap-2"
                      >
                        bohemiamunchen.jimdosite.com
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Aktuelle Informationen und Speisekarte
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border-2 border-primary/20">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Öffnungszeiten</h3>
                    <div className="text-gray-700 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Montag - Samstag:</span>
                        <div className="text-right">
                          <div>11:30 - 14:30 Uhr</div>
                          <div>17:30 - 23:00 Uhr</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Sonntag:</span>
                        <div>11:30 - 22:00 Uhr</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 bg-white/50 p-2 rounded">
                      <strong>Hinweis:</strong> Warme Küche bis 30 Minuten vor Schließung
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-accent/10">
                <h2 className="text-4xl font-playfair font-bold text-primary mb-8">
                  Schreiben Sie uns
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Haben Sie Fragen, Wünsche oder Anregungen? Wir freuen uns auf Ihre Nachricht
                  und antworten Ihnen gerne innerhalb von 24 Stunden.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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

                  <div className="group">
                    <label htmlFor="subject" className="block text-lg font-semibold text-primary mb-3">
                      Betreff *
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      id="subject"
                      className={`w-full px-6 py-4 border-2 rounded-xl text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/20 ${
                        errors.subject
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300 focus:border-accent hover:border-primary'
                      }`}
                      placeholder="Reservierung, Frage zur Speisekarte, Feedback..."
                    />
                    {errors.subject && (
                      <div className="flex items-center mt-2 text-red-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">{errors.subject.message}</span>
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-lg font-semibold text-primary mb-3">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={6}
                      className={`w-full px-6 py-4 border-2 rounded-xl text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/20 resize-none ${
                        errors.message
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300 focus:border-accent hover:border-primary'
                      }`}
                      placeholder="Teilen Sie uns Ihre Fragen, Wünsche oder Anregungen mit. Wir freuen uns auf Ihre Nachricht!"
                    />
                    {errors.message && (
                      <div className="flex items-center mt-2 text-red-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">{errors.message.message}</span>
                      </div>
                    )}
                  </div>

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
                        <div className="flex items-center justify-center gap-3">
                          <Mail className="w-6 h-6" />
                          Nachricht senden
                        </div>
                      )}
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      Wir antworten Ihnen innerhalb von 24 Stunden
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-primary mb-8">
              So finden Sie uns
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Bohemia München liegt zentral in München-Haidhausen und ist sowohl mit
              öffentlichen Verkehrsmitteln als auch mit dem Auto gut erreichbar
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-accent/10">
              <h3 className="text-3xl font-playfair font-bold text-primary mb-6 text-center">
                📍 Unsere Lage auf Google Maps
              </h3>
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.8!2d11.6!3d48.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd5%3A0x0!2sAm%20Lilienberg%205%2C%2081669%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1635000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bohemia München Standort"
                ></iframe>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                <a
                  href="https://maps.google.com/?q=Am+Lilienberg+5,+81669+München"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-3"
                >
                  <Navigation className="w-5 h-5" />
                  Route in Google Maps planen
                </a>
                <a
                  href="tel:+498920076057"
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Anrufen für Wegbeschreibung
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Directions */}
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-3xl shadow-xl p-10 border border-accent/10">
                <h3 className="text-3xl font-playfair font-bold text-primary mb-8">
                  🚗 Anfahrt & Parken
                </h3>

                <div className="space-y-8">
                  <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Train className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-3">Öffentliche Verkehrsmittel</h4>
                        <div className="text-gray-700 space-y-2">
                          <p><strong>S-Bahn:</strong> S1-S8 bis Ostbahnhof (5 Min. Fußweg)</p>
                          <p><strong>U-Bahn:</strong> U5 bis Ostbahnhof</p>
                          <p><strong>Tram:</strong> Linie 19 bis Haltestelle Ostbahnhof</p>
                          <p><strong>Bus:</strong> Linien 54, 55 bis Am Lilienberg</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl border border-accent/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Car className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-3">Mit dem Auto</h4>
                        <div className="text-gray-700 space-y-2">
                          <p><strong>A94:</strong> Ausfahrt München-Steinhausen</p>
                          <p><strong>A8:</strong> Ausfahrt München-Riem</p>
                          <p><strong>Stadtmitte:</strong> Über Rosenheimer Straße</p>
                          <p><strong>Parken:</strong> Straßenparkplätze verfügbar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-3xl shadow-xl p-10">
                <h3 className="text-3xl font-playfair font-bold mb-8">
                  📞 Direkter Kontakt
                </h3>
                <p className="text-xl text-accent-light mb-8 leading-relaxed">
                  Haben Sie Fragen zur Anfahrt oder benötigen Sie eine detaillierte
                  Wegbeschreibung? Rufen Sie uns gerne an!
                </p>

                <div className="space-y-6">
                  <a
                    href="tel:+498920076057"
                    className="w-full bg-white text-accent hover:bg-accent-light hover:text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 text-xl"
                  >
                    <Phone className="w-6 h-6" />
                    +49 89 20076057
                  </a>

                  <div className="bg-white/10 rounded-2xl p-6">
                    <h4 className="text-xl font-bold mb-4">🕒 Telefonzeiten</h4>
                    <div className="space-y-2 text-accent-light">
                      <p><strong>Mo-Sa:</strong> 11:30-14:30, 17:30-23:00</p>
                      <p><strong>So:</strong> 11:30-22:00</p>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-6">
                    <h4 className="text-xl font-bold mb-4">🌐 Social Media</h4>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    </div>
                    <p className="text-sm text-accent-light mt-3">
                      Folgen Sie uns für aktuelle Updates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-primary mb-8">
              Häufig gestellte Fragen
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Hier finden Sie Antworten auf die wichtigsten Fragen unserer Gäste.
              Sollten Sie weitere Fragen haben, kontaktieren Sie uns gerne!
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-secondary-light to-secondary rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/10">
              <h3 className="text-2xl font-playfair font-bold text-primary mb-4 flex items-center gap-3">
                🕒 Kann ich auch kurzfristig reservieren?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ja, wir nehmen auch kurzfristige Reservierungen entgegen! Für den gleichen
                Tag empfehlen wir jedoch einen direkten Anruf unter <strong>+49 89 20076057</strong>,
                da wir Ihnen dann die aktuellsten Verfügbarkeiten mitteilen können.
                Online-Reservierungen sind bis zu 2 Monate im Voraus möglich.
              </p>
            </div>

            <div className="bg-gradient-to-r from-secondary-light to-secondary rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/10">
              <h3 className="text-2xl font-playfair font-bold text-primary mb-4 flex items-center gap-3">
                🥗 Haben Sie auch vegetarische Gerichte?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Selbstverständlich! Unsere tschechische Küche bietet eine wunderbare Auswahl
                an vegetarischen Gerichten. Besonders beliebt sind unsere hausgemachten
                böhmischen Knödel, Kartoffelgerichte und traditionelle Gemüseeintöpfe.
                Gerne beraten wir Sie auch zu veganen Optionen.
              </p>
            </div>

            <div className="bg-gradient-to-r from-secondary-light to-secondary rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/10">
              <h3 className="text-2xl font-playfair font-bold text-primary mb-4 flex items-center gap-3">
                👥 Können Sie auch größere Gruppen bedienen?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ja, gerne! Für Gruppen ab 8 Personen empfehlen wir eine telefonische
                Reservierung, da wir dann spezielle Arrangements und Menüs anbieten können.
                Wir haben Erfahrung mit Firmenveranstaltungen, Geburtstagen und anderen
                besonderen Anlässen. Rufen Sie uns an: <strong>+49 89 20076057</strong>
              </p>
            </div>

            <div className="bg-gradient-to-r from-secondary-light to-secondary rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/10">
              <h3 className="text-2xl font-playfair font-bold text-primary mb-4 flex items-center gap-3">
                🅿️ Gibt es Parkmöglichkeiten?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ja, in der Umgebung gibt es verschiedene Parkmöglichkeiten. Straßenparkplätze
                sind in der Regel verfügbar, und es gibt auch kostenpflichtige Parkplätze
                in der Nähe. Wir empfehlen auch die Anreise mit öffentlichen Verkehrsmitteln -
                der Ostbahnhof ist nur 5 Minuten zu Fuß entfernt.
              </p>
            </div>

            <div className="bg-gradient-to-r from-secondary-light to-secondary rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/10">
              <h3 className="text-2xl font-playfair font-bold text-primary mb-4 flex items-center gap-3">
                🍺 Haben Sie auch tschechisches Bier?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Natürlich! Zu einem authentischen tschechischen Restaurant gehört auch
                original tschechisches Bier. Wir führen verschiedene Sorten, darunter
                klassische Pilsner und andere regionale Spezialitäten. Lassen Sie sich
                von unserem Team beraten - wir finden das perfekte Bier zu Ihrem Gericht!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-accent to-accent-dark text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-5xl font-playfair font-bold mb-8">
            Wir freuen uns auf Ihren Besuch!
          </h2>
          <p className="text-2xl mb-12 text-accent-light max-w-4xl mx-auto leading-relaxed">
            Erleben Sie authentische tschechische Küche in gemütlicher Atmosphäre.
            Reservieren Sie jetzt Ihren Tisch oder rufen Sie uns für weitere Informationen an.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/reservierung"
              className="bg-white text-accent hover:bg-secondary-light font-bold text-xl py-5 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center gap-3"
            >
              <Clock className="w-6 h-6" />
              Online reservieren
            </a>
            <a
              href="tel:+498920076057"
              className="border-3 border-white text-white hover:bg-white hover:text-accent font-bold text-xl py-5 px-12 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              +49 89 20076057
            </a>
          </div>
          <div className="mt-8 p-6 bg-white/10 rounded-2xl max-w-2xl mx-auto">
            <p className="text-accent-light text-lg">
              <strong>Öffnungszeiten:</strong> Mo-Sa 11:30-14:30 & 17:30-23:00 | So 11:30-22:00
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
