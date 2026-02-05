import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: Props) {
  return (
    <div className={cn('bg-muted overflow-hidden rounded-4xl border p-8', className)}>
      {children}
    </div>
  )
}
