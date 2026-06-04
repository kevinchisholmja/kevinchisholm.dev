import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20 fade-up">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-ink leading-tight tracking-tight">
          {post.title}
        </h1>
        <time dateTime={post.date} className="block text-sm text-faint mt-3 tabular-nums">
          {post.date}
        </time>
      </header>

      <article
        className="prose prose-zinc dark:prose-invert max-w-none
          prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-ink
          prose-p:text-muted prose-p:leading-relaxed
          prose-li:text-muted
          prose-strong:text-ink
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-code:text-ink prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-elevated prose-pre:border prose-pre:border-line
          prose-blockquote:border-l-accent prose-blockquote:text-muted"
      >
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
