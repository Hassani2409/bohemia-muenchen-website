'use client';

import { Search, Home, UtensilsCrossed, Calendar, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center p-8">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
          <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <Search className="w-10 h-10 text-primary" />
          </div>
        </div>
        
        {/* Error Message */}
        <h1 className="text-4xl font-playfair font-bold text-primary mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Die gesuchte Seite existiert leider nicht. Vielleicht haben Sie sich vertippt 
          oder die Seite wurde verschoben?
        </p>
        
        {/* Quick Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-playfair font-bold text-primary mb-6">
            Beliebte Seiten
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/"
              className="flex items-center gap-3 p-4 bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors group"
            >
              <Home className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              <div className="text-left">
                <div className="font-medium text-primary">Startseite</div>
                <div className="text-sm text-gray-600">Zurück zur Hauptseite</div>
              </div>
            </a>
            
            <a
              href="/speisekarte"
              className="flex items-center gap-3 p-4 bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors group"
            >
              <UtensilsCrossed className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              <div className="text-left">
                <div className="font-medium text-primary">Speisekarte</div>
                <div className="text-sm text-gray-600">Unsere Gerichte entdecken</div>
              </div>
            </a>
            
            <a
              href="/reservierung"
              className="flex items-center gap-3 p-4 bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors group"
            >
              <Calendar className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              <div className="text-left">
                <div className="font-medium text-primary">Reservierung</div>
                <div className="text-sm text-gray-600">Tisch online buchen</div>
              </div>
            </a>
            
            <a
              href="/kontakt"
              className="flex items-center gap-3 p-4 bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors group"
            >
              <Phone className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              <div className="text-left">
                <div className="font-medium text-primary">Kontakt</div>
                <div className="text-sm text-gray-600">Uns erreichen</div>
              </div>
            </a>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="/"
            className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-3"
          >
            <Home className="w-5 h-5" />
            Zur Startseite
          </a>
          
          <button
            type="button"
            onClick={() => window.history.back()}
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300"
          >
            Zurück
          </button>
        </div>
        
        {/* Restaurant Info */}
        <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-6">
          <h3 className="text-xl font-playfair font-bold mb-2">
            Besuchen Sie uns direkt!
          </h3>
          <p className="mb-4">
            Am Lilienberg 5, 81669 München
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+498920076057"
              className="text-white hover:text-secondary-light transition-colors font-medium"
            >
              📞 +49 89 20076057
            </a>
            <span className="hidden sm:block text-white/50">•</span>
            <span className="text-white/90">
              Mo-Sa: 11:30-14:30, 17:30-23:00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
