// "use client";

// import { motion } from "framer-motion";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
//   ExternalLink,
//   ArrowRight,
//   Heart,
//   Code,
//   Users,
//   Clock,
//   CheckCircle,
// } from "lucide-react";

// /**
//  * Footer Section Component
//  * Professional footer with company info, contact details, and social links
//  */
// export const FooterSection = () => {
//   const { ref, isInView } = useScrollAnimation(0.2);

//   // Footer navigation links
//   const footerSections = [
//     {
//       title: "Solutions",
//       links: [
//         { label: "Stock Management", href: "#stock-management" },
//         { label: "Order Management", href: "#order-management" },
//         { label: "Credit Control", href: "#credit-control" },
//         { label: "Delivery Services", href: "#delivery" },
//       ],
//     },
//     {
//       title: "Features",
//       links: [
//         { label: "Customer Portal", href: "#customer-portal" },
//         { label: "Payment Integration", href: "#payment-integration" },
//         { label: "WhatsApp Integration", href: "#whatsapp-integration" },
//         { label: "Reporting & Compliance", href: "#reporting-compliance" },
//       ],
//     },
//     {
//       title: "Company",
//       links: [
//         { label: "About Us", href: "#hero" },
//         { label: "Contact", href: "#contact" },
//         { label: "Careers", href: "#careers" },
//         { label: "Support", href: "#support" },
//       ],
//     },
//   ];

//   // Social media links
//   const socialLinks = [
//     {
//       name: "Facebook",
//       icon: Facebook,
//       href: "#",
//       color: "hover:text-blue-400",
//     },
//     {
//       name: "Twitter",
//       icon: Twitter,
//       href: "#",
//       color: "hover:text-sky-400",
//     },
//     {
//       name: "LinkedIn",
//       icon: Linkedin,
//       href: "#",
//       color: "hover:text-blue-500",
//     },
//     {
//       name: "Instagram",
//       icon: Instagram,
//       href: "#",
//       color: "hover:text-pink-400",
//     },
//   ];

//   // Company stats
//   const companyStats = [
//     { icon: Users, value: "500+", label: "Happy Clients" },
//     { icon: CheckCircle, value: "99.9%", label: "Uptime" },
//     { icon: Clock, value: "24/7", label: "Support" },
//     { icon: Code, value: "10+", label: "Years Experience" },
//   ];

//   // Decorative floating icons
//   const decorativeIcons = [
//     { icon: CheckCircle, delay: 0.2, x: 10, y: 20 },
//     { icon: Users, delay: 0.4, x: 90, y: 30 },
//     { icon: Heart, delay: 0.6, x: 20, y: 70 },
//     { icon: Code, delay: 0.8, x: 80, y: 80 },
//   ];

