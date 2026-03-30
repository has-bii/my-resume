import type { Project } from '@/types/project.type'

export const projects: Project[] = [
  {
    name: 'Naratani Sales Mobile App',
    description:
      'A mobile application for sales teams to manage customers, track orders, and access product catalogs on the go. Included custom native library for printing via bluetooth.',
    image: '/projects/naratani-sales.webp',
    stack: ['Expo', 'Typescript', 'React Query', 'Better Auth', 'Custom Native Library'],
    year: 2026,
  },
  {
    name: 'Naratani Admin App',
    description:
      'A comprehensive admin dashboard for managing business operations, featuring real-time analytics, inventory management, and user administration.',
    image: '/projects/naratani.webp',
    stack: ['Typescript', 'Next.js', 'Tailwindcss', 'Nest.js', 'React Query', 'Axios', 'Prisma'],
    year: 2026,
  },
  {
    name: 'Provent Mandiri Company Profile',
    description:
      "A modern, responsive company profile website showcasing Provent Mandiri's services and corporate identity with smooth animations.",
    image: '/projects/provent-mandiri.webp',
    stack: ['Typescript', 'Next.js', 'Framer Motion', 'Better Auth', 'R2:Cloudflare', 'Shadcn UI'],
    year: 2025,
  },
]
