import { PaymentsTable } from "@/components/crm/PaymentsTable"
import { Button } from "@/components/ui/Button"
import { Search } from "@/components/ui/Search"
import { Plus, Download } from "lucide-react"

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#2F5961]">Gestión de Pagos</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download size={16} className="mr-2" />
            Exportar
          </Button>
          <Button>
            <Plus size={16} className="mr-2" />
            Registrar Pago
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Search placeholder="Buscar pagos..." />
        <div className="flex gap-2">
          <select className="px-3 py-2 border border-[#E0E0E0] rounded-lg">
            <option value="">Todos los estados</option>
            <option value="pagado">Pagado</option>
            <option value="pendiente">Pendiente</option>
            <option value="vencido">Vencido</option>
          </select>
          <input
            type="month"
            className="px-3 py-2 border border-[#E0E0E0] rounded-lg"
            defaultValue={new Date().toISOString().slice(0, 7)}
          />
        </div>
      </div>

      <PaymentsTable />
    </div>
  )
}

