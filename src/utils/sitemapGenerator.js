// Sitemap Generator Utility
export const generateSitemap = () => {
  const baseUrl = 'https://jifsacareers.com';
  
  // List of all pages in your application
  const pages = [
    { path: '/', priority: 1.0, changefreq: 'daily' },
    { path: '/contact', priority: 0.8, changefreq: 'monthly' },
    { path: '/gallery', priority: 0.7, changefreq: 'weekly' },
    { path: '/resedent', priority: 0.6, changefreq: 'weekly' },
    { path: '/vision-mission', priority: 0.6, changefreq: 'monthly' },
    { path: '/membership', priority: 0.6, changefreq: 'monthly' },
    { path: '/advisory-board', priority: 0.6, changefreq: 'monthly' },
    { path: '/chairman-message', priority: 0.6, changefreq: 'monthly' },
    { path: '/directors-message', priority: 0.6, changefreq: 'monthly' },
    { path: '/qualifications', priority: 0.9, changefreq: 'weekly' },
    { path: '/online-courses', priority: 0.8, changefreq: 'weekly' },
    { path: '/fire-safety-faqs', priority: 0.7, changefreq: 'monthly' },
    { path: '/recruited-students', priority: 0.7, changefreq: 'monthly' },
    { path: '/student-testimonials', priority: 0.7, changefreq: 'monthly' },
    { path: '/scope-fire-safety', priority: 0.7, changefreq: 'monthly' },
    { path: '/demand-supply-fire-safety', priority: 0.7, changefreq: 'monthly' },
    { path: '/future-prospects', priority: 0.7, changefreq: 'monthly' },
    { path: '/safety-career', priority: 0.7, changefreq: 'monthly' },
    { path: '/placement-cell', priority: 0.8, changefreq: 'weekly' },
    { path: '/press-release', priority: 0.6, changefreq: 'monthly' },
    { path: '/admission-form', priority: 0.9, changefreq: 'monthly' },
    { path: '/practical-training-forms', priority: 0.8, changefreq: 'monthly' },
    { path: '/placement-forms', priority: 0.8, changefreq: 'monthly' },
    { path: '/student-complaint', priority: 0.6, changefreq: 'monthly' },
    { path: '/certificate-verification', priority: 0.7, changefreq: 'monthly' },
    { path: '/marksheet-correction', priority: 0.7, changefreq: 'monthly' },
    { path: '/careers', priority: 0.8, changefreq: 'weekly' }
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

// Function to save sitemap to file (for build process)
export const saveSitemapToFile = () => {
  const fs = require('fs');
  const sitemap = generateSitemap();
  
  // In a real implementation, you would save this to your public directory
  // fs.writeFileSync('public/sitemap.xml', sitemap);
  
  console.log('Sitemap generated successfully');
  return sitemap;
};