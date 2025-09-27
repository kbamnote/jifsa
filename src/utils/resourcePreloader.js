// Resource Preloading Utilities

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload key fonts
  const fontLinks = [
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap'
  ];
  
  fontLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  });
  
  // Preload key images
  const criticalImages = [
    '/src/assets/logo.png'
  ];
  
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Prefetch likely next pages
export const prefetchLikelyPages = () => {
  const likelyPages = [
    '/contact',
    '/courses',
    '/about'
  ];
  
  likelyPages.forEach(page => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = page;
    document.head.appendChild(link);
  });
};

// Preconnect to external domains
export const preconnectExternalDomains = () => {
  const domains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    if (domain.includes('fonts.gstatic.com')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// DNS prefetch for external resources
export const dnsPrefetch = () => {
  const domains = [
    '//www.google-analytics.com',
    '//fonts.googleapis.com'
  ];
  
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};

// Preload API endpoints
export const preloadAPIEndpoints = () => {
  // Example of preloading API data
  // In practice, you might want to fetch and cache this data
  const apiEndpoints = [
    '/get/read-form'
  ];
  
  apiEndpoints.forEach(endpoint => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = endpoint;
    document.head.appendChild(link);
  });
};

// Resource hinting for better performance
export const addResourceHints = () => {
  // Combine all resource optimization techniques
  preloadCriticalResources();
  prefetchLikelyPages();
  preconnectExternalDomains();
  dnsPrefetch();
  preloadAPIEndpoints();
};

// Lazy load non-critical resources
export const lazyLoadNonCriticalResources = () => {
  // Defer loading of non-critical CSS
  const nonCriticalCSS = document.querySelectorAll('link[rel="stylesheet"]:not([media="print"])');
  nonCriticalCSS.forEach(link => {
    if (!link.media || link.media === 'all') {
      link.media = 'print';
      link.onload = function() {
        this.media = 'all';
      };
    }
  });
  
  // Lazy load scripts
  const scripts = document.querySelectorAll('script[data-lazy="true"]');
  const scriptObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const script = entry.target;
        const newScript = document.createElement('script');
        [...script.attributes].forEach(attr => newScript.setAttribute(attr.name, attr.value));
        newScript.textContent = script.textContent;
        script.parentNode.replaceChild(newScript, script);
        observer.unobserve(script);
      }
    });
  });
  
  scripts.forEach(script => scriptObserver.observe(script));
};