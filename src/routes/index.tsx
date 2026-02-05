import About from '@/components/home/about'
import Contacts from '@/components/home/contacts'
import Experiences from '@/components/home/experiences'
import Photos from '@/components/home/photos'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="grid h-fit w-full grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:grid-rows-3">
      <About />
      <Contacts />
      <Photos />
      <Experiences />
    </div>
  )
}
