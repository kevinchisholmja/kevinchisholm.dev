import Link from "next/link";
import BrowserWindow from "@/components/BrowserWindow";
import { getFeaturedProjects, getRecentPosts } from "@/lib/content";

export default function Home() {
  const featured = getFeaturedProjects();
  const recentPosts = getRecentPosts(3);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-20 sm:space-y-28">

      {/* Hero */}
      <section className="max-w-3xl fade-up">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-muted mb-6">
          <span className="relative flex h-2 w-2">
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for consulting work
        </span>

        <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-[1.1] tracking-tight">
          I build AI-powered tools that solve real problems.
        </h1>

        <p className="text-lg text-muted leading-relaxed mt-6 max-w-2xl">
          I&apos;m Kevin Chisholm — a builder who ships applications that use AI
          as a feature, not a gimmick. If you have a problem worth solving, I
          can help you build something that solves it.
        </p>

        <div className="flex items-center gap-5 mt-8">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 bg-ink text-canvas text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity duration-150"
          >
            See my work
            <span className="transition-transform duration-150 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
          <Link
            href="/consulting"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink transition-colors duration-150"
          >
            Work with me
            <span className="transition-transform duration-150 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      {featured.length > 0 && (
        <section className="fade-up" style={{ animationDelay: "0.08s" }}>
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-sm font-medium text-faint uppercase tracking-widest">
              Selected Work
            </h2>
            <Link
              href="/projects"
              className="link text-sm text-muted hover:text-accent transition-colors duration-150"
            >
              All projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {featured.map((project) => (
              <BrowserWindow key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Recent writing */}
      {recentPosts.length > 0 && (
        <section className="fade-up" style={{ animationDelay: "0.16s" }}>
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-sm font-medium text-faint uppercase tracking-widest">
              Writing
            </h2>
            <Link
              href="/writing"
              className="link text-sm text-muted hover:text-accent transition-colors duration-150"
            >
              All posts →
            </Link>
          </div>
          <div className="divide-y divide-line">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="group flex items-baseline justify-between py-4 gap-4"
              >
                <div className="min-w-0">
                  <p className="text-base font-medium text-ink group-hover:text-accent transition-colors duration-150 truncate">
                    {post.title}
                  </p>
                  <p className="text-sm text-muted mt-0.5 truncate">
                    {post.description}
                  </p>
                </div>
                <time className="text-xs text-faint tabular-nums shrink-0">
                  {post.date}
                </time>
              </Link>
            ))}
          </div>
        </section>
      )}

      {featured.length === 0 && recentPosts.length === 0 && (
        <section className="text-center py-16">
          <p className="text-sm text-faint">Content coming soon.</p>
        </section>
      )}
    </div>
  );
}
