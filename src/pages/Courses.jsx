import { Link, useSearchParams } from 'react-router-dom'
import CourseRow from '../components/CourseRow.jsx'
import { SearchIcon } from '../components/icons.jsx'
import { courses, levels, subjects } from '../data/courses.js'

const sorts = {
  recommended: { label: 'Recommended', compare: () => 0 },
  shortest: { label: 'Shortest first', compare: (a, b) => a.hours - b.hours },
  longest: { label: 'Longest first', compare: (a, b) => b.hours - a.hours },
}

export default function Courses() {
  // Filters live in the URL, so a filtered list can be bookmarked or shared.
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const subject = subjects.some((item) => item.id === params.get('subject')) ? params.get('subject') : ''
  const level = levels.includes(params.get('level')) ? params.get('level') : ''
  const sort = Object.hasOwn(sorts, params.get('sort') ?? '') ? params.get('sort') : 'recommended'

  function setFilter(key, value) {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const term = query.trim().toLowerCase()
  const results = courses
    .filter((course) => !subject || course.subject === subject)
    .filter((course) => !level || course.level === level)
    .filter((course) => {
      if (!term) return true
      const haystack = [course.title, course.summary, ...course.outcomes, ...course.lessons.map((lesson) => lesson.title)]
      return haystack.join(' ').toLowerCase().includes(term)
    })
    .sort(sorts[sort].compare)

  const filtered = Boolean(term || subject || level)

  function chipClass(active) {
    return [
      'min-h-11 rounded-full border px-4 py-2 font-semibold transition-colors',
      active
        ? 'border-ink bg-marker text-ink'
        : 'border-line bg-white text-ink hover:border-ink dark:border-night-line dark:bg-night dark:text-night-text dark:hover:border-night-text',
    ].join(' ')
  }

  return (
    <div className="wrap pb-8 pt-12 lg:pt-16">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Courses</h1>
      <p className="soft mt-4 max-w-2xl text-lg leading-8">
        Search by topic, or narrow the list by subject and level.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-[1fr_12rem_12rem]">
        <div className="relative">
          <label htmlFor="course-search" className="sr-only">
            Search courses
          </label>
          <SearchIcon className="soft pointer-events-none absolute start-3.5 top-1/2 h-5 w-5 -translate-y-1/2" />
          <input
            id="course-search"
            type="search"
            value={query}
            onChange={(event) => setFilter('q', event.target.value)}
            placeholder="Search courses and lessons"
            className="field ps-11"
          />
        </div>
        <div>
          <label htmlFor="level" className="sr-only">
            Level
          </label>
          <select id="level" value={level} onChange={(event) => setFilter('level', event.target.value)} className="field">
            <option value="">Any level</option>
            {levels.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sort" className="sr-only">
            Sort by
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(event) => setFilter('sort', event.target.value === 'recommended' ? '' : event.target.value)}
            className="field"
          >
            {Object.entries(sorts).map(([key, item]) => (
              <option key={key} value={key}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div role="group" aria-label="Subject" className="mt-4 flex flex-wrap gap-2">
        <button type="button" aria-pressed={!subject} onClick={() => setFilter('subject', '')} className={chipClass(!subject)}>
          All subjects
        </button>
        {subjects.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={subject === item.id}
            onClick={() => setFilter('subject', item.id)}
            className={chipClass(subject === item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-10 font-semibold">
        {results.length === 0
          ? 'No courses match'
          : `${results.length} ${results.length === 1 ? 'course' : 'courses'}${filtered ? ' match' : ''}`}
      </p>

      {results.length > 0 ? (
        <ul className="mt-2 divide-y divide-line border-y border-line dark:divide-night-line dark:border-night-line">
          {results.map((course) => (
            <CourseRow key={course.slug} course={course} />
          ))}
        </ul>
      ) : (
        <div className="panel mt-4">
          <h2 className="text-2xl font-bold">Nothing matches those filters</h2>
          <p className="soft mt-2 leading-7">
            Try a shorter search term, or clear the filters to see every course.
          </p>
          <Link to="/courses" className="btn-primary mt-6">
            Clear filters
          </Link>
        </div>
      )}
    </div>
  )
}
