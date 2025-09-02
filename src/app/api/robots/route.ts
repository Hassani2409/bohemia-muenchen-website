import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /analytics
Disallow: /demo

User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /analytics
Disallow: /demo

User-agent: Bingbot
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /analytics
Disallow: /demo

Sitemap: ${process.env.SITE_URL || 'https://bohemia-muenchen.vercel.app'}/sitemap.xml

# Restaurant-specific crawling guidelines
Crawl-delay: 1

# Allow social media bots for better sharing
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /
`.trim();

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}
