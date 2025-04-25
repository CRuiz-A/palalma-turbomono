"use client"

import type React from "react"

import { useState } from "react"
import { Facebook, Instagram, Twitter, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function InstructoresPage() {
  const [activeInstructor, setActiveInstructor] = useState<number | null>(null)

  const instructors = [
    {
      name: "Ángela",
      role: "Instructora de Pilates y Yoga",
      bio: "Especialista en técnicas de Pilates y Yoga con enfoque en bienestar físico y mental.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
      fullBio:
        "Ángela es una apasionada del bienestar integral. Certificada en Pilates y Yoga, ha desarrollado un método único que combina ambas disciplinas para mejorar la postura, fortalecer el core y aumentar la flexibilidad. Su enfoque se centra en la conexión mente-cuerpo y la respiración consciente.",
      specialties: ["Pilates Mat", "Yoga Flow", "Yoga para principiantes"],
      achievements: ["Certificación internacional en Pilates", "Formación avanzada en Yoga Iyengar"],
      schedule: ["Lunes: 7:00 am - 8:00 am (Pilates)", "Miércoles: 7:00 am - 8:00 am (Yoga)"],
    },
    {
      name: "Camila",
      role: "Instructora de Bachata",
      bio: "Especialista en Bachata con un estilo único que combina técnica dominicana y sensualidad.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
      fullBio:
        "Camila descubrió su pasión por la bachata hace más de 8 años y desde entonces ha perfeccionado su técnica con maestros internacionales. Su estilo se caracteriza por movimientos fluidos y expresivos, con especial atención a la interpretación musical. Como instructora, Camila crea un ambiente acogedor donde los estudiantes pueden desarrollar su propio estilo mientras dominan los fundamentos técnicos.",
      specialties: ["Bachata Dominicana", "Bachata Sensual", "Bachatica Ladies"],
      achievements: ["Participación en el Dominican Bachata Congress", "Formadora de parejas campeonas regionales"],
      schedule: ["Jueves: 6:30 pm - 7:30 pm (Bachatica)", "Sábado: 11:00 am - 12:00 pm (Bachatica Ladies)"],
    },
    {
      name: "Daniela",
      role: "Instructora de Salsa y Ritmos Tropicales",
      bio: "Bailarina profesional especializada en salsa caleña y ritmos tropicales con más de 10 años de experiencia.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
      fullBio:
        "Daniela comenzó su formación en danza desde los 7 años y se especializó en salsa caleña, convirtiéndose en una referente del estilo en la región. Ha participado en competencias nacionales y ha sido parte de compañías profesionales de danza. Su metodología de enseñanza combina técnica, musicalidad y expresión corporal, haciendo que sus clases sean dinámicas y divertidas.",
      specialties: ["Salsa Caleña", "Salsita Ladies", "Ritmos Tropicales"],
      achievements: ["Campeona Nacional de Salsa Caleña 2019", "Directora de la compañía Tropical Dancers"],
      schedule: ["Martes: 6:30 pm - 7:30 pm (Salsita Caleña)", "Viernes: 6:30 pm - 7:30 pm (Ritmos Tropicales)"],
    },
    {
      name: "Carlos",
      role: "Instructor de Salsa Fusión",
      bio: "Maestro de salsa fusión con un estilo único que integra elementos de salsa en línea y cubana.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
      fullBio:
        "Carlos ha desarrollado un estilo propio de salsa que fusiona elementos de la salsa en línea (LA style) con movimientos de la salsa cubana, creando una propuesta dinámica y versátil. Con más de 12 años de experiencia como bailarín e instructor, Carlos ha formado a numerosos bailarines que hoy destacan en la escena local e internacional. Su método de enseñanza se basa en la comprensión profunda de la música y la técnica.",
      specialties: ["Salsa Fusión", "Salsa en Línea", "Salsa Cubana"],
      achievements: ["Creador del método 'Salsa Fusión PAL ALMA'", "Jurado en competencias internacionales"],
      schedule: ["Lunes: 6:30 pm - 7:30 pm (Salsa Fusión)", "Miércoles: 7:30 pm - 8:30 pm (Salsa Parejas)"],
    },
    {
      name: "Juan",
      role: "Instructor de Reggaetón",
      bio: "Especialista en reggaetón y ritmos urbanos con un enfoque contemporáneo y dinámico.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
      fullBio:
        "Juan es un apasionado de los ritmos urbanos y ha desarrollado un estilo único de reggaetón que combina técnicas de hip hop, dancehall y movimientos latinos. Su energía y carisma hacen de sus clases una experiencia divertida y desafiante. Juan ha trabajado como bailarín para artistas nacionales y ha participado en videos musicales, trayendo toda esa experiencia profesional a sus clases.",
      specialties: ["Reggaetón", "Urban Dance", "Dancehall"],
      achievements: ["Bailarín principal en giras nacionales", "Coreógrafo de videos musicales"],
      schedule: ["Jueves: 7:30 pm - 8:30 pm (Reggaetón)", "Sábado: 12:00 pm - 1:00 pm (Urban Dance)"],
    },
    {
      name: "Sebastián",
      role: "Instructor de Timba y Afrosalsa",
      bio: "Experto en ritmos afrocubanos con formación directa en Cuba y una técnica impecable.",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
      fullBio:
        "Sebastián se formó con maestros cubanos durante sus múltiples viajes a la isla, donde absorbió la esencia de la timba y los ritmos afrocubanos. Su conocimiento profundo de la percusión y los patrones rítmicos le permite transmitir no solo los pasos sino también la cultura y el sentir de estos estilos. Sus clases son una inmersión completa en el mundo afrocubano, con énfasis en la improvisación y la expresión personal.",
      specialties: ["Timba Cubana", "Afrosalsa", "Rumba"],
      achievements: ["Estudios en la Escuela Nacional de Arte de La Habana", "Fundador del colectivo Timba Viva"],
      schedule: ["Martes: 7:30 pm - 8:30 pm (Timba/Afrosalsa)", "Viernes: 7:30 pm - 8:30 pm (Rumba Tropical)"],
    },
  ]

  const toggleInstructor = (index: number) => {
    if (activeInstructor === index) {
      setActiveInstructor(null)
    } else {
      setActiveInstructor(index)
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#34485F] py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="liquid-shape liquid-shape-1"></div>
        <div className="liquid-shape liquid-shape-2"></div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium mb-4">
            Nuestro equipo
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Nuestros Instructores</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Conoce al equipo de profesionales que te guiará en tu viaje por el mundo del baile.
          </p>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden relative group">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#34485F]/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#34485F]">{instructor.name}</h3>
                  <p className="text-[#E77A50] font-medium mb-3">{instructor.role}</p>
                  <p className="text-[#34485F]/80 mb-4">{instructor.bio}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <SocialLink href={instructor.social.instagram} icon={<Instagram size={18} />} />
                      <SocialLink href={instructor.social.facebook} icon={<Facebook size={18} />} />
                      <SocialLink href={instructor.social.twitter} icon={<Twitter size={18} />} />
                    </div>
                    <button
                      onClick={() => toggleInstructor(index)}
                      className="text-[#34485F] hover:text-[#E77A50] text-sm font-medium transition-colors"
                    >
                      {activeInstructor === index ? "Menos información" : "Más información"}
                    </button>
                  </div>
                </div>

                {/* Expanded Information */}
                {activeInstructor === index && (
                  <div className="p-6 pt-0 animate-fadeIn">
                    <div className="border-t border-[#E0E0E0] pt-4 mt-4">
                      <div className="bg-white p-4 rounded-lg mb-4">
                        <h4 className="font-medium text-[#34485F] mb-2">Biografía completa</h4>
                        <p className="text-[#34485F]/80 text-sm">{instructor.fullBio}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-medium text-[#34485F] mb-2">Especialidades</h4>
                          <ul className="list-disc list-inside text-[#34485F]/80 text-sm space-y-1">
                            {instructor.specialties.map((specialty, i) => (
                              <li key={i}>{specialty}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-medium text-[#34485F] mb-2">Logros</h4>
                          <ul className="list-disc list-inside text-[#34485F]/80 text-sm space-y-1">
                            {instructor.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg mt-4">
                        <h4 className="font-medium text-[#34485F] mb-2">Horarios de clase</h4>
                        <div className="flex items-start">
                          <Calendar className="h-5 w-5 text-[#E77A50] mr-2 flex-shrink-0 mt-0.5" />
                          <ul className="text-[#34485F]/80 text-sm space-y-1">
                            {instructor.schedule.map((time, i) => (
                              <li key={i}>{time}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#D1DDC4]/30 relative overflow-hidden">
        <div className="liquid-shape liquid-shape-1"></div>
        <div className="liquid-shape liquid-shape-2"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="bg-[#34485F] rounded-xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Eres instructor de baile?</h2>
                <p className="mb-6">
                  Estamos siempre en búsqueda de talento para unirse a nuestro equipo. Si tienes experiencia como
                  instructor y te apasiona enseñar, nos encantaría conocerte.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckItem text="Ambiente de trabajo colaborativo y creativo" />
                  </li>
                  <li className="flex items-start">
                    <CheckItem text="Oportunidades de crecimiento profesional" />
                  </li>
                  <li className="flex items-start">
                    <CheckItem text="Instalaciones y equipamiento de primera calidad" />
                  </li>
                </ul>
              </div>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E77A50] text-white rounded-lg hover:bg-[#d06a43] transition-colors whitespace-nowrap"
              >
                Únete a nuestro equipo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactElement }) {
  return (
    <Link
      href={href}
      className="h-8 w-8 rounded-full bg-[#34485F] text-white flex items-center justify-center hover:bg-[#E77A50] transition-colors"
    >
      {icon}
    </Link>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <>
      <span className="h-5 w-5 rounded-full bg-[#E77A50] flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span>{text}</span>
    </>
  )
}
