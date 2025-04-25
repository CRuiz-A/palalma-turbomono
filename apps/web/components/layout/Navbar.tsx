"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, User } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#E77A50]">PAL</span>
              <span className="text-2xl font-bold text-[#34485F]">ALMA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/servicios">Clases</NavLink>
            <NavLink href="/instructores">Instructores</NavLink>
            <NavLink href="/contacto">Contacto</NavLink>
            <NavLink href="/agendar">Agendar</NavLink>
            <NavLink href="/auth/login">
              <span className="flex items-center gap-1">
                <User size={16} />
                Acceso CRM
              </span>
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2F5961] hover:text-[#F28C38] hover:bg-[#F5F5F5] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E0E0E0]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" onClick={toggleMenu}>
              Inicio
            </MobileNavLink>
            <MobileNavLink href="/servicios" onClick={toggleMenu}>
              Clases
            </MobileNavLink>
            <MobileNavLink href="/instructores" onClick={toggleMenu}>
              Instructores
            </MobileNavLink>
            <MobileNavLink href="/contacto" onClick={toggleMenu}>
              Contacto
            </MobileNavLink>
            <MobileNavLink href="/agendar" onClick={toggleMenu}>
              Agendar
            </MobileNavLink>
            <MobileNavLink href="/auth/login" onClick={toggleMenu}>
              <span className="flex items-center gap-1">
                <User size={16} />
                Acceso CRM
              </span>
            </MobileNavLink>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[#34485F] hover:text-[#E77A50] px-3 py-2 text-sm font-medium transition-colors">
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[#34485F] hover:text-[#E77A50] block px-3 py-2 text-base font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
