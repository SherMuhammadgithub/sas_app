"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Theme Provider Component
 * Manages light/dark mode state throughout the application
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
        setTheme(savedTheme);
      } else {
        // Check system preference
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        setTheme(systemTheme);
      }
    } catch (error) {
      // Fallback to light mode if localStorage is not available
      setTheme("light");
    }
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      try {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
      } catch (error) {
        // Graceful fallback if localStorage is not available
        console.warn("Failed to save theme to localStorage:", error);
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="opacity-0">{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to use theme context
 * Returns safe defaults if context is not available
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return safe defaults instead of throwing error during development/hydration
    return {
      theme: "light" as Theme,
      toggleTheme: () => {
        console.warn("useTheme must be used within a ThemeProvider");
      },
    };
  }
  return context;
};
