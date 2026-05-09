import { Link, useLocation } from 'react-router-dom'
import PaletteToggle from './PaletteToggle'
import { NAV_ITEMS } from '../data/constants'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useMediaQuery } from '../hooks/useMediaQuery'

export default function Navigation() {
  const location = useLocation()
  const isMobile = useMediaQuery('(max-width: 767px)')
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, changeTheme } = useTheme()

  const isHome = location.pathname === '/'

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome && href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setMenuOpen(false)
    }
  }

  return (
    <nav
      style={{
        backgroundColor: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight"
          style={{ color: 'var(--color-primary)' }}
          onClick={() => {
            if (isHome) {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
          Daiana Dominguez
        </Link>

        {isMobile ? (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2"
              style={{ color: 'var(--color-text)' }}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {menuOpen && (
              <div
                className="absolute top-16 left-0 right-0 p-4 flex flex-col gap-2"
                style={{
                  backgroundColor: 'var(--color-bg)',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={isHome ? item.href : '/' + item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="py-2 px-3 rounded transition-colors"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
                  <PaletteToggle currentTheme={theme} onChange={changeTheme} />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={isHome ? item.href : '/' + item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {item.label}
              </a>
            ))}
            <PaletteToggle currentTheme={theme} onChange={changeTheme} />
          </div>
        )}
      </div>
    </nav>
  )
}