//   return (
//     <footer
//       ref={ref}
//       className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-emerald-900 text-white overflow-hidden"
//     >
//       {/* Background Pattern */}
//       <div
//         className="absolute inset-0 opacity-5"
//         style={{
//           backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
//             <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
//               <rect x="0" y="0" width="30" height="30" fill="rgb(34, 197, 94)" opacity="0.3"/>
//               <rect x="30" y="30" width="30" height="30" fill="rgb(46, 213, 115)" opacity="0.4"/>
//               <circle cx="45" cy="15" r="8" fill="rgb(16, 185, 129)" opacity="0.3"/>
//             </svg>
//           `)}')`,
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* Decorative Floating Icons */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {decorativeIcons.map((item, index) => {
//           const IconComponent = item.icon;
//           return (
//             <motion.div
//               key={index}
//               initial={{
//                 opacity: 0,
//                 scale: 0,
//                 x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
//                 y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
//               }}
//               animate={
//                 isInView
//                   ? {
//                       opacity: [0, 0.3, 0.1],
//                       scale: [0, 1.1, 1],
//                       x: [
//                         typeof window !== "undefined"
//                           ? window.innerWidth / 2
//                           : 0,
//                         typeof window !== "undefined"
//                           ? (window.innerWidth * item.x) / 100
//                           : item.x,
//                         typeof window !== "undefined"
//                           ? (window.innerWidth * item.x) / 100 + 10
//                           : item.x + 10,
//                       ],
//                       y: [
//                         typeof window !== "undefined"
//                           ? window.innerHeight / 2
//                           : 0,
//                         typeof window !== "undefined"
//                           ? (window.innerHeight * item.y) / 100
//                           : item.y,
//                         typeof window !== "undefined"
//                           ? (window.innerHeight * item.y) / 100 + 15
//                           : item.y + 15,
//                       ],
//                     }
//                   : {}
//               }
//               transition={{
//                 duration: 3,
//                 delay: item.delay,
//                 ease: "easeOut",
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 repeatDelay: 5,
//               }}
//               className="absolute z-10"
//               style={{
//                 left: `${item.x}%`,
//                 top: `${item.y}%`,
//               }}
//             >
//               <IconComponent
//                 size={24}
//                 className="text-green-400/40 filter drop-shadow-lg"
//               />
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Main Footer Content */}
//       <div className="relative z-20 pt-16 pb-8">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           {/* Company Stats Banner */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.8 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6"
//           >
//             {companyStats.map((stat, index) => {
//               const IconComponent = stat.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={
//                     isInView
//                       ? { opacity: 1, scale: 1 }
//                       : { opacity: 0, scale: 0.9 }
//                   }
//                   transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
//                   className="text-center group"
//                 >
//                   <motion.div
//                     className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-3 group-hover:bg-green-500/30 transition-colors duration-300"
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                   >
//                     <IconComponent size={24} className="text-green-400" />
//                   </motion.div>
//                   <motion.div
//                     animate={isInView ? { scale: [1, 1.05, 1] } : {}}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       delay: 1 + index * 0.5,
//                     }}
//                     className="text-2xl font-bold text-white font-playfair mb-1"
//                   >
//                     {stat.value}
//                   </motion.div>
//                   <div className="text-gray-300 text-sm font-inter">
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>

//           {/* Footer Links Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
//             {/* Company Info */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="lg:col-span-1"
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={
//                   isInView
//                     ? { opacity: 1, scale: 1 }
//                     : { opacity: 0, scale: 0.9 }
//                 }
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="flex items-center space-x-3 mb-6"
//               >
//                 <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
//                   <span className="text-white font-bold text-lg font-playfair">
//                     C
//                   </span>
//                 </div>
//                 <span className="text-xl font-bold font-playfair">
//                   Company Name
//                 </span>
//               </motion.div>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={
//                   isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
//                 }
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 className="text-gray-300 mb-6 font-inter leading-relaxed"
//               >
//                 Transforming business operations with comprehensive management
//                 solutions for modern enterprises. Your success is our mission.
//               </motion.p>

//               {/* Contact Info */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={
//                   isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
//                 }
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="space-y-3"
//               >
//                 {[
//                   { icon: Mail, text: "hello@company.com" },
//                   { icon: Phone, text: "+256 700 123 456" },
//                   { icon: MapPin, text: "Kampala, Uganda" },
//                 ].map((contact, index) => {
//                   const IconComponent = contact.icon;
//                   return (
//                     <motion.div
//                       key={index}
//                       className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-300 group"
//                       whileHover={{ x: 5 }}
//                     >
//                       <IconComponent
//                         size={16}
//                         className="text-green-400 group-hover:scale-110 transition-transform duration-300"
//                       />
//                       <span className="font-inter text-sm">{contact.text}</span>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             </motion.div>

//             {/* Footer Navigation Sections */}
//             {footerSections.map((section, sectionIndex) => (
//               <motion.div
//                 key={sectionIndex}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={
//                   isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
//                 }
//                 transition={{ duration: 0.8, delay: 0.3 + sectionIndex * 0.1 }}
//               >
//                 <h3 className="text-lg font-semibold font-poppins mb-4 text-white">
//                   {section.title}
//                 </h3>
//                 <ul className="space-y-3">
//                   {section.links.map((link, linkIndex) => (
//                     <motion.li
//                       key={linkIndex}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={
//                         isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
//                       }
//                       transition={{
//                         duration: 0.6,
//                         delay: 0.5 + sectionIndex * 0.1 + linkIndex * 0.05,
//                       }}
//                     >
//                       <motion.a
//                         href={link.href}
//                         className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-inter text-sm flex items-center group"
//                         whileHover={{ x: 5 }}
//                       >
//                         <span>{link.label}</span>
//                         <ArrowRight
//                           size={14}
//                           className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                         />
//                       </motion.a>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>

//           {/* Newsletter Signup */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.8, delay: 0.7 }}
//             className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 mb-12"
//           >
//             <div className="max-w-md mx-auto text-center">
//               <h3 className="text-xl font-semibold font-poppins mb-2 text-white">
//                 Stay Updated
//               </h3>
//               <p className="text-gray-300 mb-4 font-inter text-sm">
//                 Get the latest updates on our solutions and industry insights.
//               </p>
//               <div className="flex gap-3">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300 font-inter"
//                 />
//                 <motion.button
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-poppins font-semibold hover:shadow-lg transition-all duration-300"
//                 >
//                   Subscribe
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>

//           {/* Footer Bottom */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ duration: 0.8, delay: 0.9 }}
//             className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between"
//           >
//             {/* Copyright */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//               transition={{ duration: 0.6, delay: 1 }}
//               className="flex items-center text-gray-300 mb-4 md:mb-0 font-inter text-sm"
//             >
//               <span>© 2024 Company Name. Made with</span>
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 1, repeat: Infinity, delay: 2 }}
//                 className="mx-2"
//               >
//                 <Heart size={16} className="text-red-400" />
//               </motion.div>
//               <span>in Uganda</span>
//             </motion.div>

//             {/* Social Links */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
//               transition={{ duration: 0.6, delay: 1.1 }}
//               className="flex items-center space-x-4"
//             >
//               {socialLinks.map((social, index) => {
//                 const IconComponent = social.icon;
//                 return (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     className={`text-gray-400 ${social.color} transition-colors duration-300 p-2 rounded-full hover:bg-white/10`}
//                     whileHover={{ scale: 1.1, y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <IconComponent size={20} />
//                   </motion.a>
//                 );
//               })}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       <motion.button
//         initial={{ opacity: 0, scale: 0 }}
//         animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
//         transition={{ duration: 0.6, delay: 1.2 }}
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
//         whileHover={{
//           scale: 1.1,
//           boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
//         }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <motion.div
//           animate={{ y: [-2, 2, -2] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <ArrowRight size={20} className="rotate-[-90deg]" />
//         </motion.div>
//       </motion.button>
//     </footer>
//   );
// };
