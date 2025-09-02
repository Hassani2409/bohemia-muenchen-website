# Bohemia München - Tschechische Küche Website

Eine moderne Next.js 14 Website für das authentische tschechische Restaurant Bohemia München in München.

## 🏗️ Projektübersicht

Diese Website wurde entwickelt, um die veraltete Jimdo-Website von Bohemia München zu ersetzen und ein professionelles Online-Präsenz mit Online-Reservierungssystem zu bieten.

### 🎯 Hauptziele
- **Online-Reservierungssystem** implementieren (aktuell fehlend)
- **Mobile-first Design** für lokale Suchen optimieren
- **4.9/5 Google-Bewertung** prominent präsentieren
- **Authentische tschechische Atmosphäre** im Design vermitteln
- **Professionelle Alternative** zur aktuellen Jimdo-Website bieten

## 🚀 Technologie-Stack

- **Framework**: Next.js 14 mit App Router
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS
- **Animationen**: Framer Motion
- **Formulare**: React Hook Form + Zod Validierung
- **Icons**: Lucide React
- **Schriften**: Google Fonts (Playfair Display, Open Sans)

## 🎨 Design-System

### Farben
- **Primärfarbe**: #8B4513 (Sattelbraun) - Wärme, Tradition
- **Sekundärfarbe**: #F5E6D3 (Antikweiß) - Eleganz, Komfort
- **Akzentfarbe**: #D2691E (Schokolade) - Energie, Appetit

### Typografie
- **Überschriften**: Playfair Display (Serif)
- **Fließtext**: Open Sans (Sans-Serif)

### Markenwerte
- **Genuss** - Freude am Essen
- **Tradition** - Erbe bewahren
- **Gastfreundschaft** - Herzlicher Service
- **Qualität** - Beste Zutaten

## 📱 Seitenstruktur

1. **Startseite** (`/`) - Hero-Bereich mit 4.9/5 Bewertung
2. **Speisekarte** (`/speisekarte`) - Authentische tschechische Gerichte
3. **Reservierung** (`/reservierung`) - Online-Reservierungssystem
4. **Über Uns** (`/ueber-uns`) - Geschichte und Team
5. **Kontakt** (`/kontakt`) - Adresse, Telefon, Kontaktformular

## 🛠️ Installation & Entwicklung

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### Setup
```bash
# Repository klonen
git clone [repository-url]
cd bohemia-muenchen-website

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

### Build & Deployment
```bash
# Produktionsbuild erstellen
npm run build

# Produktionsserver starten
npm start

# Statischen Export (falls benötigt)
npm run export
```

## 🔧 Konfiguration

### Umgebungsvariablen
Erstellen Sie eine `.env.local` Datei:
```env
NEXT_PUBLIC_SITE_URL=https://bohemia-muenchen.de
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Tailwind CSS
Die Markenfarben sind in `tailwind.config.ts` definiert und können dort angepasst werden.

## 📊 Funktionen

### ✅ Implementiert
- Responsive Design (Mobile-first)
- Navigation mit allen Hauptseiten
- Hero-Bereiche mit Framer Motion Animationen
- Speisekarte mit authentischen tschechischen Gerichten
- Online-Reservierungssystem mit Formularvalidierung
- Kontaktformular
- SEO-optimierte Metadaten
- Deutsche Lokalisierung

### 🚧 Geplant für Produktion
- Echte API-Integration für Reservierungen
- E-Mail-Benachrichtigungen
- Google Maps Integration
- Analytics (Google Analytics, Google Search Console)
- Performance-Optimierungen
- SSL-Zertifikat
- Domain-Konfiguration

## 📱 Responsive Design

Die Website ist vollständig responsive und optimiert für:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎯 SEO & Performance

- **Meta-Tags** für alle Seiten
- **Open Graph** für Social Media
- **Strukturierte Daten** (Schema.org)
- **Bildoptimierung** mit Next.js Image
- **Lazy Loading** für bessere Performance

## 🔒 Sicherheit

- **Formularvalidierung** mit Zod
- **CSRF-Schutz** (bei API-Integration)
- **Input-Sanitization**
- **HTTPS** (bei Produktions-Deployment)

## 📈 Business Impact

### Aktuelles Problem
- **€22.500 monatlicher Umsatzverlust** durch veraltete Systeme
- **Fehlendes Online-Reservierungssystem**
- **Veraltete Jimdo-Website**

### Erwartete Verbesserungen
- **Online-Reservierungen** 24/7 verfügbar
- **Bessere lokale Sichtbarkeit** durch moderne Website
- **Erhöhte Konversion** durch professionelles Design
- **Mobile Optimierung** für lokale Suchen

## 🤝 Beitragen

1. Fork des Repositories
2. Feature-Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request erstellen

## 📄 Lizenz

Dieses Projekt ist für Bohemia München entwickelt. Alle Rechte vorbehalten.

## 📞 Kontakt

**Bohemia München**
- **Adresse**: Am Lilienberg 5, 81669 München
- **Telefon**: +49 89 20076057
- **Website**: https://bohemiamunchen.jimdosite.com/ (aktuell)
- **Neue Website**: In Entwicklung

---

**Entwickelt mit ❤️ für authentische tschechische Küche in München**
