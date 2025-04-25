import { StudentsTable } from "@/components/crm/StudentsTable"
import { Button } from "@/components/ui/Button"
import { Search } from "@/components/ui/Search"
import { Plus } from "lucide-react"

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#2F5961]">Gestión de Estudiantes</h1>
        <Button>
          <Plus size={16} className="mr-2" />
          Nuevo Estudiante
        </Button>
      </div>

      <div className="flex justify-between items-center">
        <Search placeholder="Buscar estudiantes..." />
        <div className="flex gap-2">
          <select className="px-3 py-2 border border-[#E0E0E0] rounded-lg">
            <option value="">Todos los niveles</option>
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
          <select className="px-3 py-2 border border-[#E0E0E0] rounded-lg">
            <option value="">Todos los estilos</option>
            <option value="salsa">Salsa</option>
            <option value="hiphop">Hip Hop</option>
            <option value="ballet">Ballet</option>
            <option value="contemporaneo">Contemporáneo</option>
            <option value="tango">Tango</option>
            <option value="breakdance">Breakdance</option>
          </select>
        </div>
      </div>

      <StudentsTable />
    </div>
  )
}

