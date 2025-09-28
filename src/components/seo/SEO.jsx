import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({
  title = "JIFSA Careers - Fire & Safety Education and Training", 
  description = "JIFSA Careers offers professional fire and safety education, training programs, and guaranteed placement assistance.",
  keywords = "JIFSA careers, fire safety training, safety education, fire safety courses, placement assistance",
  author = "JIFSA Careers",
  ogTitle,
  ogDescription,
  ogImage = "/iso.jpg",
  ogUrl
}) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
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

  }, [title, description, keywords, author, ogTitle, ogDescription, ogImage, ogUrl, location.pathname]);

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