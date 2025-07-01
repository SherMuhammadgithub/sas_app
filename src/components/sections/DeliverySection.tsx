"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  MapPin,
  Truck,
  Clock,
  Navigation,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

/**
 * Delivery and Customer Interaction Section Component
 * Features interactive map SVG animation with delivery tracking and customer interaction
 */
export const DeliverySection = () => {
  const { ref } = useScrollAnimation(0.3);

  // Decorative icons - hidden on small screens
  const decorativeIcons = [
    {
      Icon: MapPin,
      position: "top-4 left-4 md:top-8 md:left-8",
      delay: 0.1,
    },
    {
      Icon: Truck,
      position: "top-4 right-4 md:top-8 md:right-8",
      delay: 0.2,
    },
    {
      Icon: Clock,
      position: "bottom-4 left-4 md:bottom-8 md:left-8",
      delay: 0.3,
    },
    {
      Icon: CheckCircle,
      position: "bottom-4 right-4 md:bottom-8 md:right-8",
      delay: 0.4,
    },
  ];

  // Delivery points for animation - simplified for mobile
  const deliveryPoints = [
    { id: 1, x: 120, y: 80, status: "delivered", delay: 0.5 },
    { id: 2, x: 200, y: 150, status: "in-transit", delay: 1.0 },
    { id: 3, x: 280, y: 200, status: "delivered", delay: 1.5 },
  ];

  // Moving delivery vehicles - simplified
  const vehicles = [
    {
      id: 1,
      path: "M120,80 Q200,120 280,200",
      delay: 1,
      duration: 8,
    },
  ];

  // Features list
  const features = [
    {
      title: "Real-time Tracking",
      description:
        "Live GPS tracking with instant updates for customers and drivers",
      icon: Navigation,
    },
    {
      title: "Smart Routing",
      description: "AI-powered route optimization to reduce delivery time",
      icon: MapPin,
    },
    {
      title: "Customer Communication",
      description: "Automated notifications and two-way communication",
      icon: MessageCircle,
    },
  ];

  return (
    <section
      id="delivery"
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
              <Truck className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Delivery & Tracking
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
            >
              Track Every{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Delivery
              </span>
            </motion.h2>

            {/* Description - Hidden on very small screens */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed hidden sm:block"
            >
              Track deliveries in real-time with our driver app, ensuring every
              shipment is on time with instant updates.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-2 sm:space-y-3 lg:space-y-4"
            >
              {features.map((feature, index) => (
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
                Start Tracking
              </button>
              {/* Second button hidden on very small screens */}
              <button className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 text-xs sm:text-sm lg:text-base hidden sm:block">
                View Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Interactive Map - Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            {/* Map Container - Responsive sizing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative bg-slate-800/50 rounded-lg sm:rounded-xl border border-gray-700/50 p-2 sm:p-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto"
            >
              {/* Interactive Map SVG - Responsive */}
              <motion.svg
                width="100%"
                height="200"
                viewBox="0 0 400 200"
                className="sm:h-64 md:h-80"
              >
                <defs>
                  <linearGradient
                    id="deliveryGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(34, 197, 94)"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(22, 163, 74)"
                      stopOpacity="0.6"
                    />
                  </linearGradient>
                  <linearGradient
                    id="transitGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(59, 130, 246)"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(37, 99, 235)"
                      stopOpacity="0.6"
                    />
                  </linearGradient>
                </defs>

                {/* City Roads - Simplified */}
                <motion.g
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 0.4, pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                >
                  <path
                    d="M50,50 Q150,40 250,50 T350,60"
                    fill="none"
                    stroke="rgb(75, 85, 99)"
                    strokeWidth="2"
                    strokeDasharray="3,3"
                  />
                  <path
                    d="M50,100 L350,100"
                    fill="none"
                    stroke="rgb(75, 85, 99)"
                    strokeWidth="3"
                  />
                  <path
                    d="M50,150 Q150,140 250,150 T350,160"
                    fill="none"
                    stroke="rgb(75, 85, 99)"
                    strokeWidth="2"
                    strokeDasharray="3,3"
                  />
                </motion.g>

                {/* Delivery Route */}
                {vehicles.map((vehicle) => (
                  <motion.path
                    key={vehicle.id}
                    d={vehicle.path}
                    fill="none"
                    stroke="url(#deliveryGradient)"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: vehicle.delay }}
                  />
                ))}

                {/* Delivery Points */}
                {deliveryPoints.map((point) => (
                  <motion.g key={point.id}>
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="8"
                      fill={
                        point.status === "delivered"
                          ? "url(#deliveryGradient)"
                          : "url(#transitGradient)"
                      }
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: point.delay }}
                    />

                    {/* Status Icon */}
                    <motion.g
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: point.delay + 0.2 }}
                    >
                      {point.status === "delivered" && (
                        <path
                          d={`M${point.x - 3},${point.y} L${point.x - 1},${
                            point.y + 2
                          } L${point.x + 3},${point.y - 2}`}
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      )}
                      {point.status === "in-transit" && (
                        <circle cx={point.x} cy={point.y} r="2" fill="white" />
                      )}
                    </motion.g>

                    {/* Pulsing for active deliveries */}
                    {point.status === "in-transit" && (
                      <motion.circle
                        cx={point.x}
                        cy={point.y}
                        r="8"
                        fill="none"
                        stroke="rgb(59, 130, 246)"
                        strokeWidth="2"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: point.delay + 1,
                        }}
                      />
                    )}
                  </motion.g>
                ))}

                {/* Moving Delivery Truck */}
                <motion.g>
                  <motion.rect
                    width="12"
                    height="8"
                    fill="url(#deliveryGradient)"
                    rx="2"
                    initial={{ x: 120, y: 76 }}
                    animate={{
                      x: [120, 200, 280, 120],
                      y: [76, 146, 196, 76],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </motion.g>
              </motion.svg>

              {/* Live Stats - Hidden on very small screens */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="mt-2 sm:mt-4 grid grid-cols-3 gap-2 text-center sm:grid"
              >
                <div className="bg-slate-800/70 rounded-lg p-2">
                  <motion.p
                    className="text-sm sm:text-lg font-bold text-green-400"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
                  >
                    24
                  </motion.p>
                  <p className="text-xs text-gray-400">Active</p>
                </div>
                <div className="bg-slate-800/70 rounded-lg p-2">
                  <motion.p
                    className="text-sm sm:text-lg font-bold text-blue-400"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 3 }}
                  >
                    12min
                  </motion.p>
                  <p className="text-xs text-gray-400">Avg Time</p>
                </div>
                <div className="bg-slate-800/70 rounded-lg p-2">
                  <motion.p
                    className="text-sm sm:text-lg font-bold text-green-400"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 3.5 }}
                  >
                    98%
                  </motion.p>
                  <p className="text-xs text-gray-400">On Time</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Feature Cards - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-4 grid grid-cols-2 gap-2 sm:gap-3 sm:grid"
            >
              <div className="bg-slate-800/50 border border-gray-700/50 rounded-lg p-2 sm:p-3 text-center">
                <Navigation className="w-4 h-4 text-green-400 mx-auto mb-1" />
                <p className="text-xs sm:text-sm font-bold text-white">
                  GPS Live
                </p>
                <p className="text-xs text-gray-400">Tracking</p>
              </div>
              <div className="bg-slate-800/50 border border-gray-700/50 rounded-lg p-2 sm:p-3 text-center">
                <CheckCircle className="w-4 h-4 text-green-400 mx-auto mb-1" />
                <p className="text-xs sm:text-sm font-bold text-white">98.7%</p>
                <p className="text-xs text-gray-400">Success</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
