import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function DanceStylesSection() {
  const styles = [
    {
      name: "Salsa",
      description:
        "Aprende los movimientos y ritmos de este apasionante baile latino con nuestros instructores especializados.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/servicios#salsa",
      icon: "💃",
    },
    {
      name: "Bachata",
      description:
        "Descubre la sensualidad y romanticismo de la bachata. Aprenderás los movimientos de cadera y figuras características.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/servicios#bachata",
      icon: "🌹",
    },
    {
      name: "Pilates",
      description:
        "Fortalece tu cuerpo y mejora tu postura con nuestras clases de Pilates enfocadas en control muscular y alineación.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/servicios#pilates",
      icon: "🧘",
    },
    {
      name: "Yoga",
      description:
        "Conecta cuerpo y mente a través de posturas, respiración y meditación para mejorar tu bienestar general.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/servicios#yoga",
      icon: "✨",
    },
    {
      name: "Rumba Tropical",
      description: "Disfruta de una clase llena de energía y ritmos latinos para una experiencia divertida y dinámica.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/servicios#rumba",
      icon: "🥁",
    },
    {
      name: "Reggaetón",
      description:
        "Aprende los movimientos urbanos más populares con nuestras clases de reggaetón. Desarrolla ritmo y estilo.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/servicios#reggaeton",
      icon: "🔥",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#f9f9f9]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2F5961] mb-4">Nuestros Estilos de Baile</h2>
          <p className="text-lg text-[#333333] max-w-2xl mx-auto">
            Descubre la variedad de estilos que ofrecemos para todos los niveles, desde principiantes hasta avanzados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={style.image || "/placeholder.svg"}
                  alt={`Clase de ${style.name}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-2xl">{style.icon}</span>
                  <h3 className="text-xl font-bold text-white">{style.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#333333] mb-4">{style.description}</p>
                <Link
                  href={style.link}
                  className="inline-flex items-center text-[#F28C38] hover:text-[#E07C2D] transition-colors"
                >
                  Más información <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2F5961] text-white rounded-lg hover:bg-[#2A4F56] transition-colors"
          >
            Ver todos los estilos <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
