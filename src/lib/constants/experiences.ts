export interface ExperienceItem {
  company: string
  position: string
  description: string
}

export interface Experience {
  year: number | string
  items: ExperienceItem[]
}

export const EXPERIENCES: Experience[] = [
  {
    year: '2026 - Now',
    items: [
      {
        company: 'Freelance',
        position: 'Software Engineer',
        description: '',
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        company: 'Siyasa+',
        position: 'Software Engineer',
        description:
          "Following a successful internship, I transitioned into a Full-time Fullstack Developer role in 2025 to lead the long-term evolution of Siyasa's digital infrastructure. In this capacity, I shifted focus from initial development to system optimization and feature expansion, ensuring the Next.js and Supabase ecosystem could handle increased transaction volumes and user scaling. I am responsible for maintaining the integrity of the Sharia-compliant logic across all three platforms, implementing advanced security protocols, and iterating on the UI/UX based on real-time stakeholder feedback. My role bridge the gap between technical execution and business strategy, ensuring the platform remains the primary engine for the company's growth.",
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        company: 'Siyasa+',
        position: 'Intern as Fullstack Developer',
        description:
          'During my internship as a Fullstack Developer Intern at PT Siyasa Advistama, I spearheaded the architectural transformation of the company\'s digital ecosystem, migrating their legacy WordPress site into a high-performance web application suite. Leveraging Next.js and Supabase, I engineered three distinct, integrated platforms: a comprehensive Admin Dashboard for internal operations, a streamlined User Portal for clients, and a dedicated Project Funding Platform. Beyond the code, I successfully digitized the company\'s complex Sharia-compliant business workflows, automating manual processes and significantly enhancing the efficiency of the project-vendor-investor lifecycle.',
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        company: 'VIVAVIS Türkiye',
        position: 'Student Internship',
        description:
          'During my one-month internship at Vivavis Company, I had the valuable opportunity to immerse myself in the dynamic field of full-stack development. My primary focus was on honing my skills in crafting web-based Database Integration applications. As part of the internship, I delved into the intricacies of utilizing Node.js as the backend framework, enabling robust and efficient server-side functionality. On the frontend, I worked extensively with React, leveraging its powerful capabilities to create engaging and responsive user interfaces. Additionally, my experience included hands-on work with Sequelize as the Object-Relational Mapping (ORM) tool, allowing for seamless communication between the application and the database. This immersive learning experience not only enhanced my proficiency in these technologies but also provided a comprehensive understanding of the end-to-end development process within a professional setting.',
      },
    ],
  },
]
