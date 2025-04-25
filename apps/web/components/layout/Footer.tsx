import type React from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#34485F] text-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-[#E77A50]">PAL</span>
              <span className="text-white">ALMA</span>
            </h3>
            <p className="text-white/80 mb-4">
              Academia de baile con más de 10 años formando bailarines de todas las edades y niveles.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Youtube size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Inicio</FooterLink>
              <FooterLink href="/servicios">Clases</FooterLink>
              <FooterLink href="/instructores">Instructores</FooterLink>
              <FooterLink href="/contacto">Contacto</FooterLink>
              <FooterLink href="/agendar">Agendar</FooterLink>
              <FooterLink href="/crm/dashboard">Portal CRM</FooterLink>
            </ul>
          </div>

          {/* Dance Styles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Estilos de baile</h3>
            <ul className="space-y-2">
              <FooterLink href="/servicios#salsa">Salsa</FooterLink>
              <FooterLink href="/servicios#bachata">Bachata</FooterLink>
              <FooterLink href="/servicios#pilates">Pilates</FooterLink>
              <FooterLink href="/servicios#yoga">Yoga</FooterLink>
              <FooterLink href="/servicios#rumba">Rumba Tropical</FooterLink>
              <FooterLink href="/servicios#reggaeton">Reggaetón</FooterLink>
              <FooterLink href="/servicios#ritmos">Ritmos Tropicales</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-[#E77A50]" />
                <span className="text-white/80">Cra 24 # 30 - 19, Floridablanca, Santander</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-[#E77A50]" />
                <span className="text-white/80">300 3560603</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-[#E77A50]" />
                <span className="text-white/80">info@palalma.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 flex-shrink-0 text-[#E77A50]" />
                <span className="text-white/80">
                  Lunes - Miércoles
                  <br />
                  Jueves - Sábado
                  <br />
                  7:00 am a 7:30 pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} PAL ALMA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/80 hover:text-[#E77A50] transition-colors">
        {children}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E77A50] hover:text-white transition-colors"
    >
      {icon}
    </Link>
  )
}
