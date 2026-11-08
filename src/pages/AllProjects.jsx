import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '@/components/ProjectCard'
import { projectGroups, projects } from '@/data/portfolio'

export default function AllProjects() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <ArrowLeft aria-hidden="true" className="size-4" />
        Back home
      </Link>
      <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">All projects</h1>
      {projectGroups.map((group) => (
        <section key={group.id} className="mt-14">
          <h2 className="font-mono text-xs tracking-wider text-mint uppercase">{group.title}</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.category === group.id)
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}
