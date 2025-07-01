"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  BarChart3,
  TrendingUp,
  FileText,
  Shield,
  Clock,
  Activity,
} from "lucide-react";

/**
 * Reporting and Compliance Section Component
 * Features powerful analytics, reporting tools, and EFRIS compliance integration
 */
export const ReportingComplianceSection = () => {
  const { ref } = useScrollAnimation(0.3);

  // Decorative icons - hidden on small screens
  const decorativeIcons = [
    {
      Icon: BarChart3,
      position: "top-4 left-4 md:top-8 md:left-8",
      delay: 0.1,
    },
    {
      Icon: FileText,
      position: "top-4 right-4 md:top-8 md:right-8",
      delay: 0.2,
    },
    {
      Icon: Shield,
      position: "bottom-4 left-4 md:bottom-8 md:left-8",
      delay: 0.3,
    },
    {
      Icon: TrendingUp,
      position: "bottom-4 right-4 md:bottom-8 md:right-8",
      delay: 0.4,
    },
  ];

  // Reporting features
  const reportingFeatures = [
    {
      title: "Comprehensive Analytics",
      description:
        "Make informed decisions with comprehensive reports covering stock positions and deliveries",
      icon: BarChart3,
    },
    {
      title: "EFRIS Integration",
      description:
        "Stay fully compliant with Uganda Revenue Authority's EFRIS system",
      icon: Shield,
    },
    {
      title: "Automated Reporting",
      description:
        "Automate reporting and invoicing processes to save time and avoid penalties",
      icon: Clock,
    },
  ];

  // Dashboard metrics for visualization
  const dashboardMetrics = [
    { label: "Total Revenue", value: "$71k", color: "text-green-400" },
    { label: "Active Deals", value: "3,567", color: "text-blue-400" },
    { label: "Close Rate", value: "25%", color: "text-purple-400" },
    { label: "Cycle Length", value: "32d", color: "text-orange-400" },
  ];

  // Chart bars data for simple visualization
  const chartBars = [65, 78, 90, 81, 95, 88];

  return (
    <section
      id="reporting-compliance"
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
              <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Reporting & Compliance
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
            >
              Powerful{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Analytics
              </span>{" "}
              & Reports
            </motion.h2>

            {/* Description - Hidden on very small screens */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed hidden sm:block"
            >
              Make informed decisions with comprehensive reports and stay fully
              compliant with{" "}
              <span className="text-green-400 font-semibold">
                EFRIS integration
              </span>
              .
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-2 sm:space-y-3 lg:space-y-4"
            >
              {reportingFeatures.map((feature, index) => (
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
                View Reports
              </button>
              {/* Second button hidden on very small screens */}
              <button className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 text-xs sm:text-sm lg:text-base hidden sm:block">
                Export Data
              </button>
            </motion.div>
          </motion.div>

          {/* Dashboard Mockup - Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            {/* Main Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative bg-slate-800/90 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700/50 p-3 sm:p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto"
            >
              {/* Dashboard Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center justify-between mb-3 sm:mb-6"
              >
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-lg">
                    Analytics Dashboard
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Live Data</p>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                </div>
              </motion.div>

              {/* Key Metrics Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-6"
              >
                {dashboardMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    className="bg-slate-700/50 p-2 sm:p-3 rounded-lg border border-slate-600/50"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 2 + index * 0.5,
                      }}
                      className={`text-sm sm:text-xl font-bold text-white mb-1 ${metric.color}`}
                    >
                      {metric.value}
                    </motion.div>
                    <p className="text-gray-400 text-xs">{metric.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Simple Chart Visualization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="bg-slate-700/30 p-2 sm:p-4 rounded-lg border border-slate-600/50"
              >
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">
                  Performance Trends
                </h4>
                <div className="flex items-end justify-between h-12 sm:h-20">
                  {chartBars.map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${(height / 100) * 100}%` }}
                      transition={{
                        duration: 0.8,
                        delay: 1.8 + index * 0.1,
                        ease: "easeOut",
                      }}
                      className="bg-gradient-to-t from-green-500 to-emerald-400 w-3 sm:w-6 rounded-t"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1 sm:mt-2">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map(
                    (month, index) => (
                      <span key={index} className="text-gray-400 text-xs">
                        {month}
                      </span>
                    )
                  )}
                </div>
              </motion.div>

              {/* EFRIS Compliance Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="mt-3 sm:mt-4 bg-green-500/20 border border-green-500/30 rounded-lg p-2 sm:p-3 text-center"
              >
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mx-auto mb-1" />
                <p className="text-green-400 text-xs sm:text-sm font-semibold">
                  EFRIS Compliant ✓
                </p>
                <p className="text-gray-400 text-xs hidden sm:block">
                  Fully integrated with URA
                </p>
              </motion.div>
            </motion.div>

            {/* Floating Stats Cards - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="mt-4  grid-cols-2 gap-2 sm:gap-3 hidden sm:grid"
            >
              <div className="bg-slate-800/50 border border-gray-700/50 rounded-lg p-2 sm:p-3 text-center">
                <TrendingUp className="w-4 h-4 text-green-400 mx-auto mb-1" />
                <p className="text-xs sm:text-sm font-bold text-white">98.7%</p>
                <p className="text-xs text-gray-400">Accuracy</p>
              </div>
              <div className="bg-slate-800/50 border border-gray-700/50 rounded-lg p-2 sm:p-3 text-center">
                <Activity className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                <p className="text-xs sm:text-sm font-bold text-white">
                  Real-time
                </p>
                <p className="text-xs text-gray-400">Updates</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
