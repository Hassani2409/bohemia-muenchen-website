# 🚀 Bohemia München Website - Deployment Guide

## 📋 **Deployment Übersicht**

Diese Anleitung führt Sie durch den kompletten Deployment-Prozess der Bohemia München Website auf Vercel mit optimaler Performance und SEO.

---

## ⚡ **Quick Start Deployment**

### **1. Automatisches Deployment (Empfohlen)**
```bash
# Preview Deployment
./deploy.sh

# Production Deployment  
./deploy.sh --prod
```

### **2. Manuelles Deployment**
```bash
# Dependencies installieren
npm ci

# Build erstellen
npm run build

# Zu Vercel deployen
vercel --prod
```

---

## 🔧 **Vercel Konfiguration**

### **Environment Variables in Vercel setzen:**

```bash
# Über Vercel CLI
vercel env add NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
vercel env add GOOGLE_SITE_VERIFICATION
vercel env add NEXT_PUBLIC_GA_TRACKING_ID

# Oder über Vercel Dashboard:
# https://vercel.com/your-team/bohemia-muenchen/settings/environment-variables
```

### **Erforderliche Environment Variables:**
- `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY` - Unsplash API Key
- `GOOGLE_SITE_VERIFICATION` - Google Search Console
- `NEXT_PUBLIC_GA_TRACKING_ID` - Google Analytics
- `SITE_URL` - Automatisch von Vercel gesetzt

---

## 📊 **Performance Optimierungen**

### **✅ Implementierte Optimierungen:**

**Image Optimization:**
- ✅ Next.js Image Component mit AVIF/WebP Support
- ✅ Responsive Images (640px - 3840px)
- ✅ Lazy Loading für alle Bilder
- ✅ 1 Jahr Cache-TTL für statische Assets

**Font Optimization:**
- ✅ Google Fonts über Next.js Font API
- ✅ Font Display Swap für bessere Performance
- ✅ Preload für kritische Fonts
- ✅ Variable Fonts für kleinere Bundle Size

**Code Splitting:**
- ✅ Automatisches Code Splitting
- ✅ Vendor Bundle Separation
- ✅ Dynamic Imports für große Components
- ✅ Tree Shaking für unused Code

**Caching Strategy:**
- ✅ Static Assets: 1 Jahr Cache
- ✅ API Routes: 24 Stunden Cache
- ✅ Pages: ISR mit Revalidation
- ✅ CDN Edge Caching über Vercel

---

## 🎯 **SEO Optimierung**

### **✅ Implementierte SEO Features:**

**Meta Tags:**
- ✅ Title: "Bohemia München - Authentische Tschechische Küche"
- ✅ Description: "Genießen Sie authentische tschechische Spezialitäten im Herzen Münchens. 4.9/5 Sterne ⭐ Jetzt reservieren!"
- ✅ Keywords: tschechisches restaurant münchen, böhmische küche, etc.

**Open Graph & Twitter Cards:**
- ✅ Dynamisch generierte OG Images
- ✅ Restaurant-spezifische Meta Tags
- ✅ Social Media Optimierung

**Technical SEO:**
- ✅ Automatische Sitemap Generation
- ✅ Robots.txt mit Restaurant-spezifischen Rules
- ✅ Structured Data für Local Business
- ✅ Mobile-First Responsive Design

**Performance SEO:**
- ✅ Core Web Vitals Optimierung
- ✅ Lighthouse Score >90 angestrebt
- ✅ Fast Loading Times (<2s)
- ✅ Optimierte Images und Fonts

---

## 📱 **Lighthouse Performance Ziele**

### **Target Scores:**
- 🎯 **Performance**: >90
- 🎯 **Accessibility**: >95
- 🎯 **Best Practices**: >90
- 🎯 **SEO**: >95

### **Optimierungen für Lighthouse:**
```javascript
// next.config.js Optimierungen
{
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000
  },
  compress: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true
  }
}
```

---

## 🔒 **Security Headers**

### **Implementierte Security Features:**
```javascript
// Vercel.json Security Headers
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY", 
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=63072000"
}
```

