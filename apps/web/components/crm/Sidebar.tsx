"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, Calendar, CreditCard, BarChart, Settings, LogOut, UserCircle } from "lucide-react"
import { useState } from "react"

// Definición de roles y sus permisos
const rolePermissions = {
  admin: ["dashboard", "estudiantes", "clases", "agenda", "pagos", "informes", "configuracion"],
  instructor: ["agenda", "estudiantes"],
  recepcion: ["agenda", "estudiantes", "pagos"],
}

// Menú completo
const fullMenu = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    href: "/crm/dashboard",
    permission: "dashboard",
  },
  {
    title: "Agenda",
    icon: <Calendar size={20} />,
    href: "/crm/agenda",
    permission: "agenda",
  },
  {
    title: "Estudiantes",
    icon: <Users size={20} />,
    href: "/crm/estudiantes",
    permission: "estudiantes",
  },
  {
    title: "Clases",
    icon: <Calendar size={20} />,
    href: "/crm/clases",
    permission: "clases",
  },
  {
    title: "Pagos",
    icon: <CreditCard size={20} />,
    href: "/crm/pagos",
    permission: "pagos",
  },
  {
    title: "Informes",
    icon: <BarChart size={20} />,
    href: "/crm/informes",
    permission: "informes",
  },
  {
    title: "Configuración",
    icon: <Settings size={20} />,
    href: "/crm/configuracion",
    permission: "configuracion",
  },
]

export function Sidebar() {
  const pathname = usePathname()
  // Simulamos un rol de usuario (en una aplicación real, esto vendría de un contexto de autenticación)
  const [userRole, setUserRole] = useState<"admin" | "instructor" | "recepcion">("admin")

  // Filtrar el menú según los permisos del rol
  const menuItems = fullMenu.filter((item) => rolePermissions[userRole].includes(item.permission))

  // Función para cambiar el rol (solo para demostración)
  const changeRole = (role: "admin" | "instructor" | "recepcion") => {
    setUserRole(role)
  }

  return (
    <div className="w-64 bg-[#2F5961] text-white min-h-screen p-4">
      <div className="flex items-center justify-center py-6 border-b border-white/10 mb-6">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-[#F28C38]">PAL</span>
          <span className="text-2xl font-bold text-white">ALMA</span>
        </Link>
      </div>

      {/* Información del usuario */}
      <div className="mb-6 p-3 bg-white/10 rounded-lg">
        <div className="flex items-center space-x-3">
          <UserCircle size={40} className="text-white" />
          <div>
            <div className="font-medium">
              {userRole === "admin" && "Administrador"}
              {userRole === "instructor" && "Instructor"}
              {userRole === "recepcion" && "Recepción"}
            </div>
            <div className="text-xs text-white/70">
              {userRole === "admin" && "Acceso completo"}
              {userRole === "instructor" && "Acceso limitado"}
              {userRole === "recepcion" && "Acceso a agenda"}
            </div>
          </div>
        </div>

        {/* Selector de rol (solo para demostración) */}
        <div className="mt-3 flex flex-wrap gap-1">
          <button
            onClick={() => changeRole("admin")}
            className={`px-2 py-1 text-xs rounded ${userRole === "admin" ? "bg-[#F28C38] text-white" : "bg-white/20"}`}
          >
            Admin
          </button>
          <button
            onClick={() => changeRole("instructor")}
            className={`px-2 py-1 text-xs rounded ${userRole === "instructor" ? "bg-[#F28C38] text-white" : "bg-white/20"}`}
          >
            Instructor
          </button>
          <button
            onClick={() => changeRole("recepcion")}
            className={`px-2 py-1 text-xs rounded ${userRole === "recepcion" ? "bg-[#F28C38] text-white" : "bg-white/20"}`}
          >
            Recepción
          </button>
        </div>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                isActive ? "bg-[#F28C38] text-white" : "text-white/80 hover:bg-white/10"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-4 w-52">
        <Link
          href="/auth/login"
          className="flex items-center px-4 py-3 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
        >
          <LogOut size={20} className="mr-3" />
          <span>Cerrar Sesión</span>
        </Link>
      </div>
    </div>
  )
}

