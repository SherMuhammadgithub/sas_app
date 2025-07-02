"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  User,
  ShoppingCart,
  CreditCard,
  Shield,
  Smartphone,
  Activity,
  Eye,
  Zap,
  Star,
} from "lucide-react";

/**
 * Customer Portal Section Component
 * Features customer self-service capabilities and mobile app integration
 */
export const CustomerPortalSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundIconsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const mobileDescriptionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const statusBarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ordersRef = useRef<HTMLDivElement>(null);
  const floatingCardsRef = useRef<HTMLDivElement>(null);

  // Decorative icons - hidden on small screens
  const decorativeIcons = [
    {
      Icon: User,
      position: "top-4 left-4 md:top-8 md:left-8",
    },
    {
      Icon: Smartphone,
      position: "top-4 right-4 md:top-8 md:right-8",
    },
    {
      Icon: Shield,
      position: "bottom-4 left-4 md:bottom-8 md:left-8",
    },
    {
      Icon: Activity,
      position: "bottom-4 right-4 md:bottom-8 md:right-8",
    },
    {
      Icon: Zap,
      position: "top-1/2 left-4 md:left-8",
    },
    {
      Icon: Star,
      position: "top-1/2 right-4 md:right-8",
    },
  ];

  // Portal features
  const portalFeatures = [
    {
      title: "Self-Service Orders",
      description:
        "Place orders directly through our intuitive portal with real-time inventory",
      icon: ShoppingCart,
    },
    {
      title: "Account Management",
      description:
        "Manage account details, payment methods, and delivery preferences",
      icon: User,
    },
    {
      title: "Order Tracking",
      description:
        "Real-time visibility into order status and delivery tracking",
      icon: Activity,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // Enhanced background icons with morphing effect
      if (backgroundIconsRef.current) {
        const icons = backgroundIconsRef.current.querySelectorAll(".bg-icon");
        gsap.set(icons, {
          opacity: 0,
          scale: 0,
          rotation: -360,
          filter: "blur(10px)",
        });

        tl.to(
          icons,
          {
            opacity: 0.15,
            scale: 1,
            rotation: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: {
              amount: 0.5,
              from: "center",
            },
            ease: "elastic.out(1, 0.5)",
          },
          0
        );

        // Continuous floating animation with different patterns
        icons.forEach((icon, index) => {
          gsap.to(icon, {
            y: index % 2 === 0 ? -20 : -15,
            x: index % 3 === 0 ? 10 : -10,
            rotation: index % 2 === 0 ? 10 : -10,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.2,
          });
        });
      }

      // Badge with bounce effect
      if (badgeRef.current) {
        gsap.set(badgeRef.current, {
          opacity: 0,
          scale: 0,
          y: -30,
          rotation: -15,
        });
        tl.to(
          badgeRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 0.5,
            ease: "back.out(2)",
          },
          0.15
        );
      }

      // Heading with character animation
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll(".word");
        gsap.set(words, {
          opacity: 0,
          y: 50,
          rotationX: 90,
          transformOrigin: "center bottom",
        });
        tl.to(
          words,
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.5,
            stagger: 0.09,
            ease: "power3.out",
          },
          0.25
        );
      }

      // Description with typewriter effect
      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, {
          opacity: 0,
          y: 30,
          scale: 0.95,
        });
        tl.to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          0.4
        );
      }

      // Mobile description animation
      if (mobileDescriptionRef.current) {
        gsap.set(mobileDescriptionRef.current, {
          opacity: 0,
          y: 20,
          scale: 0.95,
        });
        tl.to(
          mobileDescriptionRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          0.5
        );
      }

      // Features with staggered slide-in
      if (featuresRef.current) {
        const features = featuresRef.current.querySelectorAll(".feature-item");
        gsap.set(features, {
          opacity: 0,
          x: -60,
          scale: 0.8,
        });
        tl.to(
          features,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.13,
            ease: "power2.out",
          },
          0.7
        );
      }

      // Buttons with magnetic effect
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("button");
        gsap.set(buttons, {
          opacity: 0,
          scale: 0.5,
          y: 30,
        });
        tl.to(
          buttons,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.07,
            ease: "back.out(1.7)",
          },
          0.9
        );

        // Add hover effects
        buttons.forEach((button) => {
          button.addEventListener("mouseenter", () => {
            gsap.to(button, { scale: 1.05, duration: 0.2, ease: "power2.out" });
          });
          button.addEventListener("mouseleave", () => {
            gsap.to(button, { scale: 1, duration: 0.2, ease: "power2.out" });
          });
        });
      }

      // Phone with 3D flip effect
      if (phoneRef.current) {
        gsap.set(phoneRef.current, {
          opacity: 0,
          rotationY: 90,
          scale: 0.8,
          transformPerspective: 1000,
          transformOrigin: "center center",
        });
        tl.to(
          phoneRef.current,
          {
            opacity: 1,
            rotationY: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
          },
          0.35
        );

        // Subtle floating animation for phone
        gsap.to(phoneRef.current, {
          y: -10,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: 1.2,
        });
      }

      // Status bar animation
      if (statusBarRef.current) {
        const dots = statusBarRef.current.querySelectorAll(".signal-dot");
        gsap.set(dots, { scale: 0 });
        tl.to(
          dots,
          {
            scale: 1,
            duration: 0.18,
            stagger: 0.07,
            ease: "back.out(2)",
          },
          0.9
        );
      }

      // Header content slide-in
      if (headerRef.current) {
        gsap.set(headerRef.current, {
          opacity: 0,
          y: 20,
          scale: 0.9,
        });
        tl.to(
          headerRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: "power2.out",
          },
          1.1
        );
      }

      // Grid items with wave effect
      if (gridRef.current) {
        const gridItems = gridRef.current.querySelectorAll(".grid-item");
        gsap.set(gridItems, {
          opacity: 0,
          scale: 0,
          rotation: 180,
        });
        tl.to(
          gridItems,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.3,
            stagger: {
              amount: 0.2,
              grid: [2, 2],
              from: "center",
            },
            ease: "back.out(1.7)",
          },
          1.2
        );
      }

      // Orders list with slide-up
      if (ordersRef.current) {
        const orders = ordersRef.current.querySelectorAll(".order-item");
        gsap.set(orders, {
          opacity: 0,
          y: 30,
          x: -20,
        });
        tl.to(
          orders,
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.3,
            stagger: 0.07,
            ease: "power2.out",
          },
          1.3
        );
      }

      // Floating cards with magnetic entrance
      if (floatingCardsRef.current) {
        const cards =
          floatingCardsRef.current.querySelectorAll(".floating-card");
        gsap.set(cards, {
          opacity: 0,
          scale: 0,
          rotation: -45,
        });
        tl.to(
          cards,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            stagger: 0.13,
            ease: "elastic.out(1, 0.5)",
          },
          1.4
        );

        // Pulse animation for floating cards
        cards.forEach((card, index) => {
          gsap.to(card, {
            scale: 1.05,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.3 + 1.7,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="customer-portal"
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center relative px-3 sm:px-4 py-8 sm:py-8 lg:py-16 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-sky-500/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-1 bg-gradient-to-r from-transparent via-blue-500/15 to-transparent"></div>
      </div>

      {/* Background Icons - Hidden on mobile */}
      <div
        ref={backgroundIconsRef}
        className="absolute inset-0 pointer-events-none hidden md:block"
      >
        {decorativeIcons.map(({ Icon, position }, index) => (
          <div
            key={index}
            className={`bg-icon absolute ${position} text-blue-400/12`}
          >
            <Icon className="w-6 h-6 md:w-8 md:h-8" />
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-6 lg:gap-12 items-start lg:items-center min-h-0">
          {/* Content Side - Left */}
          <div className="space-y-4 sm:space-y-4 lg:space-y-6 order-2 lg:order-1 w-full">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center px-3 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm sm:text-sm font-medium border border-blue-500/30 backdrop-blur-sm shadow-lg shadow-blue-500/25"
            >
              <Smartphone className="w-4 h-4 sm:w-4 sm:h-4 mr-2 sm:mr-2" />
              Customer Portal & Mobile App
            </div>

            {/* Main Heading */}
            <h2
              ref={headingRef}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
            >
              <span className="word block">Empower Your</span>
              <span className="word bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent block">
                Customers
              </span>
            </h2>

            {/* Desktop Description - Hidden on small screens */}
            <p
              ref={descriptionRef}
              className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed hidden sm:block"
            >
              Provide your customers with a powerful portal and mobile app that
              puts control in their hands - from placing orders to tracking
              deliveries.
            </p>

            {/* Mobile Description - Visible only on small screens */}
            <div ref={mobileDescriptionRef} className="space-y-3 sm:hidden">
              <p className="text-sm text-gray-300 leading-relaxed">
                Give your customers complete control with our intuitive portal
                and mobile app. Streamline their experience from order placement
                to delivery tracking.
              </p>
            </div>

            {/* Features List - Desktop only */}
            <div
              ref={featuresRef}
              className="space-y-3 sm:space-y-3 lg:space-y-4 hidden sm:block"
            >
              {portalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="feature-item flex items-start space-x-3 sm:space-x-3"
                >
                  <div className="flex-shrink-0 p-2 sm:p-2 bg-blue-500/20 rounded-lg border border-blue-500/30 shadow-lg shadow-blue-500/20">
                    <feature.icon className="w-4 h-4 sm:w-4 sm:h-4 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-sm lg:text-base">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-xs lg:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-3 pt-2 sm:pt-4 w-full"
            >
              <button className="flex-1 sm:flex-none px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 text-sm sm:text-sm lg:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 relative overflow-hidden">
                <span className="relative z-10">Launch Portal</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              <button className="flex-1 sm:flex-none px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 hover:border-blue-300 transition-all duration-300 text-sm sm:text-sm lg:text-base">
                <span className="sm:hidden">Get App</span>
                <span className="hidden sm:inline">Download App</span>
              </button>
            </div>
          </div>

          {/* Mobile App Mockup - Right */}
          <div className="relative order-1 lg:order-2 w-full flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div
                ref={phoneRef}
                className="relative w-full max-w-[240px] sm:max-w-sm mx-auto bg-gray-900 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 shadow-2xl border border-gray-700/50"
              >
                {/* Screen */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Status Bar */}
                  <div
                    ref={statusBarRef}
                    className="bg-blue-500 h-6 sm:h-8 flex items-center justify-between px-3 sm:px-4"
                  >
                    <div className="flex items-center space-x-1">
                      <div className="signal-dot w-1 h-1 bg-white rounded-full"></div>
                      <div className="signal-dot w-1 h-1 bg-white rounded-full"></div>
                      <div className="signal-dot w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="w-4 h-2 border border-white rounded-sm">
                      <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-3 sm:p-6 space-y-3 sm:space-y-6 h-44 sm:h-96 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-gray-800 dark:to-gray-900">
                    {/* Header */}
                    <div
                      ref={headerRef}
                      className="flex items-center justify-between"
                    >
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white truncate">
                          Welcome back!
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                          John Doe
                        </p>
                      </div>
                      <div className="w-7 h-7 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                        <User size={14} className="text-white sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    {/* Recent Activity - Hidden on very small screens */}
                    <div
                      ref={ordersRef}
                      className="space-y-2 sm:space-y-3 hidden sm:block"
                    >
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Recent Orders
                      </h4>
                      {[
                        { id: "#247", status: "Delivered", color: "blue" },
                        { id: "#248", status: "Transit", color: "sky" },
                      ].map((order, index) => (
                        <div
                          key={index}
                          className="order-item flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                order.color === "blue"
                                  ? "bg-blue-500"
                                  : "bg-sky-500"
                              } animate-pulse`}
                            ></div>
                            <span className="text-xs text-gray-900 dark:text-white">
                              {order.id}
                            </span>
                          </div>
                          <span
                            className={`text-xs font-medium ${
                              order.color === "blue"
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-sky-600 dark:text-sky-400"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Feature Cards - Hidden on mobile */}
              <div ref={floatingCardsRef}>
                <div className="floating-card absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 shadow-lg border border-blue-500/30 hidden sm:block">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                    <div>
                      <p className="text-xs text-gray-400">Secure</p>
                      <p className="text-xs sm:text-sm font-bold text-white">
                        100%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="floating-card absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 shadow-lg border border-sky-500/30 hidden md:block">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
                    <div>
                      <p className="text-xs text-gray-400">Active</p>
                      <p className="text-xs sm:text-sm font-bold text-white">
                        24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
