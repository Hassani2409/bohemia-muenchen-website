# 🎨 Unsplash Integration für Bohemia München

## 🚀 Übersicht

Diese Integration bietet dynamische, hochwertige Bilder für die Bohemia München Website mit:

1. **Dynamische Hero-Hintergründe** für alle Seiten
2. **Tschechische Küche Bildergalerie** mit Lightbox-Funktionalität
3. **Sichere API-Implementierung** mit Fallback-Bildern
4. **Performance-Optimierung** mit Caching und Bildoptimierung

## 🔧 Setup & Konfiguration

### 1. Umgebungsvariablen

```bash
# .env.local erstellen
cp .env.example .env.local

# Unsplash API Key hinzufügen
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_actual_api_key_here
```

### 2. Unsplash Developer Account

1. Besuchen Sie [Unsplash Developers](https://unsplash.com/developers)
2. Erstellen Sie eine neue Anwendung
3. Kopieren Sie den Access Key
4. **WICHTIG**: Revozieren Sie die kompromittierten Keys!

## 📁 Komponenten

### DynamicHeroBackground

Dynamische Hero-Hintergründe mit authentischen tschechischen Restaurant-Bildern:

```tsx
<DynamicHeroBackground type="homepage" showFloatingElements={true}>
  <HeroContent title="Bohemia München" subtitle="...">
    {/* Ihr Content */}
  </HeroContent>
</DynamicHeroBackground>
```

**Features:**
- ✅ Automatische Bildauswahl basierend auf Seitentyp
- ✅ Fallback-Bilder für Offline-Betrieb
- ✅ Floating Food-Elemente
- ✅ Smooth Loading-Transitions
- ✅ Performance-optimiert

### CzechCuisineGallery

Interaktive Bildergalerie mit tschechischen Gerichten:

```tsx
<CzechCuisineGallery 
  title="Authentische tschechische Küche"
  subtitle="Entdecken Sie unsere Spezialitäten"
  imageCount={8}
  showAttribution={true}
/>
```

**Features:**
- ✅ Lightbox-Modal für Vollbildansicht
- ✅ Responsive Grid-Layout
- ✅ Loading-Skeleton
- ✅ Unsplash-Attribution
- ✅ Hover-Animationen

## 🔍 Suchbegriffe

### Tschechische Küche
- `czech food`
- `bohemian cuisine`
- `goulash`
- `schnitzel`
- `czech restaurant`
- `traditional czech food`
- `czech beer`
- `prague food`
- `czech dumplings`
- `svickova`

### Restaurant-Atmosphäre
- `restaurant interior`
- `cozy restaurant`
- `elegant dining`
- `restaurant atmosphere`
- `fine dining`
- `restaurant table setting`
- `warm restaurant lighting`
- `traditional restaurant`

## 🎯 Verwendung

### Homepage
```tsx
// Hero mit dynamischem Hintergrund
<DynamicHeroBackground type="homepage">
  {/* Content */}
</DynamicHeroBackground>

// Küche-Galerie
<CzechCuisineGallery imageCount={8} />
```

### Kontakt-Seite
```tsx
<DynamicHeroBackground type="contact" className="min-h-[70vh]">
  {/* Content */}
</DynamicHeroBackground>
```

### Reservierung-Seite
```tsx
<DynamicHeroBackground type="reservation" className="min-h-[50vh]">
  {/* Content */}
</DynamicHeroBackground>
```

## 🛡️ Sicherheit

### API-Schlüssel Schutz
- ✅ Umgebungsvariablen verwenden
- ✅ Niemals in Git committen
- ✅ Regelmäßig rotieren
- ✅ Client-side Access Key (sicher)

### Fallback-Strategie
```typescript
// Automatische Fallbacks bei API-Fehlern
const FALLBACK_IMAGES = {
  hero: {
    homepage: 'https://images.unsplash.com/...',
    contact: 'https://images.unsplash.com/...',
    reservation: 'https://images.unsplash.com/...'
  }
};
```

## ⚡ Performance

### Bildoptimierung
```typescript
// Automatische Größenanpassung
optimizeImageUrl(url, width, height, quality)

// Beispiel
optimizeImageUrl(image.urls.regular, 1200, 800, 80)
```

### Caching
- ✅ In-Memory Cache für API-Responses
- ✅ Browser-Cache für Bilder
- ✅ Lazy Loading für Galerie

### Loading-States
- ✅ Skeleton-Loading für Galerie
- ✅ Smooth Transitions für Hero-Bilder
- ✅ Loading-Indikatoren

## 📱 Responsive Design

### Breakpoints
- `hidden lg:block` - Floating-Elemente nur auf Desktop
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` - Responsive Grid
- `text-6xl md:text-8xl` - Responsive Typografie

## 🎨 Styling

### Animationen
- `animate-fade-in-up` - Sanfte Einblendung
- `animate-scale-in` - Skalierung beim Laden
- `animate-float` - Schwebende Elemente
- `animate-parallax-float` - Parallax-Effekt

### Overlays
- `hero-overlay` - Dunkler Gradient
- `hero-overlay-light` - Heller Gradient
- `backdrop-blur-md` - Glasmorphism-Effekt

## 🔧 Troubleshooting

### Häufige Probleme

1. **Bilder laden nicht**
   ```bash
   # Prüfen Sie die Umgebungsvariablen
   echo $NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
   
   # Server neu starten
   npm run dev
   ```

2. **API-Limit erreicht**
   - Fallback-Bilder werden automatisch verwendet
   - Caching reduziert API-Calls

3. **Langsame Ladezeiten**
   - Bildgrößen sind optimiert
   - Lazy Loading implementiert
   - CDN-Delivery von Unsplash

## 📊 Monitoring

### API-Usage
- Unsplash bietet 50 Requests/Stunde (Demo)
- 5000 Requests/Monat (Production)
- Caching reduziert tatsächliche Requests

### Performance-Metriken
- Bildladezeiten < 2s
- First Contentful Paint optimiert
- Cumulative Layout Shift minimiert

## 🚀 Deployment

### Produktions-Setup
1. Neue Unsplash-Keys generieren
2. Umgebungsvariablen in Hosting-Platform setzen
3. Build testen: `npm run build`
4. Performance prüfen

### Vercel Deployment
```bash
# Umgebungsvariablen setzen
vercel env add NEXT_PUBLIC_UNSPLASH_ACCESS_KEY

# Deploy
vercel --prod
```

## 📄 Attribution

Alle Bilder werden korrekt mit Unsplash-Attribution versehen:
- Fotografen-Credits
- Unsplash-Links
- UTM-Parameter für Tracking

---

## 🚨 AKTUELLER STATUS

### API Rate Limit Erreicht
Die bereitgestellten Unsplash API-Schlüssel haben das Rate Limit erreicht:
```
Rate Limit Exceeded
```

### Fallback-System Aktiv ✅
- ✅ **Hero-Hintergründe**: Verwenden hochwertige statische Bilder
- ✅ **Galerie**: Zeigt kuratierte tschechische Küche-Bilder
- ✅ **Floating-Elemente**: Authentische Czech Food-Bilder
- ✅ **Keine gebrochenen Layouts**: Vollständig funktionsfähig

### Nächste Schritte für Produktion
1. **Neue API-Schlüssel generieren** bei [Unsplash Developers](https://unsplash.com/developers)
2. **Rate Limit prüfen**: Demo = 50/Stunde, Production = 5000/Monat
3. **Umgebungsvariablen aktualisieren** in `.env.local`
4. **Fallback-Override entfernen** in `src/lib/unsplash.ts` (Zeile 104)

---

**⚠️ WICHTIGER SICHERHEITSHINWEIS:**
Die bereitgestellten API-Schlüssel wurden öffentlich geteilt und haben das Rate Limit erreicht. Generieren Sie neue Schlüssel für die Produktion!
