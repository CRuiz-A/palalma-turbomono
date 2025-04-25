'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

// Define the props explicitly
interface ThemeProviderProps {
  children: React.ReactNode
  [key: string]: any // Allow additional props to be passed
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}