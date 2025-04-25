export function RecentStudents() {
  const students = [
    {
      id: 1,
      name: "Ana Rodríguez",
      email: "ana.rodriguez@example.com",
      class: "Salsa",
      date: "15/05/2023",
      status: "Activo",
    },
    {
      id: 2,
      name: "Carlos Méndez",
      email: "carlos.mendez@example.com",
      class: "Hip Hop",
      date: "12/05/2023",
      status: "Activo",
    },
    {
      id: 3,
      name: "María López",
      email: "maria.lopez@example.com",
      class: "Ballet",
      date: "10/05/2023",
      status: "Activo",
    },
    {
      id: 4,
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      class: "Contemporáneo",
      date: "08/05/2023",
      status: "Inactivo",
    },
    {
      id: 5,
      name: "Laura Gómez",
      email: "laura.gomez@example.com",
      class: "Tango",
      date: "05/05/2023",
      status: "Activo",
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-[#E0E0E0]">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Nombre</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Clase</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Fecha</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Estado</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E0E0E0]">
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-[#2F5961]">{student.name}</div>
                <div className="text-xs text-[#333333]">{student.email}</div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{student.class}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{student.date}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    student.status === "Activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {student.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

