import { type Variants, stagger } from 'motion/react'

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.07, { startDelay: 0.2 }),
    },
  },
}
