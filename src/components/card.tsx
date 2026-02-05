import { cn } from '@/lib/utils'
import * as motion from 'motion/react-client'
import React, { type ComponentProps } from 'react'

interface Props extends ComponentProps<typeof motion.div> {
  children: React.ReactNode
  className?: string
}

const cardVariants = {
  hidden: { opacity: 0, translateY: 32 },
  visible: { opacity: 1, translateY: 0 },
}

export default function Card({ children, className, ...props }: Props) {
  return (
    <motion.div
      {...props}
      className={cn('bg-muted overflow-hidden rounded-4xl border p-8', className)}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  )
}
