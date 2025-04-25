"use client"

import { useEffect, useRef } from "react"

export function RevenueByClassChart() {
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

    // Datos para el gráfico de pastel
    const data = [
      { label: "Salsa", value: 35, color: "#F28C38" },
      { label: "Hip Hop", value: 25, color: "#2F5961" },
      { label: "Ballet", value: 15, color: "#EB435E" },
      { label: "Contemp.", value: 10, color: "#4CAF50" },
      { label: "Tango", value: 10, color: "#9C27B0" },
      { label: "Breakdance", value: 5, color: "#FF9800" },
    ]

    // Calcular el total
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Configuración
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 40

    // Dibujar el gráfico de pastel
    let startAngle = 0

    data.forEach((item) => {
      const sliceAngle = (2 * Math.PI * item.value) / total

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      ctx.fillStyle = item.color
      ctx.fill()

      // Calcular la posición para la etiqueta
      const labelAngle = startAngle + sliceAngle / 2
      const labelX = centerX + radius * 0.7 * Math.cos(labelAngle)
      const labelY = centerY + radius * 0.7 * Math.sin(labelAngle)

      // Dibujar la etiqueta
      ctx.font = "bold 12px Arial"
      ctx.fillStyle = "#FFFFFF"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${item.value}%`, labelX, labelY)

      startAngle += sliceAngle
    })

    // Dibujar la leyenda
    const legendX = 20
    let legendY = 20

    ctx.font = "12px Arial"
    ctx.textAlign = "left"
    ctx.textBaseline = "middle"

    data.forEach((item) => {
      // Dibujar el cuadrado de color
      ctx.fillStyle = item.color
      ctx.fillRect(legendX, legendY, 15, 15)

      // Dibujar el texto
      ctx.fillStyle = "#333333"
      ctx.fillText(`${item.label} (${item.value}%)`, legendX + 25, legendY + 7.5)

      legendY += 25
    })
  }, [])

  return (
    <div className="w-full h-64">
      <canvas ref={canvasRef} width={600} height={250} className="w-full h-full"></canvas>
    </div>
  )
}

