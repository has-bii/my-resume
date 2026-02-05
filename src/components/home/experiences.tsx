import { EXPERIENCES, type ExperienceItem } from '@/lib/constants/experiences'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import { useState } from 'react'

import Card from '../card'

type ExperienceDetailProps = {
  item: ExperienceItem
  onBack: () => void
}

function ExperienceDetail({ item, onBack }: ExperienceDetailProps) {
  return (
    <motion.div
      className="absolute inset-0 w-full overflow-y-auto bg-yellow-50 px-3 py-2"
      initial={{
        left: '100%',
      }}
      animate={{
        left: 0,
      }}
      exit={{ left: '100%' }}
    >
      <button className="inline-flex items-center gap-1" onClick={onBack} type="button">
        <ArrowLeft className="size-4" />
        <span className="font-medium">Back</span>
      </button>

      <h4 className="mt-4 text-2xl font-semibold">{item.company}</h4>
      <p className="text-muted-foreground">{item.position}</p>

      {item.description && <p className="mt-4 font-light tracking-normal">{item.description}</p>}
    </motion.div>
  )
}

function ExperienceList({
  experiences,
  onSelectExperience,
}: {
  experiences: typeof EXPERIENCES
  onSelectExperience: (item: ExperienceItem) => void
}) {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Experiences</h2>
        <p className="text-muted-foreground font-light">
          {experiences.reduce((total, exp) => total + exp.items.length, 0)} experiences
        </p>
      </div>

      {experiences.map((exp) => (
        <div key={exp.year} className="w-full space-y-2">
          <h3 className="font-semibold">{exp.year}</h3>
          <div className="w-full rounded-xl bg-black/50 transition-colors">
            {exp.items.map((item) => (
              <button
                key={item.position}
                type="button"
                className="block w-full space-y-1 px-4 py-3 text-left"
                onClick={() => onSelectExperience(item)}
              >
                <h4 className="text-primary-foreground truncate leading-tight font-medium">
                  {item.company}
                </h4>
                <p className="leading-tight font-light text-white">{item.position}</p>
              </button>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default function Experiences() {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null)

  return (
    <Card className="group aspect-square w-full border-0 bg-black/75 p-0 tracking-wider xl:col-span-2 xl:aspect-2/1">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-4xl bg-yellow-50 transition-all group-hover:mt-0 group-hover:ml-0 lg:mt-8 lg:ml-8">
        <div className="sticky top-0 h-12 w-full shrink-0 bg-linear-to-b from-yellow-300 to-yellow-400" />

        <div
          className={cn(
            'relative flex flex-1 flex-col gap-4 overflow-y-auto rounded-b-4xl bg-yellow-50 px-3 py-2 pb-12',
            selectedExp && 'overflow-y-hidden',
          )}
        >
          <AnimatePresence>
            {selectedExp ? (
              <ExperienceDetail
                key="detail"
                item={selectedExp}
                onBack={() => setSelectedExp(null)}
              />
            ) : (
              <ExperienceList
                key="list"
                experiences={EXPERIENCES}
                onSelectExperience={setSelectedExp}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </Card>
  )
}
