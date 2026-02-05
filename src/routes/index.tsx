import About from '@/components/home/about'
import Contacts from '@/components/home/contacts'
import Experiences from '@/components/home/experiences'
import Photos from '@/components/home/photos'
import { createFileRoute } from '@tanstack/react-router'
import { stagger } from 'motion/react'
import * as motion from 'motion/react-client'

export const Route = createFileRoute('/')({
  component: App,
})

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.07, { startDelay: 0.2 }),
    },
  },
}

function App() {
  return (
    <motion.div
      className="grid h-fit w-full grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:grid-rows-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <About />
      <Contacts />
      <Photos />
      <Experiences />
    </motion.div>
  )
}
