// "use client";

// import { motion } from "framer-motion";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// /**
//  * About Section Component
//  * Features scroll-triggered animations with card morphing effects
//  */
// export const AboutSection = () => {
//   const { ref, isInView } = useScrollAnimation(0.4);

//   return (
//     <section
//       id="about"
//       ref={ref}
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-20 gpu-accelerated"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={
//               isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
//             }
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
//           >
//             About{" "}
//             <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//               Our Story
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
//           >
//             We&apos;re a team of passionate creators, innovators, and
//             problem-solvers dedicated to transforming ideas into extraordinary
//             digital experiences.
//           </motion.p>
//         </motion.div>

//         {/* Cards Grid with Morphing Animation */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Card 1 - Mission */}
//           <motion.div
//             initial={{ opacity: 0, y: 80, rotateY: -15 }}
//             animate={
//               isInView
//                 ? {
//                     opacity: 1,
//                     y: 0,
//                     rotateY: 0,
//                   }
//                 : {
//                     opacity: 0,
//                     y: 80,
//                     rotateY: -15,
//                   }
//             }
//             transition={{ duration: 1, delay: 0.6 }}
//             whileHover={{
//               y: -10,
//               scale: 1.05,
//               rotateY: 5,
//               boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
//             }}
//             className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu animate-smooth"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={isInView ? { scale: 1 } : { scale: 0 }}
//               transition={{ duration: 0.5, delay: 0.8 }}
//               className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6"
//             >
//               <span className="text-2xl text-white font-bold">🎯</span>
//             </motion.div>

//             <motion.h3
//               initial={{ opacity: 0, x: -20 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//               transition={{ duration: 0.6, delay: 1 }}
//               className="text-2xl font-bold text-gray-900 mb-4"
//             >
//               Our Mission
//             </motion.h3>

//             <motion.p
//               initial={{ opacity: 0, x: -20 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//               transition={{ duration: 0.6, delay: 1.1 }}
//               className="text-gray-600 leading-relaxed"
//             >
//               To empower businesses with cutting-edge digital solutions that
//               drive growth, enhance user experiences, and create lasting impact
//               in the digital landscape.
//             </motion.p>
//           </motion.div>

//           {/* Card 2 - Vision */}
//           <motion.div
//             initial={{ opacity: 0, y: 80, rotateY: 15 }}
//             animate={
//               isInView
//                 ? {
//                     opacity: 1,
//                     y: 0,
//                     rotateY: 0,
//                   }
//                 : {
//                     opacity: 0,
//                     y: 80,
//                     rotateY: 15,
//                   }
//             }
//             transition={{ duration: 1, delay: 0.8 }}
//             whileHover={{
//               y: -10,
//               scale: 1.05,
//               rotateY: -5,
//               boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
//             }}
//             className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={isInView ? { scale: 1 } : { scale: 0 }}
//               transition={{ duration: 0.5, delay: 1 }}
//               className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mb-6"
//             >
//               <span className="text-2xl text-white font-bold">🚀</span>
//             </motion.div>

//             <motion.h3
//               initial={{ opacity: 0, x: 20 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
//               transition={{ duration: 0.6, delay: 1.2 }}
//               className="text-2xl font-bold text-gray-900 mb-4"
//             >
//               Our Vision
//             </motion.h3>

//             <motion.p
//               initial={{ opacity: 0, x: 20 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
//               transition={{ duration: 0.6, delay: 1.3 }}
//               className="text-gray-600 leading-relaxed"
//             >
//               To be the leading force in digital innovation, setting new
//               standards for creativity, functionality, and user-centric design
//               across all industries.
//             </motion.p>
//           </motion.div>

//           {/* Card 3 - Values */}
//           <motion.div
//             initial={{ opacity: 0, y: 80, rotateY: -10 }}
//             animate={
//               isInView
//                 ? {
//                     opacity: 1,
//                     y: 0,
//                     rotateY: 0,
//                   }
//                 : {
//                     opacity: 0,
//                     y: 80,
//                     rotateY: -10,
//                   }
//             }
//             transition={{ duration: 1, delay: 1 }}
//             whileHover={{
//               y: -10,
//               scale: 1.05,
//               rotateY: 3,
//               boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
//             }}
//             className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu md:col-span-2 lg:col-span-1"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={isInView ? { scale: 1 } : { scale: 0 }}
//               transition={{ duration: 0.5, delay: 1.2 }}
//               className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6"
//             >
//               <span className="text-2xl text-white font-bold">💎</span>
//             </motion.div>

//             <motion.h3
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.6, delay: 1.4 }}
//               className="text-2xl font-bold text-gray-900 mb-4"
//             >
//               Our Values
//             </motion.h3>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.6, delay: 1.5 }}
//               className="text-gray-600 leading-relaxed"
//             >
//               Innovation, integrity, and excellence drive everything we do. We
//               believe in collaborative partnerships, continuous learning, and
//               delivering results that exceed expectations.
//             </motion.p>
//           </motion.div>
//         </div>

//         {/* Bottom CTA with Morphing Effect */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={
//             isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
//           }
//           transition={{ duration: 1, delay: 1.6 }}
//           className="text-center mt-16"
//         >
//           <motion.button
//             whileHover={{
//               scale: 1.05,
//               backgroundColor: "#7C3AED",
//               boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)",
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
//           >
//             Learn More About Us
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
