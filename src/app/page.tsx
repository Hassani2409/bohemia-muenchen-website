export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Simplified for Production */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
          }}
        ></div>

        {/* Hero Content */}
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

      {/* Große Bildergalerie - Authentische tschechische Küche */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Authentische tschechische Küche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie die Vielfalt unserer traditionellen böhmischen Gerichte
            </p>
          </div>
          
          {/* Große Bildergalerie */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Svíčková na smetaně */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Svíčková na smetaně"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Svíčková na smetaně</h3>
                  <p className="text-sm">Tschechisches Nationalgericht</p>
                </div>
              </div>
            </div>

            {/* Böhmischer Gulasch */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Böhmischer Gulasch"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Böhmischer Gulasch</h3>
                  <p className="text-sm">Traditionell zubereitet</p>
                </div>
              </div>
            </div>

            {/* Pilsner Urquell */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pilsner Urquell"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Pilsner Urquell</h3>
                  <p className="text-sm">Frisch gezapft</p>
                </div>
              </div>
            </div>

            {/* Vepřo knedlo zelo */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Vepřo knedlo zelo"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Vepřo knedlo zelo</h3>
                  <p className="text-sm">Die heilige Dreifaltigkeit</p>
                </div>
              </div>
            </div>

            {/* Trdelník */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Trdelník"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Trdelník</h3>
                  <p className="text-sm">Süßer Schornsteinkuchen</p>
                </div>
              </div>
            </div>

            {/* Smažený řízek */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Smažený řízek"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Smažený řízek</h3>
                  <p className="text-sm">Goldbraun paniert</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                type="button"
                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Speisekarte ansehen
              </button>
              <button 
                type="button"
                className="px-8 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Jetzt reservieren
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes - Simplified */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Spezialitäten</h2>
            <p className="text-xl text-gray-600">Authentische tschechische Gerichte, traditionell zubereitet</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Svíčková na smetaně"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Svíčková na smetaně</h3>
                <p className="text-gray-600">Unser Nationalgericht - zartes Rindfleisch in cremiger Sauce</p>
                <div className="text-amber-600 font-semibold mt-2">€18.50</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Böhmischer Gulasch"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Böhmischer Gulasch</h3>
                <p className="text-gray-600">Traditioneller Gulasch mit böhmischen Knödeln</p>
                <div className="text-amber-600 font-semibold mt-2">€16.90</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Pilsner Urquell"
                className="w-full h-64 object-cover"
              />
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
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Willkommen im Bohemia München
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Seit über 20 Jahren bringen wir Ihnen die authentischen Aromen der tschechischen Küche nach München.
                Unsere traditionellen Rezepte werden von Generation zu Generation weitergegeben und mit frischen,
                regionalen Zutaten zubereitet.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Erleben Sie die Gemütlichkeit einer echten böhmischen Wirtschaft im Herzen Münchens.
                Von herzhaften Hauptgerichten bis hin zu süßen Leckereien – bei uns finden Sie alles,
                was die tschechische Küche zu bieten hat.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Bohemia München Restaurant Interior - Authentische tschechische Atmosphäre"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Simplified */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Was unsere Gäste sagen</h2>
            <p className="text-xl text-gray-600">Über 500 zufriedene Gäste haben uns bewertet</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4">"Authentische tschechische Küche! Das Svíčková war perfekt zubereitet."</p>
              <div className="font-semibold text-gray-900">Maria K.</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4">"Gemütliche Atmosphäre und hervorragender Service. Sehr empfehlenswert!"</p>
              <div className="font-semibold text-gray-900">Thomas M.</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
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
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Besuchen Sie uns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Adresse</h3>
              <p className="text-gray-600">
                Musterstraße 123<br />
                80331 München
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Öffnungszeiten</h3>
              <p className="text-gray-600">
                Mo-Sa: 11:00 - 23:00<br />
                So: 12:00 - 22:00
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kontakt</h3>
              <p className="text-gray-600">
                Tel: +49 89 123456<br />
                info@bohemia-muenchen.de
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot */}
      {/* <AIChatbot /> */}
    </div>
  );
}
