"use client"

import { useState } from "react"
import { Calendar, Clock, CheckCircle, Check } from "lucide-react"
import Image from "next/image"

export default function AgendarPage() {
  const [selectedPackageType, setSelectedPackageType] = useState<"tiquetera" | "mensual" | "paquetes" | "fullpass">(
    "tiquetera",
  )
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  // Función para manejar la selección de un plan
  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId)
    // Desplazarse al formulario de reserva
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
  }

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
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#34485F] py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="liquid-shape liquid-shape-1"></div>
        <div className="liquid-shape liquid-shape-2"></div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium mb-4">
            Reserva tu espacio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Agenda tu clase</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Reserva tu primera clase gratis o inscríbete en nuestros programas regulares.
          </p>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#D1DDC4] px-4 py-1 rounded-full text-[#34485F] text-sm font-medium mb-2">
              Proceso simple
            </span>
            <h2 className="text-3xl font-bold text-[#34485F] mb-4">Proceso de reserva</h2>
            <p className="text-[#34485F]/80 max-w-2xl mx-auto">
              Sigue estos sencillos pasos para agendar tu clase con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Elige tu estilo",
                description: "Selecciona el estilo de baile que deseas aprender de nuestra variedad de opciones.",
                icon: <CheckCircle className="h-12 w-12 text-[#E77A50]" />,
              },
              {
                title: "Selecciona fecha y hora",
                description: "Escoge el día y horario que mejor se adapte a tu agenda.",
                icon: <Calendar className="h-12 w-12 text-[#E77A50]" />,
              },
              {
                title: "Confirma tu reserva",
                description: "Completa el formulario con tus datos y asegura tu lugar en la clase.",
                icon: <Clock className="h-12 w-12 text-[#E77A50]" />,
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-[#F5F5F5] rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-[#34485F] mb-2">{step.title}</h3>
                <p className="text-[#34485F]/80">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Class Packages */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#E77A50]/20 px-4 py-1 rounded-full text-[#E77A50] text-sm font-medium mb-2">
                Planes flexibles
              </span>
              <h2 className="text-3xl font-bold text-[#34485F] mb-4">Nuestros paquetes</h2>
              <p className="text-[#34485F]/80 max-w-2xl mx-auto">Elige el plan que mejor se adapte a tus necesidades</p>
            </div>

            {/* Package Type Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <button
                onClick={() => setSelectedPackageType("tiquetera")}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedPackageType === "tiquetera"
                    ? "bg-[#E77A50] text-white"
                    : "bg-[#F5F5F5] text-[#34485F] hover:bg-[#D1DDC4]"
                }`}
              >
                Tiquetera
              </button>
              <button
                onClick={() => setSelectedPackageType("mensual")}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedPackageType === "mensual"
                    ? "bg-[#E77A50] text-white"
                    : "bg-[#F5F5F5] text-[#34485F] hover:bg-[#D1DDC4]"
                }`}
              >
                Pago por Clases
              </button>
              <button
                onClick={() => setSelectedPackageType("paquetes")}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedPackageType === "paquetes"
                    ? "bg-[#E77A50] text-white"
                    : "bg-[#F5F5F5] text-[#34485F] hover:bg-[#D1DDC4]"
                }`}
              >
                Paquetes
              </button>
              <button
                onClick={() => setSelectedPackageType("fullpass")}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedPackageType === "fullpass"
                    ? "bg-[#E77A50] text-white"
                    : "bg-[#F5F5F5] text-[#34485F] hover:bg-[#D1DDC4]"
                }`}
              >
                Full Pass
              </button>
            </div>

            {/* Tiquetera Plans */}
            {selectedPackageType === "tiquetera" && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    id: "tiquetera-1",
                    title: "1 clase",
                    price: "$27.000",
                    discountPrice: "$25.000",
                    discountLabel: "Descuento por pareja o varios:",
                    validity: "Vigencia: 24 horas",
                    highlight: true,
                  },
                  {
                    id: "tiquetera-8",
                    title: "8 clases",
                    price: "$205.000",
                    validity: "Vigencia: 40 días",
                  },
                  {
                    id: "tiquetera-12",
                    title: "12 clases",
                    price: "$290.000",
                    validity: "Vigencia: 45 días",
                  },
                  {
                    id: "tiquetera-20",
                    title: "20 clases",
                    price: "$450.000",
                    validity: "Vigencia: 60 días",
                  },
                ].map((plan) => (
                  <div
                    key={plan.id}
                    className={`${
                      plan.highlight ? "bg-[#E77A50] text-white" : "bg-[#34485F] text-white"
                    } p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                      selectedPlan === plan.id ? "ring-4 ring-[#D1DDC4]" : ""
                    }`}
                  >
                    <h4 className="text-2xl font-bold mb-1">{plan.title}</h4>
                    <p className="text-3xl font-bold mb-4">{plan.price}</p>
                    {plan.discountLabel && (
                      <>
                        <p className="text-sm mb-2">{plan.discountLabel}</p>
                        <p className="text-xl font-bold mb-2">{plan.discountPrice}</p>
                      </>
                    )}
                    <p className="text-sm mb-6">{plan.validity}</p>
                    <button
                      onClick={() => handleSelectPlan(plan.id)}
                      className={`w-full py-2 rounded-lg font-medium transition-colors ${
                        selectedPlan === plan.id
                          ? "bg-[#D1DDC4] text-[#34485F]"
                          : plan.highlight
                            ? "bg-white text-[#E77A50] hover:bg-[#D1DDC4] hover:text-[#34485F]"
                            : "bg-[#E77A50] text-white hover:bg-[#d06a43]"
                      }`}
                    >
                      {selectedPlan === plan.id ? (
                        <span className="flex items-center justify-center">
                          <Check size={18} className="mr-2" /> Seleccionado
                        </span>
                      ) : (
                        "Seleccionar"
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Pago por Clases Plans */}
            {selectedPackageType === "mensual" && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {[
                    {
                      id: "mensual-4",
                      title: "4 clases",
                      price: "$99.000",
                      discountPrice: "$90.000",
                      discountLabel: "Descuento por pareja o varios:",
                      note: "Por persona",
                    },
                    {
                      id: "mensual-6",
                      title: "6 clases",
                      price: "$143.000",
                      discountPrice: "$130.000",
                      discountLabel: "Descuento por pareja o varios:",
                      note: "Por persona",
                    },
                    {
                      id: "mensual-8",
                      title: "8 clases",
                      price: "$187.000",
                      discountPrice: "$170.000",
                      discountLabel: "Descuento por pareja o varios:",
                      note: "Por persona",
                    },
                  ].map((plan) => (
                    <div
                      key={plan.id}
                      className={`bg-[#34485F] text-white p-6 rounded-xl border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                        selectedPlan === plan.id ? "ring-4 ring-[#D1DDC4]" : ""
                      }`}
                    >
                      <h4 className="text-2xl font-bold mb-1">{plan.title}</h4>
                      <p className="text-3xl font-bold text-[#E77A50] mb-2">{plan.price}</p>
                      <p className="text-sm mb-1">{plan.discountLabel}</p>
                      <p className="text-xl font-bold mb-1">{plan.discountPrice}</p>
                      <p className="text-sm mb-6">{plan.note}</p>
                      <button
                        onClick={() => handleSelectPlan(plan.id)}
                        className={`w-full py-2 rounded-lg font-medium transition-colors ${
                          selectedPlan === plan.id
                            ? "bg-[#D1DDC4] text-[#34485F]"
                            : "bg-[#E77A50] text-white hover:bg-[#d06a43]"
                        }`}
                      >
                        {selectedPlan === plan.id ? (
                          <span className="flex items-center justify-center">
                            <Check size={18} className="mr-2" /> Seleccionado
                          </span>
                        ) : (
                          "Seleccionar"
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      id: "mensual-12",
                      title: "12 clases",
                      price: "$264.000",
                      discountPrice: "$240.000",
                      discountLabel: "Descuento por pareja o varios:",
                      note: "Por persona",
                    },
                    {
                      id: "mensual-16",
                      title: "16 clases",
                      price: "$330.000",
                      discountPrice: "$300.000",
                      discountLabel: "Descuento por pareja o varios:",
                      note: "Por persona",
                    },
                  ].map((plan) => (
                    <div
                      key={plan.id}
                      className={`bg-[#34485F] text-white p-6 rounded-xl border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                        selectedPlan === plan.id ? "ring-4 ring-[#D1DDC4]" : ""
                      }`}
                    >
                      <h4 className="text-2xl font-bold mb-1">{plan.title}</h4>
                      <p className="text-3xl font-bold text-[#E77A50] mb-2">{plan.price}</p>
                      <p className="text-sm mb-1">{plan.discountLabel}</p>
                      <p className="text-xl font-bold mb-1">{plan.discountPrice}</p>
                      <p className="text-sm mb-6">{plan.note}</p>
                      <button
                        onClick={() => handleSelectPlan(plan.id)}
                        className={`w-full py-2 rounded-lg font-medium transition-colors ${
                          selectedPlan === plan.id
                            ? "bg-[#D1DDC4] text-[#34485F]"
                            : "bg-[#E77A50] text-white hover:bg-[#d06a43]"
                        }`}
                      >
                        {selectedPlan === plan.id ? (
                          <span className="flex items-center justify-center">
                            <Check size={18} className="mr-2" /> Seleccionado
                          </span>
                        ) : (
                          "Seleccionar"
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Paquetes Plans */}
            {selectedPackageType === "paquetes" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    id: "paquete-fit",
                    title: "PAL ALMA FIT",
                    price: "$220.000",
                    description: "Mensualidad: por 16 clases fijas en total.",
                    extraPrice: "$280.000",
                    extraDescription: "Full Pass fit (Ingreso a todas las clases fit por un mes).",
                    note: "Elige entre Yoga, Pilates y Rumba.",
                  },
                  {
                    id: "paquete-bailar",
                    title: "Yo Quiero Aprender a Bailar",
                    price: "$240.000",
                    description: "Mensualidad por 12 clases fijas en total.",
                    promo: "PROMO FEBRERO: $220.000",
                    note: "Elige entre Salsa, Bachata, Reggaetón, o la clase de Ritmos Tropicales. Este paquete también incluye acceso a clases fit.",
                  },
                  {
                    id: "paquete-parejitas",
                    title: "Parejitas PAL ALMA",
                    price: "$220.000 cada uno",
                    description: "Mensualidad por 12 clases fijas en total.",
                    promo: "PROMO FEBRERO: $200.000 cada uno",
                    note: "Elige entre Salsa Parejas, Bachatica o una clase individual básica.",
                    fullWidth: true,
                  },
                ].map((plan) => (
                  <div
                    key={plan.id}
                    className={`bg-[#34485F] text-white p-6 rounded-xl border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                      selectedPlan === plan.id ? "ring-4 ring-[#D1DDC4]" : ""
                    } ${plan.fullWidth ? "md:col-span-2" : ""}`}
                  >
                    <h4 className="text-2xl font-bold mb-2">{plan.title}</h4>
                    <p className="text-3xl font-bold text-[#E77A50] mb-2">{plan.price}</p>
                    <p className="text-sm mb-4">{plan.description}</p>
                    {plan.promo && <p className="text-lg font-bold text-[#E77A50] mb-4">{plan.promo}</p>}
                    {plan.extraPrice && (
                      <>
                        <p className="text-xl font-bold text-[#E77A50] mb-2">{plan.extraPrice}</p>
                        <p className="text-sm mb-4">{plan.extraDescription}</p>
                      </>
                    )}
                    <div className="bg-[#D1DDC4]/20 p-4 rounded-lg mb-6">
                      <p className="text-white">{plan.note}</p>
                    </div>
                    <button
                      onClick={() => handleSelectPlan(plan.id)}
                      className={`w-full py-2 rounded-lg font-medium transition-colors ${
                        selectedPlan === plan.id
                          ? "bg-[#D1DDC4] text-[#34485F]"
                          : "bg-[#E77A50] text-white hover:bg-[#d06a43]"
                      }`}
                    >
                      {selectedPlan === plan.id ? (
                        <span className="flex items-center justify-center">
                          <Check size={18} className="mr-2" /> Seleccionado
                        </span>
                      ) : (
                        "Seleccionar"
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Full Pass Plans */}
            {selectedPackageType === "fullpass" && (
              <div className="bg-[#34485F] text-white p-6 rounded-xl border border-white/20 shadow-md">
                <h4 className="text-3xl font-bold mb-4 text-center">FULL PASS</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  {[
                    {
                      id: "fullpass-mes",
                      title: "Mes",
                      price: "$350.000",
                    },
                    {
                      id: "fullpass-trimestre",
                      title: "Trimestre",
                      price: "$945.000",
                    },
                    {
                      id: "fullpass-semestre",
                      title: "Semestre",
                      price: "$1.680.000",
                    },
                    {
                      id: "fullpass-año",
                      title: "Año",
                      price: "$2.940.000",
                    },
                  ].map((plan) => (
                    <div
                      key={plan.id}
                      className={`text-center p-4 rounded-lg ${
                        selectedPlan === plan.id ? "bg-[#D1DDC4]/30 ring-2 ring-[#D1DDC4]" : "hover:bg-[#D1DDC4]/10"
                      } cursor-pointer transition-all duration-300`}
                      onClick={() => handleSelectPlan(plan.id)}
                    >
                      <h5 className="text-xl font-bold mb-1">{plan.title}</h5>
                      <p className="text-2xl font-bold text-[#E77A50]">{plan.price}</p>
                      {selectedPlan === plan.id && (
                        <div className="mt-2 flex justify-center">
                          <Check size={18} className="text-[#D1DDC4]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="bg-[#D1DDC4]/20 p-4 rounded-lg text-center">
                  <p className="text-white">
                    Acceso a todas las clases del horario: fit, y a las clases básicas e intermedias según su nivel.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Booking Form */}
          <div id="booking-form" className="bg-[#F5F5F5] p-8 rounded-xl shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#34485F] mb-6">Formulario de reserva</h2>
            {selectedPlan ? (
              <div className="mb-6 p-4 bg-[#D1DDC4]/30 rounded-lg">
                <p className="text-[#34485F] font-medium">
                  Plan seleccionado: <span className="text-[#E77A50] font-bold">{selectedPlan}</span>
                </p>
              </div>
            ) : (
              <div className="mb-6 p-4 bg-yellow-100 rounded-lg">
                <p className="text-yellow-800">Por favor, selecciona un plan antes de completar el formulario.</p>
              </div>
            )}
            <form className="space-y-6">
              {/* Dance Style Selection */}
              <div>
                <label htmlFor="style" className="block text-sm font-medium text-[#34485F] mb-1">
                  Estilo de baile
                </label>
                <select
                  id="style"
                  name="style"
                  className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#E77A50] focus:border-[#E77A50] transition-colors"
                  required
                >
                  <option value="">Selecciona un estilo</option>
                  <option value="salsa">Salsa</option>
                  <option value="hiphop">Hip Hop</option>
                  <option value="ballet">Ballet</option>
                  <option value="contemporaneo">Contemporáneo</option>
                  <option value="tango">Tango</option>
                  <option value="breakdance">Breakdance</option>
                </select>
              </div>

              {/* Level Selection */}
              <div>
                <label htmlFor="level" className="block text-sm font-medium text-[#34485F] mb-1">
                  Nivel
                </label>
                <select
                  id="level"
                  name="level"
                  className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#E77A50] focus:border-[#E77A50] transition-colors"
                  required
                >
                  <option value="">Selecciona tu nivel</option>
                  <option value="principiante">Principiante</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-[#34485F] mb-1">
                    Fecha
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#E77A50] focus:border-[#E77A50] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-[#34485F] mb-1">
                    Hora
                  </label>
                  <select
                    id="time"
                    name="time"
                    className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#E77A50] focus:border-[#E77A50] transition-colors"
                    required
                  >
                    <option value="">Selecciona una hora</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:30">05:30 PM</option>
                    <option value="19:00">07:00 PM</option>
                    <option value="20:30">08:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#34485F] mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#E77A50] focus:border-[#E77A50] transition-colors"
                    placeholder="Tu nombre"
                    required
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
                    className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#E77A50] focus:border-[#E77A50] transition-colors"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#34485F] mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#E77A50] focus:border-[#E77A50] transition-colors"
                  placeholder="Tu número de teléfono"
                  required
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-[#34485F] mb-1">
                  Experiencia previa (opcional)
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={3}
                  className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#E77A50] focus:border-[#E77A50] transition-colors"
                  placeholder="Cuéntanos si tienes experiencia previa en baile"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 mt-1 border-[#E0E0E0] rounded text-[#E77A50] focus:ring-[#E77A50]"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-[#34485F]">
                  Acepto los términos y condiciones de la academia
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#E77A50] text-white rounded-lg hover:bg-[#d06a43] transition-colors"
              >
                Confirmar reserva
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#D1DDC4]/30 relative overflow-hidden">
        <div className="liquid-shape liquid-shape-1"></div>
        <div className="liquid-shape liquid-shape-2"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#E77A50]/20 px-4 py-1 rounded-full text-[#E77A50] text-sm font-medium mb-2">
              Experiencias
            </span>
            <h2 className="text-3xl font-bold text-[#34485F] mb-4">Lo que dicen nuestros alumnos</h2>
            <p className="text-[#34485F]/80 max-w-2xl mx-auto">
              Experiencias de quienes ya forman parte de nuestra comunidad de baile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#E77A50]">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
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
    </main>
  )
}
