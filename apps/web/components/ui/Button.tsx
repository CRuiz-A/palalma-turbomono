import type React from "react"
import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "md", children, className = "", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

    const variantStyles = {
      default: "bg-[#F28C38] text-white hover:bg-[#E07C2D] focus:ring-[#F28C38]",
      outline: "border border-[#E0E0E0] text-[#333333] hover:bg-[#F5F5F5] focus:ring-[#F28C38]",
      secondary: "bg-[#2F5961] text-white hover:bg-[#2A4F56] focus:ring-[#2F5961]",
    }

    const sizeStyles = {
      sm: "text-sm px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-6 py-3",
    }

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

