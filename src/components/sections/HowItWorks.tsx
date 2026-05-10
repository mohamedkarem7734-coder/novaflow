const steps = [
  {
    number: "01",
    title: "Create and organize projects",
    description:
      "Set up workspaces, tasks, and workflows in minutes with a clean collaborative interface.",
  },
  {
    number: "02",
    title: "Automate repetitive work",
    description:
      "Build smart automations that eliminate manual updates and keep teams aligned automatically.",
  },
  {
    number: "03",
    title: "Track progress in real time",
    description:
      "Monitor team activity, project health, and analytics from a unified dashboard.",
  },
]

const previews = [
  <MiniBoardPreview key="board" />,
  <MiniAutomatePreview key="automate" />,
  <MiniTrackPreview key="track" />,
]

function MiniBoardPreview() {
  const cards = [
    { title: "Design handoff", tag: "Due today", color: "bg-nova-500/20 text-nova-400" },
    { title: "API documentation", tag: "In review", color: "bg-amber-500/20 text-amber-400" },
    { title: "User testing", tag: "Up next", color: "bg-emerald-500/20 text-emerald-400" },
  ]
  return (
    <div className="space-y-2">
      {cards.map(({ title, tag, color }) => (
        <div key={title} className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5 transition-all duration-300 hover:border-white/[0.1]">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/[0.06] bg-white/[0.03]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-dark-400">
              <rect x="1" y="1" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M4 4H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M4 6H7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M4 8H6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-medium text-dark-200">{title}</p>
          </div>
          <span className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-medium ${color}`}>{tag}</span>
        </div>
      ))}
    </div>
  )
}

function MiniAutomatePreview() {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2 rounded-lg border border-nova-500/15 bg-nova-500/8 p-2.5">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-nova-500/20">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="text-nova-400">
            <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M5.5 3V5.5L7 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-medium text-nova-300">When task status changes</p>
          <p className="text-[10px] text-dark-500">Trigger: status → "Done"</p>
        </div>
      </div>
      <div className="flex justify-center">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-dark-600">
          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-emerald-500/15 bg-emerald-500/8 p-2.5">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="text-emerald-400">
            <path d="M2 5.5L4.5 8L9 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-medium text-emerald-300">Notify in Slack</p>
          <p className="text-[10px] text-dark-500">Send message to #project-updates</p>
        </div>
      </div>
    </div>
  )
}

function MiniTrackPreview() {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-dark-300 uppercase tracking-wider">Project Health</span>
        <span className="flex items-center gap-1 text-[10px] text-emerald-400">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="5" cy="5" r="4" fill="currentColor" fillOpacity="0.2" />
            <circle cx="5" cy="5" r="2" fill="currentColor" />
          </svg>
          On track
        </span>
      </div>
      <div className="space-y-2.5">
        <div>
          <div className="mb-1 flex justify-between text-[10px]">
            <span className="text-dark-400">Design System</span>
            <span className="text-dark-500">75%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-[75%] rounded-full bg-nova-500 transition-all duration-700" />
          </div>
        </div>
        <div>
          <div className="mb-1 flex justify-between text-[10px]">
            <span className="text-dark-400">Backend API</span>
            <span className="text-dark-500">45%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-[45%] rounded-full bg-amber-500 transition-all duration-700" />
          </div>
        </div>
        <div>
          <div className="mb-1 flex justify-between text-[10px]">
            <span className="text-dark-400">Mobile App</span>
            <span className="text-dark-500">90%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-[90%] rounded-full bg-emerald-500 transition-all duration-700" />
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileConnector() {
  return (
    <div className="flex justify-center py-2 lg:hidden">
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-dark-700 bg-dark-900">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-dark-400">
          <path d="M5 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2 6L5 9L8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function StepCard({ number, title, description, children }: {
  number: string
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 transition-all duration-500 hover:border-white/[0.12] hover:shadow-lg hover:shadow-nova-500/5">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-nova-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-nova-500/20 bg-nova-500/10 text-sm font-bold text-nova-400 transition-all duration-300 group-hover:bg-nova-500/20 group-hover:text-nova-300">
          {number}
        </div>
        <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-dark-400">{description}</p>
      {children}
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden px-6 pb-28 sm:pb-36 lg:pb-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-nova-600/8 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-nova-400/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nova-300/3 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-nova-500/20 bg-nova-500/8 px-4 py-1.5 text-xs font-medium text-nova-300">
            How it works
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From idea to{" "}
            <span className="bg-gradient-to-r from-nova-400 to-nova-300 bg-clip-text text-transparent">
              done
            </span>{" "}
            in three steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-400">
            NovaFlow adapts to how your team works — no complex setup, no
            training required.
          </p>
        </div>

        <div className="lg:hidden">
          {steps.map((step, i) => (
            <div key={step.number}>
              <StepCard {...step}>
                {previews[i]}
              </StepCard>
              {i < steps.length - 1 && <MobileConnector />}
            </div>
          ))}
        </div>

        <div className="relative hidden items-start lg:flex lg:gap-3 xl:gap-6">
          <div className="pointer-events-none absolute inset-x-0 top-12 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-nova-500/20 to-transparent" />
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex-1">
              {i > 0 && (
                <div className="absolute -left-[calc(1.5rem+1px)] top-5 hidden h-px w-[calc(1.5rem+1px)] bg-nova-500/15 xl:-left-[calc(1.5rem+1px)] xl:w-[calc(1.5rem+1px)] lg:block" />
              )}
              <StepCard {...step}>
                {previews[i]}
              </StepCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
