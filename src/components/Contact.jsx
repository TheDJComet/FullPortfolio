import { profile, resumes } from '@/data/portfolio'

const year = new Date().getFullYear()
const linkClass = 'underline underline-offset-4 hover:text-mint'

export default function Contact() {
  const availableResumes = resumes.filter((resume) => resume.file)

  return (
    <footer id="contact" className="border-t border-border bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="font-semibold">Let’s talk</h2>
          <a href={`mailto:${profile.email}`} className={`break-all text-mint ${linkClass}`}>
            {profile.email}
          </a>
        </div>
        {availableResumes.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {availableResumes.map((resume) => (
              <li key={resume.file}>
                <a href={resume.file} className={linkClass}>
                  {resume.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {year} {profile.name}
          </p>
          <ul className="flex gap-6">
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" className={linkClass}>
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
