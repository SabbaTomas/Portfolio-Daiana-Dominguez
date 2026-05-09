import { motion } from 'framer-motion'
import { SOCIAL_LINKS } from '../data/constants'
import { useRef, useState } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoEnded, setVideoEnded] = useState(false)

  return (
    <section
      id="inicio"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        muted
        playsInline
        autoPlay
        onEnded={() => setVideoEnded(true)}
        onError={() => setVideoEnded(true)}
      />

      <div
        className="absolute inset-0"
        style={{
          background: !videoEnded
            ? 'linear-gradient(135deg, rgba(26,26,26,0.7) 0%, rgba(26,26,26,0.3) 100%)'
            : 'linear-gradient(135deg, var(--color-dark) 0%, var(--color-bg) 50%, var(--color-primary) 150%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 40%, var(--color-primary) 0%, transparent 60%), radial-gradient(circle at 70% 60%, var(--color-accent) 0%, transparent 50%)',
        }}
      />

      <motion.div
        className="relative z-10 text-center px-4 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.p
          className="text-sm md:text-base font-medium tracking-widest uppercase mb-4"
          style={{ color: 'var(--color-accent)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Directora de Fotografía & Cineasta
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight"
          style={{ color: 'var(--color-text)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Daiana{' '}
          <span style={{ color: 'var(--color-primary)' }}>
            Dominguez
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Especializada en narrativa visual, dirección de fotografía y producción audiovisual.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="#films"
            className="px-8 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-105"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
            }}
          >
            Ver Films
          </a>
          <a
            href="#documentales"
            className="px-8 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:scale-105"
            style={{
              border: '2px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
          >
            Ver Documentales
          </a>
        </motion.div>

        <motion.div
          className="flex gap-4 justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all hover:scale-110 hover:opacity-70"
              style={{ color: 'var(--color-text-secondary)' }}
              aria-label={link.name}
            >
              {link.name === 'LinkedIn' && (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              )}
              {link.name === 'Instagram' && (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              )}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, y: { duration: 1.5, repeat: Infinity } }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-secondary)' }}>
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  )
}
