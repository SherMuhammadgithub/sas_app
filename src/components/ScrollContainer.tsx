// "use client";

// import { useAdvancedGSAPMorph } from "@/hooks/useGSAPScroll";
// import { OrderManagementSection } from "@/components/sections/OrderManagementSection";
// import { PaymentIntegrationSection } from "@/components/sections/PaymentIntegrationSection";
// import { CreditControlSection } from "@/components/sections/CreditControlSection";
// import { CustomerSatisfactionSection } from "@/components/sections/CustomerSatisfactionSection";

// export const ScrollContainer = () => {
//   // Define different animations for each section
//   const animations = [
//     { type: "fade" as const, duration: 1, ease: "power2.out" },
//     { type: "slideLeft" as const, duration: 0.8, ease: "power2.inOut" },
//     { type: "zoom" as const, duration: 0.9, ease: "back.out(1.7)" },
//     { type: "rotate" as const, duration: 1, ease: "power2.inOut" },
//   ];

//   const containerRef = useAdvancedGSAPMorph();

//   return (
//     <div className="relative">
//       {/* Scroll spacer to create scroll distance - 4 sections * 100vh each */}
//       <div style={{ height: "400vh" }} />

//       {/* Fixed sections container */}
//       <div
//         ref={containerRef}
//         className="fixed inset-0 w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black"
//       >
//         {/* Section 1: Order Management - Fade In */}
//         <div className="scroll-section absolute inset-0 w-full h-full">
//           <OrderManagementSection />
//         </div>

//         {/* Section 2: Payment Integration - Slide from Left */}
//         <div className="scroll-section absolute inset-0 w-full h-full">
//           <PaymentIntegrationSection />
//         </div>

//         {/* Section 3: Credit Control - Zoom In */}
//         <div className="scroll-section absolute inset-0 w-full h-full">
//           <CreditControlSection />
//         </div>

//         {/* Section 4: Customer Satisfaction - Rotate In */}
//         <div className="scroll-section absolute inset-0 w-full h-full">
//           <CustomerSatisfactionSection />
//         </div>
//       </div>
//     </div>
//   );
// };
