import { experience } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Experience</h2>
        <ol className="mt-10">
          {experience.map((job) => (
            <li
              key={job.role}
              className="grid gap-2 border-t border-border py-7 first:border-t-0 first:pt-0 md:grid-cols-[12rem_1fr] md:gap-8"
            >
              <p className="font-mono text-xs leading-7 text-mint">{job.dates}</p>
              <div>
                <h3 className="text-xl font-semibold sm:text-2xl">{job.role}</h3>
                <p className="text-muted-foreground">{job.organization}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
