// Analytics and performance monitoring utilities

// Track page views
export const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }
  
  // For development tracking
  if (process.env.NODE_ENV === 'development') {
    console.log('Page view tracked:', url);
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  
  // For development tracking
  if (process.env.NODE_ENV === 'development') {
    console.log('Event tracked:', { action, category, label, value });
  }
};

// Measure Core Web Vitals
export const measureWebVitals = () => {
  if ('performance' in window && 'getEntriesByType' in window.performance) {
    // Measure Largest Contentful Paint (LCP)
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      const lcp = lcpEntries[lcpEntries.length - 1];
      console.log('LCP:', lcp.startTime);
      trackEvent('web_vital', 'LCP', 'milliseconds', Math.round(lcp.startTime));
    }

    // Measure First Input Delay (FID)
    const fidEntries = performance.getEntriesByType('first-input');
    if (fidEntries.length > 0) {
      const fid = fidEntries[0];
      console.log('FID:', fid.processingStart - fid.startTime);
      trackEvent('web_vital', 'FID', 'milliseconds', Math.round(fid.processingStart - fid.startTime));
    }

    // Measure Cumulative Layout Shift (CLS)
    const clsEntries = performance.getEntriesByType('layout-shift');
    if (clsEntries.length > 0) {
      let cls = 0;
      for (const entry of clsEntries) {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      }
      console.log('CLS:', cls);
      trackEvent('web_vital', 'CLS', 'score', Math.round(cls * 1000) / 1000);
    }
  }
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  // Measure Web Vitals when page is fully loaded
  window.addEventListener('load', () => {
    setTimeout(measureWebVitals, 0);
  });

  // Track navigation performance
  if ('performance' in window) {
    window.addEventListener('beforeunload', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart);
        trackEvent('performance', 'page_load', 'milliseconds', perfData.loadEventEnd - perfData.fetchStart);
      }
    });
  }
};