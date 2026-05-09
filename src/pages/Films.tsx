import { motion } from 'framer-motion'
import ProjectGallery from '../components/ProjectGallery'
import { getProjectsByCategory } from '../data/projects'

export default function Films() {
  const films = getProjectsByCategory('films')

  return (
    <motion.div
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ProjectGallery projects={films} title="Films" />
    </motion.div>
  )
}
