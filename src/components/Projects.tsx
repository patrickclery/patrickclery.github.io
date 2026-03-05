import { ExternalLink, Terminal, BookOpen } from "lucide-react";

const projects = [
  {
    name: "ruly",
    description:
      "CLI tool for managing AI assistant rules and configurations. Define, organize, and share the rules that shape how AI assistants behave in your codebase.",
    tech: ["Ruby", "CLI", "AI Tooling"],
    url: "https://github.com/patrickclery/ruly",
    highlight: "Vibe Coding Infrastructure",
    icon: Terminal,
  },
  {
    name: "awesomer",
    description:
      "Awesome lists sorted by stars and updated daily. Automated curation of the best open-source projects across the ecosystem.",
    tech: ["HTML", "Automation", "Open Source"],
    url: "https://github.com/patrickclery/awesomer",
    highlight: "Open Source Curation",
    icon: BookOpen,
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-[family-name:var(--font-archivo)] text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
          Open-source tools that bridge traditional engineering and AI-assisted
          development.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-200 hover:border-[var(--color-accent)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="font-[family-name:var(--font-archivo)] text-xl font-bold font-mono text-[var(--color-text)]">
                      {project.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-warm)]">
                  {project.highlight}
                </span>
                <p className="mt-3 text-[var(--color-text-muted)] leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded bg-[var(--color-bg)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
