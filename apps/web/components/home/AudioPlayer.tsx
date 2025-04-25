"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false) 
  const [volume, setVolume] = useState(0.5)
  const [showControls, setShowControls] = useState(false)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)


  useEffect(() => {
    const attemptAutoplay = async () => {
      if (audioRef.current) {
        
        audioRef.current.volume = volume
        audioRef.current.muted = false

        try {
          await audioRef.current.play()
          setIsPlaying(true)
          console.log("Reproducción automática exitosa")
        } catch (error) {
          console.log("Reproducción automática bloqueada:", error)
          setAutoplayBlocked(true)
          setIsPlaying(false)
        }
      }
    }

    attemptAutoplay()
  }, [volume])

  // Reproducir/pausar audio
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        // Si la reproducción automática fue bloqueada, intentar reproducir al hacer clic
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Error al reproducir:", error)
          })
        }
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Silenciar/activar audio
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Ajustar volumen
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  // Mostrar controles al pasar el mouse
  const handleMouseEnter = () => setShowControls(true)
  const handleMouseLeave = () => setShowControls(false)

  return (
    <div
      className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-2 transition-all duration-300 hover:bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Archivo de audio - Cambia la URL para usar tu propia música */}
      <audio ref={audioRef} loop>
        <source src="MusicHome.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      <div className="flex items-center gap-2">
        {/* Botón de reproducción/pausa */}
        <button
          onClick={togglePlay}
          className="w-10 h-10 flex items-center justify-center bg-[#F28C38] text-white rounded-full hover:bg-[#E07C2D] transition-colors"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        {/* Controles de volumen (aparecen al pasar el mouse) */}
        <div
          className={`flex items-center gap-2 overflow-hidden transition-all duration-300 ${showControls ? "w-36 opacity-100" : "w-0 opacity-0"}`}
        >
          <button
            onClick={toggleMute}
            className="w-8 h-8 flex items-center justify-center bg-[#2F5961] text-white rounded-full hover:bg-[#2A4F56] transition-colors"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full accent-[#F28C38]"
          />
        </div>
      </div>

      {/* Mensaje si la reproducción automática fue bloqueada */}
      {autoplayBlocked && (
        <div className="absolute bottom-full right-0 mb-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm text-[#2F5961] shadow-md">
          Haz clic para reproducir música
        </div>
      )}
    </div>
  )
}
