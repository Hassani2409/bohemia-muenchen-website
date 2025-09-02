import { Clock } from 'lucide-react';
import AIChatbot from '@/components/AIChatbot';

const menuItems = {
  vorspeisen: [
    {
      name: "Bramboráčky",
      description: "Traditionelle tschechische Kartoffelpuffer mit Knoblauch und Majoran",
      price: "8,50 €",
      preparationTime: "15 Min",
      popular: true,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Goldbraune tschechische Kartoffelpuffer mit Kräutern"
    },
    {
      name: "Utopenec",
      description: "Eingelegte Würstchen mit Zwiebeln, Essig und Gewürzen",
      price: "9,50 €",
      preparationTime: "10 Min",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Eingelegte tschechische Würstchen mit Zwiebeln"
    },
    {
      name: "Smažený sýr",
      description: "Gebackener Edamer-Käse mit Preiselbeeren und Kartoffelsalat",
      price: "10,50 €",
      preparationTime: "12 Min",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Goldbraun panierter Käse mit Preiselbeeren"
    }
  ],
  hauptgerichte: [
    {
      name: "Svíčková na smetaně",
      description: "Rindfleisch in Rahmsauce mit Knödeln, Preiselbeeren und Sahne",
      price: "18,50 €",
      preparationTime: "25 Min",
      popular: true,
      signature: true,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Svíčková na smetaně - tschechisches Nationalgericht mit Rindfleisch und Knödeln"
    },
    {
      name: "Guláš",
      description: "Traditioneller tschechischer Gulasch mit Knödeln und Zwiebeln",
      price: "16,50 €",
      preparationTime: "20 Min",
      popular: true,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Herzhafter tschechischer Gulasch mit Semmelknödeln"
    },
    {
      name: "Vepřo knedlo zelo",
      description: "Schweinebraten mit Knödeln und Sauerkraut",
      price: "17,50 €",
      preparationTime: "22 Min",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Saftiger Schweinebraten mit Knödeln und Sauerkraut"
    },
    {
      name: "Kachna na červeném zelí",
      description: "Ente mit Rotkohl und Knödeln",
      price: "19,50 €",
      preparationTime: "30 Min",
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Knusprige Ente mit Rotkohl und böhmischen Knödeln"
    },
    {
      name: "Smažený řízek",
      description: "Wiener Schnitzel vom Schwein mit Kartoffelsalat",
      price: "15,50 €",
      preparationTime: "18 Min",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Goldbraunes Wiener Schnitzel mit Kartoffelsalat"
    }
  ],
  beilagen: [
    {
      name: "Knedlíky",
      description: "Hausgemachte Semmelknödel",
      price: "4,50 €",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Traditionelle böhmische Semmelknödel"
    },
    {
      name: "Bramborový salát",
      description: "Kartoffelsalat nach tschechischer Art",
      price: "4,50 €",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Cremiger tschechischer Kartoffelsalat"
    },
    {
      name: "Červené zelí",
      description: "Rotkohl mit Äpfeln und Gewürzen",
      price: "4,00 €",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Traditioneller Rotkohl mit Äpfeln"
    }
  ],
  desserts: [
    {
      name: "Trdelník",
      description: "Traditioneller tschechischer Schornsteinkuchen mit Zimt und Zucker",
      price: "6,50 €",
      popular: true,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Traditioneller Trdelník mit Zimt und Zucker"
    },
    {
      name: "Ovocné knedlíky",
      description: "Obstknödel mit Mohn und Zucker",
      price: "7,50 €",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Süße Obstknödel mit Mohn bestäubt"
    },
    {
      name: "Medovník",
      description: "Honigkuchen mit Sahnecreme",
      price: "6,00 €",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Traditioneller Honigkuchen mit cremiger Füllung"
    }
  ],
  getränke: [
    {
      name: "Pilsner Urquell",
      description: "Original tschechisches Pilsner Bier (0,5L)",
      price: "5,50 €",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Frisch gezapftes Pilsner Urquell Bier"
    },
    {
      name: "Kofola",
      description: "Tschechische Cola-Alternative",
      price: "3,50 €",
      image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Erfrischende Kofola in traditionellem Glas"
    },
    {
      name: "Becherovka",
      description: "Tschechischer Kräuterlikör",
      price: "4,50 €",
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Traditioneller Becherovka Kräuterlikör"
    }
  ]
};

export default function SpeisekartePage() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Unsere Speisekarte
            </h1>
            <p className="text-xl text-secondary-light max-w-3xl mx-auto">
              Entdecken Sie authentische tschechische Küche mit traditionellen Rezepten, 
              die über Generationen weitergegeben wurden
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Vorspeisen */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">
              Vorspeisen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.vorspeisen.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {/* Bild */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {item.popular && (
                      <span className="absolute top-4 right-4 bg-accent text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                        ⭐ Beliebt
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                      {item.preparationTime && (
                        <div className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.preparationTime}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hauptgerichte */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">
              Hauptgerichte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.hauptgerichte.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {/* Bild */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {item.signature && (
                        <span className="bg-primary text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                          👑 Hausmarke
                        </span>
                      )}
                      {item.popular && (
                        <span className="bg-accent text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                          ⭐ Beliebt
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                      {item.preparationTime && (
                        <div className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.preparationTime}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Beilagen */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">
              Beilagen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuItems.beilagen.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {/* Bild */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">
              Desserts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuItems.desserts.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {/* Bild */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {item.popular && (
                      <span className="absolute top-4 right-4 bg-accent text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                        ⭐ Beliebt
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Getränke */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">
              Getränke
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuItems.getränke.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {/* Bild */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Appetit bekommen?
          </h2>
          <p className="text-xl mb-8">
            Reservieren Sie Ihren Tisch und genießen Sie unsere authentische tschechische Küche
          </p>
          <a href="/reservierung" className="btn-primary text-lg px-8 py-4">
            Jetzt reservieren
          </a>
        </div>
      </section>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
