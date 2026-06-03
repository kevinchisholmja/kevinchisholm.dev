"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "Consulting", href: "/consulting" },
  { label: "Support", href: "/support" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return <SiteHeaderContent key={pathname} pathname={pathname} />;
}

function SiteHeaderContent({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-canvas/80 backdrop-blur-md border-b border-line/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-ink hover:text-accent transition-colors duration-150 shrink-0"
          >
            Kevin Chisholm
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-0.5">
            <nav className="flex items-center">
              {nav.map(({ label, href }) => {
                const active = pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`group/nav relative px-3 py-2 text-[15px] transition-colors duration-150 ${
                      active ? "text-ink font-medium" : "text-muted hover:text-ink"
                    }`}
                  >
                    {label}
                    {/* Hover underline — slides in from left, faint */}
                    {!active && (
                      <span className="absolute left-3 right-3 -bottom-px h-px bg-current opacity-0 scale-x-0 group-hover/nav:opacity-30 group-hover/nav:scale-x-100 transition-all duration-200 origin-left" />
                    )}
                    {/* Active underline — accent, always visible */}
                    {active && (
                      <span className="absolute left-3 right-3 -bottom-px h-px bg-accent" />
                    )}
                  </Link>
                );
              })}
            </nav>
            <span className="w-px h-5 bg-line mx-2" aria-hidden />
            <ThemeToggle />
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex items-center gap-1 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-muted hover:text-ink hover:bg-elevated transition-colors duration-150"
            >
              <span className="icon-enter" key={String(open)}>
                {open ? (
                  <X className="w-[18px] h-[18px]" strokeWidth={1.75} />
                ) : (
                  <Menu className="w-[18px] h-[18px]" strokeWidth={1.75} />
                )}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      {open && (
        <nav className="sm:hidden fixed inset-x-0 top-14 z-30 bg-canvas/95 backdrop-blur-md border-b border-line shadow-lg shadow-black/10">
          <div className="max-w-5xl mx-auto px-4 py-4 space-y-1">
            {nav.map(({ label, href }) => {
              const active = pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150 ${
                    active
                      ? "bg-elevated text-ink"
                      : "text-muted hover:text-ink hover:bg-elevated/60"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      )}

      {/* Backdrop when menu open */}
      {open && (
        <div
          className="sm:hidden fixed inset-0 z-20 bg-black/20 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}
    </>
  );
}
