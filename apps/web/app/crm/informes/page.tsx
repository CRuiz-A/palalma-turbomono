import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Download, Filter } from "lucide-react"
import { AttendanceChart } from "@/components/crm/AttendanceChart"
import { EnrollmentChart } from "@/components/crm/EnrollmentChart"
import { RevenueByClassChart } from "@/components/crm/RevenueByClassChart"
import { RetentionRateChart } from "@/components/crm/RetentionRateChart"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#2F5961]">Informes y Análisis</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter size={16} className="mr-2" />
            Filtros
          </Button>
          <Button variant="outline">
            <Download size={16} className="mr-2" />
            Exportar Informes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Asistencia por Clase">
          <AttendanceChart />
        </Card>
        <Card title="Inscripciones Mensuales">
          <EnrollmentChart />
        </Card>
        <Card title="Ingresos por Estilo de Baile">
          <RevenueByClassChart />
        </Card>
        <Card title="Tasa de Retención">
          <RetentionRateChart />
        </Card>
      </div>
    </div>
  )
}

