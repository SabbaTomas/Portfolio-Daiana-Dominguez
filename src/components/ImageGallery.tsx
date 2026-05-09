import { useImageGallery } from '../hooks/useImageGallery'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useCallback } from 'react'

interface Props {
  images: string[]
}

export default function ImageGallery({ images }: Props) {
  const { isOpen, currentIndex, open, close, goNext, goPrev } = useImageGallery()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    },
    [isOpen, close, goNext, goPrev]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => open(i, images)}
            className="aspect-video rounded-lg overflow-hidden border cursor-pointer transition-opacity hover:opacity-80"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <img
              src={src}
              alt={`Frame ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget
                target.alt = 'No disponible'
                target.style.opacity = '0.3'
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
              aria-label="Close lightbox"
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
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <img
              src={images[currentIndex]}
              alt={`Frame ${currentIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                const target = e.currentTarget
                target.alt = 'No disponible'
                target.style.opacity = '0.3'
              }}
            />

            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div
              className="absolute bottom-4 text-sm"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
