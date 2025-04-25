import { Card } from "@/components/ui/Card"
import { DashboardStats } from "@/components/crm/DashboardStats"
import { RecentStudents } from "@/components/crm/RecentStudents"
import { UpcomingClasses } from "@/components/crm/UpcomingClasses"
import { RevenueChart } from "@/components/crm/RevenueChart"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#2F5961]">Dashboard</h1>
        <div className="text-sm text-[#333333]">Última actualización: {new Date().toLocaleDateString()}</div>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Estudiantes recientes">
          <RecentStudents />
        </Card>
        <Card title="Próximas clases">
          <UpcomingClasses />
        </Card>
      </div>

      <Card title="Ingresos mensuales">
        <RevenueChart />
      </Card>
    </div>
  )
}

