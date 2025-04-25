"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactoPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    }, 1500)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#34485F] py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="liquid-shape liquid-shape-1"></div>
        <div className="liquid-shape liquid-shape-2"></div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium mb-4">
            Estamos para ayudarte
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Contacto</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Estamos aquí para responder tus preguntas. Ponte en contacto con nosotros y te responderemos lo antes
            posible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#F5F5F5] p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-[#34485F] mb-6">Envíanos un mensaje</h2>

              {formStatus === "success" ? (
                <div className="bg-green-100 p-6 rounded-lg text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-green-700">
                    Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#34485F] mb-1">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#E77A50] focus:border-[#E77A50] transition-colors"
                        placeholder="Tu nombre"
                        required
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#34485F] mb-1">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#E77A50] focus:border-[#E77A50] transition-colors"
                        placeholder="tu@email.com"
                        required
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#34485F] mb-1">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#E77A50] focus:border-[#E77A50] transition-colors"
                      placeholder="Asunto de tu mensaje"
                      required
                      disabled={formStatus === "submitting"}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#34485F] mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#E77A50] focus:border-[#E77A50] transition-colors"
                      placeholder="¿En qué podemos ayudarte?"
                      required
                      disabled={formStatus === "submitting"}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#E77A50] text-white rounded-lg hover:bg-[#d06a43] transition-colors flex items-center justify-center"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#34485F] mb-6">Información de contacto</h2>
                <p className="text-[#34485F]/80 mb-8">
                  Puedes contactarnos a través de los siguientes medios o visitarnos en nuestra academia.
                </p>

                <ul className="space-y-6">
                  {[
                    { icon: MapPin, title: "Dirección", info: "Cra 24 # 30 - 19, Floridablanca, Santander" },
                    { icon: Phone, title: "Teléfono", info: "300 3560603" },
                    { icon: Mail, title: "Correo electrónico", info: "info@palalma.com" },
                    {
                      icon: Clock,
                      title: "Horario de clases",
                      info: "Lunes - Miércoles: 7:00 am - 7:30 pm\nJueves - Sábado: 7:00 am - 7:30 pm",
                    },
                  ].map(({ icon: Icon, title, info }, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-[#E77A50]/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="h-5 w-5 text-[#E77A50]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#34485F]">{title}</h3>
                        <p className="text-[#34485F]/80 whitespace-pre-line">{info}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div className="bg-[#F5F5F5] p-4 rounded-xl shadow-md">
                <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Mapa de ubicación"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#D1DDC4]/30 relative overflow-hidden">
        <div className="liquid-shape liquid-shape-1"></div>
        <div className="liquid-shape liquid-shape-2"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#E77A50]/20 px-4 py-1 rounded-full text-[#E77A50] text-sm font-medium mb-2">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl font-bold text-[#34485F] mb-4">Respuestas a tus dudas</h2>
            <p className="text-[#34485F]/80 max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestras clases y servicios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "¿Necesito experiencia previa para tomar clases?",
                answer:
                  "No, tenemos clases para todos los niveles, desde principiantes absolutos hasta bailarines avanzados. Nuestros instructores adaptan las clases según el nivel de cada estudiante.",
              },
              {
                question: "¿Qué debo llevar a mi primera clase?",
                answer:
                  "Recomendamos ropa cómoda que te permita moverte con libertad, zapatos adecuados según el estilo de baile, una botella de agua y una toalla pequeña. Para estilos específicos como ballet o salsa, te indicaremos el calzado apropiado.",
              },
              {
                question: "¿Puedo recuperar clases perdidas?",
                answer:
                  "Sí, ofrecemos la posibilidad de recuperar clases perdidas dentro del mismo mes, sujeto a disponibilidad de cupo. Debes notificar con al menos 24 horas de anticipación que no podrás asistir.",
              },
              {
                question: "¿Ofrecen clases privadas?",
                answer:
                  "Sí, ofrecemos clases privadas individuales o en pareja con cualquiera de nuestros instructores. Estas clases se adaptan completamente a tus necesidades y objetivos específicos.",
              },
              {
                question: "¿Tienen descuentos para estudiantes o grupos?",
                answer:
                  "Sí, contamos con tarifas especiales para estudiantes con carnet vigente, así como descuentos para grupos de 3 o más personas que se inscriban juntas.",
              },
              {
                question: "¿Cómo puedo inscribirme en una clase?",
                answer:
                  "Puedes inscribirte directamente en nuestra academia, a través de nuestra página web en la sección 'Agendar', o contactándonos por teléfono o correo electrónico.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#34485F] mb-3">{faq.question}</h3>
                <p className="text-[#34485F]/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
