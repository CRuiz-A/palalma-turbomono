import { Edit, Trash2, Eye } from "lucide-react"

export function StudentsTable() {
  const students = [
    {
      id: 1,
      name: "Ana Rodríguez",
      email: "ana.rodriguez@example.com",
      phone: "(555) 123-4567",
      class: "Salsa",
      level: "Intermedio",
      status: "Activo",
      joinDate: "15/05/2023",
    },
    {
      id: 2,
      name: "Carlos Méndez",
      email: "carlos.mendez@example.com",
      phone: "(555) 234-5678",
      class: "Hip Hop",
      level: "Principiante",
      status: "Activo",
      joinDate: "12/05/2023",
    },
    {
      id: 3,
      name: "María López",
      email: "maria.lopez@example.com",
      phone: "(555) 345-6789",
      class: "Ballet",
      level: "Avanzado",
      status: "Activo",
      joinDate: "10/05/2023",
    },
    {
      id: 4,
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      phone: "(555) 456-7890",
      class: "Contemporáneo",
      level: "Intermedio",
      status: "Inactivo",
      joinDate: "08/05/2023",
    },
    {
      id: 5,
      name: "Laura Gómez",
      email: "laura.gomez@example.com",
      phone: "(555) 567-8901",
      class: "Tango",
      level: "Principiante",
      status: "Activo",
      joinDate: "05/05/2023",
    },
    {
      id: 6,
      name: "Roberto Díaz",
      email: "roberto.diaz@example.com",
      phone: "(555) 678-9012",
      class: "Breakdance",
      level: "Intermedio",
      status: "Activo",
      joinDate: "03/05/2023",
    },
    {
      id: 7,
      name: "Sofía Martínez",
      email: "sofia.martinez@example.com",
      phone: "(555) 789-0123",
      class: "Salsa",
      level: "Avanzado",
      status: "Activo",
      joinDate: "01/05/2023",
    },
    {
      id: 8,
      name: "Diego Hernández",
      email: "diego.hernandez@example.com",
      phone: "(555) 890-1234",
      class: "Hip Hop",
      level: "Principiante",
      status: "Inactivo",
      joinDate: "28/04/2023",
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[#E0E0E0]">
          <thead className="bg-[#F5F5F5]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">
                Contacto
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Clase</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Nivel</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">
                Estado
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">
                Fecha de Ingreso
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-[#333333] uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E0E0E0]">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-[#F5F5F5]">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-[#2F5961]">{student.name}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm text-[#333333]">{student.email}</div>
                  <div className="text-xs text-[#333333]">{student.phone}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{student.class}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{student.level}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      student.status === "Activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{student.joinDate}</td>
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
          <span className="font-medium">24</span> resultados
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
            3
          </button>
          <button className="px-3 py-1 border border-[#E0E0E0] rounded-md text-sm text-[#333333] hover:bg-[#F5F5F5]">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}

