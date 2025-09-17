import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HealthProtocolsSection } from "@/components/health-protocols-section"
import { ServicesSection } from "@/components/services-section"
import { ReviewsSection } from "@/components/reviews-section"
import { PromotionalPackagesSection } from "@/components/promotional-packages-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HealthProtocolsSection />
      <ServicesSection />
      <ReviewsSection />
      <PromotionalPackagesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
