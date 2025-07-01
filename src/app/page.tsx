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
import { SectionTransition } from "@/components/transitions/SectionTransition";
import { SmoothScrollContainer } from "@/components/transitions/SmoothScrollContainer";
import { FloatingNav } from "@/components/ui/FloatingNav";

/**
 * Main Homepage Component
 * Combines all sections with smooth scroll animations and morphing transitions
 */
export default function Home() {
  return (
    <SmoothScrollContainer>
      <div className="overflow-x-hidden">
        {/* Hero Section - First impression with animated content */}
        <SectionTransition>
          <HeroSection />
        </SectionTransition>

        {/* Stock Management Section - Inventory control features */}
        <SectionTransition>
          <StockManagementSection />
        </SectionTransition>

        {/* Order Management Section - Streamlined order processing */}
        <SectionTransition>
          <OrderManagementSection />
        </SectionTransition>

        {/* Credit Control Section - Comprehensive credit management */}
        <SectionTransition>
          <CreditControlSection />
        </SectionTransition>

        {/* Payment Integration Section - Streamlined payment and communication */}
        <SectionTransition>
          <PaymentIntegrationSection />
        </SectionTransition>

        {/* WhatsApp Integration Section - Business messaging and customer communication */}
        <SectionTransition>
          <WhatsAppIntegrationSection />
        </SectionTransition>

        {/* Delivery Section - Interactive map with delivery tracking */}
        <SectionTransition>
          <DeliverySection />
        </SectionTransition>

        {/* Customer Portal Section - Self-service capabilities and mobile app */}
        <SectionTransition>
          <CustomerPortalSection />
        </SectionTransition>

        {/* Reporting and Compliance Section - Analytics dashboard and compliance tracking */}
        <SectionTransition>
          <ReportingComplianceSection />
        </SectionTransition>

        {/* Automated Gate-Pass Section - Digital gate-pass generation and management */}
        <SectionTransition>
          <AutomatedGatePassSection />
        </SectionTransition>

        {/* Floating Navigation for smooth section transitions */}
        <FloatingNav />
      </div>
    </SmoothScrollContainer>
  );
}
