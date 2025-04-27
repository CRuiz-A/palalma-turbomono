"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { AuthService } from "../../api/auth"; // Ajusta la ruta de importación según tu estructura

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const loginData = {
        username: email,
        email,
        password,
      };

      const response = await AuthService.login(loginData);

      // Guardar tokens en localStorage
      localStorage.setItem("accessToken", response.data.accessToken);
      if (response.data.refreshToken) {
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }

      // Obtener perfil del usuario para determinar redirección
      try {
        const profileResponse = await AuthService.profile();
        // Redireccionar según el rol o tipo de usuario
        // Puedes personalizar esta lógica según tus necesidades
        router.push("/crm/dashboard");
      } catch (profileError) {
        // Si hay error al obtener el perfil, redirigir a una ruta por defecto
        router.push("/crm/agenda");
      }
    } catch (err: any) {
      console.error("Error de login:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center"
              >
                <span className="text-3xl font-bold text-[#F28C38]">PAL</span>
                <span className="text-3xl font-bold text-[#2F5961]">ALMA</span>
              </Link>
              <h1 className="mt-4 text-2xl font-bold text-[#2F5961]">
                Iniciar Sesión
              </h1>
              <p className="mt-2 text-[#333333]">
                Accede al sistema de gestión de PAL ALMA
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#333333] mb-1"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-[#F28C38] transition-colors"
                  placeholder="tu@email.com"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#333333] mb-1"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-[#F28C38] transition-colors"
                    placeholder="••••••••"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-[#333333]" />
                    ) : (
                      <Eye className="h-5 w-5 text-[#333333]" />
                    )}
                  </button>
                </div>
                <div className="mt-1 text-right">
                  <Link
                    href="/auth/recuperar"
                    className="text-sm text-[#F28C38] hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-[#F28C38] text-white rounded-lg hover:bg-[#E07C2D] transition-colors disabled:opacity-70"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Iniciando...
                  </span>
                ) : (
                  <>
                    <LogIn className="h-5 w-5 mr-2" />
                    Iniciar Sesión
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-[#333333]">
                ¿Necesitas ayuda? Contacta al administrador del sistema
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-sm text-[#333333] hover:text-[#F28C38]"
          >
            ← Volver al sitio principal
          </Link>
        </div>
      </div>
    </div>
  );
}
