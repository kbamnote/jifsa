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
    
    // Measure First Contentful Paint (FCP)
    const fcpEntries = performance.getEntriesByType('paint');
    const fcpEntry = fcpEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      console.log('FCP:', fcpEntry.startTime);
      trackEvent('web_vital', 'FCP', 'milliseconds', Math.round(fcpEntry.startTime));
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

// Custom performance monitoring for component rendering
export const monitorComponentPerformance = (componentName) => {
  return {
    start: () => {
      performance.mark(`${componentName}-start`);
    },
    end: () => {
      performance.mark(`${componentName}-end`);
      performance.measure(
        `${componentName}-duration`,
        `${componentName}-start`,
        `${componentName}-end`
      );
      
      const measure = performance.getEntriesByName(`${componentName}-duration`)[0];
      if (measure) {
        console.log(`${componentName} render time: ${measure.duration}ms`);
        trackEvent('component_render', componentName, 'milliseconds', Math.round(measure.duration));
      }
      
      performance.clearMarks(`${componentName}-start`);
      performance.clearMarks(`${componentName}-end`);
      performance.clearMeasures(`${componentName}-duration`);
    }
  };
};

// Track user interactions
export const trackUserInteraction = (element, action = 'click') => {
  element.addEventListener(action, (event) => {
    const target = event.target;
    const label = target.textContent || target.alt || target.href || 'unknown';
    trackEvent('user_interaction', action, label);
  });
};

// Track scroll depth
export const trackScrollDepth = () => {
  let maxScrollDepth = 0;
  
  const updateScrollDepth = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    
    if (scrollPercent > maxScrollDepth) {
      maxScrollDepth = scrollPercent;
      if (scrollPercent % 25 === 0) { // Track every 25%
        trackEvent('scroll_depth', 'page_scroll', `${scrollPercent}%`, scrollPercent);
      }
    }
  };
  
  window.addEventListener('scroll', updateScrollDepth);
};

// Track resource loading performance
export const trackResourcePerformance = () => {
  if ('performance' in window && 'getEntriesByType' in window.performance) {
    // Track when all resources are loaded
    window.addEventListener('load', () => {
      setTimeout(() => {
        const resources = performance.getEntriesByType('resource');
        const totalResources = resources.length;
        let totalSize = 0;
        
        resources.forEach(resource => {
          totalSize += resource.transferSize || 0;
        });
        
        console.log(`Loaded ${totalResources} resources with total size of ${totalSize} bytes`);
        trackEvent('resource_loading', 'total_resources', 'count', totalResources);
        trackEvent('resource_loading', 'total_size', 'bytes', totalSize);
      }, 2000); // Wait a bit for all resources to load
    });
  }
};