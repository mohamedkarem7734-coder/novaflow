const testimonials = [
  {
    quote:
      "NovaFlow cut our operational overhead by nearly 40%. We went from juggling five different tools to a single source of truth — our team has never been more aligned.",
    name: "Sarah Chen",
    role: "CEO",
    company: "Flux Studio",
    avatar: "SC",
    gradient: "from-nova-500 to-nova-600",
  },
  {
    quote:
      "We went from chaos to clarity in under two weeks. The automation engine alone saves our product team roughly ten hours per week on status updates and handoffs.",
    name: "Marcus Lee",
    role: "Product Lead",
    company: "Relay",
    avatar: "ML",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    quote:
      "The visibility into our team's work is night and day. For the first time I can see exactly where bottlenecks form and address them before they slow us down.",
    name: "Aiko Tanaka",
    role: "Engineering Manager",
    company: "Drift",
    avatar: "AT",
    gradient: "from-amber-500 to-orange-600",
  },
]

const companies = [
  "Flux Studio",
  "Relay",
  "Drift",
  "Pulse",
  "Rivian Digital",
  "Harbor",
]

function QuoteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M8 6C5.5 6 4 8 4 11V16H10V11H6C6 8.5 7 8 8 8V6ZM18 6C15.5 6 14 8 14 11V16H20V11H16C16 8.5 17 8 18 8V6Z"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </svg>
  )
}

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-amber-400">
          <path
            d="M7 1L9.05 5.15L13 5.7L10.25 8.35L10.9 12.3L7 10.15L3.1 12.3L3.75 8.35L1 5.7L4.95 5.15L7 1Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ quote, name, role, company, avatar, gradient, index }: {
  quote: string
  name: string
  role: string
  company: string
  avatar: string
  gradient: string
  index: number
}) {
  return (
    <div
      className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 transition-all duration-500 hover:border-white/[0.12] hover:shadow-xl hover:shadow-nova-500/5 sm:p-7"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-nova-500/3 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-5 flex items-center justify-between">
        <div className="text-nova-400/30 transition-colors duration-300 group-hover:text-nova-400/50">
          <QuoteIcon />
        </div>
        <StarRating />
      </div>

      <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-dark-300 sm:text-base sm:leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3.5 border-t border-white/[0.06] pt-4">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-[11px] font-bold text-white`}>
          {avatar}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{name}</p>
          <p className="truncate text-xs text-dark-500">
            {role}, <span className="text-dark-400">{company}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden px-6 pb-28 sm:pb-36 lg:pb-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 h-[400px] w-[400px] rounded-full bg-nova-500/8 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 h-[350px] w-[350px] rounded-full bg-nova-400/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-14 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] sm:mb-16">
          <div className="px-6 py-5 sm:px-8">
            <p className="mb-4 text-center text-[11px] font-medium tracking-widest text-dark-500 uppercase">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {companies.map((name) => (
                <span
                  key={name}
                  className="text-sm font-semibold tracking-tight text-dark-400 transition-colors duration-300 hover:text-dark-300"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-nova-500/20 bg-nova-500/8 px-4 py-1.5 text-xs font-medium text-nova-300">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Loved by teams who{" "}
            <span className="bg-gradient-to-r from-nova-400 to-nova-300 bg-clip-text text-transparent">
              ship faster
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-400">
            See how teams are using NovaFlow to streamline their workflows and
            deliver better results.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
