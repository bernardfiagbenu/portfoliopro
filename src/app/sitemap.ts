
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://studio--portfolio-pro-39cd8.us-central1.hosted.app';
  const today = new Date().toISOString();

  const pages: Array<{ path: string; priority: number; changeFrequency: 'yearly' | 'monthly' | 'weekly' | 'daily' | 'hourly' | 'always' | 'never' }> = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/projects', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/skills', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/research', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return pages.map(page => ({
    url: `${siteUrl}${page.path}`,
    lastModified: today,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
