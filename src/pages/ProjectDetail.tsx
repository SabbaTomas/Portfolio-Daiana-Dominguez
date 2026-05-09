import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectById } from '../data/projects'
import VideoPlayer from '../components/VideoPlayer'
import ImageGallery from '../components/ImageGallery'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = getProjectById(id ?? '')

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          Proyecto no encontrado
        </h1>
        <Link
          to="/"
          className="text-sm hover:opacity-70"
          style={{ color: 'var(--color-primary)' }}
        >
          Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm mb-8 hover:opacity-70 transition-opacity"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Volver
      </Link>

      <h1
        className="text-3xl md:text-4xl font-bold mb-2"
        style={{ color: 'var(--color-text)' }}
      >
        {project.title}
      </h1>
      <p
        className="text-sm mb-8"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {project.role} &middot; {project.year}
      </p>

      <div className="mb-12">
        <VideoPlayer youtubeId={project.youtubeId} title={project.title} />
      </div>

      <div>
        <h2
          className="text-xl font-semibold mb-4"
          style={{ color: 'var(--color-text)' }}
        >
          Galería de imágenes
        </h2>
        <ImageGallery images={project.frames} />
      </div>
    </motion.div>
  )
}
