import { Link } from 'react-router-dom'
import { getSubject, subjectStyle } from '../data/courses.js'

// Large tile with a colored cover, used for the featured courses on the home page.
export default function CourseTile({ course }) {
  const subject = getSubject(course.subject)
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line dark:border-night-line">
      <div className={`flex aspect-[5/3] flex-col justify-between p-6 ${subjectStyle[course.subject].cover}`}>
        <p className="font-semibold">{subject.name}</p>
        <p className="font-display text-5xl font-bold leading-none tracking-tight">
          {course.weeks.length} weeks
        </p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold leading-snug tracking-tight">
          <Link to={`/courses/${course.slug}`} className="hover:underline hover:underline-offset-4">
            {course.title}
          </Link>
        </h3>
        <p className="soft mt-3 flex-1 leading-7">{course.summary}</p>
        <p className="mt-5 text-sm font-semibold">
          {course.level}, {course.lessonCount} lessons, about {course.hours} hours
        </p>
      </div>
    </article>
  )
}
