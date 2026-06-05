import { motion } from 'framer-motion'
import type { Project } from '../types'

interface Props {
  project: Project
}

export default function InlineProject({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden border hover:border-opacity-100 transition-all duration-300"
      style={{
        backgroundColor: 'var(--color-dark)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="flex flex-col lg:flex-row gap-0">
        {/* Video Section */}
        <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto flex items-center justify-center bg-black relative overflow-hidden group">
          <iframe
            title={project.title}
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&controls=1&modestbranding=1&fs=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap"
                style={{
                  backgroundColor: project.category === 'films' ? 'rgba(160, 160, 160, 0.2)' : 'rgba(160, 160, 160, 0.1)',
                  color: 'var(--color-accent)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {project.category === 'films' ? 'Ficción' : 'Documental'}
              </span>
              <span
                className="text-xs font-mono"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {project.year}
              </span>
            </div>

            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-2"
              style={{ color: 'var(--color-text)' }}
            >
              {project.title}
            </h3>

            <p
              className="text-xs sm:text-sm mb-6"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {project.role}
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
