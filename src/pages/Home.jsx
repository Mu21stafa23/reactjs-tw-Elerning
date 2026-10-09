import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CourseTile from '../components/CourseTile.jsx'
import { SearchIcon } from '../components/icons.jsx'
import { courses, subjects, subjectStyle, totals } from '../data/courses.js'
import learners from '../assets/learners.webp'

const steps = [
  {
    title: 'Pick a course',
    text: 'Every course page shows the full plan before you start: each week, each lesson and how long it takes.',
  },
  {
    title: 'Study a few hours a week',
    text: 'Set how many hours you have and see how many weeks the course will take you.',
  },
  {
    title: 'Tick off lessons as you go',
    text: 'Your progress is saved in this browser, so you pick up exactly where you stopped.',
  },
]

export default function Home() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const featured = courses.filter((course) => course.featured)

  function search(event) {
    event.preventDefault()
    const term = query.trim()
    navigate(term ? `/courses?q=${encodeURIComponent(term)}` : '/courses')
  }

  return (
    <>
      <section className="wrap grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[1.05fr_1fr] lg:pb-24 lg:pt-20">
        <div>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Pick up a practical skill, a few hours a week.
          </h1>
          <p className="soft mt-6 max-w-xl text-lg leading-8">
            Short courses in web development, data, design, marketing and IT support. Each one is planned week by
            week, so you always know what comes next.
          </p>

          <form onSubmit={search} role="search" className="mt-9 flex max-w-xl flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <label htmlFor="home-search" className="sr-only">
                Search courses
              </label>
              <SearchIcon className="soft pointer-events-none absolute start-3.5 top-1/2 h-5 w-5 -translate-y-1/2" />
              <input
                id="home-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="What do you want to learn?"
                className="field ps-11"
              />
            </div>
            <button type="submit" className="btn-primary">
              Search courses
            </button>
          </form>

          <p className="mt-6 font-semibold">
            {totals.courses} courses, {totals.lessons} lessons, about {totals.hours} hours of study.
          </p>
        </div>

        <div className="rounded-[2rem] bg-ink p-4 sm:p-6 dark:bg-night-raised">
          <img
            src={learners}
            alt="Learners reading, taking notes and working on laptops"
            width="792"
            height="482"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="wrap py-12" aria-labelledby="subjects-heading">
        <h2 id="subjects-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Browse by subject
        </h2>
        <ul className="mt-8 divide-y divide-line border-y border-line dark:divide-night-line dark:border-night-line">
          {subjects.map((subject) => {
            const count = courses.filter((course) => course.subject === subject.id).length
            return (
              <li key={subject.id}>
                <Link
                  to={`/courses?subject=${subject.id}`}
                  className="group grid items-center gap-x-6 gap-y-1 py-5 sm:grid-cols-[14rem_1fr_auto]"
                >
                  <span className="flex items-center gap-3 text-xl font-bold">
                    <span aria-hidden="true" className={`h-3.5 w-3.5 rounded-full ${subjectStyle[subject.id].bar}`} />
                    <span className="group-hover:underline group-hover:underline-offset-4">{subject.name}</span>
                  </span>
                  <span className="soft">{subject.blurb}</span>
                  <span className="text-sm font-semibold tabular-nums">
                    {count} {count === 1 ? 'course' : 'courses'}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="wrap py-12" aria-labelledby="start-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="start-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Good places to start
            </h2>
            <p className="soft mt-3 max-w-xl leading-7">Three beginner courses that need no experience.</p>
          </div>
          <Link to="/courses" className="link">
            See all {totals.courses} courses
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map((course) => (
            <CourseTile key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <section className="wrap py-12" aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          How a course works
        </h2>
        <ol className="mt-8 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-4 border-ink pt-5 dark:border-night-text">
              <p className="font-display text-5xl font-bold leading-none text-cobalt dark:text-marker">{index + 1}</p>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="soft mt-2 leading-7">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap pt-12">
        <div className="flex flex-col items-start gap-6 rounded-[2rem] bg-marker p-8 text-ink sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Start with one lesson today.</h2>
            <p className="mt-3 max-w-xl text-lg leading-8">
              Enrolling takes one click and no payment. You can leave a course whenever you like.
            </p>
          </div>
          <Link to="/courses" className="btn flex-none bg-ink text-white hover:bg-cobalt">
            Browse courses
          </Link>
        </div>
      </section>
    </>
  )
}
