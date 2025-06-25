import { useEffect, useRef, useState } from 'react';
import { AnimationHookOptions, IntersectionObserverHookReturn } from '../types';

/**
 * Custom hook for handling scroll-triggered animations
 * Uses Intersection Observer API to trigger animations when elements come into view
 */
export const useAnimation = (options: AnimationHookOptions = {}): IntersectionObserverHookReturn => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animationClass = 'animate-fade-in-up',
    triggerOnce = true,
    disabled = false
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || disabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyIntersecting = entry.isIntersecting;
        setIsIntersecting(isCurrentlyIntersecting);

        if (isCurrentlyIntersecting) {
          setHasIntersected(true);
          element.classList.add(animationClass);

          // Clean up will-change after animation completes
          const cleanup = () => {
            element.style.willChange = 'auto';
            element.removeEventListener('animationend', cleanup);
          };
          element.addEventListener('animationend', cleanup);

          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          element.classList.remove(animationClass);
          element.style.willChange = 'transform, opacity';
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (element) {
        element.style.willChange = 'auto';
      }
    };
  }, [threshold, rootMargin, animationClass, triggerOnce, disabled]);

  return { ref, isIntersecting, hasIntersected };
};

/**
 * Hook for staggered animations of multiple elements
 */
export const useStaggeredAnimation = (
  count: number,
  baseDelay: number = 100,
  animationClass: string = 'animate-fade-in-up'
) => {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const setRef = (index: number) => (element: HTMLElement | null) => {
    refs.current[index] = element;
  };

  useEffect(() => {
    const elements = refs.current.filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          elements.forEach((element, index) => {
            if (element) {
              setTimeout(() => {
                element.classList.add(animationClass);
              }, index * baseDelay);
            }
          });

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    elements.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [count, baseDelay, animationClass, isVisible]);

  return { setRef, isVisible };
};

/**
 * Hook for scroll-based parallax effects
 */
export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      
      element.style.transform = `translateY(${parallax}px)`;
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (element) {
        element.style.transform = '';
      }
    };
  }, [speed]);

  return ref;
};

/**
 * Hook for mouse-based tilt effects
 */
export const useTilt = (maxTilt: number = 10) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;
      
      const rotateX = (mouseY / (rect.height / 2)) * maxTilt;
      const rotateY = (mouseX / (rect.width / 2)) * maxTilt;
      
      element.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (element) {
        element.style.transform = '';
      }
    };
  }, [maxTilt]);

  return ref;
};

/**
 * Hook for managing reduced motion preferences
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

/**
 * Hook for cleanup animations on component unmount
 */
export const useAnimationCleanup = () => {
  const elementsRef = useRef<Set<HTMLElement>>(new Set());

  const registerElement = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.add(element);
    }
  };

  const unregisterElement = (element: HTMLElement | null) => {
    if (element) {
      elementsRef.current.delete(element);
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup all registered elements on unmount
      elementsRef.current.forEach(element => {
        element.style.willChange = 'auto';
        element.style.transform = '';
        element.style.opacity = '';
        element.style.filter = '';
      });
      elementsRef.current.clear();
    };
  }, []);

  return { registerElement, unregisterElement };
};