import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center container-px">
      <p className="eyebrow">ERROR // 404</p>
      <h1 className="mt-4 font-display text-5xl sm:text-6xl font-semibold">
        Signal <span className="text-emerald">lost</span>.
      </h1>
      <p className="mt-4 text-muted max-w-md">
        This route doesn't exist. Let's get you back to a known good state.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald text-ink font-semibold px-7 py-3.5 shadow-emerald-glow hover:brightness-110 transition"
      >
        Back to home
      </Link>
    </main>
  )
}
