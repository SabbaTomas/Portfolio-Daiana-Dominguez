import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoEnded, setVideoEnded] = useState(false)

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[85vh] flex overflow-hidden"
    >
      {/* Left side (60%) - Video + Content overlay */}
      <div className="relative w-3/5 h-[85vh] overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          muted
          playsInline
          loop
          autoPlay
          onEnded={() => setVideoEnded(true)}
          onError={() => setVideoEnded(true)}
        />
        
        {/* Video overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: !videoEnded
              ? 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 100%)'
              : 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)',
          }}
        />

        {/* Content overlay on video */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10 px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="text-center">
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

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tight leading-none"
              style={{ color: 'var(--color-text)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
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

            {/* Description */}
            <motion.p
              className="text-base md:text-lg leading-relaxed max-w-2xl rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.09)',
                color: 'var(--color-text-secondary)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Narrativa visual, dirección de fotografía y producción audiovisual.
              Transformando historias en experiencias cinematográficas.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Right side (40%) - Image background with overlay */}
      <div 
        className="relative w-2/5 h-[85vh] overflow-hidden"
        style={{
          backgroundImage: 'url(/images/Perfil.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Simple shadow overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />
      </div>


    </section>
  )
}