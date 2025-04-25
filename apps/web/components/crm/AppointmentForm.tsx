"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/Button"

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    classType: "",
    instructor: "",
    date: "",
    time: "",
    student: "",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar la cita
    alert("Cita agendada correctamente")
    // Resetear el formulario
    setFormData({
      classType: "",
      instructor: "",
      date: "",
      time: "",
      student: "",
      notes: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="classType" className="block text-sm font-medium text-[#333333] mb-1">
          Tipo de Clase
        </label>
        <select
          id="classType"
          name="classType"
          value={formData.classType}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-[#F28C38]"
          required
        >
          <option value="">Seleccionar clase</option>
          <option value="salsa">Salsa</option>
          <option value="hiphop">Hip Hop</option>
          <option value="ballet">Ballet</option>
          <option value="contemporaneo">Contemporáneo</option>
          <option value="tango">Tango</option>
          <option value="breakdance">Breakdance</option>
        </select>
      </div>

      <div>
        <label htmlFor="instructor" className="block text-sm font-medium text-[#333333] mb-1">
          Instructor
        </label>
        <select
          id="instructor"
          name="instructor"
          value={formData.instructor}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-[#F28C38]"
          required
        >
          <option value="">Seleccionar instructor</option>
          <option value="carlos">Carlos Mendoza</option>
          <option value="miguel">Miguel Torres</option>
          <option value="laura">Laura Jiménez</option>
          <option value="ana">Ana Martínez</option>
          <option value="roberto">Roberto Sánchez</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-[#333333] mb-1">
            Fecha
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-[#F28C38]"
            required
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-[#333333] mb-1">
            Hora
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-[#F28C38]"
            required
          >
            <option value="">Seleccionar hora</option>
            <option value="09:00">09:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="16:00">04:00 PM</option>
            <option value="17:00">05:00 PM</option>
            <option value="18:00">06:00 PM</option>
            <option value="19:00">07:00 PM</option>
            <option value="20:00">08:00 PM</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="student" className="block text-sm font-medium text-[#333333] mb-1">
          Estudiante
        </label>
        <input
          type="text"
          id="student"
          name="student"
          value={formData.student}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-[#F28C38]"
          placeholder="Nombre del estudiante"
          required
        />
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-[#333333] mb-1">
          Notas (opcional)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-[#F28C38]"
          placeholder="Información adicional"
        ></textarea>
      </div>

      <Button type="submit" className="w-full">
        Agendar Cita
      </Button>
    </form>
  )
}

