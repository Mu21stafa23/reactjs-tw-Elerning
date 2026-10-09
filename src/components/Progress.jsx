export default function Progress({ done, total, label }) {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100)
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 text-sm font-semibold">
        <span>{label ?? `${done} of ${total} lessons done`}</span>
        <span className="soft tabular-nums">{percent}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Course progress"
        className="mt-2 h-2.5 overflow-hidden rounded-full bg-mist dark:bg-night"
      >
        <div className="h-full rounded-full bg-cobalt dark:bg-marker" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}
