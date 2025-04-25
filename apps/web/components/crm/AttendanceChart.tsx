"use client"

import { useEffect, useRef } from "react"

export function AttendanceChart() {
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
    const classes = ["Salsa", "Hip Hop", "Ballet", "Contemp.", "Tango", "Breakdance"]
    const data = [92, 85, 78, 88, 80, 75] // Porcentajes de asistencia

    // Dibujar ejes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.strokeStyle = "#E0E0E0"
    ctx.stroke()

    // Dibujar etiquetas de clases
    ctx.font = "10px Arial"
    ctx.fillStyle = "#333333"
    ctx.textAlign = "center"

    const barWidth = (width - 2 * padding) / classes.length

    classes.forEach((className, i) => {
      const x = padding + i * barWidth + barWidth / 2
      ctx.fillText(className, x, height - padding + 15)
    })

    // Dibujar barras
    data.forEach((value, i) => {
      const x = padding + i * barWidth + barWidth * 0.1
      const barHeight = ((height - 2 * padding) * value) / 100
      const y = height - padding - barHeight

      // Color para las barras
      ctx.fillStyle = i % 2 === 0 ? "#2F5961" : "#F28C38"
      ctx.fillRect(x, y, barWidth * 0.8, barHeight)

      // Valor encima de la barra
      ctx.fillStyle = "#333333"
      ctx.textAlign = "center"
      ctx.fillText(value + "%", x + barWidth * 0.4, y - 5)
    })
  }, [])

  return (
    <div className="w-full h-64">
      <canvas ref={canvasRef} width={600} height={250} className="w-full h-full"></canvas>
    </div>
  )
}

