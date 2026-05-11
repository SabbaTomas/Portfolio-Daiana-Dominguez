import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../types'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group block rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/50"
        style={{
          backgroundColor: 'var(--color-dark)',
          border: '1px solid var(--color-border)',
        }}
      >
        <div className="aspect-video relative overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            loading={index < 3 ? 'eager' : 'lazy'}
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              const target = e.currentTarget
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.style.display = 'flex'
                parent.style.alignItems = 'center'
                parent.style.justifyContent = 'center'
                parent.style.backgroundColor = 'var(--color-bg)'
                parent.innerHTML = '<span style="color: var(--color-text-secondary); font-size: 0.875rem;">Imagen no disponible</span>'
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
              <polygon points="5 3 19 12 5 21 5 3" fill="white" />
            </svg>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-2 gap-2">
            <span
              className="text-xs font-mono tracking-wider uppercase"
              style={{ color: 'var(--color-accent)' }}
            >
              {project.category === 'films' ? 'Film' : 'Documental'}
            </span>
            <span className="text-xs font-mono" style={{ color: 'var(--color-text-secondary)' }}>
              {project.year}
            </span>
          </div>
          <h3
            className="text-base sm:text-lg font-bold mb-1 group-hover:opacity-80 transition-opacity"
            style={{ color: 'var(--color-text)' }}
          >
            {project.title}
          </h3>
          <p
            className="text-xs sm:text-sm"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {project.role}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
