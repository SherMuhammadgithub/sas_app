"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

/**
 * Advanced Smooth Scroll Container Component
 * Provides ultra-smooth scrolling with momentum, easing, and performance optimization
 */
export const SmoothScrollContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isClient, setIsClient] = useState(false);
  const scrollTarget = useRef(0);
  const currentScroll = useRef(0);
  const animationFrame = useRef<number>(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    setIsClient(true);

    // Smooth scrolling with momentum and easing
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // Animation loop for smooth scrolling
    const animate = () => {
      if (Math.abs(scrollTarget.current - currentScroll.current) > 0.1) {
        currentScroll.current = lerp(
          currentScroll.current,
          scrollTarget.current,
          0.1 // Easing factor - lower = smoother but slower
        );

        window.scrollTo(0, currentScroll.current);
        animationFrame.current = requestAnimationFrame(animate);
      } else {
        currentScroll.current = scrollTarget.current;
        window.scrollTo(0, currentScroll.current);
        isScrolling.current = false;
      }
    };

    // Handle wheel events for smooth scrolling
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const delta = e.deltaY;
      const scrollSpeed = 1.2; // Adjust scroll sensitivity
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      scrollTarget.current = Math.max(
        0,
        Math.min(maxScroll, scrollTarget.current + delta * scrollSpeed)
      );

      if (!isScrolling.current) {
        isScrolling.current = true;
        animate();
      }
    };

    // Handle touch events for mobile smooth scrolling
    let touchStartY = 0;
    let touchCurrentY = 0;
    let touchVelocity = 0;
    let lastTouchTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchCurrentY = touchStartY;
      touchVelocity = 0;
      lastTouchTime = Date.now();
      currentScroll.current = window.scrollY;
      scrollTarget.current = currentScroll.current;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const currentTime = Date.now();
      const timeDelta = currentTime - lastTouchTime;

      if (timeDelta > 0) {
        const newY = e.touches[0].clientY;
        const deltaY = touchCurrentY - newY;
        touchVelocity = deltaY / timeDelta;
        touchCurrentY = newY;
        lastTouchTime = currentTime;

        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        scrollTarget.current = Math.max(
          0,
          Math.min(maxScroll, scrollTarget.current + deltaY * 2)
        );

        if (!isScrolling.current) {
          isScrolling.current = true;
          animate();
        }
      }
    };

    const handleTouchEnd = () => {
      // Add momentum scrolling for touch
      if (Math.abs(touchVelocity) > 0.1) {
        const momentum = touchVelocity * 100;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;

        scrollTarget.current = Math.max(
          0,
          Math.min(maxScroll, scrollTarget.current + momentum)
        );

        if (!isScrolling.current) {
          isScrolling.current = true;
          animate();
        }
      }
    };

    // Initialize scroll position
    currentScroll.current = window.scrollY;
    scrollTarget.current = currentScroll.current;

    // Add event listeners
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);

    // Handle resize
    const handleResize = () => {
      currentScroll.current = window.scrollY;
      scrollTarget.current = currentScroll.current;
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  if (!isClient) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
      style={{
        // Ensure smooth rendering
        willChange: "transform",
        backfaceVisibility: "hidden",
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
};
