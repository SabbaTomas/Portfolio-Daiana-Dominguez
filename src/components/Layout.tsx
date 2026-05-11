import { Outlet } from 'react-router-dom'
import '../styles/global.css'
import '../styles/animations.css'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)' }}>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
