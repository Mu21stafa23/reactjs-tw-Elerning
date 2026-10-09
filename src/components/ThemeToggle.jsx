import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './icons.jsx'

const STORAGE_KEY = 'darsi:theme'

export default function ThemeToggle() {
  // index.html has already set the class before React starts, so read it from there.
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  function toggle() {
    setDark((current) => {
      const next = !current
      try {
        localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
      } catch {
        // The choice still applies for this visit.
      }
      return next
    })
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label="Dark mode"
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-mist dark:text-night-text dark:hover:bg-night-raised"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
