import HeroSection from "@/components/home/HeroSection"
import VideoBanner from "@/components/home/VideoBanner"
import AudioPlayer from "@/components/home/AudioPlayer"
import DanceStylesSection from "@/components/home/DanceStylesSection"
import FeaturesSection from "@/components/home/FeaturesSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import CtaSection from "@/components/shared/CtaSection"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <VideoBanner />
      <HeroSection />
      <DanceStylesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection
        title="¿Listo para empezar a bailar?"
        description="Tu primera clase es gratis. Ven a conocernos y descubre el estilo que más te gusta."
        primaryButtonText="Contactar ahora"
        primaryButtonLink="/contacto"
        secondaryButtonText="Agendar clase"
        secondaryButtonLink="/agendar"
      />
      <AudioPlayer />
    </main>
  )
}
