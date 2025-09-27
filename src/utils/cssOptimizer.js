// CSS Optimization Utilities

// Critical CSS inlining function
export const inlineCriticalCSS = () => {
  // This would typically be handled by a build tool like PurgeCSS or Critical
  // For runtime optimization, we focus on other techniques
  console.log('Critical CSS inlining would be handled at build time');
};

// Remove unused CSS classes from DOM elements
export const removeUnusedCSS = () => {
  // This is a simplified example - in practice, this would be more complex
  console.log('Unused CSS removal would be handled at build time with tools like PurgeCSS');
};

// Optimize CSS delivery by splitting into critical and non-critical
export const optimizeCSSDelivery = () => {
  // Add prefetch for non-critical CSS
  const nonCriticalCSS = document.createElement('link');
  nonCriticalCSS.rel = 'preload';
  nonCriticalCSS.href = '/src/App.css';
  nonCriticalCSS.as = 'style';
  nonCriticalCSS.onload = function() {
    this.rel = 'stylesheet';
  };
  document.head.appendChild(nonCriticalCSS);
};

// Dynamically load CSS based on component needs
export const loadCSSOnDemand = (cssPath) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
};

// Remove CSS animations for users who prefer reduced motion
export const respectReducedMotion = () => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  const disableAnimations = () => {
    document.body.classList.add('reduce-motion');
  };
  
  const enableAnimations = () => {
    document.body.classList.remove('reduce-motion');
  };
  
  if (mediaQuery.matches) {
    disableAnimations();
  }
  
  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      disableAnimations();
    } else {
      enableAnimations();
    }
  });
};

// Optimize font loading
export const optimizeFontLoading = () => {
  // Add font display swap for better loading
  const fontLinks = document.querySelectorAll('link[rel="stylesheet"]');
  fontLinks.forEach(link => {
    if (link.href.includes('fonts.googleapis.com')) {
      // Ensure font-display: swap is used
      link.href = link.href.replace('family=', 'family=') + '&display=swap';
    }
  });
};

// Minify CSS string (simplified version)
export const minifyCSS = (css) => {
  return css
    .replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '')
    .replace(/\s+/g, ' ')
    .replace(/ ?([{:}]) ?/g, '$1')
    .replace(/;}/g, '}')
    .trim();
};

// Add CSS containment for better rendering performance
export const addCSSContainment = () => {
  // Add containment properties to key components
  const containers = document.querySelectorAll('.container, .card, .section');
  containers.forEach(container => {
    container.style.contain = 'layout style paint';
  });
};