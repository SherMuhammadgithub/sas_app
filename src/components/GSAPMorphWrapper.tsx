// "use client";

// import { useAdvancedGSAPMorph } from "@/hooks/useAdvancedGSAPMorph";
// import { ReactNode, cloneElement, ReactElement } from "react";

// interface Section {
//   id: string;
//   component: ReactElement;
//   title: string;
//   gsapEnabled?: boolean;
// }

// interface GSAPMorphWrapperProps {
//   sections: Section[];
//   children: ReactNode;
// }

// export const GSAPMorphWrapper = ({
//   sections,
//   children,
// }: GSAPMorphWrapperProps) => {
//   const containerRef = useAdvancedGSAPMorph();

//   // Wrap sections with GSAP data attributes
//   const enhancedSections = sections.map((section) => {
//     if (section.gsapEnabled) {
//       return {
//         ...section,
//         component: cloneElement(section.component, {
//           "data-gsap-section": section.id,
//           style: {
//             perspective: "1000px",
//             transformStyle: "preserve-3d",
//             position: "relative",
//           },
//         }),
//       };
//     }
//     return section;
//   });

//   return (
//     <div ref={containerRef} className="gsap-morph-container">
//       {/* Pass enhanced sections to children */}
//       {cloneElement(children as ReactElement, { sections: enhancedSections })}
//     </div>
//   );
// };
