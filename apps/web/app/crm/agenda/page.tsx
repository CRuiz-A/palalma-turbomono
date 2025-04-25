import { CalendarView } from "@/components/crm/CalendarView"
import { AppointmentForm } from "@/components/crm/AppointmentForm"
import { UpcomingAppointments } from "@/components/crm/UpcomingAppointments"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Plus, Filter, RefreshCw } from "lucide-react"

export default function AgendaPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#2F5961]">Sistema de Agendamiento</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter size={16} className="mr-2" />
            Filtrar
          </Button>
          <Button variant="outline">
            <RefreshCw size={16} className="mr-2" />
            Actualizar
          </Button>
          <Button>
            <Plus size={16} className="mr-2" />
            Nueva Cita
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="Calendario de Clases">
            <CalendarView />
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Próximas Citas">
            <UpcomingAppointments />
          </Card>

          <Card title="Agendar Nueva Cita">
            <AppointmentForm />
          </Card>
        </div>
      </div>
    </div>
  )
}

