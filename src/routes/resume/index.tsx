import ResumeContent from '@/components/resume/resume-content'
import { containerVariants } from '@/constants/variants'
import { createFileRoute } from '@tanstack/react-router'
import * as motion from 'motion/react-client'

export const Route = createFileRoute('/resume/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <motion.div
      className="mx-auto max-w-3xl space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ResumeContent />
    </motion.div>
  )
}
