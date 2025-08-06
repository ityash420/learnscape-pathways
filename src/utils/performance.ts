// Performance optimization utilities for better SEO and user experience

// Lazy loading utility for images
export const setupLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
  fontLink.as = 'style';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);

  // Preload critical images
  const criticalImages = [
    '/assets/children-studying.jpg',
    '/assets/online-learning-child.jpg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);
  });
};

// Optimize image loading with WebP support
export const optimizeImageLoading = () => {
  // Check WebP support
  const canUseWebP = () => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('webp') > -1;
  };

  if (canUseWebP()) {
    document.documentElement.classList.add('webp');
  }
};

// Minimize layout shift by setting image dimensions
export const setImageDimensions = () => {
  const images = document.querySelectorAll('img:not([width]):not([height])');
  images.forEach(img => {
    const imgElement = img as HTMLImageElement;
    if (imgElement.complete) {
      imgElement.setAttribute('width', imgElement.naturalWidth.toString());
      imgElement.setAttribute('height', imgElement.naturalHeight.toString());
    } else {
      imgElement.onload = () => {
        imgElement.setAttribute('width', imgElement.naturalWidth.toString());
        imgElement.setAttribute('height', imgElement.naturalHeight.toString());
      };
    }
  });
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  // Run on DOM content loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupLazyLoading();
      optimizeImageLoading();
      setImageDimensions();
    });
  } else {
    setupLazyLoading();
    optimizeImageLoading();
    setImageDimensions();
  }

  // Preload resources immediately
  preloadCriticalResources();
};

// Web Vitals tracking for SEO
export const trackWebVitals = () => {
  // Track Core Web Vitals for better SEO ranking
  try {
    // Performance Observer for LCP, FID, CLS
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Performance metric:', entry.name, entry.duration);
        }
      });
      observer.observe({ entryTypes: ['navigation', 'paint'] });
    }
  } catch (error) {
    console.log('Performance tracking not available');
  }
};