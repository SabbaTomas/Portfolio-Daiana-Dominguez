import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoEnded, setVideoEnded] = useState(false)

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden"
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
            ? 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)'
            : 'linear-gradient(135deg, var(--color-dark) 0%, var(--color-bg) 100%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.08) 0%, transparent 50%)',
        }}
      />

      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          <span
            className="inline-block text-xs font-mono tracking-[0.4em] uppercase px-4 py-2 rounded-full"
            style={{
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'rgba(255,255,255,0.05)',
            }}
          >
            Directora de Fotografía
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight leading-none"
          style={{ color: 'var(--color-text)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Daiana
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, var(--color-text) 0%, var(--color-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Dominguez
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-20 leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Narrativa visual, dirección de fotografía y producción audiovisual.
          Transformando historias en experiencias cinematográficas.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ delay: 2, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Scroll
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-text-secondary)' }}>
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}