import { Edit, Trash2, Eye, Users } from "lucide-react"

export function ClassesTable() {
  const classes = [
    {
      id: 1,
      name: "Salsa - Nivel Intermedio",
      instructor: "Carlos Mendoza",
      schedule: "Lunes y Miércoles, 10:00 - 11:30",
      capacity: 20,
      enrolled: 15,
      status: "Activo",
    },
    {
      id: 2,
      name: "Hip Hop - Nivel Principiante",
      instructor: "Miguel Ángel Torres",
      schedule: "Martes y Jueves, 12:00 - 13:30",
      capacity: 15,
      enrolled: 12,
      status: "Activo",
    },
    {
      id: 3,
      name: "Ballet - Nivel Avanzado",
      instructor: "Laura Jiménez",
      schedule: "Lunes y Viernes, 16:00 - 17:30",
      capacity: 12,
      enrolled: 8,
      status: "Activo",
    },
    {
      id: 4,
      name: "Contemporáneo - Nivel Intermedio",
      instructor: "Ana Martínez",
      schedule: "Miércoles y Viernes, 18:00 - 19:30",
      capacity: 15,
      enrolled: 10,
      status: "Activo",
    },
    {
      id: 5,
      name: "Tango - Nivel Principiante",
      instructor: "Roberto Sánchez",
      schedule: "Martes y Jueves, 19:00 - 20:30",
      capacity: 20,
      enrolled: 14,
      status: "Activo",
    },
    {
      id: 6,
      name: "Breakdance - Nivel Intermedio",
      instructor: "Miguel Ángel Torres",
      schedule: "Sábados, 10:00 - 12:00",
      capacity: 15,
      enrolled: 12,
      status: "Activo",
    },
    {
      id: 7,
      name: "Salsa - Nivel Avanzado",
      instructor: "Carlos Mendoza",
      schedule: "Martes y Jueves, 20:00 - 21:30",
      capacity: 15,
      enrolled: 10,
      status: "Activo",
    },
    {
      id: 8,
      name: "Ballet - Nivel Principiante",
      instructor: "Laura Jiménez",
      schedule: "Sábados, 09:00 - 10:30",
      capacity: 20,
      enrolled: 15,
      status: "Activo",
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[#E0E0E0]">
          <thead className="bg-[#F5F5F5]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Clase</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">
                Instructor
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">
                Horario
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">
                Capacidad
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">
                Estado
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-[#333333] uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E0E0E0]">
            {classes.map((classItem) => (
              <tr key={classItem.id} className="hover:bg-[#F5F5F5]">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-[#2F5961]">{classItem.name}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{classItem.instructor}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{classItem.schedule}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <Users size={16} className="text-[#333333] mr-1" />
                    <span className="text-sm text-[#333333]">
                      {classItem.enrolled}/{classItem.capacity}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div
                      className="bg-[#F28C38] h-1.5 rounded-full"
                      style={{ width: `${(classItem.enrolled / classItem.capacity) * 100}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">{classItem.status}</span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-[#2F5961] hover:text-[#F28C38] mr-2">
                    <Eye size={16} />
                  </button>
                  <button className="text-[#2F5961] hover:text-[#F28C38] mr-2">
                    <Edit size={16} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 flex items-center justify-between border-t border-[#E0E0E0]">
        <div className="text-sm text-[#333333]">
          Mostrando <span className="font-medium">1</span> a <span className="font-medium">8</span> de{" "}
          <span className="font-medium">12</span> resultados
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-[#E0E0E0] rounded-md text-sm text-[#333333] hover:bg-[#F5F5F5]">
            Anterior
          </button>
          <button className="px-3 py-1 border border-[#E0E0E0] bg-[#F28C38] text-white rounded-md text-sm hover:bg-[#E07C2D]">
            1
          </button>
          <button className="px-3 py-1 border border-[#E0E0E0] rounded-md text-sm text-[#333333] hover:bg-[#F5F5F5]">
            2
          </button>
          <button className="px-3 py-1 border border-[#E0E0E0] rounded-md text-sm text-[#333333] hover:bg-[#F5F5F5]">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}

