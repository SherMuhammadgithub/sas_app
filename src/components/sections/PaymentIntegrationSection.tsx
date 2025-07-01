"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  CreditCard,
  Smartphone,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  Users,
  TrendingUp,
  Wifi,
  Lock,
  DollarSign,
  Clock,
  Star,
  Settings,
  Bell,
  Activity,
} from "lucide-react";
import Image from "next/image";

/**
 * Payment Integration Section Component
 * Features streamlined payment and communication integration with mobile money providers
 */
export const PaymentIntegrationSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  // Payment integration features
  const paymentFeatures = [
    {
      title: "Mobile Money Integration",
      description:
        "Seamless integration with Airtel and MTN Mobile Money for instant transactions.",
      icon: Smartphone,
    },
    {
      title: "Real-time Processing",
      description:
        "Process payments instantly with real-time confirmation and automated reconciliation.",
      icon: Zap,
    },
    {
      title: "Secure Transactions",
      description:
        "Bank-grade security with end-to-end encryption for all payment transactions.",
      icon: Shield,
    },
    {
      title: "Multi-Provider Support",
      description:
        "Support for multiple payment providers with unified API integration.",
      icon: Globe,
    },
  ];

  // Decorative floating icons for charm
  const decorativeIcons = [
    { icon: CreditCard, delay: 0.2, x: 10, y: 15 },
    { icon: Smartphone, delay: 0.4, x: 90, y: 20 },
    { icon: Shield, delay: 0.6, x: 15, y: 70 },
    { icon: Zap, delay: 0.8, x: 85, y: 75 },
    { icon: Globe, delay: 1.0, x: 5, y: 45 },
    { icon: CheckCircle, delay: 1.2, x: 95, y: 50 },
    { icon: DollarSign, delay: 1.4, x: 25, y: 25 },
    { icon: Lock, delay: 1.6, x: 75, y: 35 },
  ];

  // Payment providers data
  const providers = [
    {
      name: "Airtel Money",
      color: "from-green-500 to-emerald-600",
      icon: <DollarSign size={28} className="text-red-400" />, // Money icon for Airtel
      bgColor: "bg-green-500",
      accentColor: "text-red-400", // Keep Airtel's red accent
    },
    {
      name: "MTN Mobile Money",
      color: "from-emerald-500 to-green-600",
      icon: <DollarSign size={28} className="text-yellow-400" />, // Money icon for MTN
      bgColor: "bg-emerald-500",
      accentColor: "text-yellow-400", // Keep MTN's yellow accent
    },
  ];

  // Transaction stats
  const stats = [
    { label: "Transaction Success Rate", value: "99.8%", icon: TrendingUp },
    { label: "Average Processing Time", value: "< 3sec", icon: Clock },
    { label: "Daily Transactions", value: "50K+", icon: Activity },
    { label: "Uptime Guarantee", value: "99.9%", icon: CheckCircle },
  ];

  return (
    <section
      id="payment-integration"
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
              Payment Integration
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 dark:text-white leading-tight"
            >
              Streamlined Payment and
              <span className="block text-green-600 dark:text-green-400">
                Communication Integration
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter"
            >
              Make payments and initiate transactions directly with Airtel and
              MTN Mobile Money, all with{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                no extra aggregate fees
              </span>
              . Seamless, secure, and instant payment processing.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              {paymentFeatures.map((feature, index) => {
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
                Integrate Payments
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Provider Integration Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Integration Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative bg-gradient-to-br from-white to-green-50/50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-8"
            >
              {/* Provider Cards */}
              <div className="space-y-4 sm:space-y-6">
                {providers.map((provider, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                    }
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className={`bg-gradient-to-r ${provider.color} p-4 sm:p-6 rounded-xl shadow-lg text-white relative overflow-hidden w-full`}
                  >
                    {/* Provider Logo Area */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                        <motion.div
                          animate={isInView ? { rotate: [0, 360] } : {}}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 1 + index * 0.5,
                          }}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                        >
                          {provider.icon}
                        </motion.div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-playfair font-bold text-base sm:text-lg flex items-center truncate">
                            <span className="truncate">{provider.name}</span>
                            <span
                              className={`ml-1 sm:ml-2 text-xs sm:text-sm ${provider.accentColor} flex-shrink-0`}
                            >
                              ●
                            </span>
                          </h3>
                          <p className="text-white/80 text-xs sm:text-sm font-inter">
                            Instant Transactions
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={
                          isInView ? { scale: [1, 1.1, 1] } : { scale: 1 }
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1.5 + index * 0.3,
                        }}
                        className="bg-white/20 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 flex-shrink-0"
                      >
                        <CheckCircle
                          size={20}
                          className="text-white sm:w-6 sm:h-6"
                        />
                      </motion.div>
                    </div>

                    {/* Transaction Simulation */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 sm:p-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm font-inter">
                          Transaction Status
                        </span>
                        <motion.span
                          animate={
                            isInView ? { opacity: [1, 0.5, 1] } : { opacity: 1 }
                          }
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 2 + index * 0.3,
                          }}
                          className="text-xs sm:text-sm font-poppins font-semibold"
                        >
                          ✓ Success
                        </motion.span>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-white/80 font-inter">
                          Amount: UGX 50,000
                        </span>
                        <span className="text-xs text-white/80 font-inter">
                          Fee: UGX 0
                        </span>
                      </div>
                    </motion.div>

                    {/* Decorative Elements - Hidden on very small screens */}
                    <motion.div
                      animate={
                        isInView
                          ? {
                              x: [0, 10, 0],
                              y: [0, -5, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="absolute -top-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full hidden sm:block"
                    />
                    <motion.div
                      animate={
                        isInView
                          ? {
                              x: [0, -8, 0],
                              y: [0, 8, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 1 + index * 0.3,
                      }}
                      className="absolute -bottom-1 -left-1 w-8 h-8 sm:w-12 sm:h-12 bg-white/5 rounded-full hidden sm:block"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Integration Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-4 sm:mt-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-3 sm:p-4"
              >
                <h4 className="font-poppins font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 text-center text-sm sm:text-base">
                  Integration Benefits
                </h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.slice(2).map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <motion.div
                          animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1.5 + index * 0.5,
                          }}
                          className="flex justify-center mb-1 sm:mb-2"
                        >
                          <IconComponent
                            size={16}
                            className="text-green-600 dark:text-green-400 sm:w-5 sm:h-5"
                          />
                        </motion.div>
                        <div className="text-sm sm:text-lg font-bold text-green-600 dark:text-green-400 font-playfair">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-300 font-inter leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Floating "No Fees" Badge - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-poppins font-bold shadow-xl"
            >
              <motion.span
                animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                className="block sm:inline"
              >
                <span className="hidden sm:inline">No Extra Fees! 🎉</span>
                <span className="sm:hidden">No Fees! 🎉</span>
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
