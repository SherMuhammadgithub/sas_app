// "use client";

// import { motion } from "framer-motion";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import {
//   DollarSign,
//   Users,
//   CheckCircle,
//   TrendingUp,
//   Shield,
//   Zap,
//   BarChart3,
//   Star,
//   ArrowRight,
// } from "lucide-react";

// /**
//  * Flexible Pricing Section Component
//  * Features transparent pricing with unlimited users and comprehensive value proposition
//  */
// export const FlexiblePricingSection = () => {
//   const { ref } = useScrollAnimation(0.3);

//   // Decorative icons - hidden on small screens
//   const decorativeIcons = [
//     {
//       Icon: DollarSign,
//       position: "top-4 left-4 md:top-8 md:left-8",
//       delay: 0.1,
//     },
//     {
//       Icon: Users,
//       position: "top-4 right-4 md:top-8 md:right-8",
//       delay: 0.2,
//     },
//     {
//       Icon: CheckCircle,
//       position: "bottom-4 left-4 md:bottom-8 md:left-8",
//       delay: 0.3,
//     },
//     {
//       Icon: TrendingUp,
//       position: "bottom-4 right-4 md:bottom-8 md:right-8",
//       delay: 0.4,
//     },
//   ];

//   // Key pricing benefits
//   const pricingBenefits = [
//     {
//       title: "Unlimited Users",
//       description:
//         "Empower your entire team to collaborate seamlessly without extra fees or licensing limitations",
//       icon: Users,
//     },
//     {
//       title: "Transparent Pricing",
//       description:
//         "No hidden costs or surprise charges. One simple price covers everything you need",
//       icon: Shield,
//     },
//     {
//       title: "Comprehensive Tools",
//       description:
//         "Access all operational management features in one integrated platform",
//       icon: Zap,
//     },
//   ];

//   // Value propositions for pricing card
//   const valueProps = [
//     "Unlimited Users",
//     "All Features Included",
//     "24/7 Support",
//     "Regular Updates",
//     "Data Security",
//     "API Access",
//   ];

//   return (
//     <section
//       id="flexible-pricing"
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
//               <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
//               Flexible Pricing
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
//             >
//               Transparent{" "}
//               <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//                 Pricing
//               </span>{" "}
//               Model
//             </motion.h2>

//             {/* Description - Hidden on very small screens */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed hidden sm:block"
//             >
//               Experience the full power of our platform with transparent pricing
//               and unlimited users. No hidden costs or surprise charges.
//             </motion.p>

//             {/* Features List */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="space-y-2 sm:space-y-3 lg:space-y-4"
//             >
//               {pricingBenefits.map((benefit, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
//                   className="flex items-start space-x-2 sm:space-x-3"
//                 >
//                   <div className="flex-shrink-0 p-1.5 sm:p-2 bg-green-500/20 rounded-lg border border-green-500/30">
//                     <benefit.icon className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-white text-xs sm:text-sm lg:text-base">
//                       {benefit.title}
//                     </h3>
//                     {/* Description hidden on small screens */}
//                     <p className="text-gray-300 text-xs lg:text-sm hidden sm:block">
//                       {benefit.description}
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
//                 Get Started Today
//               </button>
//               {/* Second button hidden on very small screens */}
//               <button className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 text-xs sm:text-sm lg:text-base hidden sm:block">
//                 View Pricing Details
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Pricing Card - Right */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="relative order-1 lg:order-2"
//           >
//             {/* Main Pricing Card */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="relative bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-2xl text-white overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto"
//             >
//               {/* Background Pattern */}
//               <div className="absolute inset-0 opacity-10">
//                 <div
//                   className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNiIvPgo8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIwLjUiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjQiLz4KPGNpcmNsZSBjeD0iMzAiIGN5PSIxNSIgcj0iMC44IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')]"
//                   style={{ backgroundSize: "40px 40px" }}
//                 ></div>
//               </div>

//               <div className="relative z-10">
//                 {/* Popular Badge */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay: 0.8 }}
//                   className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6"
//                 >
//                   <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
//                   Most Popular
//                 </motion.div>

//                 {/* Price */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.9 }}
//                   className="mb-3 sm:mb-4 md:mb-6"
//                 >
//                   <div className="flex items-baseline">
//                     <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
//                       $500
//                     </span>
//                     <span className="text-sm sm:text-base md:text-lg text-green-100 ml-1 sm:ml-2">
//                       /month
//                     </span>
//                   </div>
//                   <p className="text-green-100 text-xs sm:text-sm mt-1">
//                     Complete platform access
//                   </p>
//                 </motion.div>

//                 {/* Features List */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 1.0 }}
//                   className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 md:mb-8"
//                 >
//                   {valueProps.map((prop, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
//                       className="flex items-center space-x-2 sm:space-x-3"
//                     >
//                       <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white flex-shrink-0" />
//                       <span className="text-xs sm:text-sm md:text-base">
//                         {prop}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </motion.div>

//                 {/* CTA Button */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 1.7 }}
//                 >
//                   <button className="w-full bg-white text-green-600 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg sm:rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 text-xs sm:text-sm md:text-base group">
//                     Start Your Journey
//                     <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
//                   </button>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* ROI Metrics - Hidden on mobile */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1.2 }}
//               className="mt-4  grid-cols-2 gap-2 sm:gap-3 hidden sm:grid"
//             >
//               <div className="bg-slate-800/50 border border-gray-700/50 rounded-lg p-2 sm:p-3 text-center">
//                 <TrendingUp className="w-4 h-4 text-green-400 mx-auto mb-1" />
//                 <p className="text-xs sm:text-sm font-bold text-white">40%</p>
//                 <p className="text-xs text-gray-400">Cost Reduction</p>
//               </div>
//               <div className="bg-slate-800/50 border border-gray-700/50 rounded-lg p-2 sm:p-3 text-center">
//                 <BarChart3 className="w-4 h-4 text-blue-400 mx-auto mb-1" />
//                 <p className="text-xs sm:text-sm font-bold text-white">
//                   3 months
//                 </p>
//                 <p className="text-xs text-gray-400">ROI Timeline</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
