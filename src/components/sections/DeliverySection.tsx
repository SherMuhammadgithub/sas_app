"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  MapPin,
  Truck,
  Clock,
  Navigation,
  MessageCircle,
  CheckCircle,
  Package,
  Zap,
  Users,
  AlertTriangle,
} from "lucide-react";

/**
 * Delivery and Customer Interaction Section Component
 * Features interactive map animation with delivery tracking and customer interaction
 */
export const DeliverySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundIconsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // Background icons with spiral animation
      if (backgroundIconsRef.current) {
        const icons = backgroundIconsRef.current.querySelectorAll(".bg-icon");
        gsap.set(icons, { opacity: 0, scale: 0, rotation: 0 });

        // Spiral entrance animation
        tl.to(
          icons,
          {
            opacity: 0.12,
            scale: 1,
            rotation: 720,
            duration: 1.5,
            stagger: 0.3,
            ease: "power2.out",
          },
          0
        );

        // Continuous slow rotation
        gsap.to(icons, {
          rotation: "+=360",
          duration: 25,
          repeat: -1,
          ease: "none",
          stagger: 3,
        });
      }

      // Badge with slide effect
      if (badgeRef.current) {
        gsap.set(badgeRef.current, { opacity: 0, y: -30, scale: 0.8 });
        tl.to(
          badgeRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          0.3
        );
      }

      // Heading with morphing effect - SIMPLIFIED
      if (headingRef.current) {
        const chars = headingRef.current.querySelectorAll(".char");
        gsap.set(chars, { scale: 0, y: 50, rotation: 180 });
        tl.to(
          chars,
          {
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "back.out(2)",
          },
          0.6
        );
      }

      // Map container with 3D flip animation
      if (mapContainerRef.current) {
        gsap.set(mapContainerRef.current, {
          opacity: 0,
          rotationY: -90,
          transformPerspective: 1000,
          transformOrigin: "center center",
        });
        tl.to(
          mapContainerRef.current,
          {
            opacity: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          1.0
        );
      }

      // Map markers with magnetic effect
      setTimeout(() => {
        const markers = document.querySelectorAll(".map-marker");
        markers.forEach((marker, index) => {
          gsap.fromTo(
            marker,
            { scale: 0, opacity: 0, filter: "blur(10px)" },
            {
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.8,
              delay: index * 0.4,
              ease: "elastic.out(1, 0.3)",
            }
          );

          // Magnetic hover effect
          marker.addEventListener("mouseenter", () => {
            gsap.to(marker, { scale: 1.2, duration: 0.3, ease: "power2.out" });
          });
          marker.addEventListener("mouseleave", () => {
            gsap.to(marker, { scale: 1, duration: 0.3, ease: "power2.out" });
          });
        });
      }, 1800);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split text into characters for animation - SIMPLIFIED
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      id="delivery"
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center relative px-6 sm:px-6 lg:px-8 py-4 sm:py-6 overflow-hidden"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-[32rem] sm:h-[32rem] bg-green-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/8 to-transparent"></div>
      </div>

      {/* Floating Background Icons - Reduced opacity */}
      <div
        ref={backgroundIconsRef}
        className="absolute inset-0 pointer-events-none hidden md:block"
      >
        <MapPin className="bg-icon absolute top-20 left-16 w-7 h-7 text-emerald-400/8" />
        <Truck className="bg-icon absolute top-32 right-20 w-8 h-8 text-green-400/8" />
        <Package className="bg-icon absolute bottom-28 left-12 w-7 h-7 text-emerald-400/8" />
        <Navigation className="bg-icon absolute bottom-20 right-16 w-7 h-7 text-green-400/8" />
        <CheckCircle className="bg-icon absolute top-1/2 right-8 w-6 h-6 text-green-400/6" />
        <Clock className="bg-icon absolute top-1/2 left-8 w-6 h-6 text-emerald-400/6" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col justify-center h-full">
        <div className="space-y-6 sm:space-y-8">
          {/* Header Section */}
          <div className="space-y-3 sm:space-y-5">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-emerald-500/15 text-emerald-300 text-sm sm:text-base font-medium border border-emerald-500/25 backdrop-blur-sm"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Smart Product Locator
            </div>

            {/* Main Heading - SIMPLIFIED */}
            <h2
              ref={headingRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              <span className="text-green-400">{splitText("Product")}</span>
              <span className="text-white">{splitText(" Locator")}</span>
              <br />
              {/* <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                {splitText("Across All Stores")}
              </span> */}
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Real-time inventory tracking with intelligent location mapping for
              instant product discovery
            </p>
          </div>

          {/* Large Map Interface */}
          <div
            ref={mapContainerRef}
            className="relative w-full max-w-3xl mx-auto"
          >
            {/* Header Badge */}
            <div className="bg-white rounded-full px-5 py-3 mb-6 shadow-2xl flex items-center justify-center mx-auto w-fit">
              <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
              <span className="text-gray-800 font-bold text-base">
                PRODUCT LOCATOR
              </span>
            </div>

            {/* Large Map Container */}
            <div className="relative bg-white rounded-3xl p-2 sm:p-3 shadow-2xl">
              {/* Map Background - Much larger */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 via-gray-100 to-green-100">
                {/* Map Roads/Streets */}
                <div className="absolute inset-0">
                  {/* Main Highway */}
                  <div className="absolute top-1/2 left-0 right-0 h-3 sm:h-4 bg-yellow-300 transform -translate-y-1/2 shadow-md"></div>
                  <div className="absolute top-1/2 left-1/2 w-3 sm:w-4 bottom-0 bg-yellow-300 transform -translate-x-1/2 shadow-md"></div>

                  {/* Secondary Roads */}
                  <div className="absolute top-1/4 left-0 right-0 h-2 sm:h-3 bg-gray-300 shadow-sm"></div>
                  <div className="absolute top-3/4 left-0 right-0 h-2 sm:h-3 bg-gray-300 shadow-sm"></div>
                  <div className="absolute top-0 left-1/4 w-2 sm:w-3 bottom-0 bg-gray-300 shadow-sm"></div>
                  <div className="absolute top-0 right-1/4 w-2 sm:w-3 bottom-0 bg-gray-300 shadow-sm"></div>

                  {/* Minor Roads */}
                  <div className="absolute top-1/8 left-1/8 right-1/8 h-1 sm:h-1.5 bg-gray-200 opacity-80"></div>
                  <div className="absolute bottom-1/8 left-1/8 right-1/8 h-1 sm:h-1.5 bg-gray-200 opacity-80"></div>
                  <div className="absolute top-0 left-1/8 w-1 sm:w-1.5 bottom-0 bg-gray-200 opacity-80"></div>
                  <div className="absolute top-0 right-1/8 w-1 sm:w-1.5 bottom-0 bg-gray-200 opacity-80"></div>
                </div>

                {/* Geographical Areas */}
                <div className="absolute top-6 right-6 w-20 h-20 sm:w-32 sm:h-32 bg-green-200 rounded-2xl opacity-70 shadow-lg"></div>
                <div className="absolute bottom-6 left-6 w-28 h-20 sm:w-40 sm:h-28 bg-blue-200 rounded-2xl opacity-70 shadow-lg"></div>
                <div className="absolute top-16 left-16 w-18 h-28 sm:w-28 sm:h-40 bg-green-100 rounded-2xl opacity-60 shadow-lg"></div>
                <div className="absolute bottom-16 right-16 w-24 h-24 sm:w-36 sm:h-36 bg-blue-100 rounded-2xl opacity-60 shadow-lg"></div>
                <div className="absolute top-1/3 right-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-emerald-100 rounded-xl opacity-50 shadow-md"></div>

                {/* Enhanced Store Markers */}
                <div className="map-marker absolute top-12 left-20 sm:top-16 sm:left-28 flex flex-col items-center cursor-pointer">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-2xl border-3 border-white">
                      <AlertTriangle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 hidden sm:block">
                      <div className="bg-emerald-600 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl font-medium">
                        LOW INVENTORY
                      </div>
                      <div className="w-3 h-3 bg-emerald-600 transform rotate-45 mx-auto -mt-1.5"></div>
                    </div>
                  </div>
                </div>

                <div className="map-marker absolute bottom-20 left-16 sm:bottom-28 sm:left-24 flex flex-col items-center cursor-pointer">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-2xl border-3 border-white">
                      <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 hidden sm:block">
                      <div className="bg-emerald-600 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl font-medium">
                        IN STOCK
                      </div>
                      <div className="w-3 h-3 bg-emerald-600 transform rotate-45 mx-auto -mt-1.5"></div>
                    </div>
                  </div>
                </div>

                <div className="map-marker absolute top-24 right-20 sm:top-32 sm:right-28 cursor-pointer">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 bg-emerald-600 rounded-full flex items-center justify-center shadow-xl border-3 border-white">
                    <Package className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>

                <div className="map-marker absolute bottom-24 right-24 sm:bottom-32 sm:right-32 cursor-pointer">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 bg-teal-500 rounded-full flex items-center justify-center shadow-xl border-3 border-white">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="map-marker absolute top-1/2 left-1/3 cursor-pointer">
                  <div className="w-6 h-6 sm:w-9 sm:h-9 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <Truck className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                </div>

                <div className="map-marker absolute top-1/3 right-1/2 cursor-pointer">
                  <div className="w-6 h-6 sm:w-9 sm:h-9 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <Navigation className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                </div>

                {/* Enhanced Ripple Effects */}
                <div className="absolute bottom-20 left-16 sm:bottom-28 sm:left-24">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-emerald-400 rounded-full animate-ping opacity-60"></div>
                </div>
                <div className="absolute top-12 left-20 sm:top-16 sm:left-28">
                  <div
                    className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-emerald-400 rounded-full animate-ping opacity-60"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>

                {/* Multiple Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient
                      id="connectionGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor="rgb(52, 211, 153)"
                        stopOpacity="0.4"
                      />
                      <stop
                        offset="50%"
                        stopColor="rgb(20, 184, 166)"
                        stopOpacity="0.2"
                      />
                      <stop
                        offset="100%"
                        stopColor="rgb(52, 211, 153)"
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 80 48 Q 200 120 320 160"
                    stroke="url(#connectionGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="8,4"
                    className="animate-pulse"
                  />
                  <path
                    d="M 64 320 Q 200 240 320 128"
                    stroke="url(#connectionGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="8,4"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <path
                    d="M 160 96 Q 240 200 320 192"
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6,3"
                    className="animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  />
                </svg>

                {/* Moving delivery indicators */}
                <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-emerald-500 rounded-full animate-bounce opacity-80"></div>
                <div
                  className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-500 rounded-full animate-bounce opacity-70"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>

            {/* Simple bottom info */}
            <div className="mt-6 flex justify-center items-center space-x-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span>Live Tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Real-time Updates</span>
              </div>
              <div className=" items-center space-x-2 hidden sm:flex">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span>Multi-store Search</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
