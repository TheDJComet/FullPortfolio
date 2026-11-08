import { Link } from 'react-router-dom'
import { profile } from '@/data/portfolio'

const links = [
  { label: 'Projects', to: '/#projects' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Contact', to: '#contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:gap-4 sm:px-6">
        <Link to="/" aria-label={`${profile.name}, home`} className="flex items-center text-lg font-semibold">
          <img
            src={profile.photo}
            alt=""
            width="32"
            height="32"
            className="mr-2 size-7 rounded-full border border-mint/50 object-cover transition-all duration-200 motion-reduce:transition-none hero-in-view:mr-0 hero-in-view:w-0 hero-in-view:border-0 hero-in-view:opacity-0 sm:size-8"
          />
          {/* Phones have no room for both, so the photo replaces the initials. */}
          <span className="hidden max-sm:hero-in-view:inline">{profile.initials}</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-4 text-sm sm:gap-8 sm:text-base">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
