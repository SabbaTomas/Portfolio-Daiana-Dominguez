import { Link } from 'react-router-dom'
import type { Project } from '../types'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group block rounded-xl overflow-hidden border transition-transform hover:-translate-y-1"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-dark)',
      }}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading={index < 3 ? 'eager' : 'lazy'}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              parent.style.display = 'flex'
              parent.style.alignItems = 'center'
              parent.style.justifyContent = 'center'
              parent.style.backgroundColor = 'var(--color-bg)'
              parent.innerHTML = '<span style="color: var(--color-text-secondary); font-size: 0.875rem;">Imagen no disponible</span>'
            }
          }}
        />
      </div>
      <div className="p-4">
        <h3
          className="text-lg font-semibold mb-1 group-hover:opacity-80 transition-opacity"
          style={{ color: 'var(--color-text)' }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {project.role} &middot; {project.year}
        </p>
      </div>
    </Link>
  )
}
