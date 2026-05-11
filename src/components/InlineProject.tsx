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
            src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&controls=1&modestbranding=1`}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

          {/* Gallery Toggle */}
          {project.frames.length > 0 && (
            <motion.button
              onClick={() => setShowFrames(!showFrames)}
              className="mt-6 sm:mt-8 px-6 py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all hover:opacity-80 w-full sm:w-auto"
              style={{
                backgroundColor: showFrames ? 'var(--color-primary)' : 'var(--color-border)',
                color: showFrames ? 'var(--color-bg)' : 'var(--color-text)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showFrames ? 'Ocultar' : 'Ver'} Galería ({project.frames.length})
            </motion.button>
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
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-black relative">
                  <motion.img
                    key={currentFrameIndex}
                    src={currentFrame}
                    alt={`${project.title} - Frame ${currentFrameIndex + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <motion.button
                    onClick={handlePrevFrame}
                    className="p-2 rounded-lg transition-colors"
                    style={{
                      backgroundColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                    aria-label="Anterior"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>

                  <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {currentFrameIndex + 1} / {project.frames.length}
                  </span>

                  <motion.button
                    onClick={handleNextFrame}
                    className="p-2 rounded-lg transition-colors"
                    style={{
                      backgroundColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                    aria-label="Siguiente"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19l7-7-7-7" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {project.frames.map((frame, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentFrameIndex(idx)}
                    className="flex-shrink-0 w-14 sm:w-16 h-14 sm:h-16 rounded border transition-all hover:opacity-100"
                    style={{
                      borderColor: idx === currentFrameIndex ? 'var(--color-primary)' : 'var(--color-border)',
                      opacity: idx === currentFrameIndex ? 1 : 0.6,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={frame}
                      alt={`Thumbnail ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover rounded"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
