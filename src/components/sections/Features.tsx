const features = [
  {
    title: "Smart Task Management",
    description:
      "Organize, prioritize, and track tasks across projects with drag-and-drop boards, smart filters, and automated reminders that adapt to your workflow.",
    span: "lg:col-span-2",
    preview: "tasks",
  },
  {
    title: "Team Collaboration",
    description:
      "Work together in real time with shared workspaces, threaded comments, and instant notifications that keep everyone aligned without the noise.",
    span: "lg:col-span-2",
    preview: "activity",
  },
  {
    title: "Workflow Automation",
    description:
      "Build custom automation sequences with a visual editor. Trigger actions, route data, and eliminate repetitive manual steps across your entire stack.",
    span: "lg:col-span-3",
    preview: "flow",
  },
  {
    title: "Cross-platform Sync",
    description:
      "Access your workspace from any device with seamless real-time sync. Desktop, tablet, and mobile — everything stays up to date.",
    span: "lg:col-span-1",
    preview: "devices",
  },
  {
    title: "Real-time Analytics",
    description:
      "Track performance with live dashboards, custom reports, and instant insights that help you make data-driven decisions faster.",
    span: "lg:col-span-2",
    preview: "chart",
  },
  {
    title: "AI-assisted Productivity",
    description:
      "Get intelligent suggestions for task prioritization, automated status updates, and smart drafting powered by contextual understanding.",
    span: "lg:col-span-2",
    preview: "ai",
  },
]

function IconChecklist() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 9L8.5 11.5L14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconTeam() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 16C1 13.5 3.5 12 7 12C10.5 12 13 13.5 13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 15.5C12 13.5 14 12 17 12C19 12 20 13.5 20 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconBolt() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M9 1L2 11H10L9 19L18 9H10L11 1H9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function IconSync() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M16 10C16 6.5 13.5 4 10 4C7.5 4 5.5 5.5 4.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 10C4 13.5 6.5 16 10 16C12.5 16 14.5 14.5 15.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4.5 3V7.5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 17V12.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconChart() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 18H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="4" y="12" width="3" height="6" rx="0.5" fill="currentColor" fillOpacity="0.6" />
      <rect x="8.5" y="8" width="3" height="10" rx="0.5" fill="currentColor" fillOpacity="0.8" />
      <rect x="13" y="4" width="3" height="14" rx="0.5" fill="currentColor" />
    </svg>
  )
}

function IconSparkle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L11.5 7.5L17 9L11.5 10.5L10 16L8.5 10.5L3 9L8.5 7.5L10 2Z" fill="currentColor" fillOpacity="0.9" />
    </svg>
  )
}

const iconMap = [IconChecklist, IconTeam, IconBolt, IconSync, IconChart, IconSparkle]

function MiniTaskPreview() {
  const items = [
    { label: "Design system audit", done: true },
    { label: "API rate limit handling", done: true },
    { label: "Onboarding email copy", done: false },
    { label: "Sprint planning notes", done: false },
  ]
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 max-xs:p-2 xs:p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-dark-300 uppercase tracking-wider">Today</span>
        <span className="text-[10px] text-dark-600">4 tasks</span>
      </div>
      <div className="space-y-2">
        {items.map(({ label, done }) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
              done
                ? "border-nova-500/60 bg-nova-500/15 text-nova-400"
                : "border-white/[0.08]"
            }`}>
              {done && (
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5L4.5 7.5L8 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className={`text-[12px] ${done ? "text-dark-500 line-through" : "text-dark-300"}`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MiniActivityPreview() {
  const items = [
    { name: "Sarah", action: "completed", target: "User Dashboard", avatar: "S", color: "from-nova-500 to-nova-600" },
    { name: "Marcus", action: "commented on", target: "API v2 PR", avatar: "M", color: "from-emerald-500 to-teal-600" },
    { name: "Aiko", action: "assigned", target: "Dark Mode", avatar: "A", color: "from-amber-500 to-orange-600" },
  ]
  return (
    <div className="space-y-2">
      {items.map(({ name, action, target, avatar, color }) => (
        <div key={name} className="flex items-center gap-2.5 rounded-lg p-2 max-xs:p-1.5 xs:p-2 transition-colors hover:bg-white/[0.03]">
          <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${color} text-[9px] font-bold text-white`}>
            {avatar}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12px] text-dark-200">
              <span className="font-medium">{name}</span>{" "}
              <span className="text-dark-500">{action}</span>{" "}
              <span className="font-medium text-nova-400">{target}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

