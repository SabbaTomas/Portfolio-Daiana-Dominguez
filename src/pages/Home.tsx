import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import InlineProject from '../components/InlineProject'
import PhotographyGallery from '../components/PhotographyGallery'
import { getProjectsByCategory } from '../data/projects'
import { SOCIAL_LINKS, EMAIL } from '../data/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Home() {
  const films = getProjectsByCategory('films')
  const documentaries = getProjectsByCategory('documentaries')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />

      {/* Films Section */}
      {films.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="mb-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <span
              className="inline-block text-xs font-mono tracking-[0.3em] uppercase mb-4 px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(160, 160, 160, 0.1)',
                color: 'var(--color-accent)',
                border: '1px solid var(--color-border)',
              }}
            >
              Producciones de Ficción
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
              style={{ color: 'var(--color-text)' }}
            >
              Films
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {films.map((project) => (
              <InlineProject key={project.id} project={project} />
            ))}
          </motion.div>
        </section>
      )}

      {/* Documentaries Section - Centered */}
      {documentaries.length > 0 && (
        <section
          className="relative w-full py-24"
          style={{
            backgroundColor: 'var(--color-dark)',
          }}
        >
          {/* Decorative elements */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 20% 50%, rgba(160, 160, 160, 0.05) 0%, transparent 50%)',
            }}
          />
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)',
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-16 text-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <span
                className="inline-block text-xs font-mono tracking-[0.3em] uppercase mb-4 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: 'rgba(160, 160, 160, 0.1)',
                  color: 'var(--color-accent)',
                  border: '1px solid var(--color-border)',
                }}
              >
                Producciones Documentales
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mx-auto"
                style={{ color: 'var(--color-text)' }}
              >
                Documentales
              </h2>
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {documentaries.map((project) => (
                <InlineProject key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Photography Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span
            className="inline-block text-xs font-mono tracking-[0.3em] uppercase mb-4 px-3 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(160, 160, 160, 0.1)',
              color: 'var(--color-accent)',
              border: '1px solid var(--color-border)',
            }}
          >
            Colección Visual
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ color: 'var(--color-text)' }}
          >
            Fotografía
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <PhotographyGallery />
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        className="py-24 px-4 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-dark) 50%, var(--color-bg) 100%)',
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 opacity-5 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(160,160,160,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(-30%, 30%)',
          }}
        />

        <motion.div
          className="max-w-3xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-6"
            style={{ color: 'var(--color-text)' }}
            variants={itemVariants}
          >
            ¿Tenés un proyecto en mente?
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg mb-10"
            style={{ color: 'var(--color-text-secondary)' }}
            variants={itemVariants}
          >
            Si querés colaborar o necesitás dirección de fotografía para tu próxima producción, hablemos.
          </motion.p>

          <motion.a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold transition-all"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-bg)',
            }}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {EMAIL}
          </motion.a>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            variants={containerVariants}
          >
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all"
                style={{
                  color: 'var(--color-text-secondary)',
                  backgroundColor: 'var(--color-border)',
                }}
                variants={itemVariants}
                whileHover={{ scale: 1.15, backgroundColor: 'var(--color-primary)' }}
                whileTap={{ scale: 0.9 }}
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
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}
