"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CreditCard,
  Smartphone,
  Shield,
  Zap,
  Clock,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Payment Integration Section Component
 * Features secure payment processing with GSAP animations
 */
export const PaymentIntegrationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundIconsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const providerCardsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const floatingCard1Ref = useRef<HTMLDivElement>(null);
  const floatingCard2Ref = useRef<HTMLDivElement>(null);
  const nofeesBadgeRef = useRef<HTMLDivElement>(null);

  // Decorative icons - hidden on small screens
  const decorativeIcons = [
    {
      Icon: CreditCard,
      position: "top-4 left-4 md:top-8 md:left-8",
      delay: 0.1,
    },
    {
      Icon: Smartphone,
      position: "top-4 right-4 md:top-8 md:right-8",
      delay: 0.2,
    },
    {
      Icon: Shield,
      position: "bottom-4 left-4 md:bottom-8 md:left-8",
      delay: 0.3,
    },
    {
      Icon: Zap,
      position: "bottom-4 right-4 md:bottom-8 md:right-8",
      delay: 0.4,
    },
  ];

  // Features list
  const features = [
    {
      title: "Mobile Money Integration",
      description: "Seamless integration with Airtel and MTN Mobile Money",
      icon: Smartphone,
    },
    {
      title: "Real-time Processing",
      description: "Process payments instantly with real-time confirmation",
      icon: Zap,
    },
    {
      title: "Secure Transactions",
      description: "Bank-grade security with end-to-end encryption",
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

      // Background icons with gentle float animation
      if (backgroundIconsRef.current) {
        const icons = backgroundIconsRef.current.querySelectorAll(".bg-icon");
        gsap.set(icons, {
          opacity: 0,
          scale: 0,
          y: 50,
        });

        tl.to(
          icons,
          {
            opacity: 0.15,
            scale: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
          },
          0
        );

        // Gentle floating animation
        gsap.to(icons, {
          y: "+=10",
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 1,
        });
      }

      // Badge with smooth scale in
      if (badgeRef.current) {
        gsap.set(badgeRef.current, {
          opacity: 0,
          scale: 0.8,
          y: 20,
        });

        tl.to(
          badgeRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          0.2
        );

        // Subtle pulse effect
        gsap.to(badgeRef.current, {
          scale: 1.05,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      // Heading with smooth fade up
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll(".word");
        gsap.set(words, {
          opacity: 0,
          y: 30,
        });

        tl.to(
          words,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.4
        );
      }

      // Description with gentle reveal
      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, {
          opacity: 0,
          y: 20,
        });

        tl.to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          0.8
        );
      }

      // Features with staggered entrance
      if (featuresRef.current) {
        const features = featuresRef.current.querySelectorAll(".feature-item");
        gsap.set(features, {
          opacity: 0,
          x: -30,
          scale: 0.95,
        });

        features.forEach((feature, index) => {
          const icon = feature.querySelector(".feature-icon");

          // Feature container
          tl.to(
            feature,
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
            },
            1.0 + index * 0.15
          );

          // Icon gentle bounce
          if (icon) {
            gsap.set(icon, { scale: 0 });
            tl.to(
              icon,
              {
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.5)",
              },
              1.1 + index * 0.15
            );

            // Subtle breathing effect
            gsap.to(icon, {
              scale: 1.1,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
              delay: index * 0.5,
            });
          }
        });
      }

      // Provider cards with smooth reveal
      if (providerCardsRef.current) {
        const cards =
          providerCardsRef.current.querySelectorAll(".provider-card");
        gsap.set(cards, {
          opacity: 0,
          y: 30,
          scale: 0.9,
        });

        tl.to(
          cards,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          1.6
        );

        // Gentle hover effect
        cards.forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.05,
              y: -5,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }

      // Buttons with smooth entrance
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("button");
        gsap.set(buttons, {
          opacity: 0,
          y: 20,
        });

        tl.to(
          buttons,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          2.0
        );
      }

      // Image container with smooth reveal
      if (imageContainerRef.current) {
        gsap.set(imageContainerRef.current, {
          opacity: 0,
          scale: 0.9,
          y: 30,
        });

        tl.to(
          imageContainerRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          0.6
        );
      }

      // Floating cards with gentle entrance
      if (floatingCard1Ref.current) {
        gsap.set(floatingCard1Ref.current, {
          opacity: 0,
          scale: 0.8,
          x: -20,
          y: -20,
        });

        tl.to(
          floatingCard1Ref.current,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          1.4
        );

        // Gentle floating animation
        gsap.to(floatingCard1Ref.current, {
          x: 5,
          y: -5,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      if (floatingCard2Ref.current) {
        gsap.set(floatingCard2Ref.current, {
          opacity: 0,
          scale: 0.8,
          x: 20,
          y: 20,
        });

        tl.to(
          floatingCard2Ref.current,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          1.6
        );

        // Counter floating animation
        gsap.to(floatingCard2Ref.current, {
          x: -5,
          y: 8,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: 1,
        });
      }

      // No fees badge with bounce
      if (nofeesBadgeRef.current) {
        gsap.set(nofeesBadgeRef.current, {
          opacity: 0,
          scale: 0,
          rotation: -15,
        });

        tl.to(
          nofeesBadgeRef.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.5)",
          },
          1.8
        );

        // Gentle bounce effect
        gsap.to(nofeesBadgeRef.current, {
          scale: 1.1,
          rotation: 2,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  // Button hover animations with teal theme
  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      y: -2,
      boxShadow: "0 10px 25px rgba(20, 184, 166, 0.3)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 15px rgba(20, 184, 166, 0.15)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Image hover animation
  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.02,
      y: -5,
      boxShadow: "0 15px 40px rgba(20, 184, 166, 0.2)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleImageLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <section
      id="payment-integration"
      ref={sectionRef}
      className="w-full h-full flex items-center justify-center relative px-2 sm:px-4 overflow-hidden"
    >
      {/* Enhanced Background Effects with Green Theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-green-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-emerald-500/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Background Icons with Gentle Float */}
      <div
        ref={backgroundIconsRef}
        className="absolute inset-0 pointer-events-none hidden md:block"
      >
        {decorativeIcons.map(({ Icon, position }, index) => (
          <div
            key={index}
            className={`absolute ${position} text-green-400 bg-icon`}
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
            {/* Badge with Green Theme */}
            <div
              ref={badgeRef}
              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-green-500/20 text-green-300 text-xs sm:text-sm font-medium border border-green-500/30 backdrop-blur-sm"
            >
              <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span>Payment Integration</span>
            </div>

            {/* Main Heading with Green Theme */}
            <h2
              ref={headingRef}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
            >
              <span className="word inline-block">Seamless</span>{" "}
              <span className="word bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent inline-block">
                Payment
              </span>{" "}
              <span className="word bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent inline-block">
                Flow
              </span>
            </h2>

            {/* Description with Green Background Effects */}
            <div className="relative overflow-hidden hidden sm:block">
              <p
                ref={descriptionRef}
                className="text-sm sm:text-base lg:text-lg leading-relaxed relative px-4 py-3 rounded-lg bg-gradient-to-r from-green-500/10 via-emerald-500/5 to-green-500/10 border border-green-500/20 backdrop-blur-sm"
              >
                <span className="text-gray-300">
                  Connect with Airtel and MTN Mobile Money for instant
                  transactions with{" "}
                </span>
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent font-semibold">
                  no extra fees
                </span>
                <span className="text-gray-300">.</span>

                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 via-emerald-600/8 to-green-600/5 rounded-lg animate-pulse -z-10"></div>
                {/* Border glow */}
                <div className="absolute inset-0 rounded-lg border border-green-400/20 shadow-lg shadow-green-500/15 -z-10"></div>
              </p>
            </div>

            {/* Features List with Green Theme */}
            <div
              ref={featuresRef}
              className="space-y-2 sm:space-y-3 lg:space-y-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 sm:space-x-3 group feature-item"
                >
                  <div className="flex-shrink-0 p-1.5 sm:p-2 bg-green-500/20 rounded-lg border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300 feature-icon">
                    <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
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

            {/* Provider Cards with Green Theme */}
            <div
              ref={providerCardsRef}
              className="grid grid-cols-2 gap-2 sm:gap-3"
            >
              {/* Airtel */}
              <div className="provider-card bg-slate-800/50 border border-green-700/50 rounded-lg p-2 sm:p-3 text-center cursor-pointer">
                <div className="text-red-400 text-lg sm:text-xl mb-1">📱</div>
                <h4 className="text-white text-xs sm:text-sm font-semibold">
                  Airtel Money
                </h4>
                <p className="text-green-400 text-xs">No Fees</p>
              </div>

              {/* MTN */}
              <div className="provider-card bg-slate-800/50 border border-green-700/50 rounded-lg p-2 sm:p-3 text-center cursor-pointer">
                <div className="text-yellow-400 text-lg sm:text-xl mb-1">
                  💳
                </div>
                <h4 className="text-white text-xs sm:text-sm font-semibold">
                  MTN MoMo
                </h4>
                <p className="text-green-400 text-xs">No Fees</p>
              </div>
            </div>

            {/* CTA Buttons with Green Theme */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4"
            >
              <button
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-xs sm:text-sm lg:text-base shadow-lg shadow-green-500/25"
              >
                Integrate Payments
              </button>
              <button
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 text-xs sm:text-sm lg:text-base hidden sm:block"
              >
                View Demo
              </button>
            </div>
          </div>

          {/* Image Side - Right */}
          <div ref={imageContainerRef} className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Main Image with Green Hover Effect */}
              <div
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
                className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl border border-gray-700/50 cursor-pointer"
              >
                <Image
                  src="/images/payment.png"
                  alt="Payment Integration Dashboard"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] xl:max-h-[400px]"
                  priority
                />
              </div>

              {/* Enhanced Floating Cards with Green Theme */}
              <div
                ref={floatingCard1Ref}
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-green-600/50 hidden sm:block"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <div>
                    <p className="text-xs text-gray-400">Success</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      99.8%
                    </p>
                  </div>
                </div>
              </div>

              <div
                ref={floatingCard2Ref}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-emerald-600/50 hidden md:block"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                  <div>
                    <p className="text-xs text-gray-400">Speed</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      &lt; 3sec
                    </p>
                  </div>
                </div>
              </div>

              {/* No Fees Badge with Green Theme */}
              <div
                ref={nofeesBadgeRef}
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg"
              >
                No Fees! 🎉
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
