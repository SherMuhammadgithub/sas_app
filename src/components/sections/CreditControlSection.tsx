"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTheme } from "@/context/ThemeContext";
import {
  DollarSign,
  FileText,
  Users,
  BarChart3,
  Briefcase,
  Target,
  Shield,
  CheckCircle,
  Zap,
  TrendingUp,
  AlertTriangle,
  CreditCard,
  Clock,
  Star,
} from "lucide-react";
import Image from "next/image";

/**
 * Credit Control Section Component
 * Features split layout with decorative spreading icons and animated content
 * Matches the Order Management section's structure for consistency
 */
export const CreditControlSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);
  const { theme } = useTheme();

  // Floating sparkles/particles for extra charm
  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 4,
    size: 2 + Math.random() * 4,
  }));

  // Decorative icons for spreading animation with charming effects (matching Order Management)
  const decorativeIcons = [
    {
      Icon: DollarSign,
      delay: 0.1,
      position: "top-8 left-4 md:top-16 md:left-16",
      size: { mobile: 32, desktop: 48 },
      opacity: 0.4,
      animation: "bounce",
    },
    {
      Icon: FileText,
      delay: 0.2,
      position: "top-16 right-8 md:top-28 md:right-28",
      size: { mobile: 28, desktop: 44 },
      opacity: 0.35,
      animation: "float",
    },
    {
      Icon: CreditCard,
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
      Icon: Briefcase,
      delay: 1.3,
      position: "hidden md:block md:top-72 md:left-72",
      size: { mobile: 0, desktop: 36 },
      opacity: 0.25,
      animation: "bounce",
    },
    {
      Icon: AlertTriangle,
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
      Icon: DollarSign,
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

  // Key features list (matching Order Management approach)
  const features = [
    {
      title: "Credit Limit Management",
      description:
        "Set and monitor customer credit limits with automated alerts and risk assessment.",
      icon: DollarSign,
    },
    {
      title: "Invoice Tracking",
      description:
        "Track outstanding invoices with automated follow-up and payment reminders.",
      icon: FileText,
    },
    {
      title: "Risk Assessment",
      description:
        "Evaluate customer creditworthiness with comprehensive risk scoring algorithms.",
      icon: Shield,
    },
    {
      title: "Payment Analytics",
      description:
        "Analyze payment patterns and identify potential credit risks early.",
      icon: BarChart3,
    },
  ];

  // Animation variants for icons (matching Order Management)
  const getAnimationProps = (animation: string) => {
    switch (animation) {
      case "bounce":
        return {
          animate: isInView
            ? {
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0],
              }
            : {},
          transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };
      case "float":
        return {
          animate: isInView
            ? {
                y: [0, -12, 0],
                x: [0, 3, -3, 0],
              }
            : {},
          transition: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };
      case "pulse":
        return {
          animate: isInView
            ? {
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }
            : {},
          transition: {
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };
      default:
        return {};
    }
  };

  return (
    <section
      id="credit-control"
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 0L0 0 0 60" fill="none" stroke="rgb(46, 213, 115)" stroke-width="0.5"/>
            </svg>
          `)}')`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute w-1 h-1 bg-green-400/40 rounded-full"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
            }}
            animate={
              isInView
                ? {
                    opacity: [0, 1, 0],
                    scale: [0, sparkle.size, 0],
                    y: [0, -20, 0],
                  }
                : {}
            }
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Decorative Spreading Icons - Exact same approach as Order Management */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {decorativeIcons.map((item, index) => {
          const IconComponent = item.Icon;
          const animationProps = getAnimationProps(item.animation);

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
                      opacity: item.opacity,
                      scale: 1,
                      x: 0,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0,
                      x:
                        typeof window !== "undefined"
                          ? window.innerWidth / 2
                          : 0,
                      y:
                        typeof window !== "undefined"
                          ? window.innerHeight / 2
                          : 0,
                    }
              }
              transition={{
                duration: 2,
                delay: item.delay,
                ease: "easeOut",
                type: "spring",
                stiffness: 60,
              }}
              className={`absolute z-10 ${item.position}`}
            >
              <motion.div {...animationProps}>
                <IconComponent
                  size={item.size.desktop}
                  className="text-green-500/70 dark:text-green-400/70 filter drop-shadow-lg w-8 h-8 md:w-12 md:h-12"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content (matching Order Management exactly) */}
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
              Credit Management
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 dark:text-white leading-tight"
            >
              Credit Control
              <span className="block text-green-600 dark:text-green-400">
                Excellence
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter"
            >
              Take complete control of your credit management with our
              comprehensive suite of tools designed to monitor, assess, and
              optimize your financial relationships with customers.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              {features.map((feature, index) => {
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
                    <div className="mt-1 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent
                        size={24}
                        className="text-green-600 dark:text-green-400"
                      />
                    </div>
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

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(46, 213, 115, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-poppins font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Explore Credit Tools
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Card (replacing SVG with simple, elegant card) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative bg-gradient-to-br from-white to-green-50/50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
            >
              {/* Credit Management Illustration */}
              <div className="relative h-80 md:h-96">
                <Image
                  src="/images/invoice_.jpg"
                  alt="Credit Management Dashboard"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 via-emerald-600/70 to-green-800/80" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-white"
                  >
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                      Smart Credit Control
                    </h3>
                    <p className="text-green-100 font-inter text-sm md:text-base mb-6">
                      Advanced analytics and automated workflows for optimal
                      credit management
                    </p>

                    {/* Credit Score Display */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ duration: 0.8, delay: 1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
                    >
                      <div className="flex items-center justify-center space-x-6">
                        <div className="text-center">
                          <motion.div
                            className="text-3xl font-bold text-white font-playfair"
                            animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 1.5,
                            }}
                          >
                            98.5%
                          </motion.div>
                          <div className="text-xs text-green-200 font-inter">
                            Collection Rate
                          </div>
                        </div>
                        <div className="text-center">
                          <motion.div
                            className="text-3xl font-bold text-white font-playfair"
                            animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 2,
                            }}
                          >
                            24h
                          </motion.div>
                          <div className="text-xs text-green-200 font-inter">
                            Response Time
                          </div>
                        </div>
                        <div className="text-center">
                          <motion.div
                            className="text-3xl font-bold text-white font-playfair"
                            animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 2.5,
                            }}
                          >
                            $2.4M
                          </motion.div>
                          <div className="text-xs text-green-200 font-inter">
                            Managed Credit
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Feature Cards Grid Below Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: CreditCard,
                  title: "Payment Tracking",
                  value: "Real-time",
                },
                {
                  icon: AlertTriangle,
                  title: "Risk Alerts",
                  value: "Instant",
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
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
                      delay: 0.8 + index * 0.1,
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
                    <h4 className="font-poppins font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-green-600 dark:text-green-400 text-xs font-inter font-semibold">
                      {item.value}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
