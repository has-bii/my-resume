import { Github, Mail, Phone } from 'lucide-react'

import Card from '../card'

const skills = [
  { category: 'Frontend', techs: 'React, Vue.js, HTML, JavaScript, TypeScript' },
  { category: 'Backend', techs: 'Node.js, NestJS, Laravel, PHP' },
  { category: 'Database', techs: 'PostgreSQL, SQL Server, Prisma ORM' },
  { category: 'Tools', techs: 'Git, GitHub, Docker' },
  { category: 'Others', techs: 'RAG System, React Native, CI/CD' },
]

const experiences = [
  {
    title: 'Freelance Software Developer',
    period: '2023 – Present',
    points: [
      'Built operational digitization systems for clients across various industries, replacing manual processes with custom applications.',
      'Developed an e-commerce platform for SMEs in Sembalun, a project commissioned by a university in Indonesia.',
      'Built backend systems, admin dashboards, and mobile apps for a sales team that previously relied on spreadsheets.',
      'Developed company profiles and web applications for multiple clients.',
    ],
  },
  {
    title: 'Intern Software Developer',
    company: 'Siyasa Advistama Indonesia, Jakarta',
    period: '2023',
    points: [
      'Involved in developing internal applications in the financial sector.',
      'Assisted in digitizing finance-based workflows.',
    ],
  },
]

const projects = [
  {
    name: 'SME E-Commerce Platform – Sembalun',
    client: 'University of Indonesia',
    stack: 'NextJS, Supabase, TailwindCSS, TypeScript, Docker',
    description: 'A digital marketplace platform for local businesses in Sembalun.',
  },
  {
    name: 'Sales Management System',
    stack: 'NestJS, React, PostgreSQL, React Native, NextJS, TailwindCSS',
    description:
      'A complete system including backend, admin dashboard, and mobile app for a corporate sales team.',
  },
  {
    name: 'RAG Chatbot System',
    stack: 'Bun, Pinecone, Prisma, Telegram Bot',
    description: 'An AI-powered chatbot using Retrieval-Augmented Generation for client needs.',
  },
]

export default function ResumeContent() {
  return (
    <>
      {/* Header */}
      <Card key="header" className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hasbiy Robbiy</h1>
        </div>

        <div className="text-muted-foreground flex flex-wrap gap-4 text-sm font-light">
          <a
            href="mailto:hasbii.rofficial@gmail.com"
            className="inline-flex items-center gap-1 hover:underline"
          >
            <Mail className="size-4" />
            hasbii.rofficial@gmail.com
          </a>
          <span className="inline-flex items-center gap-1">
            <Phone className="size-4" />
            +6281313022870
          </span>
          <a
            href="https://github.com/has-bii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline"
          >
            <Github className="size-4" />
            has-bii
          </a>
        </div>
      </Card>

      {/* Education */}
      <Card key="education" className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Education</h2>
        <div>
          <h3 className="font-medium">Bachelor of Computer Engineering</h3>
          <p className="text-muted-foreground font-light">Karabuk University</p>
        </div>
      </Card>

      {/* Experience */}
      <Card key="experience" className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        {experiences.map((exp) => (
          <div key={exp.title + exp.period}>
            <div className="flex items-baseline justify-between">
              <h3 className="font-medium">{exp.title}</h3>
              <span className="text-muted-foreground shrink-0 text-sm font-light">
                {exp.period}
              </span>
            </div>
            {exp.company && (
              <p className="text-muted-foreground text-sm font-light">{exp.company}</p>
            )}
            <ul className="text-muted-foreground mt-2 list-disc space-y-1 text-sm font-light">
              {exp.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </Card>

      {/* Technical Skills */}
      <Card key="skills" className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Technical Skills</h2>
        <div className="space-y-2">
          {skills.map((skill) => (
            <div key={skill.category} className="flex gap-3 text-sm">
              <span className="w-20 shrink-0 font-medium">{skill.category}</span>
              <span className="text-muted-foreground font-light">{skill.techs}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Projects */}
      <Card key="projects" className="space-y-5">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
        {projects.map((project) => (
          <div key={project.name}>
            <h3 className="font-medium">{project.name}</h3>
            {project.client && (
              <p className="text-muted-foreground text-sm font-light">Client: {project.client}</p>
            )}
            <p className="text-muted-foreground text-sm font-light">Stack: {project.stack}</p>
            <p className="text-muted-foreground mt-1 text-sm font-light">{project.description}</p>
          </div>
        ))}
      </Card>

      {/* Additional Info */}
      <Card key="additional" className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Additional Information</h2>
        <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm font-light">
          <li>Fresh graduate with freelance experience since university.</li>
          <li>Quick to adapt to new technologies and stacks as project needs arise.</li>
          <li>Open to full-time and remote positions.</li>
        </ul>
      </Card>
    </>
  )
}
