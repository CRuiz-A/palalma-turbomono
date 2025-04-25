import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-[#D1DDC4] py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="liquid-shape liquid-shape-1"></div>
      <div className="liquid-shape liquid-shape-2"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-[#34485F] font-medium mb-2">
              Aquí se BAILA la vida
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#34485F]">
              Descubre el <span className="text-[#E77A50]">ritmo</span> que hay en ti
            </h1>
            <p className="text-lg text-[#34485F] max-w-xl">
              En PAL ALMA, te ayudamos a expresarte a través del movimiento. Clases para todas las edades y niveles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/agendar"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E77A50] text-white rounded-lg hover:bg-[#d06a43] transition-colors"
              >
                Primera clase gratis <ArrowRight size={18} />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#34485F] text-white rounded-lg hover:bg-[#2a3a4d] transition-colors"
              >
                Explorar clases
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full aspect-square md:aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Bailarines en acción"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#34485F]/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
