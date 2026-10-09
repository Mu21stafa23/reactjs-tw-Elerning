import { Link } from 'react-router-dom'
import { subjects } from '../data/courses.js'
import { Brand } from './Navbar.jsx'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-mist dark:border-night-line dark:bg-night-raised">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Brand />
          <p className="soft mt-4 max-w-sm leading-7">
            Short courses planned week by week. Enroll, tick off lessons, and pick up where you stopped.
          </p>
        </div>

        <nav aria-label="Subjects">
          <h2 className="font-body text-base font-bold">Subjects</h2>
          <ul className="mt-4 space-y-2.5">
            {subjects.map((subject) => (
              <li key={subject.id}>
                <Link to={`/courses?subject=${subject.id}`} className="soft hover:text-ink dark:hover:text-white">
                  {subject.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Moon Academy">
          <h2 className="font-body text-base font-bold">Moon Academy</h2>
          <ul className="mt-4 space-y-2.5">
            {[
              ['/courses', 'All courses'],
              ['/my-learning', 'My learning'],
              ['/about', 'About'],
              ['/contact', 'Contact'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="soft hover:text-ink dark:hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line dark:border-night-line">
        <p className="wrap soft py-6 text-sm leading-6">
          Moon Academy is a front-end demo. Courses, instructors and figures are sample data, and nothing you enter leaves
          your browser.
        </p>
      </div>
    </footer>
  )
}
