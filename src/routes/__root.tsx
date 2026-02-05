import Nav from '@/components/nav'
import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router'
import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'

export const Route = createRootRoute({
  component: Component,
})

function Component() {
  const location = useLocation()

  return (
    <>
      <Nav />
      <main className="relative container mx-auto min-h-dvh p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.href}
            className="mt-26 flex-1"
            initial={{
              translateX: '-150%',
            }}
            animate={{ translateX: 0 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  )
}
