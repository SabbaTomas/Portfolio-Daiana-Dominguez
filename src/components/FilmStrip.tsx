import type { Project } from '../types'

interface Props {
  projects: Project[]
  title: string
  selectedId: string | null
  onSelect: (project: Project | null) => void
}

export default function FilmStrip({ projects, title, selectedId, onSelect }: Props) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <h2
          className="text-2xl md:text-3xl font-bold"
          style={{ color: 'var(--color-text)' }}
        >
          {title}
        </h2>
        <div
          className="flex-1 h-px"
          style={{ backgroundColor: 'var(--color-border)' }}
        />
        <span
          className="text-xs font-mono tracking-widest"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {String(projects.length).padStart(2, '0')}
        </span>
      </div>

      <div
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--color-border) transparent',
        }}
      >
        {projects.map((project, i) => {
          const isSelected = selectedId === project.id
          return (
            <button
              key={project.id}
              onClick={() => onSelect(isSelected ? null : project)}
              className="group flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-start rounded-xl overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-2xl text-left"
              style={{
                borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                backgroundColor: 'var(--color-dark)',
              }}
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <div
                  className="absolute inset-x-0 top-0 h-8 flex items-center justify-center gap-1 opacity-60 z-10"
                  style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                >
                  {[...Array(12)].map((_, j) => (
                    <div
                      key={j}
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--color-border)' }}
                    />
                  ))}
                </div>

                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.style.display = 'flex'
                      parent.style.alignItems = 'center'
                      parent.style.justifyContent = 'center'
                      parent.style.backgroundColor = 'var(--color-bg)'
                      parent.innerHTML = '<span style="color: var(--color-text-secondary); font-size: 0.875rem;">No disponible</span>'
                    }
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p
                    className="text-xs font-mono"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {project.year}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {project.role}
                  </p>
                </div>
              </div>

              <div className="p-4">
                <h3
                  className="text-base font-semibold group-hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--color-text)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs mt-1 line-clamp-2"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {project.description}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
