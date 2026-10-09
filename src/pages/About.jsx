import { Link } from 'react-router-dom'
import { totals } from '../data/courses.js'

const principles = [
  {
    title: 'The whole plan is visible first',
    text: 'Every course lists each week and each lesson, with its length, before you commit to anything.',
  },
  {
    title: 'Your pace decides the calendar',
    text: 'Tell a course how many hours a week you have, and it tells you how many weeks it will take.',
  },
  {
    title: 'Progress is yours',
    text: 'Ticked lessons stay ticked. They are saved on your device, and you can clear them by leaving the course.',
  },
]

const built = [
  ['React 18 and React Router 7', 'Pages, links and filters that live in the address bar, so a filtered list can be shared.'],
  ['Tailwind CSS 3', 'One set of colors and sizes for light and dark mode.'],
  ['Browser storage', 'Enrollment, progress and the chosen theme are kept in localStorage. There is no server.'],
  ['Accessibility', 'Keyboard reachable throughout, labelled forms with spoken errors, and visible focus.'],
]

export default function About() {
  return (
    <div className="wrap pb-8 pt-12 lg:pt-16">
      <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">A course platform you can try end to end.</h1>
      <p className="soft mt-6 max-w-2xl text-lg leading-8">
        Darsi is a front-end demo. The {totals.courses} courses and {totals.lessons} lessons are sample content, the instructors are invented, and nothing is
        sold. What is real is the interface: you can search, enroll, tick off lessons and come back to find your place.
      </p>

      <section aria-labelledby="principles-heading" className="mt-16">
        <h2 id="principles-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Three ideas it is built around
        </h2>
        <ol className="mt-8 grid gap-8 md:grid-cols-3">
          {principles.map((item, index) => (
            <li key={item.title} className="border-t-4 border-ink pt-5 dark:border-night-text">
              <p className="font-display text-5xl font-bold leading-none text-cobalt dark:text-marker">{index + 1}</p>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="soft mt-2 leading-7">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="built-heading" className="mt-16">
        <h2 id="built-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          How it is built
        </h2>
        <dl className="mt-8 divide-y divide-line border-y border-line dark:divide-night-line dark:border-night-line">
          {built.map(([term, text]) => (
            <div key={term} className="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[16rem_1fr]">
              <dt className="text-lg font-bold">{term}</dt>
              <dd className="soft leading-7">{text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16 flex flex-col items-start gap-6 rounded-[2rem] bg-mist p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between dark:bg-night-raised">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">See it working</h2>
          <p className="soft mt-3 max-w-xl text-lg leading-8">Open a course, enroll, and tick the first lesson. It takes under a minute.</p>
        </div>
        <Link to="/courses" className="btn-primary flex-none">
          Browse courses
        </Link>
      </section>
    </div>
  )
}
