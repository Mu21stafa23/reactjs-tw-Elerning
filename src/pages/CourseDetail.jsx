import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Progress from '../components/Progress.jsx'
import { CheckIcon } from '../components/icons.jsx'
import { getCourse, getSubject, subjectStyle } from '../data/courses.js'
import { useLearner } from '../lib/learner.jsx'
import NotFound from './NotFound.jsx'

function duration(minutes) {
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  return rest === 0 ? `${hours} h` : `${hours} h ${rest} min`
}

export default function CourseDetail() {
  const { slug } = useParams()
  const course = getCourse(slug)
  const { isEnrolled, completed, enroll, leave, toggleLesson } = useLearner()
  // How many hours a week the visitor can give. The course plan assumes about six.
  const [pace, setPace] = useState(6)

  if (!course) {
    return <NotFound title="This course does not exist" text="It may have been renamed. The full list is on the courses page." />
  }

  const subject = getSubject(course.subject)
  const enrolled = isEnrolled(course.slug)
  const done = completed(course.slug)
  const next = course.lessons.find((lesson) => !done.includes(lesson.id))
  const finished = enrolled && !next
  const weeksAtPace = Math.max(1, Math.ceil(course.hours / pace))

  return (
    <>
      <section className={`${subjectStyle[course.subject].cover}`}>
        <div className="wrap py-12 lg:py-16">
          <p className="font-semibold">
            <Link to={`/courses?subject=${course.subject}`} className="underline decoration-2 underline-offset-4">
              {subject.name}
            </Link>
            <span aria-hidden="true"> / </span>
            {course.level}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">{course.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8">{course.summary}</p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ['Planned length', `${course.weeks.length} weeks`],
              ['Study time', `About ${course.hours} hours`],
              ['Lessons', `${course.lessonCount}, ${duration(course.videoMinutes)} of video`],
              ['Taught by', course.instructor.name],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="text-sm font-semibold opacity-80">{term}</dt>
                <dd className="mt-0.5 text-lg font-bold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="wrap grid gap-12 py-12 lg:grid-cols-[1fr_22rem] lg:items-start">
        <div>
          <section aria-labelledby="outcomes-heading">
            <h2 id="outcomes-heading" className="text-3xl font-bold tracking-tight">
              What you will be able to do
            </h2>
            <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {course.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 leading-7">
                  <CheckIcon className="mt-1 h-5 w-5 flex-none text-pine dark:text-marker" />
                  {outcome}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="plan-heading" className="mt-14">
            <h2 id="plan-heading" className="text-3xl font-bold tracking-tight">
              The plan, week by week
            </h2>
            <p className="soft mt-3 max-w-2xl leading-7">
              {enrolled ? 'Tick a lesson when you finish it. Your place is saved in this browser.' : 'Enroll to tick lessons off as you finish them.'}
            </p>

            <ol className="mt-8 space-y-10">
              {course.weeks.map((week) => {
                const weekDone = week.lessons.filter((lesson) => done.includes(lesson.id)).length
                return (
                  <li key={week.number}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b-4 border-ink pb-3 dark:border-night-text">
                      <h3 className="text-xl font-bold">
                        <span className="soft me-3 text-base font-semibold">Week {week.number}</span>
                        {week.title}
                      </h3>
                      <p className="soft text-sm font-semibold tabular-nums">
                        {enrolled ? `${weekDone} of ${week.lessons.length} done` : duration(week.lessons.reduce((total, lesson) => total + lesson.minutes, 0))}
                      </p>
                    </div>
                    <ul className="divide-y divide-line dark:divide-night-line">
                      {week.lessons.map((lesson) => {
                        const checked = done.includes(lesson.id)
                        const id = `lesson-${lesson.id}`
                        return (
                          <li key={lesson.id} className="flex items-center gap-4 py-3.5">
                            {enrolled ? (
                              <input
                                id={id}
                                type="checkbox"
                                checked={checked}
                                onChange={() => toggleLesson(course.slug, lesson.id)}
                                className="h-5 w-5 flex-none accent-cobalt dark:accent-marker"
                              />
                            ) : (
                              <span aria-hidden="true" className="soft w-5 flex-none text-center text-sm font-semibold tabular-nums">
                                {lesson.id.split('.')[1]}
                              </span>
                            )}
                            <label htmlFor={enrolled ? id : undefined} className={`flex-1 leading-7 ${checked ? 'soft line-through' : ''} ${enrolled ? 'cursor-pointer' : ''}`}>
                              {lesson.title}
                            </label>
                            <span className="soft flex-none text-sm tabular-nums">{lesson.minutes} min</span>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                )
              })}
            </ol>
          </section>

          <section aria-labelledby="teacher-heading" className="mt-14">
            <h2 id="teacher-heading" className="text-3xl font-bold tracking-tight">
              Your instructor
            </h2>
            <div className="mt-6 flex items-center gap-5">
              <span aria-hidden="true" className={`flex h-16 w-16 flex-none items-center justify-center rounded-full font-display text-2xl font-bold ${subjectStyle[course.subject].cover}`}>
                {course.instructor.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </span>
              <div>
                <p className="text-xl font-bold">{course.instructor.name}</p>
                <p className="soft">{course.instructor.role}</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24" aria-label="Enrollment">
          <div className="panel">
            {enrolled ? (
              <>
                <h2 className="text-2xl font-bold">{finished ? 'Course finished' : 'You are enrolled'}</h2>
                <div className="mt-5">
                  <Progress done={done.length} total={course.lessonCount} />
                </div>
                {next ? (
                  <p className="mt-5 leading-7">
                    <span className="soft block text-sm font-semibold">Next lesson</span>
                    {next.title}
                  </p>
                ) : (
                  <p className="mt-5 leading-7">Every lesson is ticked. Well done.</p>
                )}
                <div className="mt-6 flex flex-wrap gap-3">
                  {next && (
                    <button type="button" className="btn-primary" onClick={() => toggleLesson(course.slug, next.id)}>
                      Mark it done
                    </button>
                  )}
                  <Link to="/my-learning" className="btn-quiet">
                    My learning
                  </Link>
                </div>
                <button type="button" className="link mt-6 text-sm" onClick={() => leave(course.slug)}>
                  Leave this course
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold">Start this course</h2>
                <p className="soft mt-2 leading-7">Free in this demo. One click, no payment, and you can leave whenever you like.</p>
                <button type="button" className="btn-primary mt-6 w-full" onClick={() => enroll(course.slug)}>
                  Enroll
                </button>
              </>
            )}
          </div>

          <div className="panel">
            <h2 className="text-xl font-bold">How long will it take you?</h2>
            <label htmlFor="pace" className="soft mt-2 block leading-7">
              Hours you can study each week
            </label>
            <div className="mt-3 flex items-center gap-4">
              <input
                id="pace"
                type="range"
                min="2"
                max="15"
                step="1"
                value={pace}
                onChange={(event) => setPace(Number(event.target.value))}
                className="h-11 flex-1 accent-cobalt dark:accent-marker"
              />
              <output htmlFor="pace" className="w-12 text-end font-display text-2xl font-bold tabular-nums">
                {pace}
              </output>
            </div>
            <p className="mt-3 text-lg leading-7" aria-live="polite">
              At {pace} hours a week you would finish in about{' '}
              <strong className="font-bold">
                {weeksAtPace} {weeksAtPace === 1 ? 'week' : 'weeks'}
              </strong>
              .
            </p>
          </div>
        </aside>
      </div>
    </>
  )
}
