"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  MessageCircle,
  Smartphone,
  Users,
  Zap,
  Send,
  Phone,
  Video,
} from "lucide-react";

/**
 * WhatsApp Integration Section Component
 * Features WhatsApp business messaging integration with clean design
 */
export const WhatsAppIntegrationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundIconsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  // Chat messages data
  const chatMessages = [
    {
      message: "Hello, I&apos;d like to order a cake for Saturday",
      time: "11:42",
      isCustomer: true,
    },
    {
      message: "Welcome to Sandra&apos;s Cakes! 🧁",
      time: "11:42",
      isCustomer: false,
    },
    {
      message: "What kind of cake would you like?",
      time: "11:43",
      isCustomer: false,
    },
    {
      message: "Vanilla with strawberry filling please",
      time: "11:45",
      isCustomer: true,
    },
  ];

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

      // Image container (illustration)
      if (imageContainerRef.current) {
        gsap.set(imageContainerRef.current, { opacity: 0, scale: 0.8, x: 50 });
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

        // Floating animation
        gsap.to(imageContainerRef.current, {
          y: -8,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }

      // Phone mockup
      if (phoneRef.current) {
        gsap.set(phoneRef.current, { opacity: 0, scale: 0.9, y: 20 });
        tl.to(
          phoneRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.2)",
          },
          1.0
        );
      }

      // Messages animation
      if (messagesRef.current) {
        const messages = messagesRef.current.querySelectorAll(".chat-message");
        gsap.set(messages, { opacity: 0, y: 20, scale: 0.9 });
        tl.to(
          messages,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.3,
            ease: "power2.out",
          },
          1.4
        );
      }

      // Buttons
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
      id="whatsapp-integration"
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center relative px-2 sm:px-4 lg:px-8 py-4 sm:py-8 lg:py-16 overflow-hidden"
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
        <MessageCircle className="bg-icon absolute top-16 sm:top-20 left-12 sm:left-20 w-4 h-4 sm:w-6 sm:h-6 text-green-400/15" />
        <Smartphone className="bg-icon absolute top-20 sm:top-32 right-16 sm:right-24 w-5 h-5 sm:w-8 sm:h-8 text-emerald-400/15" />
        <Users className="bg-icon absolute bottom-20 sm:bottom-28 left-8 sm:left-16 w-4 h-4 sm:w-7 sm:h-7 text-green-400/15" />
        <Zap className="bg-icon absolute bottom-12 sm:bottom-20 right-12 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 text-emerald-400/15" />
        <MessageCircle className="bg-icon absolute top-1/2 left-4 sm:left-8 w-3 h-3 sm:w-5 sm:h-5 text-green-400/10" />
        <Smartphone className="bg-icon absolute top-1/2 right-4 sm:right-8 w-3 h-3 sm:w-5 sm:h-5 text-emerald-400/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center min-h-[85vh] sm:min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-2 sm:space-y-4 lg:space-y-6 order-2 lg:order-1">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-green-500/20 text-green-300 text-xs sm:text-sm font-medium border border-green-500/30 backdrop-blur-sm shadow-lg shadow-green-500/25"
            >
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              WhatsApp Integration
            </div>

            {/* Heading - Smaller text for mobile */}
            <h2
              ref={headingRef}
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
            >
              <span className="word block">How to Setup</span>
              <span className="word bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent block">
                WhatsApp
              </span>
              <span className="word block">Interactive Messages?</span>
            </h2>

            {/* Description - Hidden on very small screens */}
            <div
              ref={descriptionRef}
              className="space-y-2 sm:space-y-3 hidden sm:block"
            >
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg">
                Integrate WhatsApp directly into your operations. Receive orders
                and inquiries seamlessly within the same platform with automated
                responses.
              </p>

              {/* Key features */}
              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                <span className="flex items-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1 sm:mr-2"></div>
                  Interactive Messages
                </span>
                <span className="flex items-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full mr-1 sm:mr-2"></div>
                  Auto Responses
                </span>
                <span className="flex items-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-400 rounded-full mr-1 sm:mr-2"></div>
                  Order Processing
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3"
            >
              <button className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 text-xs sm:text-sm">
                Connect WhatsApp
              </button>
              <button className="px-4 py-2 sm:px-6 sm:py-2.5 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 hover:border-green-300 transition-all duration-300 hover:scale-105 text-xs sm:text-sm hidden sm:block">
                View Demo
              </button>
            </div>
          </div>

          {/* Right Column - Illustration & Phone */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Main Illustration Background - Smaller on mobile */}
              <div
                ref={imageContainerRef}
                className="relative w-full max-w-xs sm:max-w-sm mx-auto mb-3 sm:mb-6"
              >
                {/* Yellow circle background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-yellow-400/30 rounded-full blur-3xl scale-110"></div>

                {/* Person illustration placeholder - Hidden on very small screens */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-300/50 min-h-[120px] sm:min-h-[160px] flex items-center justify-center">
                  <div className="text-center space-y-2 sm:space-y-3">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-gray-600 font-semibold text-xs sm:text-sm">
                        WhatsApp Business
                      </div>
                      <div className="text-xs text-gray-500 hidden sm:block">
                        Interactive Setup
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp icon floating - Smaller on mobile */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-500 p-2 sm:p-3 rounded-full shadow-lg">
                  <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>

              {/* Phone Mockup - Much smaller on mobile */}
              <div
                ref={phoneRef}
                className="relative max-w-[200px] sm:max-w-xs mx-auto bg-gray-900 rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-2xl border border-gray-700"
              >
                {/* Phone Screen */}
                <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-green-600 px-2 py-2 sm:px-4 sm:py-3 flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        SC
                      </div>
                      <div>
                        <h3 className="font-semibold text-xs sm:text-sm">
                          Sandra&apos;s Cakes
                        </h3>
                        <p className="text-xs text-green-200 hidden sm:block">
                          online
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Video size={12} className="sm:w-4 sm:h-4" />
                      <Phone size={12} className="sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  {/* Chat Messages - Smaller on mobile */}
                  <div
                    ref={messagesRef}
                    className="h-32 sm:h-40 overflow-y-auto bg-gray-50 p-2 sm:p-3 space-y-1 sm:space-y-2"
                  >
                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`chat-message flex ${
                          msg.isCustomer ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[85%] px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm ${
                            msg.isCustomer
                              ? "bg-green-500 text-white rounded-br-none"
                              : "bg-white text-gray-900 rounded-bl-none shadow-sm"
                          }`}
                        >
                          <p className="leading-relaxed">{msg.message}</p>
                          <div
                            className={`flex items-center justify-end mt-1 ${
                              msg.isCustomer
                                ? "text-green-200"
                                : "text-gray-500"
                            }`}
                          >
                            <span className="text-xs">{msg.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="bg-gray-100 p-2 sm:p-3 flex items-center space-x-2">
                    <div className="flex-1 bg-white rounded-full px-2 py-1 sm:px-3 sm:py-2">
                      <span className="text-gray-500 text-xs sm:text-sm">
                        Type a message...
                      </span>
                    </div>
                    <button className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Send size={10} className="text-white sm:w-3 sm:h-3" />
                    </button>
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
