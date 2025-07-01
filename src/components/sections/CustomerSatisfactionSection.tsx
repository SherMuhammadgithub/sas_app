"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Zap,
  DollarSign,
  Heart,
  TrendingUp,
  Shield,
  Users,
  Clock,
  CheckCircle,
  Target,
  BarChart3,
  Handshake,
  ArrowRight,
  Star,
  Workflow,
  CreditCard,
  Truck,
  Package,
  Globe,
} from "lucide-react";

/**
 * Efficiency & Benefits Section Component
 * Showcases comprehensive value proposition and transformation benefits
 */
export const CustomerSatisfactionSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  // Core value pillars
  const valuePillars = [
    {
      title: "Unlock Efficiency",
      description:
        "Streamline workflows, reduce manual tasks, and prevent costly errors with our intelligent automation.",
      icon: Zap,
      color: "from-yellow-500 to-amber-500",
      stats: ["75% faster", "90% automation", "Zero errors"],
    },
    {
      title: "Cost Savings",
      description:
        "Drive operational efficiency to new heights while significantly reducing operational expenses.",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      stats: ["40% cost cut", "3x ROI", "Fast payback"],
    },
    {
      title: "Customer Satisfaction",
      description:
        "Deliver exceptional experiences with timely updates, seamless payments, and self-service portals.",
      icon: Heart,
      color: "from-green-400 to-green-600",
      stats: ["99% uptime", "24/7 support", "5-star rated"],
    },
  ];

  // Platform benefits
  const platformBenefits = [
    {
      title: "Enhanced Order Handling",
      description: "Intelligent order processing with real-time status updates",
      icon: Package,
    },
    {
      title: "Real-time Inventory Tracking",
      description:
        "Live inventory visibility across all locations and channels",
      icon: BarChart3,
    },
    {
      title: "Transparent Deliveries",
      description: "Complete delivery transparency with customer notifications",
      icon: Truck,
    },
    {
      title: "Integrated Financial Tools",
      description: "Comprehensive financial management and reporting suite",
      icon: CreditCard,
    },
    {
      title: "Compliance & Controls",
      description: "Robust credit controls and regulatory compliance features",
      icon: Shield,
    },
    {
      title: "Customer Self-Service",
      description: "Empowering portals for seamless customer interactions",
      icon: Users,
    },
  ];

  // Transformation outcomes
  const outcomes = [
    { label: "Workflow Efficiency", value: "300%", icon: Workflow },
    { label: "Error Reduction", value: "95%", icon: CheckCircle },
    { label: "Customer Satisfaction", value: "98%", icon: Star },
    { label: "Cost Savings", value: "40%", icon: TrendingUp },
  ];

  // Decorative floating icons
  const decorativeIcons = [
    { icon: Zap, delay: 0.2, x: 12, y: 18 },
    { icon: DollarSign, delay: 0.4, x: 88, y: 12 },
    { icon: Heart, delay: 0.6, x: 15, y: 78 },
    { icon: TrendingUp, delay: 0.8, x: 92, y: 72 },
    { icon: Shield, delay: 1.0, x: 8, y: 48 },
    { icon: Star, delay: 1.2, x: 96, y: 42 },
  ];

  return (
    <section
      id="efficiency-benefits"
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
                      opacity: [0, 0.4, 0.2],
                      scale: [0, 1.3, 1],
                      x: [
                        typeof window !== "undefined"
                          ? window.innerWidth / 2
                          : 0,
                        typeof window !== "undefined"
                          ? (window.innerWidth * item.x) / 100
                          : item.x,
                        typeof window !== "undefined"
                          ? (window.innerWidth * item.x) / 100 + 12
                          : item.x + 12,
                      ],
                      y: [
                        typeof window !== "undefined"
                          ? window.innerHeight / 2
                          : 0,
                        typeof window !== "undefined"
                          ? (window.innerHeight * item.y) / 100
                          : item.y,
                        typeof window !== "undefined"
                          ? (window.innerHeight * item.y) / 100 + 18
                          : item.y + 18,
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 3.5,
                delay: item.delay,
                ease: "easeOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 6,
              }}
              className="absolute z-10"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
            >
              <IconComponent
                size={36}
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
            Transform Your Business
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 dark:text-white leading-tight mb-6"
          >
            Unlock Efficiency, Cost Savings, and
            <span className="block text-green-600 dark:text-green-400">
              Customer Satisfaction
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter max-w-4xl mx-auto"
          >
            Transform your operations with our all-in-one SaaS platform.
            Streamline workflows, reduce manual tasks, and prevent costly errors
            while delivering exceptional customer experiences that drive
            business growth.
          </motion.p>
        </div>

        {/* Value Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {valuePillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.2,
                      type: "spring",
                      stiffness: 150,
                    }}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  >
                    <IconComponent
                      size={32}
                      className="text-green-600 dark:text-green-400"
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-playfair font-bold text-gray-900 dark:text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-inter leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2">
                    {pillar.stats.map((stat, statIndex) => (
                      <motion.span
                        key={statIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: 1.0 + index * 0.2 + statIndex * 0.1,
                        }}
                        className="inline-flex items-center bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-poppins font-medium"
                      >
                        {stat}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Platform Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Comprehensive Platform Benefits
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }
                  }
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    y: -4,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <motion.div
                    className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent
                      size={24}
                      className="text-green-600 dark:text-green-400"
                    />
                  </motion.div>
                  <h4 className="font-poppins font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-inter">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Transformation Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-16"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                Proven Transformation Outcomes
              </h3>
              <p className="text-green-100 font-inter">
                Join thousands of businesses that have already transformed their
                operations
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {outcomes.map((outcome, index) => {
                const IconComponent = outcome.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 1.6 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <motion.div
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent size={24} className="text-white" />
                    </motion.div>
                    <div className="text-3xl font-playfair font-bold mb-1">
                      {outcome.value}
                    </div>
                    <p className="text-green-100 text-sm font-inter">
                      {outcome.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Call to Partnership */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8, delay: 2.0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Handshake
                  size={48}
                  className="text-green-600 dark:text-green-400"
                />
              </motion.div>
            </div>

            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 dark:text-white mb-6">
              Let Us Partner With You
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-inter leading-relaxed mb-8">
              Transform your operations, reduce expenses, and elevate customer
              satisfaction consistently. With enhanced order handling, real-time
              inventory tracking, transparent deliveries, and integrated
              financial tools, your business will reach new operational
              efficiency heights.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-poppins font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Start Your Transformation
                <ArrowRight
                  size={20}
                  className="ml-2 inline group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-500 text-green-600 dark:text-green-400 px-8 py-4 rounded-xl font-poppins font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
