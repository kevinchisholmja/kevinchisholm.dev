import BrowserWindow from "@/components/BrowserWindow";
import { getAllProjects } from "@/lib/content";

export const metadata = {
  title: "Projects — Kevin Chisholm",
  description: "AI-powered tools and applications I have built.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="mb-12 fade-up">
        <h1 className="text-3xl font-semibold text-ink tracking-tight">
          Projects
        </h1>
        <p className="text-base text-muted mt-2">
          Things I have built. Status labels are honest.
        </p>
      </div>

      {projects.length > 0 ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 fade-up"
          style={{ animationDelay: "0.08s" }}
        >
          {projects.map((project, i) => (
            <BrowserWindow key={project.slug} project={project} priority={i === 0} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-faint">Projects coming soon.</p>
      )}
    </div>
  );
}
