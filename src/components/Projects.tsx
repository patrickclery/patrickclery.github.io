"use client";

import { useState } from "react";
import { ExternalLink, Terminal, BookOpen, Disc3, Play } from "lucide-react";

const projects = [
  {
    name: "ruly",
    description:
      "CLI tool for managing AI assistant rules and configurations. Define, organize, and share the rules that shape how AI assistants behave in your codebase.",
    tech: ["Ruby", "CLI", "AI Tooling"],
    url: "https://patrickclery.com/ruly/",
    highlight: "Vibe Coding Infrastructure",
    icon: Terminal,
    preview: "/images/ruly-preview.png",
    animated: "/images/ruly-demo.gif",
    demo: true,
  },
  {
    name: "awesomer",
    description:
      "Trending open-source tools from curated awesome lists — ranked by real GitHub stars. Updated daily.",
    tech: ["HTML", "Automation", "Open Source"],
    url: "https://patrickclery.com/awesomer/",
    highlight: "Open Source Curation",
    icon: BookOpen,
    preview: "/images/awesomer-preview.png",
    animated: "/images/awesomer-demo.gif",
    demo: false,
  },
  {
    name: "discogs-ai-importer",
    description:
      "Turns photos of CD and DVD shelves into Discogs collection entries. Claude reads every spine, crops it for review, and matches it to a Discogs release.",
    tech: ["Next.js", "TypeScript", "Claude Vision", "SQLite"],
    url: "https://patrickclery.com/discogs-ai-importer/",
    highlight: "AI Vision Tooling",
    icon: Disc3,
    preview: "/images/discogs-ai-importer-preview.png",
    demo: true,
  },
];

export function Projects() {
  // Animated previews play only while their card is hovered; swapping src restarts the GIF.
  const [hovered, setHovered] = useState<string | null>(null);
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
                onMouseEnter={() => {
                  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                    setHovered(project.name);
                  }
                }}
                onMouseLeave={() => setHovered(null)}
                className="group cursor-pointer rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden transition-colors duration-200 hover:border-[var(--color-accent)]"
              >
                {project.preview && (
                  <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-[var(--color-border)]">
                    <img
                      src={
                        hovered === project.name && "animated" in project
                          ? project.animated
                          : project.preview
                      }
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    {project.demo && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-bg)]">
                        <Play className="w-3 h-3 fill-current" />
                        Live Demo
                      </span>
                    )}
                  </div>
                )}
                <div className="p-6">
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
                  {project.demo && (
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
                      <Play className="w-4 h-4 fill-current" />
                      Try the interactive demo in your browser
                      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                    </span>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
