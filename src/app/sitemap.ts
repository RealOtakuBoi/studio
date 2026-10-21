
import type { MetadataRoute } from 'next'

const baseUrl = 'https://enactushansraj.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/impact',
    '/newsletter',
    '/shop',
    '/team',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }))
}
