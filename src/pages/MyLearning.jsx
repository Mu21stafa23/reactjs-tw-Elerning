import { Link } from 'react-router-dom'
import Progress from '../components/Progress.jsx'
import { courses, getSubject, subjectStyle } from '../data/courses.js'
import { useLearner } from '../lib/learner.jsx'

export default function MyLearning() {
  const { learner, signedIn, isEnrolled, completed } = useLearner()
  const mine = courses.filter((course) => isEnrolled(course.slug))
  const lessonsDone = mine.reduce((total, course) => total + completed(course.slug).length, 0)
  const minutesDone = mine.reduce(
    (total, course) => total + course.lessons.filter((lesson) => completed(course.slug).includes(lesson.id)).reduce((sum, lesson) => sum + lesson.minutes, 0),
    0,
  )
  const finished = mine.filter((course) => completed(course.slug).length === course.lessonCount).length

  return (
    <div className="wrap pb-8 pt-12 lg:pt-16">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">{signedIn ? `${learner.name}'s learning` : 'My learning'}</h1>

      {mine.length === 0 ? (
        <div className="panel mt-10 max-w-2xl">
          <h2 className="text-2xl font-bold">You have not enrolled in a course yet</h2>
          <p className="soft mt-2 leading-7">
            Open any course and press Enroll. It will show up here with your progress, and you will not need an account.
          </p>
          <Link to="/courses" className="btn-primary mt-6">
            Browse courses
          </Link>
        </div>
      ) : (
        <>
          <dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-3 dark:border-night-line">
            {[
              ['Courses', mine.length, finished > 0 ? `${finished} finished` : 'in progress'],
              ['Lessons done', lessonsDone, `of ${mine.reduce((total, course) => total + course.lessonCount, 0)}`],
              ['Time studied', minutesDone < 60 ? `${minutesDone} min` : `${Math.round(minutesDone / 6) / 10} h`, 'of video lessons'],
            ].map(([term, value, note]) => (
              <div key={term}>
                <dt className="soft text-sm font-semibold">{term}</dt>
                <dd className="mt-1 font-display text-4xl font-bold tabular-nums">{value}</dd>
                <dd className="soft text-sm">{note}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            {mine.map((course) => {
              const done = completed(course.slug)
              const next = course.lessons.find((lesson) => !done.includes(lesson.id))
              return (
                <li key={course.slug} className="panel relative overflow-hidden ps-8">
                  <span aria-hidden="true" className={`absolute inset-y-0 start-0 w-2 ${subjectStyle[course.subject].bar}`} />
                  <p className="soft text-sm font-semibold">{getSubject(course.subject).name}</p>
                  <h2 className="mt-1 text-2xl font-bold leading-snug tracking-tight">
                    <Link to={`/courses/${course.slug}`} className="hover:underline hover:underline-offset-4">
                      {course.title}
                    </Link>
                  </h2>
                  <div className="mt-5">
                    <Progress done={done.length} total={course.lessonCount} />
                  </div>
                  <p className="mt-5 leading-7">
                    <span className="soft block text-sm font-semibold">{next ? 'Next lesson' : 'Finished'}</span>
                    {next ? next.title : 'Every lesson is ticked.'}
                  </p>
                  <Link to={`/courses/${course.slug}`} className="btn-quiet mt-5">
                    {next ? 'Continue' : 'Review the course'}
                  </Link>
                </li>
              )
            })}
          </ul>

          {!signedIn && (
            <p className="soft mt-10 max-w-2xl leading-7">
              Your progress is kept in this browser.{' '}
              <Link to="/sign-in" className="link">
                Sign in
              </Link>{' '}
              to put your name on it.
            </p>
          )}
        </>
      )}
    </div>
  )
}
