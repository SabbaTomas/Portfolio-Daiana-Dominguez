import type { Project } from '../types'
import ProjectCard from './ProjectCard'

interface Props {
  projects: Project[]
}

export default function ProjectGallery({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  )
}
