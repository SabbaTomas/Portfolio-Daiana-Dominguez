import { useState, useCallback, useEffect } from 'react'
import { photos } from '../data/photography'
import { motion, AnimatePresence } from 'framer-motion'

export default function PhotographyGallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const open = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }, [])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, close, goNext, goPrev])

  if (photos.length === 0) {
    return (
      <div
        className="rounded-xl border-2 border-dashed p-12 text-center"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          Agregá tus fotos en <code className="text-xs opacity-70">public/images/photography/</code> y completá los datos en{' '}
          <code className="text-xs opacity-70">src/data/photography.ts</code>
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => open(i)}
            className="group aspect-square rounded-lg overflow-hidden border transition-transform hover:scale-[1.02] text-left"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                const target = e.currentTarget
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  parent.style.display = 'flex'
                  parent.style.alignItems = 'center'
                  parent.style.justifyContent = 'center'
                  parent.style.backgroundColor = 'var(--color-bg)'
                  parent.innerHTML = '<span style="color: var(--color-text-secondary); font-size: 0.75rem;">Sin imagen</span>'
                }
              }}
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                close()
              }}
              className="absolute top-4 right-4 z-10 p-2 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
              aria-label="Cerrar"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
              aria-label="Anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                const target = e.currentTarget
                target.alt = 'No disponible'
                target.style.display = 'none'
              }}
            />

            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
              aria-label="Siguiente"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div
              className="absolute bottom-4 text-sm"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              {currentIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
