export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-amber-900 to-amber-700">
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            Bohemia München
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100 drop-shadow-lg max-w-2xl mx-auto">
            Authentische tschechische Küche im Herzen Münchens
          </p>

          {/* Google Rating */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 inline-block border border-white/20 mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">4.8</div>
              <div className="text-sm text-amber-100">Google Bewertungen</div>
              <div className="text-xs text-amber-200 mt-1">Über 500 zufriedene Gäste</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/reservierung"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🍽️ Jetzt reservieren
            </a>
            <a
              href="/speisekarte"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              👨‍🍳 Speisekarte ansehen
            </a>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Spezialitäten</h2>
            <p className="text-xl text-gray-600">Authentische tschechische Gerichte, traditionell zubereitet</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center">
                <span className="text-6xl">🥩</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Svíčková na smetaně</h3>
                <p className="text-gray-600">Unser Nationalgericht - zartes Rindfleisch in cremiger Sauce</p>
                <div className="text-amber-600 font-semibold mt-2">€18.50</div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-red-200 to-red-400 flex items-center justify-center">
                <span className="text-6xl">🍲</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Böhmischer Gulasch</h3>
                <p className="text-gray-600">Traditioneller Gulasch mit böhmischen Knödeln</p>
                <div className="text-amber-600 font-semibold mt-2">€16.90</div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center">
                <span className="text-6xl">🍺</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pilsner Urquell</h3>
                <p className="text-gray-600">Frisch gezapftes Original aus Pilsen</p>
                <div className="text-amber-600 font-semibold mt-2">€4.20</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Willkommen im Bohemia München</h2>
              <p className="text-lg text-gray-700 mb-6">
                Seit über 20 Jahren bringen wir Ihnen die authentische Küche Böhmens nach München. 
                Unsere traditionellen Rezepte werden mit frischen, regionalen Zutaten zubereitet.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Erleben Sie die Gemütlichkeit einer echten böhmischen Wirtschaft in unserem 
                liebevoll eingerichteten Restaurant im Herzen Münchens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/ueber-uns"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Mehr über uns
                </a>
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold rounded-lg transition-colors"
                >
                  Kontakt
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 to-amber-400 rounded-2xl h-96 flex items-center justify-center">
                <span className="text-8xl">🏛️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Was unsere Gäste sagen</h2>
            <p className="text-xl text-gray-600">Über 500 zufriedene Gäste haben uns bewertet</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4">"Authentische tschechische Küche! Das Svíčková war perfekt zubereitet."</p>
              <div className="font-semibold text-gray-900">Maria K.</div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4">"Gemütliche Atmosphäre und hervorragender Service. Sehr empfehlenswert!"</p>
              <div className="font-semibold text-gray-900">Thomas M.</div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4">"Das beste tschechische Restaurant in München. Immer wieder gerne!"</p>
              <div className="font-semibold text-gray-900">Anna S.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Besuchen Sie uns</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">📍 Adresse</h3>
              <p className="text-gray-300">
                Musterstraße 123<br />
                80331 München
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">📞 Telefon</h3>
              <p className="text-gray-300">
                +49 89 123 456 78
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">🕒 Öffnungszeiten</h3>
              <p className="text-gray-300">
                Mo-So: 11:00 - 23:00 Uhr
              </p>
            </div>
          </div>
          <div className="mt-12">
            <a
              href="/reservierung"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              🍽️ Jetzt Tisch reservieren
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Bohemia München. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}
