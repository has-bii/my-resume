import Card from '../card'

export default function About() {
  return (
    <Card className="row-span-2 flex h-full flex-col justify-between gap-12 tracking-wider lg:col-span-2">
      <h1 className="text-foreground text-3xl font-semibold">Hey there, Welcome to my Home 👋🏻</h1>

      <p className="text-muted-foreground text-xl font-light text-pretty">
        I build practical solutions for real business problems.
      </p>

      <p className="text-muted-foreground text-xl font-light text-pretty">
        From startup environments to local marketplace platforms, I focus on creating systems that
        work efficiently and scale reliably.
      </p>

      <p className="text-muted-foreground text-xl font-light text-pretty">
        I solve problems through elegant interfaces, robust architectures, and thoughtful backend
        design.
      </p>

      <p className="text-muted-foreground text-xl font-light text-pretty">
        Always exploring better approaches to deliver what clients actually need.
      </p>

      <p className="text-muted-foreground text-xl font-light text-pretty">
        Currently freelancing and helping clients transform ideas into functional applications.
      </p>
    </Card>
  )
}
