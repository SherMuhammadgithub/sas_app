"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  MapPin,
  Truck,
  Clock,
  Users,
  Navigation,
  Package,
  Phone,
  MessageCircle,
  Star,
  CheckCircle,
  Zap,
  Globe,
} from "lucide-react";

/**
 * Delivery and Customer Interaction Section Component
 * Features interactive map SVG animation with delivery tracking and customer interaction
 */
export const DeliverySection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  // Delivery points for animation
  const deliveryPoints = [
    { id: 1, x: 120, y: 80, status: "delivered", delay: 0.5 },
    { id: 2, x: 200, y: 150, status: "in-transit", delay: 1.0 },
    { id: 3, x: 350, y: 100, status: "pending", delay: 1.5 },
    { id: 4, x: 280, y: 200, status: "delivered", delay: 2.0 },
    { id: 5, x: 150, y: 250, status: "in-transit", delay: 2.5 },
    { id: 6, x: 400, y: 180, status: "pending", delay: 3.0 },
  ];

  // Moving delivery vehicles
  const vehicles = [
    {
      id: 1,
      path: "M120,80 Q200,120 280,200",
      delay: 1,
      duration: 8,
    },
    {
      id: 2,
      path: "M350,100 Q300,150 150,250",
      delay: 2,
      duration: 10,
    },
  ];

  // Customer interaction features
  const features = [
    {
      title: "Real-time Tracking",
      description:
        "Live GPS tracking with instant updates for customers and drivers.",
      icon: Navigation,
    },
    {
      title: "Smart Routing",
      description:
        "AI-powered route optimization to reduce delivery time and costs.",
      icon: MapPin,
    },
    {
      title: "Customer Communication",
      description:
        "Automated notifications and two-way communication channels.",
      icon: MessageCircle,
    },
    {
      title: "Delivery Analytics",
      description:
        "Comprehensive insights into delivery performance and customer satisfaction.",
      icon: Star,
    },
  ];

  // Decorative floating icons
  const decorativeIcons = [
    { icon: Package, delay: 0.2, x: 15, y: 20 },
    { icon: Truck, delay: 0.4, x: 85, y: 15 },
    { icon: Clock, delay: 0.6, x: 10, y: 70 },
    { icon: Users, delay: 0.8, x: 90, y: 75 },
    { icon: Phone, delay: 1.0, x: 5, y: 45 },
    { icon: Globe, delay: 1.2, x: 95, y: 50 },
  ];

  return (
    <section
      id="delivery"
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-white to-emerald-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-green-900/20 relative overflow-hidden"
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
                          ? (window.innerWidth * item.x) / 100 + 20
                          : item.x + 20,
                      ],
                      y: [
                        typeof window !== "undefined"
                          ? window.innerHeight / 2
                          : 0,
                        typeof window !== "undefined"
                          ? (window.innerHeight * item.y) / 100
                          : item.y,
                        typeof window !== "undefined"
                          ? (window.innerHeight * item.y) / 100 + 30
                          : item.y + 30,
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
              Delivery & Customer Experience
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 dark:text-white leading-tight"
            >
              Enhancing Delivery and
              <span className="block text-green-600 dark:text-green-400">
                Customer Interaction
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter"
            >
              Track deliveries in real-time with our driver app, ensuring that
              every shipment is on time and providing instant updates for you
              and your customers.
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
                Track Deliveries
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Map Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Interactive Map Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative bg-gradient-to-br from-white to-green-50/50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
            >
              {/* Map Background Grid */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 500 400">
                  <defs>
                    <pattern
                      id="mapGrid"
                      width="25"
                      height="25"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 25 0 L 0 0 0 25"
                        fill="none"
                        stroke="rgb(46, 213, 115)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                </svg>
              </div>

              {/* Interactive Map SVG */}
              <motion.svg
                width="100%"
                height="400"
                viewBox="0 0 500 350"
                className="relative z-10"
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
                      stopColor="rgb(46, 213, 115)"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(34, 197, 94)"
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
                  <linearGradient
                    id="pendingGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(245, 158, 11)"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(217, 119, 6)"
                      stopOpacity="0.6"
                    />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* City Map Outline */}
                <motion.g
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={
                    isInView
                      ? { opacity: 0.3, pathLength: 1 }
                      : { opacity: 0, pathLength: 0 }
                  }
                  transition={{ duration: 2, delay: 0.5 }}
                >
                  {/* Roads */}
                  <path
                    d="M50,100 Q150,80 250,100 T450,120"
                    fill="none"
                    stroke="rgb(156, 163, 175)"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M100,50 Q150,150 200,250 T300,300"
                    fill="none"
                    stroke="rgb(156, 163, 175)"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M250,50 L250,300"
                    fill="none"
                    stroke="rgb(156, 163, 175)"
                    strokeWidth="4"
                  />
                  <path
                    d="M50,200 L450,200"
                    fill="none"
                    stroke="rgb(156, 163, 175)"
                    strokeWidth="4"
                  />
                </motion.g>

                {/* Delivery Route Lines */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  {vehicles.map((vehicle) => (
                    <motion.path
                      key={vehicle.id}
                      d={vehicle.path}
                      fill="none"
                      stroke="url(#deliveryGradient)"
                      strokeWidth="3"
                      strokeDasharray="10,5"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 2, delay: vehicle.delay }}
                    />
                  ))}
                </motion.g>

                {/* Delivery Points */}
                <motion.g>
                  {deliveryPoints.map((point) => (
                    <motion.g key={point.id}>
                      {/* Point Background Circle */}
                      <motion.circle
                        cx={point.x}
                        cy={point.y}
                        r="12"
                        fill={
                          point.status === "delivered"
                            ? "url(#deliveryGradient)"
                            : point.status === "in-transit"
                            ? "url(#transitGradient)"
                            : "url(#pendingGradient)"
                        }
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{ duration: 0.6, delay: point.delay }}
                        filter="url(#glow)"
                      />

                      {/* Status Icon */}
                      <motion.g
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{ duration: 0.6, delay: point.delay + 0.2 }}
                      >
                        {point.status === "delivered" && (
                          <path
                            d={`M${point.x - 4},${point.y} L${point.x - 1},${
                              point.y + 3
                            } L${point.x + 4},${point.y - 3}`}
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        )}
                        {point.status === "in-transit" && (
                          <circle
                            cx={point.x}
                            cy={point.y}
                            r="3"
                            fill="white"
                          />
                        )}
                        {point.status === "pending" && (
                          <rect
                            x={point.x - 3}
                            y={point.y - 3}
                            width="6"
                            height="6"
                            fill="white"
                            rx="1"
                          />
                        )}
                      </motion.g>

                      {/* Pulsing Animation for Active Deliveries */}
                      {point.status === "in-transit" && (
                        <motion.circle
                          cx={point.x}
                          cy={point.y}
                          r="12"
                          fill="none"
                          stroke="rgb(59, 130, 246)"
                          strokeWidth="2"
                          initial={{ scale: 1, opacity: 0.8 }}
                          animate={isInView ? { scale: 2, opacity: 0 } : {}}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: point.delay + 1,
                          }}
                        />
                      )}
                    </motion.g>
                  ))}
                </motion.g>

                {/* Moving Delivery Trucks */}
                <motion.g>
                  {vehicles.map((vehicle, index) => {
                    // Calculate positions along the path for animation
                    const startX = index === 0 ? 120 : 350;
                    const startY = index === 0 ? 80 : 100;
                    const endX = index === 0 ? 280 : 150;
                    const endY = index === 0 ? 200 : 250;

                    return (
                      <motion.g key={`truck-${vehicle.id}`}>
                        {/* Truck Body */}
                        <motion.rect
                          width="16"
                          height="10"
                          fill="url(#deliveryGradient)"
                          rx="2"
                          filter="url(#glow)"
                          initial={{ x: startX, y: startY }}
                          animate={
                            isInView
                              ? {
                                  x: [startX, endX, startX],
                                  y: [startY, endY, startY],
                                }
                              : { x: startX, y: startY }
                          }
                          transition={{
                            duration: vehicle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: vehicle.delay,
                          }}
                        />

                        {/* Truck Icon/Details */}
                        <motion.g
                          initial={{ x: startX, y: startY }}
                          animate={
                            isInView
                              ? {
                                  x: [startX, endX, startX],
                                  y: [startY, endY, startY],
                                }
                              : { x: startX, y: startY }
                          }
                          transition={{
                            duration: vehicle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: vehicle.delay,
                          }}
                        >
                          {/* Truck Windows */}
                          <rect
                            x="2"
                            y="2"
                            width="6"
                            height="4"
                            fill="white"
                            rx="1"
                          />
                          <rect
                            x="10"
                            y="4"
                            width="4"
                            height="2"
                            fill="white"
                            rx="1"
                          />

                          {/* Truck Wheels */}
                          <circle
                            cx="4"
                            cy="11"
                            r="1.5"
                            fill="rgb(75, 85, 99)"
                          />
                          <circle
                            cx="12"
                            cy="11"
                            r="1.5"
                            fill="rgb(75, 85, 99)"
                          />
                        </motion.g>

                        {/* Truck Movement Trail */}
                        <motion.circle
                          r="2"
                          fill="rgb(46, 213, 115)"
                          opacity="0.3"
                          initial={{ x: startX + 8, y: startY + 5 }}
                          animate={
                            isInView
                              ? {
                                  x: [startX + 8, endX + 8, startX + 8],
                                  y: [startY + 5, endY + 5, startY + 5],
                                  scale: [1, 0.5, 1],
                                }
                              : { x: startX + 8, y: startY + 5 }
                          }
                          transition={{
                            duration: vehicle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: vehicle.delay + 0.2,
                          }}
                        />
                      </motion.g>
                    );
                  })}
                </motion.g>

                {/* Customer Interaction Indicators */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 3 }}
                >
                  {/* Message Bubbles */}
                  <motion.circle
                    cx="100"
                    cy="120"
                    r="6"
                    fill="rgb(34, 197, 94)"
                    animate={isInView ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: 3.5 }}
                  />
                  <motion.circle
                    cx="380"
                    cy="160"
                    r="6"
                    fill="rgb(59, 130, 246)"
                    animate={isInView ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: 4 }}
                  />
                </motion.g>
              </motion.svg>

              {/* Live Stats Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 2 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <motion.p
                        className="text-xl font-bold text-green-600 dark:text-green-400 font-playfair"
                        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 2.5,
                        }}
                      >
                        247
                      </motion.p>
                      <p className="text-xs text-gray-600 dark:text-gray-300 font-inter">
                        Active Deliveries
                      </p>
                    </div>
                    <div>
                      <motion.p
                        className="text-xl font-bold text-blue-600 dark:text-blue-400 font-playfair"
                        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity, delay: 3 }}
                      >
                        12min
                      </motion.p>
                      <p className="text-xs text-gray-600 dark:text-gray-300 font-inter">
                        Avg Delivery
                      </p>
                    </div>
                    <div>
                      <motion.p
                        className="text-xl font-bold text-amber-600 dark:text-amber-400 font-playfair"
                        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 3.5,
                        }}
                      >
                        4.9
                      </motion.p>
                      <p className="text-xs text-gray-600 dark:text-gray-300 font-inter">
                        Customer Rating
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Feature Cards Below Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              {[
                { icon: Truck, title: "Live Tracking", value: "GPS Enabled" },
                { icon: CheckCircle, title: "On-Time Rate", value: "98.7%" },
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
