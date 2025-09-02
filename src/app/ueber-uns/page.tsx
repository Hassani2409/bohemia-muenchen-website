import { Star, MapPin, Phone, Clock, Users, Heart, Award, UtensilsCrossed } from 'lucide-react';

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Über Bohemia München
            </h1>
            <p className="text-xl text-secondary-light max-w-3xl mx-auto">
              Entdecken Sie die Geschichte und Tradition hinter unserem authentischen 
              tschechischen Restaurant im Herzen Münchens
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Bohemia München wurde 1998 von der Familie Novák gegründet, die ihre 
                  tschechischen Wurzeln und kulinarischen Traditionen nach München brachte. 
                  Was als kleiner Familienbetrieb begann, hat sich zu einem der beliebtesten 
                  tschechischen Restaurants der Stadt entwickelt.
                </p>
                <p>
                  Unsere Rezepte stammen aus dem böhmischen Raum und wurden über Generationen 
                  weitergegeben. Jedes Gericht wird mit Liebe und Sorgfalt zubereitet, 
                  wobei wir nur die besten und authentischsten Zutaten verwenden.
                </p>
                <p>
                  Heute führen wir das Erbe unserer Großeltern fort und bieten unseren 
                  Gästen ein Stück tschechische Heimat in München.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-in-right bg-secondary-light rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
                  Seit 1998
                </h3>
                <p className="text-gray-600">
                  Über 25 Jahre Erfahrung in der tschechischen Küche
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Unsere Kernwerte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diese vier Werte bilden das Fundament unseres Restaurants
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-slide-up">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <UtensilsCrossed className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-primary mb-3">Genuss</h3>
              <p className="text-gray-600">
                Wir glauben daran, dass Essen mehr ist als nur Nahrungsaufnahme. 
                Es ist ein Erlebnis, das alle Sinne anspricht und unvergessliche 
                Momente schafft.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-slide-up">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-primary mb-3">Tradition</h3>
              <p className="text-gray-600">
                Unsere Rezepte sind das Ergebnis jahrhundertelanger tschechischer 
                Küchentradition. Wir bewahren diese authentischen Geschmäcker 
                für kommende Generationen.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-slide-up">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-primary mb-3">Gastfreundschaft</h3>
              <p className="text-gray-600">
                Bei uns fühlen sich unsere Gäste wie zu Hause. Wir bieten einen 
                herzlichen Service und eine gemütliche Atmosphäre, die zum Verweilen einlädt.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-slide-up">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-primary mb-3">Qualität</h3>
              <p className="text-gray-600">
                Wir verwenden nur die besten Zutaten und achten auf sorgfältige 
                Zubereitung. Jedes Gericht wird mit Liebe und Aufmerksamkeit 
                für Details zubereitet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Unser Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hinter Bohemia München steht ein leidenschaftliches Team, das sich der 
              tschechischen Küche verschrieben hat
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-secondary-light rounded-lg animate-slide-up">
              <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                Familie Novák
              </h3>
              <p className="text-gray-600 mb-2">Gründer & Inhaber</p>
              <p className="text-sm text-gray-500">
                Die Familie Novák bringt über 25 Jahre Erfahrung in der tschechischen 
                Küche mit und führt das Restaurant mit Herz und Leidenschaft.
              </p>
            </div>
            
            <div className="text-center p-6 bg-secondary-light rounded-lg animate-slide-up">
              <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <UtensilsCrossed className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                Chefkoch Pavel
              </h3>
              <p className="text-gray-600 mb-2">Küchenchef</p>
              <p className="text-sm text-gray-500">
                Unser Küchenchef Pavel bringt authentische tschechische Rezepte 
                und jahrelange Erfahrung in die Küche von Bohemia München.
              </p>
            </div>
            
            <div className="text-center p-6 bg-secondary-light rounded-lg animate-slide-up">
              <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                Service Team
              </h3>
              <p className="text-gray-600 mb-2">Gastgeber</p>
              <p className="text-sm text-gray-500">
                Unser freundliches Service-Team sorgt dafür, dass sich jeder Gast 
                willkommen und umsorgt fühlt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="section-padding bg-accent text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Unsere Meilensteine
            </h2>
            <p className="text-xl text-accent-light max-w-3xl mx-auto">
              Ein Blick auf die wichtigsten Stationen unserer Geschichte
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold mb-2">1998</div>
              <p className="text-accent-light">Gründung von Bohemia München</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold mb-2">2005</div>
              <p className="text-accent-light">Erweiterung der Küche</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold mb-2">2015</div>
              <p className="text-accent-light">4.9/5 Google Bewertung</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold mb-2">2024</div>
              <p className="text-accent-light">Neue Website & Online-Reservierung</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Lernen Sie uns kennen
          </h2>
          <p className="text-xl mb-8 text-secondary-light">
            Besuchen Sie uns und erleben Sie authentische tschechische Gastfreundschaft
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/reservierung" className="bg-white text-primary hover:bg-secondary-light font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Jetzt reservieren
            </a>
            <a href="/kontakt" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
