import React, { Suspense, lazy, useEffect, useState } from 'react';
import Loading from './Loading';

// A component that loads other components only when they're about to enter the viewport
const LazySection = ({ component: Component, fallback: Fallback = Loading, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ComponentToRender, setComponentToRender] = useState(null);

  useEffect(() => {
    // Always load the component in development
    if (process.env.NODE_ENV === 'development') {
      setComponentToRender(Component);
      return;
    }

    // For production, use Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setComponentToRender(Component);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading 100px before entering viewport
      }
    );

    // Set up the observer
    const div = document.createElement('div');
    observer.observe(div);

    return () => {
      observer.disconnect();
    };
  }, [Component]);

  if (!ComponentToRender) {
    return <div style={{ height: '200px' }}><Fallback /></div>;
  }

  return (
    <Suspense fallback={<Fallback />}>
      <ComponentToRender {...props} />
    </Suspense>
  );
};

export default LazySection;