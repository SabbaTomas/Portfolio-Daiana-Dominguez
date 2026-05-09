import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import Films from './pages/Films'
import Documentaries from './pages/Documentaries'
import ProjectDetail from './pages/ProjectDetail'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  const location = useLocation()

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Films />} />
            <Route path="/documentaries" element={<Documentaries />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  )
}
