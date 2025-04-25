"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";

// Componentes de iconos simples en lugar de lucide-react
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props} // Forward all props to the <svg> element
  >
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props} // Forward all props to the <svg> element
  >
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#F28C38]">RITMO</span>
              <span className="text-2xl font-bold text-[#2F5961]">DANCE</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/servicios">Clases</NavLink>
            <NavLink href="/instructores">Instructores</NavLink>
            <NavLink href="/contacto">Contacto</NavLink>
            <NavLink href="/agendar">Agendar</NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2F5961] hover:text-[#F28C38] hover:bg-[#F5F5F5] focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
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
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[#333333] hover:text-[#F28C38] px-3 py-2 text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[#333333] hover:text-[#F28C38] block px-3 py-2 text-base font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}