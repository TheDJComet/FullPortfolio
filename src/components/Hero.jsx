import { ArrowRight } from 'lucide-react'
import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import DotField from '@/components/kokonutui/dot-field'
import TypewriterTitle from '@/components/kokonutui/type-writer'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/portfolio'

const sequences = profile.roles.map((text) => ({ text, deleteAfter: true }))

// Roughly the sticky header's height: the photo counts as gone once it is behind it.
const HEADER_OFFSET = 64

export default function Hero() {
  const photoRef = useRef(null)

  // The navbar photo is hidden through the hero-in-view CSS variant while this
  // attribute is set. A layout effect sets it before paint, so it never flashes.
  useLayoutEffect(() => {
    const root = document.documentElement
    root.toggleAttribute('data-hero-in-view', true)
    const observer = new IntersectionObserver(
      ([entry]) => root.toggleAttribute('data-hero-in-view', entry.isIntersecting),
      { rootMargin: `-${HEADER_OFFSET}px 0px 0px 0px` },
    )
    observer.observe(photoRef.current)
    return () => {
      observer.disconnect()
      root.removeAttribute('data-hero-in-view')
    }
  }, [])

  return (
    <DotField
      className="block min-h-0 bg-transparent text-mint/35 dark:bg-transparent dark:text-mint/35"
      spacing={18}
    >
      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 text-foreground sm:px-6 md:grid-cols-[1fr_auto] md:py-28">
        <img
          ref={photoRef}
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width="400"
          height="400"
          className="size-40 rounded-full border-2 border-mint/50 object-cover shadow-2xl sm:size-52 md:order-last md:size-80"
        />
        <div className="min-w-0">
          <p className="font-mono text-xs tracking-wider text-mint uppercase">{profile.eyebrow}</p>
          <h1 className="mt-4 text-5xl leading-none font-semibold tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <TypewriterTitle
            sequences={sequences}
            pauseBeforeDelete={1800}
            className="mt-5 justify-start dark:text-mint"
            textClassName="text-lg @lg:text-2xl @2xl:text-2xl"
          />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button asChild variant="secondary" size="lg" className="text-base">
              <Link to="/#projects">
                View projects
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <a href={profile.github} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-mint">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-mint">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </DotField>
  )
}
