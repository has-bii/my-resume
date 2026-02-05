import Nav from '@/components/nav'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Component,
})

function Component() {
  return (
    <>
      <Nav />
      <main className="relative container mx-auto min-h-dvh p-8">
        <div className="mt-26 flex-1">
          <Outlet />
        </div>
      </main>
    </>
  )
}
