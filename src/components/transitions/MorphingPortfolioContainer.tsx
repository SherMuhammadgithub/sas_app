"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Section {
  id: string;
  component: React.ReactNode;
  title: string;
}

interface MorphingPortfolioContainerProps {
  sections: Section[];
}

/**
 * Morphing Portfolio Container
 * Creates a smooth morphing effect between sections with colored dot patterns
 * Each section changes only the dot pattern color, keeping dark background
 */
export const MorphingPortfolioContainer = ({
  sections,
}: MorphingPortfolioContainerProps) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const scrollDirection = useRef<"up" | "down">("down");

  // Different themes for each section with more vibrant colors
  // Different themes for each section - just dots
  const sectionThemes = [
    {
      // Section 0 - Hero (Green)
      accentColor: "#10b981",
      dotColor: "rgba(16, 185, 129, 0.6)",
    },
    {
      // Section 1 - About (Light Green)
      accentColor: "#22c55e",
      dotColor: "rgba(34, 197, 94, 0.6)",
    },
    {
      // Section 2 - Projects (Blue)
      accentColor: "#3b82f6",
      dotColor: "rgba(59, 130, 246, 0.6)",
    },
    {
      // Section 3 - Skills (Indigo)
      accentColor: "#6366f1",
      dotColor: "rgba(99, 102, 241, 0.6)",
    },
    {
      // Section 4 - Contact (Purple)
      accentColor: "#9333ea",
      dotColor: "rgba(147, 51, 234, 0.6)",
    },
  ];

  // Get current theme
  const getCurrentTheme = () =>
    sectionThemes[currentSectionIndex] || sectionThemes[0];

  // Generate enhanced dot pattern with lines and larger size
  // Generate simple dot pattern - just dots, no lines
  const generateDotPattern = (dotColor: string) => {
    const dotSvg = `
      <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="simple-dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <!-- Just a simple dot -->
            <circle cx="30" cy="30" r="2" fill="${dotColor}"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#simple-dots)"/>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(dotSvg)}`;
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      const timeDiff = now - lastScrollTime.current;

      // Throttle scroll events to prevent rapid transitions
      if (timeDiff < 800 || isTransitioning) return;

      lastScrollTime.current = now;
      setIsTransitioning(true);

      if (e.deltaY > 0) {
        // Scrolling down
        scrollDirection.current = "down";
        setCurrentSectionIndex((prev) =>
          prev < sections.length - 1 ? prev + 1 : prev
        );
      } else {
        // Scrolling up
        scrollDirection.current = "up";
        setCurrentSectionIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }

      // Reset transition state after animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
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
        setTimeout(() => setIsTransitioning(false), 800);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setIsTransitioning(true);
        scrollDirection.current = "up";
        setCurrentSectionIndex((prev) => (prev > 0 ? prev - 1 : prev));
        setTimeout(() => setIsTransitioning(false), 800);
      }
    };

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    // Prevent default scrolling
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [sections.length, isTransitioning]);

  const morphingVariants = {
    enter: (direction: "up" | "down") => ({
      opacity: 0,
      scale: 0.8,
      rotateX: direction === "down" ? 15 : -15,
      y: direction === "down" ? 100 : -100,
    }),
    center: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      y: 0,
    },
    exit: (direction: "up" | "down") => ({
      opacity: 0,
      scale: 1.2,
      rotateX: direction === "down" ? -15 : 15,
      y: direction === "down" ? -100 : 100,
    }),
  };

  const currentTheme = getCurrentTheme();

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black"
      style={{ perspective: "1000px" }}
    >
      {/* Fixed Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Subtle radial accent */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle_at_50%_50%, ${currentTheme.dotColor}, transparent)`,
          }}
        />

        {/* Simple Animated Dot Pattern - just dots */}
        <motion.div
          key={`pattern-${currentSectionIndex}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('${generateDotPattern(
              currentTheme.dotColor
            )}')`,
          }}
        />
      </div>

      {/* Morphing Content Layer */}
      <div className="relative z-10 w-full h-screen">
        <AnimatePresence mode="wait" custom={scrollDirection.current}>
          <motion.div
            key={currentSectionIndex}
            custom={scrollDirection.current}
            variants={morphingVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.6 },
              scale: { duration: 0.8 },
              rotateX: { duration: 0.8 },
              y: { duration: 0.8 },
            }}
            className="absolute inset-0 w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {sections[currentSectionIndex]?.component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Section Indicators with larger dots */}
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
                  setTimeout(() => setIsTransitioning(false), 800);
                }
              }}
              className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full transition-all duration-500 relative ${
                isActive ? "" : "bg-white/30 hover:bg-white/50"
              }`}
              style={{
                backgroundColor: isActive ? theme.accentColor : undefined,
                boxShadow: isActive
                  ? `0 0 20px ${theme.accentColor}80, inset 0 0 10px ${theme.accentColor}40`
                  : undefined,
              }}
              aria-label={`Go to ${sections[index]?.title}`}
            >
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0.5 rounded-full border-2 border-white/30"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Enhanced Section Title Indicator */}
      <div className="fixed top-1 sm:top-6 md:top-8 left-2 sm:left-4 md:left-8 z-50 md:ml-20">
        <motion.div
          key={currentSectionIndex}
          initial={{ opacity: 0, y: -20, x: -30 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Instructions with enhanced styling */}
      <div className="fixed top-2 sm:top-6 md:top-8 right-2 sm:right-4 md:right-8 z-50 text-white/60 text-xs sm:text-sm text-right md:mr-10">
        <div className="hidden sm:block bg-black/20 backdrop-blur-sm px-2 py-1 rounded">
          Click dots to jump to section
        </div>
      </div>

      {/* Mobile-only swipe hint with enhanced styling */}
      <div className="fixed bottom-4 right-2 z-50 text-white/60 text-xs text-right sm:hidden">
        <div className="bg-black/20 backdrop-blur-sm px-2 py-1 rounded">
          Tap dots to jump
        </div>
      </div>
    </div>
  );
};
