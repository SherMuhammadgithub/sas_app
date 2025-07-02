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
  CheckCircle,
  Star,
} from "lucide-react";

/**
 * WhatsApp Integration Section Component
 * Features WhatsApp business messaging integration with enhanced mobile design
 */
export const WhatsAppIntegrationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundIconsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const floatingCardsRef = useRef<HTMLDivElement>(null);

  // Chat messages data
  const chatMessages = [
    {
      message: "Hello, I'd like to order a cake for Saturday",
      time: "11:42",
      isCustomer: true,
    },
    {
      message: "Welcome to Sandra's Cakes! 🧁",
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

  // Mobile features
  const mobileFeatures = [
    {
      icon: MessageCircle,
      title: "Direct Orders",
      description: "Customers can place orders directly through WhatsApp",
    },
    {
      icon: Zap,
      title: "Auto Responses",
      description: "Automated replies for common inquiries",
    },
    {
      icon: CheckCircle,
      title: "Order Tracking",
      description: "Real-time updates sent to customers",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // Enhanced background icons
      if (backgroundIconsRef.current) {
        const icons = backgroundIconsRef.current.querySelectorAll(".bg-icon");
        gsap.set(icons, {
          opacity: 0,
          scale: 0,
          rotation: -180,
          filter: "blur(5px)",
        });
        tl.to(
          icons,
          {
            opacity: 0.15,
            scale: 1,
            rotation: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.5)",
          },
          0
        );

        // Continuous floating animation
        gsap.to(icons, {
          y: -15,
          rotation: 360,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          stagger: 0.5,
        });
      }

      // Badge with pulse effect
      if (badgeRef.current) {
        gsap.set(badgeRef.current, {
          opacity: 0,
          scale: 0,
          y: -30,
          rotation: -10,
        });
        tl.to(
          badgeRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          },
          0.2
        );
      }

      // Heading with character animation
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll(".word");
        gsap.set(words, {
          opacity: 0,
          y: 50,
          scale: 0.8,
          rotationX: 90,
        });
        tl.to(
          words,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          0.4
        );
      }

      // Description with typewriter effect
      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, {
          opacity: 0,
          y: 30,
          scale: 0.9,
        });
        tl.to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          0.8
        );
      }

      // Features animation
      if (featuresRef.current) {
        const features = featuresRef.current.querySelectorAll(".feature-item");
        gsap.set(features, {
          opacity: 0,
          x: -30,
          scale: 0.8,
        });
        tl.to(
          features,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.3)",
          },
          1.0
        );
      }

      // Image container (illustration) - hidden on small screens
      if (imageContainerRef.current) {
        gsap.set(imageContainerRef.current, { opacity: 0, scale: 0.8, x: 50 });
        tl.to(
          imageContainerRef.current,
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          0.6
        );

        // Floating animation
        gsap.to(imageContainerRef.current, {
          y: -12,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }

      // Phone mockup with 3D effect
      if (phoneRef.current) {
        gsap.set(phoneRef.current, {
          opacity: 0,
          scale: 0.7,
          y: 40,
          rotationY: 25,
        });
        tl.to(
          phoneRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            ease: "back.out(1.2)",
          },
          0.8
        );

        // Subtle floating for phone
        gsap.to(phoneRef.current, {
          y: -5,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: 1.5,
        });
      }

      // Messages with bubble effect
      if (messagesRef.current) {
        const messages = messagesRef.current.querySelectorAll(".chat-message");
        gsap.set(messages, {
          opacity: 0,
          y: 30,
          scale: 0.8,
          rotation: 5,
        });
        tl.to(
          messages,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.4,
            stagger: 0.2,
            ease: "elastic.out(1, 0.5)",
          },
          1.2
        );
      }

      // Floating cards
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
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          1.4
        );

        // Continuous floating for cards
        cards.forEach((card, index) => {
          gsap.to(card, {
            y: index % 2 === 0 ? -8 : -12,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: 2 + index * 0.2,
          });
        });
      }

      // Buttons with magnetic effect
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("button");
        gsap.set(buttons, {
          opacity: 0,
          scale: 0.7,
          y: 30,
        });
        tl.to(
          buttons,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "elastic.out(1, 0.5)",
          },
          1.1
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="whatsapp-integration"
      ref={sectionRef}
      className="w-full flex items-start justify-center relative px-4 sm:px-4 lg:px-8 py-8 sm:py-8 lg:py-16 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-sky-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      {/* Enhanced Floating Background Icons */}
      <div
        ref={backgroundIconsRef}
        className="absolute inset-0 pointer-events-none"
      >
        <MessageCircle className="bg-icon absolute top-16 sm:top-20 left-6 sm:left-20 w-5 h-5 sm:w-6 sm:h-6 text-blue-400/20" />
        <Smartphone className="bg-icon absolute top-20 sm:top-32 right-6 sm:right-24 w-6 h-6 sm:w-8 sm:h-8 text-sky-400/15" />
        <Users className="bg-icon absolute bottom-20 sm:bottom-28 left-4 sm:left-16 w-5 h-5 sm:w-7 sm:h-7 text-blue-400/15" />
        <Zap className="bg-icon absolute bottom-12 sm:bottom-20 right-6 sm:right-20 w-5 h-5 sm:w-6 sm:h-6 text-sky-400/15" />
        <MessageCircle className="bg-icon absolute top-1/2 left-2 sm:left-8 w-4 h-4 sm:w-5 sm:h-5 text-blue-400/12" />
        <Smartphone className="bg-icon absolute top-1/2 right-2 sm:right-8 w-4 h-4 sm:w-5 sm:h-5 text-sky-400/12" />
        <Star className="bg-icon absolute top-1/3 left-1/2 w-3 h-3 sm:w-4 sm:h-4 text-cyan-400/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start lg:items-center">
          {/* Left Column - Content */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-1 w-full">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center px-3 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm sm:text-sm font-medium border border-blue-500/30 backdrop-blur-sm shadow-lg shadow-blue-500/25"
            >
              <MessageCircle className="w-4 h-4 sm:w-4 sm:h-4 mr-2 sm:mr-2" />
              WhatsApp Integration
            </div>

            {/* Heading - Better sized for mobile */}
            <h2
              ref={headingRef}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
            >
              <span className="word block">Connect with</span>
              <span className="word bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent block">
                WhatsApp Business
              </span>
              <span className="word block">Seamlessly</span>
            </h2>

            {/* Enhanced Description - Now visible on mobile */}
            <div ref={descriptionRef} className="space-y-3 sm:space-y-3">
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                Transform customer communication with WhatsApp Business
                integration. Handle orders, inquiries, and support directly
                through the world's most popular messaging platform.
              </p>

              {/* Mobile-specific features list */}
              <div ref={featuresRef} className="space-y-2 sm:hidden">
                {mobileFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-item flex items-start space-x-3 bg-slate-800/30 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20"
                  >
                    <div className="flex-shrink-0 p-2 bg-blue-500/20 rounded-lg">
                      <feature.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop key features */}
              <div className="hidden sm:flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  Interactive Messages
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-sky-400 rounded-full mr-2"></div>
                  Auto Responses
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                  Order Processing
                </span>
              </div>
            </div>

            {/* Enhanced Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-3 sm:gap-3 pt-2 w-full"
            >
              <button className="flex-1 sm:flex-none px-5 py-2.5 sm:px-6 sm:py-2.5 bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-sky-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 text-sm sm:text-base relative overflow-hidden">
                <span className="relative z-10">Connect WhatsApp</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              <button className="flex-1 sm:flex-none px-5 py-2.5 sm:px-6 sm:py-2.5 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 hover:border-blue-300 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                <span className="sm:hidden">Learn More</span>
                <span className="hidden sm:inline">View Demo</span>
              </button>
            </div>
          </div>

          {/* Right Column - Phone Only */}
          <div className="relative order-1 lg:order-2 w-full flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Illustration Background - Hidden on small screens */}
              <div
                ref={imageContainerRef}
                className="relative w-full max-w-sm mx-auto mb-4 sm:mb-6 hidden sm:block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-sky-400/30 rounded-full blur-3xl scale-110"></div>
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 shadow-2xl border border-gray-300/50 min-h-[160px] flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-14 h-14 mx-auto bg-blue-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-gray-600 font-semibold text-sm">
                        WhatsApp Business
                      </div>
                      <div className="text-xs text-gray-500">
                        Interactive Setup
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-500 p-3 rounded-full shadow-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Enhanced Phone Mockup */}
              <div
                ref={phoneRef}
                className="relative w-full max-w-[220px] sm:max-w-xs mx-auto bg-gray-900 rounded-2xl sm:rounded-2xl p-1.5 sm:p-2 shadow-2xl border border-gray-700"
                style={{ perspective: "1000px" }}
              >
                {/* Phone Screen */}
                <div className="bg-white rounded-xl sm:rounded-xl overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                        SC
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-xs sm:text-sm truncate">
                          Sandra's Cakes
                        </h3>
                        <p className="text-xs text-blue-200 flex items-center">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1"></span>
                          online
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <Video size={12} className="sm:w-4 sm:h-4 opacity-80" />
                      <Phone size={12} className="sm:w-4 sm:h-4 opacity-80" />
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div
                    ref={messagesRef}
                    className="h-36 sm:h-40 overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100 p-2.5 sm:p-3 space-y-1.5 sm:space-y-2"
                  >
                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`chat-message flex ${
                          msg.isCustomer ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[85%] px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm shadow-sm ${
                            msg.isCustomer
                              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none"
                              : "bg-white text-gray-900 rounded-bl-none border border-gray-200"
                          }`}
                        >
                          <p className="leading-relaxed break-words">
                            {msg.message}
                          </p>
                          <div
                            className={`flex items-center justify-end mt-1 ${
                              msg.isCustomer ? "text-blue-100" : "text-gray-500"
                            }`}
                          >
                            <span className="text-xs">{msg.time}</span>
                            {msg.isCustomer && (
                              <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-1" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Message Input */}
                  <div className="bg-gray-100 p-2.5 sm:p-3 flex items-center space-x-2">
                    <div className="flex-1 bg-white rounded-full px-3 py-1.5 sm:px-3 sm:py-2 border border-gray-200">
                      <span className="text-gray-500 text-xs sm:text-sm">
                        Type a message...
                      </span>
                    </div>
                    <button className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                      <Send size={10} className="text-white sm:w-3 sm:h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div ref={floatingCardsRef}>
                <div className="floating-card absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 shadow-lg border border-blue-500/30 hidden sm:block">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                    <div>
                      <p className="text-xs text-gray-400">Active</p>
                      <p className="text-sm font-bold text-white">2.4k</p>
                    </div>
                  </div>
                </div>

                <div className="floating-card absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 shadow-lg border border-sky-500/30 hidden md:block">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
                    <div>
                      <p className="text-xs text-gray-400">Response</p>
                      <p className="text-sm font-bold text-white">&lt; 1min</p>
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
