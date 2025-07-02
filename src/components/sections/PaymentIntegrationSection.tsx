"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  CreditCard,
  Smartphone,
  Shield,
  Zap,
  Clock,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

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
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // Background icons
      if (backgroundIconsRef.current) {
        const icons = backgroundIconsRef.current.querySelectorAll(".bg-icon");
        gsap.set(icons, { opacity: 0, scale: 0, rotation: -180 });
        tl.to(
          icons,
          {
            opacity: 0.15,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.5)",
          },
          0
        );

        gsap.to(icons, {
          y: -15,
          rotation: 360,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          stagger: 0.8,
        });
      }

      // Badge
      if (badgeRef.current) {
        gsap.set(badgeRef.current, { opacity: 0, scale: 0, y: -20 });
        tl.to(
          badgeRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(2)",
          },
          0.2
        );
      }

      // Heading
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll(".word");
        gsap.set(words, { opacity: 0, y: 30, scale: 0.9 });
        tl.to(
          words,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          0.4
        );
      }

      // Description
      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, { opacity: 0, y: 20 });
        tl.to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          0.8
        );
      }

      // Image with enhanced animation
      if (imageContainerRef.current) {
        gsap.set(imageContainerRef.current, { opacity: 0, scale: 0.8, x: -50 });
        tl.to(
          imageContainerRef.current,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          0.6
        );

        // Floating animation for image
        gsap.to(imageContainerRef.current, {
          y: -8,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }

      // Buttons with enhanced entrance
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("button");
        gsap.set(buttons, { opacity: 0, scale: 0.8, y: 20 });
        tl.to(
          buttons,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.5)",
          },
          1.2
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="payment-integration"
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-green-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-emerald-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
      </div>

      {/* Enhanced Floating Background Icons */}
      <div
        ref={backgroundIconsRef}
        className="absolute inset-0 pointer-events-none"
      >
        <CreditCard className="bg-icon absolute top-16 sm:top-20 left-12 sm:left-20 w-4 h-4 sm:w-6 sm:h-6 text-green-400/15" />
        <Smartphone className="bg-icon absolute top-20 sm:top-32 right-16 sm:right-24 w-5 h-5 sm:w-8 sm:h-8 text-emerald-400/15" />
        <Shield className="bg-icon absolute bottom-20 sm:bottom-28 left-8 sm:left-16 w-4 h-4 sm:w-7 sm:h-7 text-green-400/15" />
        <Zap className="bg-icon absolute bottom-12 sm:bottom-20 right-12 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 text-emerald-400/15" />
        <CreditCard className="bg-icon absolute top-1/2 left-4 sm:left-8 w-3 h-3 sm:w-5 sm:h-5 text-green-400/10" />
        <Smartphone className="bg-icon absolute top-1/2 right-4 sm:right-8 w-3 h-3 sm:w-5 sm:h-5 text-emerald-400/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div ref={imageContainerRef} className="relative order-2 lg:order-1">
            {/* Decorative elements around image - hidden on mobile */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 border-2 border-green-500/30 rounded-2xl"></div>
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>

            <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-700/50 group">
              <Image
                src="/images/payment.png"
                alt="Payment Integration Dashboard"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-transparent to-emerald-900/40"></div>

              {/* Overlay content on image */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                <div className="bg-black/60 backdrop-blur-md rounded-lg p-2 sm:p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold text-xs sm:text-sm">
                        Payment Gateway
                      </div>
                      <div className="text-green-300 text-xs">
                        Real-time processing
                      </div>
                    </div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-green-500/20 text-green-300 text-xs sm:text-sm font-medium border border-green-500/30 backdrop-blur-sm shadow-lg shadow-green-500/25"
            >
              <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Payment Integration
            </div>

            {/* Heading with enhanced styling */}
            <h2
              ref={headingRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            >
              <span className="word block">Seamless</span>
              <span className="word bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent block">
                Payment Flow
              </span>
            </h2>

            {/* Enhanced Description */}
            <div ref={descriptionRef} className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg">
                Connect with Airtel and MTN Mobile Money for instant
                transactions with comprehensive payment processing and automated
                workflows.
              </p>

              {/* Key features as subtle text */}
              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                <span className="flex items-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1 sm:mr-2"></div>
                  Mobile Money Integration
                </span>
                <span className="flex items-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full mr-1 sm:mr-2"></div>
                  Real-time Processing
                </span>
                <span className="flex items-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-400 rounded-full mr-1 sm:mr-2"></div>
                  No Extra Fees
                </span>
              </div>
            </div>

            {/* Enhanced Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 text-sm sm:text-base">
                Integrate Payments
              </button>
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 hover:border-green-300 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
