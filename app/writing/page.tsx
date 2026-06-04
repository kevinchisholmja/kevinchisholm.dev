import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export const metadata = {
  title: "Writing",
  description: "Thoughts on building software, AI, and shipping products.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="mb-12 fade-up">
        <h1 className="text-3xl font-semibold text-ink tracking-tight">
          Writing
        </h1>
        <p className="text-base text-muted mt-2">
          Thoughts on building software, AI, and shipping products.
        </p>
      </div>

      {posts.length > 0 ? (
        <div
          className="divide-y divide-line fade-up"
          style={{ animationDelay: "0.08s" }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group flex items-baseline justify-between py-5 gap-4"
            >
              <div className="min-w-0">
                <p className="text-base font-medium text-ink group-hover:text-accent transition-colors duration-150">
                  {post.title}
                </p>
                <p className="text-sm text-muted mt-1">{post.description}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs text-faint">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <time dateTime={post.date} className="text-xs text-faint tabular-nums shrink-0">
                {post.date}
              </time>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-sm text-faint">Posts coming soon.</p>
      )}
    </div>
  );
}
