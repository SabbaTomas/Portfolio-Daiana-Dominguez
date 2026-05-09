import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import '../styles/global.css'
import '../styles/animations.css'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navigation />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
