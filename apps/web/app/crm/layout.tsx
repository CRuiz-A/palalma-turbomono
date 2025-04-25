import type React from "react"
import { Sidebar } from "@/components/crm/Sidebar"

export default function CrmLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <Sidebar />
      <div className="flex-1 p-8">{children}</div>
    </div>
  )
}

