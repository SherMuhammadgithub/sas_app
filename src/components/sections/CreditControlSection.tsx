"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DollarSign,
  FileText,
  Shield,
  BarChart3,
  CreditCard,
} from "lucide-react";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Credit Control Section Component
 * Features credit management and risk assessment with GSAP animations
 */
export const CreditControlSection = () => {
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

  // Decorative icons - hidden on small screens
  const decorativeIcons = [
    {
      Icon: DollarSign,
      position: "top-4 left-4 md:top-8 md:left-8",
      delay: 0.1,
    },
    {
      Icon: FileText,
      position: "top-4 right-4 md:top-8 md:right-8",
      delay: 0.2,
    },
    {
      Icon: Shield,
      position: "bottom-4 left-4 md:bottom-8 md:left-8",
      delay: 0.3,
    },
    {
      Icon: BarChart3,
      position: "bottom-4 right-4 md:bottom-8 md:right-8",
      delay: 0.4,
    },
  ];

  // Features list
  const features = [
    {
      title: "Credit Limit Management",
      description:
        "Set and monitor customer credit limits with automated alerts",
      icon: DollarSign,
    },
    {
      title: "Invoice Tracking",
      description: "Track outstanding invoices with automated follow-up",
      icon: FileText,
    },
    {
      title: "Risk Assessment",
      description: "Evaluate customer creditworthiness with risk scoring",
      icon: Shield,
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

      // Background icons with spiral animation
      if (backgroundIconsRef.current) {
        const icons = backgroundIconsRef.current.querySelectorAll(".bg-icon");
        gsap.set(icons, {
          opacity: 0,
          scale: 0,
          rotation: -360,
          x: -200,
          y: -200,
        });

        tl.to(
          icons,
          {
            opacity: 0.2,
            scale: 1,
            rotation: 0,
            x: 0,
            y: 0,
            duration: 2,
            stagger: 0.2,
            ease: "power3.out",
          },
          0
        );

        // Continuous spiral animation for background icons
        gsap.to(icons, {
          rotation: "+=360",
          duration: 20,
          repeat: -1,
          ease: "none",
          stagger: 3,
        });
      }

      // Badge with matrix effect
      if (badgeRef.current) {
        gsap.set(badgeRef.current, {
          opacity: 0,
          scaleX: 0,
          skewX: 45,
        });

        tl.to(
          badgeRef.current,
          {
            opacity: 1,
            scaleX: 1,
            skewX: 0,
            duration: 1.5,
            ease: "power4.out",
          },
          0.5
        );

        // Glitch effect for badge
        gsap.to(badgeRef.current, {
          x: 2,
          duration: 0.1,
          repeat: -1,
          yoyo: true,
          repeatDelay: 5,
          ease: "rough({ template: none.out, strength: 2, points: 5, taper: none, randomize: true, clamp: false})",
        });
      }

      // Heading with word morphing animation
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll(".word");
        gsap.set(words, {
          opacity: 0,
          scale: 0,
          rotationZ: 180,
          filter: "blur(20px)",
        });

        tl.to(
          words,
          {
            opacity: 1,
            scale: 1,
            rotationZ: 0,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: 0.3,
            ease: "back.out(1.7)",
          },
          0.8
        );
      }

      // Description with cyberpunk reveal
      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, {
          opacity: 0,
          scaleY: 0,
          transformOrigin: "center bottom",
          filter: "hue-rotate(180deg)",
        });

        tl.to(
          descriptionRef.current,
          {
            opacity: 1,
            scaleY: 1,
            filter: "hue-rotate(0deg)",
            duration: 1.5,
            ease: "power3.out",
          },
          1.8
        );
      }

      // Features list with magnetic animation
      if (featuresRef.current) {
        const features = featuresRef.current.querySelectorAll(".feature-item");
        gsap.set(features, {
          opacity: 0,
          x: -300,
          rotation: -90,
          scale: 0.5,
        });

        features.forEach((feature, index) => {
          const icon = feature.querySelector(".feature-icon");
          const title = feature.querySelector(".feature-title");
          const desc = feature.querySelector(".feature-desc");

          // Feature container with magnetic pull effect
          tl.to(
            feature,
            {
              opacity: 1,
              x: 0,
              rotation: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
            },
            2.2 + index * 0.4
          );

          // Icon with electric pulse
          if (icon) {
            gsap.set(icon, { scale: 0, filter: "brightness(0)" });
            tl.to(
              icon,
              {
                scale: 1,
                filter: "brightness(1)",
                duration: 0.8,
                ease: "elastic.out(1, 0.3)",
              },
              2.4 + index * 0.4
            );

            // Electric pulse effect
            gsap.to(icon, {
              filter:
                "brightness(1.5) drop-shadow(0 0 10px rgba(99, 102, 241, 0.7))",
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "power2.inOut",
              delay: index * 0.7,
            });
          }

          // Title with digital reveal
          if (title) {
            gsap.set(title, { opacity: 0, letterSpacing: "10px" });
            tl.to(
              title,
              {
                opacity: 1,
                letterSpacing: "normal",
                duration: 1,
                ease: "power2.out",
              },
              2.6 + index * 0.4
            );
          }

          // Description with scan line effect
          if (desc) {
            gsap.set(desc, { opacity: 0, y: 30, filter: "blur(5px)" });
            tl.to(
              desc,
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "power1.out",
              },
              2.8 + index * 0.4
            );
          }
        });
      }

      // Buttons with holographic effect
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("button");
        gsap.set(buttons, {
          opacity: 0,
          z: -200,
          rotationX: -90,
        });

        tl.to(
          buttons,
          {
            opacity: 1,
            z: 0,
            rotationX: 0,
            duration: 1.2,
            stagger: 0.3,
            ease: "power3.out",
          },
          4
        );
      }

      // Image container with hologram effect
      if (imageContainerRef.current) {
        gsap.set(imageContainerRef.current, {
          opacity: 0,
          scale: 0.3,
          rotationY: 180,
          filter: "saturate(0)",
        });

        tl.to(
          imageContainerRef.current,
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            filter: "saturate(1)",
            duration: 2,
            ease: "power2.out",
          },
          1.2
        );
      }

      // Floating cards with quantum effect
      if (floatingCard1Ref.current) {
        gsap.set(floatingCard1Ref.current, {
          opacity: 0,
          scale: 0,
          x: -100,
          rotation: -180,
        });

        tl.to(
          floatingCard1Ref.current,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            rotation: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
          },
          2.5
        );

        // Quantum floating animation
        gsap.to(floatingCard1Ref.current, {
          x: 15,
          y: -15,
          rotation: 8,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (floatingCard2Ref.current) {
        gsap.set(floatingCard2Ref.current, {
          opacity: 0,
          scale: 0,
          x: 100,
          rotation: 180,
        });

        tl.to(
          floatingCard2Ref.current,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            rotation: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
          },
          3
        );

        // Counter-quantum floating animation
        gsap.to(floatingCard2Ref.current, {
          x: -12,
          y: 18,
          rotation: -5,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 3,
        });
      }
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  // Enhanced button hover animations with indigo theme
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;

    // Main button transform
    gsap.to(button, {
      scale: 1.05,
      y: -3,
      rotationX: 2,
      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)",
      filter: "brightness(1.1)",
      duration: 0.4,
      ease: "power2.out",
    });

    // Add subtle glow pulse
    gsap.to(button, {
      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.6)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Text shimmer effect
    const text = button.querySelector("span") || button;
    gsap.to(text, {
      backgroundPosition: "200% center",
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;

    // Kill any ongoing animations
    gsap.killTweensOf(button);

    // Reset button state
    gsap.to(button, {
      scale: 1,
      y: 0,
      rotationX: 0,
      boxShadow: "0 8px 25px rgba(99, 102, 241, 0.25)",
      filter: "brightness(1)",
      duration: 0.4,
      ease: "power2.out",
    });

    // Reset text
    const text = button.querySelector("span") || button;
    gsap.to(text, {
      backgroundPosition: "0% center",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Enhanced button click animation
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;

    // Quick scale down and back up for click feedback
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.2,
          ease: "back.out(1.2)",
        });
      },
    });

    // Ripple effect
    const ripple = document.createElement("div");
    ripple.className =
      "absolute inset-0 rounded-lg bg-white/20 transform scale-0";
    button.appendChild(ripple);

    gsap.to(ripple, {
      scale: 1,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => ripple.remove(),
    });
  };

  // Image hover animation with holographic effect
  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      rotationY: 10,
      rotationX: 5,
      boxShadow: "0 25px 80px rgba(99, 102, 241, 0.3)",
      filter: "brightness(1.1) saturate(1.2)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleImageLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotationY: 0,
      rotationX: 0,
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
      filter: "brightness(1) saturate(1)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <section
      id="credit-control"
      ref={sectionRef}
      className="w-full h-full flex items-center justify-center relative px-2 sm:px-4 overflow-hidden"
    >
      {/* Enhanced Background Effects with Indigo Theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Background Icons with GSAP Spiral Animation */}
      <div
        ref={backgroundIconsRef}
        className="absolute inset-0 pointer-events-none hidden md:block"
      >
        {decorativeIcons.map(({ Icon, position }, index) => (
          <div
            key={index}
            className={`absolute ${position} text-indigo-400 bg-icon`}
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
            {/* Badge with Indigo Theme */}
            <div
              ref={badgeRef}
              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-medium border border-indigo-500/30 backdrop-blur-sm"
            >
              <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span>Credit Control</span>
            </div>

            {/* Main Heading with Word Morphing */}
            <h2
              ref={headingRef}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
            >
              <span className="word inline-block">Master</span>{" "}
              <span className="word inline-block">Your</span>{" "}
              <span className="word bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block">
                Credit
              </span>{" "}
              <span className="word bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block">
                Control
              </span>
            </h2>

            {/* Description with Cyberpunk Reveal */}
            {/* Description with Enhanced Background Light Effects */}
            <div className="relative overflow-hidden hidden sm:block">
              <p
                ref={descriptionRef}
                className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed relative px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm"
              >
                Take complete control of your credit management with
                comprehensive tools for monitoring, assessment, and
                optimization.
                {/* Animated glow effect behind text */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-purple-600/10 to-indigo-600/5 rounded-lg animate-pulse -z-10"></div>
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-lg border border-indigo-400/30 shadow-lg shadow-indigo-500/20 -z-10"></div>
              </p>
            </div>

            {/* Features List with Magnetic Animation */}
            <div
              ref={featuresRef}
              className="space-y-2 sm:space-y-3 lg:space-y-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 sm:space-x-3 group feature-item"
                >
                  <div className="flex-shrink-0 p-1.5 sm:p-2 bg-indigo-500/20 rounded-lg border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300 feature-icon">
                    <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400" />
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

            {/* Enhanced CTA Buttons with Indigo Theme */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4"
            >
              <button
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                onClick={handleButtonClick}
                className="relative overflow-hidden px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 text-xs sm:text-sm lg:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                style={{
                  background:
                    "linear-gradient(90deg, #6366f1, #9333ea, #6366f1)",
                  backgroundSize: "200% 100%",
                  backgroundPosition: "0% center",
                }}
              >
                <span className="relative z-10">Explore Credit Tools</span>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-400/50 to-purple-400/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]"></div>
              </button>

              <button
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                onClick={handleButtonClick}
                className="relative overflow-hidden px-4 py-2 sm:px-6 sm:py-3 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-lg transition-all duration-300 text-xs sm:text-sm lg:text-base hidden sm:block group"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  View Demo
                </span>

                {/* Fill effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>

                {/* Border glow */}
                <div className="absolute inset-0 rounded-lg border-2 border-indigo-400/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-pulse"></div>
              </button>
            </div>
          </div>

          {/* Image Side - Right with Hologram Effect */}
          <div ref={imageContainerRef} className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Main Image with Holographic Hover Effect */}
              <div
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
                className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl border border-gray-700/50 cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <Image
                  src="/images/invoice_.jpg"
                  alt="Credit Control Dashboard"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] xl:max-h-[400px]"
                  priority
                />
              </div>

              {/* Enhanced Floating Cards with Indigo Theme */}
              <div
                ref={floatingCard1Ref}
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-indigo-600/50 hidden sm:block"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400" />
                  <div>
                    <p className="text-xs text-gray-400">Credit</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      98.5%
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={floatingCard2Ref}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-purple-600/50 hidden md:block"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  <div>
                    <p className="text-xs text-gray-400">Risk</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      Low
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