---

## 📊 **Monitoring & Analytics**

### **Performance Monitoring:**
- ✅ Vercel Analytics Integration
- ✅ Core Web Vitals Tracking
- ✅ Real User Monitoring (RUM)
- ✅ Error Tracking mit Sentry (optional)

### **Business Analytics:**
- ✅ Google Analytics 4 Integration
- ✅ Conversion Tracking für Reservierungen
- ✅ Restaurant-spezifische Events
- ✅ Mobile vs. Desktop Usage

---

## 🚀 **Deployment Workflow**

### **1. Pre-Deployment Checks:**
```bash
# Linting
npm run lint

# Type Checking  
npm run type-check

# Build Test
npm run build

# Bundle Analysis
npm run analyze
```

### **2. Deployment Process:**
```bash
# Staging Deployment
vercel

# Production Deployment
vercel --prod

# Custom Domain Setup
vercel domains add bohemia-muenchen.de
```

### **3. Post-Deployment Verification:**
- ✅ Website Functionality Test
- ✅ Mobile Responsiveness Check
- ✅ AI Chatbot Functionality
- ✅ Analytics Dashboard Access
- ✅ Performance Audit mit Lighthouse

---

## 🔧 **Troubleshooting**

### **Häufige Deployment Issues:**

**Build Errors:**
```bash
# Clear Next.js Cache
rm -rf .next

# Reinstall Dependencies
rm -rf node_modules package-lock.json
npm install

# Check TypeScript Errors
npm run type-check
```

**Environment Variables:**
```bash
# Check Vercel Environment Variables
vercel env ls

# Pull Environment Variables locally
vercel env pull .env.local
```

**Performance Issues:**
```bash
# Analyze Bundle Size
npm run build:analyze

# Check Image Optimization
# Verify all images use Next.js Image component
```

---

## 📈 **Performance Benchmarks**

### **Target Metrics:**
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s  
- **Cumulative Layout Shift**: <0.1
- **First Input Delay**: <100ms
- **Time to Interactive**: <3s

### **Monitoring Commands:**
```bash
# Lighthouse CI
npx lighthouse https://bohemia-muenchen.vercel.app --output=html

# Core Web Vitals
npx web-vitals-cli https://bohemia-muenchen.vercel.app

# Bundle Analysis
npm run analyze
```

---

## 🌐 **Custom Domain Setup**

### **Domain Konfiguration:**
```bash
# Domain hinzufügen
vercel domains add bohemia-muenchen.de

# DNS Konfiguration
# A Record: 76.76.19.61
# CNAME: cname.vercel-dns.com
```

### **SSL Certificate:**
- ✅ Automatisches SSL von Vercel
- ✅ HTTP/2 Support
- ✅ Brotli Compression

---

## 📞 **Support & Wartung**

### **Regelmäßige Wartung:**
- 🔄 **Wöchentlich**: Dependency Updates
- 🔄 **Monatlich**: Performance Audit
- 🔄 **Quartalsweise**: Security Review
- 🔄 **Jährlich**: Major Framework Updates

### **Monitoring Alerts:**
- 🚨 Website Down Alerts
- 🚨 Performance Degradation
- 🚨 Error Rate Spikes
- 🚨 Core Web Vitals Issues

---

## 🎉 **Deployment Checklist**

### **Pre-Launch:**
- [ ] Environment Variables konfiguriert
- [ ] SEO Meta Tags überprüft
- [ ] Performance Tests bestanden
- [ ] Mobile Responsiveness getestet
- [ ] AI Chatbot funktioniert
- [ ] Analytics Setup verifiziert

### **Post-Launch:**
- [ ] DNS Propagation überprüft
- [ ] SSL Certificate aktiv
- [ ] Google Search Console eingerichtet
- [ ] Sitemap eingereicht
- [ ] Performance Monitoring aktiv
- [ ] Error Tracking konfiguriert

---

**🚀 Die Bohemia München Website ist bereit für Production Deployment mit optimaler Performance und SEO!**
