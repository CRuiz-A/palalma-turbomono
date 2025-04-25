"use client"

import { useEffect, useRef } from "react"

export function RevenueChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Esta es una implementación simulada de un gráfico
    // En un proyecto real, usarías una biblioteca como Chart.js, Recharts, etc.
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Configuración
    const width = canvas.width
    const height = canvas.height
    const padding = 40
    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
    const data = [8500, 9200, 8700, 9800, 10500, 11200, 10800, 11500, 12000, 12450, 13000, 13500]

    // Dibujar ejes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.strokeStyle = "#E0E0E0"
    ctx.stroke()

    // Dibujar etiquetas de meses
    ctx.font = "10px Arial"
    ctx.fillStyle = "#333333"
    ctx.textAlign = "center"

    const barWidth = (width - 2 * padding) / months.length

    months.forEach((month, i) => {
      const x = padding + i * barWidth + barWidth / 2
      ctx.fillText(month, x, height - padding + 15)
    })

    // Encontrar el valor máximo para escalar
    const maxValue = Math.max(...data) * 1.1

    // Dibujar barras
    data.forEach((value, i) => {
      const x = padding + i * barWidth + barWidth * 0.1
      const barHeight = ((height - 2 * padding) * value) / maxValue
      const y = height - padding - barHeight

      // Gradiente para las barras
      const gradient = ctx.createLinearGradient(0, y, 0, height - padding)
      gradient.addColorStop(0, "#F28C38")
      gradient.addColorStop(1, "#F28C3880")

      ctx.fillStyle = gradient
      ctx.fillRect(x, y, barWidth * 0.8, barHeight)

      // Valor encima de la barra
      ctx.fillStyle = "#333333"
      ctx.textAlign = "center"
      ctx.fillText("$" + value, x + barWidth * 0.4, y - 5)
    })
  }, [])

  return (
    <div className="w-full h-80">
      <canvas ref={canvasRef} width={800} height={300} className="w-full h-full"></canvas>
    </div>
  )
}

