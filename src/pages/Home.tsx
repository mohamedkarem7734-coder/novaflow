import { APP_NAME } from "@/constants"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-dark-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-white">{APP_NAME}</span>
          <nav className="hidden items-center gap-8 sm:flex">
            {["Features", "Pricing", "About"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-dark-400 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>
          <button className="rounded-lg bg-nova-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-nova-500">
            Get Started
          </button>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-6">
        <section className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dark-700 bg-dark-900 px-4 py-1.5 text-xs text-dark-400">
            <span className="h-1.5 w-1.5 rounded-full bg-nova-500" />
            Now in public beta
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Automate your
            <br />
            <span className="bg-gradient-to-r from-nova-400 to-nova-300 bg-clip-text text-transparent">
              entire workflow
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-dark-400 sm:text-lg">
            NovaFlow connects your tools, streamlines your processes, and
            eliminates busywork — so your team can focus on what matters.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="w-full rounded-lg bg-nova-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-nova-500 sm:w-auto">
              Start free trial
            </button>
            <button className="w-full rounded-lg border border-dark-700 bg-dark-900 px-8 py-3 text-sm font-semibold text-dark-200 transition-all hover:bg-dark-800 sm:w-auto">
              See how it works
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-dark-800">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-dark-600">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
