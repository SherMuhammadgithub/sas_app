"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Truck,
  Shield,
  ClipboardCheck,
  Lock,
  Activity,
  CheckCircle,
  Users,
  Clock,
  FileText,
  Eye,
  AlertTriangle,
  DollarSign,
  BarChart3,
  Zap,
  Settings,
  CreditCard,
} from "lucide-react";
import Image from "next/image";

/**
 * Automated Gate-Pass Section Component
 * Features automated gate-pass creation and credit control management for warehouse operations
 */
export const AutomatedGatePassSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  // Gate-pass features
  const gatePassFeatures = [
    {
      title: "Automated Gate-Pass Creation",
      description:
        "Generate and manage automated gate-passes for all warehouse outflows with electronic control systems.",
      icon: ClipboardCheck,
    },
    {
      title: "Enhanced Security Control",
      description:
        "Strengthen warehouse security by electronically controlling and monitoring all vehicle movements.",
      icon: Shield,
    },
    {
      title: "Credit Limit Monitoring",
      description:
        "Monitor customer credit limits diligently and prevent overdue payments with intelligent risk management.",
      icon: CreditCard,
    },
    {
      title: "Operational Efficiency",
      description:
        "Minimize errors and streamline warehouse operations through automated workflow management.",
      icon: Zap,
    },
  ];

  // Decorative floating icons for warehouse operations
  const decorativeIcons = [
    { icon: Truck, delay: 0.2, x: 10, y: 15 },
    { icon: ClipboardCheck, delay: 0.4, x: 90, y: 20 },
    { icon: Shield, delay: 0.6, x: 15, y: 70 },
    { icon: Lock, delay: 0.8, x: 85, y: 75 },
    { icon: Activity, delay: 1.0, x: 5, y: 45 },
    { icon: CheckCircle, delay: 1.2, x: 95, y: 50 },
  ];

  // Gate-pass workflow steps
  const workflowSteps = [
    {
      step: "1",
      title: "Vehicle Arrival",
      description: "Truck arrives at warehouse gate",
      icon: Truck,
    },
    {
      step: "2",
      title: "Credit Verification",
      description: "System checks customer credit status",
      icon: CreditCard,
    },
    {
      step: "3",
      title: "Gate-Pass Generation",
      description: "Automated pass creation and approval",
      icon: ClipboardCheck,
    },
    {
      step: "4",
      title: "Secure Departure",
      description: "Controlled exit with tracking",
      icon: Shield,
    },
  ];

  // Performance metrics
  const metrics = [
    { label: "Processing Time", value: "< 2min", icon: Clock },
    { label: "Security Level", value: "99.9%", icon: Shield },
    { label: "Daily Gate-Passes", value: "500+", icon: FileText },
    { label: "Error Reduction", value: "95%", icon: CheckCircle },
  ];

  return (
    <section
      id="automated-gate-pass"
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
              Gate-Pass & Credit Control
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 dark:text-white leading-tight"
            >
              Automated Gate-Pass and
              <span className="block text-green-600 dark:text-green-400">
                Credit Control Management
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter">
                Our solution includes automated gate-pass creation and
                management, enhancing operational efficiency by electronically
                controlling all warehouse outflows. This automation minimizes
                errors and strengthens security.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter">
                Take control of your credit management with tools that monitor
                customer credit limits diligently. Protect your cash flow by
                preventing overdue payments and managing credit risks more
                effectively.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              {gatePassFeatures.map((feature, index) => {
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

            {/* Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-2 gap-4"
            >
              {metrics.slice(0, 2).map((metric, index) => {
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
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <IconComponent
                        size={20}
                        className="text-green-600 dark:text-green-400"
                      />
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400 font-playfair">
                        {metric.value}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-inter">
                      {metric.label}
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
                Automate Gate Control
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Warehouse Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Warehouse Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gatePass.png"
                  alt="Warehouse with delivery truck"
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
                    <motion.div
                      animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Truck size={32} className="text-white" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                      Smart Gate Control
                    </h3>
                    <p className="text-green-100 font-inter text-sm md:text-base mb-6">
                      Automated gate-pass creation with integrated credit
                      verification and security monitoring
                    </p>

                    {/* Status Indicators */}
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="bg-white/20 backdrop-blur-sm rounded-lg p-3"
                      >
                        <Shield size={20} className="text-white mb-2 mx-auto" />
                        <div className="text-sm font-poppins font-semibold">
                          Secure Access
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: 20 }
                        }
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="bg-white/20 backdrop-blur-sm rounded-lg p-3"
                      >
                        <ClipboardCheck
                          size={20}
                          className="text-white mb-2 mx-auto"
                        />
                        <div className="text-sm font-poppins font-semibold">
                          Auto Gate-Pass
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Workflow Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 space-y-4"
            >
              <h4 className="font-poppins font-semibold text-gray-900 dark:text-white text-center mb-4">
                Automated Workflow
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {workflowSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 80,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -4,
                        transition: { duration: 0.3 },
                      }}
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group text-center"
                    >
                      <div className="flex items-center justify-center mb-2">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold font-poppins mr-2">
                          {step.step}
                        </div>
                        <motion.div
                          className="group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent
                            size={20}
                            className="text-green-600 dark:text-green-400"
                          />
                        </motion.div>
                      </div>
                      <h5 className="font-poppins font-semibold text-gray-900 dark:text-white mb-1 text-xs">
                        {step.title}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300 text-xs font-inter leading-tight">
                        {step.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Additional Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              {metrics.slice(2).map((metric, index) => {
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
        </div>
      </div>
    </section>
  );
};
