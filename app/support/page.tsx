export const metadata = {
  title: "Support",
  description: "Ways to support my work.",
};

const links = [
  {
    label: "GitHub Sponsors",
    description: "Monthly or one-time support via GitHub",
    href: "https://github.com/sponsors/kevinchisholmja",
  },
  {
    label: "Patreon",
    description: "Support with a monthly membership",
    href: "https://patreon.com/kevinchisholmja",
  },
];

export default function SupportPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="mb-12 fade-up">
        <h1 className="text-3xl font-semibold text-ink tracking-tight">
          Support
        </h1>
        <p className="text-base text-muted mt-2">
          If my work has been useful to you, here are ways to support it.
        </p>
      </div>

      <div className="space-y-3 mb-10 fade-up" style={{ animationDelay: "0.08s" }}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-xl border border-line bg-surface hover:border-line-strong hover:-translate-y-0.5 transition-all duration-200"
          >
            <div>
              <p className="text-sm font-semibold text-ink group-hover:text-accent transition-colors duration-150">
                {link.label}
              </p>
              <p className="text-xs text-muted mt-0.5">{link.description}</p>
            </div>
            <span className="text-faint text-sm transition-transform duration-150 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        ))}
      </div>

      <div
        className="rounded-xl border border-line bg-surface p-5 fade-up"
        style={{ animationDelay: "0.16s" }}
      >
        <p className="text-xs font-medium text-faint uppercase tracking-widest mb-2">
          Bitcoin
        </p>
        <p className="font-mono text-sm text-ink break-all select-all">
          address-pending
        </p>
        <p className="text-xs text-faint mt-2">Tap to select, then copy</p>
      </div>
    </div>
  );
}
