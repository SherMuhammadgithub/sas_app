// "use client";

// import { motion } from "framer-motion";
// import { useSmoothNavigation } from "@/hooks/useSmoothNavigation";

// /**
//  * Floating Navigation Component
//  * Provides smooth navigation between sections
//  */
// export const FloatingNav = () => {
//   const { scrollToSection } = useSmoothNavigation();

//   const navItems = [
//     { id: "hero", label: "Home" },
//     { id: "stock-management", label: "Stock" },
//     { id: "order-management", label: "Orders" },
//     { id: "credit-control", label: "Credit" },
//     { id: "delivery", label: "Delivery" },
//     { id: "customer-portal", label: "Portal" },
//     { id: "about", label: "About" },
//   ];

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 1 }}
//       className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
//     >
//       <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-white/20 dark:border-gray-700/20">
//         <div className="flex space-x-4">
//           {navItems.map((item) => (
//             <motion.button
//               key={item.id}
//               onClick={() => scrollToSection(item.id)}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-300 text-sm px-2 py-1 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20"
//             >
//               {item.label}
//             </motion.button>
//           ))}
//         </div>
//       </div>
//     </motion.nav>
//   );
// };
