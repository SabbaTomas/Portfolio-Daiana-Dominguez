import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { secondaryRoles } from '../data/secondaryRoles'
import type { SecondaryRoleItem } from '../types'

function VerticalVideo({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      aria-label={label}
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
    />
  )
}

function HoverInfo({ title, subtitle }: { title?: string; subtitle?: string }) {
  if (!title && !subtitle) return null

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-5 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
        {title && <h3 className="text-xl font-bold text-white">{title}</h3>}
        {subtitle && (
          <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </>
  )
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function VideoCard({ item, index }: { item: SecondaryRoleItem; index: number }) {
  const subtitle = [item.project, item.production, item.year].filter(Boolean).join(' · ')

  return (
    <motion.div
      className="group relative w-full max-w-[360px] lg:max-w-none mx-auto aspect-[9/16] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden border"
      style={{
        backgroundColor: 'var(--color-dark)',
        borderColor: 'var(--color-border)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      {item.media.type === 'video' && (
        <VerticalVideo src={item.media.src} label={item.role ?? 'Video'} />
      )}

      {item.media.type === 'youtube' && (
        <iframe
          title={item.role ?? 'Video'}
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${item.media.youtubeId}?rel=0&controls=1&modestbranding=1&fs=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}

      <HoverInfo title={item.role} subtitle={subtitle || undefined} />
    </motion.div>
  )
}

function InstagramCard({ item, index }: { item: SecondaryRoleItem; index: number }) {
  if (item.media.type !== 'instagram') return null

  const { url, cover, handle, alt } = item.media
  const label = alt ?? (handle ? `Publicación de @${handle} en Instagram` : 'Publicación de Instagram')
  const festivals = item.selections?.length
    ? `Selección ${item.selections.join(' · ')}`
    : undefined

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (se abre en Instagram)`}
      className="group relative flex flex-col w-full max-w-[360px] lg:max-w-none mx-auto aspect-[4/5] sm:aspect-[9/16] lg:aspect-auto lg:h-full min-h-0 rounded-2xl overflow-hidden border"
      style={{
        backgroundColor: 'var(--color-dark)',
        borderColor: 'var(--color-border)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div className="relative flex-1 min-h-0 overflow-hidden bg-black">
        <img
          src={cover}
          alt={label}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover lg:object-[75%_50%] transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <HoverInfo title={item.role} subtitle={festivals} />
      </div>

      <div
        className="px-4 py-3 flex items-center justify-between gap-3 shrink-0 border-t"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <span className="flex items-center gap-2 min-w-0" style={{ color: 'var(--color-text)' }}>
          <InstagramIcon />
          <span className="text-sm truncate">{handle ? `@${handle}` : 'Instagram'}</span>
        </span>
        <span
          className="flex items-center gap-1 text-[10px] font-mono tracking-[0.2em] uppercase whitespace-nowrap"
          style={{ color: 'var(--color-accent)' }}
        >
          Ver publicación
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </span>
      </div>
    </motion.a>
  )
}

function ImageCard({
  item,
  index,
  className = '',
}: {
  item: SecondaryRoleItem
  index: number
  className?: string
}) {
  if (item.media.type !== 'image') return null

  const selection = item.selections?.join(' · ')

  return (
    <motion.article
      className={`group flex flex-col min-h-0 rounded-2xl overflow-hidden border ${className}`}
      style={{
        backgroundColor: 'var(--color-dark)',
        borderColor: 'var(--color-border)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div className="relative aspect-[16/9] lg:aspect-auto lg:flex-1 min-h-0 overflow-hidden bg-black">
        <img
          src={item.media.src}
          alt={selection ?? 'Otro trabajo'}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <HoverInfo title={item.role} subtitle={item.project} />
      </div>

      {selection && (
        <div className="px-4 py-3 flex flex-wrap items-center gap-x-3 gap-y-1 shrink-0">
          <span
            className="text-[10px] font-mono tracking-[0.25em] uppercase"
            style={{ color: 'var(--color-accent)' }}
          >
            Selección
          </span>
          <span className="text-sm" style={{ color: 'var(--color-text)' }}>
            {selection}
          </span>
        </div>
      )}
    </motion.article>
  )
}

export default function SecondaryRoles() {
  const video = secondaryRoles.find(
    (item) => item.media.type === 'video' || item.media.type === 'youtube'
  )
  const instagram = secondaryRoles.find((item) => item.media.type === 'instagram')
  const images = secondaryRoles.filter((item) => item.media.type === 'image')

  return (
    <section
      id="otros-trabajos"
      className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 relative w-full"
    >
      <motion.div
        className="mb-10 flex items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span
          className="text-xs font-mono tracking-[0.3em] uppercase px-3 py-1 rounded-full whitespace-nowrap"
          style={{
            backgroundColor: 'rgba(160, 160, 160, 0.1)',
            color: 'var(--color-accent)',
            border: '1px solid var(--color-border)',
          }}
        >
          Otros trabajos
        </span>
        <div
          className="flex-1 h-px"
          style={{ backgroundColor: 'var(--color-border)' }}
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:h-[540px] gap-6 lg:gap-8">
        {video && <VideoCard item={video} index={0} />}
        {instagram && <InstagramCard item={instagram} index={1} />}

        {images.length > 0 && (
          <div className="sm:col-span-2 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-6 lg:gap-8 min-h-0">
            {images.map((item, index) => (
              <ImageCard
                key={item.id}
                item={item}
                index={index + 2}
                className="flex-1"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
