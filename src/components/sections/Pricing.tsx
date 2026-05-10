const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "For small teams getting started with workflow automation.",
    popular: false,
    features: [
      "Up to 5 team members",
      "Basic automations",
      "Shared workspaces",
      "Task & project management",
      "Email support",
    ],
    cta: "Start free trial",
    ctaVariant: "secondary" as const,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For growing teams that need advanced automation and insights.",
    popular: true,
    features: [
      "Unlimited team members",
      "Advanced automations",
      "Real-time analytics",
      "AI productivity tools",
      "Priority support",
      "Custom integrations",
    ],
    cta: "Start free trial",
    ctaVariant: "primary" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations that need dedicated infrastructure and support.",
    popular: false,
    features: [
      "Dedicated onboarding",
      "Custom workflows",
      "Advanced security & SSO",
      "API access",
      "99.99% SLA guarantee",
      "Dedicated account manager",
    ],
    cta: "Contact sales",
    ctaVariant: "secondary" as const,
  },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 8L7 11L12 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PricingCard({ plan, index }: { plan: (typeof plans)[number]; index: number }) {
  const isPopular = plan.popular

  return (
    <div
      className={`group relative flex flex-col rounded-2xl border p-7 max-xs:p-4 xs:p-6 sm:p-7 transition-all duration-500 ${
        isPopular
          ? "border-nova-500/40 bg-gradient-to-b from-nova-500/[0.06] to-white/[0.02] shadow-lg shadow-nova-500/10 hover:border-nova-500/60 hover:shadow-xl hover:shadow-nova-500/15"
          : "border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:border-white/[0.12] hover:shadow-lg hover:shadow-nova-500/5"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {isPopular && (
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-nova-500/8 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}

      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-nova-600 px-4 py-1 text-[11px] font-semibold text-white shadow-lg shadow-nova-500/25">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1L7.5 4.5L11 5.5L8 8.5L8.5 12L6 10L3.5 12L4 8.5L1 5.5L4.5 4.5L6 1Z"
                fill="currentColor"
              />
            </svg>
            Most popular
          </div>
        </div>
      )}

      <div className={`${isPopular ? "mt-4" : ""} mb-6`}>
        <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-dark-400">{plan.description}</p>
      </div>

      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-white">
          {plan.price}
        </span>
        {plan.period && (
          <span className="text-sm text-dark-500">{plan.period}</span>
        )}
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className={`mt-0.5 shrink-0 ${isPopular ? "text-nova-400" : "text-nova-400/60"}`}>
              <CheckIcon />
            </span>
            <span className="text-sm text-dark-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full rounded-xl py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.97] ${
          isPopular
            ? "bg-nova-600 text-white shadow-lg shadow-nova-600/20 hover:bg-nova-500 hover:shadow-nova-500/30"
            : "border border-white/[0.08] bg-white/[0.03] text-dark-200 hover:border-white/[0.15] hover:bg-white/[0.06] hover:shadow-md"
        }`}
      >
        {plan.cta}
      </button>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden px-6 pb-28 max-xs:pb-20 sm:pb-36 lg:pb-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 h-[450px] w-[450px] rounded-full bg-nova-500/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-nova-400/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center max-xs:mb-10 xs:mb-14 sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-nova-500/20 bg-nova-500/8 px-4 py-1.5 text-xs font-medium text-nova-300">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple pricing.{" "}
            <span className="bg-gradient-to-r from-nova-400 to-nova-300 bg-clip-text text-transparent">
              No surprises.
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-400 max-xs:text-sm xs:text-base">
            Start free, upgrade when you need more. All plans include a 14-day
            free trial with no credit card required.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5 text-center sm:mt-16">
          <p className="text-sm leading-relaxed text-dark-400">
            All plans include a 14-day free trial. No credit card required.{" "}
            <button className="font-medium text-nova-400 transition-colors duration-300 hover:text-nova-300">
              View full feature comparison
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
