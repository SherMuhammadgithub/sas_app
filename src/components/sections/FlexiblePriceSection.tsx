"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  DollarSign,
  Users,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Target,
  BarChart3,
  Clock,
  Star,
  Infinity,
  ArrowRight,
} from "lucide-react";

/**
 * Flexible Pricing Section Component
 * Features transparent pricing with unlimited users and comprehensive value proposition
 */
export const FlexiblePricingSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  // Key pricing benefits
  const pricingBenefits = [
    {
      title: "Unlimited Users",
      description:
        "Empower your entire team to collaborate seamlessly without extra fees or licensing limitations.",
      icon: Users,
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden costs or surprise charges. One simple price covers everything you need.",
      icon: Shield,
    },
    {
      title: "Comprehensive Tools",
      description:
        "Access all operational management features in one integrated platform.",
      icon: Zap,
    },
    {
      title: "Scalable Solution",
      description:
        "Perfect for teams of any size - from small businesses to large enterprises.",
      icon: TrendingUp,
    },
  ];

  // Value propositions
  const valueProps = [
    { label: "Unlimited Users", icon: Infinity },
    { label: "All Features Included", icon: CheckCircle },
    { label: "24/7 Support", icon: Clock },
    { label: "Regular Updates", icon: Star },
    { label: "Data Security", icon: Shield },
    { label: "API Access", icon: Target },
  ];

  // ROI metrics
  const roiMetrics = [
    { label: "Cost Reduction", value: "40%", icon: TrendingUp },
    { label: "Productivity Boost", value: "60%", icon: BarChart3 },
    { label: "Time Savings", value: "25hrs/week", icon: Clock },
    { label: "ROI Timeline", value: "3 months", icon: Target },
  ];

  // Decorative floating icons
  const decorativeIcons = [
    { icon: DollarSign, delay: 0.2, x: 15, y: 20 },
    { icon: Users, delay: 0.4, x: 85, y: 15 },
    { icon: CheckCircle, delay: 0.6, x: 20, y: 75 },
    { icon: TrendingUp, delay: 0.8, x: 90, y: 70 },
    { icon: Shield, delay: 1.0, x: 10, y: 50 },
    { icon: Star, delay: 1.2, x: 95, y: 45 },
  ];

  return (
    <section
      id="flexible-pricing"
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-white to-emerald-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-green-900/20 relative overflow-hidden"
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
                      opacity: [0, 0.3, 0.15],
                      scale: [0, 1.2, 1],
                      x: [
                        typeof window !== "undefined"
                          ? window.innerWidth / 2
                          : 0,
                        typeof window !== "undefined"
                          ? (window.innerWidth * item.x) / 100
                          : item.x,
                        typeof window !== "undefined"
                          ? (window.innerWidth * item.x) / 100 + 10
                          : item.x + 10,
                      ],
                      y: [
                        typeof window !== "undefined"
                          ? window.innerHeight / 2
                          : 0,
                        typeof window !== "undefined"
                          ? (window.innerHeight * item.y) / 100
                          : item.y,
                        typeof window !== "undefined"
                          ? (window.innerHeight * item.y) / 100 + 15
                          : item.y + 15,
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                delay: item.delay,
                ease: "easeOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 5,
              }}
              className="absolute z-10"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
            >
              <IconComponent
                size={28}
                className="text-green-500/50 dark:text-green-400/50 filter drop-shadow-lg"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-poppins font-medium mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Transparent Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 dark:text-white leading-tight mb-6"
          >
            Flexible Pricing and
            <span className="block text-green-600 dark:text-green-400">
              Unlimited Users
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter max-w-3xl mx-auto"
          >
            Experience the full power of our platform for a transparent and affordable price. 
            This straightforward pricing model helps you forecast expenses accurately while 
            maximizing your return on investment.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Main Pricing Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl text-white overflow-hidden"
            >
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="1" fill="white" opacity="0.6"/>
                      <circle cx="10" cy="10" r="0.5" fill="white" opacity="0.4"/>
                      <circle cx="30" cy="15" r="0.8" fill="white" opacity="0.5"/>
                    </svg>
                  `)}')`,
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative z-10">
                {/* Popular Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-poppins font-medium mb-6"
                >
                  <Star size={16} className="mr-1" />
                  Most Popular
                </motion.div>

                {/* Price */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="mb-6"
                >
                  <div className="flex items-baseline">
                    <span className="text-5xl md:text-6xl font-playfair font-bold">
                      $500
                    </span>
                    <span className="text-xl text-green-100 ml-2 font-inter">
                      /month
                    </span>
                  </div>
                  <p className="text-green-100 font-inter mt-2">
                    Complete platform access
                  </p>
                </motion.div>

                {/* Features List */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="space-y-3 mb-8"
                >
                  {valueProps.map((prop, index) => {
                    const IconComponent = prop.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <IconComponent size={20} className="text-white" />
                        <span className="font-inter">{prop.label}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: 1.7 }}
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-green-600 px-8 py-4 rounded-xl font-poppins font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    Start Your Journey
                    <ArrowRight
                      size={20}
                      className="ml-2 inline group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* ROI Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              {roiMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
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
                      delay: 1.4 + index * 0.1,
                      type: "spring",
                      stiffness: 80,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      transition: { duration: 0.3 },
                    }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group text-center"
                  >
                    <motion.div
                      className="mb-2 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent
                        size={24}
                        className="text-green-600 dark:text-green-400 mx-auto"
                      />
                    </motion.div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 font-playfair mb-1">
                      {metric.value}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-inter">
                      {metric.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-8"
          >
            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 dark:text-white">
                Unparalleled Value for Your Investment
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter">
                Empower your entire team to collaborate seamlessly without worrying about 
                extra fees or licensing limitations. Enjoy comprehensive operational 
                management tools with improved productivity and reduced operational costs.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="space-y-4"
            >
              {pricingBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    className="flex items-start space-x-4 group hover:bg-green-50 dark:hover:bg-green-900/20 p-4 rounded-xl transition-all duration-300"
                  >
                    <motion.div
                      className="mt-1 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                        <IconComponent
                          size={24}
                          className="text-green-600 dark:text-green-400"
                        />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-poppins font-semibold text-gray-900 dark:text-white mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Additional Value Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200/50 dark:border-green-700/50"
            >
              <h4 className="font-poppins font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <TrendingUp size={20} className="text-green-600 dark:text-green-400 mr-2" />
                Why Choose Our Pricing Model?
              </h4>
              <div className="space-y-3 text-gray-600 dark:text-gray-300 font-inter">
                <p className="flex items-start">
                  <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Predictable monthly costs with no surprise charges or hidden fees</span>
                </p>
                <p className="flex items-start">
                  <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Scale your team without worrying about per-user licensing costs</span>
                </p>
                <p className="flex items-start">
                  <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>ROI typically achieved within 3 months of implementation</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};