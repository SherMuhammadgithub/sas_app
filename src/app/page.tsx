import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StockManagementSection } from "@/components/sections/StockManagementSection";
import { OrderManagementSection } from "@/components/sections/OrderManagementSection";
import { CreditControlSection } from "@/components/sections/CreditControlSection";
import { PaymentIntegrationSection } from "@/components/sections/PaymentIntegrationSection";
import { WhatsAppIntegrationSection } from "@/components/sections/WhatsAppIntegrationSection";
import { DeliverySection } from "@/components/sections/DeliverySection";
import { CustomerPortalSection } from "@/components/sections/CustomerPortalSection";
import { ReportingComplianceSection } from "@/components/sections/ReportingComplianceSection";
import { AutomatedGatePassSection } from "@/components/sections/AutomatedGatePassSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { MorphingPortfolioContainer } from "@/components/transitions/MorphingPortfolioContainer";
// import { FloatingNav } from "@/components/ui/FloatingNav"; // Commented out as requested
import { FlexiblePricingSection } from "@/components/sections/FlexiblePriceSection";
import { CustomerSatisfactionSection } from "@/components/sections/CustomerSatisfactionSection";
// import { FooterSection } from "@/components/sections/FooterSection";
import { SectionTransition } from "@/components/transitions/SectionTransition";
import { SmoothScrollContainer } from "@/components/transitions/SmoothScrollContainer";
import { FloatingNav } from "@/components/ui/FloatingNav";

/**
 * Main Homepage Component
 * Features morphing transitions between sections with fixed background
 */
export default function Home() {
  const sections = [
    {
      id: "hero",
      component: <HeroSection />,
      title: "Welcome to Portfolio",
    },
    {
      id: "stock-management",
      component: <StockManagementSection />,
      title: "Stock Management",
    },
    {
      id: "order-management",
      component: <OrderManagementSection />,
      title: "Order Management",
    },
    {
      id: "credit-control",
      component: <CreditControlSection />,
      title: "Credit Control",
    },
    {
      id: "payment-integration",
      component: <PaymentIntegrationSection />,
      title: "Payment Integration",
    },
    {
      id: "whatsapp-integration",
      component: <WhatsAppIntegrationSection />,
      title: "WhatsApp Integration",
    },
    {
      id: "delivery",
      component: <DeliverySection />,
      title: "Delivery Tracking",
    },
    {
      id: "customer-portal",
      component: <CustomerPortalSection />,
      title: "Customer Portal",
    },
    {
      id: "reporting-compliance",
      component: <ReportingComplianceSection />,
      title: "Reporting & Compliance",
    },
    {
      id: "automated-gate-pass",
      component: <AutomatedGatePassSection />,
      title: "Automated Gate Pass",
    },
    {
      id: "flexible-pricing",
      component: <FlexiblePricingSection />,
      title: "Flexible Pricing",
    },
    {
      id: "customer-satisfaction",
      component: <CustomerSatisfactionSection />,
      title: "Customer Satisfaction",
    },
  ];

  return (
    <section className="h-screen">
      <MorphingPortfolioContainer sections={sections} />
    </section>
  );
}
