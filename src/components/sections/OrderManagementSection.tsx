"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  TrendingUp,
  Star,
} from "lucide-react";
import Image from "next/image";

/**
 * Order Management Section Component
 * Features order processing and workflow management with GSAP animations
 */
export const OrderManagementSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundIconsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const floatingCard1Ref = useRef<HTMLDivElement>(null);
  const floatingCard2Ref = useRef<HTMLDivElement>(null);

  // Decorative icons - hide on small screens
  const decorativeIcons = [
    {
      Icon: ShoppingCart,
      position: "top-4 left-4 md:top-8 md:left-8",
      delay: 0.1,
    },
    {
      Icon: Package,
      position: "top-4 right-4 md:top-8 md:right-8",
      delay: 0.2,
    },
    {
      Icon: Truck,
      position: "bottom-4 left-4 md:bottom-8 md:left-8",
      delay: 0.3,
    },
    {
      Icon: CheckCircle,
      position: "bottom-4 right-4 md:bottom-8 md:right-8",
      delay: 0.4,
    },
  ];

  // Features list
  const features = [
    {
      title: "Smart Order Processing",
      description: "Automated workflow with real-time tracking",
      icon: ShoppingCart,
    },
    {
      title: "Inventory Sync",
      description: "Real-time stock updates across all channels",
      icon: Package,
    },
    {
      title: "Delivery Tracking",
      description: "End-to-end shipment visibility",
      icon: Truck,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Background icons animation
      if (backgroundIconsRef.current) {
        const icons = backgroundIconsRef.current.querySelectorAll(".bg-icon");
        gsap.set(icons, {
          opacity: 0,
          scale: 0,
          rotation: 360,
        });

        tl.to(
          icons,
          {
            opacity: 0.2,
            scale: 1,
            rotation: 0,
            duration: 0.7, // faster
            stagger: 0.07, // faster
            ease: "back.out(1.7)",
          },
          0
        );

        // Continuous floating animation for background icons
        gsap.to(icons, {
          rotation: "+=360",
          duration: 12, // faster
          repeat: -1,
          ease: "none",
          stagger: 3, // faster
        });
      }

      // Badge animation with bounce
      if (badgeRef.current) {
        gsap.set(badgeRef.current, {
          opacity: 0,
          scale: 0.3,
          rotation: -180,
        });

        tl.to(
          badgeRef.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5, // faster
            ease: "back.out(1.7)",
          },
          0.1 // slightly earlier
        );

        // Badge text reveal
        const badgeText = badgeRef.current.querySelector(".badge-text");
        if (badgeText) {
          gsap.set(badgeText, { opacity: 0 });
          tl.to(
            badgeText,
            {
              opacity: 1,
              duration: 0.3, // faster
            },
            0.5 // earlier
          );
        }
      }

      // Heading animation with staggered words
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll(".word");
        gsap.set(words, {
          opacity: 0,
          y: 100,
          rotationX: -90,
        });

        tl.to(
          words,
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.5, // faster
            stagger: 0.13, // faster
            ease: "power3.out",
          },
          0.2 // earlier
        );
      }

      // Description animation with typewriter effect
      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, {
          opacity: 0,
          x: -100,
        });

        tl.to(
          descriptionRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.4, // faster
            ease: "power2.out",
          },
          0.8 // earlier
        );

        // Typewriter highlight effect
        const highlight = descriptionRef.current.querySelector(
          ".typewriter-highlight"
        );
        if (highlight) {
          gsap.set(highlight, { width: 0 });
          tl.to(
            highlight,
            {
              width: "100%",
              duration: 0.7, // faster
              ease: "power2.inOut",
            },
            0.8 // earlier
          );
        }
      }

      // Features list animation
      if (featuresRef.current) {
        const features = featuresRef.current.querySelectorAll(".feature-item");
        gsap.set(features, {
          opacity: 0,
          scaleY: 0,
          transformOrigin: "bottom",
        });

        features.forEach((feature, index) => {
          const icon = feature.querySelector(".feature-icon");
          const title = feature.querySelector(".feature-title");
          const desc = feature.querySelector(".feature-desc");

          // Feature container
          tl.to(
            feature,
            {
              opacity: 1,
              scaleY: 1,
              duration: 0.35, // faster
              ease: "power2.out",
            },
            1.1 + index * 0.13 // earlier & faster stagger
          );

          // Icon spin animation
          if (icon) {
            gsap.set(icon, { rotation: -180, scale: 0 });
            tl.to(
              icon,
              {
                rotation: 0,
                scale: 1,
                duration: 0.35, // faster
                ease: "back.out(1.7)",
              },
              1.2 + index * 0.13 // earlier
            );
          }

          // Title glitch effect
          if (title) {
            gsap.set(title, { opacity: 0, x: -50 });
            tl.to(
              title,
              {
                opacity: 1,
                x: 0,
                duration: 0.25, // faster
                ease: "power2.out",
              },
              1.35 + index * 0.13 // earlier
            );
          }

          // Description slide in
          if (desc) {
            gsap.set(desc, { opacity: 0, x: -100 });
            tl.to(
              desc,
              {
                opacity: 1,
                x: 0,
                duration: 0.4, // faster
                ease: "power2.out",
              },
              1.5 + index * 0.13 // earlier
            );
          }
        });
      }

      // Buttons animation with elastic effect
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("button");
        gsap.set(buttons, {
          opacity: 0,
          scale: 0.8,
          y: 50,
        });

        tl.to(
          buttons,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5, // faster
            stagger: 0.07, // faster
            ease: "back.out(1.7)",
          },
          2.0 // earlier
        );
      }

      // Image container animation
      if (imageContainerRef.current) {
        gsap.set(imageContainerRef.current, {
          opacity: 0,
          x: 100,
          rotationY: 25,
        });

        tl.to(
          imageContainerRef.current,
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 0.7, // faster
            ease: "power2.out",
          },
          0.4 // earlier
        );
      }

      // Floating cards animation
      if (floatingCard1Ref.current) {
        gsap.set(floatingCard1Ref.current, {
          opacity: 0,
          y: 50,
          rotationX: -45,
        });

        tl.to(
          floatingCard1Ref.current,
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.5, // faster
            ease: "back.out(1.7)",
          },
          0.9 // earlier
        );

        // Continuous floating animation
        gsap.to(floatingCard1Ref.current, {
          y: -5,
          duration: 2.2, // faster
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      if (floatingCard2Ref.current) {
        gsap.set(floatingCard2Ref.current, {
          opacity: 0,
          y: 50,
          rotationX: 45,
        });

        tl.to(
          floatingCard2Ref.current,
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.5, // faster
            ease: "back.out(1.7)",
          },
          1.1 // earlier
        );

        // Continuous floating animation with different timing
        gsap.to(floatingCard2Ref.current, {
          y: 5,
          duration: 1.7, // faster
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 0.5, // earlier
        });
      }
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  // Button hover animations
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Image hover animation
  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.02,
      rotationY: 5,
      rotationX: 5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleImageLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotationY: 0,
      rotationX: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      id="order-management"
      ref={sectionRef}
      className="w-full h-full flex items-center justify-center relative px-2 sm:px-4 overflow-hidden"
    >
      {/* Enhanced Background Effects with Emerald Theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Background Icons with GSAP Wave Animation */}
      <div
        ref={backgroundIconsRef}
        className="absolute inset-0 pointer-events-none hidden md:block"
      >
        {decorativeIcons.map(({ Icon, position }, index) => (
          <div
            key={index}
            className={`absolute ${position} text-emerald-400 bg-icon`}
          >
            <Icon className="w-6 h-6 md:w-8 md:h-8" />
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center min-h-[85vh] sm:min-h-[80vh]">
          {/* Content Side - Left */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-1">
            {/* Badge with Emerald Theme */}
            <div
              ref={badgeRef}
              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm sm:text-base font-medium border border-emerald-500/30 backdrop-blur-sm"
            >
              <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="badge-text">Order Management</span>
            </div>

            {/* Main Heading with Staggered Words */}
            <h2
              ref={headingRef}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
            >
              <span className="word inline-block">Streamline</span>{" "}
              <span className="word inline-block">Your</span>{" "}
              <span className="word bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent inline-block">
                Order
              </span>{" "}
              <span className="word bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent inline-block">
                Flow
              </span>
            </h2>

            {/* Description with Typewriter Effect */}
            <div className="relative overflow-hidden ">
              <div className="typewriter-highlight absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-transparent"></div>
              <p
                ref={descriptionRef}
                className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed relative z-10"
              >
                Transform your order management with intelligent automation,
                real-time inventory tracking, and seamless delivery workflows.
              </p>
            </div>

            {/* Features List with GSAP Animation */}
            <div
              ref={featuresRef}
              className="space-y-2 sm:space-y-3 lg:space-y-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 sm:space-x-3 group feature-item"
                >
                  <div className="flex-shrink-0 p-1.5 sm:p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30 group-hover:border-emerald-400/50 transition-all duration-300 feature-icon">
                    <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="font-semibold text-white text-sm sm:text-base lg:text-base feature-title">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-xs lg:text-sm hidden sm:block feature-desc">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons with GSAP Animation */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4"
            >
              <button
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 text-sm sm:text-base lg:text-base shadow-lg shadow-emerald-500/25"
              >
                Start Free Trial
              </button>
              <button
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-300 text-sm sm:text-base lg:text-base hidden sm:block"
              >
                View Demo
              </button>
            </div>
          </div>

          {/* Image Side - Right with GSAP Animation */}
          <div ref={imageContainerRef} className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Main Image with 3D Hover Effect */}
              <div
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
                className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl border border-gray-700/50 cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <Image
                  src="/images/order.png"
                  alt="Order Management Dashboard - Smart order processing and workflow management interface"
                  width={600}
                  height={360}
                  className="w-full h-auto object-cover max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] xl:max-h-[400px]"
                  priority
                />
              </div>

              {/* Enhanced Floating Cards with GSAP */}
              <div
                ref={floatingCard1Ref}
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-gray-600/50 hidden sm:block"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                  <div>
                    <p className="text-xs text-gray-400">Orders</p>
                    <p className="text-sm sm:text-base font-bold text-white">
                      1,247
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={floatingCard2Ref}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-gray-600/50 hidden md:block"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                  <div>
                    <p className="text-xs text-gray-400">Rating</p>
                    <p className="text-sm sm:text-base font-bold text-white">
                      98.7%
                    </p>
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
