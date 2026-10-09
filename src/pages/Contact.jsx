import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FormField from '../components/FormField.jsx'
import { emailPattern, useLearner } from '../lib/learner.jsx'

const topics = ['A question about a course', 'A problem with the site', 'Teaching at Moon Academy', 'Something else']

function check(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your name.'
  if (!values.email.trim()) errors.email = 'Enter your e-mail address.'
  else if (!emailPattern.test(values.email.trim())) errors.email = 'Enter an address like name@example.com.'
  if (values.message.trim().length < 10) errors.message = 'Write at least a sentence, so we know how to help.'
  return errors
}

export default function Contact() {
  const { learner } = useLearner()
  const [values, setValues] = useState({ name: learner.name ?? '', email: learner.email ?? '', topic: topics[0], message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const form = useRef(null)

  const set = (key) => (event) => {
    setValues((current) => ({ ...current, [key]: event.target.value }))
    // An error goes away as soon as the field is touched again.
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }))
  }

  function submit(event) {
    event.preventDefault()
    const found = check(values)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      form.current?.querySelector(`#${first}`)?.focus()
      return
    }
    setSent(true)
  }

  if (sent) {
    return (
      <div className="wrap py-16 lg:py-24">
        <div className="panel max-w-2xl" role="status">
          <h1 className="text-4xl font-bold tracking-tight">Thank you, {values.name.trim()}.</h1>
          <p className="soft mt-4 text-lg leading-8">
            This is where a real site would confirm your message. Moon Academy is a demo, so the message was checked and then discarded: nothing was sent or stored.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/courses" className="btn-primary">
              Browse courses
            </Link>
            <button
              type="button"
              className="btn-quiet"
              onClick={() => {
                setValues((current) => ({ ...current, message: '' }))
                setSent(false)
              }}
            >
              Write another message
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="wrap grid gap-12 pb-8 pt-12 lg:grid-cols-[1fr_1.1fr] lg:pt-16">
      <div>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Contact</h1>
        <p className="soft mt-5 max-w-md text-lg leading-8">Ask about a course, report a problem, or tell us what you would like to learn next.</p>
        <dl className="mt-10 divide-y divide-line border-y border-line dark:divide-night-line dark:border-night-line">
          {[
            ['Replies', 'Within two working days'],
            ['Hours', 'Sunday to Thursday, 9:00 to 17:00'],
            ['Languages', 'Arabic and English'],
          ].map(([term, text]) => (
            <div key={term} className="flex justify-between gap-6 py-4">
              <dt className="font-bold">{term}</dt>
              <dd className="soft text-end">{text}</dd>
            </div>
          ))}
        </dl>
      </div>

      <form ref={form} onSubmit={submit} noValidate className="panel space-y-6" aria-label="Contact form">
        <FormField id="name" label="Your name" value={values.name} onChange={set('name')} error={errors.name} autoComplete="name" />
        <FormField id="email" label="E-mail" type="email" value={values.email} onChange={set('email')} error={errors.email} autoComplete="email" inputMode="email" />
        <FormField id="topic" label="What is it about?" as="select" value={values.topic} onChange={set('topic')}>
          {topics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </FormField>
        <FormField id="message" label="Message" as="textarea" rows={6} value={values.message} onChange={set('message')} error={errors.message} />
        <button type="submit" className="btn-primary">
          Send message
        </button>
      </form>
    </div>
  )
}
