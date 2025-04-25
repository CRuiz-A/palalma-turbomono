export function UpcomingClasses() {
  const classes = [
    {
      id: 1,
      name: "Salsa - Nivel Intermedio",
      instructor: "Carlos Mendoza",
      time: "10:00 - 11:30",
      date: "Hoy",
      students: 15,
    },
    {
      id: 2,
      name: "Hip Hop - Nivel Principiante",
      instructor: "Miguel Ángel Torres",
      time: "12:00 - 13:30",
      date: "Hoy",
      students: 12,
    },
    {
      id: 3,
      name: "Ballet - Nivel Avanzado",
      instructor: "Laura Jiménez",
      time: "16:00 - 17:30",
      date: "Hoy",
      students: 8,
    },
    {
      id: 4,
      name: "Contemporáneo - Nivel Intermedio",
      instructor: "Ana Martínez",
      time: "18:00 - 19:30",
      date: "Mañana",
      students: 10,
    },
    {
      id: 5,
      name: "Tango - Nivel Principiante",
      instructor: "Roberto Sánchez",
      time: "19:00 - 20:30",
      date: "Mañana",
      students: 14,
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-[#E0E0E0]">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Clase</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">
              Instructor
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Horario</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">
              Estudiantes
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E0E0E0]">
          {classes.map((classItem) => (
            <tr key={classItem.id}>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-[#2F5961]">{classItem.name}</div>
                <div className="text-xs text-[#333333]">{classItem.date}</div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{classItem.instructor}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{classItem.time}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{classItem.students}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

