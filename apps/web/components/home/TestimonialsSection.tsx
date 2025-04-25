import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "María García",
      age: "28 años",
      testimonial:
        "Llevo 6 meses en las clases de salsa y he mejorado muchísimo. Los profesores son increíbles y el ambiente es muy acogedor.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Carlos Rodríguez",
      age: "35 años",
      testimonial:
        "Empecé sin saber nada de baile y ahora participo en competiciones. La academia cambió mi vida por completo.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Laura Martínez",
      age: "19 años",
      testimonial:
        "Las clases de hip hop son dinámicas y divertidas. He hecho grandes amigos y mejorado mi condición física.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="relative bg-[#D1DDC4]/30 py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="liquid-shape liquid-shape-1"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#E77A50]/20 px-4 py-1 rounded-full text-[#E77A50] text-sm font-medium mb-2">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#34485F] mb-4">Lo que dicen nuestros alumnos</h2>
          <p className="text-[#34485F]/80 max-w-2xl mx-auto">
            Historias de éxito de quienes ya forman parte de nuestra comunidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 text-6xl text-[#E77A50]/20">
                "
              </div>
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#E77A50]">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg?height=100&width=100"}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#34485F]">{testimonial.name}</h3>
                  <p className="text-sm text-[#34485F]/70">{testimonial.age}</p>
                </div>
              </div>
              <p className="text-[#34485F]/80 italic">&ldquo;{testimonial.testimonial}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
