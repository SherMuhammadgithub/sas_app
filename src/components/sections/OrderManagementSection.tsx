"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  TrendingUp,
  Star,
} from "lucide-react";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      });

      // Background icons with wave animation
      if (backgroundIconsRef.current) {
        const icons = backgroundIconsRef.current.querySelectorAll(".bg-icon");
        gsap.set(icons, {
          opacity: 0,
          scale: 0,
          y: -100,
          rotation: 180,
        });

        tl.to(
          icons,
          {
            opacity: 0.15,
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 1.5,
            stagger: 0.15,
            ease: "elastic.out(1, 0.5)",
          },
          0
        );

        // Continuous wave animation for background icons
        gsap.to(icons, {
          y: "+=15",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 1,
        });
      }

      // Badge with pulsing effect
      if (badgeRef.current) {
        gsap.set(badgeRef.current, {
          opacity: 0,
          scale: 0,
          rotationY: -90,
        });

        tl.to(
          badgeRef.current,
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "back.out(2)",
          },
          0.3
        );

        // Pulsing glow effect
        gsap.to(badgeRef.current, {
          boxShadow:
            "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }

      // Heading with character split animation
      if (headingRef.current) {
        const chars = headingRef.current.querySelectorAll(".char");
        gsap.set(chars, {
          opacity: 0,
          y: 150,
          rotationX: 90,
          transformOrigin: "center bottom",
        });

        tl.to(
          chars,
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            stagger: 0.03,
            ease: "back.out(1.5)",
          },
          0.6
        );
      }

      // Description with liquid morphing effect
      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, {
          opacity: 0,
          scaleX: 0,
          skewX: 45,
          transformOrigin: "left center",
        });

        tl.to(
          descriptionRef.current,
          {
            opacity: 1,
            scaleX: 1,
            skewX: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          1.4
        );
      }

      // Features list with cascade animation
      if (featuresRef.current) {
        const features = featuresRef.current.querySelectorAll(".feature-item");
        gsap.set(features, {
          opacity: 0,
          x: -150,
          rotationY: -45,
        });

        features.forEach((feature, index) => {
          const icon = feature.querySelector(".feature-icon");
          const title = feature.querySelector(".feature-title");
          const desc = feature.querySelector(".feature-desc");

          // Feature container with slide in
          tl.to(
            feature,
            {
              opacity: 1,
              x: 0,
              rotationY: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            1.8 + index * 0.3
          );

          // Icon with bounce effect
          if (icon) {
            gsap.set(icon, { scale: 0, rotation: 180 });
            tl.to(
              icon,
              {
                scale: 1,
                rotation: 0,
                duration: 0.6,
                ease: "bounce.out",
              },
              2.0 + index * 0.3
            );

            // Continuous pulse for icons
            gsap.to(icon, {
              scale: 1.1,
              duration: 3,
              repeat: -1,
              yoyo: true,
              ease: "power2.inOut",
              delay: index * 0.5,
            });
          }

          // Title with typewriter effect
          if (title) {
            gsap.set(title, { opacity: 0, width: 0 });
            tl.to(
              title,
              {
                opacity: 1,
                width: "auto",
                duration: 0.8,
                ease: "power2.out",
              },
              2.2 + index * 0.3
            );
          }

          // Description with fade slide
          if (desc) {
            gsap.set(desc, { opacity: 0, y: 20 });
            tl.to(
              desc,
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power1.out",
              },
              2.4 + index * 0.3
            );
          }
        });
      }

      // Buttons with morphing effect
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("button");
        gsap.set(buttons, {
          opacity: 0,
          scale: 0,
          rotationZ: 180,
        });

        tl.to(
          buttons,
          {
            opacity: 1,
            scale: 1,
            rotationZ: 0,
            duration: 1,
            stagger: 0.2,
            ease: "elastic.out(1, 0.3)",
          },
          3.2
        );
      }

      // Image container with 3D flip effect
      if (imageContainerRef.current) {
        gsap.set(imageContainerRef.current, {
          opacity: 0,
          rotationY: 90,
          scale: 0.8,
        });

        tl.to(
          imageContainerRef.current,
          {
            opacity: 1,
            rotationY: 0,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
          },
          0.8
        );
      }

      // Floating cards with orbit animation
      if (floatingCard1Ref.current) {
        gsap.set(floatingCard1Ref.current, {
          opacity: 0,
          scale: 0,
          rotation: -90,
        });

        tl.to(
          floatingCard1Ref.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(2)",
          },
          1.8
        );

        // Orbital floating animation
        gsap.to(floatingCard1Ref.current, {
          x: 10,
          y: -10,
          rotation: 5,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (floatingCard2Ref.current) {
        gsap.set(floatingCard2Ref.current, {
          opacity: 0,
          scale: 0,
          rotation: 90,
        });

        tl.to(
          floatingCard2Ref.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(2)",
          },
          2.2
        );

        // Counter-orbital floating animation
        gsap.to(floatingCard2Ref.current, {
          x: -8,
          y: 12,
          rotation: -3,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });
      }
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  // Button hover animations with blue theme
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.08,
      rotationY: 5,
      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotationY: 0,
      boxShadow: "0 4px 15px rgba(59, 130, 246, 0.1)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Image hover animation with blue theme
  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.03,
      rotationY: 8,
      rotationX: 3,
      boxShadow: "0 20px 60px rgba(59, 130, 246, 0.2)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleImageLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotationY: 0,
      rotationX: 0,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <section
      id="order-management"
      ref={sectionRef}
      className="w-full h-full flex items-center justify-center relative px-2 sm:px-4 overflow-hidden"
    >
      {/* Enhanced Background Effects with Blue Theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Background Icons with GSAP Wave Animation */}
      <div
        ref={backgroundIconsRef}
        className="absolute inset-0 pointer-events-none hidden md:block"
      >
        {decorativeIcons.map(({ Icon, position }, index) => (
          <div
            key={index}
            className={`absolute ${position} text-blue-400 bg-icon`}
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
            {/* Badge with Blue Theme */}
            <div
              ref={badgeRef}
              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium border border-blue-500/30 backdrop-blur-sm"
            >
              <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span>Order Management</span>
            </div>

            {/* Main Heading with Character Animation */}
            <h2
              ref={headingRef}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
            >
              <span className="char inline-block">S</span>
              <span className="char inline-block">t</span>
              <span className="char inline-block">r</span>
              <span className="char inline-block">e</span>
              <span className="char inline-block">a</span>
              <span className="char inline-block">m</span>
              <span className="char inline-block">l</span>
              <span className="char inline-block">i</span>
              <span className="char inline-block">n</span>
              <span className="char inline-block">e</span>
              <span className="char inline-block">&nbsp;</span>
              <span className="char inline-block">Y</span>
              <span className="char inline-block">o</span>
              <span className="char inline-block">u</span>
              <span className="char inline-block">r</span>
              <span className="char inline-block">&nbsp;</span>
              <span className="char bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block">
                O
              </span>
              <span className="char bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block">
                r
              </span>
              <span className="char bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block">
                d
              </span>
              <span className="char bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block">
                e
              </span>
              <span className="char bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block">
                r
              </span>
              <span className="char inline-block">&nbsp;</span>
              <span className="char bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block">
                F
              </span>
              <span className="char bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block">
                l
              </span>
              <span className="char bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block">
                o
              </span>
              <span className="char bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block">
                w
              </span>
            </h2>

            {/* Description with Morphing Effect */}
            <div className="relative overflow-hidden hidden sm:block">
              <p
                ref={descriptionRef}
                className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed"
              >
                Transform your order management with intelligent automation,
                real-time inventory tracking, and seamless delivery workflows.
              </p>
            </div>

            {/* Features List with Cascade Animation */}
            <div
              ref={featuresRef}
              className="space-y-2 sm:space-y-3 lg:space-y-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 sm:space-x-3 group feature-item"
                >
                  <div className="flex-shrink-0 p-1.5 sm:p-2 bg-blue-500/20 rounded-lg border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300 feature-icon">
                    <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="font-semibold text-white text-xs sm:text-sm lg:text-base feature-title">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-xs lg:text-sm hidden sm:block feature-desc">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons with Blue Theme */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4"
            >
              <button
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 text-xs sm:text-sm lg:text-base shadow-lg shadow-blue-500/25"
              >
                Start Free Trial
              </button>
              <button
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 text-xs sm:text-sm lg:text-base hidden sm:block"
              >
                View Demo
              </button>
            </div>
          </div>

          {/* Image Side - Right with 3D Effect */}
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
                  alt="Order Management Dashboard"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] xl:max-h-[400px]"
                  priority
                />
              </div>

              {/* Enhanced Floating Cards with Blue Theme */}
              <div
                ref={floatingCard1Ref}
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-blue-600/50 hidden sm:block"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <div>
                    <p className="text-xs text-gray-400">Orders</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      1,247
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={floatingCard2Ref}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-indigo-600/50 hidden md:block"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400" />
                  <div>
                    <p className="text-xs text-gray-400">Rating</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
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
