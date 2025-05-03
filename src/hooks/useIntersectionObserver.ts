import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverOptions = {}
): [RefObject<T>, boolean] {
  const { 
    root = null, 
    rootMargin = '0px', 
    threshold = 0.1, 
    once = true 
  } = options;
  
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;
    
    // Don't re-observe if already visible and once option is true
    if (isVisible && once) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementVisible = entry.isIntersecting;
        setIsVisible(isElementVisible);
        
        // If element is visible and once option is true, unobserve
        if (isElementVisible && once && element) {
          observer.unobserve(element);
        }
      },
      { root, rootMargin, threshold }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [root, rootMargin, threshold, once, isVisible]);
  
  return [elementRef, isVisible];
}