import { createContext, useContext, useEffect, useMemo, useState } from 'react'

// The "account" in this demo lives only in the visitor's browser.
// Shape: { name: string | null, email: string | null, enrolled: { [slug]: string[] } }
const STORAGE_KEY = 'moon-academy:learner'
const empty = { name: null, email: null, enrolled: {} }

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved && typeof saved === 'object' && saved.enrolled && typeof saved.enrolled === 'object') {
      return { ...empty, ...saved }
    }
  } catch {
    // Storage is unavailable or the saved value is not valid JSON: start fresh.
  }
  return empty
}

const LearnerContext = createContext(null)

export function LearnerProvider({ children }) {
  const [learner, setLearner] = useState(load)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(learner))
    } catch {
      // Private mode or blocked storage: the session still works until the tab closes.
    }
  }, [learner])

  const value = useMemo(
    () => ({
      learner,
      signedIn: Boolean(learner.email),
      signIn: ({ name, email }) => setLearner((current) => ({ ...current, name, email })),
      signOut: () => setLearner((current) => ({ ...current, name: null, email: null })),
      isEnrolled: (slug) => Object.hasOwn(learner.enrolled, slug),
      completed: (slug) => learner.enrolled[slug] ?? [],
      enroll: (slug) =>
        setLearner((current) =>
          Object.hasOwn(current.enrolled, slug)
            ? current
            : { ...current, enrolled: { ...current.enrolled, [slug]: [] } },
        ),
      leave: (slug) =>
        setLearner((current) => {
          const enrolled = { ...current.enrolled }
          delete enrolled[slug]
          return { ...current, enrolled }
        }),
      toggleLesson: (slug, lessonId) =>
        setLearner((current) => {
          const done = current.enrolled[slug] ?? []
          const next = done.includes(lessonId) ? done.filter((id) => id !== lessonId) : [...done, lessonId]
          return { ...current, enrolled: { ...current.enrolled, [slug]: next } }
        }),
    }),
    [learner],
  )

  return <LearnerContext.Provider value={value}>{children}</LearnerContext.Provider>
}

export function useLearner() {
  const value = useContext(LearnerContext)
  if (!value) throw new Error('useLearner must be used inside LearnerProvider')
  return value
}

export function nameFromEmail(email) {
  const local = email.split('@')[0].replace(/[._-]+/g, ' ').trim()
  return local ? local.charAt(0).toUpperCase() + local.slice(1) : 'Learner'
}

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
