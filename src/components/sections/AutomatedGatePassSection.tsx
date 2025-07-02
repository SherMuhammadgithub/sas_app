// "use client";

// import { motion } from "framer-motion";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import {
//   Truck,
//   Shield,
//   ClipboardCheck,
//   CheckCircle,
//   Clock,
//   CreditCard,
// } from "lucide-react";

// /**
//  * Automated Gate-Pass Section Component
//  * Features automated gate-pass creation and credit control management for warehouse operations
//  */
// export const AutomatedGatePassSection = () => {
//   const { ref } = useScrollAnimation(0.3);

//   // Decorative icons - hidden on small screens
//   const decorativeIcons = [
//     {
//       Icon: Truck,
//       position: "top-4 left-4 md:top-8 md:left-8",
//       delay: 0.1,
//     },
//     {
//       Icon: ClipboardCheck,
//       position: "top-4 right-4 md:top-8 md:right-8",
//       delay: 0.2,
//     },
//     {
//       Icon: Shield,
//       position: "bottom-4 left-4 md:bottom-8 md:left-8",
//       delay: 0.3,
//     },
//     {
//       Icon: CreditCard,
//       position: "bottom-4 right-4 md:bottom-8 md:right-8",
//       delay: 0.4,
//     },
//   ];

//   // Gate-pass features
//   const gatePassFeatures = [
//     {
//       title: "Automated Gate-Pass Creation",
//       description:
//         "Generate and manage automated gate-passes for all warehouse outflows with electronic control",
//       icon: ClipboardCheck,
//     },
//     {
//       title: "Enhanced Security Control",
//       description:
//         "Strengthen warehouse security by electronically controlling and monitoring all vehicle movements",
//       icon: Shield,
//     },
//     {
//       title: "Credit Limit Monitoring",
//       description:
//         "Monitor customer credit limits and prevent overdue payments with intelligent risk management",
//       icon: CreditCard,
//     },
//   ];

//   // Workflow steps for visualization
//   const workflowSteps = [
//     { step: "1", title: "Vehicle Arrival", icon: Truck, color: "bg-blue-500" },
//     {
//       step: "2",
//       title: "Credit Check",
//       icon: CreditCard,
//       color: "bg-yellow-500",
//     },
//     {
//       step: "3",
//       title: "Gate-Pass Gen",
//       icon: ClipboardCheck,
//       color: "bg-green-500",
//     },
//     { step: "4", title: "Secure Exit", icon: Shield, color: "bg-purple-500" },
//   ];

//   return (
//     <section
//       id="automated-gate-pass"
//       ref={ref}
//       className="w-full h-full flex items-center justify-center relative px-2 sm:px-4"
//     >
//       {/* Background Icons - Hidden on mobile */}
//       <div className="absolute inset-0 pointer-events-none hidden md:block">
//         {decorativeIcons.map(({ Icon, position, delay }, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 0.2, scale: 1 }}
//             transition={{ duration: 0.8, delay }}
//             className={`absolute ${position} text-green-400`}
//           >
//             <Icon className="w-6 h-6 md:w-8 md:h-8" />
//           </motion.div>
//         ))}
//       </div>

//       {/* Main Content Container */}
//       <div className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center min-h-[85vh] sm:min-h-[80vh]">
//           {/* Content Side - Left */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-1"
//           >
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-green-500/20 text-green-300 text-xs sm:text-sm font-medium border border-green-500/30"
//             >
//               <ClipboardCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
//               Gate-Pass & Credit Control
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
//             >
//               Automated{" "}
//               <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//                 Gate-Pass
//               </span>{" "}
//               Control
//             </motion.h2>

//             {/* Description - Hidden on very small screens */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed hidden sm:block"
//             >
//               Enhance warehouse security and efficiency with automated gate-pass
//               creation and intelligent credit monitoring for all outflows.
//             </motion.p>

