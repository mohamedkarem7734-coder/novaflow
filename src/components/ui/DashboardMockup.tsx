const metrics = [
  { label: "Total Revenue", value: "$128.4k", change: "+12.3%", up: true },
  { label: "Active Users", value: "2,847", change: "+8.1%", up: true },
  { label: "Tasks Done", value: "14,293", change: "+23.5%", up: true },
  { label: "Avg Response", value: "1.4min", change: "-18.7%", up: false },
]

const projects = [
  { name: "Design System", status: "In Progress", progress: 75, color: "bg-nova-500" },
  { name: "API Integration", status: "Review", progress: 45, color: "bg-emerald-500" },
  { name: "Mobile App", status: "Planning", progress: 20, color: "bg-amber-500" },
]

const activities = [
  { name: "Sarah Chen", action: "completed", target: "User Dashboard", time: "2m ago", avatar: "SC" },
  { name: "Marcus Lee", action: "pushed", target: "API v2.3", time: "14m ago", avatar: "ML" },
  { name: "Aiko Tanaka", action: "commented on", target: "Dark Mode PR", time: "31m ago", avatar: "AT" },
  { name: "James Wilson", action: "deployed", target: "Staging", time: "1h ago", avatar: "JW" },
]

const tasks = [
  { name: "Update onboarding flow", done: true },
  { name: "Fix pagination bug", done: true },
  { name: "Write API docs", done: false },
  { name: "Design system audit", done: false },
]

function TrendUp() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
      <path d="M1 10L5 6L8 9L13 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 3H13V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TrendDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
      <path d="M1 4L5 8L8 5L13 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 11H13V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WindowControls() {
  return (
    <div className="flex items-center gap-1.5 px-5 py-3.5">
      <span className="h-3 w-3 rounded-full bg-red-500/80" />
      <span className="h-3 w-3 rounded-full bg-amber-500/80" />
      <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
    </div>
  )
}

function StatsCard({ label, value, change, up, index }: {
  label: string
  value: string
  change: string
  up: boolean
  index: number
}) {
  return (
    <div
      className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-lg hover:shadow-nova-500/5"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <p className="mb-2 text-[11px] font-medium tracking-wider text-dark-500 uppercase">{label}</p>
      <p className="text-xl font-bold tracking-tight text-white">{value}</p>
      <div className={`mt-1.5 flex items-center gap-1 ${up ? "text-emerald-400" : "text-red-400"}`}>
        <span className="flex items-center">{up ? <TrendUp /> : <TrendDown />}</span>
        <span className="text-[11px] font-medium">{change}</span>
        <span className="ml-auto text-[10px] text-dark-600">vs last mo.</span>
      </div>
    </div>
  )
}

function Chart() {
  const points = "0,112 60,72 120,96 180,44 240,64 300,28 360,48"
  const area = `M0,112 L${points} L360,140 L0,140 Z`

  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Monthly Activity</p>
          <p className="mt-0.5 text-xs text-dark-500">Jan – Jun 2026</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs text-dark-400">
            <span className="h-2 w-2 rounded-full bg-nova-500" />
            Current
          </span>
          <span className="flex items-center gap-1.5 text-xs text-dark-500">
            <span className="h-2 w-2 rounded-full bg-dark-600" />
            Previous
          </span>
        </div>
      </div>
      <svg viewBox="0 0 360 140" className="h-32 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chartGradPrev" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#52525b" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#52525b" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points="0,100 60,84 120,88 180,76 240,80 300,68 360,72" fill="none" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="0,100 60,84 120,88 180,76 240,80 300,68 360,72 360,140 0,140" fill="url(#chartGradPrev)" />
        <polyline points={points} fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points={area} fill="url(#chartGrad)" />
        {["0,112", "60,72", "120,96", "180,44", "240,64", "300,28", "360,48"].map((pt) => {
          const [cx, cy] = pt.split(",").map(Number)
          return (
            <circle key={pt} cx={cx} cy={cy} r="3" fill="#818cf8" stroke="#09090b" strokeWidth="2" />
          )
        })}
      </svg>
    </div>
  )
}

