import { Server, Layout, Cpu, Users } from "lucide-react";

const skillGroups = [
  {
    category: "Backend",
    icon: Server,
    skills: ["Ruby on Rails", "PostgreSQL", "Node.js", "NestJS", "Docker", "REST APIs"],
  },
  {
    category: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Storybook", "HTML/CSS"],
  },
  {
    category: "AI & Vibe Coding",
    icon: Cpu,
    skills: ["Claude Code", "Prompt Engineering", "AI-Assisted Dev", "ruly", "Cursor"],
  },
  {
    category: "Leadership",
    icon: Users,
    skills: ["Team Lead", "Code Reviews", "Pair Programming", "Mentoring", "SDLC Design"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-[family-name:var(--font-archivo)] text-3xl font-bold tracking-tight sm:text-4xl">
          Skills
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.category}>
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-4 h-4 text-[var(--color-accent-warm)]" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent-warm)]">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-[var(--color-text-muted)]">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