//             {/* Features List */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="space-y-2 sm:space-y-3 lg:space-y-4"
//             >
//               {gatePassFeatures.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
//                   className="flex items-start space-x-2 sm:space-x-3"
//                 >
//                   <div className="flex-shrink-0 p-1.5 sm:p-2 bg-green-500/20 rounded-lg border border-green-500/30">
//                     <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-white text-xs sm:text-sm lg:text-base">
//                       {feature.title}
//                     </h3>
//                     {/* Description hidden on small screens */}
//                     <p className="text-gray-300 text-xs lg:text-sm hidden sm:block">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1.0 }}
//               className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4"
//             >
//               <button className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-xs sm:text-sm lg:text-base shadow-lg shadow-green-500/25">
//                 Automate Gate Control
//               </button>
//               {/* Second button hidden on very small screens */}
//               <button className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 text-xs sm:text-sm lg:text-base hidden sm:block">
//                 View Demo
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Workflow Visualization - Right */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="relative order-1 lg:order-2"
//           >
//             {/* Main Control Panel */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="relative bg-slate-800/90 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700/50 p-3 sm:p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto"
//             >
//               {/* Control Panel Header */}
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.8 }}
//                 className="flex items-center justify-between mb-3 sm:mb-6"
//               >
//                 <div>
//                   <h3 className="text-white font-bold text-sm sm:text-lg">
//                     Gate Control System
//                   </h3>
//                   <p className="text-gray-400 text-xs sm:text-sm">
//                     Live Status
//                   </p>
//                 </div>
//                 <div className="flex items-center space-x-1 sm:space-x-2">
//                   <motion.div
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
//                   ></motion.div>
//                   <span className="text-green-400 text-xs sm:text-sm font-medium">
//                     Active
//                   </span>
//                 </div>
//               </motion.div>

//               {/* Workflow Steps */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 1.0 }}
//                 className="space-y-2 sm:space-y-3"
//               >
//                 <h4 className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">
//                   Processing Workflow
//                 </h4>
//                 {workflowSteps.map((step, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
//                     className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-slate-700/50 rounded-lg border border-slate-600/50"
//                   >
//                     <motion.div
//                       animate={{
//                         scale: index === 1 ? [1, 1.1, 1] : 1,
//                         opacity: index === 1 ? [0.7, 1, 0.7] : 1,
//                       }}
//                       transition={{
//                         duration: 1.5,
//                         repeat: index === 1 ? Infinity : 0,
//                         delay: 2 + index * 0.5,
//                       }}
//                       className={`w-6 h-6 sm:w-8 sm:h-8 ${step.color} rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold`}
//                     >
//                       {step.step}
//                     </motion.div>
//                     <div className="flex items-center space-x-2 flex-1">
//                       <step.icon className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
//                       <span className="text-white text-xs sm:text-sm font-medium">
//                         {step.title}
//                       </span>
//                     </div>
//                     {index === 1 && (
//                       <motion.div
//                         animate={{ opacity: [0, 1, 0] }}
//                         transition={{ duration: 1, repeat: Infinity, delay: 2 }}
//                         className="text-yellow-400 text-xs sm:text-sm font-medium"
//                       >
//                         Processing...
//                       </motion.div>
//                     )}
//                     {index === 2 && (
//                       <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
//                     )}
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* Security Status */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 2.0 }}
//                 className="mt-3 sm:mt-4 bg-green-500/20 border border-green-500/30 rounded-lg p-2 sm:p-3 text-center"
//               >
//                 <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mx-auto mb-1" />
//                 <p className="text-green-400 text-xs sm:text-sm font-semibold">
//                   Security Level: High ✓
//                 </p>
//                 <p className="text-gray-400 text-xs hidden sm:block">
//                   All systems operational
//                 </p>
//               </motion.div>
//             </motion.div>

//             {/* Performance Metrics - Hidden on mobile */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 2.2 }}
//               className="mt-4  grid-cols-2 gap-2 sm:gap-3 hidden sm:grid"
//             >
//               <div className="bg-slate-800/50 border border-gray-700/50 rounded-lg p-2 sm:p-3 text-center">
//                 <Clock className="w-4 h-4 text-blue-400 mx-auto mb-1" />
//                 <p className="text-xs sm:text-sm font-bold text-white">
//                   &lt; 2min
//                 </p>
//                 <p className="text-xs text-gray-400">Process Time</p>
//               </div>
//               <div className="bg-slate-800/50 border border-gray-700/50 rounded-lg p-2 sm:p-3 text-center">
//                 <CheckCircle className="w-4 h-4 text-green-400 mx-auto mb-1" />
//                 <p className="text-xs sm:text-sm font-bold text-white">99.9%</p>
//                 <p className="text-xs text-gray-400">Accuracy</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
