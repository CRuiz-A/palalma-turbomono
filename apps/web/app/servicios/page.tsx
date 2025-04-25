"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Clock, Users, DollarSign, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

export default function ServiciosPage() {
  const [activeStyle, setActiveStyle] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"estilos" | "horarios" | "precios">("estilos")

  const toggleStyle = (id: string) => {
    if (activeStyle === id) {
      setActiveStyle(null)
    } else {
      setActiveStyle(id)
      // Scroll to the selected style
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const danceStyles = [
    {
      id: "salsa",
      title: "Salsa",
      description:
        "Aprende los movimientos y ritmos de este apasionante baile latino. Nuestras clases de salsa te enseñarán desde los pasos básicos hasta combinaciones avanzadas, giros y figuras.",
      duration: "60 min/clase",
      levels: "Básico, Intermedio",
      price: "Desde $99.000/mes (4 clases)",
      image: "/placeholder.svg?height=600&width=800",
      longDescription:
        "La salsa es un baile dinámico y apasionante que combina ritmos afrocaribeños con influencias latinas. En nuestras clases, aprenderás desde la postura básica y los pasos fundamentales hasta combinaciones complejas, giros y figuras avanzadas. Ofrecemos diferentes modalidades como Salsita, Salsa Fusión, Salsita Caleña, Salsita Ladies y Salsita Parejas, cada una con su propio estilo y técnica. Nuestros instructores certificados como Sandra, Nanda, Yesid, Brandon y Mauro te guiarán según tu nivel de aprendizaje. Las clases incluyen trabajo de técnica, musicalidad y expresión corporal.",
      horarios: [
        "Lunes 6:30 p.m. - Timba/Afrosalsa (Intermedia) con Brandon",
        "Lunes 8:30 p.m. - Salsa Fusión (Intermedia) con Sandra",
        "Martes 6:30 p.m. - Salsita (Básico 2) con Nanda",
        "Martes 7:30 p.m. - Salsita Caleña (Básico) con Yesid",
        "Martes 8:30 p.m. - Salsita (Intermedia) con Sandra",
        "Martes 8:30 p.m. - Salsita Parejas (Intermedia) con Mauro",
        "Miércoles 8:30 p.m. - Salsita Parejas (Básico) con Brandon",
        "Miércoles 8:30 p.m. - Salsa Fusión (Básica) con Sandra",
        "Viernes 7:30 p.m. - Salsita Caleña (Intermedia) con Yesid",
        "Sábado 3:30 p.m. - Salsita Ladies (Intermedia) con Sandra",
        "Sábado 5:00 p.m. - Salsita (Básica) con Henry",
      ],
    },
    {
      id: "bachata",
      title: "Bachata",
      description:
        "Descubre la sensualidad y romanticismo de la bachata. Aprenderás los movimientos de cadera, pasos básicos y figuras que caracterizan a este baile dominicano.",
      duration: "60 min/clase",
      levels: "Básico, Intermedio",
      price: "Desde $99.000/mes (4 clases)",
      image: "/placeholder.svg?height=600&width=800",
      longDescription:
        "La bachata es un baile romántico y sensual originario de República Dominicana. En nuestras clases de Bachatica, aprenderás los movimientos de cadera, pasos básicos y figuras que caracterizan este baile. Ofrecemos clases para todos los niveles, incluyendo Bachatica Ladies para quienes desean enfocarse en la técnica femenina. Nuestros instructores como Sary te guiarán en el aprendizaje de este hermoso baile, enfatizando la conexión con la pareja y la expresión de emociones a través del movimiento. La bachata es perfecta para quienes buscan un baile romántico y expresivo.",
      horarios: ["Viernes 6:30 p.m. - Bachatica Ladies (Básica 2) con Sary", "Sábado 4:30 p.m. - Bachatica (Básica)"],
    },
    {
      id: "pilates",
      title: "Pilates",
      description:
        "Fortalece tu cuerpo y mejora tu postura con nuestras clases de Pilates. Esta disciplina se enfoca en el control muscular, la respiración y la alineación corporal.",
      duration: "60 min/clase",
      levels: "Todos los niveles",
      price: "Desde $99.000/mes (4 clases) o $220.000/mes (PAL ALMA FIT)",
      image: "/placeholder.svg?height=600&width=800",
      longDescription:
        "El Pilates es un sistema de entrenamiento físico diseñado para fortalecer el cuerpo de manera uniforme, con particular énfasis en la musculatura central (core). En nuestras clases, trabajarás en ejercicios que mejoran la postura, el equilibrio y la flexibilidad, mientras desarrollas conciencia corporal y fortaleces los músculos profundos. Nuestros instructores certificados como Sandra y Nelson te guiarán a través de secuencias de movimientos precisos, combinados con técnicas de respiración específicas. El Pilates es ideal para personas de todas las edades y niveles de condición física, y puede ayudar a prevenir lesiones, aliviar dolores crónicos y mejorar el rendimiento físico general.",
      horarios: [
        "Martes 7:00 a.m. - Pilates con Sandra",
        "Martes 5:30 p.m. - Pilates con Sandra",
        "Jueves 7:00 a.m. - Pilates con Sandra",
        "Viernes 6:00 p.m. - Pilates con Nelson",
      ],
    },
    {
      id: "yoga",
      title: "Yoga",
      description:
        "Conecta cuerpo y mente a través de posturas, respiración y meditación. Nuestras clases de yoga te ayudarán a mejorar tu flexibilidad, fuerza y bienestar general.",
      duration: "60-75 min/clase",
      levels: "Todos los niveles",
      price: "Desde $99.000/mes (4 clases) o $220.000/mes (PAL ALMA FIT)",
      image: "/placeholder.svg?height=600&width=800",
      longDescription:
        "El yoga es una práctica milenaria que integra posturas físicas (asanas), técnicas de respiración (pranayama) y meditación para promover el bienestar físico y mental. En nuestras clases, guiadas por nuestro instructor Pedro, aprenderás a moverte con conciencia, desarrollar fuerza y flexibilidad, y cultivar calma interior. El yoga es accesible para todos los niveles, adaptando las posturas según tus necesidades individuales. Esta práctica no solo mejora la condición física, sino que también reduce el estrés, aumenta la concentración y promueve un estilo de vida más equilibrado. Ideal para complementar tu entrenamiento de baile o como práctica independiente para mejorar tu calidad de vida.",
      horarios: [
        "Miércoles 6:30 p.m. - Yoga con Pedro",
        "Viernes 7:00 a.m. - Yoga con Pedro",
        "Sábado 2:30 p.m. - Yoga con Pedro",
      ],
    },
    {
      id: "rumba",
      title: "Rumba Tropical",
      description:
        "Disfruta de una clase llena de energía y ritmos latinos. La Rumba Tropical combina diferentes estilos de baile para una experiencia divertida y dinámica.",
      duration: "60 min/clase",
      levels: "Todos los niveles",
      price: "Desde $99.000/mes (4 clases) o $220.000/mes (PAL ALMA FIT)",
      image: "/placeholder.svg?height=600&width=800",
      longDescription:
        "La Rumba Tropical es una clase energética que fusiona diferentes ritmos latinos como salsa, merengue, cumbia y más. Es perfecta para quienes buscan divertirse mientras hacen ejercicio y aprenden movimientos básicos de varios estilos de baile. Nuestros instructores como Wendy, Rensso y Sandra crean rutinas dinámicas y accesibles para todos los niveles. Esta clase no solo mejora tu condición cardiovascular y coordinación, sino que también te permite liberar estrés mientras te sumerges en la alegría de la música latina. La Rumba Tropical es ideal tanto para principiantes como para bailarines experimentados que quieren mantenerse activos de forma divertida.",
      horarios: [
        "Lunes 7:30 p.m. - Rumba con Wendy",
        "Miércoles 7:00 a.m. - Rumba Tropical (PAL ALMA MAYOR) con Sandra",
        "Miércoles 7:30 p.m. - Rumba Tropical con Rensso",
        "Sábado 9:00 a.m. - Rumba con Wendy",
      ],
    },
    {
      id: "reggaeton",
      title: "Reggaetón",
      description:
        "Aprende los movimientos urbanos más populares con nuestras clases de reggaetón. Desarrollarás ritmo, coordinación y estilo con coreografías dinámicas.",
      duration: "60 min/clase",
      levels: "Intermedio",
      price: "Desde $99.000/mes (4 clases)",
      image: "/placeholder.svg?height=600&width=800",
      longDescription:
        "El Reggaetón es un estilo de baile urbano caracterizado por movimientos enérgicos y sensuales al ritmo de la música urbana latina. En nuestras clases con Juan F., aprenderás coreografías dinámicas que combinan elementos de hip hop, dancehall y ritmos latinos. Esta clase te ayudará a desarrollar coordinación, resistencia y expresión corporal, mientras te diviertes con la música más actual. El Reggaetón es ideal para quienes buscan un estilo contemporáneo y vibrante, permitiéndote expresar tu personalidad a través del movimiento. Nuestras clases de nivel intermedio están diseñadas para quienes ya tienen experiencia básica en baile y quieren llevar sus habilidades al siguiente nivel.",
      horarios: ["Jueves 6:20 p.m. - Reggaetón (Intermedio) con Juan F."],
    },
    {
      id: "ritmos",
      title: "Ritmos Tropicales",
      description:
        "Explora la diversidad de los ritmos latinos en una sola clase. Aprenderás los fundamentos de salsa, merengue, bachata y más, desarrollando versatilidad como bailarín.",
      duration: "60 min/clase",
      levels: "Básico",
      price: "Desde $99.000/mes (4 clases)",
      image: "/placeholder.svg?height=600&width=800",
      longDescription:
        "Nuestra clase de Ritmos Tropicales es una introducción perfecta al mundo de los bailes latinos. Con nuestro instructor Mauro, aprenderás los fundamentos de diversos estilos como salsa, merengue, bachata y cumbia, entre otros. Esta clase está diseñada para desarrollar tu musicalidad y adaptabilidad a diferentes ritmos, proporcionándote una base sólida para especializarte posteriormente en el estilo que más te guste. Los Ritmos Tropicales son ideales para principiantes que quieren explorar varios estilos antes de enfocarse en uno específico, o para quienes disfrutan de la variedad en cada clase. Además de ser divertida, esta clase mejora tu coordinación, ritmo y confianza en la pista de baile.",
      horarios: ["Jueves 7:30 p.m. - Ritmos Tropicales (Básico) con Mauro"],
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#34485F] py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="liquid-shape liquid-shape-1"></div>
        <div className="liquid-shape liquid-shape-2"></div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium mb-4">
            Descubre tu pasión
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Nuestras Clases de Baile</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
            Descubre todos los estilos que ofrecemos para principiantes, intermedios y avanzados.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab("estilos")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "estilos" ? "bg-[#E77A50] text-white" : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Estilos de Baile
            </button>
            <button
              onClick={() => setActiveTab("horarios")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "horarios" ? "bg-[#E77A50] text-white" : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Horarios
            </button>
            <button
              onClick={() => setActiveTab("precios")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === "precios" ? "bg-[#E77A50] text-white" : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Planes y Precios
            </button>
          </div>

          {/* Quick Navigation for Styles */}
          {activeTab === "estilos" && (
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {danceStyles.map((style) => (
                <a
                  key={style.id}
                  href={`#${style.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    toggleStyle(style.id)
                  }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-colors"
                >
                  {style.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Dance Styles Content */}
      {activeTab === "estilos" && (
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            {danceStyles.map((style, index) => (
              <div
                key={style.id}
                id={style.id}
                className={`mb-16 ${index !== danceStyles.length - 1 ? "border-b border-[#E0E0E0] pb-16" : ""}`}
              >
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className={`flex-1 order-2 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <h2 className="text-3xl font-bold text-[#34485F] mb-4">{style.title}</h2>
                    <p className="text-[#34485F]/80 mb-6">{style.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-[#E77A50] mr-2" />
                        <span className="text-[#34485F]/80">{style.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-[#E77A50] mr-2" />
                        <span className="text-[#34485F]/80">{style.levels}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-[#E77A50] mr-2" />
                        <span className="text-[#34485F]/80">{style.price}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <Link
                        href="/agendar"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#E77A50] text-white rounded-lg hover:bg-[#d06a43] transition-colors"
                      >
                        Agendar clase <ArrowRight size={18} />
                      </Link>
                      <button
                        onClick={() => toggleStyle(style.id)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#34485F] text-white rounded-lg hover:bg-[#2a3a4d] transition-colors"
                      >
                        {activeStyle === style.id ? (
                          <>
                            Menos información <ChevronUp size={18} />
                          </>
                        ) : (
                          <>
                            Más información <ChevronDown size={18} />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Expanded Information */}
                    {activeStyle === style.id && (
                      <div className="bg-[#F5F5F5] p-6 rounded-xl animate-fadeIn">
                        <h3 className="text-xl font-semibold text-[#34485F] mb-3">Sobre {style.title}</h3>
                        <p className="text-[#34485F]/80 mb-4">{style.longDescription}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-medium text-[#34485F] mb-2">Beneficios</h4>
                            <ul className="list-disc list-inside text-[#34485F]/80 space-y-1">
                              <li>Mejora tu condición física y coordinación</li>
                              <li>Desarrolla tu expresión artística</li>
                              <li>Aumenta tu confianza y autoestima</li>
                              <li>Conoce personas con intereses similares</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-medium text-[#34485F] mb-2">Horarios disponibles</h4>
                            <ul className="text-[#34485F]/80 space-y-1">
                              {style.horarios?.map((horario, index) => (
                                <li key={index}>{horario}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={`flex-1 order-1 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                    <div className="relative w-full aspect-square md:aspect-video rounded-xl overflow-hidden shadow-lg group">
                      <Image
                        src={style.image || "/placeholder.svg"}
                        alt={`Clase de ${style.title}`}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#34485F]/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Horarios Content */}
      {activeTab === "horarios" && (
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#34485F] mb-4">Horario General de Clases</h2>
              <p className="text-[#34485F]/80 max-w-2xl mx-auto mb-8">
                Este horario indica la hora de inicio de cada clase, no la hora de finalización.
              </p>
            </div>

            {/* Horario Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className="px-5 py-2 text-sm font-medium text-[#34485F] bg-[#D1DDC4] rounded-l-lg hover:bg-[#D1DDC4]/80 focus:z-10 focus:ring-2 focus:ring-[#E77A50]"
                  onClick={() => document.getElementById("lun-mie")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Lunes - Miércoles
                </button>
                <button
                  type="button"
                  className="px-5 py-2 text-sm font-medium text-[#34485F] bg-[#D1DDC4] rounded-r-lg hover:bg-[#D1DDC4]/80 focus:z-10 focus:ring-2 focus:ring-[#E77A50]"
                  onClick={() => document.getElementById("jue-sab")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Jueves - Sábado
                </button>
              </div>
            </div>

            {/* Horario Lunes-Miércoles */}
            <div id="lun-mie" className="mb-16">
              <h3 className="text-2xl font-bold text-[#34485F] mb-6 text-center">Lunes a Miércoles</h3>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#E0E0E0]">
                    <thead className="bg-[#D1DDC4]">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-[#34485F]">Hora</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-[#34485F]">Lunes</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-[#34485F]">Martes</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-[#34485F]">Miércoles</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E0E0E0]">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">7:00 a.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">PILATES</div>
                          <div className="text-[#E77A50]">(SANDRA)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">RUMBA TROPICAL</div>
                          <div className="text-[#E77A50]">(PAL ALMA MAYOR) (SANDRA)</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">8:00 a.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">4:30 p.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">5:30 p.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">PILATES</div>
                          <div className="text-[#E77A50]">(SANDRA)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">6:30 p.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">TIMBA/AFROSALSA</div>
                          <div className="text-[#E77A50]">(INTERMEDIA) (BRANDON)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">SALSITA</div>
                          <div className="text-[#E77A50]">(BÁSICO 2) (NANDA)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">YOGA</div>
                          <div className="text-[#E77A50]">(PEDRO)</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">7:30 p.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">RUMBA</div>
                          <div className="text-[#E77A50]">(WENDY)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">SALSITA CALEÑA</div>
                          <div className="text-[#E77A50]">(BÁSICO) (YESID)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">RUMBA TROPICAL</div>
                          <div className="text-[#E77A50]">(RENSSO)</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">8:30 p.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">SALSA FUSIÓN</div>
                          <div className="text-[#E77A50]">(INTERMEDIA) (SANDRA)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">SALSITA</div>
                          <div className="text-[#E77A50]">(INTERMEDIA) (SANDRA)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">SALSITA PAREJAS</div>
                          <div className="text-[#E77A50]">(BÁSICO) (BRANDON)</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">SALSITA PAREJAS</div>
                          <div className="text-[#E77A50]">(INTERMEDIA) (MAURO)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">SALSA FUSIÓN</div>
                          <div className="text-[#E77A50]">(BÁSICA) (SANDRA)</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Horario Jueves-Sábado */}
            <div id="jue-sab">
              <h3 className="text-2xl font-bold text-[#34485F] mb-6 text-center">Jueves a Sábado</h3>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#E0E0E0]">
                    <thead className="bg-[#D1DDC4]">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-[#34485F]">Hora</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-[#34485F]">Jueves</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-[#34485F]">Viernes</th>
                        <th className="px-4 py-3 text-center text-sm font-medium text-[#34485F]">Sábado</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E0E0E0]">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">7:00 a.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">PILATES</div>
                          <div className="text-[#E77A50]">(SANDRA)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">YOGA</div>
                          <div className="text-[#E77A50]">(PEDRO)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">8:45 a.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">9:00 a.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">RUMBA</div>
                          <div className="text-[#E77A50]">(WENDY)</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">2:30 p.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">YOGA</div>
                          <div className="text-[#E77A50]">(PEDRO)</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">3:30 p.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">SALSITA LADIES</div>
                          <div className="text-[#E77A50]">(INTERMEDIA) (SANDRA)</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">4:00 p.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">4:30 p.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">BACHATICA</div>
                          <div className="text-[#E77A50]">4:00 p.m. (BÁSICA)</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">6:00 p.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">PILATES</div>
                          <div className="text-[#E77A50]">6:00 p.m. (NELSON)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">SALSITA</div>
                          <div className="text-[#E77A50]">5:00 p.m. (BÁSICA) (HENRY)</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">6:30 p.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">REGGAETÓN</div>
                          <div className="text-[#E77A50]">6:20 P.M. (INTERMEDIO) (JUAN F.)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">BACHATICA LADIES</div>
                          <div className="text-[#E77A50]">6:30 p.m. (BÁSICA 2) (SARY)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]">7:30 p.m.</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">RITMOS TROPICALES</div>
                          <div className="text-[#E77A50]">(BÁSICO) (MAURO)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">SALSITA CALEÑA</div>
                          <div className="text-[#E77A50]">(INTERMEDIA) (YESID)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">SALSITA BÁSICA</div>
                          <div className="text-[#E77A50]">(BÁSICO 1) (NANDA)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]">
                          <div className="font-medium">SALSITA LADIES</div>
                          <div className="text-[#E77A50]">(BÁSICO 2) (SANDRA)</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-[#34485F]"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Planes y Precios Content */}
      {activeTab === "precios" && (
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#34485F] mb-4">Planes y Precios</h2>
              <p className="text-[#34485F]/80 max-w-2xl mx-auto mb-8">
                Ofrecemos diferentes opciones para que elijas la que mejor se adapte a tus necesidades.
              </p>
            </div>

            {/* Planes Tabs */}
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              <button
                onClick={() => document.getElementById("tiquetera")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-[#34485F] text-white rounded-lg hover:bg-[#2a3a4d] transition-colors"
              >
                Tiquetera
              </button>
              <button
                onClick={() => document.getElementById("pago-por-clases")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-[#34485F] text-white rounded-lg hover:bg-[#2a3a4d] transition-colors"
              >
                Pago por Clases
              </button>
              <button
                onClick={() => document.getElementById("paquetes")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-[#34485F] text-white rounded-lg hover:bg-[#2a3a4d] transition-colors"
              >
                Paquetes
              </button>
              <button
                onClick={() => document.getElementById("full-pass")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-[#34485F] text-white rounded-lg hover:bg-[#2a3a4d] transition-colors"
              >
                Full Pass
              </button>
            </div>

            {/* Tiquetera */}
            <div id="tiquetera" className="mb-16">
              <h3 className="text-2xl font-bold text-[#34485F] mb-6">Tiquetera</h3>
              <div className="bg-[#34485F] text-white p-8 rounded-xl">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">TIQUETERA</h4>
                  <p className="text-lg">Toma clases aleatorias del horario. Requieren reserva previa.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                  <div className="bg-[#E77A50] p-6 rounded-xl">
                    <h5 className="text-xl font-bold mb-2">1 clase</h5>
                    <p className="text-3xl font-bold mb-2">$27.000</p>
                    <p className="text-sm mb-1">Descuento por pareja o varios:</p>
                    <p className="text-xl font-bold mb-2">$25.000</p>
                    <p className="text-sm">Vigencia: 24 horas</p>
                  </div>
                  <div className="bg-[#34485F] border border-white/20 p-6 rounded-xl">
                    <h5 className="text-xl font-bold mb-2">8 clases</h5>
                    <p className="text-3xl font-bold mb-2">$205.000</p>
                    <p className="text-sm">Vigencia: 40 días</p>
                  </div>
                  <div className="bg-[#34485F] border border-white/20 p-6 rounded-xl">
                    <h5 className="text-xl font-bold mb-2">12 clases</h5>
                    <p className="text-3xl font-bold mb-2">$290.000</p>
                    <p className="text-sm">Vigencia: 45 días</p>
                  </div>
                  <div className="bg-[#34485F] border border-white/20 p-6 rounded-xl">
                    <h5 className="text-xl font-bold mb-2">20 clases</h5>
                    <p className="text-3xl font-bold mb-2">$450.000</p>
                    <p className="text-sm">Vigencia: 60 días</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-[#F5F5F5] p-6 rounded-xl">
                <Link
                  href="/agendar"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E77A50] text-white rounded-lg hover:bg-[#d06a43] transition-colors"
                >
                  Reservar ahora <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Pago por Clases */}
            <div id="pago-por-clases" className="mb-16">
              <h3 className="text-2xl font-bold text-[#34485F] mb-6">Pago por Clases</h3>
              <div className="bg-[#34485F] text-white p-8 rounded-xl">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">PAGO POR CLASES</h4>
                  <p className="text-lg">
                    Toma clases aleatorias del horario durante un mes. Requieren reserva previa.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-[#34485F] border border-white/20 p-6 rounded-xl">
                    <h5 className="text-xl font-bold mb-2">4 clases</h5>
                    <p className="text-3xl font-bold mb-2">$99.000</p>
                    <p className="text-sm mb-1">Descuento por pareja o varios:</p>
                    <p className="text-xl font-bold mb-2">$90.000</p>
                    <p className="text-sm">Por persona</p>
                  </div>
                  <div className="bg-[#34485F] border border-white/20 p-6 rounded-xl">
                    <h5 className="text-xl font-bold mb-2">6 clases</h5>
                    <p className="text-3xl font-bold mb-2">$143.000</p>
                    <p className="text-sm mb-1">Descuento por pareja o varios:</p>
                    <p className="text-xl font-bold mb-2">$130.000</p>
                    <p className="text-sm">Por persona</p>
                  </div>
                  <div className="bg-[#34485F] border border-white/20 p-6 rounded-xl">
                    <h5 className="text-xl font-bold mb-2">8 clases</h5>
                    <p className="text-3xl font-bold mb-2">$187.000</p>
                    <p className="text-sm mb-1">Descuento por pareja o varios:</p>
                    <p className="text-xl font-bold mb-2">$170.000</p>
                    <p className="text-sm">Por persona</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#34485F] border border-white/20 p-6 rounded-xl">
                    <h5 className="text-xl font-bold mb-2">12 clases</h5>
                    <p className="text-3xl font-bold mb-2">$264.000</p>
                    <p className="text-sm mb-1">Descuento por pareja o varios:</p>
                    <p className="text-xl font-bold mb-2">$240.000</p>
                    <p className="text-sm">Por persona</p>
                  </div>
                  <div className="bg-[#34485F] border border-white/20 p-6 rounded-xl">
                    <h5 className="text-xl font-bold mb-2">16 clases</h5>
                    <p className="text-3xl font-bold mb-2">$330.000</p>
                    <p className="text-sm mb-1">Descuento por pareja o varios:</p>
                    <p className="text-xl font-bold mb-2">$300.000</p>
                    <p className="text-sm">Por persona</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-[#F5F5F5] p-6 rounded-xl">
                <Link
                  href="/agendar"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E77A50] text-white rounded-lg hover:bg-[#d06a43] transition-colors"
                >
                  Reservar ahora <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Paquetes */}
            <div id="paquetes" className="mb-16">
              <h3 className="text-2xl font-bold text-[#34485F] mb-6">Paquetes</h3>
              <div className="bg-[#34485F] text-white p-8 rounded-xl">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">PAQUETES</h4>
                  <p className="text-lg">Clases con horarios fijos, establecidos antes de iniciar el paquete.</p>
                </div>

                <div className="mb-8">
                  <div className="border-b border-white/20 pb-6 mb-6">
                    <h5 className="text-2xl font-bold mb-2">PAL ALMA FIT</h5>
                    <p className="text-3xl font-bold text-[#E77A50] mb-2">$220.000</p>
                    <p className="mb-2">Mensualidad: por 16 clases fijas en total.</p>
                    <p className="text-3xl font-bold text-[#E77A50] mb-2">$280.000</p>
                    <p className="mb-4">Full Pass fit (Ingreso a todas las clases fit por un mes).</p>
                    <div className="bg-[#D1DDC4]/20 p-4 rounded-lg">
                      <p>Elige entre Yoga, Pilates y Rumba.</p>
                    </div>
                  </div>

                  <div className="border-b border-white/20 pb-6 mb-6">
                    <h5 className="text-2xl font-bold mb-2">Yo Quiero Aprender a Bailar</h5>
                    <p className="text-3xl font-bold text-[#E77A50] mb-2">$240.000</p>
                    <p className="mb-2">Mensualidad por 12 clases fijas en total.</p>
                    <p className="text-xl font-bold text-[#E77A50] mb-4">PROMO FEBRERO: $220.000</p>
                    <div className="bg-[#D1DDC4]/20 p-4 rounded-lg">
                      <p>
                        Elige entre Salsa, Bachata, Reggaetón, o la clase de Ritmos Tropicales. Este paquete también
                        incluye acceso a clases fit.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-2xl font-bold mb-2">Parejitas PAL ALMA</h5>
                    <p className="text-3xl font-bold text-[#E77A50] mb-2">$220.000 cada uno</p>
                    <p className="mb-2">Mensualidad por 12 clases fijas en total.</p>
                    <p className="text-xl font-bold text-[#E77A50] mb-4">PROMO FEBRERO: $200.000 cada uno</p>
                    <div className="bg-[#D1DDC4]/20 p-4 rounded-lg">
                      <p>Elige entre Salsa Parejas, Bachatica o una clase individual básica.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-[#F5F5F5] p-6 rounded-xl">
                <Link
                  href="/agendar"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E77A50] text-white rounded-lg hover:bg-[#d06a43] transition-colors"
                >
                  Reservar ahora <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Full Pass */}
            <div id="full-pass">
              <h3 className="text-2xl font-bold text-[#34485F] mb-6">Full Pass</h3>
              <div className="bg-[#34485F] text-white p-8 rounded-xl">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">FULL PASS</h4>
                  <p className="text-lg mb-4">
                    Acceso a todas las clases del horario: fit, y a las clases básicas e intermedias según su nivel.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div className="bg-[#34485F]/50 p-4 rounded-lg text-center">
                    <h5 className="text-xl font-bold mb-1">Mes</h5>
                    <p className="text-2xl font-bold text-[#E77A50]">$350.000</p>
                  </div>
                  <div className="bg-[#34485F]/50 p-4 rounded-lg text-center">
                    <h5 className="text-xl font-bold mb-1">Trimestre</h5>
                    <p className="text-2xl font-bold text-[#E77A50]">$945.000</p>
                  </div>
                  <div className="bg-[#34485F]/50 p-4 rounded-lg text-center">
                    <h5 className="text-xl font-bold mb-1">Semestre</h5>
                    <p className="text-2xl font-bold text-[#E77A50]">$1.680.000</p>
                  </div>
                  <div className="bg-[#34485F]/50 p-4 rounded-lg text-center">
                    <h5 className="text-xl font-bold mb-1">Año</h5>
                    <p className="text-2xl font-bold text-[#E77A50]">$2.940.000</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-[#F5F5F5] p-6 rounded-xl">
                <Link
                  href="/agendar"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E77A50] text-white rounded-lg hover:bg-[#d06a43] transition-colors"
                >
                  Reservar ahora <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative bg-[#E77A50] py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="liquid-shape liquid-shape-1"></div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para moverte al ritmo?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Tu primera clase es gratis. Ven a conocernos y descubre el estilo que más te gusta.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#E77A50] rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contactar ahora
            </Link>
            <Link
              href="/agendar"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#34485F] text-white rounded-lg hover:bg-[#2a3a4d] transition-colors"
            >
              Agendar clase <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
