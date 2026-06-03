import Image from "next/image";
import type { Project } from "@/lib/content";

const statusStyles: Record<Project["status"], string> = {
  Production: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20",
  "In progress": "bg-blue-500/10 text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20",
  Prototype: "bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-1 ring-amber-500/20",
  Archived: "bg-zinc-500/10 text-faint ring-1 ring-zinc-500/20",
};

type Props = {
  project: Project;
};

export default function BrowserWindow({ project }: Props) {
  const href = project.url ?? project.repo ?? "#";
  const domain = project.url
    ? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : project.title.toLowerCase().replace(/\s+/g, "-") + ".app";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-line bg-surface overflow-hidden transition-all duration-300 hover:border-line-strong hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40"
    >
      {/* Browser chrome */}
      <div className="bg-elevated px-3 py-2.5 flex items-center gap-2 border-b border-line">
        <span className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="flex-1 bg-canvas/60 rounded-md text-xs font-mono text-faint px-2.5 py-1 ml-1 truncate">
          {domain}
        </span>
      </div>

      {/* Screenshot area */}
      <div className="aspect-video bg-elevated overflow-hidden relative">
        {project.screenshot ? (
          <Image
            src={`/screenshots/${project.screenshot}`}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-sm font-mono text-faint/60">
              {project.title}
            </span>
          </div>
        )}
      </div>

      {/* Card footer */}
      <div className="px-4 py-3.5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink group-hover:text-accent transition-colors duration-150">
            {project.title}
          </p>
          <p className="text-xs text-muted mt-1 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
        <span
          className={`shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      {/* Stack tags */}
      {project.stack && project.stack.length > 0 && (
        <div className="px-4 pb-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] text-faint bg-elevated px-2 py-0.5 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
