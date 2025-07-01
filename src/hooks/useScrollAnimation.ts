import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Custom hook for scroll-triggered animations
 * @param amount - Percentage of element that needs to be visible (0-1)
 * @param triggerOnce - Whether animation should trigger only once
 * @returns ref and inView state
 */
export const useScrollAnimation = (amount = 0.3, triggerOnce = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount,
    once: triggerOnce,
  });

  return { ref, isInView };
};
