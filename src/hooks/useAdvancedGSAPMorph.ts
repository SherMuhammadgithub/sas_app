import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useAdvancedGSAPMorph = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Stock Management Section - Slide Up with Particles
    const stockSection = containerRef.current.querySelector(
      '[data-gsap-section="stock-management"]'
    );
    if (stockSection) {
      // Create floating particles
      createParticles(stockSection, "stock");

      gsap.set(stockSection, { y: 100, opacity: 0, rotationX: 30 });

      ScrollTrigger.create({
        trigger: stockSection,
        start: "top 80%",
        end: "top 20%",
        onEnter: () => {
          gsap.to(stockSection, {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "power3.out",
          });

          // Animate particles
          const particles = stockSection.querySelectorAll(".stock-particle");
          gsap.fromTo(
            particles,
            { opacity: 0, scale: 0, y: 50 },
            {
              opacity: 0.6,
              scale: 1,
              y: 0,
              duration: 1.5,
              stagger: 0.1,
              ease: "back.out(1.7)",
            }
          );
        },
        onLeave: () => {
          gsap.to(stockSection, {
            y: -50,
            opacity: 0,
            rotationX: -15,
            duration: 0.8,
            ease: "power2.inOut",
          });
        },
        onEnterBack: () => {
          gsap.to(stockSection, {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            ease: "power2.out",
          });
        },
      });
    }

    // Order Management Section - Slide Left with 3D Effect
    const orderSection = containerRef.current.querySelector(
      '[data-gsap-section="order-management"]'
    );
    if (orderSection) {
      createParticles(orderSection, "order");

      gsap.set(orderSection, { x: -150, opacity: 0, rotationY: 45 });

      ScrollTrigger.create({
        trigger: orderSection,
        start: "top 80%",
        end: "top 20%",
        onEnter: () => {
          gsap.to(orderSection, {
            x: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1.4,
            ease: "power3.out",
          });

          // Spiral particle effect
          const particles = orderSection.querySelectorAll(".order-particle");
          particles.forEach((particle, i) => {
            gsap.fromTo(
              particle,
              {
                opacity: 0,
                scale: 0,
                rotation: i * 30,
                x: Math.cos(i * 0.5) * 80,
                y: Math.sin(i * 0.5) * 80,
              },
              {
                opacity: 0.7,
                scale: 1,
                rotation: 0,
                x: 0,
                y: 0,
                duration: 1.8,
                delay: i * 0.1,
                ease: "elastic.out(1, 0.3)",
              }
            );
          });
        },
        onLeave: () => {
          gsap.to(orderSection, {
            x: 100,
            opacity: 0,
            rotationY: -30,
            duration: 0.8,
            ease: "power2.inOut",
          });
        },
        onEnterBack: () => {
          gsap.to(orderSection, {
            x: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1,
            ease: "power2.out",
          });
        },
      });
    }

    // Credit Control Section - Zoom with Rotation
    const creditSection = containerRef.current.querySelector(
      '[data-gsap-section="credit-control"]'
    );
    if (creditSection) {
      createParticles(creditSection, "credit");

      gsap.set(creditSection, { scale: 0.6, opacity: 0, rotation: 20 });

      ScrollTrigger.create({
        trigger: creditSection,
        start: "top 80%",
        end: "top 20%",
        onEnter: () => {
          gsap.to(creditSection, {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1.6,
            ease: "back.out(1.4)",
          });

          // Wave particle effect
          const particles = creditSection.querySelectorAll(".credit-particle");
          particles.forEach((particle, i) => {
            gsap.fromTo(
              particle,
              {
                opacity: 0,
                y: 120,
                x: Math.sin(i * 0.8) * 60,
                scale: 0,
              },
              {
                opacity: 0.8,
                y: 0,
                x: 0,
                scale: 1,
                duration: 2,
                delay: i * 0.08,
                ease: "elastic.out(1, 0.5)",
              }
            );
          });
        },
        onLeave: () => {
          gsap.to(creditSection, {
            scale: 1.1,
            opacity: 0,
            rotation: -15,
            duration: 0.8,
            ease: "power2.inOut",
          });
        },
        onEnterBack: () => {
          gsap.to(creditSection, {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.2)",
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const createParticles = (section: Element, type: string) => {
    const particleCount = 12;
    const colors = {
      stock: "bg-blue-400",
      order: "bg-green-400",
      credit: "bg-purple-400",
    };

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = `${type}-particle absolute w-1 h-1 ${
        colors[type as keyof typeof colors]
      } rounded-full opacity-0 pointer-events-none`;
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.zIndex = "1";
      section.appendChild(particle);
    }
  };

  return containerRef;
};
