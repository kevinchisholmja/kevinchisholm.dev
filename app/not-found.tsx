import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 sm:py-32 fade-up">
      <p className="text-sm font-medium text-faint uppercase tracking-widest mb-4">404</p>
      <h1 className="text-3xl font-semibold text-ink tracking-tight mb-3">
        Page not found
      </h1>
      <p className="text-base text-muted leading-relaxed mb-8">
        This page does not exist. It may have moved or the URL may be wrong.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80 transition-opacity duration-150"
      >
        ← Back to home
      </Link>
    </div>
  );
}
