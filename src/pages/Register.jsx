import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormField from '../components/FormField.jsx'
import { emailPattern, useLearner } from '../lib/learner.jsx'

export default function Register() {
  const { signIn } = useLearner()
  const navigate = useNavigate()
  const [values, setValues] = useState({ name: '', email: '', password: '', again: '' })
  const [errors, setErrors] = useState({})
  const form = useRef(null)

  const set = (key) => (event) => {
    setValues((current) => ({ ...current, [key]: event.target.value }))
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }))
  }

  function submit(event) {
    event.preventDefault()
    const found = {}
    const name = values.name.trim()
    const email = values.email.trim()
    if (!name) found.name = 'Enter your name.'
    if (!email) found.email = 'Enter your e-mail address.'
    else if (!emailPattern.test(email)) found.email = 'Enter an address like name@example.com.'
    if (values.password.length < 8) found.password = 'Use at least 8 characters.'
    if (values.again !== values.password) found.again = 'The two passwords are not the same.'
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      form.current?.querySelector(`#${first}`)?.focus()
      return
    }
    signIn({ name, email })
    navigate('/my-learning')
  }

  return (
    <div className="wrap grid gap-12 pb-8 pt-12 lg:grid-cols-2 lg:items-start lg:pt-16">
      <div>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Create an account</h1>
        <p className="soft mt-5 max-w-md text-lg leading-8">Put your name on your progress.</p>
        <p className="mt-8 max-w-md rounded-2xl bg-marker p-5 leading-7 text-ink">
          This is a demo. Your name and e-mail are kept only in this browser, and the password is not kept at all.
        </p>
      </div>

      <form ref={form} onSubmit={submit} noValidate className="panel space-y-6" aria-label="Create an account">
        <FormField id="name" label="Your name" value={values.name} onChange={set('name')} error={errors.name} autoComplete="name" />
        <FormField id="email" label="E-mail" type="email" value={values.email} onChange={set('email')} error={errors.email} autoComplete="email" inputMode="email" />
        <FormField id="password" label="Password" hint="At least 8 characters." type="password" value={values.password} onChange={set('password')} error={errors.password} autoComplete="new-password" />
        <FormField id="again" label="Password again" type="password" value={values.again} onChange={set('again')} error={errors.again} autoComplete="new-password" />
        <button type="submit" className="btn-primary w-full">
          Create account
        </button>
        <p className="soft">
          Already have one?{' '}
          <Link to="/sign-in" className="link">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  )
}
