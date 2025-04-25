"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentView, setCurrentView] = useState<"day" | "week" | "month">("week")

  // Obtener el nombre del mes actual
  const monthName = currentDate.toLocaleString("es-ES", { month: "long" })
  const year = currentDate.getFullYear()

  // Cambiar al mes anterior
  const prevMonth = () => {
    const newDate = new Date(currentDate)
    newDate.setMonth(newDate.getMonth() - 1)
    setCurrentDate(newDate)
  }

  // Cambiar al mes siguiente
  const nextMonth = () => {
    const newDate = new Date(currentDate)
    newDate.setMonth(newDate.getMonth() + 1)
    setCurrentDate(newDate)
  }

  // Cambiar a la vista de hoy
  const goToToday = () => {
    setCurrentDate(new Date())
  }

  // Datos de ejemplo para el calendario
  const calendarEvents = [
    {
      id: 1,
      title: "Salsa - Nivel Intermedio",
      instructor: "Carlos Mendoza",
      start: "09:00",
      end: "10:30",
      day: 1, // Lunes
      students: 12,
      color: "bg-[#F28C38]",
    },
    {
      id: 2,
      title: "Hip Hop - Principiante",
      instructor: "Miguel Torres",
      start: "11:00",
      end: "12:30",
      day: 1, // Lunes
      students: 8,
      color: "bg-[#2F5961]",
    },
    {
      id: 3,
      title: "Ballet - Avanzado",
      instructor: "Laura Jiménez",
      start: "16:00",
      end: "17:30",
      day: 2, // Martes
      students: 6,
      color: "bg-[#EB435E]",
    },
    {
      id: 4,
      title: "Contemporáneo",
      instructor: "Ana Martínez",
      start: "18:00",
      end: "19:30",
      day: 3, // Miércoles
      students: 10,
      color: "bg-green-500",
    },
    {
      id: 5,
      title: "Tango - Principiante",
      instructor: "Roberto Sánchez",
      start: "10:00",
      end: "11:30",
      day: 4, // Jueves
      students: 14,
      color: "bg-purple-500",
    },
    {
      id: 6,
      title: "Salsa - Avanzado",
      instructor: "Carlos Mendoza",
      start: "19:00",
      end: "20:30",
      day: 5, // Viernes
      students: 9,
      color: "bg-[#F28C38]",
    },
    {
      id: 7,
      title: "Breakdance",
      instructor: "Miguel Torres",
      start: "10:00",
      end: "12:00",
      day: 6, // Sábado
      students: 7,
      color: "bg-amber-500",
    },
  ]

  // Días de la semana
  const weekDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

  // Horas del día (para la vista semanal)
  const hours = Array.from({ length: 14 }, (_, i) => i + 8) // 8:00 AM a 9:00 PM

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button onClick={prevMonth} className="p-1 rounded-full hover:bg-[#F5F5F5]">
            <ChevronLeft className="h-5 w-5 text-[#333333]" />
          </button>
          <h3 className="text-lg font-medium capitalize">
            {monthName} {year}
          </h3>
          <button onClick={nextMonth} className="p-1 rounded-full hover:bg-[#F5F5F5]">
            <ChevronRight className="h-5 w-5 text-[#333333]" />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={goToToday}
            className="px-3 py-1 text-sm border border-[#E0E0E0] rounded-md hover:bg-[#F5F5F5]"
          >
            Hoy
          </button>
          <div className="flex border border-[#E0E0E0] rounded-md overflow-hidden">
            <button
              onClick={() => setCurrentView("day")}
              className={`px-3 py-1 text-sm ${currentView === "day" ? "bg-[#F28C38] text-white" : "hover:bg-[#F5F5F5]"}`}
            >
              Día
            </button>
            <button
              onClick={() => setCurrentView("week")}
              className={`px-3 py-1 text-sm ${currentView === "week" ? "bg-[#F28C38] text-white" : "hover:bg-[#F5F5F5]"}`}
            >
              Semana
            </button>
            <button
              onClick={() => setCurrentView("month")}
              className={`px-3 py-1 text-sm ${currentView === "month" ? "bg-[#F28C38] text-white" : "hover:bg-[#F5F5F5]"}`}
            >
              Mes
            </button>
          </div>
        </div>
      </div>

      {currentView === "week" && (
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Cabecera de días */}
            <div className="grid grid-cols-8 border-b border-[#E0E0E0]">
              <div className="py-2 px-2 text-center text-sm font-medium text-[#333333]">Hora</div>
              {weekDays.map((day, index) => (
                <div key={index} className="py-2 px-2 text-center text-sm font-medium text-[#333333]">
                  {day}
                </div>
              ))}
            </div>

            {/* Horas y eventos */}
            <div className="relative">
              {hours.map((hour) => (
                <div key={hour} className="grid grid-cols-8 border-b border-[#E0E0E0]">
                  <div className="py-6 px-2 text-center text-xs text-[#333333]">{hour}:00</div>
                  {Array.from({ length: 7 }, (_, i) => i).map((day) => (
                    <div key={day} className="py-2 px-1 border-l border-[#E0E0E0] relative min-h-[60px]">
                      {/* Renderizar eventos que coincidan con esta hora y día */}
                      {calendarEvents
                        .filter((event) => {
                          const eventHour = Number.parseInt(event.start.split(":")[0])
                          return event.day === day + 1 && eventHour === hour
                        })
                        .map((event) => (
                          <div
                            key={event.id}
                            className={`absolute inset-x-1 rounded-md p-1 ${event.color} text-white text-xs`}
                            style={{
                              top: "0",
                              height: `${(Number.parseInt(event.end.split(":")[0]) - Number.parseInt(event.start.split(":")[0])) * 60}px`,
                            }}
                          >
                            <div className="font-medium">{event.title}</div>
                            <div>
                              {event.start} - {event.end}
                            </div>
                            <div>{event.instructor}</div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentView === "day" && (
        <div className="text-center py-12 text-[#333333]">Vista diaria - Implementación pendiente</div>
      )}

      {currentView === "month" && (
        <div className="text-center py-12 text-[#333333]">Vista mensual - Implementación pendiente</div>
      )}
    </div>
  )
}

