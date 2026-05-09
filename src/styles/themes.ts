import { palettes } from '../data/palettes'
import type { ThemeId } from '../types'

const STORAGE_KEY = 'portfolio-theme'

export function getStoredTheme(): ThemeId {
  if (typeof window === 'undefined') return 'scorsese'
  return (localStorage.getItem(STORAGE_KEY) as ThemeId) || 'scorsese'
}

export function storeTheme(themeId: ThemeId): void {
  localStorage.setItem(STORAGE_KEY, themeId)
}

export function applyTheme(themeId: ThemeId): void {
  const palette = palettes.find((p) => p.id === themeId)
  if (!palette) return

  const root = document.documentElement
  Object.entries(palette.colors).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })

  storeTheme(themeId)
}
