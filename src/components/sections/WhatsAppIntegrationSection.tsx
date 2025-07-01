"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  MessageCircle,
  Smartphone,
  Users,
  Clock,
  ShoppingCart,
  Headphones,
  Zap,
  Star,
  Send,
  Phone,
  Video,
} from "lucide-react";

/**
 * WhatsApp Integration Section Component
 * Features WhatsApp business messaging integration for customer communication
 */
export const WhatsAppIntegrationSection = () => {
  const { ref } = useScrollAnimation(0.3);

  // Decorative icons - hidden on small screens
  const decorativeIcons = [
    {
      Icon: MessageCircle,
      position: "top-4 left-4 md:top-8 md:left-8",
      delay: 0.1,
    },
    {
      Icon: Smartphone,
      position: "top-4 right-4 md:top-8 md:right-8",
      delay: 0.2,
    },
    {
      Icon: Users,
      position: "bottom-4 left-4 md:bottom-8 md:left-8",
      delay: 0.3,
    },
    {
      Icon: Zap,
      position: "bottom-4 right-4 md:bottom-8 md:right-8",
      delay: 0.4,
    },
  ];

  // WhatsApp integration features
  const whatsAppFeatures = [
    {
      title: "Direct Order Processing",
      description:
        "Receive and process customer orders directly through WhatsApp",
      icon: ShoppingCart,
    },
    {
      title: "Customer Inquiries",
      description: "Handle customer questions and support requests seamlessly",
      icon: Headphones,
    },
    {
      title: "Real-time Messaging",
      description:
        "Instant messaging with read receipts and delivery confirmations",
      icon: Zap,
    },
  ];

  // Simplified chat messages
  const chatMessages = [
    {
      type: "received",
      message: "Hello, I&apos;d like to order a cake for Saturday",
      time: "11:42",
      isCustomer: true,
    },
    {
      type: "sent",
      message: "Welcome to Sandra&apos;s Cakes! 🧁",
      time: "11:42",
      isCustomer: false,
    },
    {
      type: "sent",
      message: "What kind of cake would you like?",
      time: "11:43",
      isCustomer: false,
    },
    {
      type: "received",
      message: "Vanilla with strawberry filling please",
      time: "11:45",
      isCustomer: true,
    },
  ];

  return (
    <section
      id="whatsapp-integration"
      ref={ref}
      className="w-full h-full flex items-center justify-center relative px-2 sm:px-4"
    >
      {/* Background Icons - Hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {decorativeIcons.map(({ Icon, position, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 0.8, delay }}
            className={`absolute ${position} text-green-400`}
          >
            <Icon className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center min-h-[85vh] sm:min-h-[80vh]">
          {/* Content Side - Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-green-500/20 text-green-300 text-xs sm:text-sm font-medium border border-green-500/30"
            >
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              WhatsApp Integration
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
            >
              Familiar{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                WhatsApp
              </span>{" "}
              Messaging
            </motion.h2>

            {/* Description - Hidden on very small screens */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed hidden sm:block"
            >
              Integrate WhatsApp directly into your operations. Receive orders
              and inquiries seamlessly within the same platform.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-2 sm:space-y-3 lg:space-y-4"
            >
              {whatsAppFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="flex items-start space-x-2 sm:space-x-3"
                >
                  <div className="flex-shrink-0 p-1.5 sm:p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                    <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xs sm:text-sm lg:text-base">
                      {feature.title}
                    </h3>
                    {/* Description hidden on small screens */}
                    <p className="text-gray-300 text-xs lg:text-sm hidden sm:block">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4"
            >
              <button className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-xs sm:text-sm lg:text-base shadow-lg shadow-green-500/25">
                Connect WhatsApp
              </button>
              {/* Second button hidden on very small screens */}
              <button className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 text-xs sm:text-sm lg:text-base hidden sm:block">
                View Demo
              </button>
            </motion.div>
          </motion.div>

          {/* WhatsApp Mobile Mockup - Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative max-w-xs sm:max-w-sm mx-auto">
              {/* Phone Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative bg-gray-900 rounded-2xl sm:rounded-3xl p-1 sm:p-2 shadow-2xl"
              >
                {/* WhatsApp Interface */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-green-600 px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between text-white">
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
                    <div className="flex items-center space-x-2  sm:flex">
                      <Video size={16} className="text-white" />
                      <Phone size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="h-48 sm:h-64 overflow-y-auto bg-gray-50 dark:bg-gray-700 p-2 sm:p-3 space-y-2">
                    {chatMessages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                        className={`flex ${
                          msg.isCustomer ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm ${
                            msg.isCustomer
                              ? "bg-green-500 text-white rounded-br-none"
                              : "bg-white dark:bg-gray-600 text-gray-900 dark:text-white rounded-bl-none"
                          }`}
                        >
                          <p className="leading-relaxed">{msg.message}</p>
                          <div
                            className={`flex items-center justify-end mt-1 ${
                              msg.isCustomer
                                ? "text-green-200"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            <span className="text-xs">{msg.time}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 sm:p-3 flex items-center space-x-2">
                    <div className="flex-1 bg-white dark:bg-gray-600 rounded-full px-2 sm:px-3 py-1 sm:py-2">
                      <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                        Type a message...
                      </span>
                    </div>
                    <button className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Send size={12} className="text-white sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Floating WhatsApp Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-green-500 text-white p-2 sm:p-3 rounded-full shadow-xl"
              >
                <MessageCircle size={16} className="text-white sm:w-5 sm:h-5" />
              </motion.div>
            </div>

            {/* Stats Cards - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-4 grid grid-cols-2 gap-2 sm:gap-3 hidden sm:grid"
            >
              <div className="bg-slate-800/50 border border-gray-700/50 rounded-lg p-2 sm:p-3 text-center">
                <Clock className="w-4 h-4 text-green-400 mx-auto mb-1" />
                <p className="text-xs sm:text-sm font-bold text-white">
                  &lt; 30sec
                </p>
                <p className="text-xs text-gray-400">Response</p>
              </div>
              <div className="bg-slate-800/50 border border-gray-700/50 rounded-lg p-2 sm:p-3 text-center">
                <Star className="w-4 h-4 text-green-400 mx-auto mb-1" />
                <p className="text-xs sm:text-sm font-bold text-white">98%</p>
                <p className="text-xs text-gray-400">Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
