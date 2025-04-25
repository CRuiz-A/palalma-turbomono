import { Award, Music, Users } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      title: "Instructores certificados",
      description: "Nuestro equipo está formado por bailarines profesionales con años de experiencia.",
      icon: <Award className="h-8 w-8 text-white" />,
      bgColor: "bg-[#E77A50]",
    },
    {
      title: "Instalaciones modernas",
      description: "Contamos con estudios equipados con espejos, barras y el mejor sistema de sonido.",
      icon: <Music className="h-8 w-8 text-white" />,
      bgColor: "bg-[#34485F]",
    },
    {
      title: "Clases para todos",
      description: "Ofrecemos grupos por edades y niveles, desde principiantes hasta avanzados.",
      icon: <Users className="h-8 w-8 text-white" />,
      bgColor: "bg-[#E77A50]",
    },
  ]

  return (
    <section className="relative bg-white py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#D1DDC4] px-4 py-1 rounded-full text-[#34485F] text-sm font-medium mb-2">
            Nuestra diferencia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#34485F] mb-4">¿Por qué elegirnos?</h2>
          <p className="text-[#34485F]/80 max-w-2xl mx-auto">
            Nuestra academia ofrece una experiencia única para todos los amantes del baile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-[#F5F5F5] rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#34485F] mb-2">{feature.title}</h3>
              <p className="text-[#34485F]/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
