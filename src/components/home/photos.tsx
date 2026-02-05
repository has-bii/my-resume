import { cn } from '@/lib/utils'
import { Cat, CircleUser, ImageIcon, type LucideIcon, Puzzle } from 'lucide-react'
import { AnimatePresence, type Variants, useAnimate, wrap } from 'motion/react'
import * as motion from 'motion/react-client'
import { useEffect, useMemo, useState } from 'react'

import Card from '../card'

// Types
type PhotoType = 'landscape' | 'me' | 'hobby' | 'cat'

interface Item {
  type: PhotoType
  url: string
}

interface FilterItem {
  type: PhotoType
  icon: LucideIcon
}

interface ToolbarProps {
  ref?: React.RefObject<HTMLDivElement>
  filter: PhotoType
  onChangeFilter: (filter: PhotoType) => void
}

// Constants
const PHOTO_ITEMS: Item[] = [
  { type: 'landscape', url: '/photos/landscape-1.jpeg' },
  { type: 'landscape', url: '/photos/landscape-2.jpeg' },
  { type: 'landscape', url: '/photos/landscape-3.jpeg' },
  { type: 'landscape', url: '/photos/landscape-4.jpeg' },
  { type: 'landscape', url: '/photos/landscape-5.jpeg' },
  { type: 'me', url: '/photos/me-1.jpeg' },
  { type: 'me', url: '/photos/me-2.jpeg' },
  { type: 'me', url: '/photos/me-3.jpeg' },
  { type: 'me', url: '/photos/me-4.jpeg' },
  { type: 'me', url: '/photos/me-5.jpeg' },
  { type: 'me', url: '/photos/me-6.jpeg' },
  { type: 'hobby', url: '/photos/hobby-1.jpeg' },
  { type: 'hobby', url: '/photos/hobby-2.jpeg' },
  { type: 'hobby', url: '/photos/hobby-3.jpeg' },
  { type: 'cat', url: '/photos/cat-1.jpeg' },
  { type: 'cat', url: '/photos/cat-2.jpeg' },
]

const FILTER_ITEMS: FilterItem[] = [
  { type: 'landscape', icon: ImageIcon },
  { type: 'me', icon: CircleUser },
  { type: 'hobby', icon: Puzzle },
  { type: 'cat', icon: Cat },
]

const TOOLBAR_VARIANTS: Variants = {
  selected0: { left: '4px' },
  selected1: { left: '25%' },
  selected2: { left: '50%' },
  selected3: { left: '75%', translateX: '-4px' },
}

// Hooks
function usePhotoGallery(initialFilter: PhotoType = 'landscape') {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [filter, setFilter] = useState<PhotoType>(initialFilter)

  const filteredItems = useMemo(() => PHOTO_ITEMS.filter((item) => item.type === filter), [filter])

  const currentItem = useMemo(() => filteredItems[selectedIndex], [selectedIndex, filteredItems])

  // Prefetch all images for the current filter
  useEffect(() => {
    PHOTO_ITEMS.forEach((item) => {
      const img = new Image()
      img.src = item.url
    })
  }, [])

  const handleFilterChange = (newFilter: PhotoType) => {
    setSelectedIndex(0)
    setFilter(newFilter)
  }

  const handleNextPhoto = () => {
    setSelectedIndex((prev) => wrap(0, filteredItems.length, prev + 1))
  }

  return {
    filter,
    currentItem,
    filteredItems,
    handleFilterChange,
    handleNextPhoto,
  }
}

// Components
function Toolbar({ ref, filter, onChangeFilter }: ToolbarProps) {
  const selectedVariant = useMemo(() => {
    const index = FILTER_ITEMS.findIndex((item) => item.type === filter)
    return `selected${index}` as const
  }, [filter])

  return (
    <div
      ref={ref}
      className="absolute -bottom-14 left-1/2 h-14 w-4/5 -translate-x-1/2 rounded-full border border-white/50 bg-white/50 backdrop-blur-2xl"
    >
      <div className="relative flex h-full items-center justify-between p-1">
        <motion.div
          className="absolute top-1 z-0 h-[calc(100%-8px)] w-1/4 rounded-full bg-white"
          variants={TOOLBAR_VARIANTS}
          animate={selectedVariant}
        />
        {FILTER_ITEMS.map((item) => {
          const isSelected = item.type === filter
          const Icon = item.icon

          return (
            <div
              key={item.type}
              className="z-1 inline-flex h-full flex-1 items-center justify-center rounded-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onChangeFilter(item.type)
                }}
                aria-label={`Filter by ${item.type}`}
                aria-pressed={isSelected}
              >
                <Icon
                  className={cn('size-6', isSelected ? 'text-foreground' : 'text-foreground/75')}
                />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Photos() {
  const { filter, currentItem, handleFilterChange, handleNextPhoto } = usePhotoGallery()
  const [toolbarRef, animateToolbar] = useAnimate()

  const handleMouseEnter = () => {
    animateToolbar(toolbarRef.current, { bottom: 32 })
  }

  const handleMouseLeave = () => {
    animateToolbar(toolbarRef.current, { bottom: -56 })
  }

  return (
    <Card key="photos" className="aspect-square w-full border-0 p-0">
      <motion.div
        className="relative h-full w-full cursor-pointer"
        onHoverStart={handleMouseEnter}
        onHoverEnd={handleMouseLeave}
        onClick={handleNextPhoto}
      >
        <AnimatePresence>
          <motion.img
            key={currentItem.url}
            src={currentItem.url}
            alt={`${filter} photo`}
            className="absolute inset-0 size-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </AnimatePresence>

        <Toolbar ref={toolbarRef} filter={filter} onChangeFilter={handleFilterChange} />
      </motion.div>
    </Card>
  )
}
