import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { anitaPapafrita } from '../data/anitapapafrita'

export default function AnitaPapafrita() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageId = parseInt(entry.target.getAttribute('data-image-id') || '0')
            setVisibleImages((prev) => new Set([...prev, imageId]))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-image-id]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section
      ref={containerRef}
      id="anitapapafrita"
      className="relative w-full px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-10 right-10 w-64 h-64 rounded-full pointer-events-none opacity-5"
        style={{
          background: 'radial-gradient(circle, rgba(160, 160, 160, 0.2) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-20 left-5 w-96 h-96 rounded-full pointer-events-none opacity-4"
        style={{
          background: 'radial-gradient(circle, rgba(160, 160, 160, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 py-8 lg:py-12">
        {/* Header section with staggered reveals */}
        <div className="mb-16 lg:mb-24">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span
              className="text-xs font-mono tracking-[0.3em] uppercase px-4 py-2 rounded-full"
              style={{
                backgroundColor: 'rgba(160, 160, 160, 0.1)',
                color: 'var(--color-accent)',
                border: '1px solid var(--color-accent)',
              }}
            >
              {anitaPapafrita.status}
            </span>
          </motion.div>

          {/* Title with editorial flair */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 leading-tight tracking-tight"
              style={{ color: 'var(--color-text)' }}
            >
              {anitaPapafrita.title}
            </h2>
            <div
              className="h-1 w-24 rounded-full"
              style={{ backgroundColor: 'var(--color-primary)' }}
            />
          </motion.div>
        </div>

        {/* Main content grid: text + images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column: Synopsis */}
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="p-8 lg:p-10 rounded-lg backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(30, 30, 30, 0.6)',
                border: '1px solid rgba(160, 160, 160, 0.1)',
              }}
            >
              <p
                className="text-base lg:text-lg leading-relaxed whitespace-pre-line font-light"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {anitaPapafrita.synopsis}
              </p>

              {/* Call to action */}
              <motion.div
                className="mt-8 pt-8"
                style={{ borderTop: '1px solid rgba(160, 160, 160, 0.1)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <p
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Proyecto audiovisual documental
                </p>
                <p
                  className="text-sm font-light"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Una historia de memoria, ausencia y resignificación familiar.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column: Gallery grid */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Asymmetric grid layout */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {anitaPapafrita.images.map((image, idx) => {
                const isVisible = visibleImages.has(image.id)
                // Create asymmetric sizes
                const isLarge = idx === 0 || idx === 4 || idx === 9
                const spanClass = isLarge
                  ? 'col-span-2 lg:col-span-2 row-span-2'
                  : 'col-span-1 lg:col-span-1'

                return (
                  <motion.div
                    key={image.id}
                    data-image-id={image.id}
                    className={`${spanClass} relative overflow-hidden rounded-lg cursor-pointer group`}
                    variants={imageVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    onClick={() => setSelectedImage(image.id)}
                  >
                    {/* Image container */}
                    <div className="relative w-full h-full bg-gray-900 overflow-hidden">
                      <img
                        src={image.thumb}
                        alt={`Proyecto Anita Papafrita - ${image.id}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)',
                        }}
                      >
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Gallery counter */}
            <motion.p
              className="mt-8 text-xs tracking-widest uppercase"
              style={{ color: 'var(--color-text-secondary)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {anitaPapafrita.images.length} fotografías de la producción
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <img
                src={anitaPapafrita.images.find((img) => img.id === selectedImage)?.src}
                alt="Ampliada"
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation arrows */}
              <button
                onClick={() => {
                  const currentIdx = anitaPapafrita.images.findIndex(
                    (img) => img.id === selectedImage
                  )
                  const prevIdx =
                    currentIdx === 0
                      ? anitaPapafrita.images.length - 1
                      : currentIdx - 1
                  setSelectedImage(anitaPapafrita.images[prevIdx].id)
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() => {
                  const currentIdx = anitaPapafrita.images.findIndex(
                    (img) => img.id === selectedImage
                  )
                  const nextIdx =
                    currentIdx === anitaPapafrita.images.length - 1
                      ? 0
                      : currentIdx + 1
                  setSelectedImage(anitaPapafrita.images[nextIdx].id)
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Counter */}
              <div
                className="absolute bottom-4 left-4 px-3 py-1 rounded text-sm font-mono"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'var(--color-accent)',
                }}
              >
                {anitaPapafrita.images.findIndex((img) => img.id === selectedImage) + 1} /{' '}
                {anitaPapafrita.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
