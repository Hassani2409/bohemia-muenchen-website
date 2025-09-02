'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center p-8">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
        </div>
        
        {/* Error Message */}
        <h1 className="text-4xl font-playfair font-bold text-primary mb-4">
          Oops! Etwas ist schiefgelaufen
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Es tut uns leid, aber es ist ein unerwarteter Fehler aufgetreten. 
          Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
        </p>
        
        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-left">
            <h3 className="font-bold text-red-800 mb-2">Fehlerdetails (nur in Entwicklung sichtbar):</h3>
            <pre className="text-sm text-red-700 overflow-auto">
              {error.message}
            </pre>
            {error.digest && (
              <p className="text-sm text-red-600 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-3"
          >
            <RefreshCw className="w-5 h-5" />
            Erneut versuchen
          </button>
          
          <a
            href="/"
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-3"
          >
            <Home className="w-5 h-5" />
            Zur Startseite
          </a>
        </div>
        
        {/* Contact Information */}
        <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg">
          <h3 className="text-xl font-playfair font-bold text-primary mb-4">
            Brauchen Sie Hilfe?
          </h3>
          <p className="text-gray-600 mb-4">
            Falls das Problem weiterhin besteht, kontaktieren Sie uns gerne:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+498920076057"
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              📞 +49 89 20076057
            </a>
            <a
              href="mailto:info@bohemia-muenchen.de"
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              ✉️ info@bohemia-muenchen.de
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