function MiniFlowPreview() {
  const steps = ["Trigger", "Process", "Action"]
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
      {steps.map((step, i) => (
        <div key={step} className="flex min-w-0 flex-1 items-center gap-2">
          <div className="flex min-w-0 flex-1 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] px-2 py-2 max-xs:py-1.5 xs:py-2 sm:px-3 sm:py-2.5">
            <div className="flex items-center gap-2">
              <div className={`flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ${
                i === 1 ? "bg-nova-500/20 text-nova-400" : "bg-white/[0.05] text-dark-500"
              }`}>
                {i + 1}
              </div>
              <span className={`text-[12px] font-medium ${i === 1 ? "text-nova-300" : "text-dark-400"}`}>{step}</span>
            </div>
          </div>
          {i < steps.length - 1 && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-dark-600">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

function MiniDevicesPreview() {
  return (
    <div className="flex items-center justify-center gap-4 max-xs:gap-3 xs:gap-4">
      {[
        { label: "Desktop", active: true },
        { label: "Mobile", active: true },
        { label: "Tablet", active: false },
      ].map(({ label, active }) => (
        <div key={label} className="flex flex-col items-center gap-1.5">
          <div className={`flex h-9 w-9 max-xs:h-8 max-xs:w-8 xs:h-9 xs:w-9 items-center justify-center rounded-lg text-sm transition-all duration-300 ${
            active
              ? "border border-nova-500/30 bg-nova-500/10"
              : "border border-white/[0.04] bg-white/[0.01] opacity-50"
          }`}>
            {label === "Desktop" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={active ? "text-nova-400" : "text-dark-500"}>
                <rect x="1" y="2" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                <path d="M5 14H11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M8 11V14" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            )}
            {label === "Mobile" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={active ? "text-nova-400" : "text-dark-500"}>
                <rect x="3" y="1" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
                <circle cx="8" cy="12" r="1" fill="currentColor" />
              </svg>
            )}
            {label === "Tablet" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={active ? "text-nova-400" : "text-dark-500"}>
                <rect x="1" y="2" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                <circle cx="8" cy="11.5" r="0.8" fill="currentColor" />
              </svg>
            )}
          </div>
          <span className="text-[10px] text-dark-500">{label}</span>
        </div>
      ))}
    </div>
  )
}

function MiniChartPreview() {
  const bars = [
    { label: "Mon", value: 65 },
    { label: "Tue", value: 85 },
    { label: "Wed", value: 45 },
    { label: "Thu", value: 92 },
    { label: "Fri", value: 78 },
  ]
  const max = 92
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 max-xs:p-2 xs:p-3">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-dark-300 uppercase tracking-wider">This Week</span>
        <span className="flex items-center gap-1 text-[10px] text-emerald-400">
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
            <path d="M1 10L5 6L8 9L13 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 3H13V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          +12.3%
        </span>
      </div>
      <div className="flex items-end justify-between gap-1.5 max-xs:h-8 xs:h-10">
        {bars.map(({ label, value }) => (
          <div key={label} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full rounded-sm bg-nova-500/30 transition-all duration-500"
              style={{ height: `${(value / max) * 100}%` }}
            >
              <div
                className="h-full w-full rounded-sm bg-gradient-to-t from-nova-500 to-nova-400 opacity-80"
                style={{ height: `${(value / max) * 100}%` }}
              />
            </div>
            <span className="text-[9px] text-dark-500">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MiniAIPreview() {
  const suggestions = [
    "Draft sprint summary based on completed tasks",
    "Reschedule overdue items to this week",
    "Flag bottlenecks in the design pipeline",
  ]
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 max-xs:p-2 xs:p-3">
      <div className="mb-2 flex items-center gap-1.5">
        <div className="flex h-4 w-4 items-center justify-center rounded bg-nova-500/20 text-[9px] text-nova-400">
          <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L11.5 7.5L17 9L11.5 10.5L10 16L8.5 10.5L3 9L8.5 7.5L10 2Z" fill="currentColor" />
          </svg>
        </div>
        <span className="text-[11px] font-medium text-nova-300">AI Suggestions</span>
      </div>
      <div className="space-y-1.5">
        {suggestions.map((text) => (
          <div key={text} className="flex items-start gap-2 rounded-md px-2 py-1.5 max-xs:px-1.5 max-xs:py-1 xs:px-2 xs:py-1.5 transition-colors hover:bg-white/[0.03]">
            <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-500/40" />
            <span className="text-[11px] leading-relaxed text-dark-400 max-xs:text-[10px] xs:text-[11px]">{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const previewMap = {
  tasks: MiniTaskPreview,
  activity: MiniActivityPreview,
  flow: MiniFlowPreview,
  devices: MiniDevicesPreview,
  chart: MiniChartPreview,
  ai: MiniAIPreview,
} as const

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden px-6 max-xs:pb-20 xs:pb-28 sm:pb-36 lg:pb-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 h-[450px] w-[450px] rounded-full bg-nova-500/8 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-nova-400/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center max-xs:mb-10 xs:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-nova-500/20 bg-nova-500/8 px-4 py-1.5 text-xs font-medium text-nova-300">
            Features
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-nova-400 to-nova-300 bg-clip-text text-transparent">
              move faster
            </span>
          </h2>
          <p className="mt-4 max-xs:text-sm xs:text-base leading-relaxed text-dark-400">
            NovaFlow combines task management, automation, and analytics into one
            seamless experience.
          </p>
        </div>

        <div className="grid gap-5 max-xs:gap-3 xs:gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = iconMap[i]
            const Preview = previewMap[f.preview as keyof typeof previewMap]
            const isWide = f.span === "lg:col-span-3"
            const isSmall = f.span === "lg:col-span-1"

            return (
              <div
                key={f.title}
                className={`group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 max-xs:p-4 xs:p-5 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-lg hover:shadow-nova-500/5 md:col-span-2 ${f.span} ${
                  isWide ? "lg:col-span-3" : ""
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {isWide && (
                  <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-nova-600/5 via-transparent to-nova-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                )}
                <div className={`flex h-full flex-col ${isWide ? "lg:flex-row lg:items-center lg:gap-10" : ""}`}>
                  <div className={`${isWide ? "lg:w-1/2" : ""} ${isSmall ? "" : "mb-5 max-xs:mb-3 xs:mb-4"}`}>
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-nova-400 transition-all duration-300 group-hover:border-nova-500/30 group-hover:bg-nova-500/10 group-hover:text-nova-300">
                      <Icon />
                    </div>
                    <h3 className={`font-semibold text-white ${isSmall ? "text-sm" : "text-base"}`}>{f.title}</h3>
                    <p className={`mt-1.5 leading-relaxed text-dark-400 ${isSmall ? "text-xs" : "text-sm max-xs:text-xs"}`}>
                      {f.description}
                    </p>
                  </div>
                  <div className={`${isWide ? "lg:w-1/2" : ""} ${!isWide ? "mt-auto" : "mt-5 lg:mt-0"}`}>
                    <Preview />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
