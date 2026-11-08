import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/portfolio'

const featured = projects.filter((project) => project.featured).slice(0, 3)

export default function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Projects</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} showDeployHint />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="secondary" size="lg" className="text-base">
            <Link to="/projects">
              See more projects
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
