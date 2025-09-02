/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bohemia-muenchen.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/_next/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://bohemia-muenchen.vercel.app/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      '/': {
        priority: 1.0,
        changefreq: 'daily',
      },
      '/speisekarte': {
        priority: 0.9,
        changefreq: 'weekly',
      },
      '/reservierung': {
        priority: 0.9,
        changefreq: 'monthly',
      },
      '/kontakt': {
        priority: 0.8,
        changefreq: 'monthly',
      },
      '/analytics': {
        priority: 0.3,
        changefreq: 'never',
      },
      '/demo': {
        priority: 0.5,
        changefreq: 'monthly',
      },
    };

    const pageConfig = customConfig[path] || {};

    return {
      loc: path,
      changefreq: pageConfig.changefreq || config.changefreq,
      priority: pageConfig.priority || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
