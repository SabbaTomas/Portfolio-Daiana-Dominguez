import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../types'

interface Props {
  project: Project
}

export default function InlineProject({ project }: Props) {
  const [showFrames, setShowFrames] = useState(false)
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0)

  const currentFrame = project.frames[currentFrameIndex]

  const handlePrevFrame = () => {
    setCurrentFrameIndex((prev) => (prev - 1 + project.frames.length) % project.frames.length)
  }

  const handleNextFrame = () => {
    setCurrentFrameIndex((prev) => (prev + 1) % project.frames.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden border"
      style={{
        backgroundColor: 'var(--color-dark)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Video Section */}
        <div className="aspect-video lg:aspect-auto flex items-center justify-center bg-black relative overflow-hidden group">
          <iframe
            title={project.title}
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&controls=1&modestbranding=1`}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full"
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
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ color: 'var(--color-text)' }}
            >
              {project.title}
            </h3>

            <p
              className="text-sm mb-6"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {project.role}
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {project.description}
            </p>
          </div>

          {/* Gallery Toggle */}
          {project.frames.length > 0 && (
            <button
              onClick={() => setShowFrames(!showFrames)}
              className="mt-8 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-80"
              style={{
                backgroundColor: showFrames ? 'var(--color-primary)' : 'var(--color-border)',
                color: showFrames ? 'var(--color-bg)' : 'var(--color-text)',
              }}
            >
              {showFrames ? 'Ocultar' : 'Ver'} Galería ({project.frames.length})
            </button>
          )}
        </div>
      </div>

      {/* Frames Gallery */}
      <AnimatePresence>
        {showFrames && project.frames.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div className="p-6 lg:p-8">
              <div className="mb-6">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-black relative">
                  <img
                    src={currentFrame}
                    alt={`${project.title} - Frame ${currentFrameIndex + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={handlePrevFrame}
                    className="p-2 rounded-lg transition-colors"
                    style={{
                      backgroundColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                    aria-label="Anterior"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {currentFrameIndex + 1} / {project.frames.length}
                  </span>

                  <button
                    onClick={handleNextFrame}
                    className="p-2 rounded-lg transition-colors"
                    style={{
                      backgroundColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                    aria-label="Siguiente"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19l7-7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.frames.map((frame, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentFrameIndex(idx)}
                    className="flex-shrink-0 w-16 h-16 rounded border transition-all hover:opacity-100"
                    style={{
                      borderColor: idx === currentFrameIndex ? 'var(--color-primary)' : 'var(--color-border)',
                      opacity: idx === currentFrameIndex ? 1 : 0.6,
                    }}
                  >
              <img
                    src={frame}
                    alt={`Thumbnail ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded"
                  />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
