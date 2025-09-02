'use client';

import { useState } from 'react';
import { CheckCircle, TrendingUp, Users, Star, Phone, Mail, Calendar, Euro, Zap, Target, BarChart3 } from 'lucide-react';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurant: '',
    interest: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "+47% mehr Reservierungen",
      description: "Durchschnittliche Steigerung bei unseren Restaurant-Kunden"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "24/7 Kundenservice",
      description: "AI-Chatbot beantwortet Fragen auch außerhalb der Öffnungszeiten"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "4.9★ Bewertungen",
      description: "Verbesserte Online-Reputation durch professionelle Präsenz"
    },
    {
      icon: <Euro className="w-8 h-8 text-purple-600" />,
      title: "€18,500+ Mehrumsatz",
      description: "Monatlicher Zusatzumsatz durch digitale Optimierung"
    }
  ];

  const features = [
    "🎨 Professionelles Restaurant-Design",
    "📱 Mobile-optimierte Website",
    "🤖 AI-Chatbot für Kundenanfragen",
    "📊 Live Analytics Dashboard",
    "🍽️ Dynamische Speisekarten",
    "⭐ Review-Management System",
    "📞 Click-to-Call Integration",
    "🗺️ Google Maps Integration",
    "📧 E-Mail Marketing Automation",
    "📈 SEO-Optimierung",
    "🔒 DSGVO-konforme Datenverarbeitung",
    "⚡ Blitzschnelle Ladezeiten"
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center p-8">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            Vielen Dank für Ihr Interesse!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen mit einer personalisierten Demo 
            und einem unverbindlichen Angebot.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Was passiert als nächstes?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <span>Analyse Ihrer aktuellen Online-Präsenz</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <span>Personalisierte Demo-Website für Ihr Restaurant</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <span>Unverbindliches Beratungsgespräch (30 Min)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <span>Maßgeschneidertes Angebot mit ROI-Prognose</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-playfair font-bold text-primary mb-6 animate-fade-in-up">
              Restaurant-Website Demo
            </h1>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
              Sehen Sie, wie eine professionelle Website Ihr Restaurant-Business transformiert
            </p>
            <div className="mt-8 animate-fade-in-up-delay-2">
              <span className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold text-lg">
                ✨ Live-Demo verfügbar • Kostenlose Beratung
              </span>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form & Features */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Features List */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-8">
                Was Sie bekommen:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-primary to-accent text-white rounded-xl">
                <h3 className="text-2xl font-bold mb-4">🚀 Sofort-Vorteile</h3>
                <ul className="space-y-2">
                  <li>✅ Professionelle Online-Präsenz in 48h</li>
                  <li>✅ Mehr Reservierungen ab Tag 1</li>
                  <li>✅ Automatisierte Kundenanfragen</li>
                  <li>✅ Messbare ROI-Steigerung</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-2">
                Kostenlose Demo anfordern
              </h2>
              <p className="text-gray-600 mb-8">
                Lassen Sie uns eine personalisierte Demo für Ihr Restaurant erstellen
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Max Mustermann"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail Adresse *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="max@restaurant.de"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="+49 89 123456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    value={formData.restaurant}
                    onChange={(e) => setFormData({...formData, restaurant: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Mein Restaurant"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hauptinteresse
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="website">Neue Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="marketing">Online Marketing</option>
                    <option value="automation">Automatisierung</option>
                    <option value="analytics">Analytics & Tracking</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  🚀 Kostenlose Demo anfordern
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Keine Verpflichtungen • Kostenlose Beratung • DSGVO-konform
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-playfair font-bold text-primary mb-12">
            Vertrauen Sie auf unsere Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-gray-600">Erfolgreiche Restaurant-Websites</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">€2.3M+</div>
              <div className="text-gray-600">Zusätzlicher Umsatz generiert</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">4.9★</div>
              <div className="text-gray-600">Durchschnittliche Kundenbewertung</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
