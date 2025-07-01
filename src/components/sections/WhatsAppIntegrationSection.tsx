"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  MessageCircle,
  Smartphone,
  Users,
  Clock,
  CheckCircle,
  Bell,
  ShoppingCart,
  Headphones,
  Zap,
  Globe,
  Star,
  Heart,
  Send,
  Phone,
  Video,
  MoreHorizontal,
} from "lucide-react";

/**
 * WhatsApp Integration Section Component
 * Features WhatsApp business messaging integration for customer communication
 */
export const WhatsAppIntegrationSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  // WhatsApp integration features
  const whatsAppFeatures = [
    {
      title: "Direct Order Processing",
      description:
        "Receive and process customer orders directly through WhatsApp conversations.",
      icon: ShoppingCart,
    },
    {
      title: "Customer Inquiries",
      description:
        "Handle customer questions and support requests seamlessly within the platform.",
      icon: Headphones,
    },
    {
      title: "Automated Ticket Creation",
      description:
        "Automatically convert WhatsApp conversations into trackable support tickets.",
      icon: CheckCircle,
    },
    {
      title: "Real-time Messaging",
      description:
        "Instant messaging with read receipts and delivery confirmations.",
      icon: Zap,
    },
  ];

  // Chat messages simulation
  const chatMessages = [
    {
      type: "received",
      message: "Hello, I'd like to order a cake for a birthday next Saturday",
      time: "11:42",
      isCustomer: true,
    },
    {
      type: "sent",
      message: "Welcome to Sandra's Cakes! 🧁🎂🍰",
      time: "11:42",
      isCustomer: false,
    },
    {
      type: "sent",
      message: "Hi! What kind of cake would you like?",
      time: "11:43",
      isCustomer: false,
    },
    {
      type: "received",
      message: "I want a round cake with a pony on it",
      time: "11:43",
      isCustomer: true,
    },
    {
      type: "sent",
      message: "We can do that. What kind of cake flavor and filling?",
      time: "11:43",
      isCustomer: false,
    },
    {
      type: "received",
      message: "Can you do vanilla flavor and strawberry filling?",
      time: "11:45",
      isCustomer: true,
    },
    {
      type: "sent",
      message:
        "Sure. We can have it ready for you next Saturday at 10 am. The total...",
      time: "11:46",
      isCustomer: false,
    },
  ];

  // Decorative floating icons
  const decorativeIcons = [
    { icon: MessageCircle, delay: 0.2, x: 10, y: 15 },
    { icon: Smartphone, delay: 0.4, x: 90, y: 20 },
    { icon: Users, delay: 0.6, x: 15, y: 70 },
    { icon: Bell, delay: 0.8, x: 85, y: 75 },
    { icon: Star, delay: 1.0, x: 5, y: 45 },
    { icon: Heart, delay: 1.2, x: 95, y: 50 },
  ];

  // Stats for WhatsApp integration
  const stats = [
    { label: "Response Time", value: "< 30sec", icon: Clock },
    { label: "Customer Satisfaction", value: "98%", icon: Star },
    { label: "Messages/Day", value: "2.5K+", icon: MessageCircle },
    { label: "Order Conversion", value: "85%", icon: ShoppingCart },
  ];

  return (
    <section
      id="whatsapp-integration"
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100/30 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="2" fill="rgb(34, 197, 94)" opacity="0.4"/>
              <circle cx="10" cy="10" r="1" fill="rgb(46, 213, 115)" opacity="0.6"/>
              <circle cx="50" cy="20" r="1.5" fill="rgb(16, 185, 129)" opacity="0.5"/>
            </svg>
          `)}')`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {decorativeIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0,
                x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
                y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
              }}
              animate={
                isInView
                  ? {
                      opacity: [0, 0.4, 0.2],
                      scale: [0, 1.2, 1],
                      x: [
                        typeof window !== "undefined"
                          ? window.innerWidth / 2
                          : 0,
                        typeof window !== "undefined"
                          ? (window.innerWidth * item.x) / 100
                          : item.x,
                        typeof window !== "undefined"
                          ? (window.innerWidth * item.x) / 100 + 15
                          : item.x + 15,
                      ],
                      y: [
                        typeof window !== "undefined"
                          ? window.innerHeight / 2
                          : 0,
                        typeof window !== "undefined"
                          ? (window.innerHeight * item.y) / 100
                          : item.y,
                        typeof window !== "undefined"
                          ? (window.innerHeight * item.y) / 100 + 20
                          : item.y + 20,
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                delay: item.delay,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 4,
              }}
              className="absolute z-10"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
            >
              <IconComponent
                size={32}
                className="text-green-500/60 dark:text-green-400/60 filter drop-shadow-lg"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-poppins font-medium"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              WhatsApp Integration
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 dark:text-white leading-tight"
            >
              Familiar WhatsApp
              <span className="block text-green-600 dark:text-green-400">
                messaging for you and your customers
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter"
            >
              Integrate WhatsApp directly into your operations. Receive inbound
              orders and inquiries, create new orders, or raise tickets – all
              within the same platform.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              {whatsAppFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-3 group hover:bg-green-50 dark:hover:bg-green-900/20 p-3 rounded-lg transition-all duration-300"
                  >
                    <motion.div
                      className="mt-1 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent
                        size={24}
                        className="text-green-600 dark:text-green-400"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-poppins font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm font-inter">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.slice(0, 2).map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <IconComponent
                        size={20}
                        className="text-green-600 dark:text-green-400"
                      />
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400 font-playfair">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-inter">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-poppins font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Connect WhatsApp
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - WhatsApp Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Phone Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mx-auto max-w-sm"
            >
              {/* Phone Outer Frame */}
              <div className="relative bg-gray-900 dark:bg-gray-800 rounded-3xl p-2 shadow-2xl">
                {/* WhatsApp Interface */}
                <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
                  {/* WhatsApp Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-green-600 dark:bg-green-700 px-4 py-3 flex items-center justify-between text-white"
                  >
                    <div className="flex items-center space-x-3">
                      <button className="p-1">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        SC
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">
                          Sandra's Cakes
                        </h3>
                        <p className="text-xs text-green-200">online</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Video size={20} className="text-white" />
                      <Phone size={20} className="text-white" />
                      <MoreHorizontal size={20} className="text-white" />
                    </div>
                  </motion.div>

                  {/* Chat Messages */}
                  <div className="h-96 overflow-y-auto bg-gray-50 dark:bg-gray-800 p-4 space-y-3">
                    {chatMessages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                        className={`flex ${
                          msg.isCustomer ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                            msg.isCustomer
                              ? "bg-green-500 text-white rounded-br-none"
                              : "bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none shadow-sm"
                          }`}
                        >
                          <p className="font-inter leading-relaxed">
                            {msg.message}
                          </p>
                          <div
                            className={`flex items-center justify-end mt-1 space-x-1 ${
                              msg.isCustomer
                                ? "text-green-200"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            <span className="text-xs">{msg.time}</span>
                            {msg.isCustomer && (
                              <motion.div
                                animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: 2 + index * 0.3,
                                }}
                              >
                                <svg
                                  className="w-4 h-4 text-green-200"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className="bg-gray-100 dark:bg-gray-800 p-3 flex items-center space-x-2"
                  >
                    <div className="flex-1 bg-white dark:bg-gray-700 rounded-full px-4 py-2 flex items-center space-x-2">
                      <span className="text-gray-500 dark:text-gray-400 text-sm font-inter">
                        Type a message...
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <Send size={18} className="text-white" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Business Integration Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              {stats.slice(2).map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 1.8 + index * 0.1,
                      type: "spring",
                      stiffness: 80,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -8,
                      transition: { duration: 0.3 },
                    }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group"
                  >
                    <motion.div
                      className="mb-2 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent
                        size={24}
                        className="text-green-600 dark:text-green-400"
                      />
                    </motion.div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 font-playfair mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-inter">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Floating WhatsApp Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 2 }}
              className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-xl"
            >
              <motion.div
                animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
                transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
              >
                <MessageCircle size={24} className="text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
