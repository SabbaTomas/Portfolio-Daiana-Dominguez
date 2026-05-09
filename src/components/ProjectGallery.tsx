import type { Project } from '../types'
import ProjectCard from './ProjectCard'

interface Props {
  projects: Project[]
  title?: string
}

export default function ProjectGallery({ projects, title }: Props) {
  return (
    <section>
      {title && (
        <h2
          className="text-2xl md:text-3xl font-bold mb-8"
          style={{ color: 'var(--color-text)' }}
        >
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
