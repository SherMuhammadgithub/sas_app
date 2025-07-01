"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTheme } from "@/context/ThemeContext";
import {
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  Clock,
  BarChart3,
  Users,
  Target,
  Zap,
  Shield,
  Star,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

/**
 * Order Management Section Component
 * Features split layout with decorative spreading icons and animated content
 */
export const OrderManagementSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);
  // Floating sparkles/particles for extra charm
  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 4,
    size: 2 + Math.random() * 4,
  }));

  const { theme } = useTheme();

  // Decorative icons for spreading animation with more charming effects
  const decorativeIcons = [
    {
      Icon: ShoppingCart,
      delay: 0.1,
      position: "top-8 left-4 md:top-16 md:left-16",
      size: { mobile: 32, desktop: 48 },
      opacity: 0.4,
      animation: "bounce",
    },
    {
      Icon: Package,
      delay: 0.2,
      position: "top-16 right-8 md:top-28 md:right-28",
      size: { mobile: 28, desktop: 44 },
      opacity: 0.35,
      animation: "float",
    },
    {
      Icon: Truck,
      delay: 0.3,
      position: "top-24 left-12 md:top-44 md:left-36",
      size: { mobile: 34, desktop: 52 },
      opacity: 0.3,
      animation: "pulse",
    },
    {
      Icon: CheckCircle,
      delay: 0.4,
      position: "top-32 right-6 md:top-56 md:right-16",
      size: { mobile: 26, desktop: 40 },
      opacity: 0.45,
      animation: "bounce",
    },
    {
      Icon: Clock,
      delay: 0.5,
      position: "bottom-32 left-6 md:bottom-56 md:left-20",
      size: { mobile: 30, desktop: 46 },
      opacity: 0.38,
      animation: "float",
    },
    {
      Icon: BarChart3,
      delay: 0.6,
      position: "bottom-24 right-12 md:bottom-44 md:right-36",
      size: { mobile: 32, desktop: 50 },
      opacity: 0.32,
      animation: "pulse",
    },
    {
      Icon: Users,
      delay: 0.7,
      position: "bottom-16 left-16 md:bottom-28 md:left-44",
      size: { mobile: 28, desktop: 42 },
      opacity: 0.42,
      animation: "bounce",
    },
    {
      Icon: Target,
      delay: 0.8,
      position: "bottom-8 right-4 md:bottom-16 md:right-20",
      size: { mobile: 30, desktop: 48 },
      opacity: 0.36,
      animation: "float",
    },
    {
      Icon: Zap,
      delay: 0.9,
      position: "top-40 left-20 md:top-36 md:left-56",
      size: { mobile: 36, desktop: 54 },
      opacity: 0.28,
      animation: "pulse",
    },
    {
      Icon: Shield,
      delay: 1.0,
      position: "top-48 right-16 md:top-48 md:right-48",
      size: { mobile: 29, desktop: 43 },
      opacity: 0.44,
      animation: "bounce",
    },
    {
      Icon: Star,
      delay: 1.1,
      position: "bottom-40 left-8 md:bottom-40 md:left-28",
      size: { mobile: 31, desktop: 45 },
      opacity: 0.4,
      animation: "float",
    },
    {
      Icon: TrendingUp,
      delay: 1.2,
      position: "bottom-48 right-20 md:bottom-32 md:right-32",
      size: { mobile: 33, desktop: 49 },
      opacity: 0.34,
      animation: "pulse",
    },
    // Additional charming icons - hidden on mobile for cleaner look
    {
      Icon: Package,
      delay: 1.3,
      position: "hidden md:block md:top-72 md:left-72",
      size: { mobile: 0, desktop: 36 },
      opacity: 0.25,
      animation: "bounce",
    },
    {
      Icon: ShoppingCart,
      delay: 1.4,
      position: "hidden md:block md:top-12 md:right-60",
      size: { mobile: 0, desktop: 38 },
      opacity: 0.3,
      animation: "float",
    },
    {
      Icon: CheckCircle,
      delay: 1.5,
      position: "hidden md:block md:bottom-12 md:left-60",
      size: { mobile: 0, desktop: 41 },
      opacity: 0.35,
      animation: "pulse",
    },
    {
      Icon: Star,
      delay: 1.6,
      position: "hidden md:block md:top-80 md:right-12",
      size: { mobile: 0, desktop: 37 },
      opacity: 0.32,
      animation: "bounce",
    },
    {
      Icon: Truck,
      delay: 1.7,
      position: "hidden md:block md:bottom-72 md:right-72",
      size: { mobile: 0, desktop: 39 },
      opacity: 0.28,
      animation: "float",
    },
    {
      Icon: Zap,
      delay: 1.8,
      position: "hidden md:block md:top-24 md:left-80",
      size: { mobile: 0, desktop: 34 },
      opacity: 0.26,
      animation: "pulse",
    },
  ];

  // Key features list
  const features = [
    {
      title: "Smart Order Processing",
      description:
        "Automated workflow management with real-time tracking and intelligent routing.",
      icon: ShoppingCart,
    },
    {
      title: "Inventory Synchronization",
      description:
        "Real-time stock updates across all channels to prevent overselling.",
      icon: Package,
    },
    {
      title: "Delivery Tracking",
      description:
        "End-to-end shipment visibility with automated customer notifications.",
      icon: Truck,
    },
    {
      title: "Quality Assurance",
      description:
        "Built-in quality checks and approval workflows for every order.",
      icon: CheckCircle,
    },
  ];

  return (
    <section
      id="order-management"
      ref={ref}
      className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Decorative Background Icons - Enhanced Spreading Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {decorativeIcons.map(
          ({ Icon, delay, position, opacity, animation }, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0,
                rotate: -180,
                x: "50vw",
                y: "50vh",
              }}
              animate={
                isInView
                  ? {
                      opacity: opacity,
                      scale: 1,
                      rotate: 0,
                      x: 0,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0,
                      rotate: -180,
                      x: "50vw",
                      y: "50vh",
                    }
              }
              transition={{
                duration: 1.2,
                delay: delay,
                ease: "easeOut",
                type: "spring",
                stiffness: 60,
              }}
              className={`absolute ${position} text-green-400 dark:text-green-300`}
            >
              <motion.div
                animate={
                  animation === "bounce"
                    ? {
                        y: [0, -12, 0],
                        transition: {
                          repeat: Infinity,
                          duration: 2 + Math.random() * 2,
                          ease: "easeInOut",
                        },
                      }
                    : animation === "float"
                    ? {
                        y: [0, -8, 0],
                        x: [0, 6, 0],
                        rotate: [0, 5, 0],
                        transition: {
                          repeat: Infinity,
                          duration: 3 + Math.random() * 2,
                          ease: "easeInOut",
                        },
                      }
                    : animation === "pulse"
                    ? {
                        scale: [1, 1.3, 1],
                        opacity: [opacity, opacity * 2.2, opacity],
                        transition: {
                          repeat: Infinity,
                          duration: 2.5 + Math.random() * 1.5,
                          ease: "easeInOut",
                        },
                      }
                    : {}
                }
              >
                <Icon
                  className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${
                    theme === "dark" ? "drop-shadow-lg" : "drop-shadow-md"
                  }`}
                  style={{
                    filter: `drop-shadow(0 0 12px rgba(34, 197, 94, 0.6))`,
                    opacity: theme === "dark" ? 1.0 : 0.9,
                  }}
                />
              </motion.div>
            </motion.div>
          )
        )}
      </div>

      {/* Floating Sparkles for Extra Charm */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute w-1 h-1 bg-green-400 rounded-full shadow-lg"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              boxShadow: `0 0 ${sparkle.size * 2}px rgba(34, 197, 94, 0.6)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.9, 0],
              scale: [0, 1.2, 0],
              y: [-20, -50, -80],
              x: [0, Math.random() * 30 - 15, Math.random() * 60 - 30],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side - Left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium border border-green-200 dark:border-green-700/50"
              >
                <Package className="w-4 h-4 mr-2" />
                Order Management System
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Streamline Your{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Order Flow
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
              >
                Transform your order management with our intelligent system that
                automates workflows, tracks inventory in real-time, and ensures
                seamless delivery from click to customer satisfaction.
              </motion.p>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <feature.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 font-semibold rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300">
                  View Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Image Side - Right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 1, delay: 0.6 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/images/order.png"
                    alt="Order Management Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />

                  {/* Image Overlay for dark mode */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      theme === "dark" ? "bg-gray-900/20" : "bg-white/5"
                    }`}
                  />
                </motion.div>

                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 20, scale: 0.8 }
                  }
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Orders Today
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        1,247
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 20, scale: 0.8 }
                  }
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Star className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Satisfaction
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        98.7%
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
