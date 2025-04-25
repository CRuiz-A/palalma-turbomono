import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function VideoBanner() {
  return (
    <section className="bg-[#2F5961] py-4 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <div className="relative w-full aspect-[21/9]">
            {/* Puedes reemplazar este video con tu propio GIF o video */}
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
              <source src="BannerPalAlma.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>

            {/* Overlay con texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2F5961]/80 to-transparent flex flex-col justify-center px-8 md:px-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Vive la experiencia <span className="text-[#F28C38]">PAL ALMA</span>
              </h2>
              <p className="text-base md:text-lg text-white max-w-xl mb-4">Donde el movimiento se convierte en arte</p>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#F28C38] text-white rounded-lg hover:bg-[#E07C2D] transition-colors w-fit"
              >
                Ver horarios <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
