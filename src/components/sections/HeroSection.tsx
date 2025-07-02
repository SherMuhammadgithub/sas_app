"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * Hero Section Component
 * Features subtle GSAP text animations that complement the morphing container
 */
export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const infoRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollDotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Only animate text content with subtle effects
    // Set initial states for text elements only
    gsap.set(
      [
        badgeRef.current,
        headingRef.current,
        subtitleRef.current,
        infoRef.current,
        buttonsRef.current,
        trustRef.current,
        scrollRef.current,
      ],
      {
        opacity: 0,
        y: 20,
      }
    );

    // Reduced delay - text animation starts much sooner
    const textTl = gsap.timeline({ delay: 0.3 });

    // Staggered text animations (faster durations)
    textTl
      .to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      })
      .to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        },
        "-=0.22"
      )
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.22"
      )
      .to(
        infoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.18"
      )
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.18"
      )
      .to(
        trustRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.18"
      )
      .to(
        scrollRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.12"
      );

    // Continuous scroll indicator animation (faster)
    gsap.to(scrollRef.current, {
      y: 8,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 1.2,
    });

    gsap.to(scrollDotRef.current, {
      y: 10,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 1.2,
    });
  }, []);

  // Button hover animations
  const handleButtonHover = (
    button: HTMLButtonElement,
    isHovering: boolean
  ) => {
    if (isHovering) {
      gsap.to(button, {
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(46, 213, 115, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(button, {
        scale: 1,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleSecondaryButtonHover = (
    button: HTMLButtonElement,
    isHovering: boolean
  ) => {
    if (isHovering) {
      gsap.to(button, {
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(button, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleButtonClick = (button: HTMLButtonElement) => {
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black dark:from-gray-900 dark:to-black gpu-accelerated"
    >
      {/* Background Image - No animation (handled by morphing container) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="bg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style="stop-color:rgba(46, 213, 115, 0.3);stop-opacity:1" />
                  <stop offset="100%" style="stop-color:rgba(46, 213, 115, 0);stop-opacity:0" />
                </radialGradient>
                <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <circle cx="25" cy="25" r="2" fill="rgba(46, 213, 115, 0.2)"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#bg)"/>
              <rect width="100%" height="100%" fill="url(#dots)"/>
              <g opacity="0.3">
                <path d="M100,100 Q200,50 300,100 T500,100" stroke="rgba(46, 213, 115, 0.4)" stroke-width="2" fill="none"/>
                <path d="M150,200 Q250,150 350,200 T550,200" stroke="rgba(46, 213, 115, 0.3)" stroke-width="2" fill="none"/>
                <path d="M50,300 Q150,250 250,300 T450,300" stroke="rgba(46, 213, 115, 0.2)" stroke-width="2" fill="none"/>
              </g>
            </svg>
          `)}')`,
        }}
      />

      {/* Grid Pattern Overlay - No animation (handled by morphing container) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 0L0 0 0 60" fill="none" stroke="rgba(46, 213, 115, 0.1)" stroke-width="1"/>
            </svg>
          `)}')`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Background Gradient - No animation (handled by morphing container) */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 opacity-50" />

      {/* Main Content Container - Only text animations */}
      <div className="text-center  z-10 px-4 sm:px-6 max-w-4xl lg:max-w-5xl py-6 xl:py-0">
        {/* Author Badge */}
        <div
          ref={badgeRef}
          className="flex items-center justify-center mb-4 sm:mb-6"
        >
          <div className="flex items-center bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-2 sm:mr-3">
              AA
            </div>
            <span className="text-green-400 font-medium text-xs sm:text-sm">
              by Ali Abdulla
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
        >
          Optimize Your Business Operations with
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Our{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            All-in-One SaaS Platform
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-3xl mx-auto px-2 font-inter"
        >
          Are you eager to save time and money by streamlining your business
          operations? Discover our powerful SaaS solution designed to simplify
          every aspect of your workflow. Priced at just{" "}
          <span className="text-green-400 font-semibold font-poppins">
            USD 500 per month
          </span>{" "}
          with unlimited users, this all-in-one platform empowers you to manage
          orders, inventory, deliveries, payments, and reporting with unmatched
          ease and accuracy.
        </p>

        {/* Additional Info */}
        <p
          ref={infoRef}
          className="text-xs sm:text-sm md:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2 font-inter"
        >
          This document explores the key features that enable operational
          excellence and increased customer satisfaction.
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
        >
          <button
            onMouseEnter={(e) => handleButtonHover(e.currentTarget, true)}
            onMouseLeave={(e) => handleButtonHover(e.currentTarget, false)}
            onClick={(e) => handleButtonClick(e.currentTarget)}
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto sm:min-w-[180px] font-poppins"
          >
            Start Free Trial
          </button>

          <button
            onMouseEnter={(e) =>
              handleSecondaryButtonHover(e.currentTarget, true)
            }
            onMouseLeave={(e) =>
              handleSecondaryButtonHover(e.currentTarget, false)
            }
            onClick={(e) => handleButtonClick(e.currentTarget)}
            className="border-2 border-green-500 text-green-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold hover:bg-green-500/10 transition-all duration-300 w-full sm:w-auto sm:min-w-[180px] font-poppins"
          >
            Watch Demo
          </button>
        </div>

        {/* Trust Indicators */}
        <div
          ref={trustRef}
          className="mt-8 sm:mt-12 lg:mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-gray-400 text-xs sm:text-sm px-2"
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></span>
            <span>99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></span>
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></span>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></span>
            <span>SOC 2 Compliant</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div
            ref={scrollDotRef}
            className="w-1 h-2 sm:h-3 bg-green-400 rounded-full mt-1.5 sm:mt-2"
          />
        </div>
      </div>
    </section>
  );
};
