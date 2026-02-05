import github from '@/assets/github-logo.svg'
import instagram from '@/assets/instagram-logo.svg'
import mail from '@/assets/mail-logo.svg'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import * as motion from 'motion/react-client'

import Card from '../card'

const items = [
  {
    label: '@has.bii',
    src: instagram,
    href: 'https://www.instagram.com/has.bii',
  },
  {
    label: 'hasbii.rofficial@gmail.com',
    src: mail,
    href: 'mailto:hasbii.rofficial@gmail.com',
  },
  {
    label: '@has-bii',
    src: github,
    href: 'https://github.com/has-bii',
  },
]

export default function Contacts() {
  return (
    <Card key="contacts" className="flex aspect-square w-full items-center justify-center">
      <div className="bg-background flex h-20 w-fit items-center gap-2 rounded-2xl border p-2 shadow-xl">
        {items.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <motion.a
                href={item.href}
                target="_blank"
                className="size-16"
                whileHover={{
                  width: 96,
                  height: 96,
                  translateY: -16,
                  transition: { duration: 0.2, stiffness: 1000 },
                }}
              >
                <img src={item.src} />
              </motion.a>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-base">{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Card>
  )
}
