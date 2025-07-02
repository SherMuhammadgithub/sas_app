"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Section {
  id: string;
  component: React.ReactNode;
  title: string;
}

interface MorphingPortfolioContainerProps {
  sections: Section[];
}

export const MorphingPortfolioContainer = ({
  sections,
}: MorphingPortfolioContainerProps) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const scrollDirection = useRef<"up" | "down">("down");
  const touchStartY = useRef(0);

  const sectionThemes = [
    { accentColor: "#10b981", dotColor: "rgba(16, 185, 129, 0.6)" },
    { accentColor: "#22c55e", dotColor: "rgba(34, 197, 94, 0.6)" },
    { accentColor: "#3b82f6", dotColor: "rgba(59, 130, 246, 0.6)" },
    { accentColor: "#6366f1", dotColor: "rgba(99, 102, 241, 0.6)" },
    { accentColor: "#9333ea", dotColor: "rgba(147, 51, 234, 0.6)" },
  ];

  const getCurrentTheme = () =>
    sectionThemes[currentSectionIndex] || sectionThemes[0];

  const generateDotPattern = (dotColor: string) => {
    const dotSvg = `
      <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="simple-dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="2" fill="${dotColor}"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#simple-dots)"/>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(dotSvg)}`;
  };

  // Faster transition duration (500ms instead of 800ms)
  const TRANSITION_DURATION = 0.5;

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;

      const touchEndY = e.changedTouches[0].screenY;
      const threshold = 50;
      const now = Date.now();
      const timeDiff = now - lastScrollTime.current;

      if (timeDiff < TRANSITION_DURATION * 1000) return;

      lastScrollTime.current = now;
      setIsTransitioning(true);

      if (touchStartY.current - touchEndY > threshold) {
        scrollDirection.current = "down";
        setCurrentSectionIndex((prev) =>
          prev < sections.length - 1 ? prev + 1 : prev
        );
      } else if (touchEndY - touchStartY.current > threshold) {
        scrollDirection.current = "up";
        setCurrentSectionIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }

      setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION * 1000);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      const timeDiff = now - lastScrollTime.current;

      if (timeDiff < TRANSITION_DURATION * 1000 || isTransitioning) return;

      lastScrollTime.current = now;
      setIsTransitioning(true);

      if (e.deltaY > 0) {
        scrollDirection.current = "down";
        setCurrentSectionIndex((prev) =>
          prev < sections.length - 1 ? prev + 1 : prev
        );
      } else {
        scrollDirection.current = "up";
        setCurrentSectionIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }

      setTimeout(() => {
        setIsTransitioning(false);
      }, TRANSITION_DURATION * 1000);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        setIsTransitioning(true);
        scrollDirection.current = "down";
        setCurrentSectionIndex((prev) =>
          prev < sections.length - 1 ? prev + 1 : prev
        );
        setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION * 1000);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setIsTransitioning(true);
        scrollDirection.current = "up";
        setCurrentSectionIndex((prev) => (prev > 0 ? prev - 1 : prev));
        setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION * 1000);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      document.body.style.overflow = "auto";
    };
  }, [sections.length, isTransitioning]);

  // Enhanced morphing animations with overlapping transitions
  const morphingVariants: Variants = {
    enter: (direction: "up" | "down") => ({
      opacity: 0,
      scale: 0.95,
      y: direction === "down" ? 50 : -50,
      filter: "blur(4px)",
      zIndex: 1,
    }),
    center: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      zIndex: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier
      },
    },
    exit: (direction: "up" | "down") => ({
      opacity: 0,
      scale: 1.05,
      y: direction === "down" ? -50 : 50,
      filter: "blur(4px)",
      zIndex: 1,
      transition: {
        duration: TRANSITION_DURATION,
        ease: "easeInOut",
        // Exit animation starts slightly before enter animation completes
        delay: TRANSITION_DURATION * 0.3,
      },
    }),
  };

  const currentTheme = getCurrentTheme();

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Animated Background with Morphing Effect */}
      <motion.div
        key={`bg-${currentSectionIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: TRANSITION_DURATION * 0.7 }}
        className="absolute inset-0"
      >
        {/* Dynamic Dot Pattern */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('${generateDotPattern(
              currentTheme.dotColor
            )}')`,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: TRANSITION_DURATION }}
        />

        {/* Accent Glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, ${currentTheme.accentColor}20, transparent 70%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: TRANSITION_DURATION * 0.5 }}
        />
      </motion.div>

      {/* Morphing Content Layer */}
      <div className="relative z-10 w-full h-screen overflow-hidden">
        <AnimatePresence mode="popLayout" custom={scrollDirection.current}>
          <motion.div
            key={currentSectionIndex}
            custom={scrollDirection.current}
            variants={morphingVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
            style={{
              transformOrigin: "center center",
              backfaceVisibility: "hidden",
            }}
          >
            {sections[currentSectionIndex]?.component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Section Indicators (unchanged) */}
      <div className="fixed right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3 sm:space-y-4">
        {sections.map((_, index) => {
          const theme = sectionThemes[index] || sectionThemes[0];
          const isActive = index === currentSectionIndex;

          return (
            <motion.button
              key={index}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (!isTransitioning && index !== currentSectionIndex) {
                  setIsTransitioning(true);
                  scrollDirection.current =
                    index > currentSectionIndex ? "down" : "up";
                  setCurrentSectionIndex(index);
                  setTimeout(
                    () => setIsTransitioning(false),
                    TRANSITION_DURATION * 1000
                  );
                }
              }}
              className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full transition-all duration-300 ${
                isActive ? "" : "bg-white/30 hover:bg-white/50"
              }`}
              style={{
                backgroundColor: isActive ? theme.accentColor : undefined,
                boxShadow: isActive
                  ? `0 0 10px ${theme.accentColor}80, inset 0 0 5px ${theme.accentColor}40`
                  : undefined,
              }}
              aria-label={`Go to ${sections[index]?.title}`}
            >
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0.5 rounded-full"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Section Title Indicator with faster animation */}
      <div className="fixed top-1 sm:top-6 md:top-8 left-2 sm:left-4 md:left-8 z-50 md:ml-20">
        <motion.div
          key={`title-${currentSectionIndex}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: TRANSITION_DURATION * 0.6 }}
          className="text-white/90 text-sm sm:text-base md:text-lg font-medium"
        >
          {sections[currentSectionIndex]?.title}
        </motion.div>
        <div className="flex items-center mt-2 sm:mt-3 space-x-2 sm:space-x-3">
          <div className="text-white/70 text-xs sm:text-sm font-medium">
            {currentSectionIndex + 1} / {sections.length}
          </div>
          <div className="h-1 sm:h-1.5 bg-white/20 rounded-full overflow-hidden w-20 sm:w-24 md:w-28">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${currentTheme.accentColor}, ${currentTheme.dotColor})`,
              }}
              initial={{ width: 0 }}
              animate={{
                width: `${
                  ((currentSectionIndex + 1) / sections.length) * 100
                }%`,
              }}
              transition={{ duration: TRANSITION_DURATION * 0.8 }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1 }}
        className="fixed top-2 sm:top-6 md:top-8 right-2 sm:right-4 md:right-8 z-50 text-white/60 text-xs sm:text-sm text-right md:mr-10"
      >
        <div className="hidden sm:block bg-black/20 backdrop-blur-sm px-2 py-1 rounded">
          Scroll or use arrows
        </div>
      </motion.div>

      {/* Mobile Swipe Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-4 right-2 z-50 text-white/60 text-xs text-right sm:hidden"
      >
        <div className="bg-black/20 backdrop-blur-sm px-2 py-1 rounded">
          Swipe up/down
        </div>
      </motion.div>
    </div>
  );
};
