import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "content");

// --- Types ---

export type ProjectFrontmatter = {
  title: string;
  description: string;
  status: "Prototype" | "In progress" | "Production" | "Archived";
  url?: string;
  repo?: string;
  featured?: boolean;
  stack?: string[];
  screenshot?: string;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  content: string;
};

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags?: string[];
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

// --- Projects ---

export function getAllProjects(): Project[] {
  const dir = path.join(contentRoot, "projects");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content } = matter(raw);
      const project = { slug, content, ...(data as ProjectFrontmatter) };

      // Only keep the screenshot if the file actually exists in public/screenshots.
      // This lets cards fall back to the placeholder until a real image is added.
      if (project.screenshot) {
        const screenshotPath = path.join(
          process.cwd(),
          "public",
          "screenshots",
          project.screenshot,
        );
        if (!fs.existsSync(screenshotPath)) {
          project.screenshot = undefined;
        }
      }

      return project;
    });
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

// --- Writing posts ---

export function getAllPosts(): Post[] {
  const dir = path.join(contentRoot, "writing");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content } = matter(raw);
      return { slug, content, ...(data as PostFrontmatter) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getRecentPosts(count = 3): Post[] {
  return getAllPosts().slice(0, count);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
