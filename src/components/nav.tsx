import { cn } from '@/lib/utils'
import { Link, useLocation } from '@tanstack/react-router'
import * as motion from 'motion/react-client'
import { useMemo } from 'react'

type Item = {
  label: string
  href: string
}

const items: Item[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const pathname = useLocation()

  const baseLeft = 4

  const getLeft = useMemo(() => {
    const getIndex = items.findIndex((item) => item.href === pathname.href)

    if (getIndex === -1) return baseLeft

    return getIndex * 128 + baseLeft
  }, [pathname.href])

  return (
    <nav className="bg-card fixed top-8 left-1/2 z-50 mx-auto flex w-fit -translate-x-1/2 items-center rounded-full border p-1 shadow-lg">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            'text-muted-foreground z-10 flex h-14 w-32 items-center justify-center rounded-full text-lg font-medium',
            pathname.href === item.href && 'text-foreground font-semibold',
          )}
        >
          {item.label}
        </Link>
      ))}
      <motion.div
        className="bg-muted absolute top-1 z-0 h-14 w-32 rounded-full"
        animate={{
          left: getLeft,
          transition: {
            ease: 'easeInOut',
            duration: 0.3,
          },
        }}
      />
    </nav>
  )
}
