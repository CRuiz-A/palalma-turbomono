import { Eye, Download } from "lucide-react"

export function PaymentsTable() {
  const payments = [
    {
      id: "PAY-001",
      student: "Ana Rodríguez",
      concept: "Mensualidad - Salsa",
      amount: "$50.00",
      date: "15/05/2023",
      method: "Tarjeta de crédito",
      status: "Pagado",
    },
    {
      id: "PAY-002",
      student: "Carlos Méndez",
      concept: "Mensualidad - Hip Hop",
      amount: "$55.00",
      date: "12/05/2023",
      method: "Transferencia",
      status: "Pagado",
    },
    {
      id: "PAY-003",
      student: "María López",
      concept: "Mensualidad - Ballet",
      amount: "$60.00",
      date: "10/05/2023",
      method: "Efectivo",
      status: "Pagado",
    },
    {
      id: "PAY-004",
      student: "Juan Pérez",
      concept: "Mensualidad - Contemporáneo",
      amount: "$55.00",
      date: "08/05/2023",
      method: "Tarjeta de débito",
      status: "Pendiente",
    },
    {
      id: "PAY-005",
      student: "Laura Gómez",
      concept: "Mensualidad - Tango",
      amount: "$65.00",
      date: "05/05/2023",
      method: "Transferencia",
      status: "Pagado",
    },
    {
      id: "PAY-006",
      student: "Roberto Díaz",
      concept: "Mensualidad - Breakdance",
      amount: "$70.00",
      date: "03/05/2023",
      method: "Tarjeta de crédito",
      status: "Pagado",
    },
    {
      id: "PAY-007",
      student: "Sofía Martínez",
      concept: "Mensualidad - Salsa",
      amount: "$50.00",
      date: "01/05/2023",
      method: "Efectivo",
      status: "Pagado",
    },
    {
      id: "PAY-008",
      student: "Diego Hernández",
      concept: "Mensualidad - Hip Hop",
      amount: "$55.00",
      date: "28/04/2023",
      method: "Transferencia",
      status: "Vencido",
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[#E0E0E0]">
          <thead className="bg-[#F5F5F5]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">
                Estudiante
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">
                Concepto
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Monto</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Fecha</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">
                Método
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
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-[#F5F5F5]">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{payment.id}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#2F5961]">{payment.student}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{payment.concept}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{payment.amount}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{payment.date}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#333333]">{payment.method}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      payment.status === "Pagado"
                        ? "bg-green-100 text-green-800"
                        : payment.status === "Pendiente"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-[#2F5961] hover:text-[#F28C38] mr-2">
                    <Eye size={16} />
                  </button>
                  <button className="text-[#2F5961] hover:text-[#F28C38]">
                    <Download size={16} />
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
          <span className="font-medium">20</span> resultados
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

