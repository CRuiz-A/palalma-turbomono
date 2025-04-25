import type React from "react"
interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-[#E0E0E0]">
          <h3 className="text-lg font-medium text-[#2F5961]">{title}</h3>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  )
}

