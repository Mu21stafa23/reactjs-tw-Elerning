import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLearner } from '../lib/learner.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { CloseIcon, MenuIcon } from './icons.jsx'

const links = [
  { to: '/courses', label: 'Courses' },
  { to: '/my-learning', label: 'My learning' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function linkClass({ isActive }) {
  return [
    'rounded-lg px-3 py-2 font-semibold transition-colors',
    isActive
      ? 'bg-mist text-cobalt dark:bg-night-raised dark:text-marker'
      : 'text-ink hover:bg-mist dark:text-night-text dark:hover:bg-night-raised',
  ].join(' ')
}

export function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Darsi, home">
      <svg viewBox="0 0 64 64" className="h-9 w-9" aria-hidden="true">
        <rect width="64" height="64" rx="14" className="fill-cobalt" />
        <path d="M18 14h14c11 0 18 7 18 18s-7 18-18 18H18z" className="fill-marker" />
        <path d="M27 23h5c5.5 0 9 3.5 9 9s-3.5 9-9 9h-5z" className="fill-cobalt" />
      </svg>
      <span className="font-display text-2xl font-bold tracking-tight">Darsi</span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { learner, signedIn, signOut } = useLearner()
  const location = useLocation()

  // Close the mobile menu after moving to another page.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const account = signedIn ? (
    <>
      <span className="soft px-1 font-medium">Hi, {learner.name}</span>
      <button type="button" onClick={signOut} className="btn-quiet">
        Sign out
      </button>
    </>
  ) : (
    <Link to="/sign-in" className="btn-primary">
      Sign in
    </Link>
  )

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur dark:border-night-line dark:bg-night/95">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-4">
        <Brand />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden items-center gap-3 lg:flex">{account}</div>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg hover:bg-mist lg:hidden dark:hover:bg-night-raised"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line lg:hidden dark:border-night-line">
          <nav aria-label="Main" className="wrap flex flex-col gap-1 py-4">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-line pt-4 dark:border-night-line">
              {account}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
