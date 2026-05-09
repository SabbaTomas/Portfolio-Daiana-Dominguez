import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import FilmStrip from '../components/FilmStrip'
import VideoPlayer from '../components/VideoPlayer'
import PhotographyGallery from '../components/PhotographyGallery'
import { getProjectsByCategory } from '../data/projects'
import { SOCIAL_LINKS, EMAIL } from '../data/constants'
import type { Project } from '../types'

export default function Home() {
  const films = getProjectsByCategory('films')
  const documentaries = getProjectsByCategory('documentaries')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleSelect = (project: Project | null) => {
    setSelectedProject(project)
    if (project) {
      setTimeout(() => {
        document.getElementById('player')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />

      <section id="films" className="max-w-6xl mx-auto px-4 py-24">
        <FilmStrip
          projects={films}
          title="Films"
          selectedId={selectedProject?.id ?? null}
          onSelect={handleSelect}
        />
      </section>

      <section
        id="documentales"
        className="max-w-6xl mx-auto px-4 py-24"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <FilmStrip
          projects={documentaries}
          title="Documentales"
          selectedId={selectedProject?.id ?? null}
          onSelect={handleSelect}
        />
      </section>

      {selectedProject && (
        <section
          id="player"
          className="max-w-4xl mx-auto px-4 pb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: 'var(--color-text)' }}
                >
                  {selectedProject.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {selectedProject.role} &middot; {selectedProject.year}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full transition-opacity hover:opacity-70"
                style={{ color: 'var(--color-text-secondary)' }}
                aria-label="Cerrar video"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <VideoPlayer youtubeId={selectedProject.youtubeId} title={selectedProject.title} />
          </motion.div>
        </section>
      )}

      <section
        id="fotografia"
        className="max-w-6xl mx-auto px-4 py-24"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-8"
          style={{ color: 'var(--color-text)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Fotografía
        </motion.h2>
        <PhotographyGallery />
      </section>

      <section
        id="contacto"
        className="py-20 px-4"
        style={{ borderTop: '1px solid var(--color-border)' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-text)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contacto
          </motion.h2>
          <motion.p
            className="mb-8"
            style={{ color: 'var(--color-text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Si querés colaborar o tenés un proyecto en mente, no dudes en escribirme.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-bg)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {EMAIL}
            </a>

            <div className="flex gap-4 mt-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all hover:scale-110 hover:opacity-70"
                  style={{
                    color: 'var(--color-text-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                  aria-label={link.name}
                >
                  {link.name === 'LinkedIn' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {link.name === 'Instagram' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
