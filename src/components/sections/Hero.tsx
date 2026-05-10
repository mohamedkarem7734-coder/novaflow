import DashboardMockup from "@/components/ui/DashboardMockup"

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-28 max-xs:pb-20 xs:pb-28 sm:pt-28 sm:pb-36 lg:pt-32 lg:pb-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 left-1/3 h-[600px] w-[600px] rounded-full bg-nova-600/10 blur-[140px]" />
        <div className="absolute -bottom-48 right-1/4 h-[500px] w-[500px] rounded-full bg-nova-500/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 h-[350px] w-[350px] rounded-full bg-nova-400/5 blur-[100px]" />
        <div className="absolute top-1/4 right-1/3 h-[250px] w-[250px] rounded-full bg-nova-300/3 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-nova-500/20 bg-nova-500/8 px-4 py-1.5 text-xs font-medium text-nova-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-nova-500" />
              Now in public beta
            </div>

            <h1 className="mb-5 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-[3.25rem] lg:text-5xl">
              Automate your
              <br />
              <span className="bg-gradient-to-r from-nova-400 via-nova-300 to-nova-200 bg-clip-text text-transparent">
                entire workflow
              </span>
            </h1>

            <p className="mb-10 text-base leading-relaxed text-dark-400 max-xs:text-sm xs:text-base sm:text-lg sm:leading-relaxed">
              NovaFlow connects your tools, streamlines your processes, and
              eliminates busywork — so your team can focus on what&nbsp;matters.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-nova-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-nova-600/20 transition-all duration-300 hover:bg-nova-500 hover:shadow-nova-500/30 active:scale-[0.97]">
                <span className="relative z-10">Start free trial</span>
                <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
              <button className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-8 py-3.5 text-sm font-semibold text-dark-200 shadow-sm transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.06] hover:shadow-md active:scale-[0.97]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-nova-400">
                  <path d="M4 2L13 8L4 14V2Z" fill="currentColor" />
                </svg>
                See how it works
              </button>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <div className="flex -space-x-2.5">
                {["SC", "ML", "AT", "JW"].map((initials) => (
                  <div
                    key={initials}
                    className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-dark-950 bg-gradient-to-br from-nova-500 to-nova-600 text-[10px] font-bold text-white shadow-sm transition-transform duration-300 hover:scale-110 hover:-translate-y-0.5"
                  >
                    {initials}
                  </div>
                ))}
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-dark-950 bg-dark-800 text-[10px] font-medium text-dark-400">
                  +2
                </div>
              </div>
              <div className="text-xs leading-relaxed text-dark-500">
                <span className="text-sm font-semibold text-dark-200">4.9</span>
                <span className="mx-1.5 inline-block h-3 w-px bg-dark-700" />
                <span className="text-dark-500">from 120+ reviews</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden lg:justify-self-end lg:-mr-4">
            <div className="absolute -inset-10 rounded-[32px] bg-gradient-to-b from-nova-600/8 via-nova-500/4 to-transparent opacity-80 blur-3xl" />
            <div className="relative animate-fade-in [animation-delay:200ms] [animation-duration:600ms] lg:scale-105">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
