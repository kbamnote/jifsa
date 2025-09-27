// Performance optimization utilities

// Debounce function to limit the rate at which a function is called
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function to limit the rate at which a function is called
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Lazy load images
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(image => imageObserver.observe(image));
};

// Measure component render performance
export const measureRenderTime = (componentName) => {
  if (process.env.NODE_ENV === 'development') {
    performance.mark(`${componentName}-start`);
    return () => {
      performance.mark(`${componentName}-end`);
      performance.measure(
        `${componentName}-duration`,
        `${componentName}-start`,
        `${componentName}-end`
      );
      const measure = performance.getEntriesByName(`${componentName}-duration`)[0];
      console.log(`${componentName} render time: ${measure.duration}ms`);
      performance.clearMarks(`${componentName}-start`);
      performance.clearMarks(`${componentName}-end`);
      performance.clearMeasures(`${componentName}-duration`);
    };
  }
  return () => {};
};

// Optimize scroll events
export const optimizeScroll = (callback, delay = 16) => {
  let ticking = false;
  
  const update = () => {
    callback();
    ticking = false;
  };
  
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };
  
  return requestTick;
};