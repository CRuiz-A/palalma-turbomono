import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Averia_Sans_Libre } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const averia = Averia_Sans_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
})

export const metadata: Metadata = {
  title: "PAL ALMA - Academia de Baile",
  description: "Academia de baile con clases para todas las edades y niveles. Aprende salsa, hip hop, ballet y más.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={averia.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import "./globals.css"
