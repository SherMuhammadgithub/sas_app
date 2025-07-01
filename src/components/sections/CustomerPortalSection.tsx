"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  User,
  ShoppingCart,
  CreditCard,
  Bell,
  Shield,
  Smartphone,
  Globe,
  Activity,
  Lock,
  Download,
  Eye,
  FileText,
  Calendar,
  BarChart3,
  Zap,
  Heart,
  Star,
  Settings,
} from "lucide-react";

/**
 * Customer Portal Section Component
 * Features customer self-service capabilities and mobile app integration
 */
export const CustomerPortalSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  // Portal features for the left side
  const portalFeatures = [
    {
      title: "Self-Service Orders",
      description:
        "Place orders directly through our intuitive portal with real-time inventory.",
      icon: ShoppingCart,
    },
    {
      title: "Account Management",
      description:
        "Manage account details, payment methods, and delivery preferences.",
      icon: User,
    },
    {
      title: "Order Tracking",
      description:
        "Real-time visibility into order status and delivery tracking.",
      icon: Activity,
    },
    {
      title: "Digital Invoicing",
      description:
        "Access and download invoices, statements, and payment history.",
      icon: FileText,
    },
  ];

  // Mobile app features for showcase
  const mobileFeatures = [
    { icon: Bell, title: "Push Notifications", color: "text-blue-500" },
    { icon: Lock, title: "Secure Login", color: "text-green-500" },
    { icon: BarChart3, title: "Analytics", color: "text-purple-500" },
    { icon: Calendar, title: "Scheduling", color: "text-orange-500" },
  ];

  // Decorative floating icons
  const decorativeIcons = [
    { icon: Smartphone, delay: 0.2, x: 10, y: 20 },
    { icon: Globe, delay: 0.4, x: 90, y: 15 },
    { icon: Shield, delay: 0.6, x: 15, y: 70 },
    { icon: Star, delay: 0.8, x: 85, y: 75 },
    { icon: Heart, delay: 1.0, x: 5, y: 45 },
    { icon: Zap, delay: 1.2, x: 95, y: 50 },
  ];

  return (
    <section
      id="customer-portal"
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="2" fill="rgb(34, 197, 94)" opacity="0.4"/>
              <circle cx="10" cy="10" r="1" fill="rgb(46, 213, 115)" opacity="0.6"/>
              <circle cx="50" cy="20" r="1.5" fill="rgb(34, 197, 94)" opacity="0.5"/>
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
              Customer Portal & Mobile App
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 dark:text-white leading-tight"
            >
              Empowering Customers with
              <span className="block text-green-600 dark:text-green-400">
                Self-Service Solutions
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter"
            >
              Provide your customers with a powerful portal and mobile app that
              puts control in their hands - from placing orders to tracking
              deliveries, managing accounts, and accessing digital documents.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              {portalFeatures.map((feature, index) => {
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

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-poppins font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Launch Portal
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgb(34, 197, 94)",
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-300 dark:border-green-600 text-green-700 dark:text-green-300 px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 group"
              >
                <Download size={20} className="inline mr-2" />
                Download App
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Mobile App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Mobile Device Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mx-auto max-w-sm"
            >
              {/* Phone Frame */}
              <div className="relative bg-gray-900 dark:bg-gray-800 rounded-3xl p-2 shadow-2xl">
                {/* Screen */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
                  {/* Status Bar */}
                  <div className="bg-green-500 h-8 flex items-center justify-between px-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-6 space-y-6 h-96 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <h3 className="text-lg font-playfair font-bold text-gray-900 dark:text-white">
                          Welcome back!
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 font-inter">
                          John Doe
                        </p>
                      </div>
                      <motion.div
                        animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <User size={20} className="text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Quick Actions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 1 }}
                      className="grid grid-cols-2 gap-3"
                    >
                      {mobileFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                              duration: 0.4,
                              delay: 1.2 + index * 0.1,
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-md border border-gray-200/50 dark:border-gray-700/50"
                          >
                            <motion.div
                              animate={
                                isInView ? { scale: [1, 1.1, 1] } : { scale: 1 }
                              }
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 2 + index * 0.5,
                              }}
                            >
                              <IconComponent
                                size={20}
                                className={`${feature.color} mb-2`}
                              />
                            </motion.div>
                            <p className="text-xs font-poppins font-medium text-gray-900 dark:text-white">
                              {feature.title}
                            </p>
                          </motion.div>
                        );
                      })}
                    </motion.div>

                    {/* Recent Activity */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="space-y-3"
                    >
                      <h4 className="text-sm font-poppins font-semibold text-gray-900 dark:text-white">
                        Recent Orders
                      </h4>
                      {[
                        { id: "#ORD-247", status: "Delivered", color: "green" },
                        { id: "#ORD-248", status: "In Transit", color: "blue" },
                        {
                          id: "#ORD-249",
                          status: "Processing",
                          color: "orange",
                        },
                      ].map((order, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{
                            duration: 0.4,
                            delay: 1.6 + index * 0.1,
                          }}
                          className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200/50 dark:border-gray-700/50"
                        >
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-2 h-2 rounded-full bg-${order.color}-500`}
                            ></div>
                            <span className="text-xs font-inter text-gray-900 dark:text-white">
                              {order.id}
                            </span>
                          </div>
                          <span
                            className={`text-xs font-poppins font-medium text-${order.color}-600 dark:text-${order.color}-400`}
                          >
                            {order.status}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Feature Cards - Optimized for mobile responsiveness */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                      }
                    : { opacity: 0, scale: 0.8, x: 0, y: 0 }
                }
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute top-8 left-1 sm:top-16 sm:-left-12 lg:-left-20 bg-white dark:bg-gray-800 p-1 sm:p-3 rounded-md sm:rounded-xl shadow-sm sm:shadow-xl border border-gray-200/50 dark:border-gray-700/50 w-20 h-6 sm:w-auto sm:h-auto flex items-center justify-center"
              >
                <div className="flex items-center space-x-0.5 sm:space-x-2">
                  <CreditCard
                    size={10}
                    className="text-green-500 sm:w-4 sm:h-4 flex-shrink-0"
                  />
                  <span className="text-[8px] sm:text-xs font-poppins text-gray-900 dark:text-white whitespace-nowrap leading-tight">
                    Secure
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                      }
                    : { opacity: 0, scale: 0.8, x: 0, y: 0 }
                }
                transition={{ duration: 0.8, delay: 2 }}
                className="absolute bottom-12 right-1 sm:bottom-20 sm:-right-8 lg:-right-16 bg-white dark:bg-gray-800 p-1 sm:p-3 rounded-md sm:rounded-xl shadow-sm sm:shadow-xl border border-gray-200/50 dark:border-gray-700/50 w-20 h-6 sm:w-auto sm:h-auto flex items-center justify-center"
              >
                <div className="flex items-center space-x-0.5 sm:space-x-2">
                  <Eye
                    size={10}
                    className="text-blue-500 sm:w-4 sm:h-4 flex-shrink-0"
                  />
                  <span className="text-[8px] sm:text-xs font-poppins text-gray-900 dark:text-white whitespace-nowrap leading-tight">
                    Track
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
