// Image optimization utilities

// Generate responsive image sources
export const generateImageSources = (baseSrc, sizes = [320, 640, 1024, 1280]) => {
  return sizes.map(size => ({
    src: `${baseSrc}?w=${size}`,
    media: `(max-width: ${size}px)`
  }));
};

// Lazy load images with intersection observer
export const lazyLoadImages = () => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.src;

        if (src) {
          img.src = src;
          img.classList.remove('lazy');
          img.removeAttribute('data-src');
        }

        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
};

// Optimize image loading with loading attribute
export const setImageLoading = (imgElement, loadingType = 'lazy') => {
  if ('loading' in HTMLImageElement.prototype) {
    imgElement.loading = loadingType;
  } else {
    // Fallback for browsers that don't support loading attribute
    lazyLoadImages();
  }
};

// Generate optimized image URL with compression parameters
export const optimizeImageURL = (src, options = {}) => {
  const {
    width,
    height,
    quality = 80,
    format = 'auto'
  } = options;

  // If it's already an optimized URL, return as is
  if (src.includes('?')) return src;

  // Add optimization parameters
  const params = new URLSearchParams();
  if (width) params.append('w', width);
  if (height) params.append('h', height);
  if (quality) params.append('q', quality);
  if (format) params.append('f', format);

  return `${src}?${params.toString()}`;
};

// Preload critical images
export const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Convert images to WebP format for better compression
export const convertToWebP = (src) => {
  if (src.endsWith('.jpg') || src.endsWith('.jpeg') || src.endsWith('.png')) {
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  return src;
};