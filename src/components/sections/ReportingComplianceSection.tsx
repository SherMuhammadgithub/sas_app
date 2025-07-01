"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  BarChart3,
  TrendingUp,
  FileText,
  Shield,
  Clock,
  CheckCircle,
  PieChart,
  Activity,
  AlertTriangle,
  Download,
  Eye,
  Settings,
  Target,
  DollarSign,
  Users,
  Zap,
} from "lucide-react";

/**
 * Reporting and Compliance Section Component
 * Features powerful analytics, reporting tools, and EFRIS compliance integration
 */
export const ReportingComplianceSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  // Reporting features
  const reportingFeatures = [
    {
      title: "Comprehensive Analytics",
      description:
        "Make informed decisions with comprehensive reports covering stock positions, vehicle deliveries, and requisition management.",
      icon: BarChart3,
    },
    {
      title: "EFRIS Integration",
      description:
        "Stay fully compliant with government regulations through seamless integration with Uganda Revenue Authority's EFRIS system.",
      icon: Shield,
    },
    {
      title: "Automated Reporting",
      description:
        "Automate reporting and invoicing processes to save time and avoid penalties with scheduled report generation.",
      icon: Clock,
    },
    {
      title: "Actionable Insights",
      description:
        "Our analytics tools provide you with actionable insights to improve operational performance continuously.",
      icon: TrendingUp,
    },
  ];

  // Dashboard metrics (based on the image)
  const dashboardMetrics = [
    {
      label: "Total Revenue",
      value: "$71k",
      icon: DollarSign,
      color: "text-green-500",
    },
    {
      label: "Active Deals",
      value: "3,567",
      icon: Target,
      color: "text-emerald-500",
    },
    {
      label: "Avg Deal Value",
      value: "$6,332",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      label: "Close Rate",
      value: "25%",
      icon: PieChart,
      color: "text-emerald-600",
    },
    { label: "Cycle Length", value: "32d", icon: Clock, color: "text-green-500" },
  ];

  // Chart data simulation
  const chartData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 78 },
    { month: "Mar", value: 90 },
    { month: "Apr", value: 81 },
    { month: "May", value: 95 },
    { month: "Jun", value: 88 },
  ];

  // Compliance features
  const complianceFeatures = [
    { title: "EFRIS Ready", status: "Active", icon: CheckCircle },
    { title: "Tax Compliance", status: "Verified", icon: Shield },
    { title: "Data Security", status: "Encrypted", icon: Zap },
    { title: "Audit Trail", status: "Complete", icon: FileText },
  ];

  // Decorative floating icons
  const decorativeIcons = [
    { icon: BarChart3, delay: 0.2, x: 10, y: 15 },
    { icon: TrendingUp, delay: 0.4, x: 90, y: 20 },
    { icon: PieChart, delay: 0.6, x: 15, y: 70 },
    { icon: Activity, delay: 0.8, x: 85, y: 75 },
    { icon: FileText, delay: 1.0, x: 5, y: 45 },
    { icon: Shield, delay: 1.2, x: 95, y: 50 },
  ];

  return (
    <section
      id="reporting-compliance"
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="30" height="30" fill="rgb(34, 197, 94)" opacity="0.3"/>
              <rect x="30" y="30" width="30" height="30" fill="rgb(46, 213, 115)" opacity="0.4"/>
              <circle cx="45" cy="15" r="8" fill="rgb(16, 185, 129)" opacity="0.3"/>
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
              Reporting & Compliance
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 dark:text-white leading-tight"
            >
              Powerful Reporting and
              <span className="block text-green-600 dark:text-green-400">
                Compliance Tools
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter"
            >
              Make informed decisions with comprehensive reports covering stock
              positions, vehicle deliveries, and requisition management. Our
              analytics tools provide you with actionable insights to improve
              operational performance continuously.
            </motion.p>

            {/* Compliance Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-200/50 dark:border-green-700/50"
            >
              <p className="text-gray-700 dark:text-gray-300 font-inter">
                <span className="font-semibold text-green-600 dark:text-green-400">
                  Stay fully compliant
                </span>{" "}
                with government regulations through seamless integration with{" "}
                <span className="font-semibold">
                  Uganda Revenue Authority's EFRIS system
                </span>
                . Automate reporting and invoicing processes to save time and
                avoid penalties.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              {reportingFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
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
              transition={{ duration: 0.8, delay: 1.1 }}
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
                View Reports
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
                Export Data
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Dashboard Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative bg-gradient-to-br from-slate-800 to-slate-900 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 p-6"
            >
              {/* Dashboard Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center justify-between mb-6"
              >
                <div>
                  <h3 className="text-white font-playfair font-bold text-lg">
                    Pipeline Dashboard
                  </h3>
                  <p className="text-gray-400 text-sm font-inter">17:18</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </motion.div>

              {/* Key Metrics Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-2 gap-4 mb-6"
              >
                {dashboardMetrics.slice(0, 4).map((metric, index) => {
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
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      className="bg-slate-700/50 p-4 rounded-lg border border-slate-600/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <IconComponent size={16} className={metric.color} />
                        <motion.span
                          animate={
                            isInView ? { scale: [1, 1.1, 1] } : { scale: 1 }
                          }
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 2 + index * 0.5,
                          }}
                          className="text-2xl font-bold text-white font-playfair"
                        >
                          {metric.value}
                        </motion.span>
                      </div>
                      <p className="text-gray-400 text-xs font-inter">
                        {metric.label}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Chart Visualization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50"
              >
                <h4 className="text-white font-poppins font-semibold mb-3 text-sm">
                  Activities this week
                </h4>
                <div className="flex items-end justify-between h-24">
                  {chartData.map((data, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={
                        isInView
                          ? { height: `${(data.value / 100) * 100}%` }
                          : { height: 0 }
                      }
                      transition={{
                        duration: 0.8,
                        delay: 1.4 + index * 0.1,
                        ease: "easeOut",
                      }}
                      className="bg-gradient-to-t from-green-500 to-emerald-400 w-8 rounded-t"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {chartData.map((data, index) => (
                    <span
                      key={index}
                      className="text-gray-400 text-xs font-inter"
                    >
                      {data.month}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Performance Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.6 }}
                className="mt-4 bg-slate-700/30 p-4 rounded-lg border border-slate-600/50"
              >
                <h4 className="text-white font-poppins font-semibold mb-3 text-sm">
                  Performance this quarter
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Pipeline", value: "$250k" },
                    { label: "Deals Won", value: "47" },
                    { label: "Close Rate", value: "25%" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <motion.div
                        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 2 + index * 0.3,
                        }}
                        className="text-lg font-bold text-white font-playfair"
                      >
                        {item.value}
                      </motion.div>
                      <div className="text-xs text-gray-400 font-inter">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Compliance Status Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              {complianceFeatures.map((item, index) => {
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
                      delay: 2 + index * 0.1,
                      type: "spring",
                      stiffness: 80,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -8,
                      transition: { duration: 0.3 },
                    }}
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group"
                  >
                    <motion.div
                      className="mb-2 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent
                        size={20}
                        className="text-green-600 dark:text-green-400"
                      />
                    </motion.div>
                    <h4 className="font-poppins font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-green-600 dark:text-green-400 text-xs font-inter font-semibold">
                      {item.status}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Floating EFRIS Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 2.2 }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 rounded-full text-xs font-poppins font-bold shadow-xl"
            >
              <motion.span
                animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 3 }}
              >
                EFRIS Ready ✓
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
