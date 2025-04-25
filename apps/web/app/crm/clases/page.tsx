import { ClassesTable } from "@/components/crm/ClassesTable"
import { Button } from "@/components/ui/Button"
import { Search } from "@/components/ui/Search"
import { Plus, Calendar } from "lucide-react"

export default function ClassesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#2F5961]">Gestión de Clases</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar size={16} className="mr-2" />
            Ver Calendario
          </Button>
          <Button>
            <Plus size={16} className="mr-2" />
            Nueva Clase
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Search placeholder="Buscar clases..." />
        <div className="flex gap-2">
          <select className="px-3 py-2 border border-[#E0E0E0] rounded-lg">
            <option value="">Todos los estilos</option>
            <option value="salsa">Salsa</option>
            <option value="hiphop">Hip Hop</option>
            <option value="ballet">Ballet</option>
            <option value="contemporaneo">Contemporáneo</option>
            <option value="tango">Tango</option>
            <option value="breakdance">Breakdance</option>
          </select>
          <select className="px-3 py-2 border border-[#E0E0E0] rounded-lg">
            <option value="">Todos los instructores</option>
            <option value="carlos">Carlos Mendoza</option>
            <option value="laura">Laura Jiménez</option>
            <option value="miguel">Miguel Ángel Torres</option>
            <option value="ana">Ana Martínez</option>
            <option value="roberto">Roberto Sánchez</option>
          </select>
        </div>
      </div>

      <ClassesTable />
    </div>
  )
}

