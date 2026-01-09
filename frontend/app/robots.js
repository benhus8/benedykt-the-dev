export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://benedykt.huszcza.dev/sitemap.xml',
  }
}
