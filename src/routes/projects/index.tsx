import ProjectCard from '@/components/projects/project-card'
import { projects } from '@/constants/projects'
import { containerVariants } from '@/constants/variants'
import { createFileRoute } from '@tanstack/react-router'
import * as motion from 'motion/react-client'

export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <motion.div
      className="grid h-fit w-full grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <ProjectCard key={project.name} data={project} />
      ))}
    </motion.div>
  )
}
