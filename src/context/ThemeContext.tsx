import { createContext, useContext, type ReactNode } from 'react'
import type { ThemeId } from '../types'
import { usePalette } from '../hooks/usePalette'

interface ThemeContextType {
  theme: ThemeId
  changeTheme: (theme: ThemeId) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, changeTheme } = usePalette()
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
