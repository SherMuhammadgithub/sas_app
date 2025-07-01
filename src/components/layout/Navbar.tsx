"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

/**
 * Beautiful Navbar Component
 * Features responsive design, smooth animations, and dark/light mode toggle
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Stock", href: "#stock-management" },
    { name: "Order", href: "#order-management" },
    { name: "Credit", href: "#credit-control" },
    { name: "Delivery", href: "#delivery" },
    { name: "Portal", href: "#customer-portal" },
    { name: "About", href: "#about" },
  ];

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl"
            : "bg-transparent"
        }`}
        style={
          {
            "--main-color": "rgb(46, 213, 115)",
            "--main-bg-color": "rgba(46, 213, 116, 0.36)",
            "--pattern-color": "rgba(46, 213, 116, 0.073)",
          } as React.CSSProperties
        }
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-xl">P</span>
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent font-playfair">
                Portfolio
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    color: "var(--main-color)",
                  }}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300 hover:text-green-500 dark:hover:text-green-400 group"
                  style={{
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "0.1rem",
                  }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: `radial-gradient(
                    circle,
                    var(--main-bg-color) 0%,
                    rgba(0, 0, 0, 0) 95%
                  ),
                  linear-gradient(var(--pattern-color) 1px, transparent 1px),
                  linear-gradient(to right, var(--pattern-color) 1px, transparent 1px)`,
                }}
              >
                <motion.div
                  animate={{ rotate: theme === "dark" ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {theme === "light" ? (
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </motion.div>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-3 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 shadow-lg"
                style={{
                  background: `radial-gradient(
                    circle,
                    var(--main-bg-color) 0%,
                    rgba(0, 0, 0, 0) 95%
                  ),
                  linear-gradient(var(--pattern-color) 1px, transparent 1px),
                  linear-gradient(to right, var(--pattern-color) 1px, transparent 1px)`,
                }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl"
              style={{
                background: `radial-gradient(
                  circle,
                  var(--main-bg-color) 0%,
                  rgba(255, 255, 255, 0.95) 100%
                ),
                linear-gradient(var(--pattern-color) 1px, transparent 1px),
                linear-gradient(to right, var(--pattern-color) 1px, transparent 1px)`,
              }}
            >
              <div className="flex flex-col h-full pt-24 px-8">
                {/* Mobile Navigation Items */}
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{
                        x: 10,
                        scale: 1.05,
                        color: "var(--main-color)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left px-6 py-4 text-xl font-bold text-gray-800 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 transition-all duration-300 rounded-xl"
                      style={{
                        cursor: "pointer",
                        textTransform: "uppercase",
                        letterSpacing: "0.2rem",
                      }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Menu Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-auto mb-8 text-center"
                >
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent mb-6" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Creative Portfolio
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
