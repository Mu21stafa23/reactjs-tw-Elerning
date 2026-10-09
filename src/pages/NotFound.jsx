import { Link } from 'react-router-dom'

export default function NotFound({ title = 'This page does not exist', text = 'The address may be mistyped, or the page may have moved.' }) {
  return (
    <div className="wrap py-20 lg:py-28">
      <p className="font-display text-7xl font-bold leading-none text-cobalt dark:text-marker">404</p>
      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      <p className="soft mt-4 max-w-xl text-lg leading-8">{text}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/courses" className="btn-primary">
          Browse courses
        </Link>
        <Link to="/" className="btn-quiet">
          Go to the home page
        </Link>
      </div>
    </div>
  )
}
