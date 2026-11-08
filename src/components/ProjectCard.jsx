import { ExternalLink, ImagePlus } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Reminders that only appear while developing, never on the published site.
const isDev = import.meta.env.DEV

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover"
      />
    )
  }

  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 border-b border-dashed border-border bg-panel px-4 text-center text-muted-foreground">
      <ImagePlus aria-hidden="true" className="size-7" />
      <p className="text-sm">Screenshot coming soon</p>
      {isDev && <p className="font-mono text-xs text-mint">public/projects/{project.slug}.png</p>}
    </div>
  )
}

export default function ProjectCard({ project, showDeployHint = false }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-primary">
      <ProjectImage project={project} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold sm:text-2xl">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-white/85">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-mint">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-5">
          {project.live && (
            <Button asChild variant="secondary" size="lg" className="text-base">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} deployment`}
              >
                View deployment
                <ExternalLink aria-hidden="true" />
              </a>
            </Button>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source code`}
              className="underline underline-offset-4 hover:text-mint"
            >
              Source code
            </a>
          )}
          {isDev && showDeployHint && !project.live && (
            <p className="font-mono text-xs text-mint">Add `live` URL in portfolio.js</p>
          )}
        </div>
      </div>
    </article>
  )
}