function ProjectCard({ name, status, progress, color }: {
  name: string
  status: string
  progress: number
  color: string
}) {
  return (
    <div className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="rounded-md border border-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-dark-400 uppercase tracking-wider">{status}</span>
      </div>
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className={`absolute inset-y-0 left-0 rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-1.5 text-xs text-dark-500">{progress}% complete</p>
    </div>
  )
}

function ActivityRow({ name, action, target, time, avatar, index }: {
  name: string
  action: string
  target: string
  time: string
  avatar: string
  index: number
}) {
  return (
    <div
      className="group flex items-center gap-3 rounded-xl px-4 py-2.5 transition-all duration-300 hover:bg-white/[0.03]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-nova-500/20 to-nova-600/20 text-[10px] font-bold text-nova-400 uppercase">
        {avatar}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm text-white">
          <span className="font-medium">{name}</span>{" "}
          <span className="text-dark-400">{action}</span>{" "}
          <span className="font-medium text-nova-400">{target}</span>
        </p>
      </div>
      <span className="shrink-0 text-xs text-dark-600">{time}</span>
    </div>
  )
}

function TaskRow({ name, done, index }: { name: string; done: boolean; index: number }) {
  return (
    <div
      className="group flex items-center gap-3 rounded-xl px-4 py-2.5 transition-all duration-300 hover:bg-white/[0.03]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[10px] transition-all duration-300 ${
        done
          ? "border-nova-500 bg-nova-500/20 text-nova-400"
          : "border-white/[0.08] text-transparent group-hover:border-white/[0.15]"
      }`}>
        {done && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5L4.5 7.5L8 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className={`text-sm ${done ? "text-dark-500 line-through" : "text-dark-200"}`}>{name}</span>
    </div>
  )
}

export default function DashboardMockup() {
  return (
    <div className="group relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-nova-600/20 via-nova-500/5 to-transparent opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-950/85 shadow-2xl shadow-nova-500/10 backdrop-blur-2xl transition-all duration-500">
        <WindowControls />
        <div className="border-t border-white/[0.06]" />
        <div className="flex">
          <aside className="hidden w-14 flex-col items-center gap-6 border-r border-white/[0.06] py-5 sm:flex">
            {[
              { icon: "H", label: "Home" },
              { icon: "P", label: "Projects" },
              { icon: "T", label: "Tasks" },
              { icon: "A", label: "Analytics" },
              { icon: "S", label: "Settings" },
            ].map(({ icon, label }) => (
              <button
                key={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold text-dark-500 transition-all duration-300 hover:bg-white/[0.06] hover:text-nova-400"
              >
                {icon}
              </button>
            ))}
          </aside>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-nova-500 to-nova-600 text-[10px] font-bold text-white">N</div>
                <span className="hidden text-sm font-semibold text-white sm:inline">NovaFlow</span>
              </div>
              <div className="relative mx-6 hidden max-w-md flex-1 md:block">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-dark-500">
                    <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <input
                  readOnly
                  placeholder="Search tasks, projects..."
                  className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] py-2 pl-10 pr-4 text-sm text-dark-200 outline-none placeholder:text-dark-600 transition-all focus:border-nova-500/50 focus:bg-white/[0.05]"
                />
              </div>
              <div className="flex items-center gap-3">
                <button className="relative flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 hover:bg-white/[0.06]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-dark-400">
                    <path d="M8 1.5C6.75 1.5 5.5 2 5.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 1.5C9.25 1.5 10.5 2 10.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M2.5 11.5C3.5 10.5 4 9 4 7V5.5C4 3.5 5.5 2 8 2C10.5 2 12 3.5 12 5.5V7C12 9 12.5 10.5 13.5 11.5H2.5Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6 11.5V12C6 13.5 7 14 8 14C9 14 10 13.5 10 12V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="11" cy="4" r="1.5" fill="#ef4444" />
                  </svg>
                </button>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-nova-500 to-nova-600 text-[11px] font-bold text-white">
                  JD
                </div>
              </div>
            </div>
            <div className="p-5 md:p-6">
              <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {metrics.map((m, i) => (
                  <StatsCard key={m.label} {...m} index={i} />
                ))}
              </div>
              <div className="mb-6">
                <Chart />
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white">Projects</h3>
                    <button className="text-xs text-nova-400 transition-colors duration-300 hover:text-nova-300">View all</button>
                  </div>
                  <div className="space-y-3">
                    {projects.map((p) => (
                      <ProjectCard key={p.name} {...p} />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white">Today's Tasks</h3>
                    <button className="text-xs text-nova-400 transition-colors duration-300 hover:text-nova-300">Add</button>
                  </div>
                  <div className="-mx-4">
                    {tasks.map((t, i) => (
                      <TaskRow key={t.name} {...t} index={i} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white">Team Activity</h3>
                  <button className="text-xs text-nova-400 transition-colors duration-300 hover:text-nova-300">View all</button>
                </div>
                <div className="-mx-4">
                  {activities.map((a, i) => (
                    <ActivityRow key={a.name + a.action} {...a} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
