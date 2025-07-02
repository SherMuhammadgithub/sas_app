"use client";

import { motion } from "framer-motion";

import {
  User,
  ShoppingCart,
  CreditCard,
  Bell,
  Shield,
  Smartphone,
  Activity,
  Lock,
  Eye,
  Calendar,
  BarChart3,
} from "lucide-react";

/**
 * Customer Portal Section Component
 * Features customer self-service capabilities and mobile app integration
 */
export const CustomerPortalSection = () => {
  // Decorative icons - hidden on small screens
  const decorativeIcons = [
    {
      Icon: User,
      position: "top-4 left-4 md:top-8 md:left-8",
      delay: 0.1,
    },
    {
      Icon: Smartphone,
      position: "top-4 right-4 md:top-8 md:right-8",
      delay: 0.2,
    },
    {
      Icon: Shield,
      position: "bottom-4 left-4 md:bottom-8 md:left-8",
      delay: 0.3,
    },
    {
      Icon: Activity,
      position: "bottom-4 right-4 md:bottom-8 md:right-8",
      delay: 0.4,
    },
  ];

  // Portal features
  const portalFeatures = [
    {
      title: "Self-Service Orders",
      description:
        "Place orders directly through our intuitive portal with real-time inventory",
      icon: ShoppingCart,
    },
    {
      title: "Account Management",
      description:
        "Manage account details, payment methods, and delivery preferences",
      icon: User,
    },
    {
      title: "Order Tracking",
      description:
        "Real-time visibility into order status and delivery tracking",
      icon: Activity,
    },
  ];

  // Mobile app features for showcase
  const mobileFeatures = [
    { icon: Bell, title: "Notifications", color: "text-blue-500" },
    { icon: Lock, title: "Secure Login", color: "text-green-500" },
    { icon: BarChart3, title: "Analytics", color: "text-purple-500" },
    { icon: Calendar, title: "Scheduling", color: "text-orange-500" },
  ];

  return (
    <section
      id="customer-portal"
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
              <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Customer Portal & Mobile App
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
            >
              Empower Your{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Customers
              </span>
            </motion.h2>

            {/* Description - Hidden on very small screens */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed hidden sm:block"
            >
              Provide your customers with a powerful portal and mobile app that
              puts control in their hands - from placing orders to tracking
              deliveries.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-2 sm:space-y-3 lg:space-y-4"
            >
              {portalFeatures.map((feature, index) => (
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
                Launch Portal
              </button>
              {/* Second button hidden on very small screens */}
              <button className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 text-xs sm:text-sm lg:text-base hidden sm:block">
                Download App
              </button>
            </motion.div>
          </motion.div>

          {/* Mobile App Mockup - Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative max-w-xs sm:max-w-sm mx-auto">
              {/* Phone Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative bg-gray-900 rounded-2xl sm:rounded-3xl p-1 sm:p-2 shadow-2xl"
              >
                {/* Screen */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-green-500 h-6 sm:h-8 flex items-center justify-between px-2 sm:px-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="w-4 h-2 border border-white rounded-sm">
                      <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-3 sm:p-6 space-y-3 sm:space-y-6 h-48 sm:h-96 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <h3 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white">
                          Welcome back!
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                          John Doe
                        </p>
                      </div>
                      <div className="w-6 h-6 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <User size={12} className="text-white sm:w-5 sm:h-5" />
                      </div>
                    </motion.div>

                    {/* Quick Actions Grid */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      className="grid grid-cols-2 gap-2 sm:gap-3"
                    >
                      {mobileFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 1.2 + index * 0.1,
                          }}
                          className="bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-md border border-gray-200/50 dark:border-gray-700/50"
                        >
                          <feature.icon
                            size={16}
                            className={`${feature.color} mb-1 sm:mb-2 sm:w-5 sm:h-5`}
                          />
                          <p className="text-xs font-medium text-gray-900 dark:text-white">
                            {feature.title}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Recent Activity - Hidden on very small screens */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="space-y-2 sm:space-y-3 hidden sm:block"
                    >
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Recent Orders
                      </h4>
                      {[
                        { id: "#247", status: "Delivered", color: "green" },
                        { id: "#248", status: "Transit", color: "blue" },
                      ].map((order, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 1.6 + index * 0.1,
                          }}
                          className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200/50 dark:border-gray-700/50"
                        >
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                order.color === "green"
                                  ? "bg-green-500"
                                  : "bg-blue-500"
                              }`}
                            ></div>
                            <span className="text-xs text-gray-900 dark:text-white">
                              {order.id}
                            </span>
                          </div>
                          <span
                            className={`text-xs font-medium ${
                              order.color === "green"
                                ? "text-green-600 dark:text-green-400"
                                : "text-blue-600 dark:text-blue-400"
                            }`}
                          >
                            {order.status}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Feature Cards - Hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-gray-600/50 hidden sm:block"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <div>
                    <p className="text-xs text-gray-400">Secure</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      100%
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg border border-gray-600/50 hidden md:block"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <div>
                    <p className="text-xs text-gray-400">Active</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      24/7
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
