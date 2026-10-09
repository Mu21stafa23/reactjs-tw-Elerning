import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormField from '../components/FormField.jsx'
import { emailPattern, nameFromEmail, useLearner } from '../lib/learner.jsx'

export default function SignIn() {
  const { signIn } = useLearner()
  const navigate = useNavigate()
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const form = useRef(null)

  const set = (key) => (event) => {
    setValues((current) => ({ ...current, [key]: event.target.value }))
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }))
  }

  function submit(event) {
    event.preventDefault()
    const found = {}
    const email = values.email.trim()
    if (!email) found.email = 'Enter your e-mail address.'
    else if (!emailPattern.test(email)) found.email = 'Enter an address like name@example.com.'
    if (!values.password) found.password = 'Enter your password.'
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      form.current?.querySelector(`#${first}`)?.focus()
      return
    }
    signIn({ name: nameFromEmail(email), email })
    navigate('/my-learning')
  }

  return (
    <div className="wrap grid gap-12 pb-8 pt-12 lg:grid-cols-2 lg:items-start lg:pt-16">
      <div>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Sign in</h1>
        <p className="soft mt-5 max-w-md text-lg leading-8">Pick up where you stopped.</p>
        <p className="mt-8 max-w-md rounded-2xl bg-marker p-5 leading-7 text-ink">
          This is a demo, so any e-mail and any password will sign you in. The password is not checked, kept or sent anywhere.
        </p>
      </div>

      <form ref={form} onSubmit={submit} noValidate className="panel space-y-6" aria-label="Sign in">
        <FormField id="email" label="E-mail" type="email" value={values.email} onChange={set('email')} error={errors.email} autoComplete="email" inputMode="email" />
        <FormField id="password" label="Password" type="password" value={values.password} onChange={set('password')} error={errors.password} autoComplete="current-password" />
        <button type="submit" className="btn-primary w-full">
          Sign in
        </button>
        <p className="soft">
          New here?{' '}
          <Link to="/register" className="link">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  )
}
