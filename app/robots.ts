import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Eğer gelecekte admin paneli yaparsak, Google'ın orayı taramasını engelliyoruz:
      disallow: ['/api/', '/admin/'], 
    },
    sitemap: 'https://www.epcon.com.tr/sitemap.xml',
  };
}