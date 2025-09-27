// Image optimization utilities

// Generate responsive image attributes
export const generateImageAttributes = (src, alt, className = '', width, height) => {
  // Convert to WebP if supported
  const webpSrc = convertToWebP(src);
  
  return {
    src: webpSrc,
    alt: alt,
    className: `lazy ${className}`,
    loading: 'lazy',
    decoding: 'async',
    'data-src': webpSrc,
    ...(width && { width }),
    ...(height && { height })
  };
};

// Optimize image loading with Intersection Observer
export const optimizeImageLoading = () => {
  // Check if Intersection Observer is supported
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      img.src = img.dataset.src;
      img.classList.remove('lazy');
    });
    return;
  }

  // Create observer for lazy loading
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

  // Observe all images with data-src attribute
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => imageObserver.observe(img));
};

// Convert image to WebP format if supported
export const convertToWebP = (src) => {
  if (!src) return src;
  
  // Check if browser supports WebP
  const supportsWebP = (() => {
    const canvas = document.createElement('canvas');
    if (!canvas.getContext) return false;
    const ctx = canvas.getContext('2d');
    if (!ctx) return false;
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('webp') > -1;
  })();

  // If WebP is supported and the image is not already WebP, convert it
  if (supportsWebP && src.indexOf('.webp') === -1) {
    const ext = src.split('.').pop();
    return src.replace(`.${ext}`, '.webp');
  }
  
  return src;
};

// Preload critical images
export const preloadCriticalImages = (imageUrls) => {
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Generate responsive image sources
export const generateResponsiveImageSources = (baseUrl, sizes = [320, 480, 768, 1024, 1200]) => {
  return sizes.map(size => ({
    src: `${baseUrl}?w=${size}`,
    media: `(max-width: ${size}px)`
  }));
};