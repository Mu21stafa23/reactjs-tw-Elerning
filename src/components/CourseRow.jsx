import { Link } from 'react-router-dom'
import { getSubject, subjectStyle } from '../data/courses.js'
import { useLearner } from '../lib/learner.jsx'

// One line of the catalog: a row rather than a card, so many courses can be compared quickly.
export default function CourseRow({ course }) {
  const { isEnrolled, completed } = useLearner()
  const subject = getSubject(course.subject)
  const enrolled = isEnrolled(course.slug)
  const done = completed(course.slug).length

  return (
    <li className="relative grid gap-x-8 gap-y-3 py-6 ps-5 md:grid-cols-[1fr_auto] md:items-center">
      <span aria-hidden="true" className={`absolute inset-y-6 start-0 w-1.5 rounded-full ${subjectStyle[course.subject].bar}`} />
      <div>
        <p className="soft text-sm font-semibold">
          {subject.name}
          {enrolled && (
            <span className="ms-3 rounded-full bg-marker px-2.5 py-0.5 text-ink">
              Enrolled, {done} of {course.lessonCount} done
            </span>
          )}
        </p>
        <h3 className="mt-1 text-2xl font-bold leading-snug tracking-tight">
          <Link to={`/courses/${course.slug}`} className="hover:underline hover:underline-offset-4">
            {course.title}
          </Link>
        </h3>
        <p className="soft mt-2 max-w-2xl leading-7">{course.summary}</p>
      </div>
      <dl className="flex flex-wrap gap-x-6 gap-y-1 text-sm md:w-56 md:flex-col md:items-end md:text-end">
        <div>
          <dt className="sr-only">Level</dt>
          <dd className="font-semibold">{course.level}</dd>
        </div>
        <div>
          <dt className="sr-only">Length</dt>
          <dd className="soft">
            {course.weeks.length} weeks, about {course.hours} hours
          </dd>
        </div>
        <div>
          <dt className="sr-only">Lessons</dt>
          <dd className="soft">{course.lessonCount} lessons</dd>
        </div>
      </dl>
    </li>
  )
}
