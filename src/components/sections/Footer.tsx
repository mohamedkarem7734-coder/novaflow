const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#" },
  { label: "Changelog", href: "#" },
]

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
]

const resourceLinks = [
  { label: "Documentation", href: "#" },
  { label: "API Reference", href: "#" },
  { label: "Status", href: "#" },
  { label: "Privacy", href: "#" },
]

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="text-sm text-dark-500 transition-colors duration-300 hover:text-dark-300"
    >
      {label}
    </a>
  )
}

function SocialIcon({ platform }: { platform: string }) {
  if (platform === "GitHub") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 1C4.58 1 1 4.58 1 9C1 12.54 3.29 15.53 6.47 16.59C6.87 16.66 7.02 16.42 7.02 16.21C7.02 16.02 7.01 15.39 7.01 14.72C5 15.09 4.48 14.13 4.32 13.63C4.23 13.38 3.84 12.59 3.5 12.38C3.22 12.21 2.82 11.8 3.49 11.79C4.13 11.78 4.58 12.37 4.73 12.63C5.46 13.88 6.66 13.55 7.06 13.34C7.13 12.82 7.35 12.46 7.59 12.25C5.8 12.05 3.93 11.38 3.93 8.41C3.93 7.56 4.23 6.84 4.73 6.28C4.65 6.07 4.38 5.25 4.81 4.15C4.81 4.15 5.49 3.93 7.02 4.95C7.67 4.77 8.37 4.68 9.07 4.68C9.77 4.68 10.47 4.77 11.12 4.95C12.65 3.92 13.33 4.15 13.33 4.15C13.76 5.25 13.49 6.07 13.41 6.28C13.91 6.84 14.21 7.55 14.21 8.41C14.21 11.39 12.33 12.05 10.54 12.25C10.84 12.5 11.1 13 11.1 13.77C11.1 14.88 11.09 15.78 11.09 16.21C11.09 16.42 11.24 16.67 11.64 16.59C14.71 15.53 17 12.54 17 9C17 4.58 13.42 1 9 1Z"
          fill="currentColor"
        />
      </svg>
    )
  }
  if (platform === "Twitter") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M10.5 7.9L16 1.5H14.6L9.9 7.1L6.2 1.5H1.5L7.3 10L1.5 16.8H2.9L7.9 10.9L11.8 16.8H16.5L10.5 7.9ZM8.6 10L8 9.1L3.4 2.5H5.5L9.2 7.7L9.8 8.6L14.6 15.9H12.5L8.6 10Z"
          fill="currentColor"
        />
      </svg>
    )
  }
  if (platform === "LinkedIn") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M3 1.5C1.9 1.5 1 2.4 1 3.5V14.5C1 15.6 1.9 16.5 3 16.5H15C16.1 16.5 17 15.6 17 14.5V3.5C17 2.4 16.1 1.5 15 1.5H3ZM6 13.5H4V7.5H6V13.5ZM5 6.5C4.3 6.5 3.8 6 3.8 5.3C3.8 4.6 4.3 4.1 5 4.1C5.7 4.1 6.2 4.6 6.2 5.3C6.2 6 5.7 6.5 5 6.5ZM14 13.5H12V10.3C12 9.4 11.3 8.7 10.3 8.7C9.3 8.7 8.6 9.4 8.6 10.3V13.5H7V7.5H8.6V8.3C9.1 7.7 9.9 7.3 10.8 7.3C12.6 7.3 14 8.8 14 10.5V13.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
  if (platform === "YouTube") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M16.8 5.1C16.6 4.3 16 3.7 15.2 3.5C14 3 9 3 9 3C9 3 4 3 2.8 3.5C2 3.7 1.4 4.3 1.2 5.1C1 6.3 1 8.8 1 8.8C1 8.8 1 11.3 1.2 12.5C1.4 13.3 2 13.9 2.8 14.1C4 14.6 9 14.6 9 14.6C9 14.6 14 14.6 15.2 14.1C16 13.9 16.6 13.3 16.8 12.5C17 11.3 17 8.8 17 8.8C17 8.8 17 6.3 16.8 5.1ZM7.5 11.5V6.1L12 8.8L7.5 11.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }
  return null
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 pb-8 pt-16 sm:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-nova-500 to-nova-600 text-[11px] font-bold text-white">
                N
              </div>
              <span className="text-base font-bold text-white">NovaFlow</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-dark-500">
              NovaFlow helps teams automate their workflows, collaborate in real
              time, and ship products faster — all from a single platform.
            </p>
            <div className="mt-5 flex items-center gap-4">
              {["GitHub", "Twitter", "LinkedIn", "YouTube"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] text-dark-500 transition-all duration-300 hover:border-nova-500/30 hover:bg-nova-500/10 hover:text-nova-400"
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-widest text-dark-400 uppercase">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-widest text-dark-400 uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-widest text-dark-400 uppercase">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-6 sm:mt-16">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-dark-600">
              &copy; {new Date().getFullYear()} NovaFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-dark-600 transition-colors duration-300 hover:text-dark-400">Terms</a>
              <a href="#" className="text-xs text-dark-600 transition-colors duration-300 hover:text-dark-400">Privacy</a>
              <a href="#" className="text-xs text-dark-600 transition-colors duration-300 hover:text-dark-400">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
