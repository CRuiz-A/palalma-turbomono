"use client"

import { useEffect, useRef } from "react"

export function RetentionRateChart() {
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
    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"]
    const data = [85, 87, 84, 88, 90, 92] // Porcentajes de retención

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

    const pointDistance = (width - 2 * padding) / (months.length - 1)

    months.forEach((month, i) => {
      const x = padding + i * pointDistance
      ctx.fillText(month, x, height - padding + 15)
    })

    // Dibujar área sombreada
    ctx.beginPath()
    ctx.moveTo(padding, height - padding - ((height - 2 * padding) * data[0]) / 100)

    for (let i = 1; i < data.length; i++) {
      const x = padding + i * pointDistance
      const y = height - padding - ((height - 2 * padding) * data[i]) / 100
      ctx.lineTo(x, y)
    }

    // Completar el área
    ctx.lineTo(padding + (data.length - 1) * pointDistance, height - padding)
    ctx.lineTo(padding, height - padding)
    ctx.closePath()

    // Rellenar el área
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, "rgba(47, 89, 97, 0.5)")
    gradient.addColorStop(1, "rgba(47, 89, 97, 0.1)")
    ctx.fillStyle = gradient
    ctx.fill()

    // Dibujar línea
    ctx.beginPath()
    ctx.moveTo(padding, height - padding - ((height - 2 * padding) * data[0]) / 100)

    for (let i = 1; i < data.length; i++) {
      const x = padding + i * pointDistance
      const y = height - padding - ((height - 2 * padding) * data[i]) / 100
      ctx.lineTo(x, y)
    }

    ctx.strokeStyle = "#2F5961"
    ctx.lineWidth = 2
    ctx.stroke()

    // Dibujar puntos
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * pointDistance
      const y = height - padding - ((height - 2 * padding) * data[i]) / 100

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#F28C38"
      ctx.fill()
      ctx.strokeStyle = "#2F5961"
      ctx.lineWidth = 1
      ctx.stroke()

      // Valor encima del punto
      ctx.fillStyle = "#333333"
      ctx.textAlign = "center"
      ctx.fillText(data[i].toString() + "%", x, y - 10)
    }
  }, [])

  return (
    <div className="w-full h-64">
      <canvas ref={canvasRef} width={600} height={250} className="w-full h-full"></canvas>
    </div>
  )
}

