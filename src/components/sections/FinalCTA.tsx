export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 max-xs:pb-20 sm:pb-36 lg:pb-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nova-600/10 blur-[140px]" />
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-nova-500/8 blur-[100px]" />
        <div className="absolute -bottom-20 left-1/4 h-[300px] w-[300px] rounded-full bg-nova-400/5 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-nova-500/20 bg-gradient-to-b from-nova-500/[0.08] via-nova-500/[0.03] to-transparent px-6 py-14 max-xs:px-4 max-xs:py-10 xs:px-6 xs:py-14 shadow-2xl shadow-nova-500/10 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 -right-20 h-[300px] w-[300px] rounded-full bg-nova-400/10 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full bg-nova-600/10 blur-[80px]" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-nova-500/20 bg-nova-500/10 px-4 py-1.5 text-xs font-medium text-nova-300">
              Get started today
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to simplify{" "}
              <span className="bg-gradient-to-r from-nova-400 to-nova-200 bg-clip-text text-transparent">
                your workflow
              </span>
              ?
            </h2>

            <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-dark-400 max-xs:text-sm xs:text-base">
              Join thousands of teams already using NovaFlow to automate their
              work, collaborate better, and ship faster than ever.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-nova-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-nova-600/20 transition-all duration-300 hover:bg-nova-500 hover:shadow-nova-500/30 active:scale-[0.97]">
                <span className="relative z-10">Start free trial</span>
                <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-8 py-3.5 text-sm font-semibold text-dark-200 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06] hover:shadow-md active:scale-[0.97]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-nova-400">
                  <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M6 6L10 8L6 10V6Z" fill="currentColor" fillOpacity="0.8" />
                </svg>
                Book a demo
              </button>
            </div>

            <p className="mt-6 text-xs text-dark-500">
              No credit card required &middot; Free 14-day trial
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
