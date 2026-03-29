import type { Project } from '@/types/project.type'

import Card from '../card'

type Props = {
  data: Project
}

export default function ProjectCard({ data }: Props) {
  return (
    <Card className="col-span-2 row-span-2 p-0">
      <figure className="relative aspect-video w-full">
        <img
          src={data.image}
          alt={data.name}
          className="absolute inset-0 size-full object-cover object-center"
        />
      </figure>
      <div className="flex flex-col gap-2 p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{data.name}</h2>
          <span className="text-muted-foreground text-xl">{data.year}</span>
        </div>
        <p className="text-muted-foreground font-light text-balance">{data.description}</p>
        <div className="bg-border my-2 h-px w-full" />
        <div className="flex flex-wrap gap-2">
          {data.stack.map((item) => (
            <span
              key={item}
              className="bg-secondary text-secondary-foreground inline-flex h-8 items-center rounded-md px-3 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}
