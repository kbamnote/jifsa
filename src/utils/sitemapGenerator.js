// Sitemap Generator Utility
export const generateSitemap = () => {
  const baseUrl = 'https://jifsacareers.com';
  
  // List of all pages in your application with lastmod dates
  const now = new Date().toISOString().split('T')[0];
  
  const pages = [
    { path: '/', priority: 1.0, changefreq: 'daily', lastmod: now },
    { path: '/contact', priority: 0.8, changefreq: 'monthly', lastmod: now },
    { path: '/gallery', priority: 0.7, changefreq: 'weekly', lastmod: now },
    { path: '/resedent', priority: 0.6, changefreq: 'weekly', lastmod: now },
    { path: '/vision-mission', priority: 0.6, changefreq: 'monthly', lastmod: now },
    { path: '/membership', priority: 0.6, changefreq: 'monthly', lastmod: now },
    { path: '/advisory-board', priority: 0.6, changefreq: 'monthly', lastmod: now },
    { path: '/chairman-message', priority: 0.6, changefreq: 'monthly', lastmod: now },
    { path: '/directors-message', priority: 0.6, changefreq: 'monthly', lastmod: now },
    { path: '/qualifications', priority: 0.9, changefreq: 'weekly', lastmod: now },
    { path: '/online-courses', priority: 0.8, changefreq: 'weekly', lastmod: now },
    { path: '/fire-safety-faqs', priority: 0.7, changefreq: 'monthly', lastmod: now },
    { path: '/recruited-students', priority: 0.7, changefreq: 'monthly', lastmod: now },
    { path: '/student-testimonials', priority: 0.7, changefreq: 'monthly', lastmod: now },
    { path: '/scope-fire-safety', priority: 0.7, changefreq: 'monthly', lastmod: now },
    { path: '/demand-supply-fire-safety', priority: 0.7, changefreq: 'monthly', lastmod: now },
    { path: '/future-prospects', priority: 0.7, changefreq: 'monthly', lastmod: now },
    { path: '/safety-career', priority: 0.7, changefreq: 'monthly', lastmod: now },
    { path: '/placement-cell', priority: 0.8, changefreq: 'weekly', lastmod: now },
    { path: '/press-release', priority: 0.6, changefreq: 'monthly', lastmod: now },
    { path: '/admission-form', priority: 0.9, changefreq: 'monthly', lastmod: now },
    { path: '/practical-training-forms', priority: 0.8, changefreq: 'monthly', lastmod: now },
    { path: '/placement-forms', priority: 0.8, changefreq: 'monthly', lastmod: now },
    { path: '/student-complaint', priority: 0.6, changefreq: 'monthly', lastmod: now },
    { path: '/certificate-verification', priority: 0.7, changefreq: 'monthly', lastmod: now },
    { path: '/marksheet-correction', priority: 0.7, changefreq: 'monthly', lastmod: now },
    { path: '/vice-chairperson-message', priority: 0.6, changefreq: 'monthly', lastmod: now },
    { path: '/careers', priority: 0.8, changefreq: 'weekly', lastmod: now }
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
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

// Generate robots.txt content
export const generateRobotsTxt = () => {
  const baseUrl = 'https://jifsacareers.com';
  
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Host
Host: ${baseUrl}
`;
};

// Function to save robots.txt to file
export const saveRobotsTxtToFile = () => {
  const robotsTxt = generateRobotsTxt();
  
  // In a real implementation, you would save this to your public directory
  // fs.writeFileSync('public/robots.txt', robotsTxt);
  
  console.log('Robots.txt generated successfully');
  return robotsTxt;
};