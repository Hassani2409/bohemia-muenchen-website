import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";

// Font optimization with preload and display swap
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: "Bohemia München - Authentische Tschechische Küche",
  description: "Genießen Sie authentische tschechische Spezialitäten im Herzen Münchens. 4.9/5 Sterne ⭐ Jetzt reservieren!",
  keywords: [
    'tschechisches restaurant münchen',
    'böhmische küche',
    'svíčková münchen',
    'gulasch restaurant',
    'tschechisches bier',
    'pilsner urquell münchen',
    'restaurant am lilienberg',
    'authentische tschechische küche',
    'böhmische spezialitäten',
    'knödel restaurant münchen'
  ],
  authors: [{ name: "Bohemia München" }],
  creator: "Bohemia München",
  publisher: "Bohemia München",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3001'),
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/de',
      'cs-CZ': '/cs',
    },
  },
  openGraph: {
    title: "Bohemia München - Authentische Tschechische Küche",
    description: "Genießen Sie authentische tschechische Spezialitäten im Herzen Münchens. 4.9/5 Sterne ⭐ Jetzt reservieren!",
    url: "/",
    siteName: "Bohemia München",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bohemia München - Authentische Tschechische Küche',
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bohemia München - Authentische Tschechische Küche',
    description: 'Genießen Sie authentische tschechische Spezialitäten im Herzen Münchens. 4.9/5 Sterne ⭐ Jetzt reservieren!',
    images: ['/og-image.jpg'],
    creator: '@bohemia_muenchen',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`min-h-screen bg-secondary ${inter.variable} ${playfair.variable}`}>
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <nav className="container-custom">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-playfair font-bold text-primary">
                  Bohemia München
                </h1>
                <span className="text-sm text-gray-600 hidden sm:block">
                  Tschechische Küche
                </span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-primary hover:text-accent transition-colors">
                  Startseite
                </a>
                <a href="/speisekarte" className="text-primary hover:text-accent transition-colors">
                  Speisekarte
                </a>
                <a href="/reservierung" className="text-primary hover:text-accent transition-colors">
                  Reservierung
                </a>
                <a href="/kontakt" className="text-primary hover:text-accent transition-colors">
                  Kontakt
                </a>
                <a href="/analytics" className="text-accent hover:text-accent-dark transition-colors font-medium">
                  📊 Analytics
                </a>
                <a href="/demo" className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-lg transition-colors font-medium">
                  🚀 Demo
                </a>
              </div>
              
              <div className="md:hidden">
                <button 
                  className="text-primary hover:text-accent"
                  aria-label="Menü öffnen"
                  title="Menü öffnen"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>
        
        <main>
          {children}
        </main>
        
        <footer className="bg-primary text-white py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-4">Bohemia München</h3>
                <p className="text-secondary-light">
                  Authentische tschechische Küche im Herzen Münchens
                </p>
              </div>
              <div>
                <h4 className="text-lg font-playfair font-semibold mb-4">Kontakt</h4>
                <p className="text-secondary-light mb-2">Am Lilienberg 5</p>
                <p className="text-secondary-light mb-2">81669 München</p>
                <p className="text-secondary-light">+49 89 20076057</p>
              </div>
              <div>
                <h4 className="text-lg font-playfair font-semibold mb-4">Öffnungszeiten</h4>
                <p className="text-secondary-light mb-2">Mo-Sa: 11:00 - 23:00</p>
                <p className="text-secondary-light">So: 12:00 - 22:00</p>
              </div>
            </div>
            <div className="border-t border-primary-light mt-8 pt-8 text-center text-secondary-light">
              <p>&copy; 2024 Bohemia München. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
