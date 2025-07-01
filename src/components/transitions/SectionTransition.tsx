'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Section Transition Component
 * Creates smooth morphing transitions between sections
 * Provides scroll-based animations and visual effects
 */
export const SectionTransition = ({ children, className = "" }: SectionTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress into different animation values
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        y
      }}
      className={`relative ${className}`}
    >
      {/* Morphing Background Effect */}
      <motion.div
        style={{
          scaleX: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
        }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 origin-left"
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Connecting Line Animation */}
      <motion.div
        style={{
          scaleY: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
        }}
        className="absolute bottom-0 left-1/2 w-1 h-20 bg-gradient-to-b from-purple-500 to-transparent origin-top transform -translate-x-1/2"
      />
    </motion.div>
  );
};
