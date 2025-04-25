import { Clock, User } from "lucide-react"

export function UpcomingAppointments() {
  const appointments = [
    {
      id: 1,
      class: "Salsa - Nivel Intermedio",
      instructor: "Carlos Mendoza",
      student: "Ana Rodríguez",
      date: "Hoy",
      time: "10:00 - 11:30",
      status: "Confirmada",
    },
    {
      id: 2,
      class: "Hip Hop - Principiante",
      instructor: "Miguel Torres",
      student: "Carlos Méndez",
      date: "Hoy",
      time: "12:00 - 13:30",
      status: "Pendiente",
    },
    {
      id: 3,
      class: "Ballet - Avanzado",
      instructor: "Laura Jiménez",
      student: "María López",
      date: "Mañana",
      time: "16:00 - 17:30",
      status: "Confirmada",
    },
    {
      id: 4,
      class: "Contemporáneo",
      instructor: "Ana Martínez",
      student: "Juan Pérez",
      date: "Mañana",
      time: "18:00 - 19:30",
      status: "Confirmada",
    },
  ]

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="p-3 border border-[#E0E0E0] rounded-lg hover:bg-[#F5F5F5] transition-colors"
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-[#2F5961]">{appointment.class}</h4>
              <p className="text-sm text-[#333333]">{appointment.instructor}</p>
            </div>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                appointment.status === "Confirmada" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {appointment.status}
            </span>
          </div>

          <div className="mt-2 flex items-center text-sm text-[#333333]">
            <Clock size={14} className="mr-1" />
            <span>
              {appointment.date}, {appointment.time}
            </span>
          </div>

          <div className="mt-1 flex items-center text-sm text-[#333333]">
            <User size={14} className="mr-1" />
            <span>{appointment.student}</span>
          </div>
        </div>
      ))}

      {appointments.length === 0 && (
        <div className="text-center py-6 text-[#333333]">No hay citas programadas próximamente</div>
      )}
    </div>
  )
}

