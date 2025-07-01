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
 * Creates a smooth morphing effect between sections with fixed background
 * Each section fits exactly to screen height
 */
export const MorphingPortfolioContainer = ({
  sections,
}: MorphingPortfolioContainerProps) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const scrollDirection = useRef<"up" | "down">("down");

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

  const backgroundVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.9,
    },
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black"
      style={{ perspective: "1000px" }}
    >
      {/* Fixed Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(46,213,115,0.1),transparent)] opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJkb3RzIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9InJnYmEoNDYsIDIxMywgMTE1LCAwLjMpIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+Cjwvc3ZnPg==')] opacity-20" />
      </div>

      {/* Morphing Content Layer */}
      <div className="relative z-10 w-full h-full">
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
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-full h-full">
              {sections[currentSectionIndex]?.component}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Section Indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning && index !== currentSectionIndex) {
                setIsTransitioning(true);
                scrollDirection.current =
                  index > currentSectionIndex ? "down" : "up";
                setCurrentSectionIndex(index);
                setTimeout(() => setIsTransitioning(false), 800);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSectionIndex
                ? "bg-green-400 shadow-lg shadow-green-400/50"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to ${sections[index]?.title}`}
          />
        ))}
      </div>

      {/* Section Title Indicator */}
      <div className="fixed bottom-8 left-8 z-50">
        <motion.div
          key={currentSectionIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/80 text-sm font-medium"
        >
          {sections[currentSectionIndex]?.title}
        </motion.div>
        <div className="flex items-center mt-2 space-x-2">
          <div className="text-white/60 text-xs">
            {currentSectionIndex + 1} / {sections.length}
          </div>
          <div className="flex-1 h-0.5 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-400"
              initial={{ width: 0 }}
              animate={{
                width: `${
                  ((currentSectionIndex + 1) / sections.length) * 100
                }%`,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Instructions */}
      <div className="fixed bottom-8 right-8 z-50 text-white/60 text-xs text-right">
        <div>↑↓ Arrow keys or scroll to navigate</div>
        <div>Click dots to jump to section</div>
      </div>
    </div>
  );
};
