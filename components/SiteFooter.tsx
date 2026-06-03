const socials = [
  { label: "GitHub", href: "https://github.com/kevinchisholmja" },
  { label: "Email", href: "mailto:kevinchisholmja@gmail.com" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-line/70 mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex items-center justify-between">
        <span className="text-xs text-faint">
          © {new Date().getFullYear()} Kevin Chisholm
        </span>
        <div className="flex items-center gap-5">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="link text-xs text-faint hover:text-ink transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
