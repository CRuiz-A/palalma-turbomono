import { Users, Calendar, CreditCard, TrendingUp } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Total Estudiantes",
      value: "248",
      change: "+12%",
      icon: <Users size={24} className="text-[#F28C38]" />,
    },
    {
      title: "Clases Activas",
      value: "36",
      change: "+4%",
      icon: <Calendar size={24} className="text-[#2F5961]" />,
    },
    {
      title: "Ingresos Mensuales",
      value: "$12,450",
      change: "+8%",
      icon: <CreditCard size={24} className="text-[#EB435E]" />,
    },
    {
      title: "Tasa de Retención",
      value: "92%",
      change: "+2%",
      icon: <TrendingUp size={24} className="text-green-500" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-[#333333]">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              <p className="text-xs text-green-500 mt-1">{stat.change} vs. mes anterior</p>
            </div>
            <div className="p-3 rounded-full bg-[#F5F5F5]">{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

