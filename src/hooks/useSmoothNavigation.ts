import { useCallback } from 'react';

/**
 * Custom hook for smooth navigation between sections
 * Works with our custom smooth scroll implementation
 */
export const useSmoothNavigation = () => {
  
  /**
   * Smoothly scrolls to a section by ID
   * @param sectionId - The ID of the section to scroll to
   * @param offset - Optional offset from the top (default: 0)
   */
  const scrollToSection = useCallback((sectionId: string, offset: number = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementTop = element.offsetTop - offset;
      
      // Use our custom smooth scroll by dispatching a wheel event
      // This integrates with our SmoothScrollContainer
      const targetY = Math.max(0, elementTop);
      const currentY = window.scrollY;
      const distance = targetY - currentY;
      
      // Simulate smooth scrolling by gradually updating scroll target
      let start = currentY;
      let startTime: number;
      
      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        
        const timeElapsed = currentTime - startTime;
        const duration = Math.min(1500, Math.abs(distance) * 2); // Dynamic duration based on distance
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeInOutCubic = (t: number) => {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };
        
        const easedProgress = easeInOutCubic(progress);
        const currentPosition = start + (distance * easedProgress);
        
        window.scrollTo(0, currentPosition);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    }
  }, []);

  /**
   * Scrolls to the next section
   */
  const scrollToNext = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    const currentScrollY = window.scrollY;
    
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      const sectionTop = section.offsetTop;
      
      if (sectionTop > currentScrollY + 100) {
        scrollToSection(section.id);
        break;
      }
    }
  }, [scrollToSection]);

  /**
   * Scrolls to the previous section
   */
  const scrollToPrevious = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    const currentScrollY = window.scrollY;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i] as HTMLElement;
      const sectionTop = section.offsetTop;
      
      if (sectionTop < currentScrollY - 100) {
        scrollToSection(section.id);
        break;
      }
    }
  }, [scrollToSection]);

  return {
    scrollToSection,
    scrollToNext,
    scrollToPrevious,
  };
};
