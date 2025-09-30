import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Comprehensive keyword sets for different page types
const getKeywordsForPage = (pathname) => {
  const baseKeywords = "fire and safety course in india,jifsa, fire and safety institute in india, fire institute, safety institute, fire & safety course, fire & safety institute, job oriented course, industrial safety course, career in fire and safety, diploma in fire and safety, certificate in fire and safety";
  
  const pageSpecificKeywords = {
    '/': `${baseKeywords}, best fire safety institute, fire safety training institute india, fire safety education, occupational safety course, workplace safety training, fire fighting training, safety officer course, JIFSA careers, fire safety certification india, HSE course, NEBOSH course india, IOSH course, fire safety engineering, industrial safety management`,
    '/qualifications': `${baseKeywords}, fire safety degree course, diploma in fire safety engineering, bachelor fire safety, advance diploma fire safety, fire fighter course, NSQF fire safety, university fire safety course, CV Raman university fire safety`,
    '/online-courses': `${baseKeywords}, online fire safety course, distance learning fire safety, fire safety online training, digital fire safety education, virtual fire safety course, e-learning fire safety`,
    '/placement-cell': `${baseKeywords}, fire safety jobs, safety officer jobs, fire safety placement, industrial safety jobs, HSE jobs, fire safety career opportunities, safety manager jobs, fire protection jobs`,
    '/scope-fire-safety': `${baseKeywords}, fire safety career scope, industrial safety career, safety officer career, fire protection career, HSE career prospects, fire safety job opportunities`,
    '/demand-supply-fire-safety': `${baseKeywords}, fire safety industry demand, safety professional demand, fire safety job market, industrial safety employment, fire protection industry`,
    '/future-prospects': `${baseKeywords}, fire safety future career, safety engineering prospects, fire protection future, industrial safety growth, HSE career future`,
    '/safety-career': `${baseKeywords}, safety programmes, fire safety career development, industrial safety training, safety management career, fire protection training`,
    '/contact': `${baseKeywords}, fire safety institute contact, safety training admission, fire safety course enquiry, industrial safety admission`,
    '/admission-form': `${baseKeywords}, fire safety course admission, safety training enrollment, fire safety institute admission, industrial safety course admission`,
    '/fire-safety-faqs': `${baseKeywords}, fire safety questions, fire safety course FAQ, safety training FAQ, fire protection FAQ, industrial safety FAQ`
  };
  
  return pageSpecificKeywords[pathname] || baseKeywords;
};

const SEO = ({
  title = "Fire and Safety Course in India | Best Fire Safety Institute | JIFSA Careers", 
  description = "Leading fire and safety institute in India offering job-oriented courses, diploma, certificate, and degree programs in fire safety, industrial safety, and HSE.",
  keywords,
  author = "JIFSA Careers",
  ogTitle,
  ogDescription,
  ogImage = "/iso.jpg",
  ogUrl
}) => {
  const location = useLocation();
  
  // Get dynamic keywords based on current page if not provided
  const finalKeywords = keywords || getKeywordsForPage(location.pathname);

  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', finalKeywords);
    updateMetaTag('name', 'author', author);

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', ogTitle || title);
    updateMetaTag('property', 'og:description', ogDescription || description);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:url', ogUrl || `https://jifsacareers.com${location.pathname}`);
    
    // Update Twitter tags
    updateMetaTag('property', 'twitter:title', ogTitle || title);
    updateMetaTag('property', 'twitter:description', ogDescription || description);
    updateMetaTag('property', 'twitter:image', ogImage);

    // Update canonical URL
    updateCanonicalUrl(`https://jifsacareers.com${location.pathname}`);

  }, [title, description, finalKeywords, author, ogTitle, ogDescription, ogImage, ogUrl, location.pathname]);

  const updateMetaTag = (attribute, attributeValue, content) => {
    let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, attributeValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateCanonicalUrl = (url) => {
    let element = document.querySelector('link[rel="canonical"]');
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'canonical');
      document.head.appendChild(element);
    }
    element.setAttribute('href', url);
  };

  return null;
};

export default SEO;