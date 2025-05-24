import { useEffect } from 'react';

// Separate hero images to prioritize their loading
const heroImages = [
  '/hero2.webp',
  '/hero3.webp',
  '/hero4.webp',
  '/hero5.webp',
  '/hero6.webp',
  '/hero7.webp',
  '/hero8.webp',
  '/hero9.webp'
];

const otherImages = [
  '/transparent4.webp',
  '/empowering.webp',
  '/front lines.webp',
  '/impact.webp',
  '/rapid-staffing.webp',
  '/ready.webp',
  '/vicky2.webp',
  '/interview.webp',
  '/request consultant.webp'
];

function ImagePreloader() {
  useEffect(() => {
    const preloadImages = async () => {
      // First, preload critical images immediately
      const criticalImages = ['/transparent4.webp', '/hero2.webp'].map(path => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = path;
          img.fetchPriority = 'high';
          img.loading = 'eager';
          img.decoding = 'async';
          return img;
        });
      });

      try {
        // Load critical images first
        await Promise.all(criticalImages);

        // Then load hero images with lower priority
        const heroImagePromises = heroImages
          .filter(path => path !== '/hero2.webp')
          .map(path => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = path;
              img.fetchPriority = 'auto';
              img.loading = 'lazy';
              img.decoding = 'async';
              return img;
            });
          });

        // Finally load other images with lowest priority
        const otherImagePromises = otherImages
          .filter(path => path !== '/transparent4.webp')
          .map(path => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = path;
              img.fetchPriority = 'low';
              img.loading = 'lazy';
              img.decoding = 'async';
              return img;
            });
          });

        // Load remaining images in parallel but with different priorities
        await Promise.all([...heroImagePromises, ...otherImagePromises]);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, []);

  return null;
}

export default ImagePreloader;