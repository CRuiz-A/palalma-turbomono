"use client"

import type React from "react"

import { SearchIcon } from "lucide-react"

interface SearchProps {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Search({ placeholder = "Buscar...", value, onChange }: SearchProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="w-4 h-4 text-[#333333]" />
      </div>
      <input
        type="search"
        className="block w-full p-2 pl-10 text-sm border border-[#E0E0E0] rounded-lg bg-white focus:ring-2 focus:ring-[#F28C38] focus:border-[#F28C38]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

