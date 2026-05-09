import { useState, useEffect, useCallback } from 'react'
import type { ThemeId } from '../types'
import { getStoredTheme, applyTheme } from '../styles/themes'

export function usePalette() {
  const [theme, setTheme] = useState<ThemeId>(getStoredTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const changeTheme = useCallback((newTheme: ThemeId) => {
    setTheme(newTheme)
  }, [])

  return { theme, changeTheme }
}
