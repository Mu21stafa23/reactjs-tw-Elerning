// A labelled input with its error message wired up for screen readers.
export default function FormField({ id, label, error, hint, as: Tag = 'input', className = '', children, ...rest }) {
  const describedBy = [error ? `${id}-error` : null, hint ? `${id}-hint` : null].filter(Boolean).join(' ') || undefined
  return (
    <div className={className}>
      <label htmlFor={id} className="block font-semibold">
        {label}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="soft mt-1 text-sm">
          {hint}
        </p>
      )}
      <Tag
        id={id}
        name={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={`field mt-2 ${error ? 'field-invalid' : ''}`}
        {...rest}
      >
        {children}
      </Tag>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-danger dark:text-danger-soft">
          {error}
        </p>
      )}
    </div>
  )
}
