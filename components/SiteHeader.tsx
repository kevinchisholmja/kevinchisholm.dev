"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "Consulting", href: "/consulting" },
  { label: "Support", href: "/support" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-canvas/70 backdrop-blur-md border-b border-line/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-sm sm:text-base font-semibold tracking-tight text-ink hover:text-accent transition-colors duration-150"
        >
          Kevin Chisholm
        </Link>

        <div className="flex items-center gap-0.5 sm:gap-1">
          <nav className="flex items-center">
            {nav.map(({ label, href }) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-2 sm:px-3 py-2 text-sm sm:text-[15px] transition-colors duration-150 ${
                    active
                      ? "text-ink font-medium"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute left-2 right-2 sm:left-3 sm:right-3 -bottom-px h-px bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>
          <span className="w-px h-5 bg-line mx-1 sm:mx-2" aria-hidden />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
